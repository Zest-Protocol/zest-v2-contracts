;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; protocol-data - read-only utility contract
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Provides optimized read-only functions to query protocol state
;; Batches related data to minimize cross-contract call overhead

;; ============================================================================
;; CONSTANTS
;; ============================================================================

;; -- Asset IDs (Paired: underlying_id, vault_id = underlying_id + 1)
(define-constant STX u0)
(define-constant zSTX u1)
(define-constant sBTC u2)
(define-constant zsBTC u3)
(define-constant stSTX u4)
(define-constant zstSTX u5)
(define-constant USDC u6)
(define-constant zUSDC u7)
(define-constant USDH u8)
(define-constant zUSDH u9)
(define-constant stSTXbtc u10)
(define-constant zstSTXbtc u11)

;; -- Precision
(define-constant BPS u10000)
(define-constant INDEX-PRECISION u1000000000000)

;; -- Iteration helpers
(define-constant VAULT-IDS (list u0 u1 u2 u3 u4 u5))
(define-constant ITER-UINT-128 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63 u64 u65 u66 u67 u68 u69 u70 u71 u72 u73 u74 u75 u76 u77 u78 u79 u80 u81 u82 u83 u84 u85 u86 u87 u88 u89 u90 u91 u92 u93 u94 u95 u96 u97 u98 u99 u100 u101 u102 u103 u104 u105 u106 u107 u108 u109 u110 u111 u112 u113 u114 u115 u116 u117 u118 u119 u120 u121 u122 u123 u124 u125 u126 u127))

;; -- Underlying contract addresses
(define-constant UNDERLYING-STX .wstx)
;; @mainnet: (define-constant UNDERLYING-SBTC 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token)
(define-constant UNDERLYING-SBTC .sbtc)
;; @mainnet: (define-constant UNDERLYING-STSTX 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token)
(define-constant UNDERLYING-STSTX .ststx)
;; @mainnet: (define-constant UNDERLYING-USDC 'SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx)
(define-constant UNDERLYING-USDC .usdc)
;; @mainnet: (define-constant UNDERLYING-USDH 'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1)
(define-constant UNDERLYING-USDH .usdh)
;; @mainnet: (define-constant UNDERLYING-STSTXBTC 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststxbtc-token-v2)
(define-constant UNDERLYING-STSTXBTC .ststxbtc)

;; -- Oracle: Pyth price feed IDs (mainnet)
;; STX/USD: https://pyth.network/price-feeds/crypto-stx-usd
(define-constant PYTH-STX 0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17)
;; BTC/USD: https://pyth.network/price-feeds/crypto-btc-usd
(define-constant PYTH-BTC 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43)
;; USDC/USD: https://pyth.network/price-feeds/crypto-usdc-usd
(define-constant PYTH-USDC 0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a)

;; -- Oracle: DIA oracle key for USDH
(define-constant DIA-USDH "USDh/USD")

;; -- Oracle: stSTX ratio decimals
(define-constant STSTX-RATIO-DECIMALS u1000000)

;; ============================================================================
;; ERRORS
;; ============================================================================
(define-constant ERR-UNKNOWN-VAULT (err u900001))
(define-constant ERR-UNKNOWN-UNDERLYING (err u900002))
(define-constant ERR-NO-POSITION (err u900003))

;; ============================================================================
;; PRIVATE FUNCTIONS
;; ============================================================================

;; -- Math utilities ---------------------------------------------------------

(define-private (mul-div-down (x uint) (y uint) (z uint))
  (/ (* x y) z))

(define-private (mul-bps-down (x uint) (y uint))
  (/ (* x y) BPS))

(define-private (min (a uint) (b uint))
  (if (< a b) a b))

;; -- Oracle: Pyth price resolution ------------------------------------------

;; Normalize Pyth price to 8 decimal precision
;; Pyth returns price with negative exponent (e.g., price=12345, expo=-8 means $0.00012345)
(define-private (normalize-pyth (price int) (expo int))
  (let ((adj (+ expo 8)))
    (if (is-eq adj 0)
        (to-uint price)
        (if (> adj 0)
            (to-uint (* price (pow 10 adj)))
            (to-uint (/ price (pow 10 (- adj))))))))

;; Get price from Pyth oracle storage (read-only)
;; Returns price in 8 decimal precision (e.g., $1.00 = 100000000)
(define-private (get-pyth-price (feed-id (buff 32)))
  ;; @mainnet: (match (contract-call? 'SP1CGXWEAMG6P6FT04W66NVGJ7PQWMDAC19R7PJ0Y.pyth-storage-v4 get-price feed-id)
  (match (contract-call? .pyth-storage-v4 get-price feed-id)
    result (some (normalize-pyth (get price result) (get expo result)))
    err-val none))

;; -- Oracle: DIA price resolution -------------------------------------------

;; Get price from DIA oracle (for USDH)
;; DIA returns { value: uint, timestamp: uint } where value is in 8 decimal precision
;; Note: Uses unwrap-panic since DIA oracle is external and type cannot be determined at compile time
(define-private (get-dia-price (key (string-ascii 32)))
  (some (get value (unwrap-panic (contract-call? 'SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle get-value key)))))

;; -- Oracle: stSTX ratio ----------------------------------------------------

;; Get stSTX/STX ratio (how much STX per stSTX)
;; Returns ratio in STSTX-RATIO-DECIMALS precision (1000000)
(define-private (get-ststx-ratio)
  ;; @mainnet: (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.block-info-nakamoto-ststx-ratio-v2 get-ststx-ratio-v3))
  (ok STSTX-RATIO-DECIMALS))

;; -- Vault routing: get interest rate --------------------------------------

(define-private (get-vault-interest-rate (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-interest-rate))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-interest-rate))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-interest-rate))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-interest-rate))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-interest-rate))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-interest-rate))
  u0)))))))

