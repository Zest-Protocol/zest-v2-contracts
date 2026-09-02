;; @contract Strategy Vault Engine (stBTC Loop)
;; @description Upgradeable logic. Computes NAV LIVE from on-chain balances + the ops
;; market position + the StackingDAO ratio (no stored total-assets, no report-yield).
;; Fees accrue by SHARE DILUTION: mgmt (time-based) + perf (above a per-share HWM) are
;; crystallized into fee-shares minted to the recipient. No state held here.

(use-trait ft-trait .ft-trait.ft-trait)

;;-------------------------------------
;; Constants
;;-------------------------------------

(define-constant ERR-PAUSED (err u870001))
(define-constant ERR-CAP-EXCEEDED (err u870002))
(define-constant ERR-BELOW-MIN (err u870003))
(define-constant ERR-NO-CLAIM (err u870004))
(define-constant ERR-NOT-COOLED-DOWN (err u870005))
(define-constant ERR-ALREADY-FUNDED (err u870006))
(define-constant ERR-NOT-FUNDED (err u870007))
(define-constant ERR-NOT-AUTHORIZED (err u870008))
(define-constant ERR-CANCEL-EXPRESS (err u870009))
(define-constant ERR-ZERO-SHARES (err u870014))
(define-constant ERR-EXPRESS-DISABLED (err u870015))
(define-constant ERR-SLIPPAGE (err u870016))
(define-constant ERR-RATIO-OOB (err u870018))
(define-constant ERR-ALREADY-INIT (err u870019))
(define-constant ERR-UNEXPECTED-COLLATERAL (err u870020))

(define-constant SHARE-BASE u100000000)         ;; 1e8
(define-constant BPS-BASE u10000)
(define-constant INDEX-PRECISION u1000000000000) ;; 1e12
(define-constant SECONDS-PER-YEAR u31536000)
(define-constant DEAD-SHARES u1000)
(define-constant SBTC-AID u2)                    ;; sBTC debt asset id (stable base-asset id)
(define-constant MAX-U128 u340282366920938463463374607431768211455)
;; StackingDAO ratio sanity band (sBTC per stBTC, 1e8-scaled). Donation can only push
;; the ratio up (backed, unprofitable); the band caps an out-of-range read as a fail-safe.
(define-constant MIN-RATIO u50000000)            ;; 0.5x
(define-constant MAX-RATIO u200000000)           ;; 2.0x
(define-constant NULL-ADDRESS (unwrap-panic
  (principal-construct? (if is-in-mainnet 0x16 0x1a)
    0x0000000000000000000000000000000000000000)))

;;-------------------------------------
;; Live NAV (gross, in stBTC)
;;-------------------------------------

(define-private (mul-div-up (a uint) (b uint) (d uint))
  (/ (+ (* a b) (- d u1)) d))

;; Collateral fold: sum entries whose aid matches the RESOLVED zstBTC id, and flag `ok:false`
;; if any OTHER collateral is present (revert rather than mis-value it as zstBTC). The zstBTC
;; ztoken's asset id is deployment-specific, so it must be resolved live from .assets, not
;; hardcoded. Debt stays aid-keyed (sBTC = 2, a stable base-asset id).
(define-private (coll-fold (e { aid: uint, amount: uint }) (acc { id: uint, sum: uint, ok: bool }))
  (if (is-eq (get aid e) (get id acc))
    (merge acc { sum: (+ (get sum acc) (get amount e)) })
    (merge acc { ok: false })))

(define-private (find-debt (e { aid: uint, scaled: uint }) (acc uint))
  (if (is-eq (get aid e) SBTC-AID) (get scaled e) acc))

