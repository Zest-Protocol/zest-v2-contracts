(use-trait ft-trait .ft-trait.ft-trait)
(impl-trait .market-trait-v7.market-trait-v7)

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
(define-constant ztokens (list zSTX zsBTC zstSTX zUSDC zUSDH zstSTXbtc zstBTC))

(define-constant BPS u10000)
(define-constant INDEX-PRECISION u1000000000000)
(define-constant MICROS-PER-SECOND u1000000)
(define-constant MAX-PYTH-EXPONENT-ADJUSTMENT 18)
(define-constant MIN-PYTH-EXPONENT-ADJUSTMENT -18)
(define-constant MAX-ORACLE-FUTURE-SKEW u60)

(define-constant TYPE-PYTH 0x00)
(define-constant TYPE-DIA 0x01)

(define-constant CALLCODE-STSTX 0x00)
(define-constant CALLCODE-ZSTX 0x01)
(define-constant CALLCODE-ZSBTC 0x02)
(define-constant CALLCODE-ZSTSTX 0x03)
(define-constant CALLCODE-ZUSDC 0x04)
(define-constant CALLCODE-ZUSDH 0x05)
(define-constant CALLCODE-ZSTSTXBTC 0x06)
(define-constant CALLCODE-STBTC 0x07)

(define-constant STSTX-RATIO-DECIMALS u1000000)
(define-constant STBTC-RATIO-DECIMALS u100000000)
(define-constant STBTC-RATIO-MIN u50000000)
(define-constant STBTC-RATIO-MAX u200000000)

(define-constant MAX-U64 u18446744073709551615)
(define-constant DEBT-MASK u340282366920938463444927863358058659840)
(define-constant DEBT-OFFSET u64)
(define-constant ITER-UINT-64 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63))

(define-constant MAX-LIQUIDATION-AMOUNT u340282366920938463463374607431768211455)
(define-constant GLOBAL-LIQUIDATION-GRACE-ID u100)

(define-constant ZEST-STX-WRAPPER-CONTRACT .wstx)

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
(define-constant ERR-ORACLE-STBTC-RATIO (err u400020))
(define-constant ERR-ORACLE-DIA (err u400013))
(define-constant ERR-ORACLE-INVARIANT (err u400014))
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

(define-data-var pause-liquidation bool false)

(define-data-var max-confidence-ratio uint u1000)
(define-data-var stbtc-haircut-bps uint u0)

(define-map liquidation-grace-periods uint uint)

(define-map index-cache
  { timestamp: uint, aid: uint }
  { index: uint, lindex: uint })

(define-map last-update
  { type: (buff 1), ident: (buff 32) }
  uint)

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
        (let ((price (unwrap! (get price feed) ERR-ORACLE-PYTH))
              (exponent (unwrap! (get exponent feed) ERR-ORACLE-PYTH))
              (confidence (unwrap! (get confidence feed) ERR-ORACLE-PYTH))
              (publisher-count (unwrap! (get publisher-count feed) ERR-ORACLE-PYTH))
              (timestamp (unwrap! (get feed-update-timestamp feed) ERR-ORACLE-PYTH)))
          (asserts! (>= publisher-count u3) ERR-ORACLE-PYTH)
          (asserts! (<= timestamp (get envelope-timestamp state)) ERR-ORACLE-PYTH)
          (asserts! (is-none (find-compact-feed feed-id (get feeds state))) ERR-ORACLE-PYTH)
          (ok (merge state {
            feeds: (unwrap! (as-max-len? (append (get feeds state) {
              feed-id: feed-id,
              price: price,
              exponent: exponent,
              confidence: confidence,
              timestamp: timestamp
            }) u3) ERR-ORACLE-PYTH)
          })))
        (ok state))))

(define-private (verify-lazer-update (update (buff 8192)))
  (let ((decoded (unwrap!
          (contract-call? .pyth-lazer-oracle verify-price-feeds
            update .pyth-lazer-decoder-v1 none)
          ERR-PRICE-FEED-UPDATE-FAILED))
        (channel (get channel decoded)))
    (asserts! (or (is-eq channel u3) (is-eq channel u4)) ERR-ORACLE-PYTH)
    (let ((collected (try! (fold collect-lazer-feed
      (get price-feeds decoded)
      (ok { envelope-timestamp: (get timestamp decoded), feeds: (list) })))))
      (ok { feeds: (get feeds collected) }))))

(define-private (load-price-feeds (updates (optional (list 3 (buff 8192)))))
  (match updates
    entries
      (begin
        (asserts! (is-eq (len entries) u1) ERR-PRICE-FEED-UPDATE-FAILED)
        (verify-lazer-update
          (unwrap! (element-at? entries u0) ERR-PRICE-FEED-UPDATE-FAILED)))
    (ok { feeds: (list) })))

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

(define-private (is-ztoken (aid uint))
  (is-some (index-of? ztokens aid)))

(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))

(define-private (vault-accrue (aid uint))
  (if (is-eq aid STX) (contract-call? .v0-vault-stx accrue)
  (if (is-eq aid sBTC) (contract-call? .v0-vault-sbtc accrue)
  (if (is-eq aid stSTX) (contract-call? .v0-vault-ststx accrue)
  (if (is-eq aid USDC) (contract-call? .v0-vault-usdc accrue)
  (if (is-eq aid USDH) (contract-call? .v0-vault-usdh accrue)
  (if (is-eq aid stSTXbtc) (contract-call? .v0-vault-ststxbtc accrue)
  (if (is-eq aid stBTC) (contract-call? .v0-vault-stbtc accrue)
  ERR-UNKNOWN-VAULT))))))))

(define-private (vault-system-borrow (aid uint) (amount uint) (receiver principal))
  (if (is-eq aid STX) (contract-call? .v0-vault-stx system-borrow amount receiver)
  (if (is-eq aid sBTC) (contract-call? .v0-vault-sbtc system-borrow amount receiver)
  (if (is-eq aid stSTX) (contract-call? .v0-vault-ststx system-borrow amount receiver)
  (if (is-eq aid USDC) (contract-call? .v0-vault-usdc system-borrow amount receiver)
  (if (is-eq aid USDH) (contract-call? .v0-vault-usdh system-borrow amount receiver)
  (if (is-eq aid stSTXbtc) (contract-call? .v0-vault-ststxbtc system-borrow amount receiver)
  (if (is-eq aid stBTC) (contract-call? .v0-vault-stbtc system-borrow amount receiver)
  ERR-UNKNOWN-VAULT))))))))

