(impl-trait .dao-traits.proposal-script)
(define-public (execute)
  (begin
    (try! (contract-call? .vault-ststx set-pause-states {deposit: false, redeem: false, borrow: false, repay: false, accrue: false, flashloan: false}))
    (ok true)
  )
)
