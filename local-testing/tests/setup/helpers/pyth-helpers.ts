import { Cl } from '@stacks/transactions';
import * as secp from '@noble/secp256k1';
import { keccak_256 } from '@noble/hashes/sha3';
import { hmac } from '@noble/hashes/hmac';
import { sha256 } from '@noble/hashes/sha256';
import { hexToBytes } from '@noble/hashes/utils';
import { webcrypto } from 'node:crypto';
import { Simnet } from '@stacks/clarinet-sdk';
import { rov } from '@clarigen/test';
import { contracts } from '../helpers';

// Get simnet instance
const simnet = (globalThis as any).simnet as Simnet;

// Setup crypto for secp256k1
// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;
secp.etc.hmacSha256Sync = (k, ...m) => hmac(sha256, k, secp.etc.concatBytes(...m));

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function bigintToBuffer(bigintValue: bigint, byteLength: number): Buffer {
  if (bigintValue >= 0n) {
    let hexString = bigintValue.toString(16);
    const padding = byteLength * 2 - hexString.length;
    for (let i = 0; i < padding; i++) {
      hexString = '0' + hexString;
    }
    return Buffer.from(hexString, 'hex');
  } else {
    const twosComplement = (BigInt(1) << BigInt(byteLength * 8)) + bigintValue;
    return bigintToBuffer(twosComplement, byteLength);
  }
}

function bufferToHexString(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => ('0' + (byte & 0xff).toString(16)).slice(-2)).join('');
}

function bufferToBigint(bytes: Uint8Array): bigint {
  const hexString = bufferToHexString(bytes);
  return BigInt('0x' + hexString);
}

// ============================================================================
// PYTH CONSTANTS
// ============================================================================

export const PythFeedIds = {
  BTC: Buffer.from('e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', 'hex'),
  STX: Buffer.from('ec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17', 'hex'),
  ETH: Buffer.from('ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace', 'hex'),
  USDC: Buffer.from('eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a', 'hex'),
  USDT: Buffer.from('2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b', 'hex'),
};

const PnauMagicBytes = new Uint8Array(Buffer.from('504e4155', 'hex'));
const AuwvMagicBytes = new Uint8Array(Buffer.from('41555756', 'hex'));
const PgtmMagicBytes = new Uint8Array(Buffer.from('5054474d', 'hex'));

const InitialGovernanceDataSource = {
  chain: 1,
  address: hexToBytes('5635979a221c34931e32620b9293a463065555ea71fe97cd6237ade875b12e9e'),
};

const DefaultGovernanceDataSource = {
  chain: 99,
  address: hexToBytes('00000000000000000000000000000000000000000000000000000000000000FF'),
};

const DefaultGovernanceDataSourceUpdate = {
  chain: 99,
  sequence: 1n,
  address: hexToBytes('00000000000000000000000000000000000000000000000000000000000000FF'),
};

const DefaultPricesDataSources = [
  {
    chain: 1,
    address: hexToBytes('6bb14509a612f01fbbc4cffeebd4bbfb492a86df717ebe92eb6df432a3f00a25'),
  },
  {
    chain: 26,
    address: hexToBytes('f8cd23c2ab91237730770bbea08d61005cdda0984348f3f6eecb559638c0bba0'),
  },
];

const GovernanceUpdateEmitter = {
  chain: 1,
  address: hexToBytes('0000000000000000000000000000000000000000000000000000000000000004'),
};

const validGuardianRotationModule = Buffer.from(
  '00000000000000000000000000000000000000000000000000000000436f7265',
  'hex',
);

// ============================================================================
// TYPES
// ============================================================================

interface Guardian {
  guardianId: number;
  secretKey: Uint8Array;
  compressedPublicKey: Uint8Array;
  uncompressedPublicKey: Uint8Array;
  ethereumAddress: Uint8Array;
}

interface PriceUpdate {
  priceIdentifier: Uint8Array;
  price: bigint;
  conf: bigint;
  emaPrice: bigint;
  emaConf: bigint;
  expo: number;
  publishTime: bigint;
  prevPublishTime: bigint;
}

interface PriceUpdateBatch {
  decoded: PriceUpdate[];
  serialized: Uint8Array[];
  hashed: Uint8Array[];
  proofs: Uint8Array[][];
}

interface VaaHeader {
  version: number;
  guardianSetId: number;
  signatures: Uint8Array[];
}

