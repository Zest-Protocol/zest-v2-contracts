;; Proposal to set flash fee for vault-sbtc to 5 BPS
(impl-trait .dao-traits.proposal-script)

(define-public (execute)
  (begin
    (try! (contract-call? .vault-sbtc set-fee-flash u5))
    (ok true)
  )
)