(define-private (vault-system-repay (aid uint) (amount uint) (ft <ft-trait>) (ft-address principal))
  (if (is-eq aid STX) (contract-call? .v0-vault-stx system-repay amount)
  (if (is-eq aid sBTC) (contract-call? .v0-vault-sbtc system-repay amount)
  (if (is-eq aid stSTX) (contract-call? .v0-vault-ststx system-repay amount)
  (if (is-eq aid USDC) (contract-call? .v0-vault-usdc system-repay amount)
  (if (is-eq aid USDH) (contract-call? .v0-vault-usdh system-repay amount)
  (if (is-eq aid stSTXbtc) (contract-call? .v0-vault-ststxbtc system-repay amount)
  (if (is-eq aid stBTC) (contract-call? .v0-vault-stbtc system-repay amount)
  ERR-UNKNOWN-VAULT))))))))

(define-private (vault-socialize-debt (aid uint) (amount uint))
  (if (is-eq aid STX) (contract-call? .v0-vault-stx socialize-debt amount)
  (if (is-eq aid sBTC) (contract-call? .v0-vault-sbtc socialize-debt amount)
  (if (is-eq aid stSTX) (contract-call? .v0-vault-ststx socialize-debt amount)
  (if (is-eq aid USDC) (contract-call? .v0-vault-usdc socialize-debt amount)
  (if (is-eq aid USDH) (contract-call? .v0-vault-usdh socialize-debt amount)
  (if (is-eq aid stSTXbtc) (contract-call? .v0-vault-ststxbtc socialize-debt amount)
  (if (is-eq aid stBTC) (contract-call? .v0-vault-stbtc socialize-debt amount)
  ERR-UNKNOWN-VAULT))))))))

(define-private (vault-deposit (aid uint) (amount uint) (min-out uint) (recipient principal))
  (if (is-eq aid STX) (contract-call? .v0-vault-stx deposit amount min-out recipient)
  (if (is-eq aid sBTC) (contract-call? .v0-vault-sbtc deposit amount min-out recipient)
  (if (is-eq aid stSTX) (contract-call? .v0-vault-ststx deposit amount min-out recipient)
  (if (is-eq aid USDC) (contract-call? .v0-vault-usdc deposit amount min-out recipient)
  (if (is-eq aid USDH) (contract-call? .v0-vault-usdh deposit amount min-out recipient)
  (if (is-eq aid stSTXbtc) (contract-call? .v0-vault-ststxbtc deposit amount min-out recipient)
  (if (is-eq aid stBTC) (contract-call? .v0-vault-stbtc deposit amount min-out recipient)
  ERR-UNKNOWN-VAULT))))))))

(define-private (vault-redeem (aid uint) (amount uint) (min-out uint) (recipient principal))
  (if (is-eq aid STX) (contract-call? .v0-vault-stx redeem amount min-out recipient)
  (if (is-eq aid sBTC) (contract-call? .v0-vault-sbtc redeem amount min-out recipient)
  (if (is-eq aid stSTX) (contract-call? .v0-vault-ststx redeem amount min-out recipient)
  (if (is-eq aid USDC) (contract-call? .v0-vault-usdc redeem amount min-out recipient)
  (if (is-eq aid USDH) (contract-call? .v0-vault-usdh redeem amount min-out recipient)
  (if (is-eq aid stSTXbtc) (contract-call? .v0-vault-ststxbtc redeem amount min-out recipient)
  (if (is-eq aid stBTC) (contract-call? .v0-vault-stbtc redeem amount min-out recipient)
  ERR-UNKNOWN-VAULT))))))))

(define-private (accrue-and-cache (aid uint))
  (let ((cache-key { timestamp: stacks-block-time, aid: aid })
        (cached? (map-get? index-cache cache-key)))

    (match cached?

      cached-indexes (ok cached-indexes)

      (let ((indexes (try! (vault-accrue aid))))

        (map-set index-cache cache-key indexes)
        (ok indexes)))))

(define-private (accrue-user-debts (debt-list (list 64 { aid: uint, scaled: uint})))
  (fold accrue-debt-asset debt-list { success: true }))

(define-private (accrue-debt-asset
  (debt-entry { aid: uint, scaled: uint })
  (acc { success: bool }))
  (begin

    (unwrap-panic (accrue-and-cache (get aid debt-entry)))
    acc))

(define-private (accrue-user-collateral (coll-list (list 64 {aid: uint, amount: uint})))
  (fold accrue-collateral-asset coll-list { success: true }))

(define-private (accrue-collateral-asset
  (coll-entry { aid: uint, amount: uint })
  (acc { success: bool }))
  (let ((aid (get aid coll-entry)))

    (if (is-ztoken aid)

        (let ((vault-id (if (is-eq aid zSTX) STX
                        (if (is-eq aid zsBTC) sBTC
                        (if (is-eq aid zstSTX) stSTX
                        (if (is-eq aid zUSDC) USDC
                        (if (is-eq aid zUSDH) USDH
                        (if (is-eq aid zstSTXbtc) stSTXbtc
                        (if (is-eq aid zstBTC) stBTC

                        u100)))))))))
          (begin
            (unwrap-panic (accrue-and-cache vault-id))
            acc))

        acc)))

(define-private (normalize-pyth (p int) (expo int))
  (let ((adj (+ expo 8)))
    (asserts! (> p 0) ERR-ORACLE-PYTH)
    (asserts! (and (>= adj MIN-PYTH-EXPONENT-ADJUSTMENT)
                   (<= adj MAX-PYTH-EXPONENT-ADJUSTMENT)) ERR-ORACLE-PYTH)
    (let ((res (if (> adj 0)
                   (* p (pow 10 adj))
                   (if (< adj 0) (/ p (pow 10 (- adj))) p))))
      (ok (to-uint res)))))

