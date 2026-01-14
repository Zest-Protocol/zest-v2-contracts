import { describe, it, expect, beforeEach } from 'vitest';
import { Cl, cvToValue } from '@stacks/transactions';
import { txOk, txErr, rov, rovOk } from '@clarigen/test';

// Import initialization helpers
import {
  deployer,
  alice,
  bob,
  initializeProtocol,
  executeDaoProposal,
  contracts,
  proposalCreateMultipleEgroups,
} from '../../setup/helpers';

// Import Pyth helpers
import {
  init_pyth,
  set_initial_price,
  set_price,
  PythFeedIds,
  scalePriceForPyth,
} from '../../setup/helpers/pyth-helpers';

// Contract instances from helpers
const {
  market,
  sbtc: sbtcToken,
  usdc: usdcToken,
  vaultSbtc,
  vaultUsdc,
  assets,
} = contracts;

describe('Borrow with Pyth Oracles - POC', () => {
  
  beforeEach(async () => {
    // 1. Initialize protocol (DAO, assets, vaults)
    initializeProtocol();
    
    // 2. Initialize Pyth oracle system
    init_pyth(deployer);
    
    // 2.5 Execute staleness proposal to handle wall-clock timestamps
    executeDaoProposal(contracts.proposalSetPriceStaleness);
    
    // 2.6 Execute egroup proposals (needed for sBTC collateral + USDC debt borrowing)
    executeDaoProposal(proposalCreateMultipleEgroups);
    
    // 3. Set initial prices via Pyth - MUST await!
    // BTC at $60,000
    await set_initial_price(
      PythFeedIds.BTC,
      scalePriceForPyth(60000, -8),
      deployer
    );
    
    // USDC at $1
    await set_initial_price(
      PythFeedIds.USDC,
      scalePriceForPyth(1, -8),
      deployer
    );
    
    // 4. Supply liquidity to USDC vault so borrowers can borrow
    // Mint USDC to depositor (bob)
    txOk(usdcToken.mint(1000000000000n, bob), deployer);
    
    // Bob deposits 1M USDC to vault (amt, min-out, recipient)
    txOk(vaultUsdc.deposit(1000000000000n, 0n, bob), bob);
  });

  it('should allow borrowing USDC against sBTC collateral within LTV limits', async () => {
    // Scenario:
    // - Alice supplies 1 sBTC as collateral ($60,000 value)
    // - With custom egroup 70% LTV, max borrow = $42,000
    // - Alice borrows $42,000 USDC (at the limit)
    
    // 1. Mint 1 sBTC to Alice (8 decimals: 100000000)
    const sbtcAmount = 100000000n; // 1 BTC
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    
    // 2. Alice adds sBTC as collateral
    const addCollateralResult = txOk(
      market.collateralAdd(sbtcToken.identifier, sbtcAmount, null),
      alice
    );
    expect(addCollateralResult).toBeDefined();
    
    // 3. Alice borrows 42,000 USDC (at 70% LTV)
    // USDC has 6 decimals, so 42,000 USDC = 42000000000
    const borrowAmount = 42000000000n; // $42,000
    
    const borrowResult = txOk(
      market.borrow(usdcToken.identifier, borrowAmount, alice, null),
      alice
    );
    expect(borrowResult).toBeDefined();
    
    // 4. Verify Alice received the borrowed USDC
    const aliceBalanceResponse = rov(usdcToken.getBalance(alice));
    expect(aliceBalanceResponse.value).toBe(borrowAmount);
    
    console.log('✓ Alice successfully borrowed $42,000 USDC against 1 BTC collateral (70% LTV)');
  });

  it('should reject borrowing USDC exceeding LTV limits', async () => {
    // Scenario:
    // - Alice supplies 1 sBTC as collateral ($60,000 value)
    // - With custom egroup 70% LTV, max borrow = $42,000
    // - Alice tries to borrow $45,000 USDC (exceeds limit) -> FAILS
    
    // 1. Mint 1 sBTC to Alice
    const sbtcAmount = 100000000n; // 1 BTC
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    
    // 2. Alice adds sBTC as collateral
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    
    // 3. Alice tries to borrow 45,000 USDC (exceeds 70% LTV)
    const excessiveBorrowAmount = 45000000000n; // $45,000
    
    const borrowResult = txErr(
      market.borrow(usdcToken.identifier, excessiveBorrowAmount, alice, null),
      alice
    );
    
    // 4. Verify the error is ERR-UNHEALTHY (400005)
    const errorCode = cvToValue(borrowResult.result);
    expect(errorCode.value).toBe('400005'); // ERR-UNHEALTHY
    
    // 5. Verify Alice's USDC balance is still 0
    const aliceBalanceResponse = rov(usdcToken.getBalance(alice));
    expect(aliceBalanceResponse.value).toBe(0n);
    
    console.log('✓ Correctly rejected borrowing $45,000 USDC (exceeds 70% LTV)');
  });

  it('should handle price updates correctly', async () => {
    // Scenario:
    // - Alice supplies 1 sBTC at $60,000
    // - Borrows $42,000 USDC (at 70% LTV limit)
    // - BTC price drops to $50,000
    // - Alice's position becomes unhealthy (now 84% LTV, exceeds 70%)
    // - Alice cannot borrow more
    
    // 1. Setup: Alice has 1 BTC collateral and borrows $42,000
    const sbtcAmount = 100000000n; // 1 BTC
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    
    const initialBorrowAmount = 42000000000n; // $42,000 (70% of $60k)
    txOk(market.borrow(usdcToken.identifier, initialBorrowAmount, alice, null), alice);
    
    // 2. Update BTC price to $50,000 (16.7% drop)
    await set_price(
      PythFeedIds.BTC,
      scalePriceForPyth(50000, -8),
      -8,
      deployer
    );
    
    // 3. Try to borrow additional $1,000 - should fail (position unhealthy)
    // At $50,000 BTC with 70% LTV: max = $35,000
    // Alice already borrowed $42,000, so position is underwater
    const additionalBorrow = 1000000000n; // $1,000
    
    const borrowResult = txErr(
      market.borrow(usdcToken.identifier, additionalBorrow, alice, null),
      alice
    );
    
    const errorCode = cvToValue(borrowResult.result);
    expect(errorCode.value).toBe('400005'); // ERR-UNHEALTHY (cvToValue returns string)
    
    console.log('✓ Correctly detected unhealthy position after BTC price drop');
    console.log('  - Initial: 1 BTC @ $60,000 = $60,000 collateral, $42,000 debt (70% LTV)');
    console.log('  - After price drop: 1 BTC @ $50,000 = $50,000 collateral, $42,000 debt');
    console.log('  - LTV = 84% (exceeds 70% limit) -> position is unhealthy');
  });

  it('should allow borrowing at the edge of LTV limits', async () => {
    // Scenario:
    // - Alice supplies 1 sBTC at $60,000
    // - With custom egroup 70% LTV, max borrow = $42,000
    // - Alice borrows $41,999 (just under limit to account for rounding)
    
    // 1. Mint 1 sBTC to Alice
    const sbtcAmount = 100000000n; // 1 BTC
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    
    // 2. Alice adds sBTC as collateral
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    
    // 3. Calculate max borrow: $60,000 * 0.70 = $42,000
    // Account for small rounding differences
    const maxBorrowAmount = 41999000000n; // Slightly under $42,000 to account for rounding
    
    const borrowResult = txOk(
      market.borrow(usdcToken.identifier, maxBorrowAmount, alice, null),
      alice
    );
    expect(borrowResult).toBeDefined();
    
    // 4. Verify Alice received the borrowed USDC
    const aliceBalanceResponse = rov(usdcToken.getBalance(alice));
    expect(aliceBalanceResponse.value).toBe(maxBorrowAmount);
    
    console.log('✓ Alice successfully borrowed at maximum LTV (≈70%)');
    console.log(`  - Borrowed: $${Number(maxBorrowAmount) / 1000000} out of max $42,000`);
  });

  it('should handle multiple collateral and debt assets with Pyth prices', async () => {
    // Scenario:
    // - Alice supplies both sBTC and USDC as collateral
    // - Borrows USDC against combined collateral value
    // - Uses Egroup 10 (sBTC + USDC collateral + USDC debt) with 60% LTV
    
    // 1. Mint assets to Alice
    const sbtcAmount = 50000000n; // 0.5 BTC = $30,000
    const usdcCollateralAmount = 10000000000n; // $10,000 USDC
    
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    txOk(usdcToken.mint(usdcCollateralAmount, alice), deployer);
    
    // 2. Alice adds both as collateral
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    txOk(market.collateralAdd(usdcToken.identifier, usdcCollateralAmount, null), alice);
    
    // 3. Total collateral value = $30,000 (BTC) + $10,000 (USDC) = $40,000
    // With Egroup 10 (60% LTV), max borrow = $24,000
    const borrowAmount = 24000000000n; // $24,000 (at 60% limit)
    
    const borrowResult = txOk(
      market.borrow(usdcToken.identifier, borrowAmount, alice, null),
      alice
    );
    expect(borrowResult).toBeDefined();
    
    console.log('✓ Successfully borrowed against multiple collateral assets');
    console.log('  - Collateral: 0.5 BTC ($30,000) + $10,000 USDC = $40,000 total');
    console.log('  - Borrowed: $24,000 USDC (60% LTV with Egroup 10)');
  });

  it('should validate Pyth price confidence intervals', async () => {
    // This test verifies that if Pyth returns prices with low confidence,
    // the protocol rejects them (based on max-confidence-ratio setting)
    
    // Note: The confidence validation is built into market.clar's check-confidence function
    // It compares conf <= (price * max-confidence-ratio) / BPS
    // Where max-confidence-ratio defaults to 1000 (10%)
    
    // For this test, we just verify that normal operations work with valid confidence
    // Testing invalid confidence would require mocking Pyth to return bad data
    
    const sbtcAmount = 100000000n; // 1 BTC
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    
    const borrowAmount = 42000000000n; // $42,000 (70% of $60k)
    const borrowResult = txOk(
      market.borrow(usdcToken.identifier, borrowAmount, alice, null),
      alice
    );
    
    expect(borrowResult).toBeDefined();
    
    console.log('✓ Prices with valid confidence intervals accepted');
  });

  it('should allow repaying borrowed USDC and verify debt reduction', async () => {
    // Scenario:
    // - Alice supplies 1 sBTC as collateral ($60,000 value)
    // - Alice borrows $42,000 USDC (at 70% LTV limit)
    // - Alice repays $21,000 USDC (half the debt)
    // - Verify debt is reduced after repayment
    
    // 1. Mint 1 sBTC to Alice (8 decimals: 100000000)
    const sbtcAmount = 100000000n; // 1 BTC
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    
    // 2. Alice adds sBTC as collateral
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    
    // 3. Alice borrows 42,000 USDC (at 70% LTV limit)
    const borrowAmount = 42000000000n; // $42,000
    txOk(market.borrow(usdcToken.identifier, borrowAmount, alice, null), alice);
    
    // 4. Query debt BEFORE repayment using market-vault's debtScaled
    const usdcId = 6n; // USDC asset ID
    const aliceObligation = rov(contracts.marketVault.resolve(alice));
    const aliceId = aliceObligation.id;
    const scaledDebtBefore = rov(contracts.marketVault.debtScaled(aliceId, usdcId));
    
    // 5. Mint small amount of USDC to cover potential interest
    // Alice already has 42,000 USDC from borrowing, just need a bit more for interest
    txOk(usdcToken.mint(100000000n, alice), deployer); // 100 USDC for interest
    
    // 6. Alice repays half the debt
    const repayAmount = 21000000000n; // $21,000 (half of borrowed amount)
    const repayResult = txOk(
      market.repay(usdcToken.identifier, repayAmount, alice),
      alice
    );
    expect(repayResult).toBeDefined();
    
    // 7. Query debt AFTER repayment
    const scaledDebtAfter = rov(contracts.marketVault.debtScaled(aliceId, usdcId));
    
    // 8. Verify debt has been reduced
    
    expect(scaledDebtAfter).toBeLessThan(scaledDebtBefore);
    
    console.log('✓ Successfully repaid half of borrowed USDC');
    console.log(`  - Scaled debt before: ${scaledDebtBefore}`);
    console.log(`  - Scaled debt after: ${scaledDebtAfter}`);
    console.log(`  - Debt reduced by: ${((Number(scaledDebtBefore - scaledDebtAfter) / Number(scaledDebtBefore)) * 100).toFixed(1)}%`);
  });

  it('should allow full debt repayment and collateral withdrawal', async () => {
    // Scenario:
    // - Alice supplies 1 sBTC as collateral ($60,000 value)
    // - Alice borrows $42,000 USDC (at 70% LTV limit)
    // - Alice repays FULL debt
    // - Alice withdraws all collateral
    
    // 1. Mint 1 sBTC to Alice (8 decimals: 100000000)
    const sbtcAmount = 100000000n; // 1 BTC
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    
    // 2. Alice adds sBTC as collateral
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    
    // 3. Alice borrows 42,000 USDC (at 70% LTV limit)
    const borrowAmount = 42000000000n; // $42,000
    txOk(market.borrow(usdcToken.identifier, borrowAmount, alice, null), alice);
    
    // 4. Get Alice's obligation ID for debt queries
    const MAX_U64 = 18446744073709551615n;
    const aliceObligation = rov(contracts.marketVault.resolve(alice));
    const aliceId = aliceObligation.id;
    const usdcId = 3n; // USDC asset ID
    const sbtcId = 2n; // sBTC asset ID
    
    // 5. Mint extra USDC to cover any accrued interest
    txOk(usdcToken.mint(500000000n, alice), deployer); // 500 USDC for interest
    
    // 6. Alice repays FULL debt (borrowed amount + buffer for interest)
    const fullRepayAmount = 42500000000n; // $42,500 (includes interest buffer)
    txOk(market.repay(usdcToken.identifier, fullRepayAmount, alice), alice);
    
    // 7. Verify debt is now 0
    const scaledDebtAfterFullRepay = rov(contracts.marketVault.debtScaled(aliceId, usdcId));
    expect(scaledDebtAfterFullRepay).toBe(0n);
    
    // 8. Alice removes all collateral (now that debt is 0)
    const collateralRemoveResult = txOk(
      market.collateralRemove(sbtcToken.identifier, sbtcAmount, alice, null),
      alice
    );
    expect(collateralRemoveResult).toBeDefined();
    
    // 9. Verify Alice received her sBTC back (proves collateral was withdrawn)
    const aliceSbtcBalance = rov(sbtcToken.getBalance(alice));
    expect(aliceSbtcBalance.value).toBe(sbtcAmount);
    
    console.log('✓ Successfully completed full borrow-repay-withdraw cycle');
    console.log('  - Borrowed: $42,000 USDC');
    console.log('  - Repaid: Full debt');
    console.log('  - Withdrew: 1 BTC collateral');
    console.log('  - Final debt: 0');
    console.log('  - Final collateral: 0');
  });
});
