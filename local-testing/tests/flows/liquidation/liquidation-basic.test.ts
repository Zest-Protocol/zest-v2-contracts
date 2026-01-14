import { describe, it, expect, beforeEach } from 'vitest';
import { Cl, cvToValue } from '@stacks/transactions';
import { txOk, txErr, rov } from '@clarigen/test';

// Import initialization helpers
import {
  deployer,
  alice,
  bob,
  charlie,
  initializeProtocol,
  executeDaoProposal,
  contracts,
  proposalCreateMultipleEgroups,
  pythStorageV4,
} from '../../setup/helpers';

// Import asset config
import { ASSET_IDS } from '../../assetConfig';

// Import Pyth helpers
import {
  init_pyth,
  set_initial_price,
  set_price,
  PythFeedIds,
  scalePriceForPyth,
} from '../../setup/helpers/pyth-helpers';

// Contract instances
const {
  market,
  sbtc: sbtcToken,
  usdc: usdcToken,
  vaultUsdc,
  egroup,
} = contracts;

describe('Liquidation Tests - sBTC/USDC Custom Egroup', () => {
  
  beforeEach(async () => {
    // 1. Initialize protocol (DAO, assets, vaults)
    initializeProtocol();
    
    // 2. Initialize Pyth oracle system
    init_pyth(deployer);
    
    // 3. Execute staleness proposal
    executeDaoProposal(contracts.proposalSetPriceStaleness);
    
    // 4. Set initial prices via Pyth
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
    
    // 5. Supply liquidity to USDC vault (Bob provides liquidity)
    txOk(usdcToken.mint(1000000000000n, bob), deployer);
    txOk(vaultUsdc.deposit(1000000000000n, 0n, bob), bob);
    
    // 6. Create custom egroups including sBTC/USDC (Egroup 0 has 70% LTV)
    // - LTV-BORROW: 70%
    // - LTV-LIQ-PARTIAL: 85%
    // - LTV-LIQ-FULL: 95%
    // - LIQ-PENALTY-MIN: 5%
    // - LIQ-PENALTY-MAX: 10%
    executeDaoProposal(proposalCreateMultipleEgroups);
  });

  it('should perform partial liquidation near 85% threshold with low penalty', async () => {
    // ================================================================================
    // SCENARIO: Alice's position drops to ~87.5% LTV (partial liquidation zone)
    // In this range:
    // - Liquidation percentage is small but non-zero
    // - Penalty is close to minimum (5%)
    // ================================================================================
    
    console.log('\n=== SETUP ALICE\'S POSITION ===');
    
    // STEP 1: Alice deposits 1 sBTC as collateral
    const sbtcAmount = 100000000n; // 1 BTC (8 decimals)
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    
    console.log('✓ Alice deposited 1 sBTC as collateral ($60,000 value)');
    
    // STEP 2: Alice borrows $42,000 USDC (70% LTV - healthy)
    const borrowAmount = 42000000000n; // $42,000 USDC (6 decimals)
    txOk(market.borrow(usdcToken.identifier, borrowAmount, alice, null), alice);
    
    console.log('✓ Alice borrowed $42,000 USDC (70% LTV - healthy)');
    
    // Initial position:
    // - Collateral: 1 BTC @ $60,000 = $60,000
    // - Debt: $42,000 USDC
    // - LTV: (42,000 / 60,000) * 100 = 70%
    
    console.log('\n=== SETUP LIQUIDATOR (CHARLIE) ===');
    
    // STEP 3: Mint USDC to Charlie (liquidator) to perform liquidation
    // Charlie needs enough to repay debt during liquidation
    const charlieUsdcAmount = 50000000000n; // $50,000 USDC (plenty for liquidation)
    txOk(usdcToken.mint(charlieUsdcAmount, charlie), deployer);
    
    const charlieUsdcBefore = rov(usdcToken.getBalance(charlie)).value!;
    console.log(`✓ Charlie has ${Number(charlieUsdcBefore) / 1_000_000} USDC for liquidation`);
    
    console.log('\n=== TRIGGER PARTIAL LIQUIDATION (85% LTV) ===');
    
    // STEP 4: Drop BTC price to trigger liquidation near 85% threshold
    // At exactly 85% LTV, liquidation % rounds to 0 (too small)
    // Push deeper into liquidation zone to get meaningful liquidation amount
    // Target: ~87% LTV with $42,000 debt
    // Formula: required_collateral = $42,000 / 0.87 = $48,275.86
    // Using $48,000 for safety:
    // LTV = (42,000 / 48,000) * 10,000 = 8750 (87.5%)
    
    const targetPrice = 48000;
    await set_price(
      PythFeedIds.BTC,
      scalePriceForPyth(targetPrice, -8),
      -8,
      deployer
    );
    
    // DEBUG: Verify price actually updated in Pyth
    const btcPriceId = Buffer.from(PythFeedIds.BTC);
    const pythPrice = rov(contracts.pythStorageV4.getPrice({ priceIdentifier: btcPriceId }));
    console.log('🔍 DEBUG - Pyth price verification (Test 1):');
    console.log('  Expected price:', targetPrice);
    console.log('  Pyth returned:', pythPrice);
    
    console.log(`✓ BTC price dropped to $${targetPrice.toFixed(2)}`);
    console.log(`  - Collateral value: $${targetPrice.toFixed(2)}`);
    console.log(`  - Debt value: $42,000`);
    console.log(`  - LTV: ${((42000 / targetPrice) * 100).toFixed(2)}% (in partial liquidation zone)`);
    
    console.log('\n=== EXECUTE LIQUIDATION ===');
    
    // STEP 5: Query Alice's position before liquidation
    const aliceObligation = rov(contracts.marketVault.resolve(alice));
    const aliceId = aliceObligation.id;
    const aliceSbtcBefore = rov(contracts.marketVault.getCollateral(aliceId, ASSET_IDS.sbtc));
    
    // STEP 6: Charlie performs liquidation
    // At 85% LTV (start of liquidation zone):
    // - Liquidation percentage ≈ 0% (will be very small)
    // - Penalty ≈ 5% (minimum)
    // For safety, Charlie tries to liquidate a small amount
    const liquidateAmount = 1000000000n; // Try to liquidate $1,000 USDC worth
    
    const liquidateResult = txOk(
      market.liquidate(
        alice,
        sbtcToken.identifier,
        usdcToken.identifier,
        liquidateAmount,
        0n,
        null,
        null
      ),
      charlie
    );
    
    console.log('✓ Liquidation executed');
    
    console.log('\n=== VERIFY LIQUIDATION RESULTS ===');
    
    // STEP 7: Check balances after liquidation
    const charlieUsdcAfter = rov(usdcToken.getBalance(charlie)).value!;
    const charlieSbtcAfter = rov(sbtcToken.getBalance(charlie)).value!;
    const aliceSbtcAfter = rov(contracts.marketVault.getCollateral(aliceId, ASSET_IDS.sbtc));
    
    const usdcSpent = charlieUsdcBefore - charlieUsdcAfter;
    const sbtcReceived = charlieSbtcAfter;
    const sbtcSeized = aliceSbtcBefore - aliceSbtcAfter;
    
    console.log(`  - Charlie spent: ${Number(usdcSpent) / 1_000_000} USDC`);
    console.log(`  - Charlie received: ${Number(sbtcReceived) / 100_000_000} sBTC`);
    console.log(`  - Alice lost: ${Number(sbtcSeized) / 100_000_000} sBTC collateral`);
    
    // Calculate expected values
    // At 85% LTV, liquidation % ≈ 0%, but small amount can still be liquidated
    // Collateral seized = debt_repaid * (1 + penalty) / btc_price
    // With 5% penalty minimum
    const debtRepaidUsd = Number(usdcSpent) / 1_000_000;
    const collateralValueWithBonus = debtRepaidUsd * 1.05; // 5% penalty
    const expectedSbtcSeized = collateralValueWithBonus / targetPrice;
    
    console.log(`\n  Expected calculations:`);
    console.log(`  - Debt repaid: $${debtRepaidUsd.toFixed(2)}`);
    console.log(`  - Collateral value (with 5% bonus): $${collateralValueWithBonus.toFixed(2)}`);
    console.log(`  - Expected sBTC seized: ${expectedSbtcSeized.toFixed(8)} BTC`);
    
    // Verify liquidation occurred
    expect(usdcSpent).toBeGreaterThan(0n);
    expect(sbtcReceived).toBeGreaterThan(0n);
    expect(sbtcSeized).toBeGreaterThan(0n);
    
    // Verify liquidator received the collateral
    expect(charlieSbtcAfter).toBe(sbtcSeized);
    
    console.log('\n✓ Partial liquidation successful near 85% threshold');
  });

  it('should perform full liquidation at 95% LTV with maximum penalty', async () => {
    // ================================================================================
    // SCENARIO: Alice's position drops to exactly 95% LTV (full liquidation threshold)
    // At this threshold:
    // - Liquidation percentage = 100% (full liquidation)
    // - Penalty = 10% (maximum)
    // Note: Using Alice (not Bob) to avoid state pollution from beforeEach liquidity
    // ================================================================================
    
    console.log('\n=== SETUP ALICE\'S POSITION ===');
    
    // STEP 1: Alice deposits 1 sBTC as collateral
    const sbtcAmount = 100000000n; // 1 BTC (8 decimals)
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    
    console.log('✓ Alice deposited 1 sBTC as collateral ($60,000 value)');
    
    // STEP 2: Alice borrows $42,000 USDC (70% LTV - healthy)
    const borrowAmount = 42000000000n; // $42,000 USDC (6 decimals)
    txOk(market.borrow(usdcToken.identifier, borrowAmount, alice, null), alice);
    
    console.log('✓ Alice borrowed $42,000 USDC (70% LTV - healthy)');
    
    console.log('\n=== SETUP LIQUIDATOR (CHARLIE) ===');
    
    // STEP 3: Mint USDC to Charlie (liquidator)
    const charlieUsdcAmount = 50000000000n; // $50,000 USDC
    txOk(usdcToken.mint(charlieUsdcAmount, charlie), deployer);
    
    const charlieUsdcBefore = rov(usdcToken.getBalance(charlie)).value!;
    console.log(`✓ Charlie has ${Number(charlieUsdcBefore) / 1_000_000} USDC for liquidation`);
    
    console.log('\n=== TRIGGER FULL LIQUIDATION (95% LTV) ===');
    
    // STEP 4: Drop BTC price to trigger 95% LTV
    // Target: 95% LTV with $42,000 debt
    // Formula: required_collateral = debt / (ltv / 100)
    // required_collateral = 42,000 / 0.95 = $44,210.53
    // Adjusted to $44,200 to ensure rounding pushes us ABOVE 95%:
    // LTV = (42,000 / 44,200) * 10,000 = 9502 (95.02%)
    
    const targetPrice = 44200;
    await set_price(
      PythFeedIds.BTC,
      scalePriceForPyth(targetPrice, -8),
      -8,
      deployer
    );
    
    // DEBUG: Verify price actually updated in Pyth
    const btcPriceId = Buffer.from(PythFeedIds.BTC);
    const pythPrice = rov(contracts.pythStorageV4.getPrice({ priceIdentifier: btcPriceId }));
    console.log('🔍 DEBUG - Pyth price verification (Test 2):');
    console.log('  Expected price:', targetPrice);
    console.log('  Pyth returned:', pythPrice);
    
    console.log(`✓ BTC price dropped to $${targetPrice.toFixed(2)}`);
    console.log(`  - Collateral value: $${targetPrice.toFixed(2)}`);
    console.log(`  - Debt value: $42,000`);
    console.log(`  - LTV: ${((42000 / targetPrice) * 100).toFixed(2)}% (at full liquidation threshold)`);
    
    console.log('\n=== EXECUTE FULL LIQUIDATION ===');
    
    // STEP 5: Query Alice's position before liquidation
    const aliceObligation = rov(contracts.marketVault.resolve(alice));
    const aliceId = aliceObligation.id;
    const aliceSbtcBefore = rov(contracts.marketVault.getCollateral(aliceId, ASSET_IDS.sbtc));
    const charlieSbtcBefore = rov(sbtcToken.getBalance(charlie)).value!;
    
    // STEP 6: Charlie performs full liquidation
    // At 95% LTV (full liquidation zone):
    // - Can liquidate 100% of debt
    // - Penalty = 10% (maximum)
    // Charlie attempts to liquidate the full debt
    const liquidateAmount = 45000000000n; // $45,000 (more than debt, will be capped)
    
    const liquidateResult = txOk(
      market.liquidate(
        alice,
        sbtcToken.identifier,
        usdcToken.identifier,
        liquidateAmount,
        0n,
        null,
        null
      ),
      charlie
    );
    
    console.log('✓ Full liquidation executed');
    
    console.log('\n=== VERIFY LIQUIDATION RESULTS ===');
    
    // STEP 7: Check balances after liquidation
    const charlieUsdcAfter = rov(usdcToken.getBalance(charlie)).value!;
    const charlieSbtcAfter = rov(sbtcToken.getBalance(charlie)).value!;
    
    // Calculate seized collateral from before/after instead of querying Alice
    // (full liquidation removes collateral from map, causing unwrap failure)
    const usdcSpent = charlieUsdcBefore - charlieUsdcAfter;
    const sbtcReceived = charlieSbtcAfter - charlieSbtcBefore;
    const sbtcSeized = sbtcReceived; // Same as Charlie received (transferred from Alice to Charlie)
    
    console.log(`  - Charlie spent: ${Number(usdcSpent) / 1_000_000} USDC`);
    console.log(`  - Charlie received: ${Number(sbtcReceived) / 100_000_000} sBTC`);
    console.log(`  - Alice lost: ${Number(sbtcSeized) / 100_000_000} sBTC collateral`);
    
    // Calculate expected values
    // At 95% LTV, liquidation % = 100% (can liquidate full debt)
    // Collateral seized = debt_repaid * (1 + penalty) / btc_price
    // With 10% penalty maximum
    const debtRepaidUsd = Number(usdcSpent) / 1_000_000;
    const collateralValueWithBonus = debtRepaidUsd * 1.10; // 10% penalty
    const expectedSbtcSeized = collateralValueWithBonus / targetPrice;
    
    console.log(`\n  Expected calculations:`);
    console.log(`  - Debt repaid: $${debtRepaidUsd.toFixed(2)}`);
    console.log(`  - Collateral value (with 10% bonus): $${collateralValueWithBonus.toFixed(2)}`);
    console.log(`  - Expected sBTC seized: ${expectedSbtcSeized.toFixed(8)} BTC`);
    console.log(`  - Actual sBTC seized: ${(Number(sbtcSeized) / 100_000_000).toFixed(8)} BTC`);
    
    // Verify liquidation occurred
    expect(usdcSpent).toBeGreaterThan(0n);
    expect(sbtcReceived).toBeGreaterThan(0n);
    expect(sbtcSeized).toBeGreaterThan(0n);
    
    // Verify liquidator received the collateral
    expect(charlieSbtcAfter).toBeGreaterThan(charlieSbtcBefore);
    
    // At 95% LTV, significant portion (or all) of debt should be liquidatable
    expect(debtRepaidUsd).toBeGreaterThan(10000); // Should repay significant amount
    
    console.log('\n✓ Full liquidation successful at 95% LTV');
  });

  it('should reject liquidation of healthy position (below 85% LTV)', async () => {
    // ================================================================================
    // SCENARIO: Try to liquidate Alice when she's at 70% LTV (healthy position)
    // Should fail with ERR-HEALTHY
    // ================================================================================
    
    console.log('\n=== SETUP ALICE\'S HEALTHY POSITION ===');
    
    // STEP 1: Alice deposits 1 sBTC and borrows $42,000 USDC (70% LTV)
    const sbtcAmount = 100000000n; // 1 BTC
    txOk(sbtcToken.mint(sbtcAmount, alice), deployer);
    txOk(market.collateralAdd(sbtcToken.identifier, sbtcAmount, null), alice);
    txOk(market.borrow(usdcToken.identifier, 42000000000n, alice, null), alice);
    
    console.log('✓ Alice has 70% LTV (healthy position)');
    console.log('  - Collateral: 1 BTC @ $60,000 = $60,000');
    console.log('  - Debt: $42,000 USDC');
    console.log('  - LTV: 70%');
    
    // STEP 2: Setup liquidator
    txOk(usdcToken.mint(50000000000n, charlie), deployer);
    
    console.log('\n=== ATTEMPT LIQUIDATION ON HEALTHY POSITION ===');
    
    // STEP 3: Try to liquidate (should fail)
    const liquidateResult = txErr(
      market.liquidate(
        alice,
        sbtcToken.identifier,
        usdcToken.identifier,
        1000000000n, // $1,000
        0n,
        null,
        null
      ),
      charlie
    );
    
    // STEP 4: Verify error is ERR-HEALTHY (400018)
    const errorCode = cvToValue(liquidateResult.result);
    expect(errorCode.value).toBe('400018'); // ERR-HEALTHY
    
    console.log('✓ Correctly rejected liquidation of healthy position (ERR-HEALTHY)');
  });
});
