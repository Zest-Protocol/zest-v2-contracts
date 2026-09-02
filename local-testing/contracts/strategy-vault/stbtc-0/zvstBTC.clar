;; @contract Strategy Vault Share Token (stBTC Loop)
;; @description SIP-010 share token for the stBTC looping strategy vault.
;; Mint/burn restricted to authorized engine contract. 8 decimals (matches stBTC).

(impl-trait .ft-trait.ft-trait)

(define-fungible-token zvstbtc)

;;-------------------------------------
;; Constants
;;-------------------------------------

(define-constant ERR-NOT-AUTHORIZED (err u850001))

(define-constant TOKEN-DECIMALS u8)
(define-constant TOKEN-SYMBOL "zvstBTC")

;;-------------------------------------
;; Variables
;;-------------------------------------

(define-data-var token-name (string-ascii 32) "Zest stBTC Strategy Vault")
(define-data-var token-uri (string-utf8 256) u"https://token-meta.s3.eu-central-1.amazonaws.com/zvstBTC.json")
(define-data-var authorized-minter principal .zv-engine-stbtc-0)

;;-------------------------------------
;; Authorization
;;-------------------------------------

(define-private (is-authorized)
  (is-eq contract-caller (var-get authorized-minter)))

;;-------------------------------------
;; SIP-010
;;-------------------------------------

(define-read-only (get-total-supply)
  (ok (ft-get-supply zvstbtc)))

(define-read-only (get-name)
  (ok (var-get token-name)))

(define-read-only (get-symbol)
  (ok TOKEN-SYMBOL))

(define-read-only (get-decimals)
  (ok TOKEN-DECIMALS))

(define-read-only (get-balance (account principal))
  (ok (ft-get-balance zvstbtc account)))

(define-read-only (get-token-uri)
  (ok (some (var-get token-uri))))

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (or (is-eq sender tx-sender) (is-eq sender contract-caller)) ERR-NOT-AUTHORIZED)
    (try! (ft-transfer? zvstbtc amount sender recipient))
    (match memo val (print val) 0x)
    (ok true)))

;;-------------------------------------
;; Mint / Burn (restricted to engine)
;;-------------------------------------

(define-public (mint (amount uint) (recipient principal))
  (begin
    (asserts! (is-authorized) ERR-NOT-AUTHORIZED)
    (ft-mint? zvstbtc amount recipient)))

(define-public (burn (amount uint) (owner principal))
  (begin
    (asserts! (is-authorized) ERR-NOT-AUTHORIZED)
    (ft-burn? zvstbtc amount owner)))

;;-------------------------------------
;; Admin
;;   - authorized-minter: rotated by the state contract (engine-swap governance).
;;   - metadata (name / uri): DAO-governed (tx-sender = dao-executor), matching the
;;     house pattern in the underlying vaults. uri defaults to the live S3 metadata.
;;-------------------------------------

(define-public (set-authorized-minter (new-minter principal))
  (begin
    (asserts! (is-eq contract-caller .zv-state-stbtc-0) ERR-NOT-AUTHORIZED)
    (ok (var-set authorized-minter new-minter))))

(define-public (set-token-name (value (string-ascii 32)))
  (begin
    (asserts! (is-eq tx-sender .dao-executor) ERR-NOT-AUTHORIZED)
    (ok (var-set token-name value))))

(define-public (set-token-uri (value (string-utf8 256)))
  (begin
    (asserts! (is-eq tx-sender .dao-executor) ERR-NOT-AUTHORIZED)
    (ok (var-set token-uri value))))