(define-private (check-confidence (price int) (confidence uint))
  (ok (asserts! (<= confidence (/ (* (to-uint price) (var-get max-confidence-ratio)) BPS)) ERR-PRICE-CONFIDENCE-LOW)))

(define-private (find-compact-feed
  (feed-id uint)
  (feeds (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })))
  (get result (fold find-compact-feed-iter feeds { target: feed-id, result: none })))

(define-private (find-compact-feed-iter
  (feed { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  (acc { target: uint, result: (optional { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint }) }))
  (if (is-some (get result acc))
      acc
      (if (is-eq (get feed-id feed) (get target acc))
          (merge acc { result: (some feed) })
          acc)))

(define-private (resolve-pyth
  (ident (buff 32))
  (context {
    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  }))
  (let ((lazer-id (unwrap!
          (if (is-eq ident 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43) (some u1)
          (if (is-eq ident 0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a) (some u7)
          (if (is-eq ident 0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17) (some u45)
          none))) ERR-ORACLE-PYTH))
        (response (unwrap! (find-compact-feed lazer-id (get feeds context)) ERR-ORACLE-PYTH))
        (price (get price response))
        (expo (get exponent response))
        (conf (get confidence response))
        (final-price (try! (normalize-pyth price expo)))
        (timestamp (get timestamp response)))
    (try! (check-confidence price conf))
    (ok { value: final-price, timestamp: timestamp })))

(define-private (call-dia (key (string-ascii 32)))
  (let ((res (unwrap! (contract-call? 'SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle get-value key) ERR-ORACLE-DIA)))
    (ok res)))

(define-private (resolve-dia (ident (buff 32)))
  (let ((key (unwrap-panic (from-consensus-buff? (string-ascii 32) ident)))
        (res (try! (call-dia key)))
        (timestamp (/ (get timestamp res) u1000)))
    (asserts! (<= timestamp (+ stacks-block-time MAX-ORACLE-FUTURE-SKEW)) ERR-ORACLE-INVARIANT)
    (ok { value: (get value res), timestamp: (* timestamp MICROS-PER-SECOND) })))

(define-private (resolve-price-feed
  (type (buff 1))
  (ident (buff 32))
  (pyth-context {
    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  }))
  (if (is-eq type TYPE-PYTH) (resolve-pyth ident pyth-context)
  (if (is-eq type TYPE-DIA) (resolve-dia ident)
  ERR-ORACLE-TYPE)))

(define-private (resolve-ststx (p uint))
  (let ((ratio (unwrap! (call-ststx-ratio) ERR-ORACLE-CALLCODE)))
    (ok (mul-div-down p ratio STSTX-RATIO-DECIMALS))))

(define-private (resolve-stbtc (p uint))
  (let ((ratio (unwrap! (call-stbtc-ratio) ERR-ORACLE-CALLCODE)))
    (asserts! (and (>= ratio STBTC-RATIO-MIN) (<= ratio STBTC-RATIO-MAX))
              ERR-ORACLE-STBTC-RATIO)
    (ok (mul-div-down p
          (/ (* ratio (- BPS (var-get stbtc-haircut-bps))) BPS)
          STBTC-RATIO-DECIMALS))))

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
    (if (is-eq cc CALLCODE-STBTC) (resolve-stbtc p)
    ERR-ORACLE-CALLCODE))))))))))

(define-private (oracle-price-legal (p uint))
  (> p u0))

(define-private (oracle-timestamp-fresh
  (ts uint)
  (prev uint)
  (max-staleness uint))
  (let ((now (* stacks-block-time MICROS-PER-SECOND))
        (not-too-far-ahead (<= ts (+ now (* MAX-ORACLE-FUTURE-SKEW MICROS-PER-SECOND))))
        (delta (if (> ts now) u0 (- now ts))))
    (and
      not-too-far-ahead
      (<= (/ (+ delta (- MICROS-PER-SECOND u1)) MICROS-PER-SECOND) max-staleness)
      (>= ts prev))))

(define-private (price-resolve
  (data { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint })
  (pyth-context {
    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  }))
  (let ((type (get type data))
        (ident (get ident data))
        (key { type: type, ident: ident })
        (resolution (try! (resolve-price-feed type ident pyth-context)))
        (price (get value resolution))
        (callcode (get callcode data))
        (final-price (try! (resolve-callcode price callcode)))
        (timestamp (get timestamp resolution))
        (last-update-time (oracle-last-update-micros key))
        (max-staleness (get max-staleness data)))

    (asserts! (and (oracle-price-legal final-price)
                   (oracle-timestamp-fresh timestamp last-update-time max-staleness))
              ERR-ORACLE-INVARIANT)

    (if (> timestamp last-update-time)
        (map-set last-update key timestamp)
        false)

    (ok final-price)))

(define-private (price-multi-resolve
  (data (list 64 { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint }))
  (aids (list 64 uint))
  (pyth-context {
    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  }))
  (let ((init { output: (list), valid: true, aids: aids, idx: u0, pyth-context: pyth-context })
        (response (fold iter-price-multi data init)))
    (asserts! (get valid response) ERR-ORACLE-MULTI)
    (ok (get output response))))

(define-private (iter-price-multi
  (oracle-data { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint })
  (acc {
    output: (list 64 uint), valid: bool, aids: (list 64 uint), idx: uint,
    pyth-context: {
      feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
    }
  }))
  (let ((valid (get valid acc))
        (skip? (asserts! valid acc))
        (asset-ids (get aids acc))
        (idx (get idx acc))

        (price (unwrap! (price-resolve oracle-data (get pyth-context acc)) (merge acc { valid: false })))
        (next (unwrap-panic (as-max-len? (append (get output acc) price) u64))))
    (merge acc {
      output: next,
      valid: true,
      aids: asset-ids,
      idx: (+ idx u1) })))

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

(define-private (get-enabled-bitmap)
  (contract-call? .v0-assets get-bitmap))

(define-private (get-status-multi (ids (list 64 uint)))
  (contract-call? .v0-assets status-multi ids))

(define-private (get-egroup (mask uint))
  (contract-call? .v0-egroup resolve mask))

(define-private (get-account-scaled-debt (account principal) (asset-id uint))
  (contract-call? .v0-market-vault get-account-scaled-debt account asset-id))

