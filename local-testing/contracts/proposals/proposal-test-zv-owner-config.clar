(impl-trait .dao-traits.proposal-script)

;; DAO (once owner) exercises heavy powers: toggle a config flag + assign a hot role to an EOA.
;; Both are is-owner(tx-sender)-gated; tx-sender = dao-executor here.
(define-public (execute)
  (begin
    (try! (contract-call? .zv-state-stbtc-0 set-deposit-enabled false))
    (try! (contract-call? .zv-state-stbtc-0 set-hot-role 0x10 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5))
    (ok true)))
