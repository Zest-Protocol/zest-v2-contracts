(impl-trait .dao-traits.proposal-script)

;; Verifies the DAO can mutate the strategy-vault share token's metadata
;; (tx-sender = dao-executor inside the executor's as-contract run).
(define-public (execute)
  (begin
    (try! (contract-call? .zvstBTC set-token-uri u"https://token-meta.s3.eu-central-1.amazonaws.com/zvstBTC-v2.json"))
    (try! (contract-call? .zvstBTC set-token-name "Zest stBTC v2"))
    (ok true)))
