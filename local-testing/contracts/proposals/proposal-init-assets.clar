;; Proposal to initialize all assets
;; This proposal registers sbtc, usdh, and their ztoken equivalents
;; and enables them for collateral and debt

(impl-trait .dao-traits.proposal-script)

(use-trait ft-trait .ft-trait.ft-trait)

(define-constant TYPE-PYTH 0x00)
(define-constant CALLCODE-STSTX 0x00)
(define-constant CALLCODE-ZSTX 0x01)
(define-constant CALLCODE-ZSBTC 0x02)
(define-constant CALLCODE-ZSTSTX 0x03)
(define-constant CALLCODE-ZUSDC 0x04)
(define-constant CALLCODE-ZUSDH 0x05)

;; Real Pyth price feed IDs (mainnet)
(define-constant STX-FEED-ID 0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17)
(define-constant BTC-FEED-ID 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43)
(define-constant USDC-FEED-ID 0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a)
(define-constant USDH-FEED-ID 0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a) ;; Using USDC feed for USDH for testing

(define-public (execute)
  (begin
    ;; IMPORTANT: Asset registration order MUST match vault routing constants in market.clar
    ;; Paired ID system: Each underlying followed by its vault (underlying_id, vault_id = underlying_id + 1)
    ;; market.clar constants: STX=0, zSTX=1, sBTC=2, zsBTC=3, stSTX=4, zstSTX=5, USDC=6, zUSDC=7, USDH=8, zUSDH=9
    ;; Note: max-staleness set to u100000000 (~3 years) for testing with wall-clock timestamps
    
    ;; Register wstx (asset ID 0) - STX wrapper
    (try! (contract-call? .assets insert 
      .wstx
      {
        type: TYPE-PYTH,
        ident: STX-FEED-ID,
        callcode: none,
        max-staleness: u100000000
      }))
    
    ;; Register vault-stx (asset ID 1) - zSTX vault shares
    (try! (contract-call? .assets insert 
      .vault-stx
      {
        type: TYPE-PYTH,
        ident: STX-FEED-ID,
        callcode: (some CALLCODE-ZSTX),
        max-staleness: u100000000
      }))
    
    ;; Register sbtc (asset ID 2) with real BTC Pyth feed
    (try! (contract-call? .assets insert 
      .sbtc
      {
        type: TYPE-PYTH,
        ident: BTC-FEED-ID,
        callcode: none,
        max-staleness: u100000000
      }))
    
    ;; Register vault-sbtc (asset ID 3) - zsBTC vault shares
    (try! (contract-call? .assets insert 
      .vault-sbtc
      {
        type: TYPE-PYTH,
        ident: BTC-FEED-ID,
        callcode: (some CALLCODE-ZSBTC),
        max-staleness: u100000000
      }))
    
    ;; Register ststx (asset ID 4) - Lido stacked STX
    (try! (contract-call? .assets insert 
      .ststx
      {
        type: TYPE-PYTH,
        ident: STX-FEED-ID,
        callcode: (some CALLCODE-STSTX),
        max-staleness: u100000000
      }))
    
    ;; Register vault-ststx (asset ID 5) - zstSTX vault shares
    (try! (contract-call? .assets insert 
      .vault-ststx
      {
        type: TYPE-PYTH,
        ident: STX-FEED-ID,
        callcode: (some CALLCODE-ZSTSTX),
        max-staleness: u100000000
      }))
    
    ;; Register usdc (asset ID 6) with real USDC Pyth feed
    (try! (contract-call? .assets insert 
      .usdc
      {
        type: TYPE-PYTH,
        ident: USDC-FEED-ID,
        callcode: none,
        max-staleness: u100000000
      }))
    
    ;; Register vault-usdc (asset ID 7) - zUSDC vault shares
    (try! (contract-call? .assets insert 
      .vault-usdc
      {
        type: TYPE-PYTH,
        ident: USDC-FEED-ID,
        callcode: (some CALLCODE-ZUSDC),
        max-staleness: u100000000
      }))
    
    ;; Register usdh (asset ID 8) with USDC Pyth feed
    (try! (contract-call? .assets insert 
      .usdh
      {
        type: TYPE-PYTH,
        ident: USDH-FEED-ID,
        callcode: none,
        max-staleness: u100000000
      }))
    
    ;; Register vault-usdh (asset ID 9) - zUSDH vault shares
    (try! (contract-call? .assets insert 
      .vault-usdh
      {
        type: TYPE-PYTH,
        ident: USDH-FEED-ID,
        callcode: (some CALLCODE-ZUSDH),
        max-staleness: u100000000
      }))
    
    ;; Enable wstx for collateral and debt
    (try! (contract-call? .assets enable .wstx true))
    (try! (contract-call? .assets enable .wstx false))
    
    ;; Enable sbtc for collateral and debt
    (try! (contract-call? .assets enable .sbtc true))
    (try! (contract-call? .assets enable .sbtc false))
    
    ;; Enable ststx for collateral and debt
    (try! (contract-call? .assets enable .ststx true))
    (try! (contract-call? .assets enable .ststx false))
    
    ;; Enable usdc for collateral and debt
    (try! (contract-call? .assets enable .usdc true))
    (try! (contract-call? .assets enable .usdc false))
    
    ;; Enable usdh for collateral and debt
    (try! (contract-call? .assets enable .usdh true))
    (try! (contract-call? .assets enable .usdh false))
    
    ;; Enable ztokens for collateral only
    (try! (contract-call? .assets enable .vault-stx true))
    (try! (contract-call? .assets enable .vault-sbtc true))
    (try! (contract-call? .assets enable .vault-ststx true))
    (try! (contract-call? .assets enable .vault-usdc true))
    (try! (contract-call? .assets enable .vault-usdh true))
    
    (ok true)))
