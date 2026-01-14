;; Proposal: Set Price Staleness Threshold
;; Description: DEPRECATED - Staleness is now set per-asset during asset registration
;; This proposal is kept as a no-op for backwards compatibility with existing tests

(define-public (execute)
  (begin
    ;; No-op: Staleness configuration moved to asset registration
    ;; See proposal-init-assets.clar where max-staleness is set per asset
    (ok true)))