;; -- Vault routing: get utilization -----------------------------------------

(define-private (get-vault-utilization (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-utilization))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-utilization))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-utilization))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-utilization))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-utilization))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-utilization))
  u0)))))))

;; -- Vault routing: get fee reserve -----------------------------------------

(define-private (get-vault-fee-reserve (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-fee-reserve))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-fee-reserve))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-fee-reserve))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-fee-reserve))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-fee-reserve))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-fee-reserve))
  u0)))))))

;; -- Vault routing: get total assets ----------------------------------------

(define-private (get-vault-total-assets (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-total-assets))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-total-assets))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-total-assets))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-total-assets))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-total-assets))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-total-assets))
  u0)))))))

;; -- Vault routing: get debt ------------------------------------------------

(define-private (get-vault-debt (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-debt))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-debt))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-debt))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-debt))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-debt))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-debt))
  u0)))))))

;; -- Vault routing: get total supply ----------------------------------------

(define-private (get-vault-total-supply (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-total-supply))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-total-supply))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-total-supply))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-total-supply))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-total-supply))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-total-supply))
  u0)))))))

;; -- Vault routing: get borrow index ----------------------------------------

(define-private (get-vault-borrow-index (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-index))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-index))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-index))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-index))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-index))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-index))
  INDEX-PRECISION)))))))

;; -- Vault routing: get liquidity index -------------------------------------

(define-private (get-vault-liquidity-index (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-liquidity-index))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-liquidity-index))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-liquidity-index))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-liquidity-index))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-liquidity-index))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-liquidity-index))
  INDEX-PRECISION)))))))

;; -- Vault routing: get cap supply ------------------------------------------

(define-private (get-vault-cap-supply (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-cap-supply))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-cap-supply))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-cap-supply))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-cap-supply))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-cap-supply))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-cap-supply))
  u0)))))))

;; -- Vault routing: get cap debt --------------------------------------------

(define-private (get-vault-cap-debt (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-cap-debt))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-cap-debt))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-cap-debt))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-cap-debt))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-cap-debt))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-cap-debt))
  u0)))))))

;; -- Vault routing: get last update -----------------------------------------

(define-private (get-vault-last-update (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-last-update))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-last-update))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-last-update))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-last-update))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-last-update))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-last-update))
  u0)))))))

;; -- Vault routing: get points util -----------------------------------------

(define-private (get-vault-points-util (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-points-util))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-points-util))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-points-util))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-points-util))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-points-util))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-points-util))
  (list u0 u0 u0 u0 u0 u0 u0 u0))))))))

;; -- Vault routing: get points rate -----------------------------------------

(define-private (get-vault-points-rate (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-points-rate))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-points-rate))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-points-rate))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-points-rate))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-points-rate))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-points-rate))
  (list u0 u0 u0 u0 u0 u0 u0 u0))))))))

;; -- Vault routing: convert shares to underlying assets ---------------------

(define-private (get-vault-underlying-balance (vid uint) (account principal))
  (if (is-eq vid STX)
      (let ((shares (unwrap-panic (contract-call? .vault-stx get-balance account))))
        (unwrap-panic (contract-call? .vault-stx convert-to-assets shares)))
  (if (is-eq vid sBTC)
      (let ((shares (unwrap-panic (contract-call? .vault-sbtc get-balance account))))
        (unwrap-panic (contract-call? .vault-sbtc convert-to-assets shares)))
  (if (is-eq vid stSTX)
      (let ((shares (unwrap-panic (contract-call? .vault-ststx get-balance account))))
        (unwrap-panic (contract-call? .vault-ststx convert-to-assets shares)))
  (if (is-eq vid USDC)
      (let ((shares (unwrap-panic (contract-call? .vault-usdc get-balance account))))
        (unwrap-panic (contract-call? .vault-usdc convert-to-assets shares)))
  (if (is-eq vid USDH)
      (let ((shares (unwrap-panic (contract-call? .vault-usdh get-balance account))))
        (unwrap-panic (contract-call? .vault-usdh convert-to-assets shares)))
  (if (is-eq vid stSTXbtc)
      (let ((shares (unwrap-panic (contract-call? .vault-ststxbtc get-balance account))))
        (unwrap-panic (contract-call? .vault-ststxbtc convert-to-assets shares)))
  u0)))))))

;; -- Vault routing: get underlying address ----------------------------------

