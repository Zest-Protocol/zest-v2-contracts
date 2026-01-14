;; Mock Oracle for Testing
;;
;; Implements the DIA oracle interface for controllable price testing.
;; Used in simnet and mainnet staging to test bad debt socialization.
;;
;; Usage:
;; 1. Initialize with: (contract-call? .mock-oracle set-price "USDh/USD" u100000000) for $1.00
;; 2. Crash price with: (contract-call? .mock-oracle set-price "USDh/USD" u1000000) for $0.01

(define-constant ERR-NOT-AUTHORIZED (err u1000))
(define-constant ERR-KEY-NOT-FOUND (err u1001))

(define-data-var deployer principal tx-sender)

;; Price storage: key -> { value, timestamp }
;; value is in 8 decimal precision (e.g., $1.00 = 100000000)
(define-map prices
  (string-ascii 32)
  { value: uint, timestamp: uint })

;; DIA-compatible read function
;; Returns price and timestamp for the given key
(define-read-only (get-value (key (string-ascii 32)))
  (ok (unwrap! (map-get? prices key) ERR-KEY-NOT-FOUND)))

;; Set price (deployer only)
;; Can be called directly in simnet
(define-public (set-price (key (string-ascii 32)) (value uint))
  (begin
    (asserts! (is-eq tx-sender (var-get deployer)) ERR-NOT-AUTHORIZED)
    (map-set prices key { value: value, timestamp: stacks-block-time })
    (print {
      action: "mock-oracle-set-price",
      key: key,
      value: value,
      timestamp: stacks-block-time
    })
    (ok true)))

;; Transfer deployer role (for mainnet staging if needed)
(define-public (set-deployer (new-deployer principal))
  (begin
    (asserts! (is-eq tx-sender (var-get deployer)) ERR-NOT-AUTHORIZED)
    (var-set deployer new-deployer)
    (ok true)))

;; Read-only: get current deployer
(define-read-only (get-deployer)
  (var-get deployer))
