import { describe, expect, it, beforeEach } from "vitest";
import { Cl, cvToValue } from "@stacks/transactions";
import { txOk, txErr, rov } from '@clarigen/test';
import { EGROUP_MASKS, getCollateralBitMask } from '../assetConfig';
import {
  initializeProtocol,
  contracts,
  deployer,
  alice,
  bob,
  executeDaoProposal,
  proposalCreateMultipleEgroups,
} from '../setup/helpers';
import {
  init_pyth,
  set_initial_price,
  PythFeedIds,
  scalePriceForPyth,
} from '../setup/helpers/pyth-helpers';

const market = contracts.market;
const marketVault = contracts.marketVault;
const vaultSbtc = contracts.vaultSbtc;
const vaultUsdc = contracts.vaultUsdc;
const vaultUsdh = contracts.vaultUsdh;
const egroupContract = contracts.egroup;

describe("Egroup Tests", () => {
  beforeEach(async () => {
    // Initialize protocol with default setup
    initializeProtocol();
    
    // Initialize Pyth oracle
    init_pyth(deployer);
    executeDaoProposal(contracts.proposalSetPriceStaleness);
    
    // Set initial prices
    await set_initial_price(PythFeedIds.BTC, scalePriceForPyth(60000, -8), deployer);
    await set_initial_price(PythFeedIds.USDC, scalePriceForPyth(1, -8), deployer);
    await set_initial_price(PythFeedIds.STX, scalePriceForPyth(2, -8), deployer);
    
    // Mint tokens to test users
    txOk(contracts.usdc.mint(100000000000n, alice), deployer); // 100k USDC
    txOk(contracts.usdc.mint(100000000000n, bob), deployer);
    txOk(contracts.sbtc.mint(1000000000n, alice), deployer); // 10 sBTC
    txOk(contracts.sbtc.mint(1000000000n, bob), deployer);
    txOk(contracts.usdh.mint(100000000000n, alice), deployer); // 100k USDH
    txOk(contracts.usdh.mint(100000000000n, bob), deployer); // 100k USDH for bob too
    
    // Provide vault liquidity (bob as LP)
    txOk(vaultUsdc.deposit(50000000000n, 0n, bob), bob); // 50k USDC
    txOk(vaultSbtc.deposit(500000000n, 0n, bob), bob); // 5 sBTC
    txOk(vaultUsdh.deposit(50000000000n, 0n, bob), bob); // 50k USDH
    
    // Create standard egroups via DAO proposal
    executeDaoProposal(proposalCreateMultipleEgroups);
  });

  describe("EG-01: Cannot add dust collateral to worsen egroup", () => {
    it("should prevent harmful egroup transitions via capacity check", async () => {
      // Actual egroups from proposalCreateMultipleEgroups:
      // Egroup 1: sBTC collateral + USDC debt = 70% LTV
      // Egroup 10: sBTC+USDC collateral + USDC debt = 60% LTV (superset, lower LTV)
      
      // Alice adds sBTC collateral and borrows USDC (uses 70% LTV egroup)
      txOk(market.collateralAdd(contracts.sbtc.identifier, 100000000n, null), alice); // 1 sBTC = $60k
      
      // Alice borrows max at 70% LTV = $42k USDC
      txOk(market.borrow(contracts.usdc.identifier, 42000000000n, null, null), alice);
      
      // Verify alice is using sBTC+USDC-debt egroup
      const positionResult = rov(marketVault.getPosition(alice, 0xffffffffffffffffn));
      expect(positionResult.isOk).toBe(true);
      if (typeof positionResult.value === 'bigint') {
        throw new Error(`Failed to get position. Error: ${positionResult.value}`);
      }
      expect(positionResult.value.mask).toBe(EGROUP_MASKS.sbtc_usdc); // sBTC collateral + USDC debt
      
      // Attack: Try to add 1 USDC (dust) to switch to sBTC+USDC collateral egroup
      // This would transition to 60% LTV, making position unhealthy
      // Current capacity: $60k * 70% = $42k
      // Future capacity: $60k * 60% = $36k < $42k (violates!)
      const result = txErr(market.collateralAdd(contracts.usdc.identifier, 1000000n, null), alice);
      
      // Should fail with ERR-UNHEALTHY (400005)
      expect(cvToValue(result.result).value).toBe('400005');
      
      console.log("✓ Dust collateral attack blocked: Cannot transition to lower LTV superset");
    });
    
    it("should allow adding collateral if capacity is maintained", async () => {
      // Alice adds sBTC and borrows at a safe level
      txOk(market.collateralAdd(contracts.sbtc.identifier, 100000000n, null), alice);
      txOk(market.borrow(contracts.usdc.identifier, 30000000000n, null, null), alice); // $30k at 50% LTV
      
      // Add significant USDC collateral - should work because:
      // Current: $60k * 70% = $42k capacity
      // Future: ($60k + $12k) * 60% = $43.2k capacity ≥ $42k (passes!)
      txOk(market.collateralAdd(contracts.usdc.identifier, 12000000000n, null), alice); // 12k USDC
      
      console.log("✓ Collateral addition allowed when capacity is maintained");
    });
  });

  describe("EG-02: Cannot self-liquidate via egroup transition", () => {
    it("should prevent egroup transition that makes position liquidatable", async () => {
      // Alice creates position at high but safe LTV with 70% egroup
      txOk(market.collateralAdd(contracts.sbtc.identifier, 100000000n, null), alice); // 1 sBTC = $60k
      txOk(market.borrow(contracts.usdc.identifier, 41000000000n, null, null), alice); // $41k at 68% LTV
      
      // Position is healthy (68% < 70% borrow threshold, < 85% liquidation threshold)
      // But adding USDC would transition to 60% LTV egroup, making it unhealthy
      
      // Attack: Try to add dust USDC
      const result = txErr(market.collateralAdd(contracts.usdc.identifier, 1000000n, null), alice);
      
      // Should fail because capacity check prevents harmful transitions
      // Current capacity: $60k * 70% = $42k
      // Future capacity: $60k * 60% = $36k < $41k (violates)
      expect(cvToValue(result.result).value).toBe('400005'); // ERR-UNHEALTHY
      
      console.log("✓ Self-liquidation via egroup transition blocked");
    });
  });

  describe("EG-03: Capacity check prevents harmful collateral additions", () => {
    it("should verify capacity formula: future_coll × future_ltv ≥ current_coll × current_ltv", async () => {
      // Alice: 1 sBTC ($60k) at 70% LTV
      txOk(market.collateralAdd(contracts.sbtc.identifier, 100000000n, null), alice);
      txOk(market.borrow(contracts.usdc.identifier, 42000000000n, null, null), alice); // Max borrow $42k
      
      // Current: $60k * 70% = $42k
      // Try adding $1k USDC → Future: ($60k + $1k) * 60% = $36.6k
      // $36.6k < $42k → FAILS capacity check
      const result1 = txErr(market.collateralAdd(contracts.usdc.identifier, 1000000000n, null), alice);
      expect(cvToValue(result1.result).value).toBe('400005');
      
      // But adding $12k USDC → Future: ($60k + $12k) * 60% = $43.2k
      // $43.2k > $42k → PASSES capacity check
      txOk(market.collateralAdd(contracts.usdc.identifier, 12000000000n, null), alice);
      
      console.log("✓ Capacity formula correctly enforced");
    });
    
    it("should handle capacity check with price changes", async () => {
      // Alice: 1 sBTC at $60k, borrows max
      txOk(market.collateralAdd(contracts.sbtc.identifier, 100000000n, null), alice);
      txOk(market.borrow(contracts.usdc.identifier, 42000000000n, null, null), alice);
      
      // Price drops: sBTC → $55k
      await set_initial_price(PythFeedIds.BTC, scalePriceForPyth(55000, -8), deployer);
      
      // Capacity now: $55k * 70% = $38.5k but debt is $42k (underwater)
      // Position is unhealthy even without transition
      
      // Try to add USDC - should fail because position is already unhealthy
      const result = txErr(market.collateralAdd(contracts.usdc.identifier, 1000000000n, null), alice);
      expect(cvToValue(result.result).value).toBe('400005'); // ERR-UNHEALTHY
      
      console.log("✓ Capacity check works correctly with price volatility");
    });
  });

  describe("EG-04: Cannot exploit subset matching for higher LTV", () => {
    it("should find most specific egroup (smallest superset) via bucket resolution", async () => {
      // Actual egroups:
      // - sBTC coll + USDC debt: 70% LTV
      // - sBTC+USDC coll + USDC debt: 60% LTV
      
      // Test 1: sBTC collateral + USDC debt uses 70% LTV egroup
      txOk(market.collateralAdd(contracts.sbtc.identifier, 100000000n, null), alice);
      let positionResult = rov(marketVault.getPosition(alice, 0xffffffffffffffffn));
      expect(positionResult.isOk).toBe(true);
      if (typeof positionResult.value === 'bigint') {
        throw new Error(`Failed to get position. Error: ${positionResult.value}`);
      }
      expect(positionResult.value.mask).toBe(getCollateralBitMask('sbtc')); // sBTC collateral only (no debt yet)
      
      // Can borrow up to 70% LTV
      txOk(market.borrow(contracts.usdc.identifier, 42000000000n, null, null), alice); // 70% of $60k
      
      // Repay for next test
      txOk(market.repay(contracts.usdc.identifier, 42000000000n, null), alice);
      
      // Test 2: Add USDC collateral → should use sBTC+USDC coll egroup (60%)
      txOk(market.collateralAdd(contracts.usdc.identifier, 10000000000n, null), alice);
      positionResult = rov(marketVault.getPosition(alice, 0xffffffffffffffffn));
      expect(positionResult.isOk).toBe(true);
      if (typeof positionResult.value === 'bigint') {
        throw new Error(`Failed to get position. Error: ${positionResult.value}`);
      }
      expect(positionResult.value.mask).toBe(68n); // bits 2,6 = sBTC+USDC collateral (2^2 + 2^6 = 68)
      
      // Can only borrow 60% now (most specific superset)
      txOk(market.borrow(contracts.usdc.identifier, 42000000000n, null, null), alice); // 60% of $70k
      
      console.log("✓ Bucket resolution correctly finds most specific egroup");
    });
  });

  describe("EG-05: Superset invariant prevents LTV inconsistencies", () => {
    it("should use existing egroups that respect superset invariant", async () => {
      // The standard egroups from proposalCreateMultipleEgroups enforce
      // the superset invariant: more collateral types = lower (or equal) LTV
      
      // sBTC coll + USDC debt: 70% LTV
      // sBTC+USDC coll + USDC debt: 60% LTV (superset has lower LTV ✓)
      
      // Test 1: sBTC collateral at 70%
      txOk(market.collateralAdd(contracts.sbtc.identifier, 100000000n, null), alice);
      txOk(market.borrow(contracts.usdc.identifier, 42000000000n, null, null), alice); // 70% works
      
      // Verify position
      const position1Result = rov(marketVault.getPosition(alice, 0xffffffffffffffffn));
      expect(position1Result.isOk).toBe(true);
      if (typeof position1Result.value === 'bigint') {
        throw new Error(`Failed to get position. Error: ${position1Result.value}`);
      }
      expect(position1Result.value.mask).toBe(EGROUP_MASKS.sbtc_usdc); // sBTC coll + USDC debt
      
      // Repay
      txOk(market.repay(contracts.usdc.identifier, 42000000000n, null), alice);
      
      // Test 2: With sBTC+USDC collateral, max is 60%
      txOk(market.collateralAdd(contracts.usdc.identifier, 10000000000n, null), alice);
      
      // Try to borrow 70% of total collateral ($70k) = $49k
      const result = txErr(market.borrow(contracts.usdc.identifier, 49000000000n, null, null), alice);
      expect(cvToValue(result.result).value).toBe('400005'); // ERR-UNHEALTHY (exceeds 60%)
      
      // But 60% works: $70k * 0.60 = $42k
      txOk(market.borrow(contracts.usdc.identifier, 42000000000n, null, null), alice);
      
      console.log("✓ Due to superset invariant: more collateral / debt types than previous group = always lower LTV");
    });
    
    it("should verify egroup lookup returns valid parameters", () => {
      // Verify first egroup (ID 0) has valid structure
      const egroupData = rov(egroupContract.lookup(0n));
      
      // Check that all required fields exist
      expect(egroupData.MASK).toBeDefined();
      expect(egroupData.lTVBORROW).toBeDefined();
      expect(egroupData.lTVLIQPARTIAL).toBeDefined();
      expect(egroupData.lTVLIQFULL).toBeDefined();
      expect(egroupData.lIQPENALTYMIN).toBeDefined();
      expect(egroupData.lIQPENALTYMAX).toBeDefined();
      
      console.log("✓ Egroup structure validated");
    });
  });
});
