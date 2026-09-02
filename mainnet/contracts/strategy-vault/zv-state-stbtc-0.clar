(use-trait ft-trait 'SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.ft-trait.ft-trait)

(define-constant COLLATERAL-TOKEN 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.stbtc-token)

(define-constant STX-WRAPPER-CONTRACT 'SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.wstx)
(define-constant SBTC-TOKEN 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token)

(define-constant ERR-NOT-AUTHORIZED (err u860001))
(define-constant ERR-NO-CLAIM (err u860002))
(define-constant ERR-TIMELOCK-NOT-READY (err u860003))
(define-constant ERR-NO-PENDING-UPDATE (err u860004))
(define-constant ERR-INVALID-KEY (err u860005))
(define-constant ERR-WRONG-TOKEN (err u860006))
(define-constant ERR-INSUFFICIENT-LIQUIDITY (err u860007))

(define-constant SHARE-BASE u100000000)
(define-constant BPS-BASE u10000)
(define-constant PCT-BASE u100)

(define-constant KEY-MIN-DEPOSIT 0x03)
(define-constant KEY-MIN-REDEEM 0x04)
(define-constant KEY-COOLDOWN 0x05)
(define-constant KEY-EXPRESS-COOLDOWN 0x06)
(define-constant KEY-MGMT-FEE-BPS 0x0A)
(define-constant KEY-PERF-FEE-BPS 0x0B)
(define-constant KEY-EXIT-FEE-BPS 0x0C)
(define-constant KEY-EXPRESS-FEE-BPS 0x0D)

(define-constant KEY-FEE-RECIPIENT 0x0F)
(define-constant KEY-TRADER 0x10)
(define-constant KEY-REWARDER 0x11)
(define-constant KEY-MANAGER 0x12)
(define-constant KEY-GUARDIAN 0x13)
(define-constant KEY-ENGINE 0x14)
(define-constant KEY-OPS 0x15)

(define-constant MAX-MGMT-FEE u55)
(define-constant MAX-PERF-FEE u3000)
(define-constant MAX-EXIT-FEE u100)
(define-constant MAX-EXPRESS-FEE u200)

(define-constant MIN-TIMELOCK u86400)
(define-constant MAX-TIMELOCK u2592000)
(define-constant MAX-COOLDOWN u2592000)

(define-data-var owner principal tx-sender)
(define-data-var authorized-engine principal .zv-engine-stbtc-0)
(define-data-var authorized-ops principal .zv-ops-stbtc-0)
(define-data-var guardian principal tx-sender)
(define-data-var trader principal tx-sender)
(define-data-var rewarder principal tx-sender)
(define-data-var manager principal tx-sender)

(define-data-var claim-counter uint u0)

(define-data-var funded-claim-liability uint u0)

(define-data-var last-fee-ts uint u0)
(define-data-var hwm-per-share uint u100000000)

(define-data-var fee-recipient principal 'SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.dao-treasury)
(define-data-var deposit-cap uint u2000000000)
(define-data-var net-deposited uint u0)
(define-data-var min-deposit uint u100)
(define-data-var min-redeem uint u100)
(define-data-var cooldown uint u2592000)
(define-data-var express-cooldown uint u14400)
(define-data-var express-enabled bool false)
(define-data-var mgmt-fee-bps uint u0)
(define-data-var perf-fee-bps uint u1000)
(define-data-var exit-fee-bps uint u0)
(define-data-var express-fee-bps uint u50)

(define-data-var vault-enabled bool true)
(define-data-var deposit-enabled bool true)
(define-data-var redeem-enabled bool true)
(define-data-var trading-enabled bool true)

(define-map claims { claim-id: uint }
  { user: principal,
    shares: uint,
    share-price: (optional uint),
    assets: (optional uint),
    fee: (optional uint),
    fee-bps: uint,
    ts: uint,
    is-express: bool })

(define-data-var timelock-duration uint u86400)

(define-map pending-uint-updates { key: (buff 1) }
  { value: uint, activation-ts: uint })

(define-map pending-principal-updates { key: (buff 1) }
  { value: principal, activation-ts: uint })

(define-read-only (is-engine (caller principal))
  (is-eq caller (var-get authorized-engine)))

(define-read-only (is-ops (caller principal))
  (is-eq caller (var-get authorized-ops)))

(define-read-only (is-owner (caller principal))
  (is-eq caller (var-get owner)))

(define-read-only (is-guardian (caller principal))
  (is-eq caller (var-get guardian)))

(define-read-only (is-trader (caller principal))
  (is-eq caller (var-get trader)))

(define-read-only (is-rewarder (caller principal))
  (is-eq caller (var-get rewarder)))

(define-read-only (is-manager-or-engine (caller principal))
  (or (is-eq caller (var-get manager)) (is-eq caller (var-get authorized-engine))))

(define-read-only (get-deposit-config)
  { deposit-cap: (var-get deposit-cap),
    net-deposited: (var-get net-deposited),
    min-deposit: (var-get min-deposit),
    deposit-enabled: (var-get deposit-enabled),
    vault-enabled: (var-get vault-enabled) })

(define-read-only (get-redeem-config)
  { funded-claim-liability: (var-get funded-claim-liability),
    min-redeem: (var-get min-redeem),
    cooldown: (var-get cooldown),
    express-cooldown: (var-get express-cooldown),
    express-enabled: (var-get express-enabled),
    exit-fee-bps: (var-get exit-fee-bps),
    express-fee-bps: (var-get express-fee-bps),
    redeem-enabled: (var-get redeem-enabled),
    vault-enabled: (var-get vault-enabled) })

(define-read-only (get-fee-config)
  { mgmt-fee-bps: (var-get mgmt-fee-bps),
    perf-fee-bps: (var-get perf-fee-bps),
    fee-recipient: (var-get fee-recipient),
    last-fee-ts: (var-get last-fee-ts),
    hwm-per-share: (var-get hwm-per-share) })

(define-read-only (get-funded-claim-liability) (var-get funded-claim-liability))
(define-read-only (get-hwm-per-share) (var-get hwm-per-share))
(define-read-only (get-last-fee-ts) (var-get last-fee-ts))
(define-read-only (get-fee-recipient) (var-get fee-recipient))
(define-read-only (get-vault-enabled) (var-get vault-enabled))
(define-read-only (get-trading-enabled) (var-get trading-enabled))
(define-read-only (get-collateral-token) COLLATERAL-TOKEN)

(define-read-only (get-claim (id uint))
  (map-get? claims { claim-id: id }))

(define-public (set-claim
    (id uint)
    (claim { user: principal, shares: uint, share-price: (optional uint),
             assets: (optional uint), fee: (optional uint), fee-bps: uint,
             ts: uint, is-express: bool }))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (ok (map-set claims { claim-id: id } claim))))

(define-public (delete-claim (id uint))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (ok (map-delete claims { claim-id: id }))))

(define-public (next-claim-id)
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (let ((id (var-get claim-counter)))
      (var-set claim-counter (+ id u1))
      (ok id))))

