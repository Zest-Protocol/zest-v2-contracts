/**
 * zv-stbtc-0 DAO ownership — the owner-auth is tx-sender based (heavy powers), so the Zest
 * DAO (`dao-executor`) can own and govern the vault via proposals. This is the change that
 * makes `owner → dao-executor` actually work: owner-gated functions assert `is-owner(tx-sender)`,
 * and inside the executor's `as-contract?` run `tx-sender = dao-executor`.
 *
 * Guardian / trader / rewarder / manager stay contract-caller (EOA-callable) — verified elsewhere;
 * here we prove the owner (heavy-power) path is DAO-governable and correctly gated.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { txOk, txErr, rov } from '@clarigen/test';
import { deployer, alice, svState, contracts } from './helpers';
import { initializeDAO, executeDaoProposal } from '../../setup/helpers';

const DAO = contracts.daoExecutor.identifier;   // ST….dao-executor
const ERR_NOT_AUTHORIZED = 860001n;

describe('zv-stbtc-0 DAO ownership (tx-sender owner-auth)', () => {
  beforeEach(() => { initializeDAO(); });

  it('deployer owns at deploy, hands ownership to dao-executor, then the DAO governs', () => {
    // interim: deployer is owner (direct call → tx-sender == owner)
    expect(rov(svState.isOwner(deployer))).toBe(true);
    txOk(svState.setDepositEnabled(true), deployer);        // owner action works for the EOA owner

    // hand off: deployer requests, DAO claims via proposal (tx-sender = dao-executor = pending-owner)
    txOk(svState.requestOwnerTransfer(DAO), deployer);
    executeDaoProposal(contracts.proposalTestZvClaimOwnership, deployer);
    expect(rov(svState.isOwner(DAO))).toBe(true);
    expect(rov(svState.isOwner(deployer))).toBe(false);

    // DAO now exercises heavy powers via proposal: toggle a flag + assign a hot role to an EOA
    executeDaoProposal(contracts.proposalTestZvOwnerConfig, deployer);
    expect(rov(svState.getDepositConfig()).depositEnabled).toBe(false);
    expect(rov(svState.isTrader(alice))).toBe(true);        // set-hot-role via DAO landed
  });

  it('after handoff the ex-owner (deployer) can no longer exercise owner powers', () => {
    txOk(svState.requestOwnerTransfer(DAO), deployer);
    executeDaoProposal(contracts.proposalTestZvClaimOwnership, deployer);
    expect(txErr(svState.setDepositEnabled(true), deployer).value).toBe(ERR_NOT_AUTHORIZED);
  });

  it('a never-owner EOA cannot exercise owner powers', () => {
    expect(txErr(svState.setDepositEnabled(false), alice).value).toBe(ERR_NOT_AUTHORIZED);
    expect(txErr(svState.setHotRole(Uint8Array.from([0x10]), alice), alice).value).toBe(ERR_NOT_AUTHORIZED);
  });
});
