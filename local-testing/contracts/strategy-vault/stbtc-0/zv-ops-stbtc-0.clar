;; @contract Strategy Vault Ops (stBTC Loop)
;; @description Upgradeable operations contract. Borrower on Zest Market (as-contract)
;; and depositor on StackingDAO. Every mutating op sweeps residuals back to sv-state so ops
;; holds no persistent balance -- now operational hygiene, not a solvency assumption: NAV
;; INCLUDES ops balances (a donation can't be hidden then captured). Permissionless sweeps
;; recover any donated dust.
;;
;; Strategy: deposit stBTC collateral on Zest -> borrow sBTC -> deposit sBTC on
;; StackingDAO -> receive stBTC (yield via ratio appreciation).

(use-trait ft-trait .ft-trait.ft-trait)

(impl-trait .zv-traits.strategy-ops)

;;-------------------------------------
;; Constants
;;-------------------------------------

(define-constant COLLATERAL-TOKEN .stbtc-token)
;; @mainnet: (define-constant COLLATERAL-TOKEN 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.stbtc-token)
(define-constant BORROW-TOKEN .sbtc)
(define-constant COLLATERAL-VAULT .vault-stbtc)
;; @mainnet: (define-constant STACKING-DAO-CORE 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.stacking-dao-core-stbtc-v1)
(define-constant STACKING-DAO-CORE .stacking-dao-mock)

(define-constant ERR-NOT-AUTHORIZED (err u880001))
(define-constant ERR-PAUSED (err u880002))
(define-constant ERR-TRANSFER-FAILED (err u880003))
(define-constant ERR-WRONG-TOKEN (err u880004))
(define-constant ERR-NOTHING-TO-SWEEP (err u880005))
(define-constant ERR-BAD-CONVERSION (err u880006))
(define-constant ERR-DEBT-REMAINS (err u880007))
(define-constant ERR-OVER-UNSTACK (err u880008))

;; Enforced (not caller-supplied) minimum stBTC->sBTC conversion on every withdraw-idle.
(define-constant MIN-UNWIND-RATE-BPS u9500)
(define-constant BPS u10000)
(define-constant SBTC-ASSET-ID u2)
(define-constant INDEX-PRECISION u1000000000000)  ;; 1e12 (borrow index)
;; Unwind cap: bound sBTC produced against the LIVE ACCRUED debt. Full close allows up
;; to 2.0x (surplus restacks); the partial path is capped at the debt exactly.
(define-constant MAX-CLOSE-OVERSHOOT-BPS u20000)  ;; 200%

;;-------------------------------------
;; Live accrued debt (ceil(scaled * next-index / 1e12))
;;-------------------------------------

(define-private (current-debt-actual)
  (let ((scaled (match (contract-call? .market-vault resolve-safe current-contract)
                  entry (contract-call? .market-vault debt-scaled (get id entry) SBTC-ASSET-ID)
                  err-code u0)))
    (if (> scaled u0)
      (/ (+ (* scaled (unwrap-panic (contract-call? .vault-sbtc get-next-index)))
            (- INDEX-PRECISION u1)) INDEX-PRECISION)
      u0)))

(define-private (current-debt-scaled)
  (match (contract-call? .market-vault resolve-safe current-contract)
    entry (contract-call? .market-vault debt-scaled (get id entry) SBTC-ASSET-ID)
    err-code u0))

;; Sweep any sBTC dust in ops back to sv-state as sBTC (NAV counts state sBTC).
(define-private (sweep-sbtc-residual)
  (let ((residual (unwrap-panic (contract-call? .sbtc get-balance current-contract))))
    (if (> residual u0)
      (as-contract? ((with-ft BORROW-TOKEN "sbtc" residual))
        (try! (contract-call? .zv-state-stbtc-0 receive-sbtc-from-ops .sbtc residual tx-sender)))
      (ok true))))

;;-------------------------------------
;; Open Position
;;-------------------------------------

(define-public (open-position
    (collateral-ft <ft-trait>)
    (borrow-ft <ft-trait>)
    (collateral-amount uint)
    (borrow-amount uint)
    (price-feeds (optional (list 3 (buff 8192)))))
  (let ((coll-addr (contract-of collateral-ft))
        (borr-addr (contract-of borrow-ft)))
    (asserts! (contract-call? .zv-state-stbtc-0 is-trader contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (contract-call? .zv-state-stbtc-0 get-trading-enabled) ERR-PAUSED)
    (asserts! (is-eq coll-addr COLLATERAL-TOKEN) ERR-WRONG-TOKEN)
    (asserts! (is-eq borr-addr BORROW-TOKEN) ERR-WRONG-TOKEN)
    (try! (contract-call? .zv-state-stbtc-0 transfer-collateral-to-ops collateral-ft collateral-amount))
    (try! (as-contract? ((with-ft coll-addr "*" collateral-amount) (with-ft COLLATERAL-VAULT "*" collateral-amount))
      (try! (contract-call? .market supply-collateral-add collateral-ft collateral-amount u0 price-feeds))))
    (try! (as-contract? ()
      (try! (contract-call? .market borrow borrow-ft borrow-amount none price-feeds))))
    (let ((stbtc-received (try! (as-contract? ((with-ft BORROW-TOKEN "sbtc" borrow-amount))
      (try! (contract-call? STACKING-DAO-CORE deposit borrow-amount u0))))))
      (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" stbtc-received))
        (try! (contract-call? .zv-state-stbtc-0 receive-yield-collateral collateral-ft stbtc-received tx-sender))))
      (print { action: "sv-open-position", user: contract-caller,
               data: { collateral: collateral-amount, borrow: borrow-amount, stbtc-received: stbtc-received } })
      (ok true))))

;;-------------------------------------
;; Close Position (one-shot FULL close, strand-free)
;;   1. unstack repay-amount; enforce MIN-UNWIND-RATE-BPS conversion floor
;;   2. #1 cap: reject sbtc-out > 2.0x LIVE ACCRUED debt
;;   3. repay all output (market caps at debt); require zero remaining debt
;;   4. restack surplus back to state; remove collateral to state
;;-------------------------------------

(define-public (close-position
    (borrow-ft <ft-trait>)
    (vault-ft <ft-trait>)
    (repay-amount uint)
    (collateral-amount uint)
    (price-feeds (optional (list 3 (buff 8192)))))
  (let ((borr-addr (contract-of borrow-ft))
        (vault-addr (contract-of vault-ft)))
    (asserts! (contract-call? .zv-state-stbtc-0 is-trader contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq borr-addr BORROW-TOKEN) ERR-WRONG-TOKEN)
    (asserts! (is-eq vault-addr COLLATERAL-VAULT) ERR-WRONG-TOKEN)
    (try! (contract-call? .zv-state-stbtc-0 transfer-collateral-to-ops .stbtc-token repay-amount))
    (let ((sbtc-out (get sbtc-user (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" repay-amount))
      (try! (contract-call? STACKING-DAO-CORE withdraw-idle repay-amount)))))))
      (asserts! (>= (* sbtc-out BPS) (* repay-amount MIN-UNWIND-RATE-BPS)) ERR-BAD-CONVERSION)
      (let ((debt-before (current-debt-actual)))
      (asserts! (<= (* sbtc-out BPS) (* debt-before MAX-CLOSE-OVERSHOOT-BPS)) ERR-OVER-UNSTACK)
      (let ((repaid (try! (as-contract? ((with-ft borr-addr "*" sbtc-out))
        (try! (contract-call? .market repay borrow-ft sbtc-out none))))))
        (asserts! (is-eq (current-debt-scaled) u0) ERR-DEBT-REMAINS)
        (let ((residual (unwrap-panic (contract-call? .sbtc get-balance current-contract))))
          (if (> residual u0)
            (let ((stbtc-back (try! (as-contract? ((with-ft BORROW-TOKEN "sbtc" residual))
              (try! (contract-call? STACKING-DAO-CORE deposit residual u0))))))
              (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" stbtc-back))
                (try! (contract-call? .zv-state-stbtc-0 receive-yield-collateral .stbtc-token stbtc-back tx-sender)))))
            true)
          (try! (as-contract? ()
            (try! (contract-call? .market collateral-remove-redeem
                     vault-ft collateral-amount u0 (some .zv-state-stbtc-0) price-feeds))))
          (print { action: "sv-close-position", user: contract-caller,
                   data: { full-close: true, repay: repay-amount, sbtc-out: sbtc-out,
                           repaid: repaid, collateral: collateral-amount } })
          (ok true)))))))

