/**
 * Authorization Bypass Tests (AUTH-*)
 * 
 * Tests that verify authorization controls cannot be bypassed.
 * Only authorized contracts/principals can call sensitive functions.
 * 
 * Test IDs: AUTH-01 through AUTH-09
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { txOk, txErr, rov } from '@clarigen/test';
import {
  initializeProtocol,
  contracts,
  deployer,
  alice,
  bob,
  vaultUsdc,
  vaultSbtc,
  vaultStx,
  marketVault,
  market,
  assets,
  egroup,
  errors,
  executeDaoProposal,
  proposalCreateMultipleEgroups,
} from '../setup/helpers';
import { ASSET_IDS } from '../assetConfig';
import {
  init_pyth,
  set_initial_price,
  PythFeedIds,
  scalePriceForPyth,
} from '../setup/helpers/pyth-helpers';

describe('Authorization Bypass Tests (AUTH-*)', () => {
  beforeEach(async () => {
    // Initialize protocol with all assets, vaults, and market-vault
    initializeProtocol();
    
    // Initialize Pyth for price feeds
    init_pyth(deployer);
    executeDaoProposal(contracts.proposalSetPriceStaleness);
    
    // Set prices for assets
    await set_initial_price(PythFeedIds.BTC, scalePriceForPyth(60000, -8), deployer);
    await set_initial_price(PythFeedIds.USDC, scalePriceForPyth(1, -8), deployer);
    await set_initial_price(PythFeedIds.STX, scalePriceForPyth(2, -8), deployer);
    
    // Mint tokens to alice and bob for testing
    txOk(contracts.usdc.mint(100000000n, alice), deployer);
    txOk(contracts.usdc.mint(1000000000000n, bob), deployer); // Bob needs lots for vault liquidity
    txOk(contracts.sbtc.mint(1000000000n, alice), deployer);
    txOk(contracts.sbtc.mint(1000000000n, bob), deployer);
    
    // Supply vault liquidity so market.borrow can work
    txOk(vaultUsdc.deposit(1000000000000n, 0n, bob), bob);
    txOk(vaultSbtc.deposit(1000000000n, 0n, bob), bob);
    
    // Create egroups via DAO proposal so market operations can work
    executeDaoProposal(proposalCreateMultipleEgroups, deployer);
  });

  describe('AUTH-01: Non-market cannot call system-borrow', () => {
    it('should reject system-borrow from unauthorized caller (alice)', () => {
      // Alice tries to call system-borrow directly on vault-usdc
      // This should fail because alice is not an authorized contract
      const result = txErr(
        vaultUsdc.systemBorrow(1000000n, alice),
        alice
      );
      
      // Expect ERR-AUTH (u803001 for vault-usdc)
      expect(result.value).toBe(803001n);
    });

    it('should reject system-borrow from deployer (not authorized)', () => {
      // Deployer tries to call system-borrow directly
      // Even deployer is not authorized unless explicitly set
      const result = txErr(
        vaultUsdc.systemBorrow(1000000n, deployer),
        deployer
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject system-borrow on vault-sbtc from unauthorized caller', () => {
      const result = txErr(
        vaultSbtc.systemBorrow(100000000n, alice),
        alice
      );
      
      // ERR-AUTH for vault-sbtc (u801001)
      expect(result.value).toBe(801001n);
    });

    it('should reject system-borrow on vault-stx from unauthorized caller', () => {
      const result = txErr(
        vaultStx.systemBorrow(1000000n, alice),
        alice
      );
      
      // ERR-AUTH for vault-stx (u800001)
      expect(result.value).toBe(800001n);
    });
  });

  describe('AUTH-02: Non-market cannot call system-repay', () => {
    it('should reject system-repay from unauthorized caller (alice)', () => {
      // Setup: Create actual debt via authorized path
      // 1. Alice deposits to vault
      txOk(vaultUsdc.deposit(10000000n, 0n, alice), alice);
      
      // 2. Alice adds collateral and borrows via market (authorized path)
      txOk(market.collateralAdd(contracts.usdc.identifier, 5000000n, null), alice);
      txOk(market.borrow(contracts.usdc.identifier, 1000000n, null, null), alice);
      
      // Now test: Alice tries to call system-repay directly (bypassing market)
      const result = txErr(
        vaultUsdc.systemRepay(100000n),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject system-repay from bob', () => {
      // Setup: Create debt for alice via authorized path (bob has no tokens left)
      txOk(vaultUsdc.deposit(10000000n, 0n, alice), alice);
      txOk(market.collateralAdd(contracts.usdc.identifier, 5000000n, null), alice);
      txOk(market.borrow(contracts.usdc.identifier, 500000n, null, null), alice);
      
      // Test: Bob tries to directly call system-repay on alice's debt
      const result = txErr(
        vaultUsdc.systemRepay(100000n),
        bob
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject system-repay on vault-usdc from unauthorized caller (different scenario)', () => {
      // Setup: Create debt via authorized path using sBTC collateral
      txOk(vaultSbtc.deposit(100000000n, 0n, alice), alice);
      txOk(market.collateralAdd(contracts.sbtc.identifier, 50000000n, null), alice);
      // Borrow USDC against sBTC collateral (egroup exists for this pair)
      txOk(market.borrow(contracts.usdc.identifier, 10000000n, null, null), alice);
      
      // Test: Alice tries to directly call system-repay on USDC vault (where debt exists)
      const result = txErr(
        vaultUsdc.systemRepay(1000000n),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });
  });

  describe('AUTH-03: Non-market cannot call socialize-debt', () => {
    it('should reject socialize-debt from unauthorized caller (alice)', () => {
      const result = txErr(
        vaultUsdc.socializeDebt(1000000n),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject socialize-debt from deployer', () => {
      // Even deployer cannot call socialize-debt unless through authorized contract
      const result = txErr(
        vaultUsdc.socializeDebt(500000n),
        deployer
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject socialize-debt on vault-sbtc from unauthorized caller', () => {
      const result = txErr(
        vaultSbtc.socializeDebt(10000000n),
        bob
      );
      
      expect(result.value).toBe(801001n);
    });
  });

  describe('AUTH-04: Non-market cannot update market-vault obligations', () => {
    it('should reject collateral-add from non-impl caller', () => {
      // Alice tries to directly add collateral via market-vault
      // This bypasses the market contract's health checks
      const result = txErr(
        marketVault.collateralAdd(
          alice,
          1000000n,
          contracts.usdc.identifier,
          ASSET_IDS.usdc
        ),
        alice
      );
      
      // ERR-AUTH for market-vault (u600001)
      expect(result.value).toBe(600001n);
    });

    it('should reject collateral-remove from non-impl caller', () => {
      // Setup: Create a position with collateral via authorized path (market)
      txOk(market.collateralAdd(contracts.usdc.identifier, 5000000n, null), alice);
      
      // Test: Alice tries to remove collateral directly via market-vault (bypassing market)
      const result = txErr(
        marketVault.collateralRemove(
          alice,
          1000000n,
          contracts.usdc.identifier,
          ASSET_IDS.usdc,
          alice
        ),
        alice
      );
      
      expect(result.value).toBe(600001n); // ERR-AUTH (auth checked first, before balance)
    });

    it('should reject debt-add-scaled from non-impl caller', () => {
      // Attacker tries to add debt directly without going through market
      const result = txErr(
        marketVault.debtAddScaled(alice, 1000000n, ASSET_IDS.usdc),
        alice
      );
      
      expect(result.value).toBe(600001n);
    });

    it('should reject debt-remove-scaled from non-impl caller', () => {
      // Setup: Create position with debt via authorized path (use alice, bob has no tokens)
      txOk(vaultUsdc.deposit(10000000n, 0n, alice), alice);
      txOk(market.collateralAdd(contracts.usdc.identifier, 5000000n, null), alice);
      txOk(market.borrow(contracts.usdc.identifier, 1000000n, null, null), alice);
      
      // Test: Bob tries to remove alice's debt directly via market-vault (bypassing market)
      const result = txErr(
        marketVault.debtRemoveScaled(alice, 100000n, ASSET_IDS.usdc),
        bob
      );
      
      expect(result.value).toBe(600001n); // ERR-AUTH (auth checked first, before balance)
    });

    it('should reject even deployer from directly updating obligations', () => {
      // Deployer is not the impl, so should also be rejected
      const result = txErr(
        marketVault.collateralAdd(
          deployer,
          1000000n,
          contracts.usdc.identifier,
          ASSET_IDS.usdc
        ),
        deployer
      );
      
      expect(result.value).toBe(600001n);
    });
  });

  describe('AUTH-05: Non-DAO cannot change vault caps', () => {
    it('should reject set-cap-debt from non-DAO caller', () => {
      const result = txErr(
        vaultUsdc.setCapDebt(1000000000n),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject set-cap-supply from non-DAO caller', () => {
      const result = txErr(
        vaultUsdc.setCapSupply(1000000000n),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject set-cap-debt on vault-sbtc from non-DAO', () => {
      const result = txErr(
        vaultSbtc.setCapDebt(10000000000n),
        bob
      );
      
      expect(result.value).toBe(801001n);
    });

    it('should reject deployer from setting caps directly', () => {
      // Deployer must go through DAO proposal, not direct call
      const result = txErr(
        vaultUsdc.setCapDebt(5000000000n),
        deployer
      );
      
      expect(result.value).toBe(803001n);
    });
  });

  describe('AUTH-06: Non-DAO cannot pause/unpause', () => {
    it('should reject set-pause-states on vault from non-DAO', () => {
      const result = txErr(
        vaultUsdc.setPauseStates({
          deposit: true,
          redeem: true,
          borrow: true,
          repay: true,
          accrue: true,
          flashloan: true
        }),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject set-pause-states on market-vault from non-DAO', () => {
      const result = txErr(
        marketVault.setPauseStates({
          collateralAdd: true,
          collateralRemove: true,
          debtAdd: true,
          debtRemove: true
        }),
        alice
      );
      
      expect(result.value).toBe(600001n);
    });

    it('should reject deployer from pausing directly', () => {
      const result = txErr(
        vaultUsdc.setPauseStates({
          deposit: true,
          redeem: false,
          borrow: false,
          repay: false,
          accrue: false,
          flashloan: false
        }),
        deployer
      );
      
      expect(result.value).toBe(803001n);
    });
  });

  describe('AUTH-07: Non-DAO cannot modify asset registry', () => {
    it('should reject insert from non-DAO caller', () => {
      // Alice tries to insert a new asset directly
      const result = txErr(
        assets.insert(
          contracts.vaultUsdc.identifier,
          {
            type: new Uint8Array([0x00]),
            ident: new Uint8Array(32).fill(0x01),
            callcode: null,
            maxStaleness: 3600n
          }
        ),
        alice
      );
      
      // ERR-AUTH for assets registry (u710001)
      expect(result.value).toBe(710001n);
    });

    it('should reject enable collateral from non-DAO', () => {
      // assets.enable(asset, collateral: bool) - true for collateral
      const result = txErr(
        assets.enable(contracts.wstx.identifier, true),
        alice
      );
      
      expect(result.value).toBe(710001n);
    });

    it('should reject disable collateral from non-DAO', () => {
      const result = txErr(
        assets.disable(contracts.wstx.identifier, true),
        bob
      );
      
      expect(result.value).toBe(710001n);
    });

    it('should reject enable debt from non-DAO', () => {
      // assets.enable(asset, collateral: bool) - false for debt
      const result = txErr(
        assets.enable(contracts.usdc.identifier, false),
        alice
      );
      
      expect(result.value).toBe(710001n);
    });

    it('should reject disable debt from non-DAO', () => {
      const result = txErr(
        assets.disable(contracts.usdc.identifier, false),
        deployer // Even deployer cannot bypass DAO
      );
      
      expect(result.value).toBe(710001n);
    });
  });

  describe('AUTH-08: Collateral-remove implicit auth (contract-caller protection)', () => {
    it('should prevent User B from removing User A collateral', async () => {
      // Setup: Alice adds collateral
      txOk(market.collateralAdd(contracts.sbtc.identifier, 100000000n, null), alice);

      // Verify Alice has collateral
      const alicePositionBefore = rov(marketVault.resolve(alice));
      const aliceCollateral = rov(marketVault.getCollateral(alicePositionBefore.id, ASSET_IDS.sbtc));
      expect(aliceCollateral).toBe(100000000n);

      // Bob tries to remove Alice's collateral via market.collateral-remove
      // Since account = contract-caller, Bob can only affect Bob's position (which is empty)
      const result = txErr(
        market.collateralRemove(contracts.sbtc.identifier, 100000000n, null, null),
        bob
      );

      // Should fail - Bob has no collateral to remove (his position is empty/non-existent)
      // ERR-AMOUNT-EXCEEDS or position not found
      expect(result.value).not.toBe(undefined);

      // Verify Alice's collateral is unchanged
      const alicePositionAfter = rov(marketVault.resolve(alice));
      const aliceCollateralAfter = rov(marketVault.getCollateral(alicePositionAfter.id, ASSET_IDS.sbtc));
      expect(aliceCollateralAfter).toBe(100000000n);
    });
  });

  describe('Additional authorization edge cases', () => {
    it('should reject set-impl on market-vault from non-DAO', () => {
      // Attacker tries to set themselves as the impl
      const result = txErr(
        marketVault.setImpl(alice),
        alice
      );
      
      expect(result.value).toBe(600001n);
    });

    it('should reject set-authorized-contract on vault from non-DAO', () => {
      // Attacker tries to authorize a malicious contract
      const result = txErr(
        vaultUsdc.setAuthorizedContract(alice, true),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject fee configuration from non-DAO', () => {
      const result = txErr(
        vaultUsdc.setFeeFlash(100n),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });

    it('should reject interest rate configuration from non-DAO', () => {
      const result = txErr(
        vaultUsdc.setPointsUtil([0n, 2000n, 4000n, 6000n, 8000n, 9000n, 9500n, 10000n]),
        alice
      );
      
      expect(result.value).toBe(803001n);
    });
  });
});
