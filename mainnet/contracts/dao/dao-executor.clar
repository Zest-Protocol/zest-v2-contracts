;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; dao-executor
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ============================================================================
;; TRAITS
;; ============================================================================
(impl-trait .dao-traits.upgradable)
(use-trait proposal-script .dao-traits.proposal-script)

;; ============================================================================
;; CONSTANTS
;; ============================================================================

;; -- Deployer
(define-constant DEPLOYER tx-sender)

;; ============================================================================
;; ERRORS (200xxx prefix for dao-executor)
;; ============================================================================
(define-constant ERR-AUTH (err u200001))
(define-constant ERR-INIT (err u200002))

;; ============================================================================
;; DATA VARS
;; ============================================================================
(define-data-var impl (optional principal) none)

;; ============================================================================
;; PRIVATE FUNCTIONS
;; ============================================================================

;; -- Auth helpers -----------------------------------------------------------

(define-private (check-impl-auth)
  (ok (asserts! (is-eq (some contract-caller) (var-get impl)) ERR-AUTH)))

;; ============================================================================
;; READ-ONLY FUNCTIONS
;; ============================================================================

;; -- Implementation getters -------------------------------------------------

(define-read-only (get-impl)
  (ok (var-get impl)))

;; ============================================================================
;; PUBLIC FUNCTIONS
;; ============================================================================

;; -- Implementation management ----------------------------------------------

(define-public (set-impl (new-impl principal))
  (begin
    (try! (check-impl-auth))
    (var-set impl (some new-impl))
    (ok true)))

;; -- Initialization ---------------------------------------------------------

(define-public (init (new-impl principal))
  (begin
    (asserts! (is-eq contract-caller DEPLOYER) ERR-INIT)
    (asserts! (is-none (var-get impl)) ERR-INIT)
    (var-set impl (some new-impl))
    (ok true)
  ))

;; -- Proposal execution -----------------------------------------------------

(define-public (execute-proposal (script <proposal-script>))
  (begin
    (try! (check-impl-auth))
    (try! (as-contract? ((with-all-assets-unsafe))
      (try! (contract-call? script execute))
      true))
    (ok true)))
