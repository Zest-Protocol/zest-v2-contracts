;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; market - 0
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ============================================================================
;; TRAITS
;; ============================================================================
(use-trait ft-trait .ft-trait.ft-trait)
(impl-trait .market-trait.market-trait)

;; ============================================================================
;; CONSTANTS
;; ============================================================================

;; -- Asset IDs (Paired: underlying_id, vault_id = underlying_id + 1)
;; These map to actual asset IDs in the asset registry
(define-constant STX u0)
(define-constant zSTX u1)    ;; vault-stx
(define-constant sBTC u2)
(define-constant zsBTC u3)   ;; vault-sbtc
(define-constant stSTX u4)
(define-constant zstSTX u5)  ;; vault-ststx
(define-constant USDC u6)
(define-constant zUSDC u7)   ;; vault-usdc
(define-constant USDH u8)
(define-constant zUSDH u9)   ;; vault-usdh
(define-constant stSTXbtc u10)
(define-constant zstSTXbtc u11) ;; vault-ststxbtc
(define-constant ztokens (list zSTX zsBTC zstSTX zUSDC zUSDH zstSTXbtc))

;; -- Precision & scaling
(define-constant BPS u10000)
(define-constant INDEX-PRECISION u1000000000000)  ;; 1e12 for index calculations

;; -- Oracle configuration
(define-constant TYPE-PYTH 0x00)
(define-constant TYPE-DIA 0x01)
;; @staging
(define-constant TYPE-MOCK 0x02)

;; -- Oracle callcodes (for price transformations)
(define-constant CALLCODE-STSTX 0x00)
(define-constant CALLCODE-ZSTX 0x01)
(define-constant CALLCODE-ZSBTC 0x02)
(define-constant CALLCODE-ZSTSTX 0x03)
(define-constant CALLCODE-ZUSDC 0x04)
(define-constant CALLCODE-ZUSDH 0x05)
(define-constant CALLCODE-ZSTSTXBTC 0x06)

;; -- Oracle ratios
(define-constant STSTX-RATIO-DECIMALS u1000000)

;; -- Pack utilities (bit manipulation)
(define-constant MAX-U64 u18446744073709551615)
(define-constant DEBT-MASK u340282366920938463444927863358058659840)  ;; MAX-U128 - MAX-U64
(define-constant DEBT-OFFSET u64)
(define-constant ITER-UINT-64 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63))

;; -- Liquidation
(define-constant MAX-LIQUIDATION-AMOUNT u340282366920938463463374607431768211455)
(define-constant GLOBAL-LIQUIDATION-GRACE-ID u100)

;; -- Contract references
(define-constant ZEST-STX-WRAPPER-CONTRACT .wstx)

;; ============================================================================
;; ERRORS (400xxx prefix for market)
;; ============================================================================
(define-constant ERR-AUTH (err u400001))
(define-constant ERR-AMOUNT-ZERO (err u400002))
(define-constant ERR-COLLATERAL-DISABLED (err u400003))
(define-constant ERR-BORROW-DISABLED (err u400004))
(define-constant ERR-UNHEALTHY (err u400005))
(define-constant ERR-INSUFFICIENT-SCALED-DEBT (err u400006))
(define-constant ERR-INSUFFICIENT-COLLATERAL (err u400007))
(define-constant ERR-ZERO-LIQUIDATION-AMOUNTS (err u400008))
(define-constant ERR-UNKNOWN-VAULT (err u400009))
(define-constant ERR-ORACLE-TYPE (err u400010))
(define-constant ERR-ORACLE-CALLCODE (err u400011))
(define-constant ERR-ORACLE-PYTH (err u400012))
(define-constant ERR-ORACLE-DIA (err u400013))
(define-constant ERR-ORACLE-INVARIANT (err u400014))
(define-constant ERR-ORACLE-MOCK (err u400019))  ;; Mock oracle call failed
(define-constant ERR-ORACLE-MULTI (err u400015))
(define-constant ERR-LIQUIDATION-PAUSED (err u400016))
(define-constant ERR-PRICE-CONFIDENCE-LOW (err u400017))
(define-constant ERR-HEALTHY (err u400018))
(define-constant ERR-SLIPPAGE (err u400019))
(define-constant ERR-DISABLED-COLLATERAL-PRICE-FAILED (err u400020))
(define-constant ERR-BAD-DEBT-SOCIALIZATION-FAILED (err u400021))
(define-constant ERR-PRICE-FEED-UPDATE-FAILED (err u400022))
(define-constant ERR-EGROUP-ASSET-BORROW-DISABLED (err u400023))
(define-constant ERR-LIQUIDATION-BORROW-SAME-BLOCK (err u400024))
(define-constant ERR-AUTHORIZATION (err u400025))

;; ============================================================================
;; DATA VARS
;; ============================================================================

;; -- Pausability
(define-data-var pause-liquidation bool false)

;; -- Oracle configuration
;; Confidence ratio: 10% default (1000 = 10% of 10000 BPS)
;; This means confidence interval must be <= 10% of price
(define-data-var max-confidence-ratio uint u1000)

;; ============================================================================
;; MAPS
;; ============================================================================

;; -- Liquidation
(define-map liquidation-grace-periods uint uint)

;; -- Index cache (for accrual)
(define-map index-cache
  { timestamp: uint, aid: uint }
  { index: uint, lindex: uint })

;; -- Oracle timestamp tracking
(define-map last-update
  { type: (buff 1), ident: (buff 32) }
  uint)

;; ============================================================================
;; PRIVATE FUNCTIONS
;; ============================================================================

;; -- Price feed update helpers ----------------------------------------------