;; Gross NAV in stBTC = state stBTC + state sBTC/ratio + OPS stBTC + OPS sBTC/ratio
;;   - funded-claim liability + market collateral (zstBTC->stBTC)
;;   - market sBTC debt (indexed, ceil)/haircut-ratio.
;; ONE ratio snapshot. Debt uses the haircut ratio (conservative liability); sBTC assets
;; use the raw floor ratio and round down. **Ops balances are INCLUDED** (review: excluding
;; them let a depositor capture assets later swept out of ops; the ops self-sweeps are now
;; operational hygiene, not a solvency assumption). Reverts if the ratio is out of band.
(define-private (compute-gross-nav)
  (let (
    (raw (contract-call? .stacking-dao-mock get-sbtc-per-stbtc))
    (h (contract-call? .market get-stbtc-haircut-bps))
    (state-stbtc (unwrap-panic (contract-call? .stbtc-token get-balance .zv-state-stbtc-0)))
    (state-sbtc (unwrap-panic (contract-call? .sbtc get-balance .zv-state-stbtc-0)))
    (ops-stbtc (unwrap-panic (contract-call? .stbtc-token get-balance .zv-ops-stbtc-0)))
    (ops-sbtc (unwrap-panic (contract-call? .sbtc get-balance .zv-ops-stbtc-0)))
    (liab (contract-call? .zv-state-stbtc-0 get-funded-claim-liability))
    ;; Resolve the zstBTC collateral asset id LIVE (deployment-specific) from the registry.
    ;; Default u0 if unregistered: with no position that's harmless; with a real position the
    ;; aid mismatch trips ERR-UNEXPECTED-COLLATERAL below (fail-safe, never mis-values).
    (zstbtc-id (match (contract-call? .assets get-asset-status .vault-stbtc) s (get id s) e u0))
    (pos (contract-call? .market-vault get-position .zv-ops-stbtc-0 MAX-U128))
    (coll-res (match pos p (fold coll-fold (get collateral p) { id: zstbtc-id, sum: u0, ok: true })
                           e { id: zstbtc-id, sum: u0, ok: true }))
    (debt-scaled (match pos p (fold find-debt (get debt p) u0) e u0))
  )
    (asserts! (and (>= raw MIN-RATIO) (<= raw MAX-RATIO)) ERR-RATIO-OOB)
    ;; The ops position must hold ONLY zstBTC collateral; revert rather than mis-value anything else.
    (asserts! (get ok coll-res) ERR-UNEXPECTED-COLLATERAL)
    (let (
      (hair (/ (* raw (- BPS-BASE h)) BPS-BASE))
      (coll-shares (get sum coll-res))
      (coll-stbtc (if (> coll-shares u0)
                    (unwrap-panic (contract-call? .vault-stbtc convert-to-assets coll-shares)) u0))
      (debt-actual (if (> debt-scaled u0)
                     (mul-div-up debt-scaled
                       (unwrap-panic (contract-call? .vault-sbtc get-next-index)) INDEX-PRECISION) u0))
      (debt-stbtc (if (and (> debt-actual u0) (> hair u0)) (/ (* debt-actual SHARE-BASE) hair) u0))
      (sbtc-total (+ state-sbtc ops-sbtc))
      (sbtc-stbtc (if (> sbtc-total u0) (/ (* sbtc-total SHARE-BASE) raw) u0))
      (assets (+ (+ state-stbtc ops-stbtc) (+ sbtc-stbtc coll-stbtc)))
      (liabs (+ liab debt-stbtc))
    )
      (ok (if (>= assets liabs) (- assets liabs) u0)))))

(define-private (live-price (gross uint) (supply uint))
  (if (> supply u0) (/ (* gross SHARE-BASE) supply) SHARE-BASE))

;;-------------------------------------
;; Fee crystallization (share dilution)
;;-------------------------------------

;; Permissionless. Accrues time-based mgmt fee + perf fee (only on NAV-per-share above
;; the HWM) and mints the equivalent fee-shares to the recipient (dilution). Advances
;; the HWM to the pre-dilution high and stamps last-fee-ts. Called before every
;; deposit/redeem-request pricing point.
(define-public (crystallize-fees)
  (let (
    (supply (unwrap-panic (contract-call? .zvstBTC get-total-supply)))
    (gross (try! (compute-gross-nav)))
    (cfg (contract-call? .zv-state-stbtc-0 get-fee-config))
    (hwm (get hwm-per-share cfg))
    (now stacks-block-time)
    (dt (let ((lts (get last-fee-ts cfg))) (if (> now lts) (- now lts) u0)))
    (price (live-price gross supply))
    (mgmt-fee (if (> supply u0)
                (/ (* (* gross (get mgmt-fee-bps cfg)) dt) (* BPS-BASE SECONDS-PER-YEAR)) u0))
    (perf-fee (if (> price hwm)
                (/ (* (/ (* (- price hwm) supply) SHARE-BASE) (get perf-fee-bps cfg)) BPS-BASE) u0))
    (total-fee (+ mgmt-fee perf-fee))
    (fee-shares (if (and (> total-fee u0) (> supply u0) (> gross total-fee))
                  (/ (* total-fee supply) (- gross total-fee)) u0))
  )
    (if (> fee-shares u0)
      (try! (contract-call? .zvstBTC mint fee-shares (get fee-recipient cfg)))
      true)
    (try! (contract-call? .zv-state-stbtc-0 set-fee-anchors (if (> price hwm) price hwm) now))
    (print { action: "sv-crystallize-fees", user: contract-caller,
             data: { mgmt: mgmt-fee, perf: perf-fee, fee-shares: fee-shares, price: price } })
    (ok { mgmt: mgmt-fee, perf: perf-fee, fee-shares: fee-shares })))