;;-------------------------------------
;; Add Collateral (risk-decreasing; available under pause)
;;-------------------------------------

(define-public (add-collateral
    (collateral-ft <ft-trait>)
    (amount uint)
    (price-feeds (optional (list 3 (buff 8192)))))
  (let ((coll-addr (contract-of collateral-ft)))
    (asserts! (contract-call? .zv-state-stbtc-0 is-trader contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq coll-addr COLLATERAL-TOKEN) ERR-WRONG-TOKEN)
    (try! (contract-call? .zv-state-stbtc-0 transfer-collateral-to-ops collateral-ft amount))
    (try! (as-contract? ((with-ft coll-addr "*" amount) (with-ft COLLATERAL-VAULT "*" amount))
      (try! (contract-call? .market supply-collateral-add collateral-ft amount u0 price-feeds))))
    (print { action: "sv-add-collateral", user: contract-caller, data: { amount: amount } })
    (ok true)))

;;-------------------------------------
;; Remove Collateral (gated on trading unless zero debt)
;;-------------------------------------

(define-public (remove-collateral
    (vault-ft <ft-trait>)
    (amount uint)
    (price-feeds (optional (list 3 (buff 8192)))))
  (let ((trading-on (contract-call? .zv-state-stbtc-0 get-trading-enabled))
        (scaled-debt (current-debt-scaled)))
    (asserts! (contract-call? .zv-state-stbtc-0 is-trader contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (or trading-on (is-eq scaled-debt u0)) ERR-PAUSED)
    (asserts! (is-eq (contract-of vault-ft) COLLATERAL-VAULT) ERR-WRONG-TOKEN)
    (try! (as-contract? ()
      (try! (contract-call? .market collateral-remove-redeem
               vault-ft amount u0 (some .zv-state-stbtc-0) price-feeds))))
    (print { action: "sv-remove-collateral", user: contract-caller, data: { amount: amount } })
    (ok true)))

;;-------------------------------------
;; Borrow More
;;-------------------------------------

(define-public (borrow-more
    (borrow-ft <ft-trait>)
    (amount uint)
    (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    (asserts! (contract-call? .zv-state-stbtc-0 is-trader contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (contract-call? .zv-state-stbtc-0 get-trading-enabled) ERR-PAUSED)
    (asserts! (is-eq (contract-of borrow-ft) BORROW-TOKEN) ERR-WRONG-TOKEN)
    (try! (as-contract? ()
      (try! (contract-call? .market borrow borrow-ft amount none price-feeds))))
    (let ((stbtc-received (try! (as-contract? ((with-ft BORROW-TOKEN "sbtc" amount))
      (try! (contract-call? STACKING-DAO-CORE deposit amount u0))))))
      (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" stbtc-received))
        (try! (contract-call? .zv-state-stbtc-0 receive-yield-collateral .stbtc-token stbtc-received tx-sender))))
      (print { action: "sv-borrow-more", user: contract-caller,
               data: { amount: amount, stbtc-received: stbtc-received } })
      (ok true))))

;;-------------------------------------
;; Stack sBTC to State (deposit-sbtc leg)
;;-------------------------------------

(define-public (stack-sbtc-to-state (sbtc-amount uint))
  (begin
    (asserts! (or (contract-call? .zv-state-stbtc-0 is-trader contract-caller)
                  (contract-call? .zv-state-stbtc-0 is-engine contract-caller))
              ERR-NOT-AUTHORIZED)
    (try! (contract-call? .zv-state-stbtc-0 transfer-sbtc-to-ops .sbtc sbtc-amount))
    (let ((stbtc-received (try! (as-contract? ((with-ft BORROW-TOKEN "sbtc" sbtc-amount))
      (try! (contract-call? STACKING-DAO-CORE deposit sbtc-amount u0))))))
      (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" stbtc-received))
        (try! (contract-call? .zv-state-stbtc-0 receive-yield-collateral .stbtc-token stbtc-received tx-sender))))
      (print { action: "sv-stack-sbtc", user: contract-caller,
               data: { sbtc-amount: sbtc-amount, stbtc-received: stbtc-received } })
      (ok stbtc-received))))

;;-------------------------------------
;; Unstack To State (atomic stBTC -> state-held sBTC; NAV-neutral)
;; Pulls state stBTC, withdraws on StackingDAO, returns the sBTC to sv-state. Ops
;; keeps no balance; live NAV counts the state sBTC. Pause-gated (StackingDAO leg).
;;-------------------------------------

(define-public (unstack-to-state (stbtc-amount uint))
  (begin
    (asserts! (or (contract-call? .zv-state-stbtc-0 is-trader contract-caller)
                  (contract-call? .zv-state-stbtc-0 is-engine contract-caller))
              ERR-NOT-AUTHORIZED)
    (asserts! (contract-call? .zv-state-stbtc-0 get-trading-enabled) ERR-PAUSED)
    (try! (contract-call? .zv-state-stbtc-0 transfer-collateral-to-ops .stbtc-token stbtc-amount))
    (let ((sbtc-received (get sbtc-user (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" stbtc-amount))
      (try! (contract-call? STACKING-DAO-CORE withdraw-idle stbtc-amount)))))))
      (asserts! (>= (* sbtc-received BPS) (* stbtc-amount MIN-UNWIND-RATE-BPS)) ERR-BAD-CONVERSION)
      (try! (as-contract? ((with-ft BORROW-TOKEN "sbtc" sbtc-received))
        (try! (contract-call? .zv-state-stbtc-0 receive-sbtc-from-ops .sbtc sbtc-received tx-sender))))
      (print { action: "sv-unstack-to-state", user: contract-caller,
               data: { stbtc-amount: stbtc-amount, sbtc-received: sbtc-received } })
      (ok sbtc-received))))

