
# market-vault

[`market-vault.clar`](../../contracts/market/market-vault.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

market-vault - 0

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

**Public functions:**

- [`set-impl`](#set-impl)
- [`set-pause-states`](#set-pause-states)
- [`collateral-add`](#collateral-add)
- [`collateral-remove`](#collateral-remove)
- [`debt-add-scaled`](#debt-add-scaled)
- [`debt-remove-scaled`](#debt-remove-scaled)

**Read-only functions:**

- [`get-impl`](#get-impl)
- [`get-pause-states`](#get-pause-states)
- [`get-nr`](#get-nr)
- [`lookup`](#lookup)
- [`resolve`](#resolve)
- [`resolve-safe`](#resolve-safe)
- [`get-collateral`](#get-collateral)
- [`lookup-collateral`](#lookup-collateral)
- [`get-account-scaled-debt`](#get-account-scaled-debt)
- [`get-debt`](#get-debt)
- [`debt-scaled`](#debt-scaled)
- [`lookup-debt`](#lookup-debt)
- [`get-position`](#get-position)

**Private functions:**

- [`mask-pos`](#mask-pos)
- [`mask-update`](#mask-update)
- [`subset`](#subset)
- [`mask-to-list-internal`](#mask-to-list-internal)
- [`mask-to-list-iter`](#mask-to-list-iter)
- [`mask-to-list-collateral`](#mask-to-list-collateral)
- [`mask-to-list-debt`](#mask-to-list-debt)
- [`check-dao-auth`](#check-dao-auth)
- [`check-impl-auth`](#check-impl-auth)
- [`increment`](#increment)
- [`resolve-or-create`](#resolve-or-create)
- [`create`](#create)
- [`insert`](#insert)
- [`refresh`](#refresh)
- [`relevant`](#relevant)
- [`iter-lookup-collateral`](#iter-lookup-collateral)
- [`add-user-collateral`](#add-user-collateral)
- [`remove-user-collateral`](#remove-user-collateral)
- [`iter-lookup-debt`](#iter-lookup-debt)
- [`add-user-scaled-debt`](#add-user-scaled-debt)
- [`remove-user-scaled-debt`](#remove-user-scaled-debt)
- [`receive-tokens`](#receive-tokens)
- [`send-tokens`](#send-tokens)

**Maps**

- [`registry`](#registry)
- [`reverse`](#reverse)
- [`collateral`](#collateral)
- [`debt`](#debt)

**Variables**

- [`impl`](#impl)
- [`pause-states`](#pause-states)
- [`nonce`](#nonce)

**Constants**

- [`PRECISION`](#precision)
- [`BPS`](#bps)
- [`ZEST-STX-WRAPPER-CONTRACT`](#zest-stx-wrapper-contract)
- [`DEBT-OFFSET`](#debt-offset)
- [`ITER-UINT-64`](#iter-uint-64)
- [`ITER-UINT-64-OFFSET-64`](#iter-uint-64-offset-64)
- [`MAX-U128`](#max-u128)
- [`ERR-AUTH`](#err-auth)
- [`ERR-PAUSED`](#err-paused)
- [`ERR-AMOUNT-ZERO`](#err-amount-zero)
- [`ERR-INSUFFICIENT-COLLATERAL`](#err-insufficient-collateral)
- [`ERR-INSUFFICIENT-DEBT`](#err-insufficient-debt)
- [`ERR-UNTRACKED-ACCOUNT`](#err-untracked-account)
- [`ERR-COLLATERAL-TRANSFER-FAILED`](#err-collateral-transfer-failed)


## Functions

### mask-pos

[View in file](../../contracts/market/market-vault.clar#L91)

`(define-private (mask-pos ((pos uint) (is-collateral bool)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mask-pos (pos uint) (is-collateral bool))
  (if is-collateral pos (+ DEBT-OFFSET pos)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| pos | uint |
| is-collateral | bool |

### mask-update

[View in file](../../contracts/market/market-vault.clar#L94)

`(define-private (mask-update ((base uint) (pos uint) (is-collateral bool) (is-insert bool)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mask-update (base uint) (pos uint) (is-collateral bool) (is-insert bool))
  (let ((abs (mask-pos pos is-collateral)))
    (if is-insert
        (bit-or base (pow u2 abs))
        (bit-and base (bit-not (pow u2 abs))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| base | uint |
| pos | uint |
| is-collateral | bool |
| is-insert | bool |

### subset

[View in file](../../contracts/market/market-vault.clar#L100)

`(define-private (subset ((sub uint) (super uint)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (subset (sub uint) (super uint))
  (let ((overlap (bit-and sub super)))
    (is-eq sub overlap)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| sub | uint |
| super | uint |

### mask-to-list-internal

[View in file](../../contracts/market/market-vault.clar#L104)

`(define-private (mask-to-list-internal ((mask uint) (offset uint) (iter-list (list 64 uint))) (list 64 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mask-to-list-internal (mask uint) (offset uint) (iter-list (list 64 uint)))
  (let ((init { mask: mask, offset: offset, result: (list) })
        (out (fold mask-to-list-iter iter-list init)))
    (get result out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |
| offset | uint |
| iter-list | (list 64 uint) |

### mask-to-list-iter

[View in file](../../contracts/market/market-vault.clar#L109)

`(define-private (mask-to-list-iter ((p uint) (acc (tuple (mask uint) (offset uint) (result (list 64 uint))))) (tuple (mask uint) (offset uint) (result (list 64 uint))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mask-to-list-iter (p uint) (acc {mask: uint, offset: uint, result: (list 64 uint)}))
  (let ((mask (get mask acc))
        (offset (get offset acc)))
    (if (> (bit-and mask (pow u2 p)) u0)
      ;; Bit is set - add to result
      (let ((result (get result acc))
            (value (if (is-eq offset u0) p (- p offset)))
            (new (as-max-len? (append result value) u64)))
        (merge acc { result: (unwrap-panic new) }))
      ;; Bit not set - skip
      acc)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| p | uint |
| acc | (tuple (mask uint) (offset uint) (result (list 64 uint))) |

### mask-to-list-collateral

[View in file](../../contracts/market/market-vault.clar#L121)

`(define-private (mask-to-list-collateral ((mask uint)) (list 64 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mask-to-list-collateral (mask uint))
  (mask-to-list-internal mask u0 ITER-UINT-64))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |

### mask-to-list-debt

[View in file](../../contracts/market/market-vault.clar#L124)

`(define-private (mask-to-list-debt ((mask uint)) (list 64 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mask-to-list-debt (mask uint))
  (mask-to-list-internal mask u64 ITER-UINT-64-OFFSET-64))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |

### check-dao-auth

[View in file](../../contracts/market/market-vault.clar#L129)

`(define-private (check-dao-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-dao-auth)    
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))
```
</details>




### check-impl-auth

[View in file](../../contracts/market/market-vault.clar#L132)

`(define-private (check-impl-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-impl-auth)
  (ok (asserts! (is-eq contract-caller (var-get impl)) ERR-AUTH)))
```
</details>




### increment

[View in file](../../contracts/market/market-vault.clar#L137)

`(define-private (increment () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (increment)
  (let ((curr (var-get nonce))
        (next (+ curr u1)))
    (var-set nonce next)
    curr))
```
</details>




### resolve-or-create

[View in file](../../contracts/market/market-vault.clar#L143)

`(define-private (resolve-or-create ((account principal)) (tuple (account principal) (id uint) (last-borrow-block uint) (last-update uint) (mask uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (resolve-or-create (account principal))
  (let ((id? (map-get? reverse account)))
    (match id?
      id (lookup id)
         (create account)
    )))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### create

[View in file](../../contracts/market/market-vault.clar#L150)

`(define-private (create ((account principal)) (tuple (account principal) (id uint) (last-borrow-block uint) (last-update uint) (mask uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (create (account principal))
  {
    id: (increment),
    account: account,
    mask: u0,
    last-update: stacks-block-time,
    last-borrow-block: u0
  })
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### insert

[View in file](../../contracts/market/market-vault.clar#L159)

`(define-private (insert ((params (tuple (account principal) (id uint) (last-borrow-block uint) (last-update uint) (mask uint)))) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (insert (params
                        {
                          id: uint,
                          account: principal,
                          mask: uint,
                          last-update: uint,
                          last-borrow-block: uint,
                        }))
  (let ((id (get id params)))
    (map-set registry id params)
    (map-set reverse (get account params) id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| params | (tuple (account principal) (id uint) (last-borrow-block uint) (last-update uint) (mask uint)) |

### refresh

[View in file](../../contracts/market/market-vault.clar#L171)

`(define-private (refresh ((mask uint)) (tuple (last-update uint) (mask uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (refresh (mask uint)) { mask: mask, last-update: stacks-block-time })
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |

### relevant

[View in file](../../contracts/market/market-vault.clar#L175)

`(define-private (relevant ((asset uint) (enabled-mask uint) (c bool)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (relevant (asset uint) (enabled-mask uint) (c bool))
  (let ((position (mask-pos asset c))
        (mask (bit-or u0 (pow u2 position))))
    (subset mask enabled-mask)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | uint |
| enabled-mask | uint |
| c | bool |

### iter-lookup-collateral

[View in file](../../contracts/market/market-vault.clar#L180)

`(define-private (iter-lookup-collateral ((asset uint) (acc (tuple (enabled-mask uint) (id uint) (result (list 64 (tuple (aid uint) (amount uint))))))) (tuple (enabled-mask uint) (id uint) (result (list 64 (tuple (aid uint) (amount uint))))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-lookup-collateral
                (asset uint)
                (acc {
                    id: uint,
                    result: (list 64 { aid: uint, amount: uint}),
                    enabled-mask: uint
                }))
  (let ((mask (get enabled-mask acc))
        (relevant? (asserts! (relevant asset mask true) acc))
        (user-id (get id acc))
        (value (get-collateral user-id asset))
        (entry { aid: asset, amount: value }))
    {
      id: user-id,
      result: (unwrap-panic (as-max-len? (append (get result acc) entry) u64)),
      enabled-mask: mask
    }))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | uint |
| acc | (tuple (enabled-mask uint) (id uint) (result (list 64 (tuple (aid uint) (amount uint))))) |

### add-user-collateral

[View in file](../../contracts/market/market-vault.clar#L198)

`(define-private (add-user-collateral ((user-id uint) (asset-id uint) (amount uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (add-user-collateral (user-id uint) (asset-id uint) (amount uint))
  (let ((key { id: user-id, asset: asset-id })
        (collateral-amount (default-to u0 (map-get? collateral key))) ;; graceful default
        (updated-collateral-amount (+ collateral-amount amount)))
      (map-set collateral key updated-collateral-amount)
      updated-collateral-amount))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| user-id | uint |
| asset-id | uint |
| amount | uint |

### remove-user-collateral

[View in file](../../contracts/market/market-vault.clar#L205)

`(define-private (remove-user-collateral ((user-id uint) (asset-id uint) (amount uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (remove-user-collateral (user-id uint) (asset-id uint) (amount uint))
  (let ((key { id: user-id, asset: asset-id })
        (collateral-amount (default-to u0 (map-get? collateral key))) ;; graceful default
        (legal? (asserts! (<= amount collateral-amount) ERR-INSUFFICIENT-COLLATERAL))
        (updated-collateral-amount (- collateral-amount amount)))

      (if (is-eq updated-collateral-amount u0)
          (map-delete collateral key)
          (map-set collateral key updated-collateral-amount))
      (ok updated-collateral-amount)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| user-id | uint |
| asset-id | uint |
| amount | uint |

### iter-lookup-debt

[View in file](../../contracts/market/market-vault.clar#L218)

`(define-private (iter-lookup-debt ((asset uint) (acc (tuple (enabled-mask uint) (id uint) (result (list 64 (tuple (aid uint) (scaled uint))))))) (tuple (enabled-mask uint) (id uint) (result (list 64 (tuple (aid uint) (scaled uint))))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-lookup-debt
                (asset uint)
                (acc {
                    id: uint,
                    result: (list 64 { aid: uint, scaled: uint}),
                    enabled-mask: uint
                  })
               )
  (let ((mask (get enabled-mask acc))
        (relevant? (asserts! (relevant asset mask false) acc))
        (user-id (get id acc))
        (value (get-debt user-id asset)) ;; unreachable
        (entry (merge value { aid: asset })))
    {
      id: user-id,
      result: (unwrap-panic (as-max-len? (append (get result acc) entry) u64)),
      enabled-mask: mask
    }))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | uint |
| acc | (tuple (enabled-mask uint) (id uint) (result (list 64 (tuple (aid uint) (scaled uint))))) |

### add-user-scaled-debt

[View in file](../../contracts/market/market-vault.clar#L237)

`(define-private (add-user-scaled-debt ((user-id uint) (asset-id uint) (amount uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (add-user-scaled-debt (user-id uint) (asset-id uint) (amount uint))
  (let ((key { id: user-id, asset: asset-id })
        (current-scaled-debt (default-to u0 (get scaled (map-get? debt key)))) ;; graceful default to u0
        (updated-scaled-debt (+ current-scaled-debt amount)))
      (map-set debt key { scaled: updated-scaled-debt })
      updated-scaled-debt))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| user-id | uint |
| asset-id | uint |
| amount | uint |

### remove-user-scaled-debt

[View in file](../../contracts/market/market-vault.clar#L244)

`(define-private (remove-user-scaled-debt ((user-id uint) (asset-id uint) (amount uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (remove-user-scaled-debt (user-id uint) (asset-id uint) (amount uint))
  (let ((key { id: user-id, asset: asset-id })
        (current-scaled-debt (default-to u0 (get scaled (map-get? debt key)))) ;; graceful default to u0
        (legal? (asserts! (<= amount current-scaled-debt) ERR-INSUFFICIENT-DEBT))
        (updated-scaled-debt (- current-scaled-debt amount)))
    (if (is-eq updated-scaled-debt u0)
        (map-delete debt key)
        (map-set debt key { scaled: updated-scaled-debt }))
    (ok updated-scaled-debt)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| user-id | uint |
| asset-id | uint |
| amount | uint |

### receive-tokens

[View in file](../../contracts/market/market-vault.clar#L256)

`(define-private (receive-tokens ((asset trait_reference) (amount uint) (account principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (receive-tokens (asset <ft-trait>) (amount uint) (account principal))
  (contract-call? asset transfer amount account current-contract none))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | trait_reference |
| amount | uint |
| account | principal |

### send-tokens

[View in file](../../contracts/market/market-vault.clar#L259)

`(define-private (send-tokens ((asset trait_reference) (amount uint) (account principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (send-tokens (asset <ft-trait>) (amount uint) (account principal))
  (let ((asset-contract (contract-of asset)))
    (if (is-eq asset-contract ZEST-STX-WRAPPER-CONTRACT)
      (as-contract? ((with-stx amount))
          (try! (contract-call? asset transfer amount tx-sender account none)))
      (as-contract? ((with-ft asset-contract "*" amount))
          (try! (contract-call? asset transfer amount tx-sender account none))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | trait_reference |
| amount | uint |
| account | principal |

### get-impl

[View in file](../../contracts/market/market-vault.clar#L273)

`(define-read-only (get-impl () principal)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-impl) (var-get impl))
```
</details>




### get-pause-states

[View in file](../../contracts/market/market-vault.clar#L277)

`(define-read-only (get-pause-states () (response (tuple (collateral-add bool) (collateral-remove bool) (debt-add bool) (debt-remove bool)) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-pause-states) (ok (var-get pause-states)))
```
</details>




### get-nr

[View in file](../../contracts/market/market-vault.clar#L281)

`(define-read-only (get-nr () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-nr) (var-get nonce))
```
</details>




### lookup

[View in file](../../contracts/market/market-vault.clar#L283)

`(define-read-only (lookup ((id uint)) (tuple (account principal) (id uint) (last-borrow-block uint) (last-update uint) (mask uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (lookup (id uint))
  (unwrap-panic (map-get? registry id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |

### resolve

[View in file](../../contracts/market/market-vault.clar#L286)

`(define-read-only (resolve ((account principal)) (tuple (account principal) (id uint) (last-borrow-block uint) (last-update uint) (mask uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (resolve (account principal))
  (let ((id (unwrap-panic (map-get? reverse account))))
    (lookup id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### resolve-safe

[View in file](../../contracts/market/market-vault.clar#L290)

`(define-read-only (resolve-safe ((account principal)) (response (tuple (account principal) (id uint) (last-borrow-block uint) (last-update uint) (mask uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (resolve-safe (account principal))
  (let ((id (unwrap! (map-get? reverse account) ERR-UNTRACKED-ACCOUNT)))
    (ok (unwrap! (map-get? registry id) ERR-UNTRACKED-ACCOUNT))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### get-collateral

[View in file](../../contracts/market/market-vault.clar#L296)

`(define-read-only (get-collateral ((id uint) (asset uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-collateral (id uint) (asset uint))
  (unwrap-panic (map-get? collateral { id: id, asset: asset })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| asset | uint |

### lookup-collateral

[View in file](../../contracts/market/market-vault.clar#L299)

`(define-read-only (lookup-collateral ((id uint) (mask uint) (enabled-mask uint)) (list 64 (tuple (aid uint) (amount uint))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (lookup-collateral (id uint) (mask uint) (enabled-mask uint))
  (let ((init { id: id, result: (list), enabled-mask: enabled-mask })
        (iter (mask-to-list-collateral mask))
        (out (fold iter-lookup-collateral iter init)))
    (get result out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| mask | uint |
| enabled-mask | uint |

### get-account-scaled-debt

[View in file](../../contracts/market/market-vault.clar#L307)

`(define-read-only (get-account-scaled-debt ((account principal) (asset-id uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-account-scaled-debt (account principal) (asset-id uint))
  (let ((account-entry (resolve account)))
    (debt-scaled (get id account-entry) asset-id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |
| asset-id | uint |

### get-debt

[View in file](../../contracts/market/market-vault.clar#L311)

`(define-read-only (get-debt ((id uint) (asset uint)) (tuple (scaled uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-debt (id uint) (asset uint))
  (unwrap-panic (map-get? debt { id: id, asset: asset })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| asset | uint |

### debt-scaled

[View in file](../../contracts/market/market-vault.clar#L314)

`(define-read-only (debt-scaled ((id uint) (asset uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (debt-scaled (id uint) (asset uint))
  (default-to u0 (get scaled (map-get? debt { id: id, asset: asset }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| asset | uint |

### lookup-debt

[View in file](../../contracts/market/market-vault.clar#L317)

`(define-read-only (lookup-debt ((id uint) (mask uint) (enabled-mask uint)) (list 64 (tuple (aid uint) (scaled uint))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (lookup-debt (id uint) (mask uint) (enabled-mask uint))
  (let ((init { id: id, result: (list), enabled-mask: enabled-mask })
        (iter (mask-to-list-debt mask))
        (out (fold iter-lookup-debt iter init)))
    (get result out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| mask | uint |
| enabled-mask | uint |

### get-position

[View in file](../../contracts/market/market-vault.clar#L325)

`(define-read-only (get-position ((account principal) (enabled-mask uint)) (response (tuple (account principal) (collateral (list 64 (tuple (aid uint) (amount uint)))) (debt (list 64 (tuple (aid uint) (scaled uint)))) (id uint) (last-borrow-block uint) (last-update uint) (mask uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-position (account principal) (enabled-mask uint))
  (match (map-get? reverse account)
    id (let ((obligation (lookup id))
             (user-id (get id obligation))
             (mask (get mask obligation))
             (is-collateral (lookup-collateral user-id mask enabled-mask))
             (is-debt (lookup-debt user-id mask MAX-U128)))
         (ok (merge obligation { collateral: is-collateral, debt: is-debt })))
    (err u600006)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |
| enabled-mask | uint |

### set-impl

[View in file](../../contracts/market/market-vault.clar#L341)

`(define-public (set-impl ((new principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-impl (new principal))
  (begin
    (try! (check-dao-auth))
    
    (print {
      action: "market-vault-set-impl",
      caller: tx-sender,
      data: {
        old-impl: (var-get impl),
        new-impl: new
      }
    })
    
    (var-set impl new)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new | principal |

### set-pause-states

[View in file](../../contracts/market/market-vault.clar#L357)

`(define-public (set-pause-states ((states (tuple (collateral-add bool) (collateral-remove bool) (debt-add bool) (debt-remove bool)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-pause-states (states {collateral-add: bool, collateral-remove: bool, debt-add: bool, debt-remove: bool}))
  (begin
    (try! (check-dao-auth))
    (var-set pause-states states)
    
    (print {
      action: "market-vault-set-pause-states",
      caller: tx-sender,
      data: {
        states: states
      }
    })
    
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| states | (tuple (collateral-add bool) (collateral-remove bool) (debt-add bool) (debt-remove bool)) |

### collateral-add

[View in file](../../contracts/market/market-vault.clar#L374)

`(define-public (collateral-add ((account principal) (amount uint) (ft trait_reference) (asset-id uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (collateral-add (account principal) (amount uint) (ft <ft-trait>) (asset-id uint))
  (let ((states (var-get pause-states))
        (entry (resolve-or-create account))
        (user-id (get id entry))
        (mask (get mask entry))
        (updated-mask (mask-update mask asset-id true true)) ;; collateral, insert
        (updated-entry (merge entry (refresh updated-mask)))
        (result (add-user-collateral user-id asset-id amount)))

    (try! (check-impl-auth))
    (asserts! (not (get collateral-add states)) ERR-PAUSED)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)

    (try! (receive-tokens ft amount account))
    
    (insert updated-entry)

    (print {
      action: "collateral-add",
      caller: contract-caller,
      data: {
        account: account,
        asset-id: asset-id,
        amount: amount,
        updated-collateral-amount: result,
        mask-before: mask,
        mask-after: updated-mask
      }
    })
      
    (ok result)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |
| amount | uint |
| ft | trait_reference |
| asset-id | uint |

### collateral-remove

[View in file](../../contracts/market/market-vault.clar#L406)

`(define-public (collateral-remove ((account principal) (amount uint) (ft trait_reference) (asset-id uint) (recipient principal)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (collateral-remove (account principal) (amount uint) (ft <ft-trait>) (asset-id uint) (recipient principal))
  (let ((states (var-get pause-states))
        (entry (resolve account))
        (user-id (get id entry))
        (mask (get mask entry))
        (remaining (try! (remove-user-collateral user-id asset-id amount)))
        (updated-mask (if (is-eq remaining u0)
                        (mask-update mask asset-id true false) ;; collateral, remove
                        mask))
        (updated-entry (merge entry (refresh updated-mask))))

    (try! (check-impl-auth))
    (asserts! (not (get collateral-remove states)) ERR-PAUSED)
    (asserts! (> amount u0) ERR-AMOUNT-ZERO)

    (insert updated-entry)
    (try! (send-tokens ft amount recipient))
    
    (print {
      action: "collateral-remove",
      caller: contract-caller,
      data: {
        account: account,
        recipient: recipient,
        asset-id: asset-id,
        amount: amount,
        updated-collateral-amount: remaining,
        mask-before: mask,
        mask-after: updated-mask
      }
    })
    
    (ok remaining)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |
| amount | uint |
| ft | trait_reference |
| asset-id | uint |
| recipient | principal |

### debt-add-scaled

[View in file](../../contracts/market/market-vault.clar#L442)

`(define-public (debt-add-scaled ((account principal) (scaled-amount uint) (asset-id uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (debt-add-scaled (account principal) (scaled-amount uint) (asset-id uint))
  (let ((states (var-get pause-states))
        (entry (resolve-or-create account))
        (user-id (get id entry))
        (mask (get mask entry))
        (update-mask (mask-update mask asset-id false true)) ;; debt, insert
        ;; Oracle frontrunning protection: record current block when borrowing
        (updated-entry (merge entry { mask: update-mask, last-update: stacks-block-time, last-borrow-block: stacks-block-height }))
        (result (add-user-scaled-debt user-id asset-id scaled-amount)))

    (try! (check-impl-auth))
    (asserts! (not (get debt-add states)) ERR-PAUSED)
    (asserts! (> scaled-amount u0) ERR-AMOUNT-ZERO)

    (insert updated-entry)

    (print {
      action: "debt-add-scaled",
      caller: contract-caller,
      data: {
        account: account,
        asset-id: asset-id,
        scaled-amount: scaled-amount,
        updated-scaled-debt: result,
        mask-before: mask,
        mask-after: update-mask
      }
    })
      
    (ok result)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |
| scaled-amount | uint |
| asset-id | uint |

### debt-remove-scaled

[View in file](../../contracts/market/market-vault.clar#L473)

`(define-public (debt-remove-scaled ((account principal) (scaled-amount uint) (asset-id uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (debt-remove-scaled (account principal) (scaled-amount uint) (asset-id uint))
  (let ((states (var-get pause-states))
        (entry (resolve account))
        (user-id (get id entry))
        (mask (get mask entry))
        (remaining (try! (remove-user-scaled-debt user-id asset-id scaled-amount)))
        (nmask (if (is-eq remaining u0)
                      (mask-update mask asset-id false false) ;; debt, remove
                      mask))
        (updated-entry (merge entry (refresh nmask))))

    (try! (check-impl-auth))
    (asserts! (not (get debt-remove states)) ERR-PAUSED)
    (asserts! (> scaled-amount u0) ERR-AMOUNT-ZERO)

    (insert updated-entry)
    
    (print {
      action: "debt-remove-scaled",
      caller: contract-caller,
      data: {
        account: account,
        asset-id: asset-id,
        scaled-amount: scaled-amount,
        updated-scaled-debt: remaining,
        mask-before: mask,
        mask-after: nmask
      }
    })
    
    (ok remaining)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |
| scaled-amount | uint |
| asset-id | uint |

## Maps

### registry

-- Obligation registry

```clarity
(define-map registry
            uint
            {
              id: uint,
              account: principal,
              mask: uint,
              last-update: uint,
              last-borrow-block: uint,
            })
```

[View in file](../../contracts/market/market-vault.clar#L68)

### reverse



```clarity
(define-map reverse principal uint)
```

[View in file](../../contracts/market/market-vault.clar#L77)

### collateral

-- Collateral

```clarity
(define-map collateral { id: uint, asset: uint } uint)
```

[View in file](../../contracts/market/market-vault.clar#L80)

### debt

-- Debt

```clarity
(define-map debt { id: uint, asset: uint } { scaled: uint })
```

[View in file](../../contracts/market/market-vault.clar#L83)

## Variables

### impl

principal

-- Implementation

```clarity
(define-data-var impl principal tx-sender)
```

[View in file](../../contracts/market/market-vault.clar#L43)

### pause-states

(tuple (collateral-add bool) (collateral-remove bool) (debt-add bool) (debt-remove bool))

-- Pausability

```clarity
(define-data-var pause-states
  {
    collateral-add: bool,
    collateral-remove: bool,
    debt-add: bool,
    debt-remove: bool
  }
  {
    collateral-add: false,
    collateral-remove: false,
    debt-add: false,
    debt-remove: false
  })
```

[View in file](../../contracts/market/market-vault.clar#L46)

### nonce

uint

-- Obligation tracking

```clarity
(define-data-var nonce uint u0)
```

[View in file](../../contracts/market/market-vault.clar#L61)

## Constants

### PRECISION



-- Base configuration

```clarity
(define-constant PRECISION u100000000)
```

[View in file](../../contracts/market/market-vault.clar#L15)

### BPS





```clarity
(define-constant BPS u10000)
```

[View in file](../../contracts/market/market-vault.clar#L16)

### ZEST-STX-WRAPPER-CONTRACT





```clarity
(define-constant ZEST-STX-WRAPPER-CONTRACT .wstx)
```

[View in file](../../contracts/market/market-vault.clar#L17)

### DEBT-OFFSET



-- Pack utilities (bit manipulation)

```clarity
(define-constant DEBT-OFFSET u64)
```

[View in file](../../contracts/market/market-vault.clar#L20)

### ITER-UINT-64





```clarity
(define-constant ITER-UINT-64 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63))
```

[View in file](../../contracts/market/market-vault.clar#L21)

### ITER-UINT-64-OFFSET-64





```clarity
(define-constant ITER-UINT-64-OFFSET-64 (list u64 u65 u66 u67 u68 u69 u70 u71 u72 u73 u74 u75 u76 u77 u78 u79 u80 u81 u82 u83 u84 u85 u86 u87 u88 u89 u90 u91 u92 u93 u94 u95 u96 u97 u98 u99 u100 u101 u102 u103 u104 u105 u106 u107 u108 u109 u110 u111 u112 u113 u114 u115 u116 u117 u118 u119 u120 u121 u122 u123 u124 u125 u126 u127))
```

[View in file](../../contracts/market/market-vault.clar#L22)

### MAX-U128



-- Max values

```clarity
(define-constant MAX-U128 u340282366920938463463374607431768211455)
```

[View in file](../../contracts/market/market-vault.clar#L25)

### ERR-AUTH



============================================================================
ERRORS (600xxx prefix for market-vault)
============================================================================

```clarity
(define-constant ERR-AUTH (err u600001))
```

[View in file](../../contracts/market/market-vault.clar#L30)

### ERR-PAUSED





```clarity
(define-constant ERR-PAUSED (err u600002))
```

[View in file](../../contracts/market/market-vault.clar#L31)

### ERR-AMOUNT-ZERO





```clarity
(define-constant ERR-AMOUNT-ZERO (err u600003))
```

[View in file](../../contracts/market/market-vault.clar#L32)

### ERR-INSUFFICIENT-COLLATERAL





```clarity
(define-constant ERR-INSUFFICIENT-COLLATERAL (err u600004))
```

[View in file](../../contracts/market/market-vault.clar#L33)

### ERR-INSUFFICIENT-DEBT





```clarity
(define-constant ERR-INSUFFICIENT-DEBT (err u600005))
```

[View in file](../../contracts/market/market-vault.clar#L34)

### ERR-UNTRACKED-ACCOUNT





```clarity
(define-constant ERR-UNTRACKED-ACCOUNT (err u600006))
```

[View in file](../../contracts/market/market-vault.clar#L35)

### ERR-COLLATERAL-TRANSFER-FAILED





```clarity
(define-constant ERR-COLLATERAL-TRANSFER-FAILED (err u600007))
```

[View in file](../../contracts/market/market-vault.clar#L36)
  