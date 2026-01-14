import { project, accounts } from '../clarigen-types';
import {
  cvToValue,
  projectErrors,
  projectFactory,
  CoreNodeEventType
} from '@clarigen/core';
import { rovOk, txOk, txErr, filterEvents, rov } from '@clarigen/test';
import { AssetIds } from './types';

// Initialize contract instances using projectFactory
export const contracts = projectFactory(project, "simnet");

// Export commonly used accounts
export const deployer = accounts.deployer.address;
export const alice = accounts.wallet_1.address;
export const bob = accounts.wallet_2.address;
export const charlie = accounts.wallet_3.address;

// DAO contracts
export const daoExecutor = contracts.daoExecutor;
export const daoMultisig = contracts.daoMultisig;
export const daoTreasury = contracts.daoTreasury;

// Proposal contracts
export const proposalInitAssets = contracts.proposalInitAssets;
export const proposalInitVaults = contracts.proposalInitVaults;
export const proposalInitMarketVault = contracts.proposalInitMarketVault;
export const proposalCreateEgroupSbtcUsdc = contracts.proposalCreateEgroupSbtcUsdc;
export const proposalCreateMultipleEgroups = contracts.proposalCreateMultipleEgroups;
export const proposalSetUsdcInterestRates = contracts.proposalSetUsdcInterestRates;
export const proposalSetSbtcInterestRates = contracts.proposalSetSbtcInterestRates;
export const proposalSetStxInterestRates = contracts.proposalSetStxInterestRates;

// Mainnet proposal
export const proposalProtocolInit = contracts.proposalProtocolInit;

// Market contracts
export const market = contracts.market;
export const marketVault = contracts.marketVault;

// Registry contracts
export const assets = contracts.assets;
export const egroup = contracts.egroup;

// Vault contracts
export const vaultStx = contracts.vaultStx;
export const vaultSbtc = contracts.vaultSbtc;
export const vaultStstx = contracts.vaultStstx;
export const vaultUsdc = contracts.vaultUsdc;
export const vaultUsdh = contracts.vaultUsdh;
export const vaultStstxbtc = contracts.vaultStstxbtc;

// Token contracts
export const sbtcToken = contracts.sbtc;
export const usdhToken = contracts.usdh;
export const wstxToken = contracts.wstx;
export const usdcToken = contracts.usdc;
export const ststxToken = contracts.ststx;
export const ststxbtcToken = contracts.ststxbtc;

// Mock token contracts (for testing)
export const mockToken01 = contracts.mockToken01;
export const mockToken02 = contracts.mockToken02;
export const mockToken03 = contracts.mockToken03;

// Mock oracle contract (for bad debt testing)
export const mockOracle = contracts.mockOracle;

// Pyth Oracle contracts (ensure they're deployed in simnet)
export const pythGovernanceV3 = contracts.pythGovernanceV3;
export const pythOracleV4 = contracts.pythOracleV4;
export const pythPnauDecoderV3 = contracts.pythPnauDecoderV3;
export const pythStorageV4 = contracts.pythStorageV4;
export const pythTraitsV2 = contracts.pythTraitsV2;
export const wormholeCoreV4 = contracts.wormholeCoreV4;
export const wormholeTraitsV2 = contracts.wormholeTraitsV2;

// Extract project errors
const _errors = projectErrors(project);

export const errors = {
  daoExecutor: _errors.daoExecutor,
  daoMultisig: _errors.daoMultisig,
  market: _errors.market,
  marketVault: _errors.marketVault,
  assets: _errors.assets,
  vaultSbtc: _errors.vaultSbtc,
  vaultUsdh: _errors.vaultUsdh,
};

// Helper to get print events from transaction
export function getPrintEvents(response: any) {
  return filterEvents(
    response.events,
    CoreNodeEventType.ContractEvent
  );
}

// Helper to filter events by action
export function getEventsDataByAction(action: string, response: any) {
  return getPrintEvents(response)
    .map(printEvent => cvToValue(printEvent.data.value))
    .filter(parsedEvent => parsedEvent.action === action);
}

// DAO execution pattern: propose -> approve -> execute
// With threshold=1 and single signer, this is immediate
export function executeDaoProposal(
  proposalScript: any,
  signer: string = deployer
) {
  // Propose - set urgent=true to bypass 1-day timelock
  const proposeResult = txOk(
    daoMultisig.propose(proposalScript.identifier, true),
    signer
  );
  const proposalId = cvToValue(proposeResult.result);
  
  // Execute - pass the principal identifier for trait reference
  const executeResult = txOk(
    daoMultisig.execute(proposalId, proposalScript.identifier),
    signer
  );
  
  return executeResult;
}

