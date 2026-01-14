(impl-trait .ft-trait.ft-trait)

(define-constant token-name "Wrapped STX")
(define-constant token-symbol "wSTX")
(define-constant token-uri none)
(define-constant token-decimals u6)

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (try! (stx-transfer? amount sender recipient))
    (match memo to-print (print to-print) 0x)
    (ok true)
  )
)

(define-read-only (get-name)
  (ok token-name)
)

(define-read-only (get-symbol)
  (ok token-symbol)
)

(define-read-only (get-decimals)
  (ok token-decimals)
)

(define-read-only (get-balance (who principal))
  (ok (stx-get-balance who))
)

(define-read-only (get-total-supply)
  (ok stx-liquid-supply)
)

(define-read-only (get-token-uri)
  (ok token-uri)
)