(define-private (get-position (account principal))
  (let ((mask (get-enabled-bitmap)))
    (contract-call? .v0-market-vault get-position account mask)))

(define-private (get-full-position (account principal))
  (contract-call? .v0-market-vault get-position account MAX-U64))

(define-private (get-liquidation-position (account principal))
  (let ((mask (get-enabled-bitmap)))
    (contract-call? .v0-market-vault get-position account mask)))

(define-private (get-asset (asset principal))
  (contract-call? .v0-assets get-asset-status asset))

(define-private (get-assets
  (mask-user uint)
  (pyth-context {
    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  }))
  (let ((mask-enabled (get-enabled-bitmap))
        (safe-mask (user-safe-mask mask-user mask-enabled))
        (iter (mask-to-list-collateral safe-mask))
        (assets-list (get-status-multi iter))
        (oracles-list (map get-oracle assets-list))

        (asset-ids (map get-asset-id assets-list))

        (prices-list (try! (price-multi-resolve oracles-list asset-ids pyth-context))))
    (ok (map merge-price assets-list prices-list))))

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
        (debt-notional (if (> debt-scaled u0)
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

(define-private (convert-to-scaled-debt (asset-id uint) (amount uint) (round-up bool))
  (let ((borrow-index (get index (unwrap-panic (get-cached-indexes asset-id)))))
  (if round-up
    (mul-div-up amount INDEX-PRECISION borrow-index)
    (mul-div-down amount INDEX-PRECISION borrow-index))))

(define-private (is-healthy (collateral-usd uint) (debt-usd uint) (ltv uint))
  (if (is-eq debt-usd u0)
      true
      (<= (* debt-usd BPS) (* collateral-usd ltv))))

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

(define-private (get-asset-value
                  (asset { id: uint, addr: principal, decimals: uint,
                          oracle: { type: (buff 1), ident: (buff 32), callcode: (optional (buff 1)), max-staleness: uint },
                          collateral: bool, debt: bool})
                  (amount uint) (round-up bool)
                  (pyth-context {
                    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
                  }))
    (let ((oracle-data (get oracle asset))
          (price (try! (price-resolve oracle-data pyth-context)))
          (decimals (get decimals asset)))
      (ok (normalize (* amount price) decimals round-up))))

(define-private (is-liquidation-paused (asset-id uint))
  (let ((manual-pause (var-get pause-liquidation))
        (global-grace-end (default-to u0 (map-get? liquidation-grace-periods GLOBAL-LIQUIDATION-GRACE-ID)))
        (asset-grace-end (default-to u0 (map-get? liquidation-grace-periods asset-id)))
        (global-grace-active (< stacks-block-time global-grace-end))
        (asset-grace-active (< stacks-block-time asset-grace-end)))
    (or manual-pause global-grace-active asset-grace-active)))

(define-private (calc-liq-factor (ltv-curr uint) (ltv-liq-partial uint) (ltv-liq-full uint))
  (min BPS (div-bps-down (- ltv-curr ltv-liq-partial) (- ltv-liq-full ltv-liq-partial))))

(define-private (calc-liq-factor-exp (factor uint) (exp uint))
  (if (is-eq exp BPS)
    factor
    (if (> exp BPS)
        (/ (pow factor (/ exp BPS)) (pow BPS (- (/ exp BPS) u1)))
        (sqrti (* factor BPS)))))

(define-private (calc-liq-factor-bound (liq-factor uint) (bound-min uint) (bound-max uint))
  (min bound-max (+ bound-min (mul-bps-down liq-factor (- bound-max bound-min)))))

(define-private (calc-liq-debt-repay (debt uint) (liq-factor uint))
  (mul-bps-down liq-factor debt))

(define-private (calc-liq-collateral-repay (debt-repay uint) (liq-penalty uint))
  (mul-bps-down debt-repay (+ BPS liq-penalty)))

(define-private (calc-liq-debt-repay-real (collateral-amount-usd uint) (liq-penalty uint))
  (div-bps-down collateral-amount-usd (+ BPS liq-penalty)))

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

        (debt-actual-usd (if (> debt-usd max-debt-usd) max-debt-usd debt-usd))

        (debt-actual (mul-div-down debt-actual-usd (pow u10 debt-decimals) debt-price)))
    {
      debt-actual-usd: debt-actual-usd,
      debt-actual: debt-actual,
      debt-price: debt-price,
      debt-decimals: debt-decimals
    }))

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
  })
  (pyth-context {
    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  }))

  (let (
        (coll-usd-expected (calc-liq-collateral-repay debt-actual-usd liq-penalty))

        (coll-asset-info (match (find-asset coll-aid assets)

                           found found

                           (let ((oracle-data (get oracle coll-asset))
                                 (price (try! (price-resolve oracle-data pyth-context))))
                             (merge coll-asset { price: price }))))
        (coll-price (get price coll-asset-info))
        (coll-decimals (get decimals coll-asset-info))
        (coll-expected (mul-div-down coll-usd-expected (pow u10 coll-decimals) coll-price))

        (coll-actual (if (> coll-expected user-coll-balance)
                         user-coll-balance
                         coll-expected)))
    (ok {
      coll-actual: coll-actual,
      coll-expected: coll-expected,
      coll-price: coll-price,
      coll-decimals: coll-decimals
    })))

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

        (debt-final-usd (if (< coll-actual coll-expected)
                           (calc-liq-debt-repay-real coll-actual-usd liq-penalty)
                           debt-actual-usd))
        (debt-final (mul-div-down debt-final-usd (pow u10 debt-decimals) debt-price)))
    {
      debt-final-usd: debt-final-usd,
      debt-final: debt-final
    }))

