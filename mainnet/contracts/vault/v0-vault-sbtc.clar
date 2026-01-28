;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; sbtc vault - 1
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ============================================================================
;; TRAITS
;; ============================================================================
(impl-trait .vault-traits.reserve)
(impl-trait .vault-traits.tokenized-vault)
(impl-trait .vault-traits.lending)
(impl-trait .vault-traits.flashloan)
(use-trait flash-callback .vault-traits.flash-callback)

;; ============================================================================
;; CONSTANTS
;; ============================================================================

;; -- Core configuration
(define-constant UNDERLYING 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token)
(define-constant NAME "Zest sBTC")
(define-constant SYMBOL "zsBTC")
(define-constant DECIMALS u8)

;; -- Precision & scaling
(define-constant BPS u10000)
(define-constant PRECISION u100000000)
(define-constant INDEX-PRECISION u1000000000000)  ;; 1e12 for index calculations
(define-constant SECONDS-PER-YEAR-BPS (* u31536000 BPS))

;; -- Limits & boundaries
(define-constant MAX-U128 u340282366920938463463374607431768211455)
(define-constant MAX-U16 u65535)
(define-constant MASK-U16 (+ MAX-U16 u1))
(define-constant BIT-U16 u16)
(define-constant MINIMUM-LIQUIDITY u1000)

;; -- Utilities
(define-constant NULL-ADDRESS (unwrap-panic (principal-construct? (if is-in-mainnet 0x16 0x1a) 0x0000000000000000000000000000000000000000)))
(define-constant ITER-UINT-8 (list u0 u1 u2 u3 u4 u5 u6 u7))

;; ============================================================================
;; ERRORS (801xxx prefix for vault-sbtc)
;; ============================================================================
(define-constant ERR-AUTH (err u801001))
(define-constant ERR-INIT (err u801002))
(define-constant ERR-ALREADY-INITIALIZED (err u801003))
(define-constant ERR-REENTRANCY (err u801004))
(define-constant ERR-RESERVE-VALIDATION (err u801005))
(define-constant ERR-PAUSED (err u801006))
(define-constant ERR-TOKENIZED-VAULT-PRECONDITIONS (err u801007))
(define-constant ERR-TOKENIZED-VAULT-POSTCONDITIONS (err u801008))
(define-constant ERR-AMOUNT-ZERO (err u801009))
(define-constant ERR-SLIPPAGE (err u801010))
(define-constant ERR-SUPPLY-CAP-EXCEEDED (err u801011))
(define-constant ERR-OUTPUT-ZERO (err u801012))
(define-constant ERR-INSUFFICIENT-BALANCE (err u801013))
(define-constant ERR-INSUFFICIENT-LIQUIDITY (err u801014))
(define-constant ERR-LENDING-PRECONDITIONS (err u801015))
(define-constant ERR-LENDING-POSTCONDITIONS (err u801016))
(define-constant ERR-NO-RESERVES (err u801017))
(define-constant ERR-INSUFFICIENT-VAULT-LIQUIDITY (err u801018))
(define-constant ERR-DEBT-CAP-EXCEEDED (err u801019))
(define-constant ERR-INSUFFICIENT-ASSETS (err u801020))
(define-constant ERR-INVALID-ADDRESS (err u801021))
(define-constant ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY (err u801022))
(define-constant ERR-FLASHLOAN-UNAUTHORIZED (err u801023))

;; -- Shared/external errors (from pack utilities - prefix 700)
(define-constant ERR-INVALID-U16 (err u700001))

;; ============================================================================
;; DATA VARS
;; ============================================================================

;; -- Initialization state
(define-data-var initialized bool false)

;; -- Token
(define-data-var token-uri (optional (string-utf8 256)) none)

;; -- Caps & fees
(define-data-var cap-debt uint u0)
(define-data-var cap-supply uint u0)
(define-data-var fee-flash uint u0)
(define-data-var fee-reserve uint u0)

;; -- Permissions
(define-data-var in-flashloan bool false)
(define-data-var default-flashloan-permissions 
  {can-flashloan: bool, fee-exempt: bool}
  {can-flashloan: false, fee-exempt: false})

;; -- Interest rate
(define-data-var points-ir
  {util: uint, rate: uint}
  {util: u0, rate: u0})

;; -- Pause states
(define-data-var pause-states
  {
    deposit: bool,
    redeem: bool,
    borrow: bool,
    repay: bool,
    accrue: bool,
    flashloan: bool
  }
  {
    deposit: false,
    redeem: false,
    borrow: false,
    repay: false,
    accrue: false,
    flashloan: false
  })

