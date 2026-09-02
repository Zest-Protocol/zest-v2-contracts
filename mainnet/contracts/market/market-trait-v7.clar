(use-trait ft-trait .ft-trait.ft-trait)

(define-trait market-trait-v7
  (
    (collateral-add (<ft-trait> uint (optional (list 3 (buff 8192)))) (response uint uint))
    (collateral-remove (<ft-trait> uint (optional principal) (optional (list 3 (buff 8192)))) (response uint uint))
    (borrow (<ft-trait> uint (optional principal) (optional (list 3 (buff 8192)))) (response bool uint))
    (repay (<ft-trait> uint (optional principal)) (response uint uint))
    (liquidate (principal <ft-trait> <ft-trait> uint uint (optional principal) (optional (list 3 (buff 8192))))
      (response { debt: uint, collateral: uint } uint))
    (liquidate-multi-with-feeds
      ((list 8 {
        borrower: principal,
        collateral-ft: <ft-trait>,
        debt-ft: <ft-trait>,
        debt-amount: uint,
        min-collateral-expected: uint
      }) (buff 8192))
      (response (list 8 (response { debt: uint, collateral: uint } uint)) uint))
  ))
