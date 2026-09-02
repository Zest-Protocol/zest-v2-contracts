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
(define-constant stBTC u12)
(define-constant zstBTC u13)

(define-constant BPS u10000)
(define-constant INDEX-PRECISION u1000000000000)

(define-constant VAULT-IDS (list u0 u1 u2 u3 u4 u5))
(define-constant ITER-UINT-128 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63 u64 u65 u66 u67 u68 u69 u70 u71 u72 u73 u74 u75 u76 u77 u78 u79 u80 u81 u82 u83 u84 u85 u86 u87 u88 u89 u90 u91 u92 u93 u94 u95 u96 u97 u98 u99 u100 u101 u102 u103 u104 u105 u106 u107 u108 u109 u110 u111 u112 u113 u114 u115 u116 u117 u118 u119 u120 u121 u122 u123 u124 u125 u126 u127))

(define-constant UNDERLYING-STX .wstx)
(define-constant UNDERLYING-SBTC 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token)
(define-constant UNDERLYING-STSTX 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token)
(define-constant UNDERLYING-USDC 'SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx)
(define-constant UNDERLYING-USDH 'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1)
(define-constant UNDERLYING-STSTXBTC 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststxbtc-token-v2)
(define-constant UNDERLYING-STBTC 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.stbtc-token)

(define-constant PYTH-STX 0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17)

(define-constant PYTH-BTC 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43)

(define-constant PYTH-USDC 0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a)

(define-constant DIA-USDH "USDh/USD")

(define-constant STSTX-RATIO-DECIMALS u1000000)
(define-constant STBTC-RATIO-DECIMALS u100000000)

(define-constant ERR-UNKNOWN-VAULT (err u900001))
(define-constant ERR-UNKNOWN-UNDERLYING (err u900002))
(define-constant ERR-NO-POSITION (err u900003))
(define-constant ERR-ORACLE-LAZER (err u900004))

(define-private (mul-div-down (x uint) (y uint) (z uint))
  (/ (* x y) z))

(define-private (mul-bps-down (x uint) (y uint))
  (/ (* x y) BPS))

(define-private (min (a uint) (b uint))
  (if (< a b) a b))

(define-private (normalize-pyth (price int) (expo int))
  (let ((adj (+ expo 8)))
    (if (is-eq adj 0)
        (to-uint price)
        (if (> adj 0)
            (to-uint (* price (pow 10 adj)))
            (to-uint (/ price (pow 10 (- adj))))))))

(define-private (find-compact-feed-iter
  (feed { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  (acc { target: uint, result: (optional { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint }) }))
  (if (is-some (get result acc))
      acc
      (if (is-eq (get feed-id feed) (get target acc))
          (merge acc { result: (some feed) })
          acc)))

(define-private (find-compact-feed
  (feed-id uint)
  (feeds (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })))
  (get result (fold find-compact-feed-iter feeds { target: feed-id, result: none })))

(define-private (collect-lazer-feed
  (feed {
    feed-id: uint,
    price: (optional int),
    exponent: (optional int),
    publisher-count: (optional uint),
    confidence: (optional uint),
    best-bid: (optional int),
    best-ask: (optional int),
    funding-rate: (optional int),
    funding-timestamp: (optional uint),
    funding-rate-interval: (optional uint),
    market-session: (optional uint),
    ema-price: (optional int),
    ema-confidence: (optional uint),
    feed-update-timestamp: (optional uint) })
  (acc (response {
    envelope-timestamp: uint,
    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  } uint)))
  (let ((state (try! acc))
        (feed-id (get feed-id feed)))
    (if (or (is-eq feed-id u1) (is-eq feed-id u7) (is-eq feed-id u45))
        (let ((price (unwrap! (get price feed) ERR-ORACLE-LAZER))
              (exponent (unwrap! (get exponent feed) ERR-ORACLE-LAZER))
              (confidence (unwrap! (get confidence feed) ERR-ORACLE-LAZER))
              (publisher-count (unwrap! (get publisher-count feed) ERR-ORACLE-LAZER))
              (timestamp (unwrap! (get feed-update-timestamp feed) ERR-ORACLE-LAZER)))
          (asserts! (>= publisher-count u3) ERR-ORACLE-LAZER)
          (asserts! (<= timestamp (get envelope-timestamp state)) ERR-ORACLE-LAZER)
          (asserts! (is-none (find-compact-feed feed-id (get feeds state))) ERR-ORACLE-LAZER)
          (ok (merge state {
            feeds: (unwrap! (as-max-len? (append (get feeds state) {
              feed-id: feed-id,
              price: price,
              exponent: exponent,
              confidence: confidence,
              timestamp: timestamp
            }) u3) ERR-ORACLE-LAZER)
          })))
        (ok state))))

(define-private (signer-trusted-iter
  (entry { pubkey: (buff 33), expires-at: uint })
  (acc { signer: (buff 33), ok: bool }))
  (if (get ok acc)
      acc
      (if (and (is-eq (get pubkey entry) (get signer acc))
               (> (get expires-at entry) stacks-block-time))
          (merge acc { ok: true })
          acc)))

(define-private (is-signer-trusted (signer (buff 33)))
  (get ok (fold signer-trusted-iter
    (contract-call? .pyth-lazer-oracle get-trusted-signers)
    { signer: signer, ok: false })))

(define-private (load-ctx (price-feeds (optional (buff 8192))))
  (match price-feeds
    update
      (let ((recovered (unwrap! (contract-call? .pyth-lazer-decoder-v1 recover-signer update) ERR-ORACLE-LAZER)))
        (asserts! (is-signer-trusted (get signer recovered)) ERR-ORACLE-LAZER)
        (let ((decoded (unwrap! (contract-call? .pyth-lazer-decoder-v1 decode-lazer-payload (get payload recovered)) ERR-ORACLE-LAZER))
              (collected (try! (fold collect-lazer-feed
                (get price-feeds decoded)
                (ok { envelope-timestamp: (get timestamp decoded), feeds: (list) })))))
          (ok { feeds: (get feeds collected) })))
    (ok { feeds: (list) })))

(define-private (get-pyth-price (feed-id (buff 32)) (ctx { feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint }) }))
  (let ((lazer-id (if (is-eq feed-id PYTH-BTC) u1
                  (if (is-eq feed-id PYTH-USDC) u7
                  (if (is-eq feed-id PYTH-STX) u45
                  u0)))))
    (if (is-eq lazer-id u0)
        none
        (match (find-compact-feed lazer-id (get feeds ctx))
          f (some (normalize-pyth (get price f) (get exponent f)))
          none))))

(define-private (get-dia-price (key (string-ascii 32)))
  (some (get value (unwrap-panic (contract-call? 'SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle get-value key)))))

(define-private (get-ststx-ratio)
  (ok (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.data-stx-v2 get-stx-per-ststx)))

(define-private (get-stbtc-ratio)
  (ok (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.data-stbtc-v1 get-sbtc-per-stbtc)))

(define-private (get-vault-interest-rate (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-interest-rate))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-interest-rate))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-interest-rate))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-interest-rate))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-interest-rate))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-interest-rate))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-interest-rate))
  u0))))))))