interface VaaBody {
  timestamp: number;
  emitterChain: number;
  nonce: number;
  emitterAddress: Uint8Array;
  sequence: bigint;
  consistencyLevel: number;
  payload: Uint8Array;
}

interface Emitter {
  chain: number;
  address: Uint8Array;
}

// ============================================================================
// WORMHOLE FUNCTIONS
// ============================================================================

function generateGuardianSetKeychain(count: number = 19): Guardian[] {
  // Use FIXED secret keys for testing (deterministic, not random)
  // This ensures guardian signatures can be verified consistently across test runs
  const fixedSecretKeys = [
    '0x01', '0x02', '0x03', '0x04', '0x05', '0x06', '0x07', '0x08', '0x09', '0x0a',
    '0x0b', '0x0c', '0x0d', '0x0e', '0x0f', '0x10', '0x11', '0x12', '0x13',
  ];
  
  const keychain: Guardian[] = [];
  for (let i = 0; i < count; i++) {
    const secretKey = hexToBytes(fixedSecretKeys[i].slice(2).padStart(64, '0'));
    const uncompressedPublicKey = secp.getPublicKey(secretKey, false).slice(1, 65);
    const ethereumAddress = keccak_256(uncompressedPublicKey).slice(12, 32);
    keychain.push({
      guardianId: i,
      secretKey,
      uncompressedPublicKey,
      ethereumAddress,
      compressedPublicKey: secp.getPublicKey(secretKey, true),
    });
  }
  return keychain;
}

function serializeVaaBodyToBuffer(vaaBody: VaaBody): Buffer {
  const components: Buffer[] = [];
  
  let v = Buffer.alloc(4);
  v.writeUInt32BE(vaaBody.timestamp, 0);
  components.push(v);

  v = Buffer.alloc(4);
  v.writeUInt32BE(vaaBody.nonce, 0);
  components.push(v);

  v = Buffer.alloc(2);
  v.writeUInt16BE(vaaBody.emitterChain, 0);
  components.push(v);

  components.push(Buffer.from(vaaBody.emitterAddress));
  components.push(bigintToBuffer(vaaBody.sequence, 8));

  v = Buffer.alloc(1);
  v.writeUint8(vaaBody.consistencyLevel, 0);
  components.push(v);

  components.push(Buffer.from(vaaBody.payload));

  return Buffer.concat(components);
}

function serializeVaaHeaderToBuffer(vaaHeader: VaaHeader): Buffer {
  const components: Buffer[] = [];
  
  let v = Buffer.alloc(1);
  v.writeUint8(vaaHeader.version, 0);
  components.push(v);

  v = Buffer.alloc(4);
  v.writeUInt32BE(vaaHeader.guardianSetId, 0);
  components.push(v);

  v = Buffer.alloc(1);
  v.writeUint8(vaaHeader.signatures.length, 0);
  components.push(v);

  components.push(Buffer.concat(vaaHeader.signatures.map(s => Buffer.from(s))));
  return Buffer.concat(components);
}

function serializeVaaToBuffer(vaaHeader: VaaHeader, vaaBody: VaaBody): Buffer {
  return Buffer.concat([
    serializeVaaHeaderToBuffer(vaaHeader),
    serializeVaaBodyToBuffer(vaaBody),
  ]);
}

function buildValidVaaHeader(
  keychain: Guardian[],
  body: VaaBody,
  opts: { version: number; guardianSetId: number },
): VaaHeader {
  const signatures: Uint8Array[] = [];
  const messageHash = keccak_256(keccak_256(serializeVaaBodyToBuffer(body)));

  for (const guardian of keychain) {
    const signature = secp.sign(messageHash, guardian.secretKey);
    const id = Buffer.alloc(1);
    id.writeUint8(guardian.guardianId, 0);

    const rec = Buffer.alloc(1);
    rec.writeUint8(signature.recovery || 0, 0);
    signatures.push(Buffer.concat([id, Buffer.from(signature.toCompactRawBytes()), rec]));
  }

  return {
    version: opts.version,
    guardianSetId: opts.guardianSetId,
    signatures,
  };
}

function buildValidVaaBodySpecs(opts: {
  payload: Uint8Array;
  emitter?: Emitter;
  sequence?: bigint;
}): VaaBody {
  const date = Math.floor(Date.now() / 1000);
  const timestamp = date >>> 0;
  const emitter = opts.emitter || InitialGovernanceDataSource;
  
  return {
    timestamp,
    nonce: 0,
    emitterChain: emitter.chain,
    emitterAddress: emitter.address,
    sequence: opts.sequence || 1n,
    consistencyLevel: 0,
    payload: opts.payload,
  };
}

