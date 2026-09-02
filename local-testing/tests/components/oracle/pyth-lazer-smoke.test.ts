import { describe, it, expect } from 'vitest';
import { deployer, alice } from '../../setup/helpers';
import {
  setLazerTrustedSigner,
  submitLazerUpdateRaw,
  buildLazerUpdate,
  encodeLazerPayload,
  scaleLazerPrice,
  nowMicros,
  getLazerSignerPubkey,
  LazerFeedIds,
} from '../../setup/helpers/pyth-lazer-helpers';

// Extract the decoded feeds list from a simnet result, asserting it succeeded.
// verify-price-feeds returns (ok { timestamp, channel, price-feeds: [...] }); the
// simnet result nests it as res.result.value.value (tuple) -> ['price-feeds'].value
// (the list), each entry being { type: 'tuple', value: { feed-id, price, ... } }.
function decodedFeeds(res: any): any[] {
  expect(res.result.type).toBe('ok');
  const tup = res.result.value.value;
  const feedsList = tup['price-feeds'];
  expect(feedsList?.type).toBe('list');
  return feedsList.value.map((f: any) => f.value);
}

// End-to-end check that the vendored canonical Pyth Lazer suite works under simnet:
// a real secp256k1-signed update is parsed + verified by the on-chain decoder and
// returned from `verify-price-feeds`. There is no storage. If the byte layout or
// signature were wrong, the decoder would revert (ERR_INVALID_EVM_MAGIC /
// ERR_INVALID_SIGNATURE / ERR_UNTRUSTED_SIGNER).
describe('pyth-lazer smoke', () => {
  it('signs, verifies, and returns a single decoded feed', () => {
    setLazerTrustedSigner(deployer);
    const payload = encodeLazerPayload(nowMicros(), 1, [
      { feedId: LazerFeedIds.BTC, price: scaleLazerPrice(60000, -8), exponent: -8, publisherCount: 5 },
    ]);
    const res = submitLazerUpdateRaw(buildLazerUpdate(payload), deployer);
    const feeds = decodedFeeds(res);
    expect(feeds.length).toBe(1);
    const f = feeds[0];
    expect(f['feed-id'].value).toBe(BigInt(LazerFeedIds.BTC));
    expect(f.price.value.value).toBe(scaleLazerPrice(60000, -8)); // 6_000_000_000_000
    expect(f.exponent.value.value).toBe(-8n);
    expect(f['publisher-count'].value.value).toBe(5n);
  });

  it('rejects an update when no trusted signer is registered', () => {
    // No setLazerTrustedSigner: the recovered signer is untrusted -> revert.
    const payload = encodeLazerPayload(nowMicros(), 1, [
      { feedId: LazerFeedIds.STX, price: scaleLazerPrice(2, -8), exponent: -8, publisherCount: 5 },
    ]);
    const res = submitLazerUpdateRaw(buildLazerUpdate(payload), deployer);
    expect(res.result.type).toBe('err');
  });

  it('verifies a multi-feed batch, and is idempotent (verify-only, no storage)', () => {
    setLazerTrustedSigner(deployer);
    const payload = encodeLazerPayload(nowMicros(), 1, [
      { feedId: LazerFeedIds.BTC, price: scaleLazerPrice(61000, -8), exponent: -8, publisherCount: 7 },
      { feedId: LazerFeedIds.USDC, price: scaleLazerPrice(1, -8), exponent: -8, publisherCount: 3 },
    ]);
    const update = buildLazerUpdate(payload);
    // Any sender can relay a signed update.
    const first = submitLazerUpdateRaw(update, alice);
    const feeds = decodedFeeds(first);
    expect(feeds.length).toBe(2);

    // The canonical oracle is verify-only: re-verifying the SAME update succeeds
    // (there is no monotonic / storage guard to reject it).
    const second = submitLazerUpdateRaw(update, alice);
    expect(decodedFeeds(second).length).toBe(2);
  });

  it('derives a 33-byte compressed signer pubkey', () => {
    expect(getLazerSignerPubkey().length).toBe(33);
  });
});