;;-------------------------------------
;; Permissionless sweeps (donated-dust recovery; keep ops empty)
;;-------------------------------------

;; sBTC in ops -> StackingDAO -> stBTC to sv-state.
(define-public (restack-ops-sbtc)
  (let ((sbtc-balance (unwrap-panic (contract-call? .sbtc get-balance current-contract))))
    (asserts! (> sbtc-balance u0) ERR-NOTHING-TO-SWEEP)
    (let ((stbtc-received (try! (as-contract? ((with-ft BORROW-TOKEN "sbtc" sbtc-balance))
      (try! (contract-call? STACKING-DAO-CORE deposit sbtc-balance u0))))))
      (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" stbtc-received))
        (try! (contract-call? .zv-state-stbtc-0 receive-yield-collateral .stbtc-token stbtc-received tx-sender))))
      (print { action: "sv-restack-ops-sbtc", user: contract-caller,
               data: { sbtc-amount: sbtc-balance, stbtc-received: stbtc-received } })
      (ok stbtc-received))))

;; stBTC in ops -> sv-state directly.
(define-public (sweep-ops-stbtc)
  (let ((stbtc-balance (unwrap-panic (contract-call? .stbtc-token get-balance current-contract))))
    (asserts! (> stbtc-balance u0) ERR-NOTHING-TO-SWEEP)
    (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" stbtc-balance))
      (try! (contract-call? .zv-state-stbtc-0 receive-yield-collateral .stbtc-token stbtc-balance tx-sender))))
    (print { action: "sv-sweep-ops-stbtc", user: contract-caller, data: { stbtc-amount: stbtc-balance } })
    (ok stbtc-balance)))

