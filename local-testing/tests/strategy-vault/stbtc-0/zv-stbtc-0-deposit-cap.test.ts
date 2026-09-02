/**
 * zv-stbtc-0 deposit cap — a NET external-deposit ceiling, decoupled from NAV/looping, with an
 * INSTANT owner-or-manager setter (no timelock).
 *
 * Requirements proven here:
 *  - deposits close once cumulative NET deposits hit the cap (not when NAV hits it);
 *  - NAV growth (yield/looping — modeled here by a direct stBTC donation to state) does NOT
 *    consume cap headroom — the counter only moves on deposit/withdrawal;
 *  - a withdrawal (fund-claim) frees room, so the cap is net, not monotonic;
 *  - set-deposit-cap is instant and callable by owner OR manager; nobody else.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { txOk, txErr, rov } from '@clarigen/test';
import { deployer, alice, bob, svEngine, svState, svToken, stbtcToken, depositStbtc, initializeVault } from './helpers';

const ERR_CAP_EXCEEDED = 870002n;      // engine
const ERR_NOT_AUTHORIZED = 860001n;    // state
const KEY_MANAGER = Uint8Array.from([0x12]);
const cap = () => Number(rov(svState.getDepositConfig()).depositCap);
const net = () => Number(rov(svState.getDepositConfig()).netDeposited);
const failDeposit = (user: string, amt: bigint) => {
  txOk(stbtcToken.mint(amt, user), deployer);
  return txErr(svEngine.deposit(stbtcToken.identifier, amt, 0n), user).value;
};

describe('zv-stbtc-0 deposit cap (net, instant setter)', () => {
  beforeEach(() => { initializeVault(); });

  it('closes deposits at the NET ceiling, and raising the cap reopens them', () => {
    txOk(svState.setDepositCap(1_000_000n), deployer);   // instant, owner
    depositStbtc(alice, 600_000n);
    depositStbtc(alice, 400_000n);                        // net = cap = 1,000,000
    expect(net()).toBe(1_000_000);
    expect(failDeposit(bob, 100n)).toBe(ERR_CAP_EXCEEDED);
    txOk(svState.setDepositCap(1_500_000n), deployer);    // raise
    depositStbtc(bob, 500_000n);                          // now allowed
    expect(net()).toBe(1_500_000);
  });

  it('caps NET deposits, not NAV — a donation (yield/loop proxy) does not consume headroom', () => {
    txOk(svState.setDepositCap(1_000_000n), deployer);
    depositStbtc(alice, 500_000n);                        // net 500k, gross ~500k
    txOk(stbtcToken.mint(500_000n, svState.identifier), deployer);  // donate → gross jumps, net unchanged
    expect(net()).toBe(500_000);
    depositStbtc(alice, 500_000n);                        // net-based check passes (500k+500k=cap); NAV-based would have blocked
    expect(net()).toBe(1_000_000);
  });

  it('a withdrawal frees cap room (net, not monotonic)', () => {
    txOk(svState.setDepositCap(1_000_000n), deployer);
    depositStbtc(alice, 1_000_000n);                      // at cap
    expect(failDeposit(bob, 100n)).toBe(ERR_CAP_EXCEEDED);
    const claimId = txOk(svEngine.requestRedeem(500_000n, false), alice).value; // escrow
    txOk(svEngine.fundClaim(claimId), deployer);          // manager funds → net-deposited -= assets
    expect(net()).toBeLessThan(1_000_000);
    depositStbtc(bob, 400_000n);                          // room reopened
  });

  it('set-deposit-cap is instant and owner-or-manager only', () => {
    txOk(svState.setDepositCap(5_000n), deployer);        // owner ✓
    expect(cap()).toBe(5_000);
    txOk(svState.setHotRole(KEY_MANAGER, alice), deployer); // make alice the manager
    txOk(svState.setDepositCap(6_000n), alice);           // manager ✓
    expect(cap()).toBe(6_000);
    expect(txErr(svState.setDepositCap(7_000n), bob).value).toBe(ERR_NOT_AUTHORIZED); // neither
  });
});