(define-private (get-vault-utilization (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-utilization))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-utilization))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-utilization))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-utilization))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-utilization))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-utilization))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-utilization))
  u0))))))))

(define-private (get-vault-fee-reserve (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-fee-reserve))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-fee-reserve))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-fee-reserve))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-fee-reserve))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-fee-reserve))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-fee-reserve))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-fee-reserve))
  u0))))))))

(define-private (get-vault-total-assets (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-total-assets))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-total-assets))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-total-assets))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-total-assets))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-total-assets))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-total-assets))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-total-assets))
  u0))))))))

(define-private (get-vault-debt (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-debt))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-debt))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-debt))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-debt))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-debt))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-debt))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-debt))
  u0))))))))

(define-private (get-vault-total-supply (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-total-supply))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-total-supply))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-total-supply))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-total-supply))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-total-supply))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-total-supply))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-total-supply))
  u0))))))))

(define-private (get-vault-borrow-index (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-index))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-index))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-index))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-index))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-index))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-index))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-index))
  INDEX-PRECISION))))))))

(define-private (get-vault-liquidity-index (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-liquidity-index))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-liquidity-index))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-liquidity-index))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-liquidity-index))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-liquidity-index))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-liquidity-index))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-liquidity-index))
  INDEX-PRECISION))))))))

(define-private (get-vault-cap-supply (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-cap-supply))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-cap-supply))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-cap-supply))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-cap-supply))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-cap-supply))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-cap-supply))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-cap-supply))
  u0))))))))

