(impl-trait .dao-traits.proposal-script)
(define-public (execute)
  (begin
    (try! (contract-call? .vault-sbtc set-pause-states {deposit: true, redeem: true, borrow: true, repay: true, accrue: true, flashloan: true}))
    (ok true)
  )
)
