;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; market-vault - 0
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ============================================================================
;; TRAITS
;; ============================================================================
(use-trait ft-trait .ft-trait.ft-trait)

;; ============================================================================
;; CONSTANTS
;; ============================================================================

;; -- Base configuration
(define-constant PRECISION u100000000)
(define-constant BPS u10000)
(define-constant ZEST-STX-WRAPPER-CONTRACT .wstx)

;; -- Pack utilities (bit manipulation)
(define-constant DEBT-OFFSET u64)
(define-constant ITER-UINT-64 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63))
(define-constant ITER-UINT-64-OFFSET-64 (list u64 u65 u66 u67 u68 u69 u70 u71 u72 u73 u74 u75 u76 u77 u78 u79 u80 u81 u82 u83 u84 u85 u86 u87 u88 u89 u90 u91 u92 u93 u94 u95 u96 u97 u98 u99 u100 u101 u102 u103 u104 u105 u106 u107 u108 u109 u110 u111 u112 u113 u114 u115 u116 u117 u118 u119 u120 u121 u122 u123 u124 u125 u126 u127))

;; -- Max values
(define-constant MAX-U128 u340282366920938463463374607431768211455)

;; ============================================================================
;; ERRORS (600xxx prefix for market-vault)
;; ============================================================================
(define-constant ERR-AUTH (err u600001))
(define-constant ERR-PAUSED (err u600002))
(define-constant ERR-AMOUNT-ZERO (err u600003))
(define-constant ERR-INSUFFICIENT-COLLATERAL (err u600004))
(define-constant ERR-INSUFFICIENT-DEBT (err u600005))
(define-constant ERR-UNTRACKED-ACCOUNT (err u600006))
(define-constant ERR-COLLATERAL-TRANSFER-FAILED (err u600007))

;; ============================================================================
;; DATA VARS
;; ============================================================================

;; -- Implementation
(define-data-var impl principal tx-sender)

;; -- Pausability
(define-data-var pause-states
  {
    collateral-add: bool,
    collateral-remove: bool,
    debt-add: bool,
    debt-remove: bool
  }
  {
    collateral-add: false,
    collateral-remove: false,
    debt-add: false,
    debt-remove: false
  })

;; -- Obligation tracking
(define-data-var nonce uint u0)

;; ============================================================================
;; MAPS
;; ============================================================================

;; -- Obligation registry
(define-map registry
            uint
            {
              id: uint,
              account: principal,
              mask: uint,
              last-update: uint,
              last-borrow-block: uint,
            })
(define-map reverse principal uint)

;; -- Collateral
(define-map collateral { id: uint, asset: uint } uint)

;; -- Debt
(define-map debt { id: uint, asset: uint } { scaled: uint })

;; ============================================================================
;; PRIVATE FUNCTIONS
;; ============================================================================

;; -- Pack utilities ---------------------------------------------------------

(define-private (mask-pos (pos uint) (is-collateral bool))
  (if is-collateral pos (+ DEBT-OFFSET pos)))

(define-private (mask-update (base uint) (pos uint) (is-collateral bool) (is-insert bool))
  (let ((abs (mask-pos pos is-collateral)))
    (if is-insert
        (bit-or base (pow u2 abs))
        (bit-and base (bit-not (pow u2 abs))))))

(define-private (subset (sub uint) (super uint))
  (let ((overlap (bit-and sub super)))
    (is-eq sub overlap)))

(define-private (mask-to-list-internal (mask uint) (offset uint) (iter-list (list 64 uint)))
  (let ((init { mask: mask, offset: offset, result: (list) })
        (out (fold mask-to-list-iter iter-list init)))
    (get result out)))

(define-private (mask-to-list-iter (p uint) (acc {mask: uint, offset: uint, result: (list 64 uint)}))
  (let ((mask (get mask acc))
        (offset (get offset acc)))
    (if (> (bit-and mask (pow u2 p)) u0)
      ;; Bit is set - add to result
      (let ((result (get result acc))
            (value (if (is-eq offset u0) p (- p offset)))
            (new (as-max-len? (append result value) u64)))
        (merge acc { result: (unwrap-panic new) }))
      ;; Bit not set - skip
      acc)))

(define-private (mask-to-list-collateral (mask uint))
  (mask-to-list-internal mask u0 ITER-UINT-64))