(define-private (get-vault-underlying (vid uint))
  (if (is-eq vid STX) UNDERLYING-STX
  (if (is-eq vid sBTC) UNDERLYING-SBTC
  (if (is-eq vid stSTX) UNDERLYING-STSTX
  (if (is-eq vid USDC) UNDERLYING-USDC
  (if (is-eq vid USDH) UNDERLYING-USDH
  (if (is-eq vid stSTXbtc) UNDERLYING-STSTXBTC
  UNDERLYING-STX)))))))

;; -- Vault routing: get available liquidity ---------------------------------
;; Returns the actual underlying tokens available in the vault NOW (can be borrowed)
;; This is assets - total-borrowed (what's sitting in the vault)

(define-private (get-vault-available-liquidity (vid uint))
  (if (is-eq vid STX) (contract-call? .vault-stx get-available-assets)
  (if (is-eq vid sBTC) (contract-call? .vault-sbtc get-available-assets)
  (if (is-eq vid stSTX) (contract-call? .vault-ststx get-available-assets)
  (if (is-eq vid USDC) (contract-call? .vault-usdc get-available-assets)
  (if (is-eq vid USDH) (contract-call? .vault-usdh get-available-assets)
  (if (is-eq vid stSTXbtc) (contract-call? .vault-ststxbtc get-available-assets)
  u0)))))))

;; -- APY calculation --------------------------------------------------------

;; Supply APY = borrow_rate x utilization x (1 - reserve_fee / BPS)
(define-private (calc-supply-apy (borrow-rate uint) (utilization uint) (reserve-fee uint))
  (let ((util-applied (mul-bps-down borrow-rate utilization))
        (fee-factor (- BPS reserve-fee)))
    (mul-bps-down util-applied fee-factor)))

;; -- Underlying to vault ID mapping -----------------------------------------

(define-private (underlying-to-vault-id (underlying principal))
  (if (is-eq underlying UNDERLYING-STX) (ok STX)
  (if (is-eq underlying UNDERLYING-SBTC) (ok sBTC)
  (if (is-eq underlying UNDERLYING-STSTX) (ok stSTX)
  (if (is-eq underlying UNDERLYING-USDC) (ok USDC)
  (if (is-eq underlying UNDERLYING-USDH) (ok USDH)
  (if (is-eq underlying UNDERLYING-STSTXBTC) (ok stSTXbtc)
  ERR-UNKNOWN-UNDERLYING)))))))

;; -- Build single reserve data ----------------------------------------------

(define-private (build-reserve-data (vid uint))
  (let ((borrow-apy (get-vault-interest-rate vid))
        (utilization (get-vault-utilization vid))
        (fee-reserve (get-vault-fee-reserve vid))
        (supply-apy (calc-supply-apy borrow-apy utilization fee-reserve))
        (total-borrowed (get-vault-debt vid))
        (cap-debt (get-vault-cap-debt vid))
        (available-liquidity (get-vault-available-liquidity vid))
        ;; Cap-aware borrowable: min of liquidity and remaining debt cap
        (remaining-cap (if (> cap-debt total-borrowed) (- cap-debt total-borrowed) u0))
        (available-to-borrow (min available-liquidity remaining-cap)))
    {
      vault-id: vid,
      underlying: (get-vault-underlying vid),
      total-assets: (get-vault-total-assets vid),
      total-borrowed: total-borrowed,
      total-supply: (get-vault-total-supply vid),
      utilization: utilization,
      borrow-index: (get-vault-borrow-index vid),
      liquidity-index: (get-vault-liquidity-index vid),
      cap-supply: (get-vault-cap-supply vid),
      cap-debt: cap-debt,
      fee-reserve: fee-reserve,
      last-update: (get-vault-last-update vid),
      borrow-apy: borrow-apy,
      supply-apy: supply-apy,
      available-liquidity: available-liquidity,
      available-to-borrow: available-to-borrow
    }))

;; -- Build single interest curve data ---------------------------------------

(define-private (build-interest-curve (vid uint))
  {
    vault-id: vid,
    underlying: (get-vault-underlying vid),
    points-util: (get-vault-points-util vid),
    points-rate: (get-vault-points-rate vid),
    current-rate: (get-vault-interest-rate vid)
  })

;; -- Asset iteration --------------------------------------------------------

(define-private (iter-build-asset (id uint) (acc { max-id: uint, result: (list 128 {
    id: uint,
    addr: principal,
    decimals: uint,
    collateral: bool,
    debt: bool,
    oracle-type: (buff 1),
    oracle-ident: (buff 32),
    oracle-callcode: (optional (buff 1)),
    max-staleness: uint
  }) }))
  (let ((max-id (get max-id acc)))
    (if (>= id max-id)
        acc
        (let ((asset-status (unwrap-panic (contract-call? .assets get-status id)))
              (entry {
                id: id,
                addr: (get addr asset-status),
                decimals: (get decimals asset-status),
                collateral: (get collateral asset-status),
                debt: (get debt asset-status),
                oracle-type: (get type (get oracle asset-status)),
                oracle-ident: (get ident (get oracle asset-status)),
                oracle-callcode: (get callcode (get oracle asset-status)),
                max-staleness: (get max-staleness (get oracle asset-status))
              })
              (new-result (unwrap-panic (as-max-len? (append (get result acc) entry) u128))))
          { max-id: max-id, result: new-result }))))

;; -- Egroup iteration -------------------------------------------------------

(define-private (iter-build-egroup (id uint) (acc { max-id: uint, result: (list 128 {
    id: uint,
    mask: uint,
    borrow-disabled-mask: uint,
    ltv-borrow: uint,
    ltv-liq-partial: uint,
    ltv-liq-full: uint,
    liq-curve-exp: uint,
    liq-penalty-min: uint,
    liq-penalty-max: uint
  }) }))
  (let ((max-id (get max-id acc)))
    (if (>= id max-id)
        acc
        (let ((egroup-data (contract-call? .egroup lookup id))
              (entry {
                id: id,
                mask: (get MASK egroup-data),
                borrow-disabled-mask: (get BORROW-DISABLED-MASK egroup-data),
                ltv-borrow: (buff-to-uint-be (get LTV-BORROW egroup-data)),
                ltv-liq-partial: (buff-to-uint-be (get LTV-LIQ-PARTIAL egroup-data)),
                ltv-liq-full: (buff-to-uint-be (get LTV-LIQ-FULL egroup-data)),
                liq-curve-exp: (buff-to-uint-be (get LIQ-CURVE-EXP egroup-data)),
                liq-penalty-min: (buff-to-uint-be (get LIQ-PENALTY-MIN egroup-data)),
                liq-penalty-max: (buff-to-uint-be (get LIQ-PENALTY-MAX egroup-data))
              })
              (new-result (unwrap-panic (as-max-len? (append (get result acc) entry) u128))))
          { max-id: max-id, result: new-result }))))

;; ============================================================================
;; READ-ONLY FUNCTIONS
;; ============================================================================

;; ---------------------------------------------------------------------------
;; get-user-position
;; ---------------------------------------------------------------------------
;; Returns complete user position with health data
;; Batches all position data into single response
(define-read-only (get-user-position (account principal))
  (let ((enabled-mask (contract-call? .assets get-bitmap)))
    (match (contract-call? .market-vault get-position account enabled-mask)
      position
        (let ((mask (get mask position))
              (collateral-list (get collateral position))
              (debt-list (get debt position))
              ;; Map each debt entry to enriched format with actual balances
              (enriched-debts (map build-debt-entry debt-list))
              ;; Calculate notional values
              (coll-usd (fold sum-collateral-usd collateral-list u0))
              (debt-usd (fold sum-debt-usd debt-list u0))
              ;; Calculate LTV
              (current-ltv (if (is-eq coll-usd u0)
                              (if (is-eq debt-usd u0) u0 BPS)
                              (mul-div-down debt-usd BPS coll-usd)))
              ;; Get egroup for health calculation
              (egroup-result (contract-call? .egroup resolve mask)))
          (match egroup-result
            egroup
              (let ((ltv-borrow (buff-to-uint-be (get LTV-BORROW egroup)))
                    (ltv-liq-partial (buff-to-uint-be (get LTV-LIQ-PARTIAL egroup)))
                    ;; Health factor: (coll x ltv-borrow) / debt, scaled to BPS
                    ;; >10000 = healthy, <10000 = unhealthy
                    (health-factor (if (is-eq debt-usd u0)
                                      u100000000  ;; Infinite health if no debt
                                      (mul-div-down (mul-bps-down coll-usd ltv-borrow) BPS debt-usd))))
                (ok {
                  account: account,
                  mask: mask,
                  collateral: collateral-list,
                  debt: enriched-debts,
                  total-collateral-usd: coll-usd,
                  total-debt-usd: debt-usd,
                  current-ltv: current-ltv,
                  ltv-borrow: ltv-borrow,
                  ltv-liq-partial: ltv-liq-partial,
                  health-factor: health-factor,
                  is-liquidatable: (>= current-ltv ltv-liq-partial)
                }))
            egroup-err (ok {
              account: account,
              mask: mask,
              collateral: collateral-list,
              debt: enriched-debts,
              total-collateral-usd: coll-usd,
              total-debt-usd: debt-usd,
              current-ltv: current-ltv,
              ltv-borrow: u0,
              ltv-liq-partial: u0,
              health-factor: u100000000,
              is-liquidatable: false
            })))
      err-code ERR-NO-POSITION)))

;; Helper: Build enriched debt entry with actual balance
(define-private (build-debt-entry (debt-entry { aid: uint, scaled: uint }))
  (let ((aid (get aid debt-entry))
        (scaled (get scaled debt-entry))
        (asset-status (unwrap-panic (contract-call? .assets get-status aid)))
        (borrow-index (get-vault-borrow-index aid))
        ;; Calculate actual debt with compound interest
        (actual (mul-div-down scaled borrow-index INDEX-PRECISION))
        ;; Interest accrued = actual - scaled (simplified, assumes initial index ~= PRECISION)
        (interest (if (> actual scaled) (- actual scaled) u0)))
    {
      asset-id: aid,
      asset-addr: (get addr asset-status),
      underlying: (get addr asset-status),
      scaled-debt: scaled,
      borrow-index: borrow-index,
      actual-debt: actual,
      interest-accrued: interest
    }))

;; Helper: Sum collateral USD values
(define-private (sum-collateral-usd (entry { aid: uint, amount: uint }) (acc uint))
  (let ((aid (get aid entry))
        (amount (get amount entry))
        (asset-data (unwrap-panic (contract-call? .assets get-status aid)))
        (decimals (get decimals asset-data))
        (price (get-asset-price aid)))
    (+ acc (/ (* amount price) (pow u10 decimals)))))

;; Helper: Find specific asset amount in collateral list
(define-private (find-collateral-amount-iter
  (entry { aid: uint, amount: uint })
  (acc { target: uint, amount: uint }))
  (if (is-eq (get aid entry) (get target acc))
      { target: (get target acc), amount: (get amount entry) }
      acc))

;; Helper: Sum debt USD values
(define-private (sum-debt-usd (entry { aid: uint, scaled: uint }) (acc uint))
  (let ((aid (get aid entry))
        (scaled (get scaled entry))
        (asset-data (unwrap-panic (contract-call? .assets get-status aid)))
        (decimals (get decimals asset-data))
        (borrow-index (get-vault-borrow-index aid))
        (actual (mul-div-down scaled borrow-index INDEX-PRECISION))
        (price (get-asset-price aid)))
    (+ acc (/ (* actual price) (pow u10 decimals)))))

;; Helper: Get asset price from oracles
;; Returns price in 8 decimal precision (e.g., $1.00 = 100000000)
;; Handles all asset types: underlying, stSTX (with ratio), and zTokens (with liquidity index)
(define-private (get-asset-price (aid uint))
  ;; STX - Pyth oracle
  (if (is-eq aid STX) (default-to u0 (get-pyth-price PYTH-STX))
  ;; sBTC - Pyth oracle (BTC price)
  (if (is-eq aid sBTC) (default-to u0 (get-pyth-price PYTH-BTC))
  ;; stSTX - STX price x stSTX ratio
  (if (is-eq aid stSTX) 
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX)))
            (ratio (unwrap-panic (get-ststx-ratio))))
        (mul-div-down stx-price ratio STSTX-RATIO-DECIMALS))
  ;; USDC - Pyth oracle
  (if (is-eq aid USDC) (default-to u0 (get-pyth-price PYTH-USDC))
  ;; USDH - DIA oracle
  (if (is-eq aid USDH) (default-to u0 (get-dia-price DIA-USDH))
  ;; zSTX - STX price x liquidity index
  (if (is-eq aid zSTX)
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX)))
            (lindex (get-vault-liquidity-index STX)))
        (mul-div-down stx-price lindex INDEX-PRECISION))
  ;; zsBTC - BTC price x liquidity index
  (if (is-eq aid zsBTC)
      (let ((btc-price (default-to u0 (get-pyth-price PYTH-BTC)))
            (lindex (get-vault-liquidity-index sBTC)))
        (mul-div-down btc-price lindex INDEX-PRECISION))
  ;; zstSTX - stSTX price x liquidity index (stSTX already includes ratio)
  (if (is-eq aid zstSTX)
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX)))
            (ratio (unwrap-panic (get-ststx-ratio)))
            (ststx-price (mul-div-down stx-price ratio STSTX-RATIO-DECIMALS))
            (lindex (get-vault-liquidity-index stSTX)))
        (mul-div-down ststx-price lindex INDEX-PRECISION))
  ;; zUSDC - USDC price x liquidity index
  (if (is-eq aid zUSDC)
      (let ((usdc-price (default-to u0 (get-pyth-price PYTH-USDC)))
            (lindex (get-vault-liquidity-index USDC)))
        (mul-div-down usdc-price lindex INDEX-PRECISION))
  ;; zUSDH - USDH price x liquidity index
  (if (is-eq aid zUSDH)
      (let ((usdh-price (default-to u0 (get-dia-price DIA-USDH)))
            (lindex (get-vault-liquidity-index USDH)))
        (mul-div-down usdh-price lindex INDEX-PRECISION))
  ;; stSTXbtc - BTC price (liquid staked STX with BTC yield)
  (if (is-eq aid stSTXbtc) (default-to u0 (get-pyth-price PYTH-STX))
  ;; zstSTXbtc - stSTXbtc price x liquidity index
  (if (is-eq aid zstSTXbtc)
      (let ((btc-price (default-to u0 (get-pyth-price PYTH-STX)))
            (lindex (get-vault-liquidity-index stSTXbtc)))
        (mul-div-down btc-price lindex INDEX-PRECISION))
  ;; Unknown asset - return 0
  u0)))))))))))))

