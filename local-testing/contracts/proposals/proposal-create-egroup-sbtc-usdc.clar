;; Proposal to create custom egroup for sBTC collateral / USDC debt
;; This egroup allows higher LTV (70%) for this specific asset pair

(impl-trait .dao-traits.proposal-script)

(define-public (execute)
  (begin
    ;; Create egroup with sBTC collateral (bit 2) + USDC debt (bit 70)
    ;; NEW Asset IDs: sBTC=2, USDC=6, debt_bit=64+6=70
    ;; MASK = 2^2 + 2^70 = 4 + 1180591620717411303424 = 1180591620717411303428
    (try! (contract-call? .egroup insert {
      MASK: u1180591620717411303428,
      BORROW-DISABLED-MASK: u0,           ;; No assets disabled for borrowing
      LIQ-CURVE-EXP: u20000,              ;; 2.0 quadratic (gentle-then-steep)
      LIQ-PENALTY-MIN: u500,              ;; 5%
      LIQ-PENALTY-MAX: u1000,             ;; 10%
      LTV-BORROW: u7000,                  ;; 70% max borrow LTV
      LTV-LIQ-PARTIAL: u8500,             ;; 85% partial liquidation threshold
      LTV-LIQ-FULL: u9500                 ;; 95% full liquidation threshold
    }))
    
    (ok true)))