(define-private (get-vault-cap-debt (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-cap-debt))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-cap-debt))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-cap-debt))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-cap-debt))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-cap-debt))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-cap-debt))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-cap-debt))
  u0))))))))

(define-private (get-vault-last-update (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-last-update))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-last-update))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-last-update))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-last-update))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-last-update))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-last-update))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-last-update))
  u0))))))))

(define-private (get-vault-points-util (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-points-util))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-points-util))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-points-util))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-points-util))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-points-util))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-points-util))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-points-util))
  (list u0 u0 u0 u0 u0 u0 u0 u0)))))))))

(define-private (get-vault-points-rate (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .v0-vault-stx get-points-rate))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .v0-vault-sbtc get-points-rate))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .v0-vault-ststx get-points-rate))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .v0-vault-usdc get-points-rate))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .v0-vault-usdh get-points-rate))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .v0-vault-ststxbtc get-points-rate))
  (if (is-eq vid stBTC) (unwrap-panic (contract-call? .v0-vault-stbtc get-points-rate))
  (list u0 u0 u0 u0 u0 u0 u0 u0)))))))))

(define-private (get-vault-underlying-balance (vid uint) (account principal))
  (if (is-eq vid STX)
      (let ((shares (unwrap-panic (contract-call? .v0-vault-stx get-balance account))))
        (unwrap-panic (contract-call? .v0-vault-stx convert-to-assets shares)))
  (if (is-eq vid sBTC)
      (let ((shares (unwrap-panic (contract-call? .v0-vault-sbtc get-balance account))))
        (unwrap-panic (contract-call? .v0-vault-sbtc convert-to-assets shares)))
  (if (is-eq vid stSTX)
      (let ((shares (unwrap-panic (contract-call? .v0-vault-ststx get-balance account))))
        (unwrap-panic (contract-call? .v0-vault-ststx convert-to-assets shares)))
  (if (is-eq vid USDC)
      (let ((shares (unwrap-panic (contract-call? .v0-vault-usdc get-balance account))))
        (unwrap-panic (contract-call? .v0-vault-usdc convert-to-assets shares)))
  (if (is-eq vid USDH)
      (let ((shares (unwrap-panic (contract-call? .v0-vault-usdh get-balance account))))
        (unwrap-panic (contract-call? .v0-vault-usdh convert-to-assets shares)))
  (if (is-eq vid stSTXbtc)
      (let ((shares (unwrap-panic (contract-call? .v0-vault-ststxbtc get-balance account))))
        (unwrap-panic (contract-call? .v0-vault-ststxbtc convert-to-assets shares)))
  (if (is-eq vid stBTC)
      (let ((shares (unwrap-panic (contract-call? .v0-vault-stbtc get-balance account))))
        (unwrap-panic (contract-call? .v0-vault-stbtc convert-to-assets shares)))
  u0))))))))

(define-private (get-vault-underlying (vid uint))
  (if (is-eq vid STX) UNDERLYING-STX
  (if (is-eq vid sBTC) UNDERLYING-SBTC
  (if (is-eq vid stSTX) UNDERLYING-STSTX
  (if (is-eq vid USDC) UNDERLYING-USDC
  (if (is-eq vid USDH) UNDERLYING-USDH
  (if (is-eq vid stSTXbtc) UNDERLYING-STSTXBTC
  (if (is-eq vid stBTC) UNDERLYING-STBTC
  UNDERLYING-STX))))))))

(define-private (get-vault-available-liquidity (vid uint))
  (if (is-eq vid STX) (contract-call? .v0-vault-stx get-available-assets)
  (if (is-eq vid sBTC) (contract-call? .v0-vault-sbtc get-available-assets)
  (if (is-eq vid stSTX) (contract-call? .v0-vault-ststx get-available-assets)
  (if (is-eq vid USDC) (contract-call? .v0-vault-usdc get-available-assets)
  (if (is-eq vid USDH) (contract-call? .v0-vault-usdh get-available-assets)
  (if (is-eq vid stSTXbtc) (contract-call? .v0-vault-ststxbtc get-available-assets)
  (if (is-eq vid stBTC) (contract-call? .v0-vault-stbtc get-available-assets)
  u0))))))))

(define-private (calc-supply-apy (borrow-rate uint) (utilization uint) (reserve-fee uint))
  (let ((util-applied (mul-bps-down borrow-rate utilization))
        (fee-factor (- BPS reserve-fee)))
    (mul-bps-down util-applied fee-factor)))

