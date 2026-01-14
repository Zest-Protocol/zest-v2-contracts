;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; assets
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ============================================================================
;; TRAITS
;; ============================================================================
(use-trait ft-trait .ft-trait.ft-trait)

;; ============================================================================
;; CONSTANTS
;; ============================================================================

;; -- Pack utilities (bit manipulation & buffer conversion)
(define-constant DEBT-OFFSET u64)
(define-constant U128-BUFF-LEN u17)
(define-constant U8-BUFF-OFFSET u16)
(define-constant U32-BUFF-OFFSET u13)
(define-constant ITER-UINT-64 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63))

;; -- Asset limits
(define-constant MAX-ASSETS u64)

;; ============================================================================
;; ERRORS (710xxx prefix for assets)
;; ============================================================================
(define-constant ERR-AUTH (err u710001))
(define-constant ERR-LIMIT-REACHED (err u710002))
(define-constant ERR-ALREADY-REGISTERED (err u710003))
(define-constant ERR-ALREADY-ENABLED (err u710004))
(define-constant ERR-NOT-ENABLED (err u710005))
(define-constant ERR-INVALID-STALENESS (err u710006))
(define-constant ERR-INVALID-ASSET (err u710007))
(define-constant ERR-INVALID-ID (err u710008))

;; ============================================================================
;; DATA VARS
;; ============================================================================
(define-data-var nonce uint u0)
(define-data-var bitmap uint u0)

;; ============================================================================
;; MAPS
;; ============================================================================
(define-map registry
            (buff 1)
            {
              id: (buff 1),
              addr: principal,
              decimals: uint,
              oracle: {
                type: (buff 1),
                ident: (buff 32),
                callcode: (optional (buff 1)),
                max-staleness: uint
              }})
(define-map reverse principal (buff 1))

;; ============================================================================
;; PRIVATE FUNCTIONS
;; ============================================================================

;; -- Pack utilities ---------------------------------------------------------

(define-private (uint-to-buff1 (v uint))
  (let ((check (unwrap-panic (if (< v u256) (ok true) (err u1))))
        (as-buff (unwrap-panic (to-consensus-buff? v)))
        (ss (unwrap-panic (slice? as-buff U8-BUFF-OFFSET U128-BUFF-LEN))))
    (unwrap-panic (as-max-len? ss u1))))

(define-private (subset (sub uint) (super uint))
  (let ((overlap (bit-and sub super)))
    (is-eq sub overlap)))

(define-private (mask-pos (pos uint) (collateral bool))
  (if (is-eq collateral true)
      pos
      (+ DEBT-OFFSET pos)))

(define-private (uint-to-list-u64 (val uint))
  (let ((init { val: val, result: (list) })
        (out (fold iter-uint-to-list-u64 ITER-UINT-64 init)))
    (get result out)))

(define-private (iter-uint-to-list-u64 (i uint) (acc { val: uint, result: (list 64 uint) }))
  (let ((val (get val acc))
        (result (get result acc))
        (next (as-max-len? (append result val) u64)))
    { val: val, result: (unwrap-panic next) }))

;; -- Token helpers ----------------------------------------------------------

(define-private (call-get-decimals (ft <ft-trait>))
  (unwrap-panic (contract-call? ft get-decimals)))

;; -- Auth helpers -----------------------------------------------------------

(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))

;; -- Nonce management -------------------------------------------------------

(define-private (increment)
  (let ((curr (var-get nonce))
        (next (+ curr u1)))
    (var-set nonce next)
    curr))

;; -- Status helpers ---------------------------------------------------------

(define-private (unwrap-status (id uint) (enabled-mask uint))
  (unwrap-panic (status id enabled-mask))
)

(define-private (status (id uint) (enabled-mask uint))
  (let ((entry (try! (lookup id)))
        (debt-position (mask-pos id false))
        (is-collateral (> (bit-and enabled-mask (pow u2 id)) u0)) ;; 0 offset
        (is-debt (> (bit-and enabled-mask (pow u2 debt-position)) u0)))
    (ok (merge entry { id: id, collateral: is-collateral, debt: is-debt }))))

;; ============================================================================
;; READ-ONLY FUNCTIONS
;; ============================================================================

;; -- Nonce getters ----------------------------------------------------------

(define-read-only (get-nonce) (ok (var-get nonce)))

;; -- Registry getters -------------------------------------------------------

(define-read-only (get-reverse (asset principal))
  (ok (unwrap! (map-get? reverse asset) ERR-INVALID-ASSET)))

(define-read-only (find (asset principal))
  (let ((id (try! (get-reverse asset))))
    (ok (unwrap! (map-get? registry id) ERR-INVALID-ID))))

(define-read-only (lookup (id uint))
  (let ((final-id (uint-to-buff1 id)))
    (ok (unwrap! (map-get? registry final-id) ERR-INVALID-ID))))