(define-public (set-fee-anchors (new-hwm uint) (new-ts uint))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (var-set hwm-per-share new-hwm)
    (var-set last-fee-ts new-ts)
    (ok true)))

(define-public (add-claim-liability (amount uint))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (var-set funded-claim-liability (+ (var-get funded-claim-liability) amount))
    (ok true)))

(define-public (add-deposited (amount uint))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (ok (var-set net-deposited (+ (var-get net-deposited) amount)))))

(define-public (sub-deposited (amount uint))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (ok (var-set net-deposited
      (if (>= (var-get net-deposited) amount) (- (var-get net-deposited) amount) u0)))))

(define-public (sub-claim-liability (amount uint))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (var-set funded-claim-liability (- (var-get funded-claim-liability) amount))
    (ok true)))

(define-public (transfer-collateral-in (token <ft-trait>) (amount uint) (sender principal))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq (contract-of token) COLLATERAL-TOKEN) ERR-WRONG-TOKEN)
    (contract-call? token transfer amount sender current-contract none)))

(define-public (transfer-collateral-out (token <ft-trait>) (amount uint) (recipient principal))
  (let ((token-addr (contract-of token)))
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq token-addr COLLATERAL-TOKEN) ERR-WRONG-TOKEN)
    (if (is-eq token-addr STX-WRAPPER-CONTRACT)
      (as-contract? ((with-stx amount))
        (try! (contract-call? token transfer amount tx-sender recipient none)))
      (as-contract? ((with-ft token-addr "*" amount))
        (try! (contract-call? token transfer amount tx-sender recipient none))))))