;; -- Assets & lending
(define-data-var assets uint u0)
(define-data-var total-borrowed uint u0)
(define-data-var principal-scaled uint u0)
(define-data-var index uint INDEX-PRECISION)
(define-data-var lindex uint INDEX-PRECISION)
(define-data-var last-update uint stacks-block-time)

;; ============================================================================
;; MAPS
;; ============================================================================
(define-map authorized-contracts principal bool)
(define-map flashloan-permissions 
  principal 
  {
    can-flashloan: bool,
    fee-exempt: bool
  })

;; ============================================================================
;; FUNGIBLE TOKEN
;; ============================================================================
(define-fungible-token zft)

;; ============================================================================
;; PRIVATE FUNCTIONS
;; ============================================================================

;; -- Math utilities ---------------------------------------------------------

(define-private (mul-div-down (x uint) (y uint) (z uint))
  (/ (* x y) z))

(define-private (mul-div-up (x uint) (y uint) (z uint))
  (/ (+ (* x y) (- z u1)) z))

(define-private (min (a uint) (b uint)) 
  (if (< a b) a b))

(define-private (max (a uint) (b uint)) 
  (if (> a b) a b))

(define-private (mul-bps-down (x uint) (y uint)) 
  (/ (* x y) BPS))

;; -- Interest calculations --------------------------------------------------

(define-private (calc-utilization (available-liquidity uint) (debt-amount uint))
  (let ((total (+ debt-amount available-liquidity)))
    (if (is-eq total u0)
        u0
        (mul-div-down debt-amount BPS total))))

(define-private (calc-multiplier-delta (rate uint) (time-delta uint) (round-up bool))
  (+ INDEX-PRECISION
    (if round-up
      (mul-div-up rate
                  (* time-delta INDEX-PRECISION)
                  SECONDS-PER-YEAR-BPS)
      (mul-div-down rate
                  (* time-delta INDEX-PRECISION)
                  SECONDS-PER-YEAR-BPS))))

(define-private (calc-cumulative-debt (principal-amount uint) (idx uint))
  (mul-div-up principal-amount idx INDEX-PRECISION))

(define-private (calc-index-next (index-curr uint) (multiplier uint))
  (mul-div-down index-curr multiplier INDEX-PRECISION))

(define-private (calc-liquidity-rate (var-borrow-rate uint) (util-pct uint) (reserve-factor-bps uint))
  (let ((util-applied (mul-bps-down var-borrow-rate util-pct))
        (one-minus-rf (- BPS reserve-factor-bps)))
    (mul-bps-down util-applied one-minus-rf)))

(define-private (calc-principal-ratio-reduction (amount uint) (scaled-principal uint) (debt-amount uint))
  (mul-div-down amount scaled-principal debt-amount))

;; -- Rate interpolation -----------------------------------------------------

(define-private (interpolate-rate (util uint) (points-util (list 8 uint)) (points-rate (list 8 uint)))
  (resolve-and-interpolate util points-util points-rate))

(define-private (resolve-and-interpolate (target uint) (utils (list 8 uint)) (rates (list 8 uint)))
  (let ((result (fold resolve-interpolation-points 
                      (zip utils rates)
                      {target: target, prev: {util: MAX-U128, rate: MAX-U128}, result: MAX-U128, found: false})))
    (get result result)))

(define-private (resolve-interpolation-points 
  (point {util: uint, rate: uint}) 
  (acc {target: uint, found: bool, result: uint, prev: {util: uint, rate: uint}}))
  (if (get found acc)
      acc
      (let ((util (get util point))
            (rate (get rate point)))
        (if (>= (get target acc) util)
            {target: (get target acc), prev: {util: util, rate: rate}, result: rate, found: false}
            (if (is-eq (get util (get prev acc)) MAX-U128)
                {target: (get target acc), prev: {util: util, rate: rate}, result: rate, found: true}
                (let ((interpolated (linear-interpolate (get target acc) 
                                                       (get util (get prev acc)) (get rate (get prev acc))
                                                       util rate)))
                  {target: (get target acc), prev: {util: util, rate: rate}, result: interpolated, found: true}))))))

(define-private (linear-interpolate (x uint) (x1 uint) (y1 uint) (x2 uint) (y2 uint))
  (if (is-eq x1 x2)
      y1
      (+ y1 (mul-div-down (- x x1) (- y2 y1) (- x2 x1)))))