function serializeGuardianUpdateVaaPayloadToBuffer(
  keyChain: Guardian[],
  action: number,
  chain: number,
  setId: number,
  module: Buffer = validGuardianRotationModule,
): Buffer {
  const components: Buffer[] = [];
  components.push(module);

  let v = Buffer.alloc(1);
  v.writeUint8(action, 0);
  components.push(v);

  v = Buffer.alloc(2);
  v.writeUInt16BE(chain, 0);
  components.push(v);

  v = Buffer.alloc(4);
  v.writeUInt32BE(setId, 0);
  components.push(v);

  v = Buffer.alloc(1);
  v.writeUint8(keyChain.length, 0);
  components.push(v);

  for (const guardian of keyChain) {
    components.push(Buffer.from(guardian.ethereumAddress));
  }

  return Buffer.concat(components);
}

// ============================================================================
// PYTH FUNCTIONS
// ============================================================================

function timestampNow(): bigint {
  return BigInt(Math.floor(Date.now() / 1000));
}

function buildPriceUpdate(
  priceIdentifier: Uint8Array,
  opts?: {
    price?: bigint;
    conf?: bigint;
    emaPrice?: bigint;
    emaConf?: bigint;
    expo?: number;
    publishTime?: bigint;
    prevPublishTime?: bigint;
  },
): PriceUpdate {
  return {
    priceIdentifier,
    price: opts?.price !== undefined ? opts.price : 100n,
    conf: opts?.conf || 10n,
    emaPrice: opts?.emaPrice || 95n,
    emaConf: opts?.emaConf || 9n,
    expo: opts?.expo || -4,
    publishTime: opts?.publishTime || timestampNow(),
    prevPublishTime: opts?.prevPublishTime || timestampNow() - 10n,
  };
}

function preserializePriceUpdateToBuffer(priceUpdate: PriceUpdate): Buffer {
  const components: Buffer[] = [];
  
  // Update type
  let v = Buffer.alloc(1);
  v.writeUint8(0, 0);
  components.push(v);
  
  components.push(Buffer.from(priceUpdate.priceIdentifier));
  components.push(bigintToBuffer(priceUpdate.price, 8));
  components.push(bigintToBuffer(priceUpdate.conf, 8));
  
  v = Buffer.alloc(4);
  v.writeInt32BE(priceUpdate.expo, 0);
  components.push(v);
  
  components.push(bigintToBuffer(priceUpdate.publishTime, 8));
  components.push(bigintToBuffer(priceUpdate.prevPublishTime, 8));
  components.push(bigintToBuffer(priceUpdate.emaPrice, 8));
  components.push(bigintToBuffer(priceUpdate.emaConf, 8));
  
  return Buffer.concat(components);
}

function keccak160HashLeaf(leaf: Uint8Array): Uint8Array {
  const prefix = new Uint8Array([0]);
  return keccak_256(Buffer.concat([prefix, Buffer.from(leaf)])).slice(0, 20);
}

function keccak160HashNodes(node1: Uint8Array, node2: Uint8Array): Uint8Array {
  const prefix = new Uint8Array([1]);
  if (bufferToBigint(node2) < bufferToBigint(node1)) {
    return keccak_256(Buffer.concat([prefix, Buffer.from(node2), Buffer.from(node1)])).slice(0, 20);
  } else {
    return keccak_256(Buffer.concat([prefix, Buffer.from(node1), Buffer.from(node2)])).slice(0, 20);
  }
}

function computeMerkleProof(targetLeaf: Uint8Array, batch: Uint8Array[]): Uint8Array[] {
  let merkleLeaves = [...batch];
  const proof: Uint8Array[] = [];
  let targetHash = targetLeaf;

  while (merkleLeaves.length > 1) {
    const newLeaves: Uint8Array[] = [];
    for (let i = 0; i < merkleLeaves.length; i += 2) {
      const leftLeaf = merkleLeaves[i];
      const rightLeaf = merkleLeaves[i + 1] || leftLeaf;
      const parentNode = keccak160HashNodes(leftLeaf, rightLeaf);
      newLeaves.push(parentNode);

      if (leftLeaf === targetHash) {
        proof.push(rightLeaf);
        targetHash = parentNode;
      } else if (rightLeaf === targetHash) {
        proof.push(leftLeaf);
        targetHash = parentNode;
      }
    }
    merkleLeaves = newLeaves;
  }
  return proof;
}