(define-public (transfer-collateral-to-ops (token <ft-trait>) (amount uint))
  (let ((token-addr (contract-of token))
        (balance (unwrap-panic (contract-call? token get-balance current-contract))))
    (asserts! (or (is-engine contract-caller) (is-ops contract-caller)) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq token-addr COLLATERAL-TOKEN) ERR-WRONG-TOKEN)
    (asserts! (>= balance (+ amount (var-get funded-claim-liability)))
              ERR-INSUFFICIENT-LIQUIDITY)
    (if (is-eq token-addr STX-WRAPPER-CONTRACT)
      (as-contract? ((with-stx amount))
        (try! (contract-call? token transfer amount tx-sender (var-get authorized-ops) none)))
      (as-contract? ((with-ft token-addr "*" amount))
        (try! (contract-call? token transfer amount tx-sender (var-get authorized-ops) none))))))

(define-public (transfer-sbtc-in (token <ft-trait>) (amount uint) (sender principal))
  (begin
    (asserts! (is-engine contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq (contract-of token) SBTC-TOKEN) ERR-WRONG-TOKEN)
    (contract-call? token transfer amount sender current-contract none)))

(define-public (transfer-sbtc-to-ops (token <ft-trait>) (amount uint))
  (let ((token-addr (contract-of token)))
    (asserts! (is-ops contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq token-addr SBTC-TOKEN) ERR-WRONG-TOKEN)
    (as-contract? ((with-ft token-addr "*" amount))
      (try! (contract-call? token transfer amount tx-sender (var-get authorized-ops) none)))))

(define-public (receive-sbtc-from-ops (token <ft-trait>) (amount uint) (sender principal))
  (begin
    (asserts! (is-ops contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq (contract-of token) SBTC-TOKEN) ERR-WRONG-TOKEN)
    (asserts! (> amount u0) ERR-NOT-AUTHORIZED)
    (contract-call? token transfer amount sender current-contract none)))

(define-public (receive-yield-collateral (token <ft-trait>) (amount uint) (sender principal))
  (begin
    (asserts! (is-ops contract-caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq (contract-of token) COLLATERAL-TOKEN) ERR-WRONG-TOKEN)
    (asserts! (> amount u0) ERR-NOT-AUTHORIZED)
    (contract-call? token transfer amount sender current-contract none)))

(define-public (pause-vault)
  (begin
    (asserts! (is-guardian contract-caller) ERR-NOT-AUTHORIZED)
    (var-set vault-enabled false)
    (var-set trading-enabled false)
    (print { action: "pause-vault", user: contract-caller })
    (ok true)))

(define-public (set-vault-enabled (enabled bool))
  (begin
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (ok (var-set vault-enabled enabled))))

(define-public (set-deposit-enabled (enabled bool))
  (begin
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (ok (var-set deposit-enabled enabled))))

(define-public (set-deposit-cap (value uint))
  (begin
    (asserts! (or (is-owner tx-sender) (is-eq tx-sender (var-get manager))) ERR-NOT-AUTHORIZED)
    (print { action: "set-deposit-cap", user: tx-sender, data: { value: value } })
    (ok (var-set deposit-cap value))))

(define-public (set-redeem-enabled (enabled bool))
  (begin
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (ok (var-set redeem-enabled enabled))))

(define-public (set-trading-enabled (enabled bool))
  (begin
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (ok (var-set trading-enabled enabled))))

(define-public (set-express-enabled (enabled bool))
  (begin
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (ok (var-set express-enabled enabled))))

(define-public (set-hot-role (key (buff 1)) (value principal))
  (begin
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (asserts! (or (is-eq key KEY-TRADER) (is-eq key KEY-REWARDER)
                  (is-eq key KEY-MANAGER) (is-eq key KEY-GUARDIAN)) ERR-INVALID-KEY)
    (if (is-eq key KEY-TRADER) (var-set trader value)
    (if (is-eq key KEY-REWARDER) (var-set rewarder value)
    (if (is-eq key KEY-MANAGER) (var-set manager value)
      (var-set guardian value))))
    (print { action: "set-hot-role", user: contract-caller, data: { key: key, value: value } })
    (ok true)))

