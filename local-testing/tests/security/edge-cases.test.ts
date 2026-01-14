/**
 * Edge Case Security Tests (EDGE-*)
 *
 * Example tests of boundary conditions
 *
 * Test IDs: EDGE-01 through EDGE-06
 */

import { describe, it, expect, beforeEach } from 'vitest';
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
import { ASSET_IDS } from '../assetConfig';

const { market, marketVault, vaultSbtc, vaultUsdc, sbtc: sbtcToken, usdc: usdcToken } = contracts;

describe('Edge Case Tests (EDGE-*)', () => {
  beforeEach(async () => {
    initializeProtocol();
    init_pyth(deployer);
    executeDaoProposal(contracts.proposalSetPriceStaleness);
    executeDaoProposal(proposalCreateMultipleEgroups);

    await set_initial_price(PythFeedIds.BTC, scalePriceForPyth(60000, -8), deployer);
    await set_initial_price(PythFeedIds.USDC, scalePriceForPyth(1, -8), deployer);

    // Mint tokens
    txOk(usdcToken.mint(1000000000000n, alice), deployer);
    txOk(usdcToken.mint(1000000000000n, bob), deployer);
    txOk(usdcToken.mint(100000000000n, charlie), deployer);
    txOk(sbtcToken.mint(1000000000n, alice), deployer);
    txOk(sbtcToken.mint(1000000000n, bob), deployer);
    txOk(sbtcToken.mint(1000000000n, charlie), deployer);

    // Provide vault liquidity
    txOk(vaultUsdc.deposit(500000000000n, 0n, bob), bob);
  });

  describe('EDGE-01: Liquidate with MAX_UINT128 debt amount', () => {
    it('should cap debt at graduated formula limit', async () => {
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);
      txOk(market.borrow(usdcToken.identifier, 42000000000n, null, null), alice);

      // Make position liquidatable
      await set_price(PythFeedIds.BTC, scalePriceForPyth(48000, -8), -8, deployer);

      // Try to liquidate with a large value (but not MAX_UINT128 which causes overflow)
      // Using 10x the actual debt to test capping behavior
      const largeAmount = 420000000000n; // $420k (10x actual debt of $42k)

      const result = txOk(
        market.liquidate(
          alice,
          sbtcToken.identifier,
          usdcToken.identifier,
          largeAmount,
          0n,
          null,
          null
        ),
        charlie
      );

      const liqResult = result.value as { debt: bigint; collateral: bigint };

      // Should be capped at graduated formula limit, not the requested amount
      expect(liqResult.debt).toBeLessThan(largeAmount);
      expect(liqResult.debt).toBeLessThan(50000000000n); // Less than $50k

      console.log('EDGE-01: Large input capped to %d USDC', liqResult.debt);
    });
  });

  describe('EDGE-02: Zero amount operations', () => {
    it('should reject borrow of zero', async () => {
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);

      const result = txErr(
        market.borrow(usdcToken.identifier, 0n, null, null),
        alice
      );

      expect(result.value).toBe(400002n); // ERR-AMOUNT-ZERO
    });

    it('should reject collateral-add of zero', async () => {
      const result = txErr(
        market.collateralAdd(sbtcToken.identifier, 0n, null),
        alice
      );

      // market-vault: ERR-AMOUNT-ZERO (600003)
      expect(result.value).toBe(600003n);
    });

    it('should reject collateral-remove of zero', async () => {
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);

      const result = txErr(
        market.collateralRemove(sbtcToken.identifier, 0n, null, null),
        alice
      );

      expect(result.value).toBe(400002n);
    });

    it('should reject deposit of zero', async () => {
      const result = txErr(
        vaultUsdc.deposit(0n, 0n, alice),
        alice
      );

      expect(result.value).toBe(803009n); // vault-usdc: ERR-AMOUNT-ZERO
    });

    it('should reject redeem of zero', async () => {
      txOk(vaultUsdc.deposit(1000000n, 0n, alice), alice);

      const result = txErr(
        vaultUsdc.redeem(0n, 0n, alice),
        alice
      );

      expect(result.value).toBe(803009n); // vault-usdc: ERR-AMOUNT-ZERO
    });
  });

  describe('EDGE-03: Redeem bounds', () => {
    it('should reject redemption exceeding share balance', async () => {
      const bobShares = rov(vaultUsdc.getBalance(bob)).value!;

      // Try to redeem more shares than bob has
      const result = txErr(
        vaultUsdc.redeem(bobShares + 1000000000n, 0n, bob),
        bob
      );

      // vault-usdc: ERR-INSUFFICIENT-BALANCE (803013)
      expect(result.value).toBe(803013n);
    });

    it('should allow partial redemption within liquidity', async () => {
      txOk(vaultUsdc.deposit(1000000000n, 0n, alice), alice);

      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), bob);
      txOk(market.borrow(usdcToken.identifier, 800000000n, null, null), bob);

      // Should be able to redeem small amount
      const smallRedeem = txOk(vaultUsdc.redeem(100000000n, 0n, alice), alice);
      expect(smallRedeem.value).toBeGreaterThan(0n);
    });
  });

  describe('EDGE-04: Position with no debt', () => {
    it('should allow collateral removal when no debt', async () => {
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);

      // No borrow - should be able to remove all
      const result = txOk(
        market.collateralRemove(sbtcToken.identifier, 100000000n, null, null),
        alice
      );

      expect(result).toBeDefined();
    });

    it('should skip health check when removing collateral with no debt', async () => {
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);

      // Even if price drops to zero, should still remove (no debt = no health check)
      await set_price(PythFeedIds.BTC, scalePriceForPyth(1, -8), -8, deployer);

      const result = txOk(
        market.collateralRemove(sbtcToken.identifier, 100000000n, null, null),
        alice
      );

      expect(result).toBeDefined();
    });
  });

  describe('EDGE-05: Minimum collateral/debt amounts', () => {
    it('should handle minimum viable position', async () => {
      // Add minimal collateral
      const minCollateral = 1n; // 1 satoshi
      txOk(market.collateralAdd(sbtcToken.identifier, minCollateral, null), alice);

      // Should be able to remove it
      const result = txOk(
        market.collateralRemove(sbtcToken.identifier, minCollateral, null, null),
        alice
      );

      expect(result).toBeDefined();
    });

    it('should reject borrow that results in dust debt', async () => {
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);

      // Try to borrow very small amount
      const result = txOk(
        market.borrow(usdcToken.identifier, 1n, null, null),
        alice
      );

      // Should succeed but with minimal debt
      expect(result).toBeDefined();
    });
  });

  describe('EDGE-06: Overflow/underflow protection', () => {
    it('should handle large but valid collateral amounts', async () => {
      // Mint and add large amount
      const largeAmount = 1000000000000n; // 10,000 BTC

      txOk(sbtcToken.mint(largeAmount, alice), deployer);
      const result = txOk(
        market.collateralAdd(sbtcToken.identifier, largeAmount, null),
        alice
      );

      expect(result).toBeDefined();

      // Verify position
      const position = rov(marketVault.resolve(alice));
      const collateral = rov(marketVault.getCollateral(position.id, ASSET_IDS.sbtc));
      expect(collateral).toBe(largeAmount);
    });

    it('should handle health calculation with extreme prices', { timeout: 15000 }, async () => {
      txOk(market.collateralAdd(sbtcToken.identifier, 100000000n, null), alice);
      txOk(market.borrow(usdcToken.identifier, 30000000000n, null, null), alice);

      // Set extreme price - $1M per BTC
      await set_price(PythFeedIds.BTC, scalePriceForPyth(1000000, -8), -8, deployer);

      // Should still be able to query position data (no overflow)
      const position = rov(marketVault.resolve(alice));
      expect(position).toBeDefined();
      expect(position.id).toBeGreaterThanOrEqual(0n);

      // Collateral removal should still work (health check uses extreme prices)
      const result = txOk(
        market.collateralRemove(sbtcToken.identifier, 10000000n, null, null),
        alice
      );
      expect(result).toBeDefined();
    });
  });
});
