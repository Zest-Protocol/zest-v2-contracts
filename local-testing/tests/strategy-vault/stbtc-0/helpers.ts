import { projectFactory } from '@clarigen/core';
import { txOk, txErr, rov, ro } from '@clarigen/test';
import { project, accounts } from '../../clarigen-types';
import { Cl } from '@stacks/transactions';

export const contracts = projectFactory(project, 'simnet');
export const deployer = accounts.deployer.address;
export const alice = accounts.wallet_1.address;
export const bob = accounts.wallet_2.address;
export const charlie = accounts.wallet_3.address;

export const svEngine = contracts.zvEngineStbtc0;
export const svState = contracts.zvStateStbtc0;
export const svOps = contracts.zvOpsStbtc0;
export const svToken = contracts.zvstBTC;
export const sbtc = contracts.sbtc;
export const stbtcToken = contracts.stbtcToken;
export const stackingDao = contracts.stackingDaoMock;

// stBTC has 8 decimals: 1 BTC = 100_000_000 sats
export const ONE_STBTC = 100_000_000n;
export const DEAD_SHARES = 1_000n;
export const MIN_DEPOSIT = 100n;

// Advance simnet time past the update-window (86340s) and timelock (86400s).
// Each simnet block ~10s -> 9000 blocks covers both.
export function advancePastWindow() {
  simnet.mineEmptyBlocks(9000);
}

// Full vault initialization: mint dead shares via initialize.
// Deployer pays DEAD_SHARES sats of stBTC.
export function initializeVault() {
  txOk(stbtcToken.mint(DEAD_SHARES, deployer), deployer);
  txOk(svEngine.initialize(stbtcToken.identifier), deployer);
}

// Mint stBTC to user and deposit into vault. Returns shares received.
export function depositStbtc(user: string, amount: bigint): bigint {
  txOk(stbtcToken.mint(amount, user), deployer);
  const result = txOk(svEngine.deposit(stbtcToken.identifier, amount, 0n), user);
  return result.value as bigint;
}
