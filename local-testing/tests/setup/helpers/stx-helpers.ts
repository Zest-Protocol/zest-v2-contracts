/**
 * Get STX native balance for a given address directly from simnet (without wSTX token)
 * @param address - The principal address to check STX balance for
 * @returns The STX balance in microSTX (bigint)
 */
export function getStxBalance(address: string): bigint {
  const assetsMap = simnet.getAssetsMap();
  const stxAssets = assetsMap.get('STX');
  return stxAssets?.get(address) || 0n;
}

/**
 * Get STX native balances for multiple addresses
 * @param addresses - Array of principal addresses to check STX balances for
 * @returns Map of address to STX balance in microSTX
 */
export function getStxBalances(addresses: string[]): Map<string, bigint> {
  const assetsMap = simnet.getAssetsMap();
  const stxAssets = assetsMap.get('STX');
  const balances = new Map<string, bigint>();
  
  for (const address of addresses) {
    balances.set(address, stxAssets?.get(address) || 0n);
  }
  
  return balances;
}