;;-------------------------------------
;; Initialize - seeds dead shares (inflation-attack guard) + fee anchors
;;-------------------------------------

(define-public (initialize (token <ft-trait>))
  (let ((supply (unwrap-panic (contract-call? .zvstBTC get-total-supply))))
    (asserts! (is-eq supply u0) ERR-ALREADY-INIT)
    (try! (contract-call? .zv-state-stbtc-0 transfer-collateral-in token DEAD-SHARES tx-sender))
    (try! (contract-call? .zvstBTC mint DEAD-SHARES NULL-ADDRESS))
    (try! (contract-call? .zv-state-stbtc-0 set-fee-anchors SHARE-BASE stacks-block-time))
    (print { action: "sv-initialize", user: tx-sender, data: { dead-shares: DEAD-SHARES } })
    (ok true)))

;;-------------------------------------
;; Deposit (stBTC)
;;-------------------------------------

(define-public (deposit (token <ft-trait>) (amount uint) (min-shares-out uint))
  (begin
    (try! (crystallize-fees))
    (let (
      (cfg (contract-call? .zv-state-stbtc-0 get-deposit-config))
      (gross (try! (compute-gross-nav)))
      (supply (unwrap-panic (contract-call? .zvstBTC get-total-supply)))
      (shares (if (> gross u0) (/ (* amount supply) gross) u0))
    )
      (asserts! (get vault-enabled cfg) ERR-PAUSED)
      (asserts! (get deposit-enabled cfg) ERR-PAUSED)
      (asserts! (>= amount (get min-deposit cfg)) ERR-BELOW-MIN)
      (asserts! (or (is-eq (get deposit-cap cfg) u0) (<= (+ (get net-deposited cfg) amount) (get deposit-cap cfg)))
                ERR-CAP-EXCEEDED)
      (asserts! (> shares u0) ERR-ZERO-SHARES)
      (asserts! (>= shares min-shares-out) ERR-SLIPPAGE)
      (try! (contract-call? .zv-state-stbtc-0 transfer-collateral-in token amount tx-sender))
      (try! (contract-call? .zv-state-stbtc-0 add-deposited amount))
      (try! (contract-call? .zvstBTC mint shares tx-sender))
      (print { action: "sv-deposit", user: tx-sender,
               data: { asset: "stbtc", amount: amount, shares: shares, gross: gross } })
      (ok shares))))

;;-------------------------------------
;; Deposit sBTC (stacks into stBTC inline via ops -> StackingDAO)
;;-------------------------------------

(define-public (deposit-sbtc (amount uint) (min-shares-out uint))
  (begin
    (try! (crystallize-fees))
    (let (
      (cfg (contract-call? .zv-state-stbtc-0 get-deposit-config))
      (gross (try! (compute-gross-nav)))
      (supply (unwrap-panic (contract-call? .zvstBTC get-total-supply)))
    )
      (asserts! (get vault-enabled cfg) ERR-PAUSED)
      (asserts! (get deposit-enabled cfg) ERR-PAUSED)
      (asserts! (>= amount (get min-deposit cfg)) ERR-BELOW-MIN)
      (try! (contract-call? .zv-state-stbtc-0 transfer-sbtc-in .sbtc amount tx-sender))
      (let (
        (stbtc-received (try! (contract-call? .zv-ops-stbtc-0 stack-sbtc-to-state amount)))
        (shares (if (> gross u0) (/ (* stbtc-received supply) gross) u0))
      )
        (asserts! (or (is-eq (get deposit-cap cfg) u0) (<= (+ (get net-deposited cfg) stbtc-received) (get deposit-cap cfg)))
                  ERR-CAP-EXCEEDED)
        (asserts! (> stbtc-received u0) ERR-ZERO-SHARES)
        (asserts! (> shares u0) ERR-ZERO-SHARES)
        (asserts! (>= shares min-shares-out) ERR-SLIPPAGE)
        (try! (contract-call? .zv-state-stbtc-0 add-deposited stbtc-received))
        (try! (contract-call? .zvstBTC mint shares tx-sender))
        (print { action: "sv-deposit", user: tx-sender,
                 data: { asset: "sbtc", sbtc-in: amount, stbtc-received: stbtc-received,
                         shares: shares, gross: gross } })
        (ok shares)))))