(define-public (set-timelock-duration (duration uint))
  (begin
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (asserts! (and (>= duration MIN-TIMELOCK) (<= duration MAX-TIMELOCK)) ERR-INVALID-KEY)
    (print { action: "set-timelock-duration", user: contract-caller, data: { duration: duration } })
    (ok (var-set timelock-duration duration))))

(define-public (request-uint-update (key (buff 1)) (value uint))
  (let ((k (buff-to-uint-be key)))
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (asserts! (and (>= k u3) (<= k u13)) ERR-INVALID-KEY)
    (map-set pending-uint-updates { key: key }
      { value: value, activation-ts: (+ stacks-block-time (var-get timelock-duration)) })
    (print { action: "request-uint-update", user: contract-caller, data: { key: key, value: value } })
    (ok true)))

(define-public (confirm-uint-update (key (buff 1)))
  (let (
    (update (unwrap! (map-get? pending-uint-updates { key: key }) ERR-NO-PENDING-UPDATE))
    (value (get value update))
  )
    (asserts! (>= stacks-block-time (get activation-ts update)) ERR-TIMELOCK-NOT-READY)
    (try!
      (if (is-eq key KEY-MIN-DEPOSIT) (ok (var-set min-deposit value))
      (if (is-eq key KEY-MIN-REDEEM) (ok (var-set min-redeem value))
      (if (is-eq key KEY-COOLDOWN) (begin (asserts! (<= value MAX-COOLDOWN) ERR-INVALID-KEY) (ok (var-set cooldown value)))
      (if (is-eq key KEY-EXPRESS-COOLDOWN) (ok (var-set express-cooldown value))
      (if (is-eq key KEY-MGMT-FEE-BPS) (begin (asserts! (<= value MAX-MGMT-FEE) ERR-INVALID-KEY) (ok (var-set mgmt-fee-bps value)))
      (if (is-eq key KEY-PERF-FEE-BPS) (begin (asserts! (<= value MAX-PERF-FEE) ERR-INVALID-KEY) (ok (var-set perf-fee-bps value)))
      (if (is-eq key KEY-EXIT-FEE-BPS) (begin (asserts! (<= value MAX-EXIT-FEE) ERR-INVALID-KEY) (ok (var-set exit-fee-bps value)))
      (if (is-eq key KEY-EXPRESS-FEE-BPS) (begin (asserts! (<= value MAX-EXPRESS-FEE) ERR-INVALID-KEY) (ok (var-set express-fee-bps value)))
      ERR-INVALID-KEY)))))))))
    (map-delete pending-uint-updates { key: key })
    (ok true)))

(define-public (request-principal-update (key (buff 1)) (value principal))
  (let ((k (buff-to-uint-be key)))
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (asserts! (or (is-eq k u15) (is-eq k u20) (is-eq k u21)) ERR-INVALID-KEY)
    (map-set pending-principal-updates { key: key }
      { value: value, activation-ts: (+ stacks-block-time (var-get timelock-duration)) })
    (print { action: "request-principal-update", user: contract-caller, data: { key: key, value: value } })
    (ok true)))

(define-public (confirm-principal-update (key (buff 1)))
  (let (
    (update (unwrap! (map-get? pending-principal-updates { key: key }) ERR-NO-PENDING-UPDATE))
    (value (get value update))
  )
    (asserts! (>= stacks-block-time (get activation-ts update)) ERR-TIMELOCK-NOT-READY)
    (map-delete pending-principal-updates { key: key })
    (if (is-eq key KEY-FEE-RECIPIENT) (ok (var-set fee-recipient value))
    (if (is-eq key KEY-ENGINE) (begin
      (var-set authorized-engine value)
      (try! (contract-call? .zvstBTC set-authorized-minter value))
      (ok true))
    (if (is-eq key KEY-OPS) (ok (var-set authorized-ops value))
    ERR-INVALID-KEY)))
  ))

(define-data-var pending-owner (optional principal) none)

(define-public (request-owner-transfer (new-owner principal))
  (begin
    (asserts! (is-owner tx-sender) ERR-NOT-AUTHORIZED)
    (ok (var-set pending-owner (some new-owner)))))

(define-public (claim-ownership)
  (let ((po (unwrap! (var-get pending-owner) ERR-NOT-AUTHORIZED)))
    (asserts! (is-eq tx-sender po) ERR-NOT-AUTHORIZED)
    (var-set owner po)
    (var-set pending-owner none)
    (ok true)))
