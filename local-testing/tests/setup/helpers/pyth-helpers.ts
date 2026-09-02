// ============================================================================
// Pyth test helpers — Pyth Lazer (canonical verify-only) edition
// ----------------------------------------------------------------------------
// The old wormhole/PNAU Pyth stack has been removed. This module now backs the
// legacy exported names (init_pyth, set_price, set_initial_price,
// scalePriceForPyth, read_pyth_price_scaled, PythFeedIds) entirely on Pyth
// Lazer, so the ~50 test files that import them keep working.
//
// The canonical Lazer oracle (.pyth-lazer-oracle) is verify-only: it verifies a
// signed update and returns the decoded feeds for in-tx use, with NO on-chain
// storage. priceFeeds() builds a SIGNED INLINE update (channel 3) carrying every
// price registered via set_price, timestamped against the simnet clock. Slot the
// returned list into a market call's `price-feeds` arg. The market verifies it
// inline via .pyth-lazer-oracle verify-price-feeds and resolves from the in-tx
// context.
// every market call that resolves a price MUST pass priceFeeds() (not null) as
// its `price-feeds` argument.
// ============================================================================

import { Simnet } from '@stacks/clarinet-sdk';
import { contracts, executeDaoProposal } from '../helpers';
import {
  setLazerTrustedSigner,
  inlineLazerUpdate,
  blockTimeMicros,
  LazerFeedIds,
} from './pyth-lazer-helpers';

export const simnet = (globalThis as any).simnet as Simnet;

// ============================================================================
// FEED IDS
// ============================================================================
// Legacy Pyth v2 32-byte feed-id hashes, kept for import compatibility. Each
// maps to a Lazer uint feed-id (BTC=1, USDC=7, STX=45) via PYTH_TO_LAZER_FEED.
export const PythFeedIds = {
  BTC: Buffer.from('e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', 'hex'),
  STX: Buffer.from('ec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17', 'hex'),
  ETH: Buffer.from('ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace', 'hex'),
  USDC: Buffer.from('eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a', 'hex'),
  USDT: Buffer.from('2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b', 'hex'),
};

// Map legacy Pyth v2 32-byte feed-id hashes to Lazer uint feed-ids.
const PYTH_TO_LAZER_FEED: Record<string, number> = {
  [PythFeedIds.BTC.toString('hex')]: LazerFeedIds.BTC,
  [PythFeedIds.STX.toString('hex')]: LazerFeedIds.STX,
  [PythFeedIds.USDC.toString('hex')]: LazerFeedIds.USDC,
  [PythFeedIds.USDT.toString('hex')]: LazerFeedIds.USDC,
  [PythFeedIds.ETH.toString('hex')]: LazerFeedIds.ETH,
};

// ============================================================================
// PRICE REGISTRY (for inline updates)
// ----------------------------------------------------------------------------
// set_price stashes the latest (mantissa, exponent) per Lazer feed-id here.
// priceFeeds() builds one signed update carrying every registered feed, so a
// single market call can resolve BTC + STX + USDC from one inline update.
// ============================================================================

interface RegisteredPrice {
  price: bigint;
  exponent: number;
}
const priceRegistry = new Map<number, RegisteredPrice>();

function registerPrice(lazerFeedId: number, price: bigint, exponent: number) {
  priceRegistry.set(lazerFeedId, { price, exponent });
}

// ============================================================================
// INIT
// ============================================================================
// init_pyth now does only Lazer setup: register the trusted signer, repoint the
// base assets' oracle configs to Lazer, and seed USDH at $1 (legacy tests
// assume the peg without setting it). Returns an empty array (the old wormhole
// guardian set) for callers that captured the return value.
export function init_pyth(deployer: string): unknown[] {
  setLazerTrustedSigner(deployer);
  try {
    executeDaoProposal(contracts.proposalLazerRepoint, deployer);
  } catch {
    // If the proposal contract is unavailable, keep going.
  }
  // Seed USDH at $1 (legacy tests assume the peg). The canonical Lazer oracle is
  // verify-only (no storage), so we just register the price for the inline priceFeeds()
  // builder — no oracle call needed.
  registerPrice(LazerFeedIds.USDH, 100_000_000n, -8);
  return [];
}

