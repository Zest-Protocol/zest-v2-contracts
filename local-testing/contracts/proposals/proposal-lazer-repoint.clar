;; Proposal (TEST): repoint all base asset oracles to Pyth Lazer feeds
;; Description:
;;   Companion to the Lazer migration of market.clar. The original protocol-init
;;   proposal registers idents in the old Pyth v2 32-byte hash format, which the
;;   Lazer-based price resolver cannot interpret (it expects the Lazer uint
;;   feed-id in the low 16 bytes of the ident). This proposal rewrites the
;;   oracle config of every base asset and its zToken to the Lazer format,
;;   WITHOUT swapping the market impl (unlike proposal-set-pyth-upgrade-market).
;;
;;   USDH additionally changes oracle type from TYPE-DIA (0x01) to TYPE-PYTH
;;   (0x00): the DIA resolver targets a mainnet principal that does not exist
;;   on simnet, so USDH prices were unresolvable in tests before this proposal.
;;
;; Lazer feed-ids MUST match tests/setup/helpers/pyth-lazer-helpers.ts:
;;   BTC=1, STX=3, USDC=5, USDH=6.

(impl-trait .dao-traits.proposal-script)

(define-constant TYPE-PYTH 0x00)
(define-constant CALLCODE-STSTX 0x00)
(define-constant CALLCODE-ZSTX 0x01)
(define-constant CALLCODE-ZSBTC 0x02)
(define-constant CALLCODE-ZSTSTX 0x03)
(define-constant CALLCODE-ZUSDC 0x04)
(define-constant CALLCODE-ZUSDH 0x05)
(define-constant CALLCODE-ZSTSTXBTC 0x06)

;; Lazer feed-ids as 32-byte idents (feed-id in the low 16 bytes).
(define-constant LAZER-BTC  0x0000000000000000000000000000000000000000000000000000000000000001)
(define-constant LAZER-STX  0x0000000000000000000000000000000000000000000000000000000000000003)
(define-constant LAZER-USDC 0x0000000000000000000000000000000000000000000000000000000000000005)
(define-constant LAZER-USDH 0x0000000000000000000000000000000000000000000000000000000000000006)

(define-constant MAX-STALENESS u100000000)

(define-public (execute)
  (begin
    ;; --- Repoint asset oracles to Lazer (idents only; callcodes unchanged) ---
    (try! (contract-call? .assets update .wstx        { type: TYPE-PYTH, ident: LAZER-STX,  callcode: none,                    max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-stx   { type: TYPE-PYTH, ident: LAZER-STX,  callcode: (some CALLCODE-ZSTX),    max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .sbtc        { type: TYPE-PYTH, ident: LAZER-BTC,  callcode: none,                    max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-sbtc  { type: TYPE-PYTH, ident: LAZER-BTC,  callcode: (some CALLCODE-ZSBTC),   max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .ststx       { type: TYPE-PYTH, ident: LAZER-STX,  callcode: (some CALLCODE-STSTX),   max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-ststx { type: TYPE-PYTH, ident: LAZER-STX,  callcode: (some CALLCODE-ZSTSTX),  max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .usdc        { type: TYPE-PYTH, ident: LAZER-USDC, callcode: none,                    max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-usdc  { type: TYPE-PYTH, ident: LAZER-USDC, callcode: (some CALLCODE-ZUSDC),   max-staleness: MAX-STALENESS }))
    ;; USDH: type changes DIA -> PYTH so it resolves via Lazer feed 6 on simnet
    (try! (contract-call? .assets update .usdh        { type: TYPE-PYTH, ident: LAZER-USDH, callcode: none,                    max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-usdh  { type: TYPE-PYTH, ident: LAZER-USDH, callcode: (some CALLCODE-ZUSDH),   max-staleness: MAX-STALENESS }))
    ;; ststxbtc/zstSTXbtc are NOT repointed here: they are not part of the default
    ;; protocol-init registration (added later by their own proposals), so updating
    ;; them would fail ERR-INVALID-ASSET on a fresh simnet.
    (ok true)
  )
)