;;-------------------------------------
;; Unstack And Repay (pause-safe recovery deleverage)
;;   unstack -> conversion floor -> #1 cap (sbtc-out <= LIVE ACCRUED debt) ->
;;   repay actual output -> sweep repay-rounding dust to state (ops empty)
;;-------------------------------------

(define-public (unstack-and-repay (borrow-ft <ft-trait>) (stbtc-amount uint))
  (let ((borr-addr (contract-of borrow-ft)))
    (asserts! (contract-call? .zv-state-stbtc-0 is-trader contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq borr-addr BORROW-TOKEN) ERR-WRONG-TOKEN)
    (try! (contract-call? .zv-state-stbtc-0 transfer-collateral-to-ops .stbtc-token stbtc-amount))
    (let ((sbtc-out (get sbtc-user (try! (as-contract? ((with-ft COLLATERAL-TOKEN "*" stbtc-amount))
      (try! (contract-call? STACKING-DAO-CORE withdraw-idle stbtc-amount)))))))
      (asserts! (>= (* sbtc-out BPS) (* stbtc-amount MIN-UNWIND-RATE-BPS)) ERR-BAD-CONVERSION)
      (let ((debt-before (current-debt-actual)))
      (asserts! (<= sbtc-out debt-before) ERR-OVER-UNSTACK)
      (let ((repaid (try! (as-contract? ((with-ft borr-addr "*" sbtc-out))
        (try! (contract-call? .market repay borrow-ft sbtc-out none))))))
        (try! (sweep-sbtc-residual))
        (let ((debt-after (current-debt-scaled)))
          (print { action: "sv-unstack-and-repay", user: contract-caller,
                   data: { unstacked: stbtc-amount, sbtc-out: sbtc-out, repaid: repaid,
                           debt-remaining: debt-after, full-close: (is-eq debt-after u0) } })
          (ok repaid)))))))

;;-------------------------------------
;; Repay Only
;;-------------------------------------

(define-public (repay-only (borrow-ft <ft-trait>) (amount uint))
  (let ((borr-addr (contract-of borrow-ft)))
    (asserts! (contract-call? .zv-state-stbtc-0 is-trader contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq borr-addr BORROW-TOKEN) ERR-WRONG-TOKEN)
    (let ((repaid (try! (as-contract? ((with-ft borr-addr "*" amount))
      (try! (contract-call? .market repay borrow-ft amount none))))))
      (try! (sweep-sbtc-residual))
      (print { action: "sv-repay-only", user: contract-caller, data: { amount: amount, repaid: repaid } })
      (ok true))))

;;-------------------------------------
;; Deposit Yield (trader injects realized stBTC yield; NAV counts it live)
;;-------------------------------------

(define-public (deposit-yield (collateral-ft <ft-trait>) (amount uint))
  (begin
    (asserts! (contract-call? .zv-state-stbtc-0 is-trader contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq (contract-of collateral-ft) COLLATERAL-TOKEN) ERR-WRONG-TOKEN)
    (try! (contract-call? .zv-state-stbtc-0 receive-yield-collateral collateral-ft amount tx-sender))
    (print { action: "sv-deposit-yield", user: contract-caller, data: { amount: amount } })
    (ok true)))