// ============================================================================
// SET PRICE (register for inline priceFeeds())
// ============================================================================
// The canonical Lazer oracle is verify-only (no storage). set_price just registers
// the price so priceFeeds() can build a signed inline update carrying it.
// `price` is the already-scaled mantissa (e.g. scalePriceForPyth(60000, -8)).
export async function set_price(
  feedId: Buffer,
  price: bigint,
  expo: number = -8,
  deployer: string,
): Promise<bigint> {
  const lazerFeedId = PYTH_TO_LAZER_FEED[feedId.toString('hex')];
  if (lazerFeedId === undefined) {
    // Not a Lazer-mapped feed (e.g. a mock-oracle feed) — skip silently; the caller
    // handles these via the mock oracle's own set-price path.
    return 0n;
  }
  registerPrice(lazerFeedId, price, expo);
  return 0n;
}

export async function set_initial_price(
  feedId: Buffer,
  price: bigint,
  deployer: string,
): Promise<bigint> {
  return set_price(feedId, price, -8, deployer);
}

// ============================================================================
// INLINE PRICE-FEEDS BUILDER
// ----------------------------------------------------------------------------
// Build the `price-feeds` argument for a market call: a single-element array
// containing one signed Lazer update (channel 3) carrying every price
// registered via set_price, timestamped at the simnet chain clock. The market
// verifies it inline and resolves all assets from this one update.
//
// Returns a plain Uint8Array[] (or null) so clarigen's arg transformer wraps it
// into the (optional (list 3 (buff 8192))) the contract expects. Pass it as the
// last arg to market.collateralAdd / borrow / liquidate (replacing `null`):
//   market.borrow(usdc, amt, alice, priceFeeds())
export function priceFeeds(): Uint8Array[] | null {
  const feeds = Array.from(priceRegistry.entries()).map(([feedId, p]) => ({
    feedId,
    price: p.price,
    exponent: p.exponent,
    publisherCount: 5,
  }));
  if (feeds.length === 0) return null;
  const update = inlineLazerUpdate(feeds, { timestampMicros: blockTimeMicros() });
  return [update];
}

// Convenience: the same update as a raw Buffer (for tests that build the Cl
// value themselves or pass to non-market entrypoints).
export function priceFeedsBuffer(): Buffer {
  const feeds = Array.from(priceRegistry.entries()).map(([feedId, p]) => ({
    feedId,
    price: p.price,
    exponent: p.exponent,
    publisherCount: 5,
  }));
  return inlineLazerUpdate(feeds, { timestampMicros: blockTimeMicros() });
}

// ============================================================================
// SCALING
// ============================================================================

export function scalePriceForPyth(humanPrice: number, expo: number): bigint {
  const absExpo = Math.abs(expo);
  const multiplier = BigInt(10 ** absExpo);
  return BigInt(humanPrice) * multiplier;
}

// ============================================================================
// READ HELPERS
// ============================================================================
// Read a price from the price registry and re-scale to the target exponent.
// The canonical Lazer oracle is verify-only (no storage), so we read from the
// in-memory price registry (populated by set_price / set_initial_price).
// `feedId` is a legacy Pyth 32-byte feed-id hash (mapped to a Lazer uint).
export function read_pyth_price_scaled(
  feedId: Buffer,
  _deployer: string,
  targetExpo: number = -8,
): bigint {
  const lazerFeedId = PYTH_TO_LAZER_FEED[feedId.toString('hex')];
  if (lazerFeedId === undefined) {
    throw new Error(`read_pyth_price_scaled: no Lazer mapping for feed ${feedId.toString('hex')}`);
  }
  const registered = priceRegistry.get(lazerFeedId);
  if (!registered) {
    throw new Error(`read_pyth_price_scaled: no price registered for Lazer feed ${lazerFeedId}`);
  }
  const rawPrice = registered.price;
  const expo = registered.exponent;
  const diff = targetExpo - expo;
  if (diff > 0) {
    return rawPrice * 10n ** BigInt(diff);
  } else if (diff < 0) {
    return rawPrice / 10n ** BigInt(-diff);
  }
  return rawPrice;
}