(define-private (mask-to-list-debt (mask uint))
  (mask-to-list-internal mask u64 ITER-UINT-64-OFFSET-64))

;; -- Auth helpers -----------------------------------------------------------

(define-private (check-dao-auth)    
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))

(define-private (check-impl-auth)
  (ok (asserts! (is-eq contract-caller (var-get impl)) ERR-AUTH)))

;; -- Obligation management --------------------------------------------------

(define-private (increment)
  (let ((curr (var-get nonce))
        (next (+ curr u1)))
    (var-set nonce next)
    curr))

(define-private (resolve-or-create (account principal))
  (let ((id? (map-get? reverse account)))
    (match id?
      id (lookup id)
         (create account)
    )))

(define-private (create (account principal))
  {
    id: (increment),
    account: account,
    mask: u0,
    last-update: stacks-block-time,
    last-borrow-block: u0
  })

(define-private (insert (params
                        {
                          id: uint,
                          account: principal,
                          mask: uint,
                          last-update: uint,
                          last-borrow-block: uint,
                        }))
  (let ((id (get id params)))
    (map-set registry id params)
    (map-set reverse (get account params) id)))

(define-private (refresh (mask uint)) { mask: mask, last-update: stacks-block-time })

;; -- Collateral helpers -----------------------------------------------------

(define-private (relevant (asset uint) (enabled-mask uint) (c bool))
  (let ((position (mask-pos asset c))
        (mask (bit-or u0 (pow u2 position))))
    (subset mask enabled-mask)))

(define-private (iter-lookup-collateral
                (asset uint)
                (acc {
                    id: uint,
                    result: (list 64 { aid: uint, amount: uint}),
                    enabled-mask: uint
                }))
  (let ((mask (get enabled-mask acc))
        (relevant? (asserts! (relevant asset mask true) acc))
        (user-id (get id acc))
        (value (get-collateral user-id asset))
        (entry { aid: asset, amount: value }))
    {
      id: user-id,
      result: (unwrap-panic (as-max-len? (append (get result acc) entry) u64)),
      enabled-mask: mask
    }))

(define-private (add-user-collateral (user-id uint) (asset-id uint) (amount uint))
  (let ((key { id: user-id, asset: asset-id })
        (collateral-amount (default-to u0 (map-get? collateral key))) ;; graceful default
        (updated-collateral-amount (+ collateral-amount amount)))
      (map-set collateral key updated-collateral-amount)
      updated-collateral-amount))

(define-private (remove-user-collateral (user-id uint) (asset-id uint) (amount uint))
  (let ((key { id: user-id, asset: asset-id })
        (collateral-amount (default-to u0 (map-get? collateral key))) ;; graceful default
        (legal? (asserts! (<= amount collateral-amount) ERR-INSUFFICIENT-COLLATERAL))
        (updated-collateral-amount (- collateral-amount amount)))

      (if (is-eq updated-collateral-amount u0)
          (map-delete collateral key)
          (map-set collateral key updated-collateral-amount))
      (ok updated-collateral-amount)))

;; -- Debt helpers -----------------------------------------------------------

(define-private (iter-lookup-debt
                (asset uint)
                (acc {
                    id: uint,
                    result: (list 64 { aid: uint, scaled: uint}),
                    enabled-mask: uint
                  })
               )
  (let ((mask (get enabled-mask acc))
        (relevant? (asserts! (relevant asset mask false) acc))
        (user-id (get id acc))
        (value (get-debt user-id asset)) ;; unreachable
        (entry (merge value { aid: asset })))
    {
      id: user-id,
      result: (unwrap-panic (as-max-len? (append (get result acc) entry) u64)),
      enabled-mask: mask
    }))

(define-private (add-user-scaled-debt (user-id uint) (asset-id uint) (amount uint))
  (let ((key { id: user-id, asset: asset-id })
        (current-scaled-debt (default-to u0 (get scaled (map-get? debt key)))) ;; graceful default to u0
        (updated-scaled-debt (+ current-scaled-debt amount)))
      (map-set debt key { scaled: updated-scaled-debt })
      updated-scaled-debt))

