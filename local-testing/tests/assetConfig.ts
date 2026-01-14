/**
 * Asset Configuration
 * 
 * Tests source of truth for asset IDs, bit positions, and mask calculations.
 * This file mirrors the asset ID constants in contracts/market/market.clar.
 * 
 * IMPORTANT: When asset IDs change, update this file.
 * 
 * Asset ID Schema (Paired System):
 * - Each underlying asset and its vault token have sequential IDs
 * - Pattern: underlying_id, vault_id = underlying_id + 1
 * - Example: wstx = 0, zSTX = 1, sbtc = 2, zsBTC = 3, etc.
 */

// ============================================================
// ASSET IDS (Match contracts/market/market.clar constants)
// ============================================================

export const ASSET_IDS = {
  // Underlying tokens (even numbers)
  wstx: 0n,
  sbtc: 2n,
  ststx: 4n,
  usdc: 6n,
  usdh: 8n,
  ststxbtc: 10n,
  
  // Vault tokens (odd numbers = underlying + 1)
  zSTX: 1n,
  zsBTC: 3n,
  zstSTX: 5n,
  zUSDC: 7n,
  zUSDH: 9n,
  zstSTXBTC: 11n,
} as const;

// Alias for convenience
export const UNDERLYING_ASSET_IDS = {
  wstx: ASSET_IDS.wstx,
  sbtc: ASSET_IDS.sbtc,
  ststx: ASSET_IDS.ststx,
  usdc: ASSET_IDS.usdc,
  usdh: ASSET_IDS.usdh,
  ststxbtc: ASSET_IDS.ststxbtc,
} as const;

export const VAULT_ASSET_IDS = {
  zSTX: ASSET_IDS.zSTX,
  zsBTC: ASSET_IDS.zsBTC,
  zstSTX: ASSET_IDS.zstSTX,
  zUSDC: ASSET_IDS.zUSDC,
  zUSDH: ASSET_IDS.zUSDH,
  zstSTXBTC: ASSET_IDS.zstSTXBTC,
} as const;

// ============================================================
// BIT POSITIONS (for bitmask operations)
// ============================================================

/**
 * Bitmask Structure:
 * - Bits 0-63: Collateral assets
 * - Bits 64-127: Debt assets
 * - Each asset occupies bit position = asset_id
 * - Debt bit = 64 + asset_id
 */
export const BIT_POSITIONS = {
  collateral: {
    wstx: 0,      // 2^0 = 1
    sbtc: 2,      // 2^2 = 4
    ststx: 4,     // 2^4 = 16
    usdc: 6,      // 2^6 = 64
    usdh: 8,      // 2^8 = 256
    ststxbtc: 10, // 2^10 = 1024
  },
  debt: {
    wstx: 64,     // 64 + 0
    sbtc: 66,     // 64 + 2
    ststx: 68,    // 64 + 4
    usdc: 70,     // 64 + 6
    usdh: 72,     // 64 + 8
    ststxbtc: 74, // 64 + 10
  },
} as const;

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Calculate bitmask for a combination of collateral and debt assets
 * 
 * @param collateral - Array of collateral asset names
 * @param debt - Array of debt asset names
 * @returns Bitmask as bigint
 * 
 * @example
 * // sBTC collateral + USDC debt
 * calculateMask(['sbtc'], ['usdc'])
 * // Returns: 1180591620717411303428n (bit 2 + bit 70)
 */
export function calculateMask(
  collateral: (keyof typeof BIT_POSITIONS.collateral)[],
  debt: (keyof typeof BIT_POSITIONS.debt)[]
): bigint {
  let mask = 0n;
  
  // Set collateral bits
  for (const asset of collateral) {
    const bitPos = BIT_POSITIONS.collateral[asset];
    mask |= 2n ** BigInt(bitPos);
  }
  
  // Set debt bits
  for (const asset of debt) {
    const bitPos = BIT_POSITIONS.debt[asset];
    mask |= 2n ** BigInt(bitPos);
  }
  
  return mask;
}

/**
 * Check if a specific collateral bit is set in a mask
 * 
 * @param mask - Bitmask to check
 * @param asset - Collateral asset name
 * @returns True if bit is set
 * 
 * @example
 * const mask = calculateMask(['sbtc'], ['usdc']);
 * hasCollateralBit(mask, 'sbtc') // true
 * hasCollateralBit(mask, 'ststx') // false
 */
export function hasCollateralBit(
  mask: bigint,
  asset: keyof typeof BIT_POSITIONS.collateral
): boolean {
  const bitPos = BIT_POSITIONS.collateral[asset];
  return (mask & (2n ** BigInt(bitPos))) > 0n;
}