function buildPriceUpdateBatch(
  pricesUpdatesSpecs: [priceIdentifier: Uint8Array, opts?: any][],
): PriceUpdateBatch {
  const decoded: PriceUpdate[] = [];
  const serialized: Uint8Array[] = [];
  const hashed: Uint8Array[] = [];
  
  for (const [priceIdentifier, opts] of pricesUpdatesSpecs) {
    const p = buildPriceUpdate(priceIdentifier, opts);
    const s = preserializePriceUpdateToBuffer(p);
    decoded.push(p);
    serialized.push(s);
    hashed.push(keccak160HashLeaf(s));
  }
  
  const proofs: Uint8Array[][] = [];
  for (const hash of hashed) {
    proofs.push(computeMerkleProof(hash, hashed));
  }
  
  return { decoded, serialized, hashed, proofs };
}

function buildAuwvVaaPayload(batch: PriceUpdateBatch): any {
  let merkleLeaves = [...batch.hashed];
  
  while (merkleLeaves.length > 1) {
    const newLeaves: Uint8Array[] = [];
    for (let i = 0; i < merkleLeaves.length; i += 2) {
      const leftLeaf = merkleLeaves[i];
      const rightLeaf = merkleLeaves[i + 1] || leftLeaf;
      newLeaves.push(keccak160HashNodes(leftLeaf, rightLeaf));
    }
    merkleLeaves = newLeaves;
  }

  return {
    payloadType: AuwvMagicBytes,
    updateType: 0,
    merkleRootRingSize: 0,
    merkleRootSlot: 0n,
    merkleRootHash: merkleLeaves[0],
  };
}

function serializeAuwvVaaPayloadToBuffer(payload: any): Buffer {
  const components: Buffer[] = [];
  
  components.push(Buffer.from(payload.payloadType));
  
  let v = Buffer.alloc(1);
  v.writeUint8(payload.updateType, 0);
  components.push(v);
  
  components.push(bigintToBuffer(payload.merkleRootSlot, 8));
  
  v = Buffer.alloc(4);
  v.writeUint16BE(payload.merkleRootRingSize, 0);
  components.push(v);
  
  components.push(Buffer.from(payload.merkleRootHash));
  
  return Buffer.concat(components);
}

function serializePriceUpdateToBuffer(priceUpdateData: Uint8Array, proof: Uint8Array[]): Buffer {
  const components: Buffer[] = [];
  
  const messageSize = priceUpdateData.length;
  let v = Buffer.alloc(2);
  v.writeUint16BE(messageSize, 0);
  components.push(v);
  
  components.push(Buffer.from(priceUpdateData));
  
  v = Buffer.alloc(1);
  v.writeUint8(proof.length, 0);
  components.push(v);
  
  components.push(...proof.map(p => Buffer.from(p)));
  
  return Buffer.concat(components);
}

function buildPnauHeader(): any {
  return {
    magicBytes: PnauMagicBytes,
    versionMaj: 1,
    versionMin: 0,
    trailingSize: 0,
    proofType: 0,
  };
}

function serializePnauToBuffer(pnauHeader: any, pnauBody: any): Buffer {
  const components: Buffer[] = [];
  
  components.push(Buffer.from(pnauHeader.magicBytes));
  
  let v = Buffer.alloc(1);
  v.writeUint8(pnauHeader.versionMaj, 0);
  components.push(v);
  
  v = Buffer.alloc(1);
  v.writeUint8(pnauHeader.versionMin, 0);
  components.push(v);
  
  v = Buffer.alloc(1);
  v.writeUint8(pnauHeader.trailingSize, 0);
  components.push(v);
  
  v = Buffer.alloc(1);
  v.writeUint8(pnauHeader.proofType, 0);
  components.push(v);
  
  v = Buffer.alloc(2);
  v.writeUint16BE(pnauBody.vaa.length, 0);
  components.push(v);
  
  components.push(Buffer.from(pnauBody.vaa));
  
  v = Buffer.alloc(1);
  v.writeUint8(pnauBody.pricesUpdatesToSubmit.length, 0);
  components.push(v);
  
  for (let i = 0; i < pnauBody.pricesUpdates.serialized.length; i++) {
    if (pnauBody.pricesUpdatesToSubmit.some((id: Uint8Array) => 
      Buffer.from(id).equals(Buffer.from(pnauBody.pricesUpdates.decoded[i].priceIdentifier))
    )) {
      const priceUpdateData = pnauBody.pricesUpdates.serialized[i];
      components.push(serializePriceUpdateToBuffer(priceUpdateData, pnauBody.pricesUpdates.proofs[i]));
    }
  }
  
  return Buffer.concat(components);
}