;; ---------------------------------------------------------------------------
;; get-all-assets
;; ---------------------------------------------------------------------------
;; Returns all registered assets with their status (dynamic - scales to nonce)
(define-read-only (get-all-assets)
  (let ((nonce (unwrap-panic (contract-call? .assets get-nonce)))
        (init { max-id: nonce, result: (list) })
        (result (fold iter-build-asset ITER-UINT-128 init)))
    (ok {
      count: nonce,
      assets: (get result result)
    })))

;; ---------------------------------------------------------------------------
;; get-all-reserves
;; ---------------------------------------------------------------------------
;; Returns all vault reserve data including APYs
(define-read-only (get-all-reserves)
  (ok {
    stx: (build-reserve-data STX),
    sbtc: (build-reserve-data sBTC),
    ststx: (build-reserve-data stSTX),
    usdc: (build-reserve-data USDC),
    usdh: (build-reserve-data USDH),
    ststxbtc: (build-reserve-data stSTXbtc)
  }))

;; ---------------------------------------------------------------------------
;; get-reserve
;; ---------------------------------------------------------------------------
;; Returns single vault reserve data
(define-read-only (get-reserve (vid uint))
  (if (> vid stSTXbtc)
      ERR-UNKNOWN-VAULT
      (ok (build-reserve-data vid))))

