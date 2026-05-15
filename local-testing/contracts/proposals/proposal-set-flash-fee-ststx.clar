;; Proposal to set flash fee for vault-ststx to 5 BPS
(impl-trait .dao-traits.proposal-script)

(define-public (execute)
  (begin
    (try! (contract-call? .vault-ststx set-fee-flash u5))
    (ok true)
  )
)