(define-private (zip (util (list 8 uint)) (rate (list 8 uint)))
  (map combine-elements ITER-UINT-8 util rate))

(define-private (combine-elements (iter uint) (util uint) (rate uint))
  {util: util, rate: rate})

;; -- Pack utilities ---------------------------------------------------------

(define-private (pack-u16 (fields (list 8 uint)) (upper (optional uint)))
  (let ((clamped-upper (match upper
                         val (if (<= val MAX-U16) val MAX-U16)
                         MAX-U16))
        (init { word: u0, fields: fields, valid: true, max: clamped-upper })
        (out (fold iter-pack-u16 ITER-UINT-8 init))
        (valid (get valid out))
        (valid? (asserts! valid ERR-INVALID-U16))
        (word (get word out)))
    (ok word)))

(define-private (iter-pack-u16 (i uint) (acc {word: uint, fields: (list 8 uint), valid: bool, max: uint}))
  (let ((fields (get fields acc))
        (max-val (get max acc))
        (pos (unwrap-panic (element-at fields i)))
        (valid (get valid acc))
        (pos-valid (<= pos max-val))
        (new-valid (and valid pos-valid))
        (word (get word acc))
        (mul (* i BIT-U16))
        (offset (pow u2 mul))
        (shiftl (* pos offset))
        (nword (+ word shiftl)))
    { fields: fields, word: nword, valid: new-valid, max: max-val }))

(define-private (unpack-u16 (word uint))
  (let ((init { word: word, fields: (list) })
        (out (fold iter-unpack-u16 ITER-UINT-8 init)))
    (get fields out)))

(define-private (unpack-u16-at (word uint) (pos uint))
  (let ((offset (* pos BIT-U16))
        (div (pow u2 offset))
        (shiftr (/ word div)))
    (mod shiftr MASK-U16)))

(define-private (iter-unpack-u16 (pos uint) (acc {word: uint, fields: (list 8 uint)}))
  (let ((word (get word acc))
        (fields (get fields acc))
        (unpack (unpack-u16-at word pos))
        (new (as-max-len? (append fields unpack) u8)))
    { word: word, fields: (unwrap-panic new) }))

;; -- Auth helpers -----------------------------------------------------------

(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))

(define-private (check-caller-auth)
  (ok (asserts! (is-authorized-contract contract-caller) ERR-AUTH)))

;; -- Token helpers ----------------------------------------------------------

(define-private (total-supply) (ft-get-supply zft))

(define-private (get-balance-internal (acc principal)) (ft-get-balance zft acc))

(define-private (receive-underlying (amount uint) (account principal))
  (begin
    (try! (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token transfer amount account current-contract none))
    (ok true)))

(define-private (send-underlying (amount uint) (account principal))
  (begin
    (try! (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token transfer amount current-contract account none))
    (ok true)))

(define-private (ubalance)
  (unwrap-panic (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token get-balance-available current-contract)))

;; -- Conversion helpers -----------------------------------------------------

(define-private (convert-to-shares-preview (amount uint))
  (let ((ta (total-assets-preview))
        (ts (total-supply-preview)))
    (if (is-eq ts u0)
        amount
        (if (is-eq ta u0)
            u0
            (mul-div-down amount ts ta)))))

(define-private (convert-to-assets-preview (amount uint))
  (let ((ta (total-assets-preview))
        (ts (total-supply-preview)))
    (if (is-eq ta u0)
        u0
        (if (is-eq ts u0)
            u0
            (mul-div-down amount ta ts)))))

;; -- Debt helpers -----------------------------------------------------------

(define-private (total-debt)
  (calc-cumulative-debt (var-get principal-scaled) (var-get index)))

(define-private (debt-preview)
  (calc-cumulative-debt (var-get principal-scaled) (next-index)))

(define-private (total-assets)
  (let ((current-assets (var-get assets))
        (debt (total-debt))
        (borrowed (var-get total-borrowed))
        (interest (if (> debt borrowed) (- debt borrowed) u0)))
    (+ current-assets interest)))

(define-private (total-assets-preview)
  (let ((current-assets (var-get assets))
        (debt (debt-preview))
        (borrowed (var-get total-borrowed))
        (interest (if (> debt borrowed) (- debt borrowed) u0)))
    (+ current-assets interest)))

;; -- Treasury LP preview helpers --------------------------------------------