;; ---------------------------------------------------------------------------
;; get-all-egroups
;; ---------------------------------------------------------------------------
;; Returns all efficiency groups
(define-read-only (get-all-egroups)
  (let ((nonce (unwrap-panic (contract-call? .egroup get-nonce)))
        (init { max-id: nonce, result: (list) })
        (result (fold iter-build-egroup ITER-UINT-128 init)))
    (ok {
      count: nonce,
      egroups: (get result result)
    })))

;; ---------------------------------------------------------------------------
;; get-egroup
;; ---------------------------------------------------------------------------
;; Returns single egroup by ID
(define-read-only (get-egroup (id uint))
  (let ((egroup-data (contract-call? .egroup lookup id)))
    (ok {
      id: id,
      mask: (get MASK egroup-data),
      borrow-disabled-mask: (get BORROW-DISABLED-MASK egroup-data),
      ltv-borrow: (buff-to-uint-be (get LTV-BORROW egroup-data)),
      ltv-liq-partial: (buff-to-uint-be (get LTV-LIQ-PARTIAL egroup-data)),
      ltv-liq-full: (buff-to-uint-be (get LTV-LIQ-FULL egroup-data)),
      liq-curve-exp: (buff-to-uint-be (get LIQ-CURVE-EXP egroup-data)),
      liq-penalty-min: (buff-to-uint-be (get LIQ-PENALTY-MIN egroup-data)),
      liq-penalty-max: (buff-to-uint-be (get LIQ-PENALTY-MAX egroup-data))
    })))