(define-private (remove-user-scaled-debt (user-id uint) (asset-id uint) (amount uint))
  (let ((key { id: user-id, asset: asset-id })
        (current-scaled-debt (default-to u0 (get scaled (map-get? debt key)))) ;; graceful default to u0
        (legal? (asserts! (<= amount current-scaled-debt) ERR-INSUFFICIENT-DEBT))
        (updated-scaled-debt (- current-scaled-debt amount)))
    (if (is-eq updated-scaled-debt u0)
        (map-delete debt key)
        (map-set debt key { scaled: updated-scaled-debt }))
    (ok updated-scaled-debt)))

;; -- Token transfer ---------------------------------------------------------

(define-private (receive-tokens (asset <ft-trait>) (amount uint) (account principal))
  (contract-call? asset transfer amount account current-contract none))

(define-private (send-tokens (asset <ft-trait>) (amount uint) (account principal))
  (let ((asset-contract (contract-of asset)))
    (if (is-eq asset-contract ZEST-STX-WRAPPER-CONTRACT)
      (as-contract? ((with-stx amount))
          (try! (contract-call? asset transfer amount tx-sender account none)))
      (as-contract? ((with-ft asset-contract "*" amount))
          (try! (contract-call? asset transfer amount tx-sender account none))))))

;; ============================================================================
;; READ-ONLY FUNCTIONS
;; ============================================================================

;; -- Implementation getters -------------------------------------------------

(define-read-only (get-impl) (var-get impl))

;; -- Pause getters ----------------------------------------------------------

(define-read-only (get-pause-states) (ok (var-get pause-states)))

;; -- Obligation getters -----------------------------------------------------

(define-read-only (get-nr) (var-get nonce))

(define-read-only (lookup (id uint))
  (unwrap-panic (map-get? registry id)))

(define-read-only (resolve (account principal))
  (let ((id (unwrap-panic (map-get? reverse account))))
    (lookup id)))

(define-read-only (resolve-safe (account principal))
  (let ((id (unwrap! (map-get? reverse account) ERR-UNTRACKED-ACCOUNT)))
    (ok (unwrap! (map-get? registry id) ERR-UNTRACKED-ACCOUNT))))

;; -- Collateral getters -----------------------------------------------------

(define-read-only (get-collateral (id uint) (asset uint))
  (unwrap-panic (map-get? collateral { id: id, asset: asset })))

(define-read-only (lookup-collateral (id uint) (mask uint) (enabled-mask uint))
  (let ((init { id: id, result: (list), enabled-mask: enabled-mask })
        (iter (mask-to-list-collateral mask))
        (out (fold iter-lookup-collateral iter init)))
    (get result out)))

;; -- Debt getters -----------------------------------------------------------

(define-read-only (get-account-scaled-debt (account principal) (asset-id uint))
  (let ((account-entry (resolve account)))
    (debt-scaled (get id account-entry) asset-id)))

(define-read-only (get-debt (id uint) (asset uint))
  (unwrap-panic (map-get? debt { id: id, asset: asset })))

(define-read-only (debt-scaled (id uint) (asset uint))
  (default-to u0 (get scaled (map-get? debt { id: id, asset: asset }))))

(define-read-only (lookup-debt (id uint) (mask uint) (enabled-mask uint))
  (let ((init { id: id, result: (list), enabled-mask: enabled-mask })
        (iter (mask-to-list-debt mask))
        (out (fold iter-lookup-debt iter init)))
    (get result out)))

;; -- Position getters -------------------------------------------------------

(define-read-only (get-position (account principal) (enabled-mask uint))
  (match (map-get? reverse account)
    id (let ((obligation (lookup id))
             (user-id (get id obligation))
             (mask (get mask obligation))
             (is-collateral (lookup-collateral user-id mask enabled-mask))
             (is-debt (lookup-debt user-id mask MAX-U128)))
         (ok (merge obligation { collateral: is-collateral, debt: is-debt })))
    (err u600006)))

;; ============================================================================
;; PUBLIC FUNCTIONS
;; ============================================================================

;; -- DAO configuration ------------------------------------------------------

(define-public (set-impl (new principal))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "market-vault-set-impl",
      caller: tx-sender,
      data: {
        old-impl: (var-get impl),
        new-impl: new
      }
    })
    
    (var-set impl new)
    (ok true)))

(define-public (set-pause-states (states {collateral-add: bool, collateral-remove: bool, debt-add: bool, debt-remove: bool}))
  (begin
    (try! (check-dao-auth))
    (var-set pause-states states)
    
    (print {
      action: "market-vault-set-pause-states",
      caller: tx-sender,
      data: {
        states: states
      }
    })
    
    (ok true)))