(define-private (calc-treasury-lp-preview)
  (let ((scaled-principal (var-get principal-scaled))
        (idx (var-get index))
        (next (next-index))
        (old-debt (mul-div-down scaled-principal idx INDEX-PRECISION))
        (new-debt (mul-div-down scaled-principal next INDEX-PRECISION))
        (debt-delta (if (> new-debt old-debt) (- new-debt old-debt) u0))
        (reserve-inc (mul-div-down debt-delta (var-get fee-reserve) BPS))
        (ta-preview (total-assets-preview)))
    (if (> reserve-inc u0)
        (mul-div-down reserve-inc (total-supply) (- ta-preview reserve-inc))
        u0)))

(define-private (total-supply-preview)
  (let ((current-supply (total-supply))
        (treasury-lp (calc-treasury-lp-preview)))
    (+ current-supply treasury-lp)))

(define-private (utilization)
  (calc-utilization (get-available-assets) (total-debt)))

(define-private (interest-rate)
  (let ((points-data (var-get points-ir))
        (uword (get util points-data))
        (rword (get rate points-data))
        (utils (unpack-u16 uword))
        (rates (unpack-u16 rword)))
    (interpolate-rate (utilization) utils rates)))

(define-private (next-index)
  (let ((states (var-get pause-states))
        (idx (var-get index)))
    (if (get accrue states)
        idx
        (let (
            (rate (interest-rate))
            (time-delta (- stacks-block-time (var-get last-update)))
            (multiplier (if (is-eq time-delta u0)
                          INDEX-PRECISION
                          (calc-multiplier-delta rate time-delta true))))
          (calc-index-next idx multiplier)))))

(define-private (next-liquidity-index)
  (let ((states (var-get pause-states))
        (lidx (var-get lindex)))
    (if (get accrue states)
        lidx
        (let (
            (rate (interest-rate))
            (liquidity-rate (calc-liquidity-rate rate (utilization) (var-get fee-reserve)))
            (time-delta (- stacks-block-time (var-get last-update)))
            (multiplier (if (is-eq time-delta u0)
                          INDEX-PRECISION
                          (calc-multiplier-delta liquidity-rate time-delta false))))
          (calc-index-next lidx multiplier)))))

(define-private (principal-ratio-reduction (amount uint))
  (calc-principal-ratio-reduction amount (var-get principal-scaled) (debt-preview)))

;; -- Permission helpers -----------------------------------------------------

(define-private (set-permission-single 
    (update {account: principal, can-flashloan: bool, fee-exempt: bool}))
  (map-set flashloan-permissions 
    (get account update)
    {can-flashloan: (get can-flashloan update), fee-exempt: (get fee-exempt update)}))

;; ============================================================================
;; READ-ONLY FUNCTIONS
;; ============================================================================

;; -- Token getters ----------------------------------------------------------

(define-read-only (get-name) (ok NAME))
(define-read-only (get-symbol) (ok SYMBOL))
(define-read-only (get-token-uri) (ok (var-get token-uri)))
(define-read-only (get-decimals) (ok DECIMALS))
(define-read-only (get-total-supply) (ok (total-supply)))
(define-read-only (get-balance (account principal)) (ok (get-balance-internal account)))

;; -- Auth getters -----------------------------------------------------------

(define-read-only (is-authorized-contract (contract principal))
  (default-to false (map-get? authorized-contracts contract)))

;; -- Reserve getters --------------------------------------------------------

(define-read-only (get-cap-debt) (ok (var-get cap-debt)))
(define-read-only (get-cap-supply) (ok (var-get cap-supply)))
(define-read-only (get-fee-flash) (ok (var-get fee-flash)))
(define-read-only (get-fee-reserve) (ok (var-get fee-reserve)))

(define-read-only (get-default-flashloan-permissions)
  (ok (var-get default-flashloan-permissions)))

(define-read-only (get-flashloan-permissions (account principal))
  (default-to (var-get default-flashloan-permissions)
              (map-get? flashloan-permissions account)))

(define-read-only (get-points-util)
  (let ((pir (var-get points-ir)))
    (ok (unpack-u16 (get util pir)))))

(define-read-only (get-points-rate)
  (let ((pir (var-get points-ir)))
    (ok (unpack-u16 (get rate pir)))))

;; -- Pause getters ----------------------------------------------------------

(define-read-only (get-pause-states) (ok (var-get pause-states)))

;; -- Vault getters ----------------------------------------------------------

