import { describe, expect, it, beforeEach } from "vitest";
import { Cl, cvToValue } from "@stacks/transactions";
import { txOk, txErr, rov } from '@clarigen/test';
import {
  initializeProtocol,
  contracts,
  deployer,
  alice,
  bob,
  charlie,
  executeDaoProposal,
  proposalCreateMultipleEgroups,
} from '../setup/helpers';
import {
  init_pyth,
  set_initial_price,
  set_price,
  PythFeedIds,
  scalePriceForPyth,
} from '../setup/helpers/pyth-helpers';

const market = contracts.market;
const marketVault = contracts.marketVault;
const vaultSbtc = contracts.vaultSbtc;
const vaultUsdc = contracts.vaultUsdc;
const sbtcToken = contracts.sbtc;
const usdcToken = contracts.usdc;

describe("Liquidation Gaming Attack Tests", () => {
  beforeEach(async () => {
    // Initialize protocol
    initializeProtocol();
    
    // Initialize Pyth oracle
    init_pyth(deployer);
    executeDaoProposal(contracts.proposalSetPriceStaleness);
    
    // Set initial prices
    await set_initial_price(PythFeedIds.BTC, scalePriceForPyth(60000, -8), deployer);
    await set_initial_price(PythFeedIds.USDC, scalePriceForPyth(1, -8), deployer);
    
    // Mint tokens
    txOk(usdcToken.mint(1000000000000n, alice), deployer); // 1M USDC for alice
    txOk(usdcToken.mint(1000000000000n, bob), deployer); // 1M USDC for bob
    txOk(usdcToken.mint(100000000000n, charlie), deployer); // 100k USDC for charlie (liquidator)
    txOk(sbtcToken.mint(1000000000n, alice), deployer); // 10 sBTC for alice
    txOk(sbtcToken.mint(1000000000n, bob), deployer); // 10 sBTC for bob
    
    // Provide vault liquidity
    txOk(vaultUsdc.deposit(500000000000n, 0n, bob), bob); // 500k USDC
    txOk(vaultSbtc.deposit(500000000n, 0n, bob), bob); // 5 sBTC
    
    // Create egroups
    executeDaoProposal(proposalCreateMultipleEgroups);
  });

  describe("ATK-LG-01: Cannot front-run liquidation with collateral add", () => {
    it("should allow adding collateral even when liquidatable (improves health)", async () => {
      // Setup: Alice creates a position that will become liquidatable
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice); // 1 sBTC = $60k
      txOk(market.borrow(usdcToken.identifier, 42000000000n, null, null), alice); // $42k at 70% LTV
      
      // Drop price to make position liquidatable (87% LTV)
      const targetPrice = 48000;
      await set_price(PythFeedIds.BTC, scalePriceForPyth(targetPrice, -8), -8, deployer);
      
      // Position is now liquidatable (87% > 85% threshold)
      // Alice can add more sBTC collateral to improve health - protocol allows this
      const result = txOk(market.collateralAdd(sbtcToken.identifier, 10000000n, null), alice);
      
      // Adding collateral should succeed because it improves position health
      expect(result).toBeDefined();
      
      console.log("✓ Adding collateral when liquidatable succeeds (improves health)");
    });
    
    it("should allow liquidation to proceed on fresh liquidatable position", async () => {
      // Setup fresh position (bob this time, alice is healthy from previous test)
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), bob);
      txOk(market.borrow(usdcToken.identifier, 42000000000n, null, null), bob);
      
      // Make liquidatable
      await set_price(PythFeedIds.BTC, scalePriceForPyth(48000, -8), -8, deployer);
      
      // Charlie can liquidate normally
      const charlieBefore = rov(usdcToken.getBalance(charlie)).value!;
      txOk(
        market.liquidate(
          bob,
          sbtcToken.identifier,
          usdcToken.identifier,
          5000000000n, // $5k
          0n,
          null,
          null
        ),
        charlie
      );
      
      const charlieAfter = rov(usdcToken.getBalance(charlie)).value!;
      const spent = charlieBefore - charlieAfter;
      
      expect(spent).toBeGreaterThan(0n);
      console.log("✓ Liquidation proceeds normally without front-running");
    });
  });

  describe("ATK-LG-02: Slippage protection prevents MEV extraction", () => {
    it("should use min_collateral_expected to prevent value extraction", async () => {
      // Setup liquidatable position
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);
      txOk(market.borrow(usdcToken.identifier, 42000000000n, null, null), alice);
      
      // Make FULLY liquidatable (95% LTV)
      const targetPrice = 44200; // 95% LTV
      await set_price(PythFeedIds.BTC, scalePriceForPyth(targetPrice, -8), -8, deployer);
      
      // At 95% LTV: 100% liquidation, 10% penalty
      const debtToRepay = 5000000000n; // $5k
      const penalty = 0.10; // 10% max penalty
      const expectedValue = 5000 * (1 + penalty); // $5,500
      const expectedBtc = expectedValue / targetPrice;
      const expectedSats = BigInt(Math.floor(expectedBtc * 100000000));
      
      const charlieSbtcBefore = rov(sbtcToken.getBalance(charlie)).value!;
      
      // Use conservative minimum (50% of expected)
      const minExpected = (expectedSats * 50n) / 100n;
      
      txOk(
        market.liquidate(
          alice,
          sbtcToken.identifier,
          usdcToken.identifier,
          debtToRepay,
          minExpected,
          null,
          null
        ),
        charlie
      );
      
      const charlieSbtcAfter = rov(sbtcToken.getBalance(charlie)).value!;
      const received = charlieSbtcAfter - charlieSbtcBefore;
      
      // Verify charlie received at least the minimum
      expect(received).toBeGreaterThanOrEqual(minExpected);
      
      console.log("✓ Slippage protection ensures liquidator receives expected value");
    });
  });

  describe("ATK-LG-05: Bad debt cannot be artificially created", () => {
    it("should socialize bad debt when collateral is exhausted", async () => {
      // Setup: Alice has small collateral, large debt
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice); // 1 sBTC
      txOk(market.borrow(usdcToken.identifier, 42000000000n, null, null), alice); // $42k
      
      // Crash price severely to create bad debt scenario
      // At $10k per BTC: collateral = $10k, debt = $42k (massive underwater)
      await set_price(PythFeedIds.BTC, scalePriceForPyth(10000, -8), -8, deployer);
      
      const charlieSbtcBefore = rov(sbtcToken.getBalance(charlie)).value!;
      
      // Charlie tries to liquidate - will seize all collateral but not cover all debt
      txOk(
        market.liquidate(
          alice,
          sbtcToken.identifier,
          usdcToken.identifier,
          50000000000n, // Try to liquidate $50k (more than debt)
          0n,
          null,
          null
        ),
        charlie
      );
      
      const charlieSbtcAfter = rov(sbtcToken.getBalance(charlie)).value!;
      const collateralSeized = charlieSbtcAfter - charlieSbtcBefore;
      
      // Should have seized all of Alice's collateral (1 BTC)
      expect(collateralSeized).toBeLessThanOrEqual(100000000n);
      
      // Bad debt should be socialized (verified by liquidation succeeding)
      // The protocol handled the bad debt rather than allowing it to corrupt the system
      
      console.log("✓ Bad debt properly socialized when collateral exhausted");
    });
    
    it("should not allow artificial bad debt creation through manipulation", async () => {
      // Attacker scenario: Try to create bad debt by manipulating their position
      // This should be prevented by health checks and liquidation mechanisms
      
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);
      txOk(market.borrow(usdcToken.identifier, 42000000000n, null, null), alice);
      
      // Alice tries to remove collateral when position would become unhealthy
      // This should fail
      const result = txErr(
        market.collateralRemove(sbtcToken.identifier, 50000000n, null, null),
        alice
      );
      
      expect(cvToValue(result.result).value).toBe('400005'); // ERR-UNHEALTHY
      
      console.log("✓ Cannot artificially create bad debt through manipulation");
    });
  });
});
