(impl-trait .dao-traits.proposal-script)

;; DAO claims ownership of the strategy vault (after the deployer's request-owner-transfer).
;; Proves the tx-sender owner-auth: inside the executor's as-contract run, tx-sender = dao-executor,
;; which must equal pending-owner.
(define-public (execute)
  (begin
    (try! (contract-call? .zv-state-stbtc-0 claim-ownership))
    (ok true)))
