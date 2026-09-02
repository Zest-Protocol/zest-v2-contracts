;; stBTC Token (StackingDAO) - SIMNET-ONLY SCAFFOLDING
;; SIP-010 compliant fungible token for stBTC.
;; This file is the simnet stand-in for the real mainnet stBTC token:
;; @mainnet: 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.stbtc-token
;; Do NOT deploy this contract to mainnet - protocol mint/burn here is gated
;; on the in-repo .stacking-dao-mock for testing. The real token's privileged
;; paths are protocol-gated by StackingDAO's own contracts.

(define-fungible-token stbtc)

;; Constants
(define-constant NAME "Stacking DAO BTC")
(define-constant SYMBOL "stBTC")
(define-constant DECIMALS u8)
(define-constant TOKEN-URI u"https://app.stackingdao.com/stbtc-token.json")

;; Errors
(define-constant ERR-NOT-AUTHORIZED (err u401))
(define-constant ERR-NOT-TOKEN-OWNER (err u4))

;; Data vars
(define-data-var token-uri (optional (string-utf8 256)) (some TOKEN-URI))
(define-data-var contract-owner principal tx-sender)

;; Maps
(define-map authorized-contracts principal bool)

;; SIP-010 functions

(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (or (is-eq tx-sender sender) (is-eq contract-caller sender)) ERR-NOT-TOKEN-OWNER)
    (try! (ft-transfer? stbtc amount sender recipient))
    (match memo to-print (print to-print) 0x)
    (ok true)))

(define-read-only (get-name)
  (ok NAME))

(define-read-only (get-symbol)
  (ok SYMBOL))

(define-read-only (get-decimals)
  (ok DECIMALS))

(define-read-only (get-balance (account principal))
  (ok (ft-get-balance stbtc account)))

(define-read-only (get-total-supply)
  (ok (ft-get-supply stbtc)))

(define-read-only (get-token-uri)
  (ok (var-get token-uri)))

;; Protocol functions (for StackingDAO integration)

(define-public (mint (amount uint) (recipient principal))
  (begin
    (asserts! (or (is-eq tx-sender (var-get contract-owner))
                  (is-eq contract-caller (var-get contract-owner))
                  (is-eq contract-caller .stacking-dao-mock))
              ERR-NOT-AUTHORIZED)
    (ft-mint? stbtc amount recipient)))

(define-public (burn (amount uint) (owner principal))
  (begin
    (asserts! (or (is-eq tx-sender (var-get contract-owner))
                  (is-eq contract-caller (var-get contract-owner))
                  (is-eq contract-caller .stacking-dao-mock))
              ERR-NOT-AUTHORIZED)
    (ft-burn? stbtc amount owner)))

(define-public (burn-for-protocol (amount uint) (owner principal))
  (begin
    ;; Authorize on contract-caller (not tx-sender) for this privileged burn.
    (asserts! (default-to false (map-get? authorized-contracts contract-caller)) ERR-NOT-AUTHORIZED)
    (ft-burn? stbtc amount owner)))

(define-public (set-token-uri (new-uri (optional (string-utf8 256))))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (var-set token-uri new-uri)
    (ok true)))

(define-public (set-contract-owner (new-owner principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (var-set contract-owner new-owner)
    (ok true)))

(define-public (set-authorized-contract (contract principal) (authorized bool))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (ok (map-set authorized-contracts contract authorized))))