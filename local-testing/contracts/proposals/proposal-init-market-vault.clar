;; Proposal to authorize market contract in market-vault
;; Sets market as the implementation contract for market-vault

(impl-trait .dao-traits.proposal-script)

(define-public (execute)
  (begin
    ;; Set market as implementation in market-vault
    (try! (contract-call? .market-vault set-impl .market))
    
    (ok true)))