;; -- Bitmap getters ---------------------------------------------------------

(define-read-only (get-bitmap) (var-get bitmap))

(define-read-only (enabled (mask uint))
  (let ((enabled-mask (get-bitmap)))
    (subset mask enabled-mask)
  ))

;; -- Status getters ---------------------------------------------------------

(define-read-only (get-status (id uint))
  (let ((enabled-mask (get-bitmap)))
    (status id enabled-mask)))

(define-read-only (get-asset-status (address principal))
  (let ((id (try! (get-reverse address)))
        (final-id (buff-to-uint-be id)))
    (get-status final-id)))

(define-read-only (status-multi (ids (list 64 uint)))
 (let ((enabled-mask (get-bitmap))
       (mask (uint-to-list-u64 enabled-mask)))
    (if (is-eq (len ids) u0) (list ) (map unwrap-status ids mask))))

;; ============================================================================
;; PUBLIC FUNCTIONS
;; ============================================================================

;; -- Asset management -------------------------------------------------------

(define-public (insert
                (ft <ft-trait>)
                (oracle-data {
                  type: (buff 1),
                  ident: (buff 32),
                  callcode: (optional (buff 1)),
                  max-staleness: uint
                }))
  (let ((id (increment))
        (asset-address (contract-of ft))
        (final-id (uint-to-buff1 id))
        (staleness (get max-staleness oracle-data))
        (entry {
          id: final-id,
          addr: asset-address,
          decimals: (call-get-decimals ft),
          oracle: oracle-data,
        }))

      (try! (check-dao-auth))
      (asserts! (<= (var-get nonce) MAX-ASSETS) ERR-LIMIT-REACHED)
      (asserts! (> staleness u0) ERR-INVALID-STALENESS)

      (asserts! (and
          (map-insert registry final-id entry)
          (map-insert reverse asset-address final-id)
        ) ERR-ALREADY-REGISTERED)

      (print {
        action: "asset-insert",
        caller: tx-sender,
        data: {
          asset-id: id,
          asset-address: asset-address,
          decimals: (call-get-decimals ft),
          oracle-type: (get type oracle-data),
          oracle-ident: (get ident oracle-data),
          oracle-callcode: (get callcode oracle-data),
          max-staleness: staleness
        }
      })

      (ok id)))

(define-public (update
                (asset principal)
                (oracle-data {
                  type: (buff 1),
                  ident: (buff 32),
                  callcode: (optional (buff 1)),
                  max-staleness: uint
                }))
  (let ((entry (try! (find asset)))
        (asset-id (get id entry))
        (staleness (get max-staleness oracle-data))
        (updated-entry (merge entry { oracle: oracle-data })))

    (try! (check-dao-auth))
    (asserts! (> staleness u0) ERR-INVALID-STALENESS)

    (map-set registry asset-id updated-entry)
    
    (print {
      action: "asset-update",
      caller: tx-sender,
      data: {
        asset-address: asset,
        asset-id: asset-id,
        oracle-type: (get type oracle-data),
        oracle-ident: (get ident oracle-data),
        oracle-callcode: (get callcode oracle-data),
        max-staleness: staleness
      }
    })
    
    (ok true)
  ))

;; -- Bitmap management ------------------------------------------------------

(define-public (enable (asset principal) (collateral bool))
  (let ((id (try! (get-reverse asset)))
        (final-id (buff-to-uint-be id))
        (enabled-mask (get-bitmap))
        (position (mask-pos final-id collateral))
        (updated-bitmap (bit-or enabled-mask (pow u2 position))))

      (try! (check-dao-auth))
      (asserts! (not (is-eq enabled-mask updated-bitmap)) ERR-ALREADY-ENABLED)
      (var-set bitmap updated-bitmap)
      
      (print {
        action: "asset-enable",
        caller: tx-sender,
        data: {
          asset-address: asset,
          asset-id: final-id,
          is-collateral: collateral,
          bitmap-before: enabled-mask,
          bitmap-after: updated-bitmap
        }
      })
      
      (ok true)
    ))

(define-public (disable (asset principal) (collateral bool))
  (let ((id (try! (get-reverse asset)))
        (final-id (buff-to-uint-be id))
        (enabled-mask (get-bitmap))
        (position (mask-pos final-id collateral))
        (updated-bitmap (bit-and enabled-mask (bit-not (pow u2 position)))))

      (try! (check-dao-auth))
      (asserts! (not (is-eq enabled-mask updated-bitmap)) ERR-NOT-ENABLED)
      (var-set bitmap updated-bitmap)
      
      (print {
        action: "asset-disable",
        caller: tx-sender,
        data: {
          asset-address: asset,
          asset-id: final-id,
          is-collateral: collateral,
          bitmap-before: enabled-mask,
          bitmap-after: updated-bitmap
        }
      })
      
      (ok true)
    ))
