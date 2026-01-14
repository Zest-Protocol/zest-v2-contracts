(impl-trait .ft-trait.ft-trait)

(define-constant err-unauthorised (err u3000))
(define-constant err-not-token-owner (err u4))

(define-fungible-token usdc)

(define-data-var token-name (string-ascii 32) "usdc")
(define-data-var token-symbol (string-ascii 10) "usdc")
(define-data-var token-uri (optional (string-utf8 256)) none)
(define-data-var token-decimals uint u6)

(define-constant deployer tx-sender)


(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (or (is-eq tx-sender sender) (is-eq contract-caller sender)) err-not-token-owner)
    (ft-transfer? usdc amount sender recipient)
  )
)

(define-read-only (get-name)
  (ok (var-get token-name))
)

(define-read-only (get-symbol)
  (ok (var-get token-symbol))
)

(define-read-only (get-decimals)
  (ok (var-get token-decimals))
)

(define-read-only (get-balance (who principal))
  (ok (ft-get-balance usdc who))
)

(define-read-only (get-total-supply)
  (ok (ft-get-supply usdc))
)

(define-read-only (get-token-uri)
  (ok (var-get token-uri))
)

(define-public (mint (amount uint) (account principal))
  (begin
    (asserts! (is-eq tx-sender deployer) (err u1))
    (ft-mint? usdc amount account)
  )
)

(define-public (burn (amount uint) (account principal))
  (begin
    (asserts! (is-eq tx-sender deployer) (err u1))
    (ft-burn? usdc amount account)
  )
)