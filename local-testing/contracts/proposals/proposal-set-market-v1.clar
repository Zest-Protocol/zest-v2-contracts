;; Proposal (TEST): switch the protocol to market-v1 + Pyth Lazer oracles + stBTC
;; Description:
;;   1. Points market-vault's impl at market-v1 and authorizes it in all vaults
;;      (including vault-stbtc).
;;   2. Repoints every base asset's oracle config to a Pyth Lazer feed (idents only).
;;   3. Registers stBTC (asset 12) and zstBTC (asset 13) on the Lazer BTC feed.
;;   4. Enables zstBTC as collateral, sets vault-stbtc caps, creates egroup 17
;;      (zstBTC collateral + sBTC debt, 80% LTV -- the stBTC looping pair).
;;
;; Lazer feed-ids MUST match tests/setup/helpers/pyth-lazer-helpers.ts LazerFeedIds
;; (BTC=1, STX=3, USDC=5).

(impl-trait .dao-traits.proposal-script)

(define-constant TYPE-PYTH 0x00)
(define-constant CALLCODE-STSTX 0x00)
(define-constant CALLCODE-ZSTX 0x01)
(define-constant CALLCODE-ZSBTC 0x02)
(define-constant CALLCODE-ZSTSTX 0x03)
(define-constant CALLCODE-ZUSDC 0x04)
(define-constant CALLCODE-ZUSDH 0x05)
(define-constant CALLCODE-ZSTSTXBTC 0x06)
(define-constant CALLCODE-STBTC 0x07)

;; Lazer feed-ids as 32-byte idents (feed-id in the low 16 bytes).
(define-constant LAZER-BTC  0x0000000000000000000000000000000000000000000000000000000000000001)
(define-constant LAZER-STX  0x0000000000000000000000000000000000000000000000000000000000000003)
(define-constant LAZER-USDC 0x0000000000000000000000000000000000000000000000000000000000000005)

(define-constant MAX-STALENESS u100000000)

(define-public (execute)
  (begin
    ;; --- Market wiring ---
    (try! (contract-call? .market-vault set-impl .market))
    (try! (contract-call? .vault-stx      set-authorized-contract .market true))
    (try! (contract-call? .vault-sbtc     set-authorized-contract .market true))
    (try! (contract-call? .vault-ststx    set-authorized-contract .market true))
    (try! (contract-call? .vault-usdc     set-authorized-contract .market true))
    (try! (contract-call? .vault-usdh     set-authorized-contract .market true))
    (try! (contract-call? .vault-ststxbtc set-authorized-contract .market true))
    (try! (contract-call? .vault-stbtc    set-authorized-contract .market true))

    ;; --- Repoint existing asset oracles to Lazer (idents only; callcodes unchanged) ---
    (try! (contract-call? .assets update .wstx        { type: TYPE-PYTH, ident: LAZER-STX,  callcode: none,                   max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-stx   { type: TYPE-PYTH, ident: LAZER-STX,  callcode: (some CALLCODE-ZSTX),   max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .sbtc        { type: TYPE-PYTH, ident: LAZER-BTC,  callcode: none,                   max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-sbtc  { type: TYPE-PYTH, ident: LAZER-BTC,  callcode: (some CALLCODE-ZSBTC),  max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .ststx       { type: TYPE-PYTH, ident: LAZER-STX,  callcode: (some CALLCODE-STSTX),  max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-ststx { type: TYPE-PYTH, ident: LAZER-STX,  callcode: (some CALLCODE-ZSTSTX), max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .usdc        { type: TYPE-PYTH, ident: LAZER-USDC, callcode: none,                   max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-usdc  { type: TYPE-PYTH, ident: LAZER-USDC, callcode: (some CALLCODE-ZUSDC),  max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .usdh        { type: TYPE-PYTH, ident: LAZER-USDC, callcode: none,                   max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets update .vault-usdh  { type: TYPE-PYTH, ident: LAZER-USDC, callcode: (some CALLCODE-ZUSDH),  max-staleness: MAX-STALENESS }))

    ;; --- Register ststxbtc (asset 10) + zstSTXbtc (asset 11) ---
    ;; Ensures stBTC/zstBTC land on IDs 12/13 (matching market-v1 constants).
    (try! (contract-call? .assets insert .ststxbtc
      { type: TYPE-PYTH, ident: LAZER-STX, callcode: none, max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets insert .vault-ststxbtc
      { type: TYPE-PYTH, ident: LAZER-STX, callcode: (some CALLCODE-ZSTSTXBTC), max-staleness: MAX-STALENESS }))
    (try! (contract-call? .assets enable .vault-ststxbtc true))

    ;; --- Register stBTC (asset 12): raw BTC price, no callcode ---
    (try! (contract-call? .assets insert .stbtc-token
      { type: TYPE-PYTH, ident: LAZER-BTC, callcode: none, max-staleness: MAX-STALENESS }))

    ;; --- Register zstBTC (asset 13): BTC price via stBTC ratio callcode ---
    (try! (contract-call? .assets insert .vault-stbtc
      { type: TYPE-PYTH, ident: LAZER-BTC, callcode: (some CALLCODE-STBTC), max-staleness: MAX-STALENESS }))

    ;; Enable zstBTC as collateral only
    (try! (contract-call? .assets enable .vault-stbtc true))

    ;; Set vault-stbtc caps
    (try! (contract-call? .vault-stbtc set-cap-supply u10000000000000))
    (try! (contract-call? .vault-stbtc set-cap-debt u10000000000000))

    ;; --- Egroup: zstBTC collateral only (bit 13) ---
    ;; MASK = 2^13 = 8192. Required for first collateral-add (new users).
    ;; LTV must be >= any superset's LTV (superset invariant).
    (try! (contract-call? .egroup insert {
      MASK: u8192,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u10000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u8000,       ;; >= egroup 17's 80%
      LTV-LIQ-PARTIAL: u8500,
      LTV-LIQ-FULL: u9000
    }))

    ;; --- Egroup 17: zstBTC collateral (bit 13) + sBTC debt (bit 66) ---
    ;; MASK = 2^13 + 2^66 = 73786976294838214656
    (try! (contract-call? .egroup insert {
      MASK: u73786976294838214656,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u10000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u8000,       ;; 80% LTV (high for looping)
      LTV-LIQ-PARTIAL: u8500,  ;; 85%
      LTV-LIQ-FULL: u9000      ;; 90%
    }))

    (ok true)))