// Initialize DAO with single signer (deployer) and threshold of 1
export function initializeDAO() {
  // Initialize multisig with deployer as single signer, threshold 1
  txOk(daoMultisig.init([deployer], 1n), deployer);
  
  // Initialize executor with multisig as implementation
  txOk(daoExecutor.init(daoMultisig.identifier), deployer);
  
  // Verify setup - execute read-only calls
  const threshold = rov(daoMultisig.getThreshold());
  const signerCount = rov(daoMultisig.getSignerCount());
  const isSigner = rov(daoMultisig.isSigner(deployer));
  const executorImpl = daoExecutor.getImpl();
  
  return {
    threshold,
    signerCount,
    isSigner,
    executorImpl
  };
}

// Oracle type constants (from market.clar)
export const TYPE_PYTH = new Uint8Array([0x00]);
export const TYPE_DIA = new Uint8Array([0x01]);
export const TYPE_MOCK = new Uint8Array([0x02]);

// Callcode constants (from market.clar)
export const CALLCODE_STSTX = new Uint8Array([0x00]);
export const CALLCODE_ZSTX = new Uint8Array([0x01]);
export const CALLCODE_ZSBTC = new Uint8Array([0x02]);
export const CALLCODE_ZSTSTX = new Uint8Array([0x03]);
export const CALLCODE_ZUSDC = new Uint8Array([0x04]);
export const CALLCODE_ZUSDH = new Uint8Array([0x05]);

// Helper to create dummy oracle data for testing
// We use dummy price feed IDs since actual validation only happens during market operations
export function createDummyOracleData(callcode?: Uint8Array) {
  // Use dummy 32-byte identifier for Pyth feed
  const dummyIdent = new Uint8Array(32);
  dummyIdent.fill(0x01); // Fill with 0x01 for testing
  
  return {
    type: TYPE_PYTH,
    ident: dummyIdent,
    callcode: callcode ? callcode : null
  };
}

// Register assets in the assets registry via DAO proposal
export function registerAssets(): AssetIds {
  // Execute proposal to register and enable all assets
  executeDaoProposal(proposalInitAssets, deployer);
  
  // Return asset information (Paired ID system: underlying_id, vault_id = underlying_id + 1)
  return {
    wstxId: 0n,
    zwstxId: 1n,
    sbtcId: 2n,
    zsbtcId: 3n,
    ststxId: 4n,
    zststxId: 5n,
    usdcId: 6n,
    zusdcId: 7n,
    usdhId: 8n,
    zusdhId: 9n
  };
}

// Initialize vaults and set authorization via DAO proposal
export function initializeVaults() {
  // Mint tokens to dao-executor for vault initialization (minimum liquidity = 1000)
  const MINIMUM_LIQUIDITY = 1000n;
  txOk(sbtcToken.mint(MINIMUM_LIQUIDITY, proposalInitVaults.identifier), deployer);
  txOk(usdhToken.mint(MINIMUM_LIQUIDITY, proposalInitVaults.identifier), deployer);
  txOk(contracts.usdc.mint(MINIMUM_LIQUIDITY, proposalInitVaults.identifier), deployer);
  txOk(contracts.ststx.mint(MINIMUM_LIQUIDITY, proposalInitVaults.identifier), deployer);
  
  // wSTX cannot be minted, so we transfer it from deployer to dao-executor
  // Deployer should have enough STX balance from simnet setup
  txOk(wstxToken.transfer(MINIMUM_LIQUIDITY, deployer, proposalInitVaults.identifier, null), deployer);
  
  // Execute proposal to initialize vaults and set authorization
  executeDaoProposal(proposalInitVaults, deployer);
  
  // Verify authorization - execute read-only calls
  const sbtcAuthorized = rov(vaultSbtc.isAuthorizedContract(market.identifier));
  const usdhAuthorized = rov(vaultUsdh.isAuthorizedContract(market.identifier));
  const usdcAuthorized = rov(vaultUsdc.isAuthorizedContract(market.identifier));
  const ststxAuthorized = rov(vaultStstx.isAuthorizedContract(market.identifier));
  const stxAuthorized = rov(vaultStx.isAuthorizedContract(market.identifier));
  
  return {
    sbtcAuthorized,
    usdhAuthorized,
    usdcAuthorized,
    ststxAuthorized,
    stxAuthorized
  };
}

// Initialize market-vault authorization via DAO proposal
export function initializeMarketVault() {
  // Execute proposal to set market as implementation
  executeDaoProposal(proposalInitMarketVault, deployer);
  
  // Verify implementation is set
  const impl = marketVault.getImpl();
  
  return {
    impl
  };
}

// Complete protocol initialization
export function initializeProtocol() {
  // 1. Initialize DAO
  const daoStatus = initializeDAO();
  
  // 2. Register assets
  const assetIds = registerAssets();
  
  // 3. Initialize vaults
  const vaultStatus = initializeVaults();
  
  // 4. Initialize market-vault
  const marketVaultStatus = initializeMarketVault();
  
  return {
    dao: daoStatus,
    assets: assetIds,
    vaults: vaultStatus,
    marketVault: marketVaultStatus
  };
}
