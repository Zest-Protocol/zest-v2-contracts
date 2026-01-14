(define-trait tokenized-vault 
  (
    ;; --- sip-10 ---
    (get-name         () (response (string-ascii 32) uint))
    (get-symbol       () (response (string-ascii 32) uint))
    (get-token-uri    () (response (optional (string-utf8 256)) uint))
    (get-decimals     () (response uint uint))
    (get-total-supply () (response uint uint))
    (get-balance      (principal) (response uint uint))
    
    (transfer         (uint principal principal (optional (buff 34))) (response bool uint))

    ;; --- reads ---
    (get-assets        ()     (response uint uint))
    (convert-to-shares (uint) (response uint uint))
    (convert-to-assets (uint) (response uint uint))

    ;; --- mutate ---
    (deposit  (uint uint principal) (response uint uint))
    (redeem (uint uint principal) (response uint uint))
  ))

(define-trait flash-callback 
  (
    (callback (uint uint (optional (buff 4096))) (response bool uint))
  ))

(define-trait flashloan 
  (
    (flashloan (uint (optional principal) <flash-callback> (optional (buff 4096))) (response bool uint))
  ))

(define-trait lending
  (
    ;; --- reads ---
    (get-principal-scaled          ()     (response uint uint))
    (get-index                     ()     (response uint uint))
    (get-last-update               ()     (response uint uint))
    (get-debt                      ()     (response uint uint))
    (get-utilization               ()     (response uint uint))
    (get-interest-rate             ()     (response uint uint))
    (get-next-index                ()     (response uint uint))
    (get-principal-ratio-reduction (uint) (response uint uint))
    (get-liquidity-index           ()     (response uint uint))
    ;; underlying SIP-010 token managed by this vault
    (get-underlying                ()     (response principal uint))

    ;; --- public ---
    (accrue        ()     (response { index: uint, lindex: uint } uint))

    ;; --- mutate ---
    (system-borrow  (uint principal) (response bool uint))
    (system-repay   (uint) (response bool uint))
    (socialize-debt (uint) (response bool uint))
  ))

(define-trait reserve
  (
    ;; --- caps ---
    (get-cap-debt    () (response uint uint))
    (get-cap-supply  () (response uint uint))
    (set-cap-debt    (uint) (response bool uint))
    (set-cap-supply  (uint) (response bool uint))
    
    ;; --- fees ---
    (get-fee-flash   () (response uint uint))
    (get-fee-reserve () (response uint uint))
    (set-fee-flash   (uint) (response bool uint))
    (set-fee-reserve (uint) (response bool uint))

    (get-points-util () (response (list 8 uint) uint))
    (get-points-rate () (response (list 8 uint) uint))
    (set-points-util ((list 8 uint)) (response bool uint))
    (set-points-rate ((list 8 uint)) (response bool uint))
  ))
