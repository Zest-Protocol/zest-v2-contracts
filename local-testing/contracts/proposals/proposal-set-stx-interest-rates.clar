;; Proposal to configure vault-stx interest rate curve
;; Sets 8-point curve for borrowing wSTX (wrapped STX)
;; This proposal configures:
;; - Utilization breakpoints (8 points from 0% to 100%)
;; - Interest rates at each utilization level
;; - Reserve factor (10% to DAO treasury)
;;
;; STX-specific design:
;; - Higher optimal utilization (80%) - native asset stability
;; - Moderate initial rates (1.5% - 3.5%) for low utilization
;; - Steeper penalty curve beyond 80% to protect liquidity

(impl-trait .dao-traits.proposal-script)

;; Utilization points (in BPS, 0-10000 where 10000 = 100%)
;; Points: [0%, 30%, 55%, 70%, 80%, 88%, 93%, 100%]
;; Higher optimal point (80%) compared to USDC (75%) and sBTC (70%)
(define-constant UTIL-POINTS (list u0 u3000 u5500 u7000 u8000 u8800 u9300 u10000))

;; Borrow rate points (in BPS, annualized)
;; Rates: [1.5%, 2%, 3.5%, 5.5%, 7%, 20%, 30%, 100%]
;; Lower initial rates, higher optimal rate (7% at 80%), steeper penalties
(define-constant RATE-POINTS (list u150 u200 u350 u550 u700 u2000 u3000 u10000))

;; Reserve factor: 10% (1000 BPS)
;; Protocol retains 10% of interest, 90% goes to suppliers
(define-constant RESERVE-FACTOR u1000)

(define-public (execute)
  (begin
    ;; Set utilization breakpoints
    (try! (contract-call? .vault-stx set-points-util UTIL-POINTS))
    
    ;; Set interest rates at each breakpoint
    (try! (contract-call? .vault-stx set-points-rate RATE-POINTS))
    
    ;; Set reserve factor (10%)
    (try! (contract-call? .vault-stx set-fee-reserve RESERVE-FACTOR))
    
    (ok true)
  )
)
