
# integrator

[`integrator.clar`](../../contracts/utility/mock/integrator.clar)



**Public functions:**

- [`call-market-collateral-add-as-contract-call`](#call-market-collateral-add-as-contract-call)
- [`call-market-collateral-add-as-tx-sender`](#call-market-collateral-add-as-tx-sender)
- [`call-market-collateral-remove-as-contract-call`](#call-market-collateral-remove-as-contract-call)
- [`call-market-collateral-remove-as-tx-sender`](#call-market-collateral-remove-as-tx-sender)
- [`call-market-supply-collateral-add-as-contract-call`](#call-market-supply-collateral-add-as-contract-call)
- [`call-market-supply-collateral-add-as-tx-sender`](#call-market-supply-collateral-add-as-tx-sender)
- [`call-market-collateral-remove-redeem-as-contract-call`](#call-market-collateral-remove-redeem-as-contract-call)
- [`call-market-collateral-remove-redeem-as-tx-sender`](#call-market-collateral-remove-redeem-as-tx-sender)
- [`call-market-borrow-as-contract-call`](#call-market-borrow-as-contract-call)
- [`call-market-borrow-as-tx-sender`](#call-market-borrow-as-tx-sender)
- [`call-market-repay-as-contract-call`](#call-market-repay-as-contract-call)
- [`call-market-repay-as-tx-sender`](#call-market-repay-as-tx-sender)
- [`call-market-liquidate-as-contract-call`](#call-market-liquidate-as-contract-call)
- [`call-market-liquidate-as-tx-sender`](#call-market-liquidate-as-tx-sender)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**




## Functions

### call-market-collateral-add-as-contract-call

[View in file](../../contracts/utility/mock/integrator.clar#L8)

`(define-public (call-market-collateral-add-as-contract-call ((ft trait_reference) (amount uint) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`

===============================================================================================
Add collateral to position
price-feeds: optional list of up to 3 Pyth price feed buffers to update stale prices
Returns: updated collateral amount for this asset
(collateral-add (<ft-trait> uint (optional (list 3 (buff 8192)))) (response uint uint))

<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-collateral-add-as-contract-call
  (ft <ft-trait>)
  (amount uint)
  (price-feeds (optional (list 3 (buff 8192)))
))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? ft transfer amount tx-sender current-contract none))
    ;; the tx-sender != contract-caller
    (contract-call? .market collateral-add ft amount price-feeds)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-collateral-add-as-tx-sender

[View in file](../../contracts/utility/mock/integrator.clar#L21)

`(define-public (call-market-collateral-add-as-tx-sender ((ft trait_reference) (amount uint) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-collateral-add-as-tx-sender
  (ft <ft-trait>)
  (amount uint)
  (price-feeds (optional (list 3 (buff 8192)))
))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? ft transfer amount tx-sender current-contract none))
    ;; the tx-sender == contract-caller
    (as-contract? ((with-all-assets-unsafe))
      (try! (contract-call? .market collateral-add ft amount price-feeds))
    )
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-collateral-remove-as-contract-call

[View in file](../../contracts/utility/mock/integrator.clar#L42)

`(define-public (call-market-collateral-remove-as-contract-call ((ft trait_reference) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`

===============================================================================================
Remove collateral from position
receiver: optional recipient (defaults to caller)
price-feeds: optional list of up to 3 Pyth price feed buffers to update stale prices
Returns: remaining collateral amount for this asset
(collateral-remove (<ft-trait> uint (optional principal) (optional (list 3 (buff 8192)))) (response uint uint))

<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-collateral-remove-as-contract-call
    (ft <ft-trait>) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    ;; the tx-sender != contract-caller
    (contract-call? .market collateral-remove ft amount receiver price-feeds)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| receiver | (optional principal) |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-collateral-remove-as-tx-sender

[View in file](../../contracts/utility/mock/integrator.clar#L50)

`(define-public (call-market-collateral-remove-as-tx-sender ((ft trait_reference) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-collateral-remove-as-tx-sender 
  (ft <ft-trait>) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))
))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? ft transfer amount tx-sender current-contract none))

    ;; the tx-sender == contract-caller
    (as-contract? ((with-all-assets-unsafe))
      (try! (contract-call? .market collateral-remove ft amount receiver price-feeds))
    )
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| receiver | (optional principal) |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-supply-collateral-add-as-contract-call

[View in file](../../contracts/utility/mock/integrator.clar#L69)

`(define-public (call-market-supply-collateral-add-as-contract-call ((ft trait_reference) (amount uint) (min-shares uint) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-supply-collateral-add-as-contract-call
    (ft <ft-trait>) (amount uint) (min-shares uint) (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    (try! (contract-call? ft transfer amount tx-sender current-contract none))
    ;; the tx-sender != contract-caller
    (contract-call? .market supply-collateral-add ft amount min-shares price-feeds)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| min-shares | uint |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-supply-collateral-add-as-tx-sender

[View in file](../../contracts/utility/mock/integrator.clar#L78)

`(define-public (call-market-supply-collateral-add-as-tx-sender ((ft trait_reference) (amount uint) (min-shares uint) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-supply-collateral-add-as-tx-sender 
    (ft <ft-trait>) (amount uint) (min-shares uint) (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? ft transfer amount tx-sender current-contract none))
    ;; the tx-sender == contract-caller
    (as-contract? ((with-all-assets-unsafe))
      (try! 
        (contract-call? .market supply-collateral-add ft amount min-shares price-feeds)
      )
    )
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| min-shares | uint |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-collateral-remove-redeem-as-contract-call

[View in file](../../contracts/utility/mock/integrator.clar#L95)

`(define-public (call-market-collateral-remove-redeem-as-contract-call ((ft trait_reference) (amount uint) (min-underlying uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-collateral-remove-redeem-as-contract-call
    (ft <ft-trait>) (amount uint) (min-underlying uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    ;; the tx-sender != contract-caller    
    (contract-call? .market collateral-remove-redeem ft amount min-underlying receiver price-feeds)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| min-underlying | uint |
| receiver | (optional principal) |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-collateral-remove-redeem-as-tx-sender

[View in file](../../contracts/utility/mock/integrator.clar#L103)

`(define-public (call-market-collateral-remove-redeem-as-tx-sender ((ft trait_reference) (amount uint) (min-underlying uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-collateral-remove-redeem-as-tx-sender 
    (ft <ft-trait>) (amount uint) (min-underlying uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? ft transfer amount tx-sender current-contract none))
    ;; the tx-sender == contract-caller
    (as-contract? ((with-all-assets-unsafe))
      (try! 
        (contract-call? .market collateral-remove-redeem ft amount min-underlying receiver price-feeds)
      )
    )
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| min-underlying | uint |
| receiver | (optional principal) |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-borrow-as-contract-call

[View in file](../../contracts/utility/mock/integrator.clar#L123)

`(define-public (call-market-borrow-as-contract-call ((ft trait_reference) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192))))) (response bool uint))`

===============================================================================================
Borrow assets against collateral
receiver: optional recipient (defaults to caller)
price-feeds: optional list of up to 3 Pyth price feed buffers to update stale prices
Returns: (ok true) on success
(borrow (<ft-trait> uint (optional principal) (optional (list 3 (buff 8192)))) (response bool uint))

<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-borrow-as-contract-call
    (ft <ft-trait>) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    ;; the tx-sender != contract-caller
    (contract-call? .market borrow ft amount receiver price-feeds)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| receiver | (optional principal) |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-borrow-as-tx-sender

[View in file](../../contracts/utility/mock/integrator.clar#L131)

`(define-public (call-market-borrow-as-tx-sender ((ft trait_reference) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192))))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-borrow-as-tx-sender 
    (ft <ft-trait>) (amount uint) (receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? ft transfer amount tx-sender current-contract none))

    ;; the tx-sender == contract-caller
    (as-contract? ((with-all-assets-unsafe))
      (try! 
        (contract-call? .market borrow ft amount receiver price-feeds)
      )
    )
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| receiver | (optional principal) |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-repay-as-contract-call

[View in file](../../contracts/utility/mock/integrator.clar#L151)

`(define-public (call-market-repay-as-contract-call ((ft trait_reference) (amount uint) (on-behalf-of (optional principal))) (response uint uint))`

===============================================================================================
Repay borrowed debt
on-behalf-of: optional account to repay for (defaults to caller)
Returns: actual amount repaid
(repay (<ft-trait> uint (optional principal)) (response uint uint))

<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-repay-as-contract-call
    (ft <ft-trait>) (amount uint) (on-behalf-of (optional principal)))
  (begin    
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? ft transfer amount tx-sender current-contract none))
    ;; the tx-sender != contract-caller
    (contract-call? .market repay ft amount on-behalf-of)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| on-behalf-of | (optional principal) |

### call-market-repay-as-tx-sender

[View in file](../../contracts/utility/mock/integrator.clar#L161)

`(define-public (call-market-repay-as-tx-sender ((ft trait_reference) (amount uint) (on-behalf-of (optional principal))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-repay-as-tx-sender 
    (ft <ft-trait>) (amount uint) (on-behalf-of (optional principal)))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? ft transfer amount tx-sender current-contract none))

    ;; the tx-sender == contract-caller
    (try! (as-contract? ((with-all-assets-unsafe))
      (try! 
        (contract-call? .market repay ft amount on-behalf-of)
      )
    ))
    (let ((balance (try! (contract-call? ft get-balance current-contract))))
      (if (> balance u0)
        (try! (contract-call? ft transfer balance current-contract tx-sender none))
        false
      )
      (ok balance)
    )
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| amount | uint |
| on-behalf-of | (optional principal) |

### call-market-liquidate-as-contract-call

[View in file](../../contracts/utility/mock/integrator.clar#L191)

`(define-public (call-market-liquidate-as-contract-call ((borrower principal) (collateral-ft trait_reference) (debt-ft trait_reference) (debt-amount uint) (min-collateral-expected uint) (collateral-receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`

===============================================================================================
Liquidate an unhealthy position
Parameters: borrower, collateral-ft, debt-ft, debt-amount, min-collateral-expected, price-feeds
price-feeds: optional list of up to 3 Pyth price feed buffers to update stale prices
Returns: { debt: amount repaid, collateral: amount received }
(liquidate (principal <ft-trait> <ft-trait> uint uint (optional principal) (optional (list 3 (buff 8192)))) 
(response { debt: uint, collateral: uint } uint))

<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-liquidate-as-contract-call
                    (borrower principal)
                (collateral-ft <ft-trait>)
                (debt-ft <ft-trait>)
                (debt-amount uint)
                (min-collateral-expected uint)
                (collateral-receiver (optional principal))
                (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? debt-ft transfer debt-amount tx-sender current-contract none))
    ;; the tx-sender != contract-caller
    (try! (contract-call? .market liquidate borrower collateral-ft debt-ft debt-amount min-collateral-expected collateral-receiver price-feeds))
    (let ((balance (try! (contract-call? debt-ft get-balance current-contract))))
      (if (> balance u0)
        (try! (contract-call? debt-ft transfer balance current-contract tx-sender none))
        false
      )
      (ok balance)
    )
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrower | principal |
| collateral-ft | trait_reference |
| debt-ft | trait_reference |
| debt-amount | uint |
| min-collateral-expected | uint |
| collateral-receiver | (optional principal) |
| price-feeds | (optional (list 3 (buff 8192))) |

### call-market-liquidate-as-tx-sender

[View in file](../../contracts/utility/mock/integrator.clar#L214)

`(define-public (call-market-liquidate-as-tx-sender ((borrower principal) (collateral-ft trait_reference) (debt-ft trait_reference) (debt-amount uint) (min-collateral-expected uint) (collateral-receiver (optional principal)) (price-feeds (optional (list 3 (buff 8192))))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (call-market-liquidate-as-tx-sender 
                (borrower principal)
                (collateral-ft <ft-trait>)
                (debt-ft <ft-trait>)
                (debt-amount uint)
                (min-collateral-expected uint)
                (collateral-receiver (optional principal))
                (price-feeds (optional (list 3 (buff 8192)))))
  (begin
    ;; transfer funds to the contract first (precondition)
    (try! (contract-call? debt-ft transfer debt-amount tx-sender current-contract none))

    ;; the tx-sender == contract-caller
    (try! (as-contract? ((with-all-assets-unsafe))
      (try! 
        (contract-call? .market liquidate borrower collateral-ft debt-ft debt-amount min-collateral-expected collateral-receiver price-feeds)
      )
    ))
    (let ((balance (try! (contract-call? debt-ft get-balance current-contract))))
      (if (> balance u0)
        (try! (contract-call? debt-ft transfer balance current-contract tx-sender none))
        false
      )
      (ok balance)
    )
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrower | principal |
| collateral-ft | trait_reference |
| debt-ft | trait_reference |
| debt-amount | uint |
| min-collateral-expected | uint |
| collateral-receiver | (optional principal) |
| price-feeds | (optional (list 3 (buff 8192))) |

## Maps



## Variables



## Constants


  