;;-------------------------------------
;; Request Redeem (async claim)
;;-------------------------------------

(define-public (request-redeem (assets uint) (is-express bool))
  (begin
    (try! (crystallize-fees))
    (let (
      (cfg (contract-call? .zv-state-stbtc-0 get-redeem-config))
      (gross (try! (compute-gross-nav)))
      (supply (unwrap-panic (contract-call? .zvstBTC get-total-supply)))
      (assets-safe (if (> assets gross) gross assets))
      (shares-raw (if (or (is-eq supply u0) (is-eq gross u0)) assets-safe
                      (/ (+ (* assets-safe supply) (- gross u1)) gross)))
      (user-balance (unwrap-panic (contract-call? .zvstBTC get-balance tx-sender)))
      (shares (if (> shares-raw user-balance) user-balance shares-raw))
      (fee-bps (if is-express (get express-fee-bps cfg) (get exit-fee-bps cfg)))
      (cd (if is-express (get express-cooldown cfg) (get cooldown cfg)))
      (ts (+ stacks-block-time cd))
      (request-price (live-price gross supply))
    )
      (asserts! (get vault-enabled cfg) ERR-PAUSED)
      (asserts! (get redeem-enabled cfg) ERR-PAUSED)
      (asserts! (>= assets (get min-redeem cfg)) ERR-BELOW-MIN)
      (asserts! (> shares u0) ERR-ZERO-SHARES)
      (asserts! (> gross u0) ERR-BELOW-MIN)
      (if is-express (asserts! (get express-enabled cfg) ERR-EXPRESS-DISABLED) true)
      (try! (contract-call? .zvstBTC transfer shares tx-sender current-contract none))
      (let ((claim-id (try! (contract-call? .zv-state-stbtc-0 next-claim-id))))
        (try! (contract-call? .zv-state-stbtc-0 set-claim claim-id
          { user: tx-sender, shares: shares, share-price: (some request-price),
            assets: none, fee: none, fee-bps: fee-bps, ts: ts, is-express: is-express }))
        (print { action: "sv-request-redeem", user: tx-sender,
                 data: { claim-id: claim-id, shares: shares, assets-requested: assets-safe,
                         cooldown: cd, fee-bps: fee-bps, ts: ts, is-express: is-express } })
        (ok claim-id)))))

;;-------------------------------------
;; Fund Claim - lock assets/fee against live pro-rata
;;-------------------------------------

(define-public (fund-claim (claim-id uint))
  (let (
    (claim (unwrap! (contract-call? .zv-state-stbtc-0 get-claim claim-id) ERR-NO-CLAIM))
    (is-mgr (contract-call? .zv-state-stbtc-0 is-manager-or-engine contract-caller))
    (is-cooled-down (>= stacks-block-time (get ts claim)))
    (cfg (contract-call? .zv-state-stbtc-0 get-redeem-config))
    (supply (unwrap-panic (contract-call? .zvstBTC get-total-supply)))
    (gross (try! (compute-gross-nav)))
    (shares (get shares claim))
    (share-price (default-to (live-price gross supply) (get share-price claim)))
    (assets-quoted (/ (* shares share-price) SHARE-BASE))
    ;; live pro-rata clamp: never pay a claim more than its share of current NAV
    (claimable (if (> supply u0) (/ (* shares gross) supply) u0))
    (assets (if (> assets-quoted claimable) claimable assets-quoted))
    (fee (/ (* assets (get fee-bps claim)) BPS-BASE))
  )
    (asserts! (or is-mgr is-cooled-down) ERR-NOT-COOLED-DOWN)
    (asserts! (is-none (get assets claim)) ERR-ALREADY-FUNDED)
    (asserts! (get vault-enabled cfg) ERR-PAUSED)
    (asserts! (> assets u0) ERR-BELOW-MIN)
    ;; funded liability must be covered by idle stBTC custody on sv-state
    (asserts!
      (>= (unwrap-panic (contract-call? .stbtc-token get-balance .zv-state-stbtc-0))
          (+ (get funded-claim-liability cfg) (- assets fee)))
      ERR-BELOW-MIN)
    (try! (contract-call? .zv-state-stbtc-0 set-claim claim-id
      (merge claim { share-price: (some share-price), assets: (some assets), fee: (some fee) })))
    (try! (contract-call? .zvstBTC burn shares current-contract))
    (try! (contract-call? .zv-state-stbtc-0 add-claim-liability (- assets fee)))
    (try! (contract-call? .zv-state-stbtc-0 sub-deposited assets))
    (print { action: "sv-fund-claim", user: contract-caller,
             data: { claim-id: claim-id, shares: shares, assets: assets,
                     assets-quoted: assets-quoted, fee: fee, share-price: share-price } })
    (ok assets)))