function serializePtgmVaaPayloadToBuffer(payload: any): Buffer {
  const components: Buffer[] = [];
  
  components.push(Buffer.from(payload.magicBytes));
  
  let v = Buffer.alloc(1);
  v.writeUint8(payload.module, 0);
  components.push(v);
  
  v = Buffer.alloc(1);
  v.writeUint8(payload.action, 0);
  components.push(v);
  
  v = Buffer.alloc(2);
  v.writeUint16BE(payload.targetChainId, 0);
  components.push(v);

  if (payload.updateGovernanceDataSource) {
    v = Buffer.alloc(2);
    v.writeUint16BE(payload.updateGovernanceDataSource.chain, 0);
    components.push(v);
    
    components.push(bigintToBuffer(payload.updateGovernanceDataSource.sequence, 8));
    components.push(Buffer.from(payload.updateGovernanceDataSource.address));
  } else if (payload.updatePricesDataSources) {
    v = Buffer.alloc(1);
    v.writeUint8(payload.updatePricesDataSources.length, 0);
    components.push(v);

    for (const dataSource of payload.updatePricesDataSources) {
      v = Buffer.alloc(2);
      v.writeUint16BE(dataSource.chain, 0);
      components.push(v);
      components.push(Buffer.from(dataSource.address));
    }
  }
  
  return Buffer.concat(components);
}

function buildPtgmVaaPayload(opts: any): any {
  let action = 0x00;
  if (opts?.updatePricesDataSources) {
    action = 0x02;
  } else if (opts?.updateGovernanceDataSource) {
    action = 0x01;
  }
  
  return {
    magicBytes: PgtmMagicBytes,
    action,
    targetChainId: 50039,
    module: 3,
    updatePricesDataSources: opts?.updatePricesDataSources,
    updateGovernanceDataSource: opts?.updateGovernanceDataSource,
  };
}

// ============================================================================
// EXPORTED FUNCTIONS FOR TESTS
// ============================================================================

// Store guardian set globally so it can be reused for price updates
let globalGuardianSet: Guardian[] | null = null;

export function init_pyth(deployer: string): Guardian[] {
  const guardianSet = generateGuardianSetKeychain(19);
  
  // Apply guardian set update
  const guardianRotationPayload = serializeGuardianUpdateVaaPayloadToBuffer(
    guardianSet,
    2,
    0,
    1,
    validGuardianRotationModule,
  );
  
  const vaaBody = buildValidVaaBodySpecs({
    payload: guardianRotationPayload,
    emitter: GovernanceUpdateEmitter,
  });
  
  const vaaHeader = buildValidVaaHeader(guardianSet, vaaBody, {
    version: 1,
    guardianSetId: 0,
  });
  
  const vaa = serializeVaaToBuffer(vaaHeader, vaaBody);
  const uncompressedPublicKeys = guardianSet.map(g => Cl.buffer(g.uncompressedPublicKey));
  
  simnet.callPublicFn(
    'wormhole-core-v4',
    'update-guardians-set',
    [Cl.buffer(vaa), Cl.list(uncompressedPublicKeys)],
    deployer,
  );

  // Apply governance data source update
  const ptgmPayload1 = buildPtgmVaaPayload({ updateGovernanceDataSource: DefaultGovernanceDataSourceUpdate });
  const payload1 = serializePtgmVaaPayloadToBuffer(ptgmPayload1);
  const body1 = buildValidVaaBodySpecs({ payload: payload1, emitter: InitialGovernanceDataSource, sequence: 2n });
  const header1 = buildValidVaaHeader(guardianSet, body1, { version: 1, guardianSetId: 1 });
  const vaa1 = serializeVaaToBuffer(header1, body1);
  const wormholeContract = Cl.contractPrincipal(deployer, 'wormhole-core-v4');
  
  simnet.callPublicFn(
    'pyth-governance-v3',
    'update-governance-data-source',
    [Cl.buffer(vaa1), wormholeContract],
    deployer,
  );

  // Apply prices data source update
  const ptgmPayload2 = buildPtgmVaaPayload({ updatePricesDataSources: DefaultPricesDataSources });
  const payload2 = serializePtgmVaaPayloadToBuffer(ptgmPayload2);
  const body2 = buildValidVaaBodySpecs({ payload: payload2, emitter: DefaultGovernanceDataSource, sequence: 3n });
  const header2 = buildValidVaaHeader(guardianSet, body2, { version: 1, guardianSetId: 1 });
  const vaa2 = serializeVaaToBuffer(header2, body2);
  
  simnet.callPublicFn(
    'pyth-governance-v3',
    'update-prices-data-sources',
    [Cl.buffer(vaa2), wormholeContract],
    deployer,
  );

  // Store guardian set globally for price updates
  globalGuardianSet = guardianSet;
  
  return guardianSet;
}

