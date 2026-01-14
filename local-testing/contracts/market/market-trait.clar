(use-trait ft-trait .ft-trait.ft-trait)

(define-trait market-trait
  (
    ;; ============================================
    ;; COLLATERAL MANAGEMENT
    ;; ============================================
    
    ;; Add collateral to position
    ;; price-feeds: optional list of up to 3 Pyth price feed buffers to update stale prices
    ;; Returns: updated collateral amount for this asset
    (collateral-add (<ft-trait> uint (optional (list 3 (buff 8192)))) (response uint uint))
    
    ;; Remove collateral from position
    ;; receiver: optional recipient (defaults to caller)
    ;; price-feeds: optional list of up to 3 Pyth price feed buffers to update stale prices
    ;; Returns: remaining collateral amount for this asset
    (collateral-remove (<ft-trait> uint (optional principal) (optional (list 3 (buff 8192)))) (response uint uint))
    
    ;; ============================================
    ;; DEBT MANAGEMENT
    ;; ============================================
    
    ;; Borrow assets against collateral
    ;; receiver: optional recipient (defaults to caller)
    ;; price-feeds: optional list of up to 3 Pyth price feed buffers to update stale prices
    ;; Returns: (ok true) on success
    (borrow (<ft-trait> uint (optional principal) (optional (list 3 (buff 8192)))) (response bool uint))
    
    ;; Repay borrowed debt
    ;; on-behalf-of: optional account to repay for (defaults to caller)
    ;; Returns: actual amount repaid
    (repay (<ft-trait> uint (optional principal)) (response uint uint))
    
    ;; ============================================
    ;; LIQUIDATION
    ;; ============================================
    
    ;; Liquidate an unhealthy position
    ;; Parameters: borrower, collateral-ft, debt-ft, debt-amount, min-collateral-expected, price-feeds
    ;; price-feeds: optional list of up to 3 Pyth price feed buffers to update stale prices
    ;; Returns: { debt: amount repaid, collateral: amount received }
    (liquidate (principal <ft-trait> <ft-trait> uint uint (optional principal) (optional (list 3 (buff 8192)))) 
               (response { debt: uint, collateral: uint } uint))
    
    ;; Liquidate multiple positions atomically
    ;; Parameters: list of position specs (borrower, collateral-ft, debt-ft, debt-amount, min-collateral-expected)
    ;; Note: price-feeds not supported in batch - update prices separately or use individual liquidate()
    ;; Returns: list of responses - one per position (ok/err)
    (liquidate-multi ((list 64 { borrower: principal,
                                  collateral-ft: <ft-trait>,
                                  debt-ft: <ft-trait>,
                                  debt-amount: uint,
                                  min-collateral-expected: uint }))
                     (response (list 64 (response { debt: uint, collateral: uint } uint)) uint))
    
  )
)