;; Write a single Pyth price feed update using fold accumulator pattern
;; Uses local contract references for testing, production contracts commented for reference
(define-private (write-feed (feed (buff 8192)) (status (response bool uint)))
  (match status
    success-status
      ;; @mainnet: (match (contract-call? 'SP1CGXWEAMG6P6FT04W66NVGJ7PQWMDAC19R7PJ0Y.pyth-oracle-v4 verify-and-update-price-feeds
      (match (contract-call? .pyth-oracle-v4 verify-and-update-price-feeds
          feed
          {
            ;; @mainnet: pyth-storage-contract: 'SP1CGXWEAMG6P6FT04W66NVGJ7PQWMDAC19R7PJ0Y.pyth-storage-v4,
            pyth-storage-contract: .pyth-storage-v4,
            ;; @mainnet: pyth-decoder-contract: 'SP1CGXWEAMG6P6FT04W66NVGJ7PQWMDAC19R7PJ0Y.pyth-pnau-decoder-v3,
            pyth-decoder-contract: .pyth-pnau-decoder-v3,
            ;; @mainnet: wormhole-core-contract: 'SP1CGXWEAMG6P6FT04W66NVGJ7PQWMDAC19R7PJ0Y.wormhole-core-v4,
            wormhole-core-contract: .wormhole-core-v4,
          }
        )
        update-success (ok true)
        update-failed ERR-PRICE-FEED-UPDATE-FAILED)
    error-status status
  )
)

;; Process optional list of price feed updates
;; If list is provided, folds over it and updates all feeds
;; If list is none, does nothing (allows for backward compatibility)
(define-private (write-feeds (feeds (optional (list 3 (buff 8192)))))
  (match feeds
    entries (fold write-feed entries (ok true))
    (ok true)))

;; -- Math utilities ---------------------------------------------------------

(define-private (min (a uint) (b uint)) 
  (if (< a b) a b))

(define-private (mul-div-down (x uint) (y uint) (z uint))
  (/ (* x y) z))

(define-private (mul-div-up (x uint) (y uint) (z uint))
  (/ (+ (* x y) (- z u1)) z))

(define-private (div-down (x uint) (y uint))
  (/ x y))

(define-private (div-up (x uint) (y uint))
  (/ (+ x (- y u1)) y))

(define-private (mul-bps-down (x uint) (y uint))
  (/ (* x y) BPS))

(define-private (div-bps-down (x uint) (y uint))
  (/ (* x BPS) y))

;; -- ZToken helpers ---------------------------------------------------------

(define-private (is-ztoken (aid uint))
  (is-some (index-of? ztokens aid)))

;; -- Auth helpers -----------------------------------------------------------

(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))

;; -- Vault routing ----------------------------------------------------------

(define-private (vault-accrue (aid uint))
  (if (is-eq aid STX) (contract-call? .vault-stx accrue)
  (if (is-eq aid sBTC) (contract-call? .vault-sbtc accrue)
  (if (is-eq aid stSTX) (contract-call? .vault-ststx accrue)
  (if (is-eq aid USDC) (contract-call? .vault-usdc accrue)
  (if (is-eq aid USDH) (contract-call? .vault-usdh accrue)
  (if (is-eq aid stSTXbtc) (contract-call? .vault-ststxbtc accrue)
  ERR-UNKNOWN-VAULT)))))))

(define-private (vault-system-borrow (aid uint) (amount uint) (receiver principal))
  (if (is-eq aid STX) (contract-call? .vault-stx system-borrow amount receiver)
  (if (is-eq aid sBTC) (contract-call? .vault-sbtc system-borrow amount receiver)
  (if (is-eq aid stSTX) (contract-call? .vault-ststx system-borrow amount receiver)
  (if (is-eq aid USDC) (contract-call? .vault-usdc system-borrow amount receiver)
  (if (is-eq aid USDH) (contract-call? .vault-usdh system-borrow amount receiver)
  (if (is-eq aid stSTXbtc) (contract-call? .vault-ststxbtc system-borrow amount receiver)
  ERR-UNKNOWN-VAULT)))))))

(define-private (vault-system-repay (aid uint) (amount uint) (ft <ft-trait>) (ft-address principal))
  (if (is-eq aid STX) (contract-call? .vault-stx system-repay amount)
  (if (is-eq aid sBTC) (contract-call? .vault-sbtc system-repay amount)
  (if (is-eq aid stSTX) (contract-call? .vault-ststx system-repay amount)
  (if (is-eq aid USDC) (contract-call? .vault-usdc system-repay amount)
  (if (is-eq aid USDH) (contract-call? .vault-usdh system-repay amount)
  (if (is-eq aid stSTXbtc) (contract-call? .vault-ststxbtc system-repay amount)
  ERR-UNKNOWN-VAULT)))))))

(define-private (vault-socialize-debt (aid uint) (amount uint))
  (if (is-eq aid STX) (contract-call? .vault-stx socialize-debt amount)
  (if (is-eq aid sBTC) (contract-call? .vault-sbtc socialize-debt amount)
  (if (is-eq aid stSTX) (contract-call? .vault-ststx socialize-debt amount)
  (if (is-eq aid USDC) (contract-call? .vault-usdc socialize-debt amount)
  (if (is-eq aid USDH) (contract-call? .vault-usdh socialize-debt amount)
  (if (is-eq aid stSTXbtc) (contract-call? .vault-ststxbtc socialize-debt amount)
  ERR-UNKNOWN-VAULT)))))))

(define-private (vault-deposit (aid uint) (amount uint) (min-out uint) (recipient principal))
  (if (is-eq aid STX) (contract-call? .vault-stx deposit amount min-out recipient)
  (if (is-eq aid sBTC) (contract-call? .vault-sbtc deposit amount min-out recipient)
  (if (is-eq aid stSTX) (contract-call? .vault-ststx deposit amount min-out recipient)
  (if (is-eq aid USDC) (contract-call? .vault-usdc deposit amount min-out recipient)
  (if (is-eq aid USDH) (contract-call? .vault-usdh deposit amount min-out recipient)
  (if (is-eq aid stSTXbtc) (contract-call? .vault-ststxbtc deposit amount min-out recipient)
  ERR-UNKNOWN-VAULT)))))))

(define-private (vault-redeem (aid uint) (amount uint) (min-out uint) (recipient principal))
  (if (is-eq aid STX) (contract-call? .vault-stx redeem amount min-out recipient)
  (if (is-eq aid sBTC) (contract-call? .vault-sbtc redeem amount min-out recipient)
  (if (is-eq aid stSTX) (contract-call? .vault-ststx redeem amount min-out recipient)
  (if (is-eq aid USDC) (contract-call? .vault-usdc redeem amount min-out recipient)
  (if (is-eq aid USDH) (contract-call? .vault-usdh redeem amount min-out recipient)
  (if (is-eq aid stSTXbtc) (contract-call? .vault-ststxbtc redeem amount min-out recipient)
  ERR-UNKNOWN-VAULT)))))))

;; -- Accrual & caching ------------------------------------------------------

(define-private (accrue-and-cache (aid uint))
  (let ((cache-key { timestamp: stacks-block-time, aid: aid })
        (cached? (map-get? index-cache cache-key)))

    (match cached?
      ;; cache HIT: return cached value (1 read only)
      cached-indexes (ok cached-indexes)

      ;; cache MISS: accrue and cache (vault-accrue now returns indexes)
      (let ((indexes (try! (vault-accrue aid))))
        ;; store in cache
        (map-set index-cache cache-key indexes)
        (ok indexes)))))

(define-private (accrue-user-debts (debt-list (list 64 { aid: uint, scaled: uint})))
  (fold accrue-debt-asset debt-list { success: true }))

(define-private (accrue-debt-asset
  (debt-entry { aid: uint, scaled: uint })
  (acc { success: bool }))
  (begin
    ;; this will use cache if available, accrue if not
    (unwrap-panic (accrue-and-cache (get aid debt-entry)))
    acc))

(define-private (accrue-user-collateral (coll-list (list 64 {aid: uint, amount: uint})))
  (fold accrue-collateral-asset coll-list { success: true }))

(define-private (accrue-collateral-asset
  (coll-entry { aid: uint, amount: uint })
  (acc { success: bool }))
  (let ((aid (get aid coll-entry)))
    ;; Only accrue if asset is a registered ztoken
    (if (is-ztoken aid)
        ;; ZToken: map to underlying vault routing ID and accrue
        ;; zSTX(1)->STX(0), zsBTC(3)->sBTC(2), zstSTX(5)->stSTX(4), zUSDC(7)->USDC(6), zUSDH(9)->USDH(8), zstSTXbtc(11)->stSTXbtc(10)
        (let ((vault-id (if (is-eq aid zSTX) STX
                        (if (is-eq aid zsBTC) sBTC
                        (if (is-eq aid zstSTX) stSTX
                        (if (is-eq aid zUSDC) USDC
                        (if (is-eq aid zUSDH) USDH
                        (if (is-eq aid zstSTXbtc) stSTXbtc
                        ;; Should never reach here if is-ztoken is correct
                        ;; but if reached will cause ERR-UNKNOWN-VAULT with any value over 64
                        u100))))))))
          (begin
            (unwrap-panic (accrue-and-cache vault-id))
            acc))
        ;; Non-ztoken: skip accrual (no liquidity index needed)
        acc)))

;; -- Oracle: external price feeds -------------------------------------------

(define-private (normalize-pyth (p int) (expo int))
  (let ((adj (+ expo 8))
        (inkind? (asserts! (not (is-eq adj 0)) (to-uint p)))
        (res (if (> adj 0)
                (* p (pow 10 adj))
                (/ p (pow 10 (- adj))))))
    (to-uint res)))

(define-private (check-confidence (price int) (confidence uint))
  (ok (asserts! (<= confidence (/ (* (to-uint price) (var-get max-confidence-ratio)) BPS)) ERR-PRICE-CONFIDENCE-LOW)))

(define-private (call-pyth (ident (buff 32)))
  ;; @mainnet: (let ((res (unwrap! (contract-call? 'SP1CGXWEAMG6P6FT04W66NVGJ7PQWMDAC19R7PJ0Y.pyth-storage-v4 get-price ident) ERR-ORACLE-PYTH)))
  (let ((res (unwrap! (contract-call? .pyth-storage-v4 get-price ident) ERR-ORACLE-PYTH)))
    (ok res)))

(define-private (resolve-pyth (ident (buff 32)))
  (let ((response (try! (call-pyth ident)))
        (price (get price response))
        (expo (get expo response))
        (conf (get conf response))
        (final-price (normalize-pyth price expo))
        (timestamp (get publish-time response)))
    (try! (check-confidence price conf))
    (ok { value: final-price, timestamp: timestamp })))

(define-private (call-dia (key (string-ascii 32)))
  (let ((res (unwrap! (contract-call? 'SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle get-value key) ERR-ORACLE-DIA)))
    (ok res)))

(define-private (resolve-dia (ident (buff 32)))
  (let ((key (unwrap-panic (from-consensus-buff? (string-ascii 32) ident)))
        (res (try! (call-dia key))))
    (ok res)))

;; @staging
;; Mock oracle for testing bad debt socialization
(define-private (call-mock (key (string-ascii 32)))
  (let ((res (unwrap! (contract-call? .mock-oracle get-value key) ERR-ORACLE-MOCK)))
    (ok res)))

(define-private (resolve-mock (ident (buff 32)))
  (let ((key (unwrap-panic (from-consensus-buff? (string-ascii 32) ident)))
        (res (try! (call-mock key))))
    (ok res)))

(define-private (resolve-price-feed (type (buff 1)) (ident (buff 32)))
  (if (is-eq type TYPE-PYTH) (resolve-pyth ident)
  (if (is-eq type TYPE-DIA) (resolve-dia ident)
  (if (is-eq type TYPE-MOCK) (resolve-mock ident)
  ERR-ORACLE-TYPE))))

;; -- Oracle: callcode transformations ---------------------------------------

(define-private (resolve-ststx (p uint))
  (let ((ratio (unwrap! (call-ststx-ratio) ERR-ORACLE-CALLCODE)))
    (ok (mul-div-down p ratio STSTX-RATIO-DECIMALS))))

(define-private (resolve-ztoken (p uint) (aid uint))
  (let ((cached (unwrap! (get-cached-indexes aid) ERR-ORACLE-CALLCODE))
        (cached-lindex (get lindex cached))
        (scaled (* p cached-lindex)))
    (ok (div-down scaled INDEX-PRECISION))))

(define-private (resolve-callcode (p uint) (callcode (optional (buff 1))))
  (let ((cc (unwrap! callcode (ok p))))
    (if (is-eq cc CALLCODE-STSTX) (resolve-ststx p)
    (if (is-eq cc CALLCODE-ZSTX) (resolve-ztoken p STX)
    (if (is-eq cc CALLCODE-ZSBTC) (resolve-ztoken p sBTC)
    (if (is-eq cc CALLCODE-ZSTSTX) (resolve-ztoken (try! (resolve-ststx p)) stSTX)
    (if (is-eq cc CALLCODE-ZUSDC) (resolve-ztoken p USDC)
    (if (is-eq cc CALLCODE-ZUSDH) (resolve-ztoken p USDH)
    (if (is-eq cc CALLCODE-ZSTSTXBTC) (resolve-ztoken p stSTXbtc)
    ERR-ORACLE-CALLCODE)))))))))

;; -- Oracle: price resolution -----------------------------------------------

(define-private (oracle-price-legal (p uint))
  (> p u0))

(define-private (oracle-timestamp-fresh (ts uint) (prev uint) (max-staleness uint))
  (let ((delta (if (> ts stacks-block-time)
                   u0
                   (- stacks-block-time ts))))
    (and
      (<= delta max-staleness)
      (>= ts prev))))

(define-private (price-resolve
  (data { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint }))
  (let ((type (get type data))
        (ident (get ident data))
        (key { type: type, ident: ident })
        (resolution (try! (resolve-price-feed type ident)))
        (price (get value resolution))
        (callcode (get callcode data))
        (final-price (try! (resolve-callcode price callcode)))
        (last-update-time (oracle-last-update key))
        (timestamp (get timestamp resolution))
        (max-staleness (get max-staleness data)))

    ;; validate price and timestamp using max-staleness from oracle data
    (asserts! (and (oracle-price-legal final-price) (oracle-timestamp-fresh timestamp last-update-time max-staleness))
              ERR-ORACLE-INVARIANT)

    ;; update timestamp if newer
    (if (> timestamp last-update-time)
        (map-set last-update key timestamp)
        false)

    (ok final-price)))

(define-private (price-multi-resolve
  (data (list 64 { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint }))
  (aids (list 64 uint)))
  (let ((init { output: (list), valid: true, aids: aids, idx: u0 })
        (response (fold iter-price-multi data init)))
    (asserts! (get valid response) ERR-ORACLE-MULTI)
    (ok (get output response))))

(define-private (iter-price-multi
  (oracle-data { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint })
  (acc { output: (list 64 uint), valid: bool, aids: (list 64 uint), idx: uint }))
  (let ((valid (get valid acc))
        (skip? (asserts! valid acc))
        (asset-ids (get aids acc))
        (idx (get idx acc))
        ;; resolve price - will use cache for ztokens
        (price (unwrap! (price-resolve oracle-data) (merge acc { valid: false })))
        (next (unwrap-panic (as-max-len? (append (get output acc) price) u64))))
    { output: next,
      valid: true,
      aids: asset-ids,
      idx: (+ idx u1) }))

;; -- Pack utilities ---------------------------------------------------------

(define-private (mask-shift-combine (mask uint))
  (let ((slot1 (bit-and mask DEBT-MASK))
        (shiftr (/ slot1 (pow u2 DEBT-OFFSET)))
        (slot0 (bit-and mask MAX-U64)))
    (bit-or slot0 shiftr)))

(define-private (user-safe-mask (mask-user uint) (mask-enabled uint))
  (let ((enabled-collateral (bit-and mask-enabled MAX-U64))
        (user-collateral (bit-and mask-user MAX-U64))
        (user-debt (/ (bit-and mask-user DEBT-MASK) (pow u2 DEBT-OFFSET)))
        (collateral-match (bit-and user-collateral enabled-collateral)))
    (bit-or collateral-match user-debt)))

(define-private (mask-to-list-internal (mask uint) (offset uint) (iter-list (list 64 uint)))
  (let ((init { mask: mask, offset: offset, result: (list) })
        (out (fold mask-to-list-iter iter-list init)))
    (get result out)))

(define-private (mask-to-list-iter (p uint) (acc {mask: uint, offset: uint, result: (list 64 uint)}))
  (let ((mask (get mask acc))
        (offset (get offset acc))
        (has? (asserts! (> (bit-and mask (pow u2 p)) u0) acc))
        (result (get result acc))
        (value (if (is-eq offset u0) p (- p offset)))
        (new (as-max-len? (append result value) u64)))
    (merge acc { result: (unwrap-panic new) })))

(define-private (mask-to-list-collateral (mask uint))
  (mask-to-list-internal mask u0 ITER-UINT-64))

;; -- Registry wrappers ------------------------------------------------------

(define-private (get-enabled-bitmap)
  (contract-call? .assets get-bitmap))

(define-private (get-status-multi (ids (list 64 uint)))
  (contract-call? .assets status-multi ids))

(define-private (get-egroup (mask uint))
  (contract-call? .egroup resolve mask))

(define-private (get-account-scaled-debt (account principal) (asset-id uint))
  (contract-call? .market-vault get-account-scaled-debt account asset-id))

(define-private (get-position (account principal)) ;; enabled only
  (let ((mask (get-enabled-bitmap)))
    (contract-call? .market-vault get-position account mask)))

(define-private (get-full-position (account principal)) ;; all collaterals
  (contract-call? .market-vault get-position account MAX-U64))

(define-private (get-liquidation-position (account principal)) ;; liquidation specific (enabled collateral + all debt)
  (let ((mask (get-enabled-bitmap)))
    (contract-call? .market-vault get-position account mask)))

;; -- Context & asset helpers ------------------------------------------------

(define-private (get-asset (asset principal))
  (contract-call? .assets get-asset-status asset))

(define-private (get-assets (mask-user uint))
  (let ((mask-enabled (get-enabled-bitmap))
        (safe-mask (user-safe-mask mask-user mask-enabled))
        (iter (mask-to-list-collateral safe-mask))
        (assets-list (get-status-multi iter))
        (oracles-list (map get-oracle assets-list))
        ;; Extract asset-ids for price resolution
        (asset-ids (map get-asset-id assets-list))
        ;; Use internal price resolution
        (prices-list (unwrap-panic (price-multi-resolve oracles-list asset-ids))))
    (map merge-price assets-list prices-list)))

(define-private (get-asset-id (asset-entry
  { id: uint, addr: principal, decimals: uint,
    oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
    collateral: bool, debt: bool }))
  (get id asset-entry))

(define-private (get-oracle (asset-entry
  { id: uint, addr: principal, decimals: uint,
    oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
    collateral: bool, debt: bool }))
  (get oracle asset-entry))

(define-private (merge-price (asset-entry
  { id: uint, addr: principal, decimals: uint,
    oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
    collateral: bool, debt: bool }) (price uint))
  (merge asset-entry { price: price }))

;; -- Notional evaluation ----------------------------------------------------

(define-private (get-notional-evaluation (context
      {
        position: {
          id: uint,
          account: principal,
          mask: uint,
          last-update: uint,
          last-borrow-block: uint,
          collateral: (list 64 { aid: uint, amount: uint }),
          debt: (list 64 { aid: uint, scaled: uint }),
        },
        assets: (list 64 { 
          id: uint, addr: principal, decimals: uint,
          oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
          collateral: bool, debt: bool, price: uint })
      }))
  (let ((position (get position context))
        (assets (get assets context))
        (collateral-list (get collateral position))
        (debt-list (get debt position))
        (result (fold calculate-asset-notional-value assets
                      { clist: collateral-list,
                        dlist: debt-list,
                        coll-total: u0,
                        debt-total: u0 })))
    {
      collateral: (get coll-total result),
      debt: (get debt-total result)
    }))

(define-private (calculate-asset-notional-value
          (asset-entry {
              id: uint, addr: principal, decimals: uint,
              oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
              collateral: bool, debt: bool, price: uint })
          (acc { clist: (list 64 { aid: uint, amount: uint }),
                  dlist: (list 64 { aid: uint, scaled: uint }),
                  coll-total: uint,
                  debt-total: uint }))
  (let ((asset-id (get id asset-entry))
        (price (get price asset-entry))
        (decimals (get decimals asset-entry))
        (collateral-list (get clist acc))
        (debt-list (get dlist acc))
        (coll-amount (find-collateral-amount collateral-list asset-id))
        (coll-notional (if (> coll-amount u0)
                           (normalize (* coll-amount price) decimals false)
                           u0))

        (debt-scaled   (find-debt-scaled debt-list asset-id))
        (debt-notional (if (> debt-scaled u0) ;; use cache instead here
                           (let ((cached (unwrap-panic (accrue-and-cache asset-id)))
                                 (ib (get index cached))
                                 (actual (mul-div-up debt-scaled ib INDEX-PRECISION)))
                             (normalize (* actual price) decimals true))
                           u0)))

    { clist: collateral-list,
      dlist: debt-list,
      coll-total: (+ (get coll-total acc) coll-notional),
      debt-total: (+ (get debt-total acc) debt-notional) }))

(define-private (normalize (value uint) (decimals uint) (round-up bool))
  (let ((decimal-factor (pow u10 decimals)))
    (if round-up
      (div-up value decimal-factor)
      (div-down value decimal-factor))))

;; -- Asset/collateral/debt finders ------------------------------------------

(define-private (find-asset
                (target uint)
                (assets (list 64 { 
                      id: uint, addr: principal, decimals: uint,
                      oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
                      collateral: bool, debt: bool, price: uint })))
  (get result (fold iter-find-asset assets { target: target, result: none })))

(define-private (iter-find-asset (asset-entry
    { id: uint, addr: principal, decimals: uint,
      oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
      collateral: bool, debt: bool, price: uint })

    (acc { target: uint, result: (optional 
      { id: uint, addr: principal, decimals: uint,
        oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
        collateral: bool, debt: bool, price: uint }) }))
  (let ((target (get target acc))
        (result (get result acc)))
    (if (is-some result)
        acc
        (if (is-eq (get id asset-entry) target)
            { target: target, result: (some asset-entry) }
            acc))))

(define-private (find-collateral-amount
                (collateral-list (list 64 { aid: uint, amount: uint }))
                (target-asset-id uint))
    (get amount (fold iter-find-collateral collateral-list { target: target-asset-id, amount: u0 })))

(define-private (iter-find-collateral
                (item { aid: uint, amount: uint })
                (acc { target: uint, amount: uint }))
  (if (is-eq (get aid item) (get target acc))
      { target: (get target acc), amount: (get amount item) }
      acc))

(define-private (find-debt-scaled
                (debt-list (list 64 { aid: uint, scaled: uint }))
                (target-asset-id uint))
  (get scaled (fold iter-find-debt debt-list { target: target-asset-id, scaled: u0 })))

(define-private (iter-find-debt
                (item { aid: uint, scaled: uint })
                (acc { target: uint, scaled: uint }))
  (if (is-eq (get aid item) (get target acc))
      { target: (get target acc), scaled: (get scaled item) }
      acc))

(define-private (filter-out-debt-asset
                (debt-asset-list (list 64 { aid: uint, scaled: uint }))
                (asset-id uint))
  (get result (fold remove-if-match debt-asset-list { result: (list), target-asset-id: asset-id })))

(define-private (remove-if-match
                (item { aid: uint, scaled: uint })
                (acc { result: (list 64 { aid: uint, scaled: uint }), target-asset-id: uint }))
  (if (is-eq (get aid item) (get target-asset-id acc))
      acc
      { result: (unwrap-panic (as-max-len? (append (get result acc) item) u64)),
        target-asset-id: (get target-asset-id acc) }))

;; -- Debt conversion --------------------------------------------------------

(define-private (convert-to-scaled-debt (asset-id uint) (amount uint) (round-up bool))
  (let ((borrow-index (get index (unwrap-panic (get-cached-indexes asset-id)))))
  (if round-up
    (mul-div-up amount INDEX-PRECISION borrow-index)
    (mul-div-down amount INDEX-PRECISION borrow-index))))

;; -- Health check helpers ---------------------------------------------------

(define-private (is-healthy (collateral-usd uint) (debt-usd uint) (ltv uint))
  (if (is-eq debt-usd u0)
      true
      (<= (* debt-usd BPS) (* collateral-usd ltv))))

;; Check health using a custom mask's egroup rules
;; Returns true if position is healthy under the specified mask's LTV requirements
(define-private (is-healthy-with-mask (collateral-usd uint) (debt-usd uint) (mask uint))
  (let ((group (try! (get-egroup mask)))
        (ltvb (buff-to-uint-be (get LTV-BORROW group))))
    (ok (is-healthy collateral-usd debt-usd ltvb))))

(define-private (find-and-resolve-asset-value
                  (assets (list 64 
                    { id: uint, addr: principal, decimals: uint,
                    oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
                    collateral: bool, debt: bool, price: uint }))
                  (asset-id uint) (amount uint) (round-up bool))
  (match (find-asset asset-id assets)
    asset (normalize (* amount (get price asset)) (get decimals asset) round-up)
    u0))

;; find-and-resolve-asset-value has "price" already pre-calculated, get-asset-value does not
(define-private (get-asset-value
                  (asset { id: uint, addr: principal, decimals: uint,
                          oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
                          collateral: bool, debt: bool})
                  (amount uint) (round-up bool))
    (let ((oracle-data (get oracle asset))
          (price (try! (price-resolve oracle-data)))
          (decimals (get decimals asset)))
      (ok (normalize (* amount price) decimals round-up))))

;; -- Liquidation: pause check -----------------------------------------------

(define-private (is-liquidation-paused (asset-id uint))
  (let ((manual-pause (var-get pause-liquidation))
        (global-grace-end (default-to u0 (map-get? liquidation-grace-periods GLOBAL-LIQUIDATION-GRACE-ID)))
        (asset-grace-end (default-to u0 (map-get? liquidation-grace-periods asset-id)))
        (global-grace-active (< stacks-block-time global-grace-end))
        (asset-grace-active (< stacks-block-time asset-grace-end)))
    (or manual-pause global-grace-active asset-grace-active)))

;; -- Liquidation: math helpers ----------------------------------------------

;; Calculate liquidation factor: ((ltv-curr - ltv-liq-partial) * BPS) / (ltv-liq-full - ltv-liq-partial)
;; Capped at BPS (100%) to prevent over-liquidation
(define-private (calc-liq-factor (ltv-curr uint) (ltv-liq-partial uint) (ltv-liq-full uint))
  (min BPS (div-bps-down (- ltv-curr ltv-liq-partial) (- ltv-liq-full ltv-liq-partial))))

;; Apply curve exponent for graduated liquidation
;; liq-factor = liq-factor^alpha
(define-private (calc-liq-factor-exp (factor uint) (exp uint))
  (if (is-eq exp BPS) 
    factor
    (if (> exp BPS) 
        (/ (pow factor (/ exp BPS)) (pow BPS (- (/ exp BPS) u1)))
        (sqrti (* factor BPS))))) ;; assume factor^0.5

;; Scale penalty between min and max using liquidation factor
;; liq-penalty = liq-penalty-min + (liq-factor * (liq-penalty-max - liq-penalty-min) / BPS)
;; Capped at bound-max to handle cases where liq-factor > BPS
(define-private (calc-liq-factor-bound (liq-factor uint) (bound-min uint) (bound-max uint))
  (min bound-max (+ bound-min (mul-bps-down liq-factor (- bound-max bound-min)))))

;; Calculate debt to repay based on liquidation factor
;; debt-repay = liq-factor * debt / BPS
(define-private (calc-liq-debt-repay (debt uint) (liq-factor uint)) 
  (mul-bps-down liq-factor debt))

;; Calculate collateral to seize (includes liquidator bonus)
;; collateral-repay = debt-repay * (BPS + liq-penalty) / BPS
(define-private (calc-liq-collateral-repay (debt-repay uint) (liq-penalty uint)) 
  (mul-bps-down debt-repay (+ BPS liq-penalty)))

;; Calculate actual debt repayment when collateral is capped
;; debt-repay-real = (collateral-amount-usd * BPS) / (BPS + liq-penalty)
(define-private (calc-liq-debt-repay-real (collateral-amount-usd uint) (liq-penalty uint)) 
  (div-bps-down collateral-amount-usd (+ BPS liq-penalty)))

;; Graduated liquidation parameter calculation
;; Combines the 4-step liquidation factor calculation into a single helper
;; Returns: { liq-pct-scaled: uint, liq-penalty: uint, max-debt-usd: uint }
(define-private (calc-liquidation-params
  (current-ltv uint)
  (ltv-liq-partial uint)
  (ltv-liq-full uint)
  (liq-penalty-min uint)
  (liq-penalty-max uint)
  (curve-exponent uint)
  (total-debt-usd uint))
  
  (let ((liq-pct-linear (calc-liq-factor current-ltv ltv-liq-partial ltv-liq-full))
        (liq-pct-scaled (calc-liq-factor-exp liq-pct-linear curve-exponent))
        (liq-penalty (calc-liq-factor-bound liq-pct-scaled liq-penalty-min liq-penalty-max))
        (max-debt-usd (calc-liq-debt-repay total-debt-usd liq-pct-scaled)))
    {
      liq-pct-scaled: liq-pct-scaled,
      liq-penalty: liq-penalty,
      max-debt-usd: max-debt-usd
    }))

;; Process debt asset for liquidation
;; Finds asset info, converts to USD, caps at max liquidatable, converts back to token amount
;; Returns: { debt-actual-usd: uint, debt-actual: uint, debt-price: uint, debt-decimals: uint }
(define-private (process-debt-asset
  (debt-amount uint)
  (debt-aid uint)
  (max-debt-usd uint)
  (assets (list 64 {
    id: uint, addr: principal, decimals: uint,
    oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
    collateral: bool, debt: bool, price: uint
  })))
  (let ((debt-asset-info (unwrap-panic (find-asset debt-aid assets)))
        (debt-price (get price debt-asset-info))
        (debt-decimals (get decimals debt-asset-info))
        (debt-usd (normalize (* debt-amount debt-price) debt-decimals false))
        ;; cap debt at maximum liquidatable amount
        (debt-actual-usd (if (> debt-usd max-debt-usd) max-debt-usd debt-usd))
        ;; convert capped USD amount back to token amount
        (debt-actual (mul-div-down debt-actual-usd (pow u10 debt-decimals) debt-price)))
    {
      debt-actual-usd: debt-actual-usd,
      debt-actual: debt-actual,
      debt-price: debt-price,
      debt-decimals: debt-decimals
    }))

;; Process collateral asset for liquidation
;; Handles both enabled and disabled collateral assets
;; Calculates expected collateral, caps at user balance
;; Returns: { coll-actual: uint, coll-expected: uint, coll-price: uint, coll-decimals: uint }
(define-private (process-collateral-asset
  (coll-aid uint)
  (debt-actual-usd uint)
  (liq-penalty uint)
  (user-coll-balance uint)
  (assets (list 64 {
    id: uint, addr: principal, decimals: uint,
    oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
    collateral: bool, debt: bool, price: uint
  }))
  (coll-asset {
    id: uint, addr: principal, decimals: uint,
    oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
    collateral: bool, debt: bool
  }))
  
  (let (;; Calculate expected collateral in USD (with penalty bonus for liquidator)
        (coll-usd-expected (calc-liq-collateral-repay debt-actual-usd liq-penalty))
        
        ;; Handle disabled collaterals by resolving price if not in enabled assets
        (coll-asset-info (match (find-asset coll-aid assets)
                           ;; Found in enabled list: use it (already has price)
                           found found
                           ;; Not found (disabled): resolve price on demand
                           (let ((oracle-data (get oracle coll-asset))
                                 (price (unwrap-panic (price-resolve oracle-data))))
                             (merge coll-asset { price: price }))))
        (coll-price (get price coll-asset-info))
        (coll-decimals (get decimals coll-asset-info))
        (coll-expected (mul-div-down coll-usd-expected (pow u10 coll-decimals) coll-price))
        
        ;; cap at available collateral (user may not have enough)
        (coll-actual (if (> coll-expected user-coll-balance)
                         user-coll-balance
                         coll-expected)))
    {
      coll-actual: coll-actual,
      coll-expected: coll-expected,
      coll-price: coll-price,
      coll-decimals: coll-decimals
    }))

;; Calculate final liquidation amounts with proportional adjustments
;; If collateral was capped, recalculates debt proportionally
;; Returns: { debt-final-usd: uint, debt-final: uint }
(define-private (calc-final-liquidation-amounts
  (debt-actual-usd uint)
  (coll-actual uint)
  (coll-expected uint)
  (coll-price uint)
  (coll-decimals uint)
  (debt-price uint)
  (debt-decimals uint)
  (liq-penalty uint))
  
  (let ((coll-actual-usd (normalize (* coll-actual coll-price) coll-decimals false))
        ;; If collateral was capped, recalculate debt proportionally
        (debt-final-usd (if (< coll-actual coll-expected)
                           (calc-liq-debt-repay-real coll-actual-usd liq-penalty)
                           debt-actual-usd))
        (debt-final (mul-div-down debt-final-usd (pow u10 debt-decimals) debt-price)))
    {
      debt-final-usd: debt-final-usd,
      debt-final: debt-final
    }))

;; Scale debt for storage and calculate final execution amounts
;; Converts to scaled units, caps at current debt, calculates final collateral
;; Returns: { scaled-to-remove: uint, debt-to-repay: uint, coll-final: uint }
(define-private (scale-debt-for-liquidation
  (debt-final uint)
  (coll-actual uint)
  (curr-scaled uint)
  (asset-id uint))
  (let (;; convert debt amount to scaled units for storage
        (borrow-index (get index (unwrap-panic (get-cached-indexes asset-id))))
        (scaled-debt (mul-div-down debt-final INDEX-PRECISION borrow-index))
        ;; cap at current debt (prevent over-repayment)
        (scaled-to-remove (if (> scaled-debt curr-scaled) curr-scaled scaled-debt))
        (debt-to-repay (mul-div-up scaled-to-remove borrow-index INDEX-PRECISION))
        ;; If debt was capped, scale collateral proportionally
        (coll-final (if (< scaled-to-remove scaled-debt)
                        (mul-div-down coll-actual scaled-to-remove scaled-debt)
                        coll-actual)))
    {
      scaled-to-remove: scaled-to-remove,
      debt-to-repay: debt-to-repay,
      coll-final: coll-final
    }))

(define-private (socialize-debt-asset
                (debt-entry { aid: uint, scaled: uint })
                (acc { borrower: principal, success: bool }))
  ;; Early return if previous socialization failed
  (if (not (get success acc))
      acc
      (let ((borrower (get borrower acc))
            (failed-status { borrower: borrower, success: false })
            (asset-id (get aid debt-entry))
            (scaled-debt (get scaled debt-entry)))

            ;; Socialize in vault - pass scaled directly to avoid rounding
            (unwrap! (vault-socialize-debt asset-id scaled-debt) failed-status)
            ;; Remove from obligation
            (unwrap! (contract-call? .market-vault
                                      debt-remove-scaled
                                      borrower
                                      scaled-debt
                                      asset-id) failed-status)
          acc)
        ))

;; -- Liquidation: batch helper ----------------------------------------------

(define-private (call-liquidate (position { borrower: principal,
                                            collateral-ft: <ft-trait>,
                                            debt-ft: <ft-trait>,
                                            debt-amount: uint,
                                            min-collateral-expected: uint }))
  (liquidate (get borrower position)
             (get collateral-ft position)
             (get debt-ft position)
             (get debt-amount position)
             (get min-collateral-expected position)
             none   ;; collateral-receiver defaults to liquidator
             none)) ;; price-feeds not supported in batch - update prices separately

;; ============================================================================
;; READ-ONLY FUNCTIONS
;; ============================================================================

;; -- Pausability getters ----------------------------------------------------

(define-read-only (get-pause-liquidation) (ok (var-get pause-liquidation)))

(define-read-only (get-liquidation-grace-end) 
  (ok (default-to u0 (map-get? liquidation-grace-periods GLOBAL-LIQUIDATION-GRACE-ID))))

(define-read-only (get-liquidation-grace-period-asset (id uint)) 
  (ok (default-to u0 (map-get? liquidation-grace-periods id))))

;; -- Oracle getters ---------------------------------------------------------

(define-read-only (get-max-confidence-ratio)
  (ok (var-get max-confidence-ratio)))

(define-read-only (oracle-last-update (f {type: (buff 1), ident: (buff 32)}))
  (default-to u0 (map-get? last-update f)))

;; -- Index cache getters ----------------------------------------------------

(define-read-only (get-cached-indexes (aid uint))
  (map-get? index-cache { timestamp: stacks-block-time, aid: aid }))

;; ============================================================================
;; PUBLIC FUNCTIONS
;; ============================================================================

;; -- DAO configuration ------------------------------------------------------

(define-public (set-pause-liquidation (paused bool) (grace-period uint))
  (begin
    (try! (check-dao-auth))
    (let ((was-paused (var-get pause-liquidation)))
      (var-set pause-liquidation paused)
      ;; Only set grace period if liquidations were paused AND now unpausing
      (if (and was-paused (not paused))
          (map-set liquidation-grace-periods GLOBAL-LIQUIDATION-GRACE-ID (+ stacks-block-time grace-period))
          false)
      
      (print {
        action: "market-set-pause-liquidation",
        caller: tx-sender,
        data: {
          was-paused: was-paused,
          now-paused: paused,
          grace-period: grace-period,
          grace-end: (if (and was-paused (not paused))
                         (+ stacks-block-time grace-period)
                         u0)
        }
      })
      
      (ok true))))

(define-public (set-liquidation-grace-period (id uint) (grace-period uint))
  (begin
    (try! (check-dao-auth))
    (map-set liquidation-grace-periods id (+ stacks-block-time grace-period))
    
    (print {
      action: "market-set-liquidation-grace-period",
      caller: tx-sender,
      data: {
        asset-id: id,
        grace-period: grace-period,
        grace-end: (+ stacks-block-time grace-period)
      }
    })
    
    (ok true)))

(define-public (set-max-confidence-ratio (ratio uint))
  (begin
    (try! (check-dao-auth))
    (asserts! (<= ratio BPS) ERR-ORACLE-INVARIANT)
    
    (print {
      action: "market-set-max-confidence-ratio",
      caller: tx-sender,
      data: {
        old-value: (var-get max-confidence-ratio),
        new-value: ratio
      }
    })
    
    (var-set max-confidence-ratio ratio)
    (ok true)))

;; -- Oracle (public call for ststx ratio) -----------------------------------

;; ststx ratio transformation
(define-public (call-ststx-ratio)
  ;; @mainnet: (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.block-info-nakamoto-ststx-ratio-v2 get-ststx-ratio-v3))
  (ok STSTX-RATIO-DECIMALS))

;; -- Collateral operations --------------------------------------------------

(define-public (collateral-add (ft <ft-trait>) (amount uint) (price-feeds (optional (list 3 (buff 8192)))))
  (let ((ft-address (contract-of ft))
        (asset (try! (get-asset ft-address)))
        (asset-id (get id asset))
        (account contract-caller))

    (asserts! (get collateral asset) ERR-COLLATERAL-DISABLED)
    (asserts! (is-eq contract-caller tx-sender) ERR-AUTHORIZATION)
    ;; Validate future mask has valid egroup AND check health if user has debt
    
    (match (contract-call? .market-vault resolve-safe account)
      user-registry-data
        ;; User has existing position - check if adding NEW collateral asset
        (let ((current-raw-mask (get mask user-registry-data))
              (future-raw-mask (bit-or current-raw-mask (pow u2 asset-id)))
              (is-new-collateral (not (is-eq future-raw-mask current-raw-mask))))

          ;; If adding new collateral, validate egroup and check capacity
          (if is-new-collateral
              (let ((position (try! (get-position account)))
                    (current-mask (get mask position))
                    (future-mask (bit-or current-mask (pow u2 asset-id)))
                    (future-group (try! (get-egroup future-mask)))
                    ;; Accrue positions (required for price resolution)
                    (u-debt (accrue-user-debts (get debt position)))
                    (u-coll (accrue-user-collateral (get collateral position)))

                    ;; Get current egroup and notional values
                    (current-group (try! (get-egroup current-mask)))
                    (current-ltv (buff-to-uint-be (get LTV-BORROW current-group)))
                    (feeds-check (try! (write-feeds price-feeds)))
                    (current-assets (get-assets current-mask))
                    (current-notional (get-notional-evaluation { position: position, assets: current-assets }))
                    (current-debt-usd (get debt current-notional)))

                ;; ONLY check capacity if user has debt
                (if (> current-debt-usd u0)
                    ;; Calculate future mask and validate egroup exists
                    (let ((current-coll-usd (get collateral current-notional))
                          (current-capacity (* current-coll-usd current-ltv))
                          (added-collateral-value (try! (get-asset-value asset amount false)))
                          (future-ltv (buff-to-uint-be (get LTV-BORROW future-group)))
                          (future-coll-usd (+ current-coll-usd added-collateral-value))
                          (future-capacity (* future-coll-usd future-ltv)))
                      ;; CRITICAL CHECK: Future capacity must not decrease
                      (asserts! (>= future-capacity current-capacity) ERR-UNHEALTHY))
                    ;; No debt - skip capacity check
                    true))
              
              ;; Not new collateral - skip all checks (safe to add more)
              true))
      
      new-user-error-code
        ;; New user - validate that the new future mask is in a valid egroup
        (begin
          (try! (get-egroup (pow u2 asset-id)))
          true))

    ;; Execute collateral add (existing logic)
    (let ((result (try! (contract-call? .market-vault collateral-add account amount ft asset-id))))
      
      (print {
        action: "collateral-add",
        caller: contract-caller,
        data: {
          account: account,
          asset-id: asset-id,
          asset-addr: ft-address,
          amount: amount,
          updated-collateral-amount: result
        }
      })
      
      (ok result))))


(define-public (collateral-remove (ft <ft-trait>) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (let ((ft-address (contract-of ft))
        (asset (try! (get-asset ft-address)))
        (asset-id (get id asset))
        (account contract-caller)
        (collateral-receiver (match receiver recv recv contract-caller))
        (is-collateral-enabled (get collateral asset))
        (feeds-check (try! (write-feeds price-feeds)))
        
        ;; Step 1: Get position WITHOUT resolving prices
        (position (try! (get-position account)))
        (position-mask (get mask position))
        (pos-full (if is-collateral-enabled position (try! (get-full-position account))))
        
        ;; Step 2: Accrue user's positions (populates cache for ztokens)
        (u-debt (accrue-user-debts (get debt pos-full)))
        (u-coll (accrue-user-collateral (get collateral pos-full)))
        
        ;; Step 3: NOW safe to resolve prices (cache is populated)
        (assets (get-assets position-mask))

        ;; Get current collateral for this asset to check if removing all
        (curr-coll-aid (find-collateral-amount (get collateral position) asset-id))
        (removing-all (is-eq amount curr-coll-aid))
        
        (current-group (try! (get-egroup position-mask)))
        (current-ltvb (buff-to-uint-be (get LTV-BORROW current-group)))

        ;; LTV (enabled collaterals only)
        (notional-valued-assets (get-notional-evaluation { position: position, assets: assets }))
        (collateral-value (get collateral notional-valued-assets))
        (debt-value (get debt notional-valued-assets))

        ;; post-removal calculation
        (removed-asset-value (find-and-resolve-asset-value assets asset-id amount true)))

    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (is-healthy collateral-value debt-value current-ltvb) ERR-UNHEALTHY)

    (if (is-eq debt-value u0)
        true
        (asserts!
          (if is-collateral-enabled
              ;; ENABLED: Standard check + post-removal health if removing all
              (let ((t (asserts! (>= collateral-value removed-asset-value) ERR-INSUFFICIENT-COLLATERAL))
                    (post-removal-collateral-value (- collateral-value removed-asset-value)))
                (if removing-all
                    ;; Removing all: Check health with future mask (set asset bit to 0)
                    (let ((future-mask (bit-and position-mask (bit-not (pow u2 asset-id)))))
                      (try! (is-healthy-with-mask post-removal-collateral-value debt-value future-mask)))
                    ;; Not removing all: Use current rules
                    (is-healthy post-removal-collateral-value debt-value current-ltvb)))

              ;; DISABLED: Calculate using ALL collaterals
              (let ((oracle-data (get oracle asset))
                    (price (unwrap! (price-resolve oracle-data) ERR-DISABLED-COLLATERAL-PRICE-FAILED))
                    (decimals (get decimals asset))
                    (user-amount (find-collateral-amount (get collateral pos-full) asset-id))
                    (disabled-notional (normalize (* user-amount price) decimals false))
                    (removal-notional (normalize (* amount price) decimals true))
                    (total-collateral-value (+ collateral-value disabled-notional)))
                (asserts! (>= total-collateral-value removal-notional) ERR-INSUFFICIENT-COLLATERAL)
                (is-healthy (- total-collateral-value removal-notional) debt-value current-ltvb)))
          ERR-UNHEALTHY))

    (let ((result (try! (contract-call? .market-vault
                                        collateral-remove
                                        account
                                        amount
                                        ft
                                        asset-id
                                        collateral-receiver))))
      
      (print {
        action: "collateral-remove",
        caller: contract-caller,
        data: {
          account: account,
          receiver: collateral-receiver,
          asset-id: asset-id,
          asset-addr: ft-address,
          amount: amount,
          updated-collateral-amount: result,
          position-collateral-usd: collateral-value,
          position-debt-usd: debt-value
        }
      })
      
      (ok result))))

;; -- Supply and collateral-add for topping up ztoken collateral
;; Deposits underlying token (STX, sBTC, USDC, etc.) to a vault, receives zTokens,
;; and adds those zTokens as collateral - all in one transaction.

(define-public (supply-collateral-add (ft <ft-trait>) (amount uint) (min-shares uint) (price-feeds (optional (list 3 (buff 8192)))))
  (let ((ft-address (contract-of ft))
        (asset (try! (get-asset ft-address)))
        (asset-id (get id asset))
        (account contract-caller))
    
    ;; Preconditions
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (is-eq contract-caller tx-sender) ERR-AUTHORIZATION)
    
    ;; Step 1: Transfer underlying tokens from user to this contract (market)
    (try! (contract-call? ft transfer amount account current-contract none))
    
    ;; Step 2: Deposit to vault to get zTokens (minted to user)
    ;; Now the market has the underlying tokens and can call vault-deposit
    (let ((shares-minted 
            (try! (if (is-eq ft-address ZEST-STX-WRAPPER-CONTRACT)
              ;; For wSTX: use as-contract with-stx pattern
              (as-contract? ((with-stx amount))
                (try! (vault-deposit asset-id amount min-shares account)))
              ;; For other tokens: use as-contract with-ft pattern
              (as-contract? ((with-ft ft-address "*" amount))
                (try! (vault-deposit asset-id amount min-shares account)))))))
      
      ;; Step 3: Add the minted zTokens as collateral
      (if (is-eq asset-id STX) (collateral-add .vault-stx shares-minted price-feeds)
      (if (is-eq asset-id sBTC) (collateral-add .vault-sbtc shares-minted price-feeds)
      (if (is-eq asset-id stSTX) (collateral-add .vault-ststx shares-minted price-feeds)
      (if (is-eq asset-id USDC) (collateral-add .vault-usdc shares-minted price-feeds)
      (if (is-eq asset-id USDH) (collateral-add .vault-usdh shares-minted price-feeds)
      (if (is-eq asset-id stSTXbtc) (collateral-add .vault-ststxbtc shares-minted price-feeds)
      ERR-UNKNOWN-VAULT))))))))
)

;; -- Collateral-remove and redeem for withdrawing underlying from ztoken collateral

(define-public (collateral-remove-redeem (ft <ft-trait>) (amount uint) (min-underlying uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (let ((ft-address (contract-of ft))
        (asset (try! (get-asset ft-address)))
        (ztoken-id (get id asset))
        (underlying-id (if (is-eq ztoken-id zSTX) STX
                       (if (is-eq ztoken-id zsBTC) sBTC
                       (if (is-eq ztoken-id zstSTX) stSTX
                       (if (is-eq ztoken-id zUSDC) USDC
                       (if (is-eq ztoken-id zUSDH) USDH
                       (if (is-eq ztoken-id zstSTXbtc) stSTXbtc
                       u100)))))))  ;; invalid sentinel for non-ztoken
        (funds-receiver (match receiver recv recv contract-caller)))

    (asserts! (<= underlying-id stSTXbtc) ERR-UNKNOWN-VAULT)
    
    ;; Step 1: Remove collateral - sends zTokens to THIS contract (market)
    ;; receiver=current-contract so market holds the zTokens
    (try! (collateral-remove ft amount (some current-contract) price-feeds))
    
    ;; Step 2: Redeem zTokens for underlying
    ;; vault-redeem calls vault.redeem which burns shares from contract-caller (market)
    ;; Since market now holds the zTokens, this succeeds
    ;; Underlying tokens are sent to the specified receiver
    (vault-redeem underlying-id amount min-underlying funds-receiver)))

;; -- Debt operations --------------------------------------------------------

(define-public (borrow (ft <ft-trait>) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (let ((address (contract-of ft))
        (asset (try! (get-asset address)))
        (asset-id (get id asset))
        (account contract-caller)
        (funds-receiver (match receiver recv recv contract-caller))
        (feeds-check (try! (write-feeds price-feeds)))
        
        ;; Step 1: Get position WITHOUT resolving prices
        (position (try! (get-position account)))
        (mask (get mask position))
        
        ;; Step 2: Accrue user's positions (populates cache for ztokens)
        (u-debt (accrue-user-debts (get debt position)))
        (u-coll (accrue-user-collateral (get collateral position)))
        
        ;; Step 3: Accrue the asset being borrowed (needed for index access)
        (unused (accrue-and-cache asset-id))
        
        ;; Step 4: NOW safe to resolve prices (cache is populated)
        (assets (get-assets mask))

        ;; Calculate current health with current mask
        (current-group (try! (get-egroup mask)))
        (current-ltvb (buff-to-uint-be (get LTV-BORROW current-group)))

        ;; LTV
        (notional-valued-assets (get-notional-evaluation { position: position, assets: assets }))
        (collateral-value (get collateral notional-valued-assets))
        (debt-value (get debt notional-valued-assets)))

    ;; preconditions
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (get debt asset) ERR-BORROW-DISABLED)
    (asserts! (is-healthy collateral-value debt-value current-ltvb) ERR-UNHEALTHY)

    ;; Calculate FUTURE debt (after adding this debt)
    ;; For debt: bit position = asset-id + 64 (DEBT-OFFSET)
    (let ((future-mask (bit-or mask (pow u2 (+ asset-id DEBT-OFFSET))))
          (future-group (try! (get-egroup future-mask)))
          ;; Per-egroup borrow disable check (uses FUTURE egroup, not current)
          ;; Each bit in BORROW-DISABLED-MASK corresponds to a debt asset ID (NOT offset by 64)
          (disabled-borrow-mask (get BORROW-DISABLED-MASK future-group))
          (debt-increase (try! (get-asset-value asset amount true)))
          (debt-post-increased (+ debt-value debt-increase)))

    ;; Check if this specific asset is disabled for borrowing in the FUTURE egroup
    (asserts! (is-eq (bit-and disabled-borrow-mask (pow u2 asset-id)) u0) ERR-EGROUP-ASSET-BORROW-DISABLED)
    ;; postconditions
    (asserts! (try! (is-healthy-with-mask collateral-value debt-post-increased future-mask)) ERR-UNHEALTHY)

    (try! (vault-system-borrow asset-id amount funds-receiver))
    (let ((scaled-debt-added (convert-to-scaled-debt asset-id amount true))
          (borrow-index (get index (unwrap-panic (get-cached-indexes asset-id)))))
      (try! (contract-call? .market-vault
                            debt-add-scaled
                            account
                            scaled-debt-added
                            asset-id))
      
      (print {
        action: "borrow",
        caller: contract-caller,
        data: {
          account: account,
          receiver: funds-receiver,
          asset-id: asset-id,
          asset-addr: address,
          amount: amount,
          scaled-debt-added: scaled-debt-added,
          borrow-index: borrow-index,
          position-collateral-usd: collateral-value,
          position-debt-usd: debt-post-increased
        }
      })
      
      (ok true)))))

(define-public (repay (ft <ft-trait>) (amount uint) (on-behalf-of (optional principal)))
  (let ((address (contract-of ft))
        (asset (try! (get-asset address)))
        (asset-id (get id asset))
        ;; defaults to payer (contract-caller) if not specified
        (account (match on-behalf-of behalf behalf contract-caller))
        
        ;; Step 1: Get position WITHOUT resolving prices
        (position (try! (get-position account)))
        (mask (get mask position))
        
        ;; Step 2: Accrue user's positions (populates cache for ztokens)
        (u-debt (accrue-user-debts (get debt position)))
        
        (borrow-index (get index (unwrap-panic (get-cached-indexes asset-id))))
        
        ;; Step 3: Get account debt FIRST to enable safe amount capping
        (account-scaled-debt (get-account-scaled-debt account asset-id))
        
        ;; Step 4: Calculate max repayable amount (actual debt in token), mul-div-up for safe upper bound
        (max-repay-tokens (mul-div-up account-scaled-debt borrow-index INDEX-PRECISION))
        
        ;; Step 5: Cap input amount at actual debt - prevents overflow in scaled calculation
        (safe-amount (min amount max-repay-tokens))
        
        ;; Step 6: Convert to scaled debt (amount is bounded)
        (scaled-debt-repayment (mul-div-down safe-amount INDEX-PRECISION borrow-index))

        (repaid-scaled-debt (min account-scaled-debt scaled-debt-repayment))
        (amount-to-repay (mul-div-up repaid-scaled-debt borrow-index INDEX-PRECISION))
        
        ;; Check if repaying ALL debt for this asset
        (repaying-all (is-eq repaid-scaled-debt account-scaled-debt)))

    ;; preconditions
    (asserts! (is-eq contract-caller tx-sender) ERR-AUTHORIZATION)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (> repaid-scaled-debt u0) ERR-INSUFFICIENT-SCALED-DEBT)

    (try! (vault-system-repay asset-id amount-to-repay ft address))
    ;; update
    (try! (contract-call? .market-vault
                            debt-remove-scaled
                            account
                            repaid-scaled-debt
                            asset-id))
    
    (print {
      action: "repay",
      caller: contract-caller,
      data: {
        payer: contract-caller,
        account: account,
        asset-id: asset-id,
        asset-addr: address,
        amount-requested: amount,
        amount-repaid: amount-to-repay,
        scaled-debt-removed: repaid-scaled-debt,
        borrow-index: borrow-index
      }
    })
    
    (ok amount-to-repay)))

;; -- Liquidation operations -------------------------------------------------

(define-public (liquidate
                (borrower principal)
                (collateral-ft <ft-trait>)
                (debt-ft <ft-trait>)
                (debt-amount uint)
                (min-collateral-expected uint)
                (collateral-receiver (optional principal))
                (price-feeds (optional (list 3 (buff 8192)))))
  (let (
    (feeds-check (try! (write-feeds price-feeds)))
    (liquidator contract-caller)
    (position (try! (get-liquidation-position borrower)))
    (pos-full (try! (get-full-position borrower)))
    (mask (get mask position))
    (group (try! (get-egroup mask)))

    (coll-address (contract-of collateral-ft))
    (debt-address (contract-of debt-ft))
    (coll-asset (try! (get-asset coll-address)))
    (debt-asset (try! (get-asset debt-address)))
    (coll-aid (get id coll-asset))
    (debt-aid (get id debt-asset))

    ;; accrue FIRST - populates cache for zToken price resolution
    (u-debt (accrue-user-debts (get debt pos-full)))
    (u-coll (accrue-user-collateral (get collateral pos-full)))

    ;; NOW safe to resolve prices (cache is populated)
    (assets (get-assets mask))
    (notional-valued-assets (get-notional-evaluation { position: position, assets: assets }))
    (total-collateral-usd (get collateral notional-valued-assets))
    (total-debt-usd (get debt notional-valued-assets))

    ;; LTC thresholds, liq params, health
    (ltv-liq-partial (buff-to-uint-be (get LTV-LIQ-PARTIAL group)))
    (ltv-liq-full (buff-to-uint-be (get LTV-LIQ-FULL group)))
    (liq-penalty-min (buff-to-uint-be (get LIQ-PENALTY-MIN group)))
    (liq-penalty-max (buff-to-uint-be (get LIQ-PENALTY-MAX group)))
    (curve-exponent (buff-to-uint-be (get LIQ-CURVE-EXP group)))

    ;; LTV = (debt x 10,000) / collateral
    ;; handle edge case: If collateral = 0, return max LTV (BPS) or 0 if debt also 0
    (current-ltv   (if (is-eq total-collateral-usd u0)
                       (if (is-eq total-debt-usd u0) u0 BPS)
                       (mul-div-down total-debt-usd BPS total-collateral-usd)))
    
    ;; Oracle frontrunning protection: prevent same-block liquidation
    ;; This blocks flash-loan based attacks where user borrows + gets liquidated in same block
    (last-borrow-block (get last-borrow-block position))
    (same-block-check (asserts! (not (is-eq last-borrow-block stacks-block-height)) ERR-LIQUIDATION-BORROW-SAME-BLOCK))

    ;; health check (FAIL-FAST) 
    ;; Check position is liquidatable BEFORE calling calc-liq-factor
    (health-check  (asserts! (>= current-ltv ltv-liq-partial) ERR-HEALTHY))

    ;; liquidation parameters (graduated liquidation calculation)
    (liq-params (calc-liquidation-params 
                  current-ltv ltv-liq-partial ltv-liq-full
                  liq-penalty-min liq-penalty-max 
                  curve-exponent total-debt-usd))
    (liq-pct-scaled (get liq-pct-scaled liq-params))
    (liq-penalty (get liq-penalty liq-params))
    (max-debt-usd (get max-debt-usd liq-params))

    ;; debt processing
    (debt-info (process-debt-asset debt-amount debt-aid max-debt-usd assets))
    (debt-actual-usd (get debt-actual-usd debt-info))
    (debt-actual (get debt-actual debt-info))
    (debt-price (get debt-price debt-info))
    (debt-decimals (get debt-decimals debt-info))

    ;; collateral processing
    (user-coll-balance (find-collateral-amount (get collateral pos-full) coll-aid))
    (coll-info (process-collateral-asset coll-aid debt-actual-usd liq-penalty 
                                         user-coll-balance assets coll-asset))
    (coll-actual (get coll-actual coll-info))
    (coll-expected (get coll-expected coll-info))
    (coll-price (get coll-price coll-info))
    (coll-decimals (get coll-decimals coll-info))

    ;; final liquidation amounts (with proportional adjustment if needed)
    (final-amounts (calc-final-liquidation-amounts
                     debt-actual-usd coll-actual coll-expected
                     coll-price coll-decimals
                     debt-price debt-decimals liq-penalty))
    (debt-final-usd (get debt-final-usd final-amounts))
    (debt-final (get debt-final final-amounts))

    ;; debt scaling for storage
    (curr-scaled (get-account-scaled-debt borrower debt-aid))
    (scaled-info (scale-debt-for-liquidation debt-final coll-actual curr-scaled debt-aid))
    (scaled-to-remove (get scaled-to-remove scaled-info))
    (debt-to-repay (get debt-to-repay scaled-info))
    (coll-final (get coll-final scaled-info)))

    (asserts! (not (is-liquidation-paused debt-aid)) ERR-LIQUIDATION-PAUSED)
    (asserts! (is-eq contract-caller tx-sender) ERR-AUTHORIZATION)
    (asserts! (> debt-amount u0) ERR-AMOUNT-ZERO)
    (asserts! (> debt-to-repay u0) ERR-ZERO-LIQUIDATION-AMOUNTS)
    (asserts! (> coll-final u0) ERR-ZERO-LIQUIDATION-AMOUNTS)
    (asserts! (>= coll-final min-collateral-expected) ERR-SLIPPAGE)

    ;; execute liquidation
    (try! (vault-system-repay debt-aid debt-to-repay debt-ft debt-address))

    ;; update obligations and socialize bad debt
    (let ((debt-updated (try! (contract-call? .market-vault
                              debt-remove-scaled
                              borrower
                              scaled-to-remove
                              debt-aid)))
          ;; Collateral receiver defaults to liquidator if not specified
          (actual-receiver (match collateral-receiver recv recv liquidator))
          (coll-removed (try! (contract-call? .market-vault
                              collateral-remove
                              borrower
                              coll-final
                              collateral-ft
                              coll-aid
                              actual-receiver)))

          (no-collateral-left (and
                                (is-eq (len (get collateral pos-full)) u1)
                                (is-eq user-coll-balance coll-actual))))

      ;; Handle bad debt socialization if no collateral left
      (let ((bad-debt-socialized 
              (if no-collateral-left
                  (let ((stripped-debt-list (filter-out-debt-asset (get debt pos-full) debt-aid))
                        (fresh-debt-list (if (is-eq debt-updated u0)
                                             stripped-debt-list
                                             (unwrap-panic (as-max-len?
                                               (append stripped-debt-list
                                                       { aid: debt-aid, scaled: debt-updated })
                                               u64)))))
                    (if (> (len fresh-debt-list) u0) ;; if still has debt
                      (let ((socialization-result (fold socialize-debt-asset 
                                                        fresh-debt-list 
                                                        { borrower: borrower, success: true })))
                        (asserts! (get success socialization-result) ERR-BAD-DEBT-SOCIALIZATION-FAILED)
                        ;; emit bad-debt-socialized event
                        (print {
                          action: "bad-debt-socialized",
                          caller: contract-caller,
                          data: {
                            borrower: borrower,
                            debt-list: fresh-debt-list
                          }
                        })
                        true)
                      false))
                  false)))
        
        ;; emit main liquidate event
        (print {
          action: "liquidate",
          caller: contract-caller,
          data: {
            liquidator: liquidator,
            borrower: borrower,
            collateral-asset-id: coll-aid,
            collateral-asset-addr: coll-address,
            debt-asset-id: debt-aid,
            debt-asset-addr: debt-address,
            debt-repaid: debt-to-repay,
            debt-repaid-usd: debt-final-usd,
            collateral-seized: coll-final,
            collateral-price: coll-price,
            collateral-decimals: coll-decimals,
            liq-penalty-bps: liq-penalty,
            position-collateral-usd-before: total-collateral-usd,
            position-debt-usd-before: total-debt-usd,
            bad-debt-socialized: bad-debt-socialized
          }
        })
        
        (ok { debt: debt-to-repay, collateral: coll-final })))))

;; Liquidates multiple positions atomically
;; Each position can have different: borrower, collateral asset, debt asset, and debt amount
;; Prevents front-running attacks that prevent bad debt socialization
;; Note: price-feeds not supported in batch - update prices separately or use individual liquidate()
;; Returns list of responses - one per position (ok/err)
;; Failed liquidations return error codes but don't revert entire batch
(define-public (liquidate-multi
                (positions (list 64 { borrower: principal,
                                      collateral-ft: <ft-trait>,
                                      debt-ft: <ft-trait>,
                                      debt-amount: uint,
                                      min-collateral-expected: uint })))
  (ok (map call-liquidate positions)))

;; Liquidates a position and automatically redeems zToken collateral for underlying
;; ONLY for zToken collateral - for non-zToken collateral, use regular liquidate()
;; Flow: liquidate -> receive zTokens to market -> redeem zTokens -> send underlying to receiver
(define-public (liquidate-redeem
                (borrower principal)
                (collateral-ft <ft-trait>)
                (debt-ft <ft-trait>)
                (debt-amount uint)
                (min-collateral-expected uint)
                (min-underlying uint)
                (receiver (optional principal))
                (price-feeds (optional (list 3 (buff 8192)))))
  (let ((coll-address (contract-of collateral-ft))
        (coll-asset (try! (get-asset coll-address)))
        (ztoken-id (get id coll-asset))
        ;; Map zToken to underlying vault ID for redemption
        (underlying-id (if (is-eq ztoken-id zSTX) STX
                       (if (is-eq ztoken-id zsBTC) sBTC
                       (if (is-eq ztoken-id zstSTX) stSTX
                       (if (is-eq ztoken-id zUSDC) USDC
                       (if (is-eq ztoken-id zUSDH) USDH
                       (if (is-eq ztoken-id zstSTXbtc) stSTXbtc
                       u100)))))))  ;; invalid sentinel for non-ztoken
        (funds-receiver (match receiver recv recv contract-caller)))
    
    ;; Validate collateral is a zToken
    (asserts! (is-ztoken ztoken-id) ERR-UNKNOWN-VAULT)
    
    ;; Step 1: Liquidate with market as receiver (market receives zTokens)
    (let ((liq-result (try! (liquidate borrower
                                       collateral-ft
                                       debt-ft
                                       debt-amount
                                       min-collateral-expected
                                       (some current-contract)  ;; zTokens go to market
                                       price-feeds)))
          (collateral-seized (get collateral liq-result))
          (debt-repaid (get debt liq-result)))
      
      ;; Step 2: Redeem zTokens for underlying
      ;; Market now holds zTokens, vault-redeem burns them and sends underlying to receiver
      (let ((underlying-amount (try! (vault-redeem underlying-id 
                                                   collateral-seized 
                                                   min-underlying 
                                                   funds-receiver))))
        
        (print {
          action: "liquidate-redeem",
          caller: contract-caller,
          data: {
            borrower: borrower,
            receiver: funds-receiver,
            ztoken-id: ztoken-id,
            underlying-id: underlying-id,
            debt-repaid: debt-repaid,
            collateral-seized: collateral-seized,
            underlying-received: underlying-amount
          }
        })
        
        (ok { debt: debt-repaid, underlying: underlying-amount })))))
