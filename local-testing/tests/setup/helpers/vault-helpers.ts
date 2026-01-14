import { rov } from '@clarigen/test';
import { contracts, deployer, executeDaoProposal, proposalPauseVaultStstx, proposalPauseVaultUsdh, proposalPauseVaultSbtc, proposalPauseVaultUsdc, proposalSetFlashFeeStx, proposalSetFlashFeeUsdc, proposalUnpauseVaultSbtc, proposalUnpauseVaultStstx, proposalUnpauseVaultStx, proposalUnpauseVaultUsdc, proposalUnpauseVaultUsdh, proposalPauseVaultStx, proposalWhitelistFlashloanBobAllVaults } from '../helpers';
import { read_pyth_price_scaled } from './pyth-helpers';

export type VaultType = 'usdc' | 'sbtc' | 'usdh' | 'ststx' | 'stx';

/**
 * Calculate maximum borrowable amount for an account using calc-max-borrowable
 * @param account - Account principal address
 * @param collateralUsd - Total collateral value in USD (with 6 decimals)
 * @param debtUsd - Total debt value in USD (with 6 decimals)
 * @returns Object containing LTV-BORROW (in BPS, e.g., 4000 = 40%) and maxBorrowableUsd
 */
export function get_max_borrowable(
  account: string,
  collateralUsd: bigint,
  debtUsd: bigint
): { ltvBorrow: number; maxBorrowableUsd: bigint } {
  // Get enabled mask
  const enabledMask = rov(contracts.assets.getBitmap());
  
  // Get account's position
  const positionResult = rov(contracts.marketVault.getPosition(account, enabledMask));
  if (!positionResult.isOk) {
    throw new Error(`Failed to get position for account ${account}`);
  }
  const position = positionResult.value;
  const mask = position.mask;
  
  // Get egroup to get LTV-BORROW
  // Note: resolve() now returns (response egroup uint), so we need to extract the value
  const egroupResponse = rov(contracts.egroup.resolve(mask));
  
  // Check if response is ok (has egroup data)
  if (typeof egroupResponse.value === 'bigint') {
    throw new Error(`No egroup found for mask ${mask}. Error code: ${egroupResponse.value}`);
  }
  
  const egroupData = egroupResponse.value;
  
  // Convert Uint8Array (2 bytes) to number (big-endian)
  // LTV-BORROW is stored as uint128 which in Clarity is returned as a 2-byte buffer
  const ltvBorrowBuffer = Buffer.from(egroupData.lTVBORROW);
  const ltvBorrow = ltvBorrowBuffer.readUInt16BE(0);
  
  // Calculate max borrowable inline (reserve-calculator removed)
  // calc-max-borrowable: (collateral * ltv / BPS) - debt
  // BPS = 10000
  const maxBorrowableUsd = (collateralUsd * BigInt(ltvBorrow)) / 10000n - debtUsd;
  
  return {
    ltvBorrow,
    maxBorrowableUsd,
  };
}

/**
 * Calculate maximum borrowable amount in token units for an account
 * This function combines get_max_borrowable with token conversion
 * @param account - Account principal address
 * @param collateralUsd - Total collateral value in USD (with 6 decimals)
 * @param debtUsd - Total debt value in USD (with 6 decimals)
 * @param tokenPriceFeedId - Pyth feed ID for the token (e.g., PythFeedIds.USDC)
 * @param tokenDecimals - Token decimals (e.g., 6 for USDC)
 * @param deployer - Deployer address for reading oracle prices
 * @returns Object containing LTV-BORROW, maxBorrowableUsd, and maxBorrowableTokens
 */
export function get_max_borrowable_with_token_conversion(
  account: string,
  collateralUsd: bigint,
  debtUsd: bigint,
  tokenPriceFeedId: Uint8Array,
  tokenDecimals: number,
  deployer: string
): { 
  ltvBorrow: number; 
  maxBorrowableUsd: bigint;
  maxBorrowableTokens: bigint;
} {
  // Get max borrowable in USD
  const { ltvBorrow, maxBorrowableUsd } = get_max_borrowable(
    account,
    collateralUsd,
    debtUsd
  );
  
  // Convert USD to token amount
  // Convert Uint8Array to Buffer for read_pyth_price_scaled
  const tokenPriceFeedBuffer = Buffer.from(tokenPriceFeedId);
  const tokenPriceScaled = read_pyth_price_scaled(tokenPriceFeedBuffer, deployer, -8);
  const tokenPrice8Decimals = Number(tokenPriceScaled) / 100_000_000;
  const tokenDecimalsMultiplier = BigInt(10 ** tokenDecimals);
  const priceMultiplier = BigInt(Math.floor(tokenPrice8Decimals * 1_000_000));
  
  // Convert: maxBorrowableUsd (6 decimals) * tokenDecimalsMultiplier / priceMultiplier
  const maxBorrowableTokens = (maxBorrowableUsd * tokenDecimalsMultiplier) / priceMultiplier;
  
  return {
    ltvBorrow,
    maxBorrowableUsd,
    maxBorrowableTokens,
  };
}


export function proposalSetFlashFee(vaultType: VaultType, signer: string = deployer) {
  switch (vaultType) {
    case 'usdc':
      return executeDaoProposal(proposalSetFlashFeeUsdc, signer);
    case 'stx':
      return executeDaoProposal(proposalSetFlashFeeStx, signer);
    // TODO: Add other vault types
    default:
      throw new Error(`Unknown vault type: ${vaultType}`);
  }
}

export function pauseVault(vaultType: VaultType, signer: string = deployer) {
  switch (vaultType) {
    case 'usdc':
      return executeDaoProposal(proposalPauseVaultUsdc, signer);
    case 'sbtc':
      return executeDaoProposal(proposalPauseVaultSbtc, signer);
    case 'usdh':
      return executeDaoProposal(proposalPauseVaultUsdh, signer);
    case 'ststx':
      return executeDaoProposal(proposalPauseVaultStstx, signer);
    case 'stx':
      return executeDaoProposal(proposalPauseVaultStx, signer);
    default:
      throw new Error(`Unknown vault type: ${vaultType}`);
  }
}

export function unpauseVault(vaultType: VaultType, signer: string = deployer) {
  switch (vaultType) {
    case 'usdc':
      return executeDaoProposal(proposalUnpauseVaultUsdc, signer);
    case 'sbtc':
      return executeDaoProposal(proposalUnpauseVaultSbtc, signer);
    case 'usdh':
      return executeDaoProposal(proposalUnpauseVaultUsdh, signer);
    case 'ststx':
      return executeDaoProposal(proposalUnpauseVaultStstx, signer);
    case 'stx':
      return executeDaoProposal(proposalUnpauseVaultStx, signer);
    default:
      throw new Error(`Unknown vault type: ${vaultType}`);
  }
}

export function whitelistFlashloanBob(signer: string = deployer) {
  return executeDaoProposal(proposalWhitelistFlashloanBobAllVaults, signer);
}