(define-private (underlying-to-vault-id (underlying principal))
  (if (is-eq underlying UNDERLYING-STX) (ok STX)
  (if (is-eq underlying UNDERLYING-SBTC) (ok sBTC)
  (if (is-eq underlying UNDERLYING-STSTX) (ok stSTX)
  (if (is-eq underlying UNDERLYING-USDC) (ok USDC)
  (if (is-eq underlying UNDERLYING-USDH) (ok USDH)
  (if (is-eq underlying UNDERLYING-STSTXBTC) (ok stSTXbtc)
  (if (is-eq underlying UNDERLYING-STBTC) (ok stBTC)
  ERR-UNKNOWN-UNDERLYING))))))))

(define-private (build-reserve-data (vid uint))
  (let ((borrow-apy (get-vault-interest-rate vid))
        (utilization (get-vault-utilization vid))
        (fee-reserve (get-vault-fee-reserve vid))
        (supply-apy (calc-supply-apy borrow-apy utilization fee-reserve))
        (total-borrowed (get-vault-debt vid))
        (cap-debt (get-vault-cap-debt vid))
        (available-liquidity (get-vault-available-liquidity vid))

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

(define-private (build-interest-curve (vid uint))
  {
    vault-id: vid,
    underlying: (get-vault-underlying vid),
    points-util: (get-vault-points-util vid),
    points-rate: (get-vault-points-rate vid),
    current-rate: (get-vault-interest-rate vid)
  })

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
        (let ((asset-status (unwrap-panic (contract-call? .v0-assets get-status id)))
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
        (let ((egroup-data (contract-call? .v0-egroup lookup id))
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

(define-read-only (get-user-position (account principal) (price-feeds (optional (buff 8192))))
  (let ((ctx (try! (load-ctx price-feeds)))
        (enabled-mask (contract-call? .v0-assets get-bitmap)))
    (match (contract-call? .v0-market-vault get-position account enabled-mask)
      position
        (let ((mask (get mask position))
              (collateral-list (get collateral position))
              (debt-list (get debt position))
              (enriched-debts (map build-debt-entry debt-list))
              (coll-usd (get usd (fold sum-collateral-usd collateral-list { usd: u0, ctx: ctx })))
              (debt-usd (get usd (fold sum-debt-usd debt-list { usd: u0, ctx: ctx })))

              (current-ltv (if (is-eq coll-usd u0)
                              (if (is-eq debt-usd u0) u0 BPS)
                              (mul-div-down debt-usd BPS coll-usd)))

              (egroup-result (contract-call? .v0-egroup resolve mask)))
          (match egroup-result
            egroup
              (let ((ltv-borrow (buff-to-uint-be (get LTV-BORROW egroup)))
                    (ltv-liq-partial (buff-to-uint-be (get LTV-LIQ-PARTIAL egroup)))

                    (health-factor (if (is-eq debt-usd u0)
                                      u100000000
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

(define-private (build-debt-entry (debt-entry { aid: uint, scaled: uint }))
  (let ((aid (get aid debt-entry))
        (scaled (get scaled debt-entry))
        (asset-status (unwrap-panic (contract-call? .v0-assets get-status aid)))
        (borrow-index (get-vault-borrow-index aid))

        (actual (mul-div-down scaled borrow-index INDEX-PRECISION))

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

(define-private (sum-collateral-usd
  (entry { aid: uint, amount: uint })
  (acc { usd: uint, ctx: { feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint }) } }))
  (let ((aid (get aid entry))
        (amount (get amount entry))
        (asset-data (unwrap-panic (contract-call? .v0-assets get-status aid)))
        (decimals (get decimals asset-data))
        (price (get-asset-price aid (get ctx acc))))
    (merge acc { usd: (+ (get usd acc) (/ (* amount price) (pow u10 decimals))) })))

(define-private (find-collateral-amount-iter
  (entry { aid: uint, amount: uint })
  (acc { target: uint, amount: uint }))
  (if (is-eq (get aid entry) (get target acc))
      { target: (get target acc), amount: (get amount entry) }
      acc))

(define-private (sum-debt-usd
  (entry { aid: uint, scaled: uint })
  (acc { usd: uint, ctx: { feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint }) } }))
  (let ((aid (get aid entry))
        (scaled (get scaled entry))
        (asset-data (unwrap-panic (contract-call? .v0-assets get-status aid)))
        (decimals (get decimals asset-data))
        (borrow-index (get-vault-borrow-index aid))
        (actual (mul-div-down scaled borrow-index INDEX-PRECISION))
        (price (get-asset-price aid (get ctx acc))))
    (merge acc { usd: (+ (get usd acc) (/ (* actual price) (pow u10 decimals))) })))

(define-private (get-asset-price (aid uint) (ctx { feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint }) }))
  (if (is-eq aid STX) (default-to u0 (get-pyth-price PYTH-STX ctx))
  (if (is-eq aid sBTC) (default-to u0 (get-pyth-price PYTH-BTC ctx))
  (if (is-eq aid stSTX)
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX ctx)))
            (ratio (unwrap-panic (get-ststx-ratio))))
        (mul-div-down stx-price ratio STSTX-RATIO-DECIMALS))
  (if (is-eq aid USDC) (default-to u0 (get-pyth-price PYTH-USDC ctx))
  (if (is-eq aid USDH) (default-to u0 (get-dia-price DIA-USDH))
  (if (is-eq aid zSTX)
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX ctx)))
            (lindex (get-vault-liquidity-index STX)))
        (mul-div-down stx-price lindex INDEX-PRECISION))
  (if (is-eq aid zsBTC)
      (let ((btc-price (default-to u0 (get-pyth-price PYTH-BTC ctx)))
            (lindex (get-vault-liquidity-index sBTC)))
        (mul-div-down btc-price lindex INDEX-PRECISION))
  (if (is-eq aid zstSTX)
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX ctx)))
            (ratio (unwrap-panic (get-ststx-ratio)))
            (ststx-price (mul-div-down stx-price ratio STSTX-RATIO-DECIMALS))
            (lindex (get-vault-liquidity-index stSTX)))
        (mul-div-down ststx-price lindex INDEX-PRECISION))
  (if (is-eq aid zUSDC)
      (let ((usdc-price (default-to u0 (get-pyth-price PYTH-USDC ctx)))
            (lindex (get-vault-liquidity-index USDC)))
        (mul-div-down usdc-price lindex INDEX-PRECISION))
  (if (is-eq aid zUSDH)
      (let ((usdh-price (default-to u0 (get-dia-price DIA-USDH)))
            (lindex (get-vault-liquidity-index USDH)))
        (mul-div-down usdh-price lindex INDEX-PRECISION))
  (if (is-eq aid stSTXbtc) (default-to u0 (get-pyth-price PYTH-STX ctx))
  (if (is-eq aid zstSTXbtc)
      (let ((btc-price (default-to u0 (get-pyth-price PYTH-STX ctx)))
            (lindex (get-vault-liquidity-index stSTXbtc)))
        (mul-div-down btc-price lindex INDEX-PRECISION))
  (if (is-eq aid stBTC)
      (let ((btc-price (default-to u0 (get-pyth-price PYTH-BTC ctx)))
            (ratio (unwrap-panic (get-stbtc-ratio))))
        (mul-div-down btc-price ratio STBTC-RATIO-DECIMALS))
  (if (is-eq aid zstBTC)
      (let ((btc-price (default-to u0 (get-pyth-price PYTH-BTC ctx)))
            (ratio (unwrap-panic (get-stbtc-ratio))))
        (mul-div-down btc-price ratio STBTC-RATIO-DECIMALS))
  u0)))))))))))))))

