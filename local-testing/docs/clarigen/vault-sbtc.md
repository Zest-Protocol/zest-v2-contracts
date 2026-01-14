
# vault-sbtc

[`vault-sbtc.clar`](../../contracts/vault/vault-sbtc.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

sbtc vault - 1

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

**Public functions:**

- [`initialize`](#initialize)
- [`set-authorized-contract`](#set-authorized-contract)
- [`set-flashloan-permissions`](#set-flashloan-permissions)
- [`set-flashloan-permissions-many`](#set-flashloan-permissions-many)
- [`set-cap-debt`](#set-cap-debt)
- [`set-cap-supply`](#set-cap-supply)
- [`set-fee-flash`](#set-fee-flash)
- [`set-default-flashloan-permissions`](#set-default-flashloan-permissions)
- [`set-fee-reserve`](#set-fee-reserve)
- [`set-points-util`](#set-points-util)
- [`set-points-rate`](#set-points-rate)
- [`set-token-uri`](#set-token-uri)
- [`set-pause-states`](#set-pause-states)
- [`transfer`](#transfer)
- [`deposit`](#deposit)
- [`redeem`](#redeem)
- [`accrue`](#accrue)
- [`system-borrow`](#system-borrow)
- [`system-repay`](#system-repay)
- [`socialize-debt`](#socialize-debt)
- [`flashloan`](#flashloan)

**Read-only functions:**

- [`get-name`](#get-name)
- [`get-symbol`](#get-symbol)
- [`get-token-uri`](#get-token-uri)
- [`get-decimals`](#get-decimals)
- [`get-total-supply`](#get-total-supply)
- [`get-balance`](#get-balance)
- [`is-authorized-contract`](#is-authorized-contract)
- [`get-cap-debt`](#get-cap-debt)
- [`get-cap-supply`](#get-cap-supply)
- [`get-fee-flash`](#get-fee-flash)
- [`get-fee-reserve`](#get-fee-reserve)
- [`get-default-flashloan-permissions`](#get-default-flashloan-permissions)
- [`get-flashloan-permissions`](#get-flashloan-permissions)
- [`get-points-util`](#get-points-util)
- [`get-points-rate`](#get-points-rate)
- [`get-pause-states`](#get-pause-states)
- [`get-assets`](#get-assets)
- [`get-total-assets`](#get-total-assets)
- [`convert-to-shares`](#convert-to-shares)
- [`convert-to-assets`](#convert-to-assets)
- [`get-principal-scaled`](#get-principal-scaled)
- [`get-index`](#get-index)
- [`get-last-update`](#get-last-update)
- [`get-debt`](#get-debt)
- [`get-utilization`](#get-utilization)
- [`get-interest-rate`](#get-interest-rate)
- [`get-next-index`](#get-next-index)
- [`get-principal-ratio-reduction`](#get-principal-ratio-reduction)
- [`get-liquidity-index`](#get-liquidity-index)
- [`get-underlying`](#get-underlying)
- [`get-available-assets`](#get-available-assets)

**Private functions:**

- [`mul-div-down`](#mul-div-down)
- [`mul-div-up`](#mul-div-up)
- [`min`](#min)
- [`max`](#max)
- [`mul-bps-down`](#mul-bps-down)
- [`calc-utilization`](#calc-utilization)
- [`calc-multiplier-delta`](#calc-multiplier-delta)
- [`calc-cumulative-debt`](#calc-cumulative-debt)
- [`calc-index-next`](#calc-index-next)
- [`calc-liquidity-rate`](#calc-liquidity-rate)
- [`calc-principal-ratio-reduction`](#calc-principal-ratio-reduction)
- [`interpolate-rate`](#interpolate-rate)
- [`resolve-and-interpolate`](#resolve-and-interpolate)
- [`resolve-interpolation-points`](#resolve-interpolation-points)
- [`linear-interpolate`](#linear-interpolate)
- [`zip`](#zip)
- [`combine-elements`](#combine-elements)
- [`pack-u16`](#pack-u16)
- [`iter-pack-u16`](#iter-pack-u16)
- [`unpack-u16`](#unpack-u16)
- [`unpack-u16-at`](#unpack-u16-at)
- [`iter-unpack-u16`](#iter-unpack-u16)
- [`check-dao-auth`](#check-dao-auth)
- [`check-caller-auth`](#check-caller-auth)
- [`total-supply`](#total-supply)
- [`get-balance-internal`](#get-balance-internal)
- [`receive-underlying`](#receive-underlying)
- [`send-underlying`](#send-underlying)
- [`ubalance`](#ubalance)
- [`convert-to-shares-preview`](#convert-to-shares-preview)
- [`convert-to-assets-preview`](#convert-to-assets-preview)
- [`total-debt`](#total-debt)
- [`debt-preview`](#debt-preview)
- [`total-assets`](#total-assets)
- [`total-assets-preview`](#total-assets-preview)
- [`calc-treasury-lp-preview`](#calc-treasury-lp-preview)
- [`total-supply-preview`](#total-supply-preview)
- [`utilization`](#utilization)
- [`interest-rate`](#interest-rate)
- [`next-index`](#next-index)
- [`next-liquidity-index`](#next-liquidity-index)
- [`principal-ratio-reduction`](#principal-ratio-reduction)
- [`set-permission-single`](#set-permission-single)

**Maps**

- [`authorized-contracts`](#authorized-contracts)
- [`flashloan-permissions`](#flashloan-permissions)

**Variables**

- [`initialized`](#initialized)
- [`token-uri`](#token-uri)
- [`cap-debt`](#cap-debt)
- [`cap-supply`](#cap-supply)
- [`fee-flash`](#fee-flash)
- [`fee-reserve`](#fee-reserve)
- [`in-flashloan`](#in-flashloan)
- [`default-flashloan-permissions`](#default-flashloan-permissions)
- [`points-ir`](#points-ir)
- [`pause-states`](#pause-states)
- [`assets`](#assets)
- [`total-borrowed`](#total-borrowed)
- [`principal-scaled`](#principal-scaled)
- [`index`](#index)
- [`lindex`](#lindex)
- [`last-update`](#last-update)

**Constants**

- [`UNDERLYING`](#underlying)
- [`NAME`](#name)
- [`SYMBOL`](#symbol)
- [`DECIMALS`](#decimals)
- [`BPS`](#bps)
- [`PRECISION`](#precision)
- [`INDEX-PRECISION`](#index-precision)
- [`SECONDS-PER-YEAR-BPS`](#seconds-per-year-bps)
- [`MAX-U128`](#max-u128)
- [`MAX-U16`](#max-u16)
- [`MASK-U16`](#mask-u16)
- [`BIT-U16`](#bit-u16)
- [`MINIMUM-LIQUIDITY`](#minimum-liquidity)
- [`NULL-ADDRESS`](#null-address)
- [`ITER-UINT-8`](#iter-uint-8)
- [`ERR-AUTH`](#err-auth)
- [`ERR-INIT`](#err-init)
- [`ERR-ALREADY-INITIALIZED`](#err-already-initialized)
- [`ERR-REENTRANCY`](#err-reentrancy)
- [`ERR-RESERVE-VALIDATION`](#err-reserve-validation)
- [`ERR-PAUSED`](#err-paused)
- [`ERR-TOKENIZED-VAULT-PRECONDITIONS`](#err-tokenized-vault-preconditions)
- [`ERR-TOKENIZED-VAULT-POSTCONDITIONS`](#err-tokenized-vault-postconditions)
- [`ERR-AMOUNT-ZERO`](#err-amount-zero)
- [`ERR-SLIPPAGE`](#err-slippage)
- [`ERR-SUPPLY-CAP-EXCEEDED`](#err-supply-cap-exceeded)
- [`ERR-OUTPUT-ZERO`](#err-output-zero)
- [`ERR-INSUFFICIENT-BALANCE`](#err-insufficient-balance)
- [`ERR-INSUFFICIENT-LIQUIDITY`](#err-insufficient-liquidity)
- [`ERR-LENDING-PRECONDITIONS`](#err-lending-preconditions)
- [`ERR-LENDING-POSTCONDITIONS`](#err-lending-postconditions)
- [`ERR-NO-RESERVES`](#err-no-reserves)
- [`ERR-INSUFFICIENT-VAULT-LIQUIDITY`](#err-insufficient-vault-liquidity)
- [`ERR-DEBT-CAP-EXCEEDED`](#err-debt-cap-exceeded)
- [`ERR-INSUFFICIENT-ASSETS`](#err-insufficient-assets)
- [`ERR-INVALID-ADDRESS`](#err-invalid-address)
- [`ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY`](#err-insufficient-flashloan-liquidity)
- [`ERR-FLASHLOAN-UNAUTHORIZED`](#err-flashloan-unauthorized)
- [`ERR-INVALID-U16`](#err-invalid-u16)


## Functions

### mul-div-down

[View in file](../../contracts/vault/vault-sbtc.clar#L148)

`(define-private (mul-div-down ((x uint) (y uint) (z uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mul-div-down (x uint) (y uint) (z uint))
  (/ (* x y) z))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| x | uint |
| y | uint |
| z | uint |

### mul-div-up

[View in file](../../contracts/vault/vault-sbtc.clar#L151)

`(define-private (mul-div-up ((x uint) (y uint) (z uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mul-div-up (x uint) (y uint) (z uint))
  (/ (+ (* x y) (- z u1)) z))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| x | uint |
| y | uint |
| z | uint |

### min

[View in file](../../contracts/vault/vault-sbtc.clar#L154)

`(define-private (min ((a uint) (b uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (min (a uint) (b uint)) 
  (if (< a b) a b))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| a | uint |
| b | uint |

### max

[View in file](../../contracts/vault/vault-sbtc.clar#L157)

`(define-private (max ((a uint) (b uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (max (a uint) (b uint)) 
  (if (> a b) a b))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| a | uint |
| b | uint |

### mul-bps-down

[View in file](../../contracts/vault/vault-sbtc.clar#L160)

`(define-private (mul-bps-down ((x uint) (y uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mul-bps-down (x uint) (y uint)) 
  (/ (* x y) BPS))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| x | uint |
| y | uint |

### calc-utilization

[View in file](../../contracts/vault/vault-sbtc.clar#L165)

`(define-private (calc-utilization ((available-liquidity uint) (debt-amount uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (calc-utilization (available-liquidity uint) (debt-amount uint))
  (let ((total (+ debt-amount available-liquidity)))
    (if (is-eq total u0)
        u0
        (mul-div-down debt-amount BPS total))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| available-liquidity | uint |
| debt-amount | uint |

### calc-multiplier-delta

[View in file](../../contracts/vault/vault-sbtc.clar#L171)

`(define-private (calc-multiplier-delta ((rate uint) (time-delta uint) (round-up bool)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (calc-multiplier-delta (rate uint) (time-delta uint) (round-up bool))
  (+ INDEX-PRECISION
    (if round-up
      (mul-div-up rate
                  (* time-delta INDEX-PRECISION)
                  SECONDS-PER-YEAR-BPS)
      (mul-div-down rate
                  (* time-delta INDEX-PRECISION)
                  SECONDS-PER-YEAR-BPS))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| rate | uint |
| time-delta | uint |
| round-up | bool |

### calc-cumulative-debt

[View in file](../../contracts/vault/vault-sbtc.clar#L181)

`(define-private (calc-cumulative-debt ((principal-amount uint) (idx uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (calc-cumulative-debt (principal-amount uint) (idx uint))
  (mul-div-up principal-amount idx INDEX-PRECISION))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| principal-amount | uint |
| idx | uint |

### calc-index-next

[View in file](../../contracts/vault/vault-sbtc.clar#L184)

`(define-private (calc-index-next ((index-curr uint) (multiplier uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (calc-index-next (index-curr uint) (multiplier uint))
  (mul-div-down index-curr multiplier INDEX-PRECISION))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| index-curr | uint |
| multiplier | uint |

### calc-liquidity-rate

[View in file](../../contracts/vault/vault-sbtc.clar#L187)

`(define-private (calc-liquidity-rate ((var-borrow-rate uint) (util-pct uint) (reserve-factor-bps uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (calc-liquidity-rate (var-borrow-rate uint) (util-pct uint) (reserve-factor-bps uint))
  (let ((util-applied (mul-bps-down var-borrow-rate util-pct))
        (one-minus-rf (- BPS reserve-factor-bps)))
    (mul-bps-down util-applied one-minus-rf)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| var-borrow-rate | uint |
| util-pct | uint |
| reserve-factor-bps | uint |

### calc-principal-ratio-reduction

[View in file](../../contracts/vault/vault-sbtc.clar#L192)

`(define-private (calc-principal-ratio-reduction ((amount uint) (scaled-principal uint) (debt-amount uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (calc-principal-ratio-reduction (amount uint) (scaled-principal uint) (debt-amount uint))
  (mul-div-down amount scaled-principal debt-amount))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| scaled-principal | uint |
| debt-amount | uint |

### interpolate-rate

[View in file](../../contracts/vault/vault-sbtc.clar#L197)

`(define-private (interpolate-rate ((util uint) (points-util (list 8 uint)) (points-rate (list 8 uint))) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (interpolate-rate (util uint) (points-util (list 8 uint)) (points-rate (list 8 uint)))
  (resolve-and-interpolate util points-util points-rate))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| util | uint |
| points-util | (list 8 uint) |
| points-rate | (list 8 uint) |

### resolve-and-interpolate

[View in file](../../contracts/vault/vault-sbtc.clar#L200)

`(define-private (resolve-and-interpolate ((target uint) (utils (list 8 uint)) (rates (list 8 uint))) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (resolve-and-interpolate (target uint) (utils (list 8 uint)) (rates (list 8 uint)))
  (let ((result (fold resolve-interpolation-points 
                      (zip utils rates)
                      {target: target, prev: {util: MAX-U128, rate: MAX-U128}, result: MAX-U128, found: false})))
    (get result result)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| target | uint |
| utils | (list 8 uint) |
| rates | (list 8 uint) |

### resolve-interpolation-points

[View in file](../../contracts/vault/vault-sbtc.clar#L206)

`(define-private (resolve-interpolation-points ((point (tuple (rate uint) (util uint))) (acc (tuple (found bool) (prev (tuple (rate uint) (util uint))) (result uint) (target uint)))) (tuple (found bool) (prev (tuple (rate uint) (util uint))) (result uint) (target uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (resolve-interpolation-points 
  (point {util: uint, rate: uint}) 
  (acc {target: uint, found: bool, result: uint, prev: {util: uint, rate: uint}}))
  (if (get found acc)
      acc
      (let ((util (get util point))
            (rate (get rate point)))
        (if (>= (get target acc) util)
            {target: (get target acc), prev: {util: util, rate: rate}, result: rate, found: false}
            (if (is-eq (get util (get prev acc)) MAX-U128)
                {target: (get target acc), prev: {util: util, rate: rate}, result: rate, found: true}
                (let ((interpolated (linear-interpolate (get target acc) 
                                                       (get util (get prev acc)) (get rate (get prev acc))
                                                       util rate)))
                  {target: (get target acc), prev: {util: util, rate: rate}, result: interpolated, found: true}))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| point | (tuple (rate uint) (util uint)) |
| acc | (tuple (found bool) (prev (tuple (rate uint) (util uint))) (result uint) (target uint)) |

### linear-interpolate

[View in file](../../contracts/vault/vault-sbtc.clar#L222)

`(define-private (linear-interpolate ((x uint) (x1 uint) (y1 uint) (x2 uint) (y2 uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (linear-interpolate (x uint) (x1 uint) (y1 uint) (x2 uint) (y2 uint))
  (if (is-eq x1 x2)
      y1
      (+ y1 (mul-div-down (- x x1) (- y2 y1) (- x2 x1)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| x | uint |
| x1 | uint |
| y1 | uint |
| x2 | uint |
| y2 | uint |

### zip

[View in file](../../contracts/vault/vault-sbtc.clar#L227)

`(define-private (zip ((util (list 8 uint)) (rate (list 8 uint))) (list 8 (tuple (rate uint) (util uint))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (zip (util (list 8 uint)) (rate (list 8 uint)))
  (map combine-elements ITER-UINT-8 util rate))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| util | (list 8 uint) |
| rate | (list 8 uint) |

### combine-elements

[View in file](../../contracts/vault/vault-sbtc.clar#L230)

`(define-private (combine-elements ((iter uint) (util uint) (rate uint)) (tuple (rate uint) (util uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (combine-elements (iter uint) (util uint) (rate uint))
  {util: util, rate: rate})
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| iter | uint |
| util | uint |
| rate | uint |

### pack-u16

[View in file](../../contracts/vault/vault-sbtc.clar#L235)

`(define-private (pack-u16 ((fields (list 8 uint)) (upper (optional uint))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (pack-u16 (fields (list 8 uint)) (upper (optional uint)))
  (let ((clamped-upper (match upper
                         val (if (<= val MAX-U16) val MAX-U16)
                         MAX-U16))
        (init { word: u0, fields: fields, valid: true, max: clamped-upper })
        (out (fold iter-pack-u16 ITER-UINT-8 init))
        (valid (get valid out))
        (valid? (asserts! valid ERR-INVALID-U16))
        (word (get word out)))
    (ok word)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| fields | (list 8 uint) |
| upper | (optional uint) |

### iter-pack-u16

[View in file](../../contracts/vault/vault-sbtc.clar#L246)

`(define-private (iter-pack-u16 ((i uint) (acc (tuple (fields (list 8 uint)) (max uint) (valid bool) (word uint)))) (tuple (fields (list 8 uint)) (max uint) (valid bool) (word uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-pack-u16 (i uint) (acc {word: uint, fields: (list 8 uint), valid: bool, max: uint}))
  (let ((fields (get fields acc))
        (max-val (get max acc))
        (pos (unwrap-panic (element-at fields i)))
        (valid (get valid acc))
        (pos-valid (<= pos max-val))
        (new-valid (and valid pos-valid))
        (word (get word acc))
        (mul (* i BIT-U16))
        (offset (pow u2 mul))
        (shiftl (* pos offset))
        (nword (+ word shiftl)))
    { fields: fields, word: nword, valid: new-valid, max: max-val }))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| i | uint |
| acc | (tuple (fields (list 8 uint)) (max uint) (valid bool) (word uint)) |

### unpack-u16

[View in file](../../contracts/vault/vault-sbtc.clar#L260)

`(define-private (unpack-u16 ((word uint)) (list 8 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (unpack-u16 (word uint))
  (let ((init { word: word, fields: (list) })
        (out (fold iter-unpack-u16 ITER-UINT-8 init)))
    (get fields out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| word | uint |

### unpack-u16-at

[View in file](../../contracts/vault/vault-sbtc.clar#L265)

`(define-private (unpack-u16-at ((word uint) (pos uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (unpack-u16-at (word uint) (pos uint))
  (let ((offset (* pos BIT-U16))
        (div (pow u2 offset))
        (shiftr (/ word div)))
    (mod shiftr MASK-U16)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| word | uint |
| pos | uint |

### iter-unpack-u16

[View in file](../../contracts/vault/vault-sbtc.clar#L271)

`(define-private (iter-unpack-u16 ((pos uint) (acc (tuple (fields (list 8 uint)) (word uint)))) (tuple (fields (list 8 uint)) (word uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-unpack-u16 (pos uint) (acc {word: uint, fields: (list 8 uint)}))
  (let ((word (get word acc))
        (fields (get fields acc))
        (unpack (unpack-u16-at word pos))
        (new (as-max-len? (append fields unpack) u8)))
    { word: word, fields: (unwrap-panic new) }))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| pos | uint |
| acc | (tuple (fields (list 8 uint)) (word uint)) |

### check-dao-auth

[View in file](../../contracts/vault/vault-sbtc.clar#L280)

`(define-private (check-dao-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))
```
</details>




### check-caller-auth

[View in file](../../contracts/vault/vault-sbtc.clar#L283)

`(define-private (check-caller-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-caller-auth)
  (ok (asserts! (is-authorized-contract contract-caller) ERR-AUTH)))
```
</details>




### total-supply

[View in file](../../contracts/vault/vault-sbtc.clar#L288)

`(define-private (total-supply () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (total-supply) (ft-get-supply zft))
```
</details>




### get-balance-internal

[View in file](../../contracts/vault/vault-sbtc.clar#L290)

`(define-private (get-balance-internal ((acc principal)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-balance-internal (acc principal)) (ft-get-balance zft acc))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| acc | principal |

### receive-underlying

[View in file](../../contracts/vault/vault-sbtc.clar#L292)

`(define-private (receive-underlying ((amount uint) (account principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (receive-underlying (amount uint) (account principal))
  (begin
    ;; @mainnet: (try! (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token transfer amount account current-contract none))
    (try! (contract-call? .sbtc transfer amount account current-contract none))
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| account | principal |

### send-underlying

[View in file](../../contracts/vault/vault-sbtc.clar#L298)

`(define-private (send-underlying ((amount uint) (account principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (send-underlying (amount uint) (account principal))
  (begin
    ;; @mainnet: (try! (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token transfer amount current-contract account none))
    (try! (contract-call? .sbtc transfer amount current-contract account none))
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| account | principal |

### ubalance

[View in file](../../contracts/vault/vault-sbtc.clar#L304)

`(define-private (ubalance () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (ubalance)
  ;; @mainnet: (unwrap-panic (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token get-balance-available current-contract)))
```
</details>




### convert-to-shares-preview

[View in file](../../contracts/vault/vault-sbtc.clar#L310)

`(define-private (convert-to-shares-preview ((amount uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (convert-to-shares-preview (amount uint))
  (let ((ta (total-assets-preview))
        (ts (total-supply-preview)))
    (if (is-eq ts u0)
        amount
        (if (is-eq ta u0)
            u0
            (mul-div-down amount ts ta)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |

### convert-to-assets-preview

[View in file](../../contracts/vault/vault-sbtc.clar#L319)

`(define-private (convert-to-assets-preview ((amount uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (convert-to-assets-preview (amount uint))
  (let ((ta (total-assets-preview))
        (ts (total-supply-preview)))
    (if (is-eq ta u0)
        u0
        (if (is-eq ts u0)
            u0
            (mul-div-down amount ta ts)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |

### total-debt

[View in file](../../contracts/vault/vault-sbtc.clar#L330)

`(define-private (total-debt () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (total-debt)
  (calc-cumulative-debt (var-get principal-scaled) (var-get index)))
```
</details>




### debt-preview

[View in file](../../contracts/vault/vault-sbtc.clar#L333)

`(define-private (debt-preview () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (debt-preview)
  (calc-cumulative-debt (var-get principal-scaled) (next-index)))
```
</details>




### total-assets

[View in file](../../contracts/vault/vault-sbtc.clar#L336)

`(define-private (total-assets () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (total-assets)
  (let ((current-assets (var-get assets))
        (debt (total-debt))
        (borrowed (var-get total-borrowed))
        (interest (if (> debt borrowed) (- debt borrowed) u0)))
    (+ current-assets interest)))
```
</details>




### total-assets-preview

[View in file](../../contracts/vault/vault-sbtc.clar#L343)

`(define-private (total-assets-preview () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (total-assets-preview)
  (let ((current-assets (var-get assets))
        (debt (debt-preview))
        (borrowed (var-get total-borrowed))
        (interest (if (> debt borrowed) (- debt borrowed) u0)))
    (+ current-assets interest)))
```
</details>




### calc-treasury-lp-preview

[View in file](../../contracts/vault/vault-sbtc.clar#L352)

`(define-private (calc-treasury-lp-preview () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (calc-treasury-lp-preview)
  (let ((scaled-principal (var-get principal-scaled))
        (idx (var-get index))
        (next (next-index))
        (old-debt (mul-div-down scaled-principal idx INDEX-PRECISION))
        (new-debt (mul-div-down scaled-principal next INDEX-PRECISION))
        (debt-delta (if (> new-debt old-debt) (- new-debt old-debt) u0))
        (reserve-inc (mul-div-down debt-delta (var-get fee-reserve) BPS))
        (ta-preview (total-assets-preview)))
    (if (> reserve-inc u0)
        (mul-div-down reserve-inc (total-supply) (- ta-preview reserve-inc))
        u0)))
```
</details>




### total-supply-preview

[View in file](../../contracts/vault/vault-sbtc.clar#L365)

`(define-private (total-supply-preview () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (total-supply-preview)
  (let ((current-supply (total-supply))
        (treasury-lp (calc-treasury-lp-preview)))
    (+ current-supply treasury-lp)))
```
</details>




### utilization

[View in file](../../contracts/vault/vault-sbtc.clar#L370)

`(define-private (utilization () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (utilization)
  (calc-utilization (get-available-assets) (total-debt)))
```
</details>




### interest-rate

[View in file](../../contracts/vault/vault-sbtc.clar#L373)

`(define-private (interest-rate () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (interest-rate)
  (let ((points-data (var-get points-ir))
        (uword (get util points-data))
        (rword (get rate points-data))
        (utils (unpack-u16 uword))
        (rates (unpack-u16 rword)))
    (interpolate-rate (utilization) utils rates)))
```
</details>




### next-index

[View in file](../../contracts/vault/vault-sbtc.clar#L381)

`(define-private (next-index () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (next-index)
  (let ((states (var-get pause-states))
        (idx (var-get index)))
    (if (get accrue states)
        idx
        (let (
            (rate (interest-rate))
            (time-delta (- stacks-block-time (var-get last-update)))
            (multiplier (if (is-eq time-delta u0)
                          INDEX-PRECISION
                          (calc-multiplier-delta rate time-delta true))))
          (calc-index-next idx multiplier)))))
```
</details>




### next-liquidity-index

[View in file](../../contracts/vault/vault-sbtc.clar#L394)

`(define-private (next-liquidity-index () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (next-liquidity-index)
  (let ((states (var-get pause-states))
        (lidx (var-get lindex)))
    (if (get accrue states)
        lidx
        (let (
            (rate (interest-rate))
            (liquidity-rate (calc-liquidity-rate rate (utilization) (var-get fee-reserve)))
            (time-delta (- stacks-block-time (var-get last-update)))
            (multiplier (if (is-eq time-delta u0)
                          INDEX-PRECISION
                          (calc-multiplier-delta liquidity-rate time-delta false))))
          (calc-index-next lidx multiplier)))))
```
</details>




### principal-ratio-reduction

[View in file](../../contracts/vault/vault-sbtc.clar#L408)

`(define-private (principal-ratio-reduction ((amount uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (principal-ratio-reduction (amount uint))
  (calc-principal-ratio-reduction amount (var-get principal-scaled) (debt-preview)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |

### set-permission-single

[View in file](../../contracts/vault/vault-sbtc.clar#L413)

`(define-private (set-permission-single ((update (tuple (account principal) (can-flashloan bool) (fee-exempt bool)))) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (set-permission-single 
    (update {account: principal, can-flashloan: bool, fee-exempt: bool}))
  (map-set flashloan-permissions 
    (get account update)
    {can-flashloan: (get can-flashloan update), fee-exempt: (get fee-exempt update)}))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| update | (tuple (account principal) (can-flashloan bool) (fee-exempt bool)) |

### get-name

[View in file](../../contracts/vault/vault-sbtc.clar#L425)

`(define-read-only (get-name () (response (string-ascii 9) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-name) (ok NAME))
```
</details>




### get-symbol

[View in file](../../contracts/vault/vault-sbtc.clar#L426)

`(define-read-only (get-symbol () (response (string-ascii 5) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-symbol) (ok SYMBOL))
```
</details>




### get-token-uri

[View in file](../../contracts/vault/vault-sbtc.clar#L427)

`(define-read-only (get-token-uri () (response (optional (string-utf8 256)) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-token-uri) (ok (var-get token-uri)))
```
</details>




### get-decimals

[View in file](../../contracts/vault/vault-sbtc.clar#L428)

`(define-read-only (get-decimals () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-decimals) (ok DECIMALS))
```
</details>




### get-total-supply

[View in file](../../contracts/vault/vault-sbtc.clar#L429)

`(define-read-only (get-total-supply () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-total-supply) (ok (total-supply)))
```
</details>




### get-balance

[View in file](../../contracts/vault/vault-sbtc.clar#L430)

`(define-read-only (get-balance ((account principal)) (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-balance (account principal)) (ok (get-balance-internal account)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### is-authorized-contract

[View in file](../../contracts/vault/vault-sbtc.clar#L434)

`(define-read-only (is-authorized-contract ((contract principal)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (is-authorized-contract (contract principal))
  (default-to false (map-get? authorized-contracts contract)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| contract | principal |

### get-cap-debt

[View in file](../../contracts/vault/vault-sbtc.clar#L439)

`(define-read-only (get-cap-debt () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-cap-debt) (ok (var-get cap-debt)))
```
</details>




### get-cap-supply

[View in file](../../contracts/vault/vault-sbtc.clar#L440)

`(define-read-only (get-cap-supply () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-cap-supply) (ok (var-get cap-supply)))
```
</details>




### get-fee-flash

[View in file](../../contracts/vault/vault-sbtc.clar#L441)

`(define-read-only (get-fee-flash () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-fee-flash) (ok (var-get fee-flash)))
```
</details>




### get-fee-reserve

[View in file](../../contracts/vault/vault-sbtc.clar#L442)

`(define-read-only (get-fee-reserve () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-fee-reserve) (ok (var-get fee-reserve)))
```
</details>




### get-default-flashloan-permissions

[View in file](../../contracts/vault/vault-sbtc.clar#L444)

`(define-read-only (get-default-flashloan-permissions () (response (tuple (can-flashloan bool) (fee-exempt bool)) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-default-flashloan-permissions)
  (ok (var-get default-flashloan-permissions)))
```
</details>




### get-flashloan-permissions

[View in file](../../contracts/vault/vault-sbtc.clar#L447)

`(define-read-only (get-flashloan-permissions ((account principal)) (tuple (can-flashloan bool) (fee-exempt bool)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-flashloan-permissions (account principal))
  (default-to (var-get default-flashloan-permissions)
              (map-get? flashloan-permissions account)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### get-points-util

[View in file](../../contracts/vault/vault-sbtc.clar#L451)

`(define-read-only (get-points-util () (response (list 8 uint) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-points-util)
  (let ((pir (var-get points-ir)))
    (ok (unpack-u16 (get util pir)))))
```
</details>




### get-points-rate

[View in file](../../contracts/vault/vault-sbtc.clar#L455)

`(define-read-only (get-points-rate () (response (list 8 uint) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-points-rate)
  (let ((pir (var-get points-ir)))
    (ok (unpack-u16 (get rate pir)))))
```
</details>




### get-pause-states

[View in file](../../contracts/vault/vault-sbtc.clar#L461)

`(define-read-only (get-pause-states () (response (tuple (accrue bool) (borrow bool) (deposit bool) (flashloan bool) (redeem bool) (repay bool)) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-pause-states) (ok (var-get pause-states)))
```
</details>




### get-assets

[View in file](../../contracts/vault/vault-sbtc.clar#L465)

`(define-read-only (get-assets () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-assets) (ok (var-get assets)))
```
</details>




### get-total-assets

[View in file](../../contracts/vault/vault-sbtc.clar#L466)

`(define-read-only (get-total-assets () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-total-assets) (ok (total-assets-preview)))
```
</details>




### convert-to-shares

[View in file](../../contracts/vault/vault-sbtc.clar#L467)

`(define-read-only (convert-to-shares ((amount uint)) (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (convert-to-shares (amount uint)) (ok (convert-to-shares-preview amount)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |

### convert-to-assets

[View in file](../../contracts/vault/vault-sbtc.clar#L468)

`(define-read-only (convert-to-assets ((amount uint)) (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (convert-to-assets (amount uint)) (ok (convert-to-assets-preview amount)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |

### get-principal-scaled

[View in file](../../contracts/vault/vault-sbtc.clar#L472)

`(define-read-only (get-principal-scaled () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-principal-scaled) (ok (var-get principal-scaled)))
```
</details>




### get-index

[View in file](../../contracts/vault/vault-sbtc.clar#L473)

`(define-read-only (get-index () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-index) (ok (var-get index)))
```
</details>




### get-last-update

[View in file](../../contracts/vault/vault-sbtc.clar#L474)

`(define-read-only (get-last-update () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-last-update) (ok (var-get last-update)))
```
</details>




### get-debt

[View in file](../../contracts/vault/vault-sbtc.clar#L475)

`(define-read-only (get-debt () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-debt) (ok (total-debt)))
```
</details>




### get-utilization

[View in file](../../contracts/vault/vault-sbtc.clar#L476)

`(define-read-only (get-utilization () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-utilization) (ok (utilization)))
```
</details>




### get-interest-rate

[View in file](../../contracts/vault/vault-sbtc.clar#L477)

`(define-read-only (get-interest-rate () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-interest-rate) (ok (interest-rate)))
```
</details>




### get-next-index

[View in file](../../contracts/vault/vault-sbtc.clar#L478)

`(define-read-only (get-next-index () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-next-index) (ok (next-index)))
```
</details>




### get-principal-ratio-reduction

[View in file](../../contracts/vault/vault-sbtc.clar#L479)

`(define-read-only (get-principal-ratio-reduction ((amount uint)) (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-principal-ratio-reduction (amount uint)) (ok (principal-ratio-reduction amount)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |

### get-liquidity-index

[View in file](../../contracts/vault/vault-sbtc.clar#L480)

`(define-read-only (get-liquidity-index () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-liquidity-index) (ok (var-get lindex)))
```
</details>




### get-underlying

[View in file](../../contracts/vault/vault-sbtc.clar#L481)

`(define-read-only (get-underlying () (response principal none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-underlying) (ok UNDERLYING))
```
</details>




### get-available-assets

[View in file](../../contracts/vault/vault-sbtc.clar#L483)

`(define-read-only (get-available-assets () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-available-assets)
  (let ((current-assets (var-get assets))
        (borrowed (var-get total-borrowed)))
    (if (>= current-assets borrowed)
        (- current-assets borrowed)
        u0)))
```
</details>




### initialize

[View in file](../../contracts/vault/vault-sbtc.clar#L496)

`(define-public (initialize () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (initialize)
  (begin
    (asserts! (not (var-get initialized)) ERR-ALREADY-INITIALIZED)
    (var-set initialized true)
    (try! (deposit MINIMUM-LIQUIDITY u0 NULL-ADDRESS))
    
    (print {
      action: "vault-initialize",
      caller: contract-caller,
      data: {
        vault: UNDERLYING,
        minimum-liquidity: MINIMUM-LIQUIDITY
      }
    })
    
    (ok true)))
```
</details>




### set-authorized-contract

[View in file](../../contracts/vault/vault-sbtc.clar#L515)

`(define-public (set-authorized-contract ((contract principal) (authorized bool)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-authorized-contract (contract principal) (authorized bool))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-authorized-contract",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        contract: contract,
        authorized: authorized
      }
    })
    
    (ok (map-set authorized-contracts contract authorized))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| contract | principal |
| authorized | bool |

### set-flashloan-permissions

[View in file](../../contracts/vault/vault-sbtc.clar#L533)

`(define-public (set-flashloan-permissions ((account principal) (can-flashloan bool) (fee-exempt bool)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-flashloan-permissions 
    (account principal)
    (can-flashloan bool)
    (fee-exempt bool))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-flashloan-permissions",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        account: account,
        can-flashloan: can-flashloan,
        fee-exempt: fee-exempt
      }
    })
    
    (ok (map-set flashloan-permissions account {
      can-flashloan: can-flashloan,
      fee-exempt: fee-exempt
    }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |
| can-flashloan | bool |
| fee-exempt | bool |

### set-flashloan-permissions-many

[View in file](../../contracts/vault/vault-sbtc.clar#L556)

`(define-public (set-flashloan-permissions-many ((updates (list 20 (tuple (account principal) (can-flashloan bool) (fee-exempt bool))))) (response (list 20 bool) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-flashloan-permissions-many
    (updates (list 20 {account: principal, can-flashloan: bool, fee-exempt: bool})))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-flashloan-permissions-many",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        updates: updates,
        count: (len updates)
      }
    })
    
    (ok (map set-permission-single updates))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| updates | (list 20 (tuple (account principal) (can-flashloan bool) (fee-exempt bool))) |

### set-cap-debt

[View in file](../../contracts/vault/vault-sbtc.clar#L575)

`(define-public (set-cap-debt ((val uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-cap-debt (val uint))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-cap-debt",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-value: (var-get cap-debt),
        new-value: val
      }
    })
    
    (var-set cap-debt val)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| val | uint |

### set-cap-supply

[View in file](../../contracts/vault/vault-sbtc.clar#L592)

`(define-public (set-cap-supply ((val uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-cap-supply (val uint))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-cap-supply",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-value: (var-get cap-supply),
        new-value: val
      }
    })
    
    (var-set cap-supply val)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| val | uint |

### set-fee-flash

[View in file](../../contracts/vault/vault-sbtc.clar#L609)

`(define-public (set-fee-flash ((val uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-fee-flash (val uint))
  (begin
    (try! (check-dao-auth))
    (asserts! (< val BPS) ERR-RESERVE-VALIDATION)
    
    (print {
      action: "vault-set-fee-flash",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-value: (var-get fee-flash),
        new-value: val
      }
    })
    
    (var-set fee-flash val)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| val | uint |

### set-default-flashloan-permissions

[View in file](../../contracts/vault/vault-sbtc.clar#L627)

`(define-public (set-default-flashloan-permissions ((can-flashloan bool) (fee-exempt bool)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-default-flashloan-permissions 
    (can-flashloan bool)
    (fee-exempt bool))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-default-flashloan-permissions",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        can-flashloan: can-flashloan,
        fee-exempt: fee-exempt
      }
    })
    
    (var-set default-flashloan-permissions {
      can-flashloan: can-flashloan,
      fee-exempt: fee-exempt
    })
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| can-flashloan | bool |
| fee-exempt | bool |

### set-fee-reserve

[View in file](../../contracts/vault/vault-sbtc.clar#L649)

`(define-public (set-fee-reserve ((val uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-fee-reserve (val uint))
  (begin
    (try! (check-dao-auth))
    (asserts! (< val BPS) ERR-RESERVE-VALIDATION)
    (try! (accrue))
    
    (print {
      action: "vault-set-fee-reserve",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-value: (var-get fee-reserve),
        new-value: val
      }
    })
    
    (var-set fee-reserve val)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| val | uint |

### set-points-util

[View in file](../../contracts/vault/vault-sbtc.clar#L668)

`(define-public (set-points-util ((points (list 8 uint))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-points-util (points (list 8 uint)))
    (let (
          (packed (unwrap-panic (pack-u16 points (some BPS))))
          (pir (var-get points-ir)))
      (try! (check-dao-auth))
      (try! (accrue))
      (var-set points-ir { util: packed, rate: (get rate pir) })
      
      (print {
        action: "vault-set-points-util",
        caller: tx-sender,
        data: {
          vault: UNDERLYING,
          points: points
        }
      })
      
      (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| points | (list 8 uint) |

### set-points-rate

[View in file](../../contracts/vault/vault-sbtc.clar#L687)

`(define-public (set-points-rate ((points (list 8 uint))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-points-rate (points (list 8 uint)))
    (let (
          (packed (unwrap-panic (pack-u16 points none)))
          (pir (var-get points-ir)))
      (try! (check-dao-auth))
      (try! (accrue))
      (var-set points-ir { util: (get util pir), rate: packed })
      
      (print {
        action: "vault-set-points-rate",
        caller: tx-sender,
        data: {
          vault: UNDERLYING,
          points: points
        }
      })
      
      (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| points | (list 8 uint) |

### set-token-uri

[View in file](../../contracts/vault/vault-sbtc.clar#L706)

`(define-public (set-token-uri ((new-uri (optional (string-utf8 256)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-token-uri (new-uri (optional (string-utf8 256))))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "vault-set-token-uri",
      caller: tx-sender,
      data: {
        vault: UNDERLYING,
        old-uri: (var-get token-uri),
        new-uri: new-uri
      }
    })
    
    (var-set token-uri new-uri)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-uri | (optional (string-utf8 256)) |

### set-pause-states

[View in file](../../contracts/vault/vault-sbtc.clar#L725)

`(define-public (set-pause-states ((states (tuple (accrue bool) (borrow bool) (deposit bool) (flashloan bool) (redeem bool) (repay bool)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-pause-states (states {deposit: bool, redeem: bool, borrow: bool, repay: bool, accrue: bool, flashloan: bool}))
  (begin
    (try! (check-dao-auth))
    (let ((current (var-get pause-states))
          (was-paused (get accrue current))
          (now-paused (get accrue states)))
      ;; When pausing accrue, accrue first to capture pending interest
      (if (and (not was-paused) now-paused)
          (begin (try! (accrue)) false)
          false)
      ;; When unpausing accrue, jump last-update to now to skip paused period
      (if (and was-paused (not now-paused))
          (var-set last-update stacks-block-time)
          false)
      (var-set pause-states states)
      
      (print {
        action: "vault-set-pause-states",
        caller: tx-sender,
        data: {
          vault: UNDERLYING,
          states: states
        }
      })
      
      (ok true))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| states | (tuple (accrue bool) (borrow bool) (deposit bool) (flashloan bool) (redeem bool) (repay bool)) |

### transfer

[View in file](../../contracts/vault/vault-sbtc.clar#L754)

`(define-public (transfer ((amount uint) (from principal) (to principal) (memo (optional (buff 34)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (transfer (amount uint) (from principal) (to principal) (memo (optional (buff 34))))
  (begin
    (try! (accrue))
    (asserts! (or (is-eq tx-sender from) (is-eq contract-caller from)) (err u4))
    (asserts! (not (is-eq current-contract to)) ERR-TOKENIZED-VAULT-PRECONDITIONS)
    (try! (ft-transfer? zft amount from to))
    (match memo to-print (print to-print) 0x)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| from | principal |
| to | principal |
| memo | (optional (buff 34)) |

### deposit

[View in file](../../contracts/vault/vault-sbtc.clar#L765)

`(define-public (deposit ((amount uint) (min-out uint) (recipient principal)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (deposit (amount uint) (min-out uint) (recipient principal))
    (let (
      (states (var-get pause-states))
      (u (try! (accrue)))
      (account contract-caller)
      (CAP-SUPPLY (var-get cap-supply))
      (current-assets (var-get assets))
      (inkind (convert-to-shares-preview amount)))

    (asserts! (not (get deposit states)) ERR-PAUSED)
    (asserts! (var-get initialized) ERR-INIT)
    (asserts! (not (var-get in-flashloan)) ERR-REENTRANCY)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (>= inkind min-out) ERR-SLIPPAGE)
    (asserts! (<= (+ current-assets amount) CAP-SUPPLY) ERR-SUPPLY-CAP-EXCEEDED)

    (try! (receive-underlying amount account))
    (try! (ft-mint? zft inkind recipient))
    (var-set assets (+ current-assets amount))

    (print {
      action: "deposit",
      caller: contract-caller,
      data: {
        depositor: account,
        recipient: recipient,
        amount: amount,
        shares-minted: inkind,
        assets: (+ current-assets amount)
      }
    })

    (ok inkind)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| min-out | uint |
| recipient | principal |

### redeem

[View in file](../../contracts/vault/vault-sbtc.clar#L799)

`(define-public (redeem ((amount uint) (min-out uint) (recipient principal)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (redeem (amount uint) (min-out uint) (recipient principal))
  (let (
    (states (var-get pause-states))
    (u (try! (accrue)))
    (account contract-caller)
    (current-assets (var-get assets))
    (balance (get-balance-internal account))
    (balance-check (asserts! (>= balance amount) ERR-INSUFFICIENT-BALANCE))
    (available-assets (get-available-assets))
    (inkind (convert-to-assets-preview amount)))

  (asserts! (>= current-assets inkind) ERR-INSUFFICIENT-ASSETS)
  (asserts! (not (get redeem states)) ERR-PAUSED)
  (asserts! (> amount u0) ERR-AMOUNT-ZERO)
  (asserts! (> inkind u0) ERR-OUTPUT-ZERO)
  (asserts! (>= inkind min-out) ERR-SLIPPAGE)
  (asserts! (>= available-assets inkind) ERR-INSUFFICIENT-LIQUIDITY)

  (try! (ft-burn? zft amount account))
  (try! (send-underlying inkind recipient))
  (var-set assets (- current-assets inkind))

  (print {
    action: "redeem",
    caller: contract-caller,
    data: {
      redeemer: account,
      recipient: recipient,
      shares-burned: amount,
      amount-received: inkind,
      assets: (- current-assets inkind)
    }
  })

  (ok inkind)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| min-out | uint |
| recipient | principal |

### accrue

[View in file](../../contracts/vault/vault-sbtc.clar#L837)

`(define-public (accrue () (response (tuple (index uint) (lindex uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (accrue)
  (let ((states (var-get pause-states))
        (idx (var-get index))
        (lidx (var-get lindex)))
      (if (get accrue states)
          ;; PAUSED: Pass-through without reverting
          (ok { index: idx, lindex: lidx })
          ;; NOT PAUSED: Normal accrual logic
          (let ((next (next-index))
                (nliq (next-liquidity-index))
                (scaled-principal (var-get principal-scaled))
                (old-debt (mul-div-down scaled-principal idx INDEX-PRECISION))
                (new-debt (mul-div-down scaled-principal next INDEX-PRECISION))
                (debt-delta (if (> new-debt old-debt) (- new-debt old-debt) u0))
                (reserve-inc (mul-div-down debt-delta (var-get fee-reserve) BPS))
                (treasury-lp (if (> reserve-inc u0) (mul-div-down reserve-inc (total-supply) (- (total-assets-preview) reserve-inc)) u0)))
            (if (not (is-eq idx next))
                (var-set index next)
                false)
            (if (not (is-eq lidx nliq))
                (var-set lindex nliq)
                false)
            (if (> treasury-lp u0)
                (try! (ft-mint? zft treasury-lp .dao-treasury))
                false)
            (if (or (not (is-eq idx next)) (not (is-eq lidx nliq)))
                (var-set last-update stacks-block-time)
                false)
            (ok { index: next, lindex: nliq })))))
```
</details>




### system-borrow

[View in file](../../contracts/vault/vault-sbtc.clar#L867)

`(define-public (system-borrow ((amount uint) (receiver principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (system-borrow (amount uint) (receiver principal))
  (let (
      (states (var-get pause-states))
      (u (try! (accrue)))
      (CAP-DEBT (var-get cap-debt))
      (available-assets (get-available-assets))
      (scaled-principal (var-get principal-scaled))
      (idx (var-get index))
      (debt (total-debt))
      (scaled-amount (mul-div-up amount INDEX-PRECISION idx))
      (updated-scaled-principal (+ scaled-principal scaled-amount)))

    (try! (check-caller-auth))
    (asserts! (not (get borrow states)) ERR-PAUSED)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)
    (asserts! (<= amount available-assets) ERR-INSUFFICIENT-VAULT-LIQUIDITY)
    (asserts! (<= (+ debt amount) CAP-DEBT) ERR-DEBT-CAP-EXCEEDED)

    (var-set principal-scaled updated-scaled-principal)
    (var-set total-borrowed (+ (var-get total-borrowed) amount))
    (try! (send-underlying amount receiver))

    (print {
      action: "system-borrow",
      caller: contract-caller,
      data: {
        receiver: receiver,
        amount: amount,
        scaled-amount: scaled-amount,
        principal-scaled: updated-scaled-principal,
        total-borrowed: (var-get total-borrowed),
        index: idx
      }
    })

    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| receiver | principal |

### system-repay

[View in file](../../contracts/vault/vault-sbtc.clar#L904)

`(define-public (system-repay ((amount uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (system-repay (amount uint))
  (let (
        (states (var-get pause-states))
        (u (try! (accrue)))
        (scaled-principal (var-get principal-scaled))
        (idx (var-get index))
        (debt (total-debt))
        (total-borrowed-amount (var-get total-borrowed))
        (capped-amount (if (> amount debt) debt amount))
        (principal-reduction (calc-principal-ratio-reduction capped-amount scaled-principal debt))
        (capped-reduction (if (> principal-reduction scaled-principal) scaled-principal principal-reduction))
        (updated-scaled-principal (- scaled-principal capped-reduction))
        (principal-repaid (mul-div-down capped-amount total-borrowed-amount debt))
        (interest-paid (- capped-amount principal-repaid))
        (total-borrowed-new (if (> total-borrowed-amount principal-repaid) (- total-borrowed-amount principal-repaid) u0)))

    (try! (check-caller-auth))
    (asserts! (not (get repay states)) ERR-PAUSED)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)

    (try! (receive-underlying capped-amount tx-sender))
    (var-set principal-scaled updated-scaled-principal)
    (var-set total-borrowed total-borrowed-new)
    (var-set assets (+ (var-get assets) interest-paid))

    (print {
      action: "system-repay",
      caller: contract-caller,
      data: {
        amount-requested: amount,
        amount-repaid: capped-amount,
        principal-repaid: principal-repaid,
        interest-paid: interest-paid,
        principal-scaled: updated-scaled-principal,
        total-borrowed: total-borrowed-new,
        assets: (var-get assets),
        index: idx
      }
    })

    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |

### socialize-debt

[View in file](../../contracts/vault/vault-sbtc.clar#L946)

`(define-public (socialize-debt ((scaled-amount uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (socialize-debt (scaled-amount uint))
  (let ((scaled-principal (var-get principal-scaled))
        (borrowed (var-get total-borrowed))
        (idx (var-get index))
        (current-assets (var-get assets))
        (debt-reduction (mul-div-down scaled-amount idx INDEX-PRECISION)))

    (try! (check-caller-auth))
    (asserts! (> scaled-amount u0) ERR-AMOUNT-ZERO)
    
    (var-set principal-scaled (if (> scaled-principal scaled-amount) (- scaled-principal scaled-amount) u0))
    (var-set total-borrowed (if (> borrowed debt-reduction) (- borrowed debt-reduction) u0))
    (var-set assets (if (> current-assets debt-reduction) (- current-assets debt-reduction) u0))

    (print {
      action: "socialize-debt",
      caller: contract-caller,
      data: {
        scaled-amount: scaled-amount,
        debt-reduction: debt-reduction,
        principal-scaled: (if (> scaled-principal scaled-amount) (- scaled-principal scaled-amount) u0),
        total-borrowed: (if (> borrowed debt-reduction) (- borrowed debt-reduction) u0),
        index: idx
      }
    })

    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| scaled-amount | uint |

### flashloan

[View in file](../../contracts/vault/vault-sbtc.clar#L976)

`(define-public (flashloan ((amount uint) (funds-receiver (optional principal)) (fc trait_reference) (data (optional (buff 4096)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (flashloan
    (amount uint)
    (funds-receiver (optional principal))
    (fc <flash-callback>)
    (data (optional (buff 4096))))
  (let ((states (var-get pause-states))
        (u (try! (accrue)))
        (funds-provider contract-caller)
        (funds-receiver-resolved (match funds-receiver recv recv contract-caller))
        (permissions (get-flashloan-permissions funds-provider))
        (can-flashloan (get can-flashloan permissions))
        (fee-exempt (get fee-exempt permissions))
        (fee-percentage (if fee-exempt u0 (var-get fee-flash)))
        (contract-balance (ubalance))
        (fee (mul-div-up amount fee-percentage BPS)))

    (asserts! (not (get flashloan states)) ERR-PAUSED)
    (asserts! (not (var-get in-flashloan)) ERR-REENTRANCY)

    ;; Whitelist check
    (asserts! can-flashloan ERR-FLASHLOAN-UNAUTHORIZED)

    (asserts! (is-standard funds-receiver-resolved) ERR-INVALID-ADDRESS)

    ;; Check liquidity
    (asserts! (<= amount contract-balance) ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY)

    ;; Set reentrancy guard
    (var-set in-flashloan true)

    ;; Send funds to receiver
    (try! (send-underlying amount funds-receiver-resolved))

    ;; Execute callback
    (try! (contract-call? fc callback amount fee data))

    ;; Pull back amount + fee from provider
    (try! (receive-underlying (+ amount fee) funds-provider))

    ;; Send fee to treasury if fee > 0
    (if (> fee u0)
      (try! (send-underlying fee .dao-treasury))
      false)

    ;; Clear reentrancy guard
    (var-set in-flashloan false)

    (print {
      action: "flashloan",
      caller: contract-caller,
      data: {
        funds-provider: funds-provider,
        funds-receiver: funds-receiver-resolved,
        amount: amount,
        fee: fee,
        assets: (var-get assets)
      }
    })

    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| funds-receiver | (optional principal) |
| fc | trait_reference |
| data | (optional (buff 4096)) |

## Maps

### authorized-contracts

============================================================================
MAPS
============================================================================

```clarity
(define-map authorized-contracts principal bool)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L129)

### flashloan-permissions



```clarity
(define-map flashloan-permissions 
  principal 
  {
    can-flashloan: bool,
    fee-exempt: bool
  })
```

[View in file](../../contracts/vault/vault-sbtc.clar#L130)

## Variables

### initialized

bool

-- Initialization state

```clarity
(define-data-var initialized bool false)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L77)

### token-uri

(optional (string-utf8 256))

-- Token

```clarity
(define-data-var token-uri (optional (string-utf8 256)) none)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L80)

### cap-debt

uint

-- Caps & fees

```clarity
(define-data-var cap-debt uint u0)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L83)

### cap-supply

uint



```clarity
(define-data-var cap-supply uint u0)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L84)

### fee-flash

uint



```clarity
(define-data-var fee-flash uint u0)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L85)

### fee-reserve

uint



```clarity
(define-data-var fee-reserve uint u0)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L86)

### in-flashloan

bool

-- Permissions

```clarity
(define-data-var in-flashloan bool false)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L89)

### default-flashloan-permissions

(tuple (can-flashloan bool) (fee-exempt bool))



```clarity
(define-data-var default-flashloan-permissions 
  {can-flashloan: bool, fee-exempt: bool}
  {can-flashloan: false, fee-exempt: false})
```

[View in file](../../contracts/vault/vault-sbtc.clar#L90)

### points-ir

(tuple (rate uint) (util uint))

-- Interest rate

```clarity
(define-data-var points-ir
  {util: uint, rate: uint}
  {util: u0, rate: u0})
```

[View in file](../../contracts/vault/vault-sbtc.clar#L95)

### pause-states

(tuple (accrue bool) (borrow bool) (deposit bool) (flashloan bool) (redeem bool) (repay bool))

-- Pause states

```clarity
(define-data-var pause-states
  {
    deposit: bool,
    redeem: bool,
    borrow: bool,
    repay: bool,
    accrue: bool,
    flashloan: bool
  }
  {
    deposit: false,
    redeem: false,
    borrow: false,
    repay: false,
    accrue: false,
    flashloan: false
  })
```

[View in file](../../contracts/vault/vault-sbtc.clar#L100)

### assets

uint

-- Assets & lending

```clarity
(define-data-var assets uint u0)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L119)

### total-borrowed

uint



```clarity
(define-data-var total-borrowed uint u0)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L120)

### principal-scaled

uint



```clarity
(define-data-var principal-scaled uint u0)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L121)

### index

uint



```clarity
(define-data-var index uint INDEX-PRECISION)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L122)

### lindex

uint



```clarity
(define-data-var lindex uint INDEX-PRECISION)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L123)

### last-update

uint



```clarity
(define-data-var last-update uint stacks-block-time)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L124)

## Constants

### UNDERLYING



-- Core configuration
@mainnet: (define-constant UNDERLYING 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token)

```clarity
(define-constant UNDERLYING .sbtc)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L20)

### NAME





```clarity
(define-constant NAME "Zest sBTC")
```

[View in file](../../contracts/vault/vault-sbtc.clar#L21)

### SYMBOL





```clarity
(define-constant SYMBOL "zsBTC")
```

[View in file](../../contracts/vault/vault-sbtc.clar#L22)

### DECIMALS





```clarity
(define-constant DECIMALS u8)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L23)

### BPS



-- Precision & scaling

```clarity
(define-constant BPS u10000)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L26)

### PRECISION





```clarity
(define-constant PRECISION u100000000)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L27)

### INDEX-PRECISION





```clarity
(define-constant INDEX-PRECISION u1000000000000)  ;; 1e12 for index calculations
```

[View in file](../../contracts/vault/vault-sbtc.clar#L28)

### SECONDS-PER-YEAR-BPS





```clarity
(define-constant SECONDS-PER-YEAR-BPS (* u31536000 BPS))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L29)

### MAX-U128



-- Limits & boundaries

```clarity
(define-constant MAX-U128 u340282366920938463463374607431768211455)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L32)

### MAX-U16





```clarity
(define-constant MAX-U16 u65535)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L33)

### MASK-U16





```clarity
(define-constant MASK-U16 (+ MAX-U16 u1))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L34)

### BIT-U16





```clarity
(define-constant BIT-U16 u16)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L35)

### MINIMUM-LIQUIDITY





```clarity
(define-constant MINIMUM-LIQUIDITY u1000)
```

[View in file](../../contracts/vault/vault-sbtc.clar#L36)

### NULL-ADDRESS



-- Utilities

```clarity
(define-constant NULL-ADDRESS (unwrap-panic (principal-construct? (if is-in-mainnet 0x16 0x1a) 0x0000000000000000000000000000000000000000)))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L39)

### ITER-UINT-8





```clarity
(define-constant ITER-UINT-8 (list u0 u1 u2 u3 u4 u5 u6 u7))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L40)

### ERR-AUTH



============================================================================
ERRORS (801xxx prefix for vault-sbtc)
============================================================================

```clarity
(define-constant ERR-AUTH (err u801001))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L45)

### ERR-INIT





```clarity
(define-constant ERR-INIT (err u801002))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L46)

### ERR-ALREADY-INITIALIZED





```clarity
(define-constant ERR-ALREADY-INITIALIZED (err u801003))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L47)

### ERR-REENTRANCY





```clarity
(define-constant ERR-REENTRANCY (err u801004))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L48)

### ERR-RESERVE-VALIDATION





```clarity
(define-constant ERR-RESERVE-VALIDATION (err u801005))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L49)

### ERR-PAUSED





```clarity
(define-constant ERR-PAUSED (err u801006))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L50)

### ERR-TOKENIZED-VAULT-PRECONDITIONS





```clarity
(define-constant ERR-TOKENIZED-VAULT-PRECONDITIONS (err u801007))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L51)

### ERR-TOKENIZED-VAULT-POSTCONDITIONS





```clarity
(define-constant ERR-TOKENIZED-VAULT-POSTCONDITIONS (err u801008))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L52)

### ERR-AMOUNT-ZERO





```clarity
(define-constant ERR-AMOUNT-ZERO (err u801009))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L53)

### ERR-SLIPPAGE





```clarity
(define-constant ERR-SLIPPAGE (err u801010))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L54)

### ERR-SUPPLY-CAP-EXCEEDED





```clarity
(define-constant ERR-SUPPLY-CAP-EXCEEDED (err u801011))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L55)

### ERR-OUTPUT-ZERO





```clarity
(define-constant ERR-OUTPUT-ZERO (err u801012))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L56)

### ERR-INSUFFICIENT-BALANCE





```clarity
(define-constant ERR-INSUFFICIENT-BALANCE (err u801013))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L57)

### ERR-INSUFFICIENT-LIQUIDITY





```clarity
(define-constant ERR-INSUFFICIENT-LIQUIDITY (err u801014))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L58)

### ERR-LENDING-PRECONDITIONS





```clarity
(define-constant ERR-LENDING-PRECONDITIONS (err u801015))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L59)

### ERR-LENDING-POSTCONDITIONS





```clarity
(define-constant ERR-LENDING-POSTCONDITIONS (err u801016))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L60)

### ERR-NO-RESERVES





```clarity
(define-constant ERR-NO-RESERVES (err u801017))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L61)

### ERR-INSUFFICIENT-VAULT-LIQUIDITY





```clarity
(define-constant ERR-INSUFFICIENT-VAULT-LIQUIDITY (err u801018))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L62)

### ERR-DEBT-CAP-EXCEEDED





```clarity
(define-constant ERR-DEBT-CAP-EXCEEDED (err u801019))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L63)

### ERR-INSUFFICIENT-ASSETS





```clarity
(define-constant ERR-INSUFFICIENT-ASSETS (err u801020))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L64)

### ERR-INVALID-ADDRESS





```clarity
(define-constant ERR-INVALID-ADDRESS (err u801021))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L65)

### ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY





```clarity
(define-constant ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY (err u801022))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L66)

### ERR-FLASHLOAN-UNAUTHORIZED





```clarity
(define-constant ERR-FLASHLOAN-UNAUTHORIZED (err u801023))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L67)

### ERR-INVALID-U16



-- Shared/external errors (from pack utilities - prefix 700)

```clarity
(define-constant ERR-INVALID-U16 (err u700001))
```

[View in file](../../contracts/vault/vault-sbtc.clar#L70)
  