(define-read-only (get-assets) (ok (var-get assets)))
(define-read-only (get-total-assets) (ok (total-assets-preview)))
(define-read-only (convert-to-shares (amount uint)) (ok (convert-to-shares-preview amount)))
(define-read-only (convert-to-assets (amount uint)) (ok (convert-to-assets-preview amount)))

;; -- Lending getters --------------------------------------------------------

(define-read-only (get-principal-scaled) (ok (var-get principal-scaled)))
(define-read-only (get-index) (ok (var-get index)))
(define-read-only (get-last-update) (ok (var-get last-update)))
(define-read-only (get-debt) (ok (total-debt)))
(define-read-only (get-utilization) (ok (utilization)))
(define-read-only (get-interest-rate) (ok (interest-rate)))
(define-read-only (get-next-index) (ok (next-index)))
(define-read-only (get-principal-ratio-reduction (amount uint)) (ok (principal-ratio-reduction amount)))
(define-read-only (get-liquidity-index) (ok (var-get lindex)))
(define-read-only (get-underlying) (ok UNDERLYING))

(define-read-only (get-available-assets)
  (let ((current-assets (var-get assets))
        (borrowed (var-get total-borrowed)))
    (if (>= current-assets borrowed)
        (- current-assets borrowed)
        u0)))

;; ============================================================================
;; PUBLIC FUNCTIONS
;; ============================================================================

;; -- Initialization ---------------------------------------------------------

(define-public (initialize)
  (begin
    (asserts! (not (var-get initialized)) ERR-ALREADY-INITIALIZED)
    (var-set initialized true)
    (try! (deposit MINIMUM-LIQUIDITY u0 NULL-ADDRESS))
    
    (print {
      action: "vault-initialize",
      caller: contract-caller,
      data: {
        vault: UNDERLYING,
        minimum-liquidity: MINIMUM-LIQUIDITY
      }
    })
    
    (ok true)))

;; -- Auth management --------------------------------------------------------

(define-public (set-authorized-contract (contract principal) (authorized bool))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-authorized-contract",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        contract: contract,
        authorized: authorized
      }
    })
    
    (ok (map-set authorized-contracts contract authorized))))

;; -- Flashloan permissions --------------------------------------------------

(define-public (set-flashloan-permissions 
    (account principal)
    (can-flashloan bool)
    (fee-exempt bool))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-flashloan-permissions",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        account: account,
        can-flashloan: can-flashloan,
        fee-exempt: fee-exempt
      }
    })
    
    (ok (map-set flashloan-permissions account {
      can-flashloan: can-flashloan,
      fee-exempt: fee-exempt
    }))))

(define-public (set-flashloan-permissions-many
    (updates (list 20 {account: principal, can-flashloan: bool, fee-exempt: bool})))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-flashloan-permissions-many",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        updates: updates,
        count: (len updates)
      }
    })
    
    (ok (map set-permission-single updates))))

;; -- Reserve configuration --------------------------------------------------

(define-public (set-cap-debt (val uint))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-cap-debt",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-value: (var-get cap-debt),
        new-value: val
      }
    })
    
    (var-set cap-debt val)
    (ok true)))

(define-public (set-cap-supply (val uint))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-cap-supply",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-value: (var-get cap-supply),
        new-value: val
      }
    })
    
    (var-set cap-supply val)
    (ok true)))

(define-public (set-fee-flash (val uint))
  (begin
    (try! (check-dao-auth))
    (asserts! (< val BPS) ERR-RESERVE-VALIDATION)
    
    (print {
      action: "vault-set-fee-flash",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-value: (var-get fee-flash),
        new-value: val
      }
    })
    
    (var-set fee-flash val)
    (ok true)))

(define-public (set-default-flashloan-permissions 
    (can-flashloan bool)
    (fee-exempt bool))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-default-flashloan-permissions",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        can-flashloan: can-flashloan,
        fee-exempt: fee-exempt
      }
    })
    
    (var-set default-flashloan-permissions {
      can-flashloan: can-flashloan,
      fee-exempt: fee-exempt
    })
    (ok true)))

(define-public (set-fee-reserve (val uint))
  (begin
    (try! (check-dao-auth))
    (asserts! (< val BPS) ERR-RESERVE-VALIDATION)
    (try! (accrue))
    
    (print {
      action: "vault-set-fee-reserve",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-value: (var-get fee-reserve),
        new-value: val
      }
    })
    
    (var-set fee-reserve val)
    (ok true)))

