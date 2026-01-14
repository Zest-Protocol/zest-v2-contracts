;; Proposal to configure vault-usdc interest rate curve
;; Sets 8-point curve for borrowing USDC against sBTC collateral
;; This proposal configures:
;; - Utilization breakpoints (8 points from 0% to 100%)
;; - Interest rates at each utilization level
;; - Reserve factor (10% to DAO treasury)

(impl-trait .dao-traits.proposal-script)

;; Utilization points (in BPS, 0-10000 where 10000 = 100%)
;; Points: [0%, 25%, 50%, 70%, 75%, 85%, 90%, 100%]
(define-constant UTIL-POINTS (list u0 u2500 u5000 u7000 u7500 u8500 u9000 u10000))

;; Borrow rate points (in BPS, annualized)
;; Rates: [2%, 2.5%, 4%, 6%, 8%, 18%, 25%, 100%]
;; Gentle slope up to 75% optimal, steep increase beyond to protect liquidity
(define-constant RATE-POINTS (list u200 u250 u400 u600 u800 u1800 u2500 u10000))

;; Reserve factor: 10% (1000 BPS)
;; Protocol retains 10% of interest, 90% goes to suppliers
(define-constant RESERVE-FACTOR u1000)

(define-public (execute)
  (begin
    ;; Set utilization breakpoints
    (try! (contract-call? .vault-usdc set-points-util UTIL-POINTS))
    
    ;; Set interest rates at each breakpoint
    (try! (contract-call? .vault-usdc set-points-rate RATE-POINTS))
    
    ;; Set reserve factor (10%)
    (try! (contract-call? .vault-usdc set-fee-reserve RESERVE-FACTOR))
    
    (ok true)
  )
)