;; -- Collateral operations --------------------------------------------------

(define-public (collateral-add (account principal) (amount uint) (ft <ft-trait>) (asset-id uint))
  (let ((states (var-get pause-states))
        (entry (resolve-or-create account))
        (user-id (get id entry))
        (mask (get mask entry))
        (updated-mask (mask-update mask asset-id true true)) ;; collateral, insert
        (updated-entry (merge entry (refresh updated-mask)))
        (result (add-user-collateral user-id asset-id amount)))

    (try! (check-impl-auth))
    (asserts! (not (get collateral-add states)) ERR-PAUSED)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)

    (try! (receive-tokens ft amount account))
    
    (insert updated-entry)

    (print {
      action: "collateral-add",
      caller: contract-caller,
      data: {
        account: account,
        asset-id: asset-id,
        amount: amount,
        updated-collateral-amount: result,
        mask-before: mask,
        mask-after: updated-mask
      }
    })
      
    (ok result)))

(define-public (collateral-remove (account principal) (amount uint) (ft <ft-trait>) (asset-id uint) (recipient principal))
  (let ((states (var-get pause-states))
        (entry (resolve account))
        (user-id (get id entry))
        (mask (get mask entry))
        (remaining (try! (remove-user-collateral user-id asset-id amount)))
        (updated-mask (if (is-eq remaining u0)
                        (mask-update mask asset-id true false) ;; collateral, remove
                        mask))
        (updated-entry (merge entry (refresh updated-mask))))

    (try! (check-impl-auth))
    (asserts! (not (get collateral-remove states)) ERR-PAUSED)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)

    (insert updated-entry)
    (try! (send-tokens ft amount recipient))
    
    (print {
      action: "collateral-remove",
      caller: contract-caller,
      data: {
        account: account,
        recipient: recipient,
        asset-id: asset-id,
        amount: amount,
        updated-collateral-amount: remaining,
        mask-before: mask,
        mask-after: updated-mask
      }
    })
    
    (ok remaining)))

;; -- Debt operations --------------------------------------------------------

(define-public (debt-add-scaled (account principal) (scaled-amount uint) (asset-id uint))
  (let ((states (var-get pause-states))
        (entry (resolve-or-create account))
        (user-id (get id entry))
        (mask (get mask entry))
        (update-mask (mask-update mask asset-id false true)) ;; debt, insert
        ;; Oracle frontrunning protection: record current block when borrowing
        (updated-entry (merge entry { mask: update-mask, last-update: stacks-block-time, last-borrow-block: stacks-block-height }))
        (result (add-user-scaled-debt user-id asset-id scaled-amount)))

    (try! (check-impl-auth))
    (asserts! (not (get debt-add states)) ERR-PAUSED)
    (asserts! (> scaled-amount u0) ERR-AMOUNT-ZERO)

    (insert updated-entry)

    (print {
      action: "debt-add-scaled",
      caller: contract-caller,
      data: {
        account: account,
        asset-id: asset-id,
        scaled-amount: scaled-amount,
        updated-scaled-debt: result,
        mask-before: mask,
        mask-after: update-mask
      }
    })
      
    (ok result)))

(define-public (debt-remove-scaled (account principal) (scaled-amount uint) (asset-id uint))
  (let ((states (var-get pause-states))
        (entry (resolve account))
        (user-id (get id entry))
        (mask (get mask entry))
        (remaining (try! (remove-user-scaled-debt user-id asset-id scaled-amount)))
        (nmask (if (is-eq remaining u0)
                      (mask-update mask asset-id false false) ;; debt, remove
                      mask))
        (updated-entry (merge entry (refresh nmask))))

    (try! (check-impl-auth))
    (asserts! (not (get debt-remove states)) ERR-PAUSED)
    (asserts! (> scaled-amount u0) ERR-AMOUNT-ZERO)

    (insert updated-entry)
    
    (print {
      action: "debt-remove-scaled",
      caller: contract-caller,
      data: {
        account: account,
        asset-id: asset-id,
        scaled-amount: scaled-amount,
        updated-scaled-debt: remaining,
        mask-before: mask,
        mask-after: nmask
      }
    })
    
    (ok remaining)))