(define-public (set-points-util (points (list 8 uint)))
    (let (
          (packed (unwrap-panic (pack-u16 points (some BPS))))
          (pir (var-get points-ir)))
      (try! (check-dao-auth))
      (try! (accrue))
      (var-set points-ir { util: packed, rate: (get rate pir) })
      
      (print {
        action: "vault-set-points-util",
        caller: tx-sender,
        data: {
          vault: UNDERLYING,
          points: points
        }
      })
      
      (ok true)))

(define-public (set-points-rate (points (list 8 uint)))
    (let (
          (packed (unwrap-panic (pack-u16 points none)))
          (pir (var-get points-ir)))
      (try! (check-dao-auth))
      (try! (accrue))
      (var-set points-ir { util: (get util pir), rate: packed })
      
      (print {
        action: "vault-set-points-rate",
        caller: tx-sender,
        data: {
          vault: UNDERLYING,
          points: points
        }
      })
      
      (ok true)))

(define-public (set-token-uri (new-uri (optional (string-utf8 256))))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-token-uri",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-uri: (var-get token-uri),
        new-uri: new-uri
      }
    })
    
    (var-set token-uri new-uri)
    (ok true)))

;; -- Pause management -------------------------------------------------------

(define-public (set-pause-states (states {deposit: bool, redeem: bool, borrow: bool, repay: bool, accrue: bool, flashloan: bool}))
  (begin
    (try! (check-dao-auth))
    (let ((current (var-get pause-states))
          (was-paused (get accrue current))
          (now-paused (get accrue states)))
      ;; When pausing accrue, accrue first to capture pending interest
      (if (and (not was-paused) now-paused)
          (begin (try! (accrue)) false)
          false)
      ;; When unpausing accrue, jump last-update to now to skip paused period
      (if (and was-paused (not now-paused))
          (var-set last-update stacks-block-time)
          false)
      (var-set pause-states states)
      
      (print {
        action: "vault-set-pause-states",
        caller: tx-sender,
        data: {
          vault: UNDERLYING,
          states: states
        }
      })
      
      (ok true))))

;; -- Token operations -------------------------------------------------------

(define-public (transfer (amount uint) (from principal) (to principal) (memo (optional (buff 34))))
  (begin
    (try! (accrue))
    (asserts! (or (is-eq tx-sender from) (is-eq contract-caller from)) (err u4))
    (asserts! (not (is-eq current-contract to)) ERR-TOKENIZED-VAULT-PRECONDITIONS)
    (try! (ft-transfer? zft amount from to))
    (match memo to-print (print to-print) 0x)
    (ok true)))

;; -- Vault operations -------------------------------------------------------

(define-public (deposit (amount uint) (min-out uint) (recipient principal))
    (let (
      (states (var-get pause-states))
      (u (try! (accrue)))
      (account contract-caller)
      (CAP-SUPPLY (var-get cap-supply))
      (current-assets (var-get assets))
      (inkind (convert-to-shares-preview amount)))

    (asserts! (not (get deposit states)) ERR-PAUSED)
    (asserts! (var-get initialized) ERR-INIT)
    (asserts! (not (var-get in-flashloan)) ERR-REENTRANCY)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (>= inkind min-out) ERR-SLIPPAGE)
    (asserts! (<= (+ current-assets amount) CAP-SUPPLY) ERR-SUPPLY-CAP-EXCEEDED)

    (try! (receive-underlying amount account))
    (try! (ft-mint? zft inkind recipient))
    (var-set assets (+ current-assets amount))

    (print {
      action: "deposit",
      caller: contract-caller,
      data: {
        depositor: account,
        recipient: recipient,
        amount: amount,
        shares-minted: inkind,
        assets: (+ current-assets amount)
      }
    })

    (ok inkind)))