(define-private (scale-debt-for-liquidation
  (debt-final uint)
  (coll-actual uint)
  (curr-scaled uint)
  (asset-id uint))
  (let (
        (borrow-index (get index (unwrap-panic (get-cached-indexes asset-id))))
        (scaled-debt (mul-div-down debt-final INDEX-PRECISION borrow-index))

        (scaled-to-remove (if (> scaled-debt curr-scaled) curr-scaled scaled-debt))
        (debt-to-repay (mul-div-up scaled-to-remove borrow-index INDEX-PRECISION))

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

  (if (not (get success acc))
      acc
      (let ((borrower (get borrower acc))
            (failed-status { borrower: borrower, success: false })
            (asset-id (get aid debt-entry))
            (scaled-debt (get scaled debt-entry)))

            (unwrap! (vault-socialize-debt asset-id scaled-debt) failed-status)

            (map-set index-cache
                     { timestamp: stacks-block-time, aid: asset-id }
                     (unwrap! (vault-accrue asset-id) failed-status))

            (unwrap! (contract-call? .v0-market-vault
                                      debt-remove-scaled
                                      borrower
                                      scaled-debt
                                      asset-id) failed-status)
          acc)
        ))

(define-private (call-liquidate-with-context
  (position { borrower: principal,
              collateral-ft: <ft-trait>,
              debt-ft: <ft-trait>,
              debt-amount: uint,
              min-collateral-expected: uint })
  (acc (response {
    results: (list 8 (response { debt: uint, collateral: uint } uint)),
    pyth-context: {
      feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
    }
  } uint)))
  (let ((state (try! acc))
        (result (try! (liquidate-internal
          (get borrower position)
          (get collateral-ft position)
          (get debt-ft position)
          (get debt-amount position)
          (get min-collateral-expected position)
          none
          (get pyth-context state))))
        (next (unwrap-panic (as-max-len?
          (append (get results state) (ok result)) u8))))
    (ok (merge state { results: next }))))

(define-private (liquidate-batch
  (positions (list 8 { borrower: principal,
                        collateral-ft: <ft-trait>,
                        debt-ft: <ft-trait>,
                        debt-amount: uint,
                        min-collateral-expected: uint }))
  (pyth-context {
    feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
  }))
  (let ((state (try! (fold call-liquidate-with-context positions (ok {
    results: (list),
    pyth-context: pyth-context
  })))))
    (ok (get results state))))

(define-read-only (get-pause-liquidation) (ok (var-get pause-liquidation)))

(define-read-only (get-liquidation-grace-end)
  (ok (default-to u0 (map-get? liquidation-grace-periods GLOBAL-LIQUIDATION-GRACE-ID))))

(define-read-only (get-liquidation-grace-period-asset (id uint))
  (ok (default-to u0 (map-get? liquidation-grace-periods id))))

(define-read-only (get-max-confidence-ratio)
  (ok (var-get max-confidence-ratio)))

(define-read-only (oracle-last-update-micros (f {type: (buff 1), ident: (buff 32)}))
  (default-to u0 (map-get? last-update f)))

(define-read-only (oracle-last-update (f {type: (buff 1), ident: (buff 32)}))
  (/ (oracle-last-update-micros f) MICROS-PER-SECOND))

(define-read-only (get-cached-indexes (aid uint))
  (map-get? index-cache { timestamp: stacks-block-time, aid: aid }))

(define-public (set-pause-liquidation (paused bool) (grace-period uint))
  (begin
    (try! (check-dao-auth))
    (let ((was-paused (var-get pause-liquidation)))
      (var-set pause-liquidation paused)

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

(define-public (call-ststx-ratio)
  (ok (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.data-stx-v2 get-stx-per-ststx)))

(define-public (call-stbtc-ratio)
  (ok (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.data-stbtc-v1 get-sbtc-per-stbtc)))

(define-public (set-stbtc-haircut-bps (haircut uint))
  (begin
    (try! (check-dao-auth))
    (asserts! (<= haircut u5000) ERR-ORACLE-STBTC-RATIO)
    (var-set stbtc-haircut-bps haircut)
    (ok true)))

(define-read-only (get-stbtc-haircut-bps)
  (var-get stbtc-haircut-bps))

(define-public (collateral-add (ft <ft-trait>) (amount uint) (price-feeds (optional (list 3 (buff 8192)))))
  (let ((ft-address (contract-of ft))
        (asset (try! (get-asset ft-address)))
        (asset-id (get id asset))
        (account contract-caller))

    (asserts! (get collateral asset) ERR-COLLATERAL-DISABLED)
    (asserts! (is-eq contract-caller tx-sender) ERR-AUTHORIZATION)

    (match (contract-call? .v0-market-vault resolve-safe account)
      user-registry-data

        (let ((current-raw-mask (get mask user-registry-data))
              (future-raw-mask (bit-or current-raw-mask (pow u2 asset-id)))
              (is-new-collateral (not (is-eq future-raw-mask current-raw-mask))))

          (if is-new-collateral
              (let ((position (try! (get-position account)))
                    (current-mask (get mask position))
                    (future-mask (bit-or current-mask (pow u2 asset-id)))
                    (future-group (try! (get-egroup future-mask)))
                    (has-debt (> (len (get debt position)) u0)))

                (if has-debt
                    (let ((u-debt (accrue-user-debts (get debt position)))
                          (u-coll (accrue-user-collateral (get collateral position)))
                          (current-group (try! (get-egroup current-mask)))
                          (current-ltv (buff-to-uint-be (get LTV-BORROW current-group)))
                          (verified-feeds (try! (load-price-feeds price-feeds)))
                          (current-assets (try! (get-assets current-mask verified-feeds)))
                          (current-notional (get-notional-evaluation {
                            position: position, assets: current-assets }))
                          (current-coll-usd (get collateral current-notional))
                          (current-capacity (* current-coll-usd current-ltv))
                          (cache-primed (if (is-ztoken asset-id)
                            (let ((vault-id (if (is-eq asset-id zSTX) STX
                                            (if (is-eq asset-id zsBTC) sBTC
                                            (if (is-eq asset-id zstSTX) stSTX
                                            (if (is-eq asset-id zUSDC) USDC
                                            (if (is-eq asset-id zUSDH) USDH
                                            (if (is-eq asset-id zstSTXbtc) stSTXbtc
                                            (if (is-eq asset-id zstBTC) stBTC
                                            u100)))))))))
                              (try! (accrue-and-cache vault-id)))
                            { index: u0, lindex: u0 }))
                          (added-collateral-value
                            (try! (get-asset-value asset amount false verified-feeds)))
                          (future-ltv (buff-to-uint-be (get LTV-BORROW future-group)))
                          (future-coll-usd (+ current-coll-usd added-collateral-value))
                          (future-capacity (* future-coll-usd future-ltv)))
                      (asserts! (>= future-capacity current-capacity) ERR-UNHEALTHY))
                    true))

              true))

      new-user-error-code

        (begin
          (try! (get-egroup (pow u2 asset-id)))
          true))

    (let ((result (try! (contract-call? .v0-market-vault collateral-add account amount ft asset-id))))

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
        (position (try! (get-position account)))
        (has-debt (> (len (get debt position)) u0)))

    (asserts! (> amount u0) ERR-AMOUNT-ZERO)

    (if has-debt

        (let ((is-collateral-enabled (get collateral asset))
              (verified-feeds (try! (load-price-feeds price-feeds)))
              (position-mask (get mask position))
              (pos-full (if is-collateral-enabled position (try! (get-full-position account))))
              (u-debt (accrue-user-debts (get debt pos-full)))
              (u-coll (accrue-user-collateral (get collateral pos-full)))
              (assets (try! (get-assets position-mask verified-feeds)))
              (curr-coll-aid (find-collateral-amount (get collateral position) asset-id))
              (removing-all (is-eq amount curr-coll-aid))
              (current-group (try! (get-egroup position-mask)))
              (current-ltvb (buff-to-uint-be (get LTV-BORROW current-group)))
              (notional-valued-assets (get-notional-evaluation { position: position, assets: assets }))
              (collateral-value (get collateral notional-valued-assets))
              (debt-value (get debt notional-valued-assets))
              (removed-asset-value (find-and-resolve-asset-value assets asset-id amount true)))

          (asserts! (is-healthy collateral-value debt-value current-ltvb) ERR-UNHEALTHY)
          (asserts!
            (if is-collateral-enabled
                (let ((t (asserts! (>= collateral-value removed-asset-value) ERR-INSUFFICIENT-COLLATERAL))
                      (post-removal-collateral-value (- collateral-value removed-asset-value)))
                  (if removing-all
                      (let ((future-mask (bit-and position-mask (bit-not (pow u2 asset-id)))))
                        (try! (is-healthy-with-mask post-removal-collateral-value debt-value future-mask)))
                      (is-healthy post-removal-collateral-value debt-value current-ltvb)))
                (let ((oracle-data (get oracle asset))
                      (price (unwrap! (price-resolve oracle-data verified-feeds) ERR-DISABLED-COLLATERAL-PRICE-FAILED))
                      (decimals (get decimals asset))
                      (user-amount (find-collateral-amount (get collateral pos-full) asset-id))
                      (disabled-notional (normalize (* user-amount price) decimals false))
                      (removal-notional (normalize (* amount price) decimals true))
                      (total-collateral-value (+ collateral-value disabled-notional)))
                  (asserts! (>= total-collateral-value removal-notional) ERR-INSUFFICIENT-COLLATERAL)
                  (is-healthy (- total-collateral-value removal-notional) debt-value current-ltvb)))
            ERR-UNHEALTHY)

          (let ((result (try! (contract-call? .v0-market-vault collateral-remove account amount ft asset-id collateral-receiver))))
            (print { action: "collateral-remove", caller: contract-caller,
                     data: { account: account, receiver: collateral-receiver, asset-id: asset-id,
                             asset-addr: ft-address, amount: amount, updated-collateral-amount: result,
                             position-collateral-usd: collateral-value, position-debt-usd: debt-value }})
            (ok result)))

        (let ((result (try! (contract-call? .v0-market-vault collateral-remove account amount ft asset-id collateral-receiver))))
          (print { action: "collateral-remove", caller: contract-caller,
                   data: { account: account, receiver: collateral-receiver, asset-id: asset-id,
                           asset-addr: ft-address, amount: amount, updated-collateral-amount: result,
                           position-collateral-usd: u0, position-debt-usd: u0 }})
          (ok result)))))

(define-public (supply-collateral-add (ft <ft-trait>) (amount uint) (min-shares uint) (price-feeds (optional (list 3 (buff 8192)))))
  (let ((ft-address (contract-of ft))
        (asset (try! (get-asset ft-address)))
        (asset-id (get id asset))
        (account contract-caller))

    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (is-eq contract-caller tx-sender) ERR-AUTHORIZATION)

    (try! (contract-call? ft transfer amount account current-contract none))

    (let ((shares-minted
            (try! (if (is-eq ft-address ZEST-STX-WRAPPER-CONTRACT)

              (as-contract? ((with-stx amount))
                (try! (vault-deposit asset-id amount min-shares account)))

              (as-contract? ((with-ft ft-address "*" amount))
                (try! (vault-deposit asset-id amount min-shares account)))))))

      (if (is-eq asset-id STX) (collateral-add .v0-vault-stx shares-minted price-feeds)
      (if (is-eq asset-id sBTC) (collateral-add .v0-vault-sbtc shares-minted price-feeds)
      (if (is-eq asset-id stSTX) (collateral-add .v0-vault-ststx shares-minted price-feeds)
      (if (is-eq asset-id USDC) (collateral-add .v0-vault-usdc shares-minted price-feeds)
      (if (is-eq asset-id USDH) (collateral-add .v0-vault-usdh shares-minted price-feeds)
      (if (is-eq asset-id stSTXbtc) (collateral-add .v0-vault-ststxbtc shares-minted price-feeds)
      (if (is-eq asset-id stBTC) (collateral-add .v0-vault-stbtc shares-minted price-feeds)
      ERR-UNKNOWN-VAULT)))))))))
)

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
                       (if (is-eq ztoken-id zstBTC) stBTC
                       u100))))))))
        (funds-receiver (match receiver recv recv contract-caller)))

    (asserts! (<= underlying-id stBTC) ERR-UNKNOWN-VAULT)

    (try! (collateral-remove ft amount (some current-contract) price-feeds))

    (vault-redeem underlying-id amount min-underlying funds-receiver)))