;; ---------------------------------------------------------------------------
;; get-all-interest-curves
;; ---------------------------------------------------------------------------
;; Returns interest rate curves for all vaults
(define-read-only (get-all-interest-curves)
  (ok {
    stx: (build-interest-curve STX),
    sbtc: (build-interest-curve sBTC),
    ststx: (build-interest-curve stSTX),
    usdc: (build-interest-curve USDC),
    usdh: (build-interest-curve USDH),
    ststxbtc: (build-interest-curve stSTXbtc)
  }))

;; ---------------------------------------------------------------------------
;; get-interest-curve
;; ---------------------------------------------------------------------------
;; Returns interest rate curve for single vault
(define-read-only (get-interest-curve (vid uint))
  (if (> vid stSTXbtc)
      ERR-UNKNOWN-VAULT
      (ok (build-interest-curve vid))))

;; ---------------------------------------------------------------------------
;; get-asset-apys
;; ---------------------------------------------------------------------------
;; Maps underlying asset to vault and returns APY data
;; Convenience function for quick APY lookup
(define-read-only (get-asset-apys (underlying principal))
  (match (underlying-to-vault-id underlying)
    vid
      (let ((borrow-apy (get-vault-interest-rate vid))
            (utilization (get-vault-utilization vid))
            (fee-reserve (get-vault-fee-reserve vid))
            (supply-apy (calc-supply-apy borrow-apy utilization fee-reserve)))
        (ok {
          underlying: underlying,
          vault-id: vid,
          borrow-apy: borrow-apy,
          supply-apy: supply-apy,
          utilization: utilization,
          fee-reserve: fee-reserve
        }))
    err-val (err err-val)))

;; ---------------------------------------------------------------------------
;; get-protocol-summary
;; ---------------------------------------------------------------------------
;; Returns high-level protocol summary
(define-read-only (get-protocol-summary)
  (let ((stx-data (build-reserve-data STX))
        (sbtc-data (build-reserve-data sBTC))
        (ststx-data (build-reserve-data stSTX))
        (usdc-data (build-reserve-data USDC))
        (usdh-data (build-reserve-data USDH))
        (ststxbtc-data (build-reserve-data stSTXbtc)))
    (ok {
      total-supplied: (+ (+ (+ (+ (+
        (get total-assets stx-data)
        (get total-assets sbtc-data))
        (get total-assets ststx-data))
        (get total-assets usdc-data))
        (get total-assets usdh-data))
        (get total-assets ststxbtc-data)),
      total-borrowed: (+ (+ (+ (+ (+
        (get total-borrowed stx-data)
        (get total-borrowed sbtc-data))
        (get total-borrowed ststx-data))
        (get total-borrowed usdc-data))
        (get total-borrowed usdh-data))
        (get total-borrowed ststxbtc-data)),
      asset-count: (unwrap-panic (contract-call? .assets get-nonce)),
      egroup-count: (unwrap-panic (contract-call? .egroup get-nonce))
    })))

