;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; sBTC Interest Rate Configuration Proposal
;; 
;; Sets interest rate curve for vault-sbtc
;; More conservative than USDC due to higher volatility
;;
;; Optimal utilization: 70% (vs 75% for USDC)
;; Reserve factor: 10% (same as USDC)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(impl-trait .dao-traits.proposal-script)

;; sBTC Interest Rate Curve (8 points)
;; Utilization points: 0%, 25%, 50%, 70%, 75%, 85%, 90%, 100%
;; Interest rates:     2%, 2.5%, 4%, 6%, 8%, 18%, 25%, 100%
;;
;; Design rationale:
;; - Lower optimal utilization (70% vs 75%) due to BTC volatility
;; - Steeper penalty curve beyond optimal point
;; - Encourages maintaining buffer capacity for volatile asset

(define-constant UTIL-POINTS (list u0 u2500 u5000 u7000 u7500 u8500 u9000 u10000))
(define-constant RATE-POINTS (list u200 u250 u400 u600 u800 u1800 u2500 u10000))
(define-constant RESERVE-FACTOR u1000) ;; 10%

(define-public (execute)
  (begin
    ;; Set utilization curve points
    (try! (contract-call? .vault-sbtc set-points-util UTIL-POINTS))
    
    ;; Set interest rate curve points
    (try! (contract-call? .vault-sbtc set-points-rate RATE-POINTS))
    
    ;; Set reserve factor (10% to DAO treasury)
    (try! (contract-call? .vault-sbtc set-fee-reserve RESERVE-FACTOR))
    
    (ok true)))