(define-public (redeem (amount uint) (min-out uint) (recipient principal))
  (let (
    (states (var-get pause-states))
    (u (try! (accrue)))
    (account contract-caller)
    (current-assets (var-get assets))
    (balance (get-balance-internal account))
    (balance-check (asserts! (>= balance amount) ERR-INSUFFICIENT-BALANCE))
    (available-assets (get-available-assets))
    (inkind (convert-to-assets-preview amount)))

  (asserts! (>= current-assets inkind) ERR-INSUFFICIENT-ASSETS)
  (asserts! (not (get redeem states)) ERR-PAUSED)
  (asserts! (> amount u0) ERR-AMOUNT-ZERO)
  (asserts! (> inkind u0) ERR-OUTPUT-ZERO)
  (asserts! (>= inkind min-out) ERR-SLIPPAGE)
  (asserts! (>= available-assets inkind) ERR-INSUFFICIENT-LIQUIDITY)

  (try! (ft-burn? zft amount account))
  (try! (send-underlying inkind recipient))
  (var-set assets (- current-assets inkind))

  (print {
    action: "redeem",
    caller: contract-caller,
    data: {
      redeemer: account,
      recipient: recipient,
      shares-burned: amount,
      amount-received: inkind,
      assets: (- current-assets inkind)
    }
  })

  (ok inkind)))

;; -- Lending operations -----------------------------------------------------

(define-public (accrue)
  (let ((states (var-get pause-states))
        (idx (var-get index))
        (lidx (var-get lindex)))
      (if (get accrue states)
          ;; PAUSED: Pass-through without reverting
          (ok { index: idx, lindex: lidx })
          ;; NOT PAUSED: Normal accrual logic
          (let ((next (next-index))
                (nliq (next-liquidity-index))
                (scaled-principal (var-get principal-scaled))
                (old-debt (mul-div-down scaled-principal idx INDEX-PRECISION))
                (new-debt (mul-div-down scaled-principal next INDEX-PRECISION))
                (debt-delta (if (> new-debt old-debt) (- new-debt old-debt) u0))
                (reserve-inc (mul-div-down debt-delta (var-get fee-reserve) BPS))
                (treasury-lp (if (> reserve-inc u0) (mul-div-down reserve-inc (total-supply) (- (total-assets-preview) reserve-inc)) u0)))
            (if (not (is-eq idx next))
                (var-set index next)
                false)
            (if (not (is-eq lidx nliq))
                (var-set lindex nliq)
                false)
            (if (> treasury-lp u0)
                (try! (ft-mint? zft treasury-lp .dao-treasury))
                false)
            (if (or (not (is-eq idx next)) (not (is-eq lidx nliq)))
                (var-set last-update stacks-block-time)
                false)
            (ok { index: next, lindex: nliq })))))

(define-public (system-borrow (amount uint) (receiver principal))
  (let (
      (states (var-get pause-states))
      (u (try! (accrue)))
      (CAP-DEBT (var-get cap-debt))
      (available-assets (get-available-assets))
      (scaled-principal (var-get principal-scaled))
      (idx (var-get index))
      (debt (total-debt))
      (scaled-amount (mul-div-up amount INDEX-PRECISION idx))
      (updated-scaled-principal (+ scaled-principal scaled-amount)))

    (try! (check-caller-auth))
    (asserts! (not (get borrow states)) ERR-PAUSED)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (<= amount available-assets) ERR-INSUFFICIENT-VAULT-LIQUIDITY)
    (asserts! (<= (+ debt amount) CAP-DEBT) ERR-DEBT-CAP-EXCEEDED)

    (var-set principal-scaled updated-scaled-principal)
    (var-set total-borrowed (+ (var-get total-borrowed) amount))
    (try! (send-underlying amount receiver))

    (print {
      action: "system-borrow",
      caller: contract-caller,
      data: {
        receiver: receiver,
        amount: amount,
        scaled-amount: scaled-amount,
        principal-scaled: updated-scaled-principal,
        total-borrowed: (var-get total-borrowed),
        index: idx
      }
    })

    (ok true)))

(define-public (system-repay (amount uint))
  (let (
        (states (var-get pause-states))
        (u (try! (accrue)))
        (scaled-principal (var-get principal-scaled))
        (idx (var-get index))
        (debt (total-debt))
        (total-borrowed-amount (var-get total-borrowed))
        (capped-amount (if (> amount debt) debt amount))
        (principal-reduction (calc-principal-ratio-reduction capped-amount scaled-principal debt))
        (capped-reduction (if (> principal-reduction scaled-principal) scaled-principal principal-reduction))
        (updated-scaled-principal (- scaled-principal capped-reduction))
        (principal-repaid (mul-div-down capped-amount total-borrowed-amount debt))
        (interest-paid (- capped-amount principal-repaid))
        (total-borrowed-new (if (> total-borrowed-amount principal-repaid) (- total-borrowed-amount principal-repaid) u0)))

    (try! (check-caller-auth))
    (asserts! (not (get repay states)) ERR-PAUSED)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)

    (try! (receive-underlying capped-amount tx-sender))
    (var-set principal-scaled updated-scaled-principal)
    (var-set total-borrowed total-borrowed-new)
    (var-set assets (+ (var-get assets) interest-paid))

    (print {
      action: "system-repay",
      caller: contract-caller,
      data: {
        amount-requested: amount,
        amount-repaid: capped-amount,
        principal-repaid: principal-repaid,
        interest-paid: interest-paid,
        principal-scaled: updated-scaled-principal,
        total-borrowed: total-borrowed-new,
        assets: (var-get assets),
        index: idx
      }
    })

    (ok true)))