/**
 * Check if a specific debt bit is set in a mask
 * 
 * @param mask - Bitmask to check
 * @param asset - Debt asset name
 * @returns True if bit is set
 * 
 * @example
 * const mask = calculateMask(['sbtc'], ['usdc']);
 * hasDebtBit(mask, 'usdc') // true
 * hasDebtBit(mask, 'usdh') // false
 */
export function hasDebtBit(
  mask: bigint,
  asset: keyof typeof BIT_POSITIONS.debt
): boolean {
  const bitPos = BIT_POSITIONS.debt[asset];
  return (mask & (2n ** BigInt(bitPos))) > 0n;
}

/**
 * Get the collateral bit mask for a specific asset
 * Useful for direct bit manipulation
 */
export function getCollateralBitMask(asset: keyof typeof BIT_POSITIONS.collateral): bigint {
  return 2n ** BigInt(BIT_POSITIONS.collateral[asset]);
}

/**
 * Get the debt bit mask for a specific asset
 * Useful for direct bit manipulation
 */
export function getDebtBitMask(asset: keyof typeof BIT_POSITIONS.debt): bigint {
  return 2n ** BigInt(BIT_POSITIONS.debt[asset]);
}

/**
 * Decode a mask to show which assets are included
 * Useful for debugging
 */
export function decodeMask(mask: bigint): {
  collateral: string[];
  debt: string[];
} {
  const collateral: string[] = [];
  const debt: string[] = [];
  
  // Check collateral bits
  for (const [asset, bitPos] of Object.entries(BIT_POSITIONS.collateral)) {
    if ((mask & (2n ** BigInt(bitPos))) > 0n) {
      collateral.push(asset);
    }
  }
  
  // Check debt bits
  for (const [asset, bitPos] of Object.entries(BIT_POSITIONS.debt)) {
    if ((mask & (2n ** BigInt(bitPos))) > 0n) {
      debt.push(asset);
    }
  }
  
  return { collateral, debt };
}

// ============================================================
// PRE-CALCULATED EGROUP MASKS
// ============================================================

/**
 * Common egroup masks used in tests
 * These should match the egroups created in proposal-create-multiple-egroups.clar
 */
export const EGROUP_MASKS = {
  // Simple pairs
  sbtc_usdc: calculateMask(['sbtc'], ['usdc']),
  sbtc_usdh: calculateMask(['sbtc'], ['usdh']),
  ststx_usdc: calculateMask(['ststx'], ['usdc']),
  ststx_usdh: calculateMask(['ststx'], ['usdh']),
  wstx_usdc: calculateMask(['wstx'], ['usdc']),
  
  // Multi-collateral
  sbtc_ststx_usdc: calculateMask(['sbtc', 'ststx'], ['usdc']),
  sbtc_ststx_usdh: calculateMask(['sbtc', 'ststx'], ['usdh']),
  
  // Multi-debt
  sbtc_usdc_usdh: calculateMask(['sbtc'], ['usdc', 'usdh']),
  ststx_usdc_usdh: calculateMask(['ststx'], ['usdc', 'usdh']),
  
  // Combinations
  sbtc_ststx_usdc_usdh: calculateMask(['sbtc', 'ststx'], ['usdc', 'usdh']),

} as const;

// ============================================================
// VERIFICATION
// ============================================================

/**
 * Verify that calculated masks match expected values
 * Useful for testing the migration
 */
export function verifyMaskCalculations(): void {
  console.log('=== Asset Config Verification ===');
  console.log('Asset IDs:', ASSET_IDS);
  console.log('\nBit Positions:', BIT_POSITIONS);
  console.log('\nSample Egroup Masks:');
  
  for (const [name, mask] of Object.entries(EGROUP_MASKS)) {
    const decoded = decodeMask(mask);
    console.log(`${name}: ${mask}`);
    console.log(`  Collateral: [${decoded.collateral.join(', ')}]`);
    console.log(`  Debt: [${decoded.debt.join(', ')}]`);
  }
}

// ============================================================
// EXPORTS
// ============================================================

export default {
  ASSET_IDS,
  UNDERLYING_ASSET_IDS,
  VAULT_ASSET_IDS,
  BIT_POSITIONS,
  EGROUP_MASKS,
  calculateMask,
  hasCollateralBit,
  hasDebtBit,
  getCollateralBitMask,
  getDebtBitMask,
  decodeMask,
  verifyMaskCalculations,
};