;; ---------------------------------------------------------------------------
;; get-supplies-user
;; ---------------------------------------------------------------------------
;; Returns all supplies for a user:
;; - Vault underlying balances (converted from zTokens - what user can redeem)
;; - Vault share balances (zTokens held in wallet - for reference)
;; - Market-vault collateral (any collateral-enabled tokens deposited)
(define-read-only (get-supplies-user (account principal))
  (let ((enabled-mask (contract-call? .assets get-bitmap))
        ;; Get underlying balances (convert zTokens to underlying - USEFUL)
        (stx-underlying (get-vault-underlying-balance STX account))
        (sbtc-underlying (get-vault-underlying-balance sBTC account))
        (ststx-underlying (get-vault-underlying-balance stSTX account))
        (usdc-underlying (get-vault-underlying-balance USDC account))
        (usdh-underlying (get-vault-underlying-balance USDH account))
        (ststxbtc-underlying (get-vault-underlying-balance stSTXbtc account))
        ;; Also get share balances for reference
        (vault-stx-shares (unwrap-panic (contract-call? .vault-stx get-balance account)))
        (vault-sbtc-shares (unwrap-panic (contract-call? .vault-sbtc get-balance account)))
        (vault-ststx-shares (unwrap-panic (contract-call? .vault-ststx get-balance account)))
        (vault-usdc-shares (unwrap-panic (contract-call? .vault-usdc get-balance account)))
        (vault-usdh-shares (unwrap-panic (contract-call? .vault-usdh get-balance account)))
        (vault-ststxbtc-shares (unwrap-panic (contract-call? .vault-ststxbtc get-balance account))))
    ;; Try to get market-vault position (may not exist)
    (match (contract-call? .market-vault get-position account enabled-mask)
      position
        (ok {
          account: account,
          ;; Primary data: Underlying token values (what user can actually redeem)
          vault-underlying: {
            stx: stx-underlying,
            sbtc: sbtc-underlying,
            ststx: ststx-underlying,
            usdc: usdc-underlying,
            usdh: usdh-underlying,
            ststxbtc: ststxbtc-underlying
          },
          ;; Reference data: zToken share balances
          vault-shares: {
            stx: vault-stx-shares,
            sbtc: vault-sbtc-shares,
            ststx: vault-ststx-shares,
            usdc: vault-usdc-shares,
            usdh: vault-usdh-shares,
            ststxbtc: vault-ststxbtc-shares
          },
          ;; Market-vault collateral (any collateral-enabled tokens)
          market-collateral: (get collateral position)
        })
      err-code
        ;; No market-vault position exists - return vault data only
        (ok {
          account: account,
          vault-underlying: {
            stx: stx-underlying,
            sbtc: sbtc-underlying,
            ststx: ststx-underlying,
            usdc: usdc-underlying,
            usdh: usdh-underlying,
            ststxbtc: ststxbtc-underlying
          },
          vault-shares: {
            stx: vault-stx-shares,
            sbtc: vault-sbtc-shares,
            ststx: vault-ststx-shares,
            usdc: vault-usdc-shares,
            usdh: vault-usdh-shares,
            ststxbtc: vault-ststxbtc-shares
          },
          market-collateral: (list)
        }))))

;; ---------------------------------------------------------------------------
;; get-user-borrows
;; ---------------------------------------------------------------------------
;; Returns all borrows for a user with detailed debt information:
;; - Scaled debt (principal stored when borrowed)
;; - Current borrow index (includes compound interest growth)
;; - Actual debt (scaled x index - what user actually owes)
;; - Interest accrued (compound interest accumulated)
(define-read-only (get-user-borrows (account principal))
  (let ((enabled-mask (contract-call? .assets get-bitmap)))
    (match (contract-call? .market-vault get-position account enabled-mask)
      position
        (let ((debt-list (get debt position))
              ;; Map each debt entry to enriched format with actual balances
              (enriched-debts (map build-debt-entry debt-list)))
          (ok {
            account: account,
            borrows: enriched-debts
          }))
      err-code
        ;; No position exists
        (ok {
          account: account,
          borrows: (list)
        }))))

;; ---------------------------------------------------------------------------
;; get-all-vault-ratios
;; ---------------------------------------------------------------------------
;; Returns share-to-asset conversion ratios for all vaults
;; Each ratio shows how much underlying 1 full zToken share is worth
;; Accounts for different decimal precision across vaults:
;; - sBTC uses 8 decimals (Bitcoin standard)
;; - All others use 6 decimals
(define-read-only (get-all-vault-ratios)
  (ok {
    stx: {
      vault-id: STX,
      shares-to-assets: (unwrap-panic (contract-call? .vault-stx convert-to-assets u1000000)),
      underlying: UNDERLYING-STX
    },
    sbtc: {
      vault-id: sBTC,
      shares-to-assets: (unwrap-panic (contract-call? .vault-sbtc convert-to-assets u100000000)),
      underlying: UNDERLYING-SBTC
    },
    ststx: {
      vault-id: stSTX,
      shares-to-assets: (unwrap-panic (contract-call? .vault-ststx convert-to-assets u1000000)),
      underlying: UNDERLYING-STSTX
    },
    usdc: {
      vault-id: USDC,
      shares-to-assets: (unwrap-panic (contract-call? .vault-usdc convert-to-assets u1000000)),
      underlying: UNDERLYING-USDC
    },
    usdh: {
      vault-id: USDH,
      shares-to-assets: (unwrap-panic (contract-call? .vault-usdh convert-to-assets u100000000)),
      underlying: UNDERLYING-USDH
    },
    ststxbtc: {
      vault-id: stSTXbtc,
      shares-to-assets: (unwrap-panic (contract-call? .vault-ststxbtc convert-to-assets u1000000)),
      underlying: UNDERLYING-STSTXBTC
    }
  }))