export async function set_price(
  feedId: Buffer,
  price: bigint,
  expo: number = -8,
  deployer: string,
): Promise<bigint> {
  // Use the same guardian set that was initialized
  if (!globalGuardianSet) {
    throw new Error('Pyth not initialized. Call init_pyth() first.');
  }
  const guardianSet = globalGuardianSet;
  
  await sleep(100);
  
  const publishTime = timestampNow();
  const priceUpdates = buildPriceUpdateBatch([[feedId, { price, expo, publishTime }]]);
  const vaaPayload = buildAuwvVaaPayload(priceUpdates);
  const payload = serializeAuwvVaaPayloadToBuffer(vaaPayload);
  
  const vaaBody = buildValidVaaBodySpecs({
    payload,
    emitter: DefaultPricesDataSources[0],
  });
  
  const vaaHeader = buildValidVaaHeader(guardianSet, vaaBody, {
    version: 1,
    guardianSetId: 1,
  });
  
  const vaa = serializeVaaToBuffer(vaaHeader, vaaBody);
  const pnauHeader = buildPnauHeader();
  const pricesUpdatesToSubmit = [feedId];
  
  const pnau = serializePnauToBuffer(pnauHeader, {
    vaa,
    pricesUpdates: priceUpdates,
    pricesUpdatesToSubmit,
  });

  const res = simnet.callPublicFn(
    'pyth-oracle-v4',
    'verify-and-update-price-feeds',
    [
      Cl.buffer(pnau),
      Cl.tuple({
        'pyth-storage-contract': Cl.contractPrincipal(deployer, 'pyth-storage-v4'),
        'pyth-decoder-contract': Cl.contractPrincipal(deployer, 'pyth-pnau-decoder-v3'),
        'wormhole-core-contract': Cl.contractPrincipal(deployer, 'wormhole-core-v4'),
      }),
    ],
    deployer,
  );

  // TODO: seems like it takes some time to update the price, so wait for a bit to ensure the price is updated.
  // TODO: Find a better way to wait for the price to update instead of using promise + timeout since still this can fail.
  await sleep(300);

  if (res.result.type !== 'ok') {
    throw new Error(`Failed to update Pyth price: ${JSON.stringify(res.result)}`);
  }

  return publishTime;
}

export async function set_initial_price(
  feedId: Buffer,
  price: bigint,
  deployer: string,
): Promise<bigint> {
  return set_price(feedId, price, -8, deployer);
}

export function scalePriceForPyth(humanPrice: number, expo: number): bigint {
  const absExpo = Math.abs(expo);
  const multiplier = BigInt(10 ** absExpo);
  return BigInt(humanPrice) * multiplier;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// =========================================================================
// READ HELPERS
// =========================================================================

// Read current Pyth price and normalize to target exponent (default: -8)
// Example: targetExpo = -8 (8 decimals) or -6 (6 decimals)
export function read_pyth_price_scaled(
  feedId: Buffer,
  _deployer: string,
  targetExpo: number = -8,
): bigint {
  // Use rov() helper which automatically unwraps Clarity values
  // rov() returns the unwrapped value from Response<ok, err>
  const priceData = rov(contracts.pythStorageV4.getPrice({ priceIdentifier: feedId })) as unknown as {
    price: bigint;
    expo: bigint;
    conf: bigint;
    emaPrice: bigint;
    emaConf: bigint;
    publishTime: bigint;
    prevPublishTime: bigint;
  };

  // TODO: fix type issue "value" not exists on type
  const rawPrice = priceData.value.price;
  const expo = Number(priceData.value.expo);

  const diff = targetExpo - expo;
  if (diff > 0) {
    return rawPrice * 10n ** BigInt(diff);
  } else if (diff < 0) {
    return rawPrice / 10n ** BigInt(-diff);
  }
  return rawPrice;
}
