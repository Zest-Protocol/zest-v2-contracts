import { describe, it, expect, beforeEach } from 'vitest';
import { cvToValue } from '@clarigen/core';
import { txOk, txErr, rovOk, rov } from '@clarigen/test';

import {
  // Contracts
  daoExecutor,
  daoMultisig,
  assets,
  vaultSbtc,
  vaultUsdh,
  marketVault,
  market,
  sbtcToken,
  usdhToken,
  
  // Accounts
  deployer,
  alice,
  
  // Helpers
  initializeDAO,
  registerAssets,
  initializeVaults,
  initializeMarketVault,
  initializeProtocol,
  
  // Errors
  errors
} from './helpers';

describe('Protocol Initialization Tests', () => {
  const MINIMUM_LIQUIDITY = 1000n;
  
  describe('DAO Initialization', () => {
    it('should initialize multisig with deployer as single signer and threshold 1', () => {
      // Initialize multisig
      const initResult = txOk(daoMultisig.init([deployer], 1n), deployer);
      
      // Verify multisig state
      const threshold = rov(daoMultisig.getThreshold());
      const signerCount = rov(daoMultisig.getSignerCount());
      const isSigner = rov(daoMultisig.isSigner(deployer));
      
      expect(threshold).toBe(1n);
      expect(signerCount).toBe(1n);
      expect(isSigner).toBe(true);
    });
    
    it('should initialize executor with multisig as implementation', () => {
      // Initialize multisig first
      txOk(daoMultisig.init([deployer], 1n), deployer);
      
      // Initialize executor
      const initResult = txOk(daoExecutor.init(daoMultisig.identifier), deployer);
      
      // Verify executor state
      const impl = rovOk(daoExecutor.getImpl());
      expect(impl).toBe(daoMultisig.identifier);
    });
    
    it('should fail to initialize multisig twice', () => {
      // Initialize once
      txOk(daoMultisig.init([deployer], 1n), deployer);
      
      // Try to initialize again
      const result = txErr(daoMultisig.init([deployer], 1n), deployer);
      expect(cvToValue(result.result)).toBe(100003n); // ERR-SANITY-SIGNER
    });
    
    it('should fail to initialize executor from non-deployer', () => {
      // Initialize multisig first
      txOk(daoMultisig.init([deployer], 1n), deployer);
      
      // Try to initialize executor from alice
      const result = txErr(daoExecutor.init(daoMultisig.identifier), alice);
      expect(cvToValue(result.result)).toBe(200002n); // ERR-INIT
    });
  });
  
  describe('Asset Registration', () => {
    beforeEach(() => {
      // Initialize DAO before registering assets
      initializeDAO();
    });
    
    it('should register sbtc and usdh as base assets', () => {
      // Register assets via DAO proposal
      const assetIds = registerAssets();
      
      // Verify base assets are registered with correct IDs (updated order)
      expect(assetIds.sbtcId).toBe(2n);
      expect(assetIds.usdhId).toBe(8n);
      
      // Verify assets are registered with correct addresses
      const sbtcAsset = rovOk(assets.lookup(2n));
      const usdhAsset = rovOk(assets.lookup(8n));
      
      expect(sbtcAsset.addr).toBe(sbtcToken.identifier);
      expect(usdhAsset.addr).toBe(usdhToken.identifier);
    });
    
    it('should register zsbtc and zusdh as ztoken assets with callcodes', () => {
      // Register all assets via DAO proposal
      const assetIds = registerAssets();
      
      // Verify ztoken assets are registered with correct IDs (updated order)
      expect(assetIds.zsbtcId).toBe(3n);
      expect(assetIds.zusdhId).toBe(9n);
      
      // Verify ztokens have correct addresses and callcodes
      const zsbtcAsset = rovOk(assets.lookup(3n));
      const zusdhAsset = rovOk(assets.lookup(9n));
      
      expect(zsbtcAsset.addr).toBe(vaultSbtc.identifier);
      expect(zusdhAsset.addr).toBe(vaultUsdh.identifier);
      expect(zsbtcAsset.oracle.callcode).toEqual(new Uint8Array([0x02]));
      expect(zusdhAsset.oracle.callcode).toEqual(new Uint8Array([0x05]));
    });
    
    it('should enable assets for collateral and debt', () => {
      // Register assets
      const assetIds = registerAssets();
      
      // Check bitmap - should have bits set for enabled assets
      const bitmap = rov(assets.getBitmap());
      expect(bitmap).toBeGreaterThan(0n);
      
      // Check individual asset status
      const sbtcStatus = rovOk(assets.getStatus(assetIds.sbtcId));
      const usdhStatus = rovOk(assets.getStatus(assetIds.usdhId));
      const zsbtcStatus = rovOk(assets.getStatus(assetIds.zsbtcId));
      const zusdhStatus = rovOk(assets.getStatus(assetIds.zusdhId));
      
      // All base assets (including ststx) should be enabled for both collateral and debt
      expect(sbtcStatus.collateral).toBe(true);
      expect(sbtcStatus.debt).toBe(true);
      expect(usdhStatus.collateral).toBe(true);
      expect(usdhStatus.debt).toBe(true);
      
      // ztokens should only be enabled for collateral (not debt)
      expect(zsbtcStatus.collateral).toBe(true);
      expect(zsbtcStatus.debt).toBe(false);
      expect(zusdhStatus.collateral).toBe(true);
      expect(zusdhStatus.debt).toBe(false);
    });
    
    it('should fail to register asset from non-DAO address', () => {
      const oracle = {
        type: new Uint8Array([0x00]),
        ident: new Uint8Array(32).fill(0x01),
        callcode: null,
        maxStaleness: 120n
      };
      
      // Try to register from alice (not DAO)
      const result = txErr(assets.insert(sbtcToken.identifier, oracle), alice);
      expect(cvToValue(result.result)).toBe(710001n); // ERR-AUTH
    });
  });
  
  describe('Vault Initialization', () => {
    beforeEach(() => {
      initializeDAO();
    });
    
    it('should initialize vault-sbtc with minimum liquidity', () => {
      // Initialize vaults via DAO proposal
      initializeVaults();
      
      // Check that vault is initialized
      // Minimum liquidity should be minted to null address
      const totalSupply = rovOk(vaultSbtc.getTotalSupply());
      expect(totalSupply).toBeGreaterThan(0n);
      expect(totalSupply).toBeGreaterThanOrEqual(MINIMUM_LIQUIDITY);  // MINIMUM-LIQUIDITY is 1000
    });
    
    it('should initialize vault-usdh with minimum liquidity', () => {
      // Initialize vaults via DAO proposal
      initializeVaults();
      
      // Check that vault is initialized
      const totalSupply = rovOk(vaultUsdh.getTotalSupply());
      expect(totalSupply).toBeGreaterThan(0n);
      expect(totalSupply).toBeGreaterThanOrEqual(MINIMUM_LIQUIDITY);  // MINIMUM-LIQUIDITY is 1000
    });
    
    it('should fail to initialize vault twice', () => {
      // Initialize once via DAO proposal
      initializeVaults();
      
      // Try to initialize again directly (should fail with already initialized error)
      const result = txErr(vaultSbtc.initialize(), deployer);
      expect(cvToValue(result.result)).toBe(801003n); // ERR-ALREADY-INITIALIZED
    });
    
    it('should set market as authorized contract in vaults', () => {
      // Initialize vaults and authorize market via DAO proposal
      const vaultStatus = initializeVaults();
      
      // Verify market is authorized in both vaults
      expect(vaultStatus.sbtcAuthorized).toBe(true);
      expect(vaultStatus.usdhAuthorized).toBe(true);
      
      // Double check with direct read-only calls
      const sbtcAuthorized = rov(vaultSbtc.isAuthorizedContract(market.identifier));
      const usdhAuthorized = rov(vaultUsdh.isAuthorizedContract(market.identifier));
      expect(sbtcAuthorized).toBe(true);
      expect(usdhAuthorized).toBe(true);
    });
    
    it('should fail to authorize contract from non-DAO address', () => {
      // Initialize vault first via DAO proposal
      initializeVaults();
      
      // Try to authorize from alice (not DAO)
      const result = txErr(vaultSbtc.setAuthorizedContract(market.identifier, true), alice);
      expect(cvToValue(result.result)).toBe(801001n); // ERR-AUTH (vault-sbtc specific code)
    });
  });
  
  describe('Market-Vault Authorization', () => {
    beforeEach(() => {
      initializeDAO();
    });
    
    it('should set market as implementation in market-vault', () => {
      // Set market as implementation via DAO proposal
      const marketVaultStatus = initializeMarketVault();
      
      // Verify implementation is set
      const impl = rov(marketVaultStatus.impl);
      expect(impl).toBe(market.identifier);
    });
    
    it('should fail to set implementation from non-DAO address', () => {
      // Try to set implementation from alice (not DAO)
      const result = txErr(marketVault.setImpl(market.identifier), alice);
      expect(cvToValue(result.result)).toBe(600001n); // ERR-AUTH (market-vault)
    });
  });
  
  describe('Complete Protocol Initialization', () => {
    it('should successfully initialize entire protocol in correct order', () => {
      // Run complete initialization
      const status = initializeProtocol();
      
      // Verify DAO initialization
      expect(status.dao.threshold).toBe(1n);
      expect(status.dao.signerCount).toBe(1n);
      expect(status.dao.isSigner).toBe(true);
      expect(rovOk(status.dao.executorImpl)).toBe(daoMultisig.identifier);
      
      // Verify asset registration (updated order)
      expect(status.assets.sbtcId).toBe(2n);
      expect(status.assets.usdhId).toBe(8n);
      expect(status.assets.zsbtcId).toBe(3n);
      expect(status.assets.zusdhId).toBe(9n);
      
      // Verify vault authorization
      expect(status.vaults.sbtcAuthorized).toBe(true);
      expect(status.vaults.usdhAuthorized).toBe(true);
      
      // Verify market-vault authorization
      expect(rov(status.marketVault.impl)).toBe(market.identifier);
    });
    
    it('should have all assets properly registered and enabled', () => {
      initializeProtocol();
      
      // Check assets are registered with correct IDs (updated order)
      const sbtcAsset = rovOk(assets.lookup(2n));
      const usdhAsset = rovOk(assets.lookup(8n));
      const zsbtcAsset = rovOk(assets.lookup(3n));
      const zusdhAsset = rovOk(assets.lookup(9n));
      
      expect(sbtcAsset.addr).toBe(sbtcToken.identifier);
      expect(usdhAsset.addr).toBe(usdhToken.identifier);
      expect(zsbtcAsset.addr).toBe(vaultSbtc.identifier);
      expect(zusdhAsset.addr).toBe(vaultUsdh.identifier);
      
      // Verify enabled status (updated IDs)
      const sbtcStatus = rovOk(assets.getStatus(2n));
      const usdhStatus = rovOk(assets.getStatus(8n));
      const zsbtcStatus = rovOk(assets.getStatus(3n));
      const zusdhStatus = rovOk(assets.getStatus(9n));
      
      // Base assets enabled for both collateral and debt
      expect(sbtcStatus.collateral).toBe(true);
      expect(sbtcStatus.debt).toBe(true);
      expect(usdhStatus.collateral).toBe(true);
      expect(usdhStatus.debt).toBe(true);
      
      // Ztokens only enabled for collateral
      expect(zsbtcStatus.collateral).toBe(true);
      expect(zsbtcStatus.debt).toBe(false);
      expect(zusdhStatus.collateral).toBe(true);
      expect(zusdhStatus.debt).toBe(false);
    });
    
    it('should have vaults initialized and authorized', () => {
      initializeProtocol();
      
      // Check vaults are initialized (have non-zero supply)
      const sbtcSupply = rovOk(vaultSbtc.getTotalSupply());
      const usdhSupply = rovOk(vaultUsdh.getTotalSupply());
      
      expect(sbtcSupply).toBeGreaterThan(0n);
      expect(usdhSupply).toBeGreaterThan(0n);
      
      // Check market is authorized in both vaults
      const sbtcAuth = rov(vaultSbtc.isAuthorizedContract(market.identifier));
      const usdhAuth = rov(vaultUsdh.isAuthorizedContract(market.identifier));
      
      expect(sbtcAuth).toBe(true);
      expect(usdhAuth).toBe(true);
    });
  });
});