;; ---------------------------------------------------------------------------
;; get-market-vault-balances
;; ---------------------------------------------------------------------------
;; Returns all fungible token balances held by the market-vault contract
;; Includes both underlying tokens and zToken vault shares
(define-read-only (get-market-vault-balances)
  (ok {
    ;; Underlying tokens held by market-vault
    underlying: {
      wstx: (unwrap-panic (contract-call? .wstx get-balance .market-vault)),
      ;; @mainnet: sbtc: (unwrap-panic (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token get-balance .market-vault)),
      sbtc: (unwrap-panic (contract-call? .sbtc get-balance .market-vault)),
      ;; @mainnet: ststx: (unwrap-panic (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token get-balance .market-vault)),
      ststx: (unwrap-panic (contract-call? .ststx get-balance .market-vault)),
      ;; @mainnet: usdc: (unwrap-panic (contract-call? 'SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx get-balance .market-vault)),
      usdc: (unwrap-panic (contract-call? .usdc get-balance .market-vault)),
      ;; @mainnet: usdh: (unwrap-panic (contract-call? 'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1 get-balance .market-vault)),
      usdh: (unwrap-panic (contract-call? .usdh get-balance .market-vault)),
      ;; @mainnet: ststxbtc: (unwrap-panic (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststxbtc-token-v2 get-balance .market-vault))
      ststxbtc: (unwrap-panic (contract-call? .ststxbtc get-balance .market-vault))
    },
    ;; ZToken vault shares held by market-vault
    ;; These are user collateral tracked in market-vault's position maps
    ztokens: {
      vault-stx: (unwrap-panic (contract-call? .vault-stx get-balance .market-vault)),
      vault-sbtc: (unwrap-panic (contract-call? .vault-sbtc get-balance .market-vault)),
      vault-ststx: (unwrap-panic (contract-call? .vault-ststx get-balance .market-vault)),
      vault-usdc: (unwrap-panic (contract-call? .vault-usdc get-balance .market-vault)),
      vault-usdh: (unwrap-panic (contract-call? .vault-usdh get-balance .market-vault)),
      vault-ststxbtc: (unwrap-panic (contract-call? .vault-ststxbtc get-balance .market-vault))
    }
  }))

;; ---------------------------------------------------------------------------
;; get-market-vault-balances-user
;; ---------------------------------------------------------------------------
;; Returns user's supply balances across vaults and market-vault
(define-read-only (get-market-vault-balances-user (account principal))
  (let ((enabled-mask (contract-call? .assets get-bitmap))
        ;; Vault balances (zTokens -> underlying amounts)
        (stx-vault (get-vault-underlying-balance STX account))
        (sbtc-vault (get-vault-underlying-balance sBTC account))
        (ststx-vault (get-vault-underlying-balance stSTX account))
        (usdc-vault (get-vault-underlying-balance USDC account))
        (usdh-vault (get-vault-underlying-balance USDH account))
        (ststxbtc-vault (get-vault-underlying-balance stSTXbtc account)))
    ;; Get market-vault collateral
    (match (contract-call? .market-vault get-position account enabled-mask)
      position
        (ok {
          vault-balances: {
            stx: stx-vault,
            sbtc: sbtc-vault,
            ststx: ststx-vault,
            usdc: usdc-vault,
            usdh: usdh-vault,
            ststxbtc: ststxbtc-vault
          },
          market-vault-collateral: (get collateral position)
        })
      err-code
        (ok {
          vault-balances: {
            stx: stx-vault,
            sbtc: sbtc-vault,
            ststx: ststx-vault,
            usdc: usdc-vault,
            usdh: usdh-vault,
            ststxbtc: ststxbtc-vault
          },
          market-vault-collateral: (list)
        }))))

;; ---------------------------------------------------------------------------
;; get-user-sbtc-balances
;; ---------------------------------------------------------------------------
;; Returns user's sBTC holdings across vault and market-vault
(define-read-only (get-user-sbtc-balances (account principal))
  (let (
    (vault-shares (unwrap-panic (contract-call? .vault-sbtc get-balance account)))
    (vault-underlying (unwrap-panic (contract-call? .vault-sbtc convert-to-assets vault-shares)))
    
    (market-sbtc
      (match (contract-call? .market-vault get-position account u4)  ;; mask = 2^2 = 4 (sBTC collateral bit)
        position
          (get amount (fold find-collateral-amount-iter 
                           (get collateral position) 
                           {target: sBTC, amount: u0}))
        err-no-position u0))
    
    (total (+ vault-underlying market-sbtc)))
    
    (ok {
      vault-underlying: vault-underlying,
      market-collateral: market-sbtc,
      total: total
    })))
