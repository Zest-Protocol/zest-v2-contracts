;; @contract Mock StackingDAO Core stBTC (for simnet testing)
;; @description Simplified mock of stacking-dao-core-stbtc-v1.
;; Deposit sBTC -> mint stBTC at current ratio.
;; Withdraw stBTC -> burn stBTC, return sBTC at current ratio.
;; Ratio is configurable for testing yield scenarios.

(define-constant ERR-INSUFFICIENT-IDLE (err u900001))
(define-constant ERR-MIN-SHARES (err u900002))
(define-constant ERR-NOT-AUTHORIZED (err u900003))
(define-constant ERR-AMOUNT-ZERO (err u900004))
(define-constant ERR-DEPOSITS-DISABLED (err u900005))

(define-constant DENOMINATOR_8 u100000000)
(define-constant DEAD_SHARES u1000)

(define-data-var reserve-balance uint u0)
(define-data-var ratio uint DENOMINATOR_8)
(define-data-var owner principal tx-sender)
(define-data-var deposits-enabled bool true)

;; -------------------------------------
;; Read-only
;; -------------------------------------

(define-read-only (get-sbtc-per-stbtc)
  (var-get ratio))

(define-read-only (get-sbtc-per-stbtc-up)
  (var-get ratio))

(define-read-only (get-reserve-balance)
  (var-get reserve-balance))

(define-read-only (get-total-sbtc)
  (var-get reserve-balance))

;; -------------------------------------
;; Deposit: sBTC in -> stBTC out
;; -------------------------------------

(define-public (deposit (sbtc-amount uint) (min-shares-out uint))
  (let (
    (current-supply (unwrap-panic (contract-call? .stbtc-token get-total-supply)))
    (is-first (is-eq current-supply u0))
    (stbtc-amount
      (if is-first
        (- sbtc-amount DEAD_SHARES)
        (/ (* sbtc-amount DENOMINATOR_8) (var-get ratio))))
  )
    (asserts! (> sbtc-amount u0) ERR-AMOUNT-ZERO)
    (asserts! (var-get deposits-enabled) ERR-DEPOSITS-DISABLED)
    (asserts! (>= stbtc-amount min-shares-out) ERR-MIN-SHARES)

    (if is-first
      (try! (contract-call? .stbtc-token mint DEAD_SHARES current-contract))
      true)

    (try! (contract-call? .sbtc transfer sbtc-amount tx-sender current-contract none))
    (try! (contract-call? .stbtc-token mint stbtc-amount tx-sender))
    (var-set reserve-balance (+ (var-get reserve-balance) sbtc-amount))

    (print { action: "mock-deposit", data: { sbtc-amount: sbtc-amount, stbtc-amount: stbtc-amount } })
    (ok stbtc-amount)))

;; -------------------------------------
;; Withdraw idle: stBTC in -> sBTC out
;; The caller burns their stBTC; we send sBTC back from our reserve.
;; -------------------------------------

(define-public (withdraw-idle (stbtc-amount uint))
  (let (
    (receiver tx-sender)
    (r (var-get ratio))
    (sbtc-amount (/ (* stbtc-amount r) DENOMINATOR_8))
  )
    (asserts! (> stbtc-amount u0) ERR-AMOUNT-ZERO)
    (asserts! (>= (var-get reserve-balance) sbtc-amount) ERR-INSUFFICIENT-IDLE)

    ;; Burn stBTC from user
    (try! (contract-call? .stbtc-token burn stbtc-amount receiver))
    ;; Send sBTC from this contract to user
    (try! (as-contract? ((with-ft .sbtc "sbtc" sbtc-amount))
      (try! (contract-call? .sbtc transfer sbtc-amount current-contract receiver none))))
    (var-set reserve-balance (- (var-get reserve-balance) sbtc-amount))

    (print { action: "mock-withdraw-idle", data: { stbtc-amount: stbtc-amount, sbtc-amount: sbtc-amount } })
    (ok { sbtc-user: sbtc-amount, sbtc-fee: u0 })))

;; -------------------------------------
;; Admin: set ratio (simulates yield accrual)
;; Mints sBTC to the reserve to back the higher ratio.
;; -------------------------------------

(define-public (set-ratio (new-ratio uint))
  (begin
    (asserts! (is-eq tx-sender (var-get owner)) ERR-NOT-AUTHORIZED)
    (let (
      (stbtc-supply (unwrap-panic (contract-call? .stbtc-token get-total-supply)))
      (needed-backing (/ (* stbtc-supply new-ratio) DENOMINATOR_8))
      (current-backing (var-get reserve-balance))
    )
      (if (> needed-backing current-backing)
        (let ((deficit (- needed-backing current-backing)))
          (try! (contract-call? .sbtc mint deficit current-contract))
          (var-set reserve-balance (+ current-backing deficit)))
        true)
      (var-set ratio new-ratio)
      (print { action: "mock-set-ratio", data: { new-ratio: new-ratio } })
      (ok true))))

;; Test-only: toggle deposits (simulates StackingDAO shutdown-deposits).
(define-public (set-deposits-enabled (enabled bool))
  (begin
    (asserts! (is-eq tx-sender (var-get owner)) ERR-NOT-AUTHORIZED)
    (var-set deposits-enabled enabled)
    (ok true)))