(define-public (borrow (ft <ft-trait>) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (let ((address (contract-of ft))
        (asset (try! (get-asset address)))
        (asset-id (get id asset))
        (account contract-caller)
        (funds-receiver (match receiver recv recv contract-caller))
        (verified-feeds (try! (load-price-feeds price-feeds)))

        (position (try! (get-position account)))
        (mask (get mask position))

        (u-debt (accrue-user-debts (get debt position)))
        (u-coll (accrue-user-collateral (get collateral position)))

        (unused (accrue-and-cache asset-id))

        (assets (try! (get-assets mask verified-feeds)))

        (current-group (try! (get-egroup mask)))
        (current-ltvb (buff-to-uint-be (get LTV-BORROW current-group)))

        (notional-valued-assets (get-notional-evaluation { position: position, assets: assets }))
        (collateral-value (get collateral notional-valued-assets))
        (debt-value (get debt notional-valued-assets)))

    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (get debt asset) ERR-BORROW-DISABLED)
    (asserts! (is-healthy collateral-value debt-value current-ltvb) ERR-UNHEALTHY)

    (let ((future-mask (bit-or mask (pow u2 (+ asset-id DEBT-OFFSET))))
          (future-group (try! (get-egroup future-mask)))

          (disabled-borrow-mask (get BORROW-DISABLED-MASK future-group))
          (debt-increase (try! (get-asset-value asset amount true verified-feeds)))
          (debt-post-increased (+ debt-value debt-increase)))

    (asserts! (is-eq (bit-and disabled-borrow-mask (pow u2 asset-id)) u0) ERR-EGROUP-ASSET-BORROW-DISABLED)

    (asserts! (try! (is-healthy-with-mask collateral-value debt-post-increased future-mask)) ERR-UNHEALTHY)

    (try! (vault-system-borrow asset-id amount funds-receiver))
    (let ((scaled-debt-added (convert-to-scaled-debt asset-id amount true))
          (borrow-index (get index (unwrap-panic (get-cached-indexes asset-id)))))
      (try! (contract-call? .v0-market-vault
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

        (account (match on-behalf-of behalf behalf contract-caller))

        (position (try! (get-position account)))
        (mask (get mask position))

        (u-debt (accrue-user-debts (get debt position)))

        (borrow-index (get index (unwrap-panic (get-cached-indexes asset-id))))

        (account-scaled-debt (get-account-scaled-debt account asset-id))

        (max-repay-tokens (mul-div-up account-scaled-debt borrow-index INDEX-PRECISION))

        (safe-amount (min amount max-repay-tokens))

        (scaled-debt-repayment (mul-div-down safe-amount INDEX-PRECISION borrow-index))

        (repaid-scaled-debt (min account-scaled-debt scaled-debt-repayment))
        (amount-to-repay (mul-div-up repaid-scaled-debt borrow-index INDEX-PRECISION))

        (repaying-all (is-eq repaid-scaled-debt account-scaled-debt)))

    (asserts! (is-eq contract-caller tx-sender) ERR-AUTHORIZATION)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (> repaid-scaled-debt u0) ERR-INSUFFICIENT-SCALED-DEBT)

    (try! (vault-system-repay asset-id amount-to-repay ft address))

    (try! (contract-call? .v0-market-vault
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

(define-private (liquidate-internal
                (borrower principal)
                (collateral-ft <ft-trait>)
                (debt-ft <ft-trait>)
                (debt-amount uint)
                (min-collateral-expected uint)
                (collateral-receiver (optional principal))
                (verified-feeds {
                  feeds: (list 3 { feed-id: uint, price: int, exponent: int, confidence: uint, timestamp: uint })
                }))
  (let (
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

    (u-debt (accrue-user-debts (get debt pos-full)))
    (u-coll (accrue-user-collateral (get collateral pos-full)))

    (assets (try! (get-assets mask verified-feeds)))
    (notional-valued-assets (get-notional-evaluation { position: position, assets: assets }))
    (total-collateral-usd (get collateral notional-valued-assets))
    (total-debt-usd (get debt notional-valued-assets))

    (ltv-liq-partial (buff-to-uint-be (get LTV-LIQ-PARTIAL group)))
    (ltv-liq-full (buff-to-uint-be (get LTV-LIQ-FULL group)))
    (liq-penalty-min (buff-to-uint-be (get LIQ-PENALTY-MIN group)))
    (liq-penalty-max (buff-to-uint-be (get LIQ-PENALTY-MAX group)))
    (curve-exponent (buff-to-uint-be (get LIQ-CURVE-EXP group)))

    (current-ltv   (if (is-eq total-collateral-usd u0)
                       (if (is-eq total-debt-usd u0) u0 BPS)
                       (mul-div-down total-debt-usd BPS total-collateral-usd)))

    (last-borrow-block (get last-borrow-block position))
    (same-block-check (asserts! (not (is-eq last-borrow-block stacks-block-height)) ERR-LIQUIDATION-BORROW-SAME-BLOCK))

    (health-check  (asserts! (>= current-ltv ltv-liq-partial) ERR-HEALTHY))

    (liq-params (calc-liquidation-params
                  current-ltv ltv-liq-partial ltv-liq-full
                  liq-penalty-min liq-penalty-max
                  curve-exponent total-debt-usd))
    (liq-pct-scaled (get liq-pct-scaled liq-params))
    (liq-penalty (get liq-penalty liq-params))
    (max-debt-usd (get max-debt-usd liq-params))

    (debt-info (process-debt-asset debt-amount debt-aid max-debt-usd assets))
    (debt-actual-usd (get debt-actual-usd debt-info))
    (debt-actual (get debt-actual debt-info))
    (debt-price (get debt-price debt-info))
    (debt-decimals (get debt-decimals debt-info))

    (user-coll-balance (find-collateral-amount (get collateral pos-full) coll-aid))
    (coll-info (try! (process-collateral-asset coll-aid debt-actual-usd liq-penalty
                                         user-coll-balance assets coll-asset verified-feeds)))
    (coll-actual (get coll-actual coll-info))
    (coll-expected (get coll-expected coll-info))
    (coll-price (get coll-price coll-info))
    (coll-decimals (get coll-decimals coll-info))

    (final-amounts (calc-final-liquidation-amounts
                     debt-actual-usd coll-actual coll-expected
                     coll-price coll-decimals
                     debt-price debt-decimals liq-penalty))
    (debt-final-usd (get debt-final-usd final-amounts))
    (debt-final (get debt-final final-amounts))

    (curr-scaled (get-account-scaled-debt borrower debt-aid))
    (scaled-info (scale-debt-for-liquidation debt-final coll-actual curr-scaled debt-aid))
    (scaled-to-remove (get scaled-to-remove scaled-info))
    (debt-to-repay (get debt-to-repay scaled-info))
    (coll-final-raw (get coll-final scaled-info))
    (coll-remaining (- user-coll-balance coll-final-raw))
    (remaining-debt-to-repay
      (if (> coll-remaining u0)
        (let ((rem-coll-usd (normalize (* coll-remaining coll-price) coll-decimals false))
              (rem-debt-usd (div-bps-down rem-coll-usd (+ BPS liq-penalty-max)))
              (rem-debt-tokens (mul-div-down rem-debt-usd (pow u10 debt-decimals) debt-price))
              (rem-borrow-index (get index (unwrap-panic (get-cached-indexes debt-aid))))
              (rem-scaled (mul-div-down rem-debt-tokens INDEX-PRECISION rem-borrow-index)))
          (mul-div-up rem-scaled rem-borrow-index INDEX-PRECISION))
        u1))
    (coll-final (if (is-eq remaining-debt-to-repay u0) user-coll-balance coll-final-raw)))

    (asserts! (not (is-liquidation-paused debt-aid)) ERR-LIQUIDATION-PAUSED)
    (asserts! (is-eq contract-caller tx-sender) ERR-AUTHORIZATION)
    (asserts! (> debt-amount u0) ERR-AMOUNT-ZERO)
    (asserts! (> debt-to-repay u0) ERR-ZERO-LIQUIDATION-AMOUNTS)
    (asserts! (> coll-final u0) ERR-ZERO-LIQUIDATION-AMOUNTS)
    (asserts! (>= coll-final min-collateral-expected) ERR-SLIPPAGE)

    (try! (vault-system-repay debt-aid debt-to-repay debt-ft debt-address))

    (let ((debt-updated (try! (contract-call? .v0-market-vault
                              debt-remove-scaled
                              borrower
                              scaled-to-remove
                              debt-aid)))

          (actual-receiver (match collateral-receiver recv recv liquidator))
          (coll-removed (try! (contract-call? .v0-market-vault
                              collateral-remove
                              borrower
                              coll-final
                              collateral-ft
                              coll-aid
                              actual-receiver)))

          (target-coll-full-usd (normalize (* user-coll-balance coll-price) coll-decimals false))
          (other-coll-usd (if (> total-collateral-usd target-coll-full-usd)
                              (- total-collateral-usd target-coll-full-usd)
                              u0))
          (other-debt-repayable
            (if (> other-coll-usd u0)
              (let ((other-adj (div-bps-down other-coll-usd (+ BPS liq-penalty-max)))
                    (other-tokens (mul-div-down other-adj (pow u10 debt-decimals) debt-price))
                    (other-borrow-idx (get index (unwrap-panic (get-cached-indexes debt-aid))))
                    (other-scaled (mul-div-down other-tokens INDEX-PRECISION other-borrow-idx)))
                (mul-div-up other-scaled other-borrow-idx INDEX-PRECISION))
              u0))
          (no-collateral-left (and
                                (is-eq coll-removed u0)
                                (or
                                  (is-eq (len (get collateral pos-full)) u1)
                                  (and
                                    (is-eq (len (get collateral pos-full)) (len (get collateral position)))
                                    (is-eq other-debt-repayable u0))))))

      (let ((bad-debt-socialized
              (if no-collateral-left
                  (let ((stripped-debt-list (filter-out-debt-asset (get debt pos-full) debt-aid))
                        (fresh-debt-list (if (is-eq debt-updated u0)
                                             stripped-debt-list
                                             (unwrap-panic (as-max-len?
                                               (append stripped-debt-list
                                                       { aid: debt-aid, scaled: debt-updated })
                                               u64)))))
                    (if (> (len fresh-debt-list) u0)
                      (let ((socialization-result (fold socialize-debt-asset
                                                        fresh-debt-list
                                                        { borrower: borrower, success: true })))
                        (asserts! (get success socialization-result) ERR-BAD-DEBT-SOCIALIZATION-FAILED)

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

(define-public (liquidate
                (borrower principal)
                (collateral-ft <ft-trait>)
                (debt-ft <ft-trait>)
                (debt-amount uint)
                (min-collateral-expected uint)
                (collateral-receiver (optional principal))
                (price-feeds (optional (list 3 (buff 8192)))))
  (liquidate-internal borrower collateral-ft debt-ft debt-amount
    min-collateral-expected collateral-receiver
    (try! (load-price-feeds price-feeds))))

(define-public (liquidate-multi-with-feeds
                (positions (list 8 { borrower: principal,
                                      collateral-ft: <ft-trait>,
                                      debt-ft: <ft-trait>,
                                      debt-amount: uint,
                                      min-collateral-expected: uint }))
                (price-feed (buff 8192)))
  (liquidate-batch positions
    (try! (verify-lazer-update price-feed))))

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

        (underlying-id (if (is-eq ztoken-id zSTX) STX
                       (if (is-eq ztoken-id zsBTC) sBTC
                       (if (is-eq ztoken-id zstSTX) stSTX
                       (if (is-eq ztoken-id zUSDC) USDC
                       (if (is-eq ztoken-id zUSDH) USDH
                       (if (is-eq ztoken-id zstSTXbtc) stSTXbtc
                       (if (is-eq ztoken-id zstBTC) stBTC
                       u100))))))))
        (funds-receiver (match receiver recv recv contract-caller)))

    (asserts! (is-ztoken ztoken-id) ERR-UNKNOWN-VAULT)

    (let ((liq-result (try! (liquidate borrower
                                       collateral-ft
                                       debt-ft
                                       debt-amount
                                       min-collateral-expected
                                       (some current-contract)
                                       price-feeds)))
          (collateral-seized (get collateral liq-result))
          (debt-repaid (get debt liq-result)))

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