;;-------------------------------------
;; Redeem - pay out after cooldown
;;-------------------------------------

(define-public (redeem (token <ft-trait>) (claim-id uint))
  (let (
    (claim (unwrap! (contract-call? .zv-state-stbtc-0 get-claim claim-id) ERR-NO-CLAIM))
    (assets (unwrap! (get assets claim) ERR-NOT-FUNDED))
    (fee (unwrap-panic (get fee claim)))
    (user (get user claim))
    (assets-net (- assets fee))
    (vault-on (contract-call? .zv-state-stbtc-0 get-vault-enabled))
  )
    (asserts! (>= stacks-block-time (get ts claim)) ERR-NOT-COOLED-DOWN)
    (asserts! vault-on ERR-PAUSED)
    (try! (contract-call? .zv-state-stbtc-0 transfer-collateral-out token assets-net user))
    (try! (contract-call? .zv-state-stbtc-0 sub-claim-liability assets-net))
    (try! (contract-call? .zv-state-stbtc-0 delete-claim claim-id))
    ;; The exit/express fee stays in the vault, lifting NAV-per-share for remaining holders.
    (print { action: "sv-redeem", user: tx-sender,
             data: { claim-id: claim-id, assets: assets, fee: fee, assets-net: assets-net, user: user } })
    (ok assets-net)))

;;-------------------------------------
;; Cancel Redeem (standard only)
;;-------------------------------------

(define-public (cancel-redeem (claim-id uint))
  (let (
    (claim (unwrap! (contract-call? .zv-state-stbtc-0 get-claim claim-id) ERR-NO-CLAIM))
    (shares (get shares claim))
  )
    (asserts! (is-eq contract-caller (get user claim)) ERR-NOT-AUTHORIZED)
    (asserts! (is-none (get assets claim)) ERR-ALREADY-FUNDED)
    (asserts! (not (get is-express claim)) ERR-CANCEL-EXPRESS)
    (try! (as-contract? ((with-ft .zvstBTC "*" shares))
      (try! (contract-call? .zvstBTC transfer shares tx-sender (get user claim) none))))
    (try! (contract-call? .zv-state-stbtc-0 delete-claim claim-id))
    (print { action: "sv-cancel-redeem", user: contract-caller,
             data: { claim-id: claim-id, shares: shares } })
    (ok shares)))

;;-------------------------------------
;; Read-Only Helpers (live)
;;-------------------------------------

(define-read-only (get-net-assets)
  (compute-gross-nav))

(define-read-only (get-share-price)
  (let ((supply (unwrap-panic (contract-call? .zvstBTC get-total-supply)))
        (gross (try! (compute-gross-nav))))
    (ok (live-price gross supply))))

(define-read-only (convert-to-shares (amount uint))
  (let ((supply (unwrap-panic (contract-call? .zvstBTC get-total-supply)))
        (gross (try! (compute-gross-nav))))
    (ok (if (> gross u0) (/ (* amount supply) gross) amount))))

(define-read-only (convert-to-assets (shares uint))
  (let ((supply (unwrap-panic (contract-call? .zvstBTC get-total-supply)))
        (gross (try! (compute-gross-nav))))
    (ok (if (> supply u0) (/ (* shares gross) supply) u0))))

(define-read-only (preview-deposit (amount uint)) (convert-to-shares amount))
(define-read-only (preview-redeem (shares uint)) (convert-to-assets shares))
