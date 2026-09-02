/**
 * zv-stbtc-0 deposit-cap — FULL end-to-end flow on the real harness (market + egroup + Lazer
 * oracle + actual looping + real express withdrawal), matching the exact production test plan:
 *
 *   deploy as usual -> set a very low cap -> deposit to cap -> try deposit more (blocked)
 *   -> loop so NAV > cap (real open-position + StackingDAO yield) -> deposits still blocked
 *   -> allow express withdrawal, cooldown 0 -> someone removes (express redeem)
 *   -> can deposit up to cap again.
 *
 * This proves the cap is on NET deposits (decoupled from NAV/looping), is net (redemptions free
 * room), and works with real leverage + express withdrawals.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { txOk, txErr, rov } from '@clarigen/test';
import {
  deployer, alice, bob,
  initializeProtocol, executeDaoProposal, contracts, proposalCreateMultipleEgroups,
} from '../../setup/helpers';
import { setLazerTrustedSigner } from '../../setup/helpers/pyth-lazer-helpers';
import { init_pyth, set_initial_price, priceFeeds, PythFeedIds, scalePriceForPyth } from '../../setup/helpers/pyth-helpers';

const {
  vaultStbtc, vaultSbtc, stbtcToken, sbtc: sbtcToken, proposalSetMarketV1,
  zvEngineStbtc0: svEngine, zvStateStbtc0: svState, zvOpsStbtc0: svOps, stackingDaoMock: stackingDao,
} = contracts;

const ONE = 100_000_000n;                       // 1 stBTC
const CAP = 10n * ONE;                          // low test cap: 10 stBTC
const ERR_CAP = 870002n;
const KEY_EXPRESS_COOLDOWN = Uint8Array.from([0x06]);
const net = () => rov(svState.getDepositConfig()).netDeposited as bigint;

describe('zv-stbtc-0 deposit-cap: full loop + express flow', () => {
  beforeEach(async () => {
    initializeProtocol();
    executeDaoProposal(proposalCreateMultipleEgroups);
    executeDaoProposal(proposalSetMarketV1);
    init_pyth(deployer);
    setLazerTrustedSigner(deployer);
    await set_initial_price(PythFeedIds.BTC, scalePriceForPyth(60000, -8), deployer);
    txOk(stbtcToken.mint(1000n, deployer), deployer);
    txOk(vaultStbtc.initialize(), deployer);
    txOk(sbtcToken.mint(10_000_000_000n, bob), deployer);
    txOk(vaultSbtc.deposit(10_000_000_000n, 0n, bob), bob);  // borrow liquidity
    txOk(stbtcToken.mint(1000n, deployer), deployer);
    txOk(svEngine.initialize(stbtcToken.identifier), deployer);
  });

  const deposit = (user: string, amt: bigint) => {
    txOk(stbtcToken.mint(amt, user), deployer);
    return txOk(svEngine.deposit(stbtcToken.identifier, amt, 0n), user);
  };
  const failDeposit = (user: string, amt: bigint) => {
    txOk(stbtcToken.mint(amt, user), deployer);
    return txErr(svEngine.deposit(stbtcToken.identifier, amt, 0n), user).value;
  };

  it('cap → deposit → blocked → loop past cap → express exit → redeposit', () => {
    // 1. set a very low cap (instant)
    txOk(svState.setDepositCap(CAP), deployer);

    // 2. deposit to cap
    deposit(alice, CAP);
    expect(net()).toBe(CAP);

    // 3. try to deposit more -> blocked
    expect(failDeposit(bob, ONE)).toBe(ERR_CAP);

    // 4. loop (real open-position) + StackingDAO yield so NAV rises ABOVE the cap
    txOk(svOps.openPosition(stbtcToken.identifier, sbtcToken.identifier, 5n * ONE, 3n * ONE, priceFeeds()), deployer);
    txOk(stackingDao.setRatio(150_000_000n), deployer);        // ratio 1.0 -> 1.5: debt shrinks -> NAV up
    const nav = rov(svEngine.getNetAssets()).value as bigint;
    expect(nav).toBeGreaterThan(CAP);                          // NAV > cap...
    expect(failDeposit(bob, ONE)).toBe(ERR_CAP);               // ...yet deposits STILL blocked (net-based, not NAV)
    expect(net()).toBe(CAP);

    // 5. allow express withdrawal with wait time 0
    txOk(svState.setExpressEnabled(true), deployer);
    txOk(svState.requestUintUpdate(KEY_EXPRESS_COOLDOWN, 0n), deployer);
    simnet.mineEmptyBlocks(9000);                              // past the 24h timelock
    txOk(svState.confirmUintUpdate(KEY_EXPRESS_COOLDOWN), deployer);

    // 6. someone removes via express (request -> fund -> redeem, all at wait 0)
    const claimId = txOk(svEngine.requestRedeem(3n * ONE, true), alice).value;   // express
    txOk(svEngine.fundClaim(claimId), deployer);              // net-deposited -= assets here
    txOk(svEngine.redeem(stbtcToken.identifier, claimId), alice);
    const afterExit = net();
    expect(afterExit).toBeLessThan(CAP);                      // room freed (net, not monotonic)

    // 7. can deposit up to the cap again
    const room = CAP - afterExit;
    deposit(bob, room);
    expect(net()).toBe(CAP);
    expect(failDeposit(bob, ONE)).toBe(ERR_CAP);              // and closed again at the cap
  });
});