(define-read-only (get-all-assets)
  (let ((nonce (unwrap-panic (contract-call? .v0-assets get-nonce)))
        (init { max-id: nonce, result: (list) })
        (result (fold iter-build-asset ITER-UINT-128 init)))
    (ok {
      count: nonce,
      assets: (get result result)
    })))

(define-read-only (get-all-reserves)
  (ok {
    stx: (build-reserve-data STX),
    sbtc: (build-reserve-data sBTC),
    ststx: (build-reserve-data stSTX),
    usdc: (build-reserve-data USDC),
    usdh: (build-reserve-data USDH),
    ststxbtc: (build-reserve-data stSTXbtc),
    stbtc: (build-reserve-data stBTC)
  }))

(define-read-only (get-reserve (vid uint))
  (if (> vid stBTC)
      ERR-UNKNOWN-VAULT
      (ok (build-reserve-data vid))))

(define-read-only (get-all-egroups)
  (let ((nonce (unwrap-panic (contract-call? .v0-egroup get-nonce)))
        (init { max-id: nonce, result: (list) })
        (result (fold iter-build-egroup ITER-UINT-128 init)))
    (ok {
      count: nonce,
      egroups: (get result result)
    })))

(define-read-only (get-egroup (id uint))
  (let ((egroup-data (contract-call? .v0-egroup lookup id)))
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

(define-read-only (get-all-interest-curves)
  (ok {
    stx: (build-interest-curve STX),
    sbtc: (build-interest-curve sBTC),
    ststx: (build-interest-curve stSTX),
    usdc: (build-interest-curve USDC),
    usdh: (build-interest-curve USDH),
    ststxbtc: (build-interest-curve stSTXbtc),
    stbtc: (build-interest-curve stBTC)
  }))

(define-read-only (get-interest-curve (vid uint))
  (if (> vid stBTC)
      ERR-UNKNOWN-VAULT
      (ok (build-interest-curve vid))))

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

(define-read-only (get-protocol-summary)
  (let ((stx-data (build-reserve-data STX))
        (sbtc-data (build-reserve-data sBTC))
        (ststx-data (build-reserve-data stSTX))
        (usdc-data (build-reserve-data USDC))
        (usdh-data (build-reserve-data USDH))
        (ststxbtc-data (build-reserve-data stSTXbtc))
        (stbtc-data (build-reserve-data stBTC)))
    (ok {
      total-supplied: (+ (+ (+ (+ (+ (+
        (get total-assets stx-data)
        (get total-assets sbtc-data))
        (get total-assets ststx-data))
        (get total-assets usdc-data))
        (get total-assets usdh-data))
        (get total-assets ststxbtc-data))
        (get total-assets stbtc-data)),
      total-borrowed: (+ (+ (+ (+ (+ (+
        (get total-borrowed stx-data)
        (get total-borrowed sbtc-data))
        (get total-borrowed ststx-data))
        (get total-borrowed usdc-data))
        (get total-borrowed usdh-data))
        (get total-borrowed ststxbtc-data))
        (get total-borrowed stbtc-data)),
      asset-count: (unwrap-panic (contract-call? .v0-assets get-nonce)),
      egroup-count: (unwrap-panic (contract-call? .v0-egroup get-nonce))
    })))

(define-read-only (get-supplies-user (account principal))
  (let ((enabled-mask (contract-call? .v0-assets get-bitmap))

        (stx-underlying (get-vault-underlying-balance STX account))
        (sbtc-underlying (get-vault-underlying-balance sBTC account))
        (ststx-underlying (get-vault-underlying-balance stSTX account))
        (usdc-underlying (get-vault-underlying-balance USDC account))
        (usdh-underlying (get-vault-underlying-balance USDH account))
        (ststxbtc-underlying (get-vault-underlying-balance stSTXbtc account))
        (stbtc-underlying (get-vault-underlying-balance stBTC account))

        (vault-stx-shares (unwrap-panic (contract-call? .v0-vault-stx get-balance account)))
        (vault-sbtc-shares (unwrap-panic (contract-call? .v0-vault-sbtc get-balance account)))
        (vault-ststx-shares (unwrap-panic (contract-call? .v0-vault-ststx get-balance account)))
        (vault-usdc-shares (unwrap-panic (contract-call? .v0-vault-usdc get-balance account)))
        (vault-usdh-shares (unwrap-panic (contract-call? .v0-vault-usdh get-balance account)))
        (vault-ststxbtc-shares (unwrap-panic (contract-call? .v0-vault-ststxbtc get-balance account)))
        (vault-stbtc-shares (unwrap-panic (contract-call? .v0-vault-stbtc get-balance account))))

    (match (contract-call? .v0-market-vault get-position account enabled-mask)
      position
        (ok {
          account: account,

          vault-underlying: {
            stx: stx-underlying,
            sbtc: sbtc-underlying,
            ststx: ststx-underlying,
            usdc: usdc-underlying,
            usdh: usdh-underlying,
            ststxbtc: ststxbtc-underlying,
            stbtc: stbtc-underlying
          },

          vault-shares: {
            stx: vault-stx-shares,
            sbtc: vault-sbtc-shares,
            ststx: vault-ststx-shares,
            usdc: vault-usdc-shares,
            usdh: vault-usdh-shares,
            ststxbtc: vault-ststxbtc-shares,
            stbtc: vault-stbtc-shares
          },

          market-collateral: (get collateral position)
        })
      err-code

        (ok {
          account: account,
          vault-underlying: {
            stx: stx-underlying,
            sbtc: sbtc-underlying,
            ststx: ststx-underlying,
            usdc: usdc-underlying,
            usdh: usdh-underlying,
            ststxbtc: ststxbtc-underlying,
            stbtc: stbtc-underlying
          },
          vault-shares: {
            stx: vault-stx-shares,
            sbtc: vault-sbtc-shares,
            ststx: vault-ststx-shares,
            usdc: vault-usdc-shares,
            usdh: vault-usdh-shares,
            ststxbtc: vault-ststxbtc-shares,
            stbtc: vault-stbtc-shares
          },
          market-collateral: (list)
        }))))

(define-read-only (get-user-borrows (account principal))
  (let ((enabled-mask (contract-call? .v0-assets get-bitmap)))
    (match (contract-call? .v0-market-vault get-position account enabled-mask)
      position
        (let ((debt-list (get debt position))

              (enriched-debts (map build-debt-entry debt-list)))
          (ok {
            account: account,
            borrows: enriched-debts
          }))
      err-code

        (ok {
          account: account,
          borrows: (list)
        }))))

(define-read-only (get-all-vault-ratios)
  (ok {
    stx: {
      vault-id: STX,
      shares-to-assets: (unwrap-panic (contract-call? .v0-vault-stx convert-to-assets u1000000)),
      underlying: UNDERLYING-STX
    },
    sbtc: {
      vault-id: sBTC,
      shares-to-assets: (unwrap-panic (contract-call? .v0-vault-sbtc convert-to-assets u100000000)),
      underlying: UNDERLYING-SBTC
    },
    ststx: {
      vault-id: stSTX,
      shares-to-assets: (unwrap-panic (contract-call? .v0-vault-ststx convert-to-assets u1000000)),
      underlying: UNDERLYING-STSTX
    },
    usdc: {
      vault-id: USDC,
      shares-to-assets: (unwrap-panic (contract-call? .v0-vault-usdc convert-to-assets u1000000)),
      underlying: UNDERLYING-USDC
    },
    usdh: {
      vault-id: USDH,
      shares-to-assets: (unwrap-panic (contract-call? .v0-vault-usdh convert-to-assets u100000000)),
      underlying: UNDERLYING-USDH
    },
    ststxbtc: {
      vault-id: stSTXbtc,
      shares-to-assets: (unwrap-panic (contract-call? .v0-vault-ststxbtc convert-to-assets u1000000)),
      underlying: UNDERLYING-STSTXBTC
    },
    stbtc: {
      vault-id: stBTC,
      shares-to-assets: (unwrap-panic (contract-call? .v0-vault-stbtc convert-to-assets u100000000)),
      underlying: UNDERLYING-STBTC
    }
  }))

(define-read-only (get-market-vault-balances)
  (ok {

    underlying: {
      wstx: (unwrap-panic (contract-call? .wstx get-balance .v0-market-vault)),
      sbtc: (unwrap-panic (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token get-balance .v0-market-vault)),
      ststx: (unwrap-panic (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token get-balance .v0-market-vault)),
      usdc: (unwrap-panic (contract-call? 'SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx get-balance .v0-market-vault)),
      usdh: (unwrap-panic (contract-call? 'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1 get-balance .v0-market-vault)),
      ststxbtc: (unwrap-panic (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststxbtc-token-v2 get-balance .v0-market-vault)),
      stbtc: (unwrap-panic (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.stbtc-token get-balance .v0-market-vault))
    },

    ztokens: {
      vault-stx: (unwrap-panic (contract-call? .v0-vault-stx get-balance .v0-market-vault)),
      vault-sbtc: (unwrap-panic (contract-call? .v0-vault-sbtc get-balance .v0-market-vault)),
      vault-ststx: (unwrap-panic (contract-call? .v0-vault-ststx get-balance .v0-market-vault)),
      vault-usdc: (unwrap-panic (contract-call? .v0-vault-usdc get-balance .v0-market-vault)),
      vault-usdh: (unwrap-panic (contract-call? .v0-vault-usdh get-balance .v0-market-vault)),
      vault-ststxbtc: (unwrap-panic (contract-call? .v0-vault-ststxbtc get-balance .v0-market-vault)),
      vault-stbtc: (unwrap-panic (contract-call? .v0-vault-stbtc get-balance .v0-market-vault))
    }
  }))

(define-read-only (get-market-vault-balances-user (account principal))
  (let ((enabled-mask (contract-call? .v0-assets get-bitmap))

        (stx-vault (get-vault-underlying-balance STX account))
        (sbtc-vault (get-vault-underlying-balance sBTC account))
        (ststx-vault (get-vault-underlying-balance stSTX account))
        (usdc-vault (get-vault-underlying-balance USDC account))
        (usdh-vault (get-vault-underlying-balance USDH account))
        (ststxbtc-vault (get-vault-underlying-balance stSTXbtc account))
        (stbtc-vault (get-vault-underlying-balance stBTC account)))

    (match (contract-call? .v0-market-vault get-position account enabled-mask)
      position
        (ok {
          vault-balances: {
            stx: stx-vault,
            sbtc: sbtc-vault,
            ststx: ststx-vault,
            usdc: usdc-vault,
            usdh: usdh-vault,
            ststxbtc: ststxbtc-vault,
            stbtc: stbtc-vault
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
            ststxbtc: ststxbtc-vault,
            stbtc: stbtc-vault
          },
          market-vault-collateral: (list)
        }))))

(define-read-only (get-user-sbtc-balances (account principal))
  (let (
    (vault-shares (unwrap-panic (contract-call? .v0-vault-sbtc get-balance account)))
    (vault-underlying (unwrap-panic (contract-call? .v0-vault-sbtc convert-to-assets vault-shares)))
    (enabled-mask (contract-call? .v0-assets get-bitmap))

    (market-sbtc-underlying
      (match (contract-call? .v0-market-vault get-position account enabled-mask)
        position
          (get amount (fold find-collateral-amount-iter
                           (get collateral position)
                           {target: sBTC, amount: u0}))
        err-no-position u0))

    (market-zsbtc-shares
      (match (contract-call? .v0-market-vault get-position account enabled-mask)
        position
          (get amount (fold find-collateral-amount-iter
                           (get collateral position)
                           {target: zsBTC, amount: u0}))
        err-no-position u0))

    (market-zsbtc-underlying (unwrap-panic (contract-call? .v0-vault-sbtc convert-to-assets market-zsbtc-shares)))

    (market-sbtc (+ market-sbtc-underlying market-zsbtc-underlying))

    (total (+ vault-underlying market-sbtc)))

    (ok {
      vault-underlying: vault-underlying,
      market-collateral: market-sbtc,
      total: total
    })))

(define-read-only (get-user-stbtc-balances (account principal))
  (let (
    (vault-shares (unwrap-panic (contract-call? .v0-vault-stbtc get-balance account)))
    (vault-underlying (unwrap-panic (contract-call? .v0-vault-stbtc convert-to-assets vault-shares)))
    (enabled-mask (contract-call? .v0-assets get-bitmap))

    (market-zstbtc-shares
      (match (contract-call? .v0-market-vault get-position account enabled-mask)
        position
          (get amount (fold find-collateral-amount-iter
                           (get collateral position)
                           {target: zstBTC, amount: u0}))
        err-no-position u0))

    (market-zstbtc-underlying (unwrap-panic (contract-call? .v0-vault-stbtc convert-to-assets market-zstbtc-shares)))

    (total (+ vault-underlying market-zstbtc-underlying)))

    (ok total)))

(define-read-only (get-user-ststxbtc-balances (account principal))
  (let (
    (vault-shares (unwrap-panic (contract-call? .v0-vault-ststxbtc get-balance account)))
    (vault-underlying (unwrap-panic (contract-call? .v0-vault-ststxbtc convert-to-assets vault-shares)))
    (enabled-mask (contract-call? .v0-assets get-bitmap))

    (market-zststxbtc-shares
      (match (contract-call? .v0-market-vault get-position account enabled-mask)
        position
          (get amount (fold find-collateral-amount-iter
                           (get collateral position)
                           {target: zstSTXbtc, amount: u0}))
        err-no-position u0))

    (market-zststxbtc-underlying (unwrap-panic (contract-call? .v0-vault-ststxbtc convert-to-assets market-zststxbtc-shares)))

    (total (+ vault-underlying market-zststxbtc-underlying)))

    (ok total)))