(define-public (socialize-debt (scaled-amount uint))
  (let ((scaled-principal (var-get principal-scaled))
        (borrowed (var-get total-borrowed))
        (idx (var-get index))
        (current-assets (var-get assets))
        (current-lindex (var-get lindex))
        (old-total-assets (total-assets))
        (debt-reduction (mul-div-down scaled-amount idx INDEX-PRECISION))
        (principal-reduction (if (> scaled-principal u0)
                                (mul-div-down scaled-amount borrowed scaled-principal)
                                u0))
        ;; Write down lindex proportionally to loss in total-assets
        (new-lindex (if (and (> old-total-assets u0) (> old-total-assets debt-reduction))
                       (mul-div-down current-lindex (- old-total-assets debt-reduction) old-total-assets)
                       u0)))

    (try! (check-caller-auth))
    (asserts! (> scaled-amount u0) ERR-AMOUNT-ZERO)

    (var-set lindex new-lindex)
    (var-set principal-scaled (if (> scaled-principal scaled-amount) (- scaled-principal scaled-amount) u0))
    (var-set total-borrowed (if (> borrowed principal-reduction) (- borrowed principal-reduction) u0))
    (var-set assets (if (> current-assets principal-reduction) (- current-assets principal-reduction) u0))

    (print {
      action: "socialize-debt",
      caller: contract-caller,
      data: {
        scaled-amount: scaled-amount,
        debt-reduction: debt-reduction,
        principal-reduction: principal-reduction,
        old-lindex: current-lindex,
        new-lindex: new-lindex,
        old-total-assets: old-total-assets,
        principal-scaled: (if (> scaled-principal scaled-amount) (- scaled-principal scaled-amount) u0),
        total-borrowed: (if (> borrowed principal-reduction) (- borrowed principal-reduction) u0),
        index: idx
      }
    })

    (ok true)))

;; -- Flashloan --------------------------------------------------------------

(define-public (flashloan
    (amount uint)
    (funds-receiver (optional principal))
    (fc <flash-callback>)
    (data (optional (buff 4096))))
  (let ((states (var-get pause-states))
        (u (try! (accrue)))
        (funds-provider contract-caller)
        (funds-receiver-resolved (match funds-receiver recv recv contract-caller))
        (permissions (get-flashloan-permissions funds-provider))
        (can-flashloan (get can-flashloan permissions))
        (fee-exempt (get fee-exempt permissions))
        (fee-percentage (if fee-exempt u0 (var-get fee-flash)))
        (contract-balance (ubalance))
        (fee (mul-div-up amount fee-percentage BPS)))

    (asserts! (not (get flashloan states)) ERR-PAUSED)
    (asserts! (not (var-get in-flashloan)) ERR-REENTRANCY)

    ;; Whitelist check
    (asserts! can-flashloan ERR-FLASHLOAN-UNAUTHORIZED)

    (asserts! (is-standard funds-receiver-resolved) ERR-INVALID-ADDRESS)

    ;; Check liquidity
    (asserts! (<= amount contract-balance) ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY)

    ;; Set reentrancy guard
    (var-set in-flashloan true)

    ;; Send funds to receiver
    (try! (send-underlying amount funds-receiver-resolved))

    ;; Execute callback
    (try! (contract-call? fc callback amount fee data))

    ;; Pull back amount + fee from provider
    (try! (receive-underlying (+ amount fee) funds-provider))

    ;; Send fee to treasury if fee > 0
    (if (> fee u0)
      (try! (send-underlying fee .dao-treasury))
      false)

    ;; Clear reentrancy guard
    (var-set in-flashloan false)

    (print {
      action: "flashloan",
      caller: contract-caller,
      data: {
        funds-provider: funds-provider,
        funds-receiver: funds-receiver-resolved,
        amount: amount,
        fee: fee,
        assets: (var-get assets)
      }
    })

    (ok true)))
