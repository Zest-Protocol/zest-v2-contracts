;; Proposal to set flash fee for vault-usdh to 5 BPS
(impl-trait .dao-traits.proposal-script)

(define-public (execute)
  (begin
    (try! (contract-call? .vault-usdh set-fee-flash u5))
    (ok true)
  )
)
