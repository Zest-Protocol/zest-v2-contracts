
# dao-treasury

[`dao-treasury.clar`](../../contracts/dao/dao-treasury.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

dao-treasury

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

**Public functions:**

- [`withdraw`](#withdraw)

**Read-only functions:**



**Private functions:**

- [`check-dao-auth`](#check-dao-auth)

**Maps**



**Variables**



**Constants**

- [`ERR-AUTH`](#err-auth)
- [`ZEST-STX-WRAPPER-CONTRACT`](#zest-stx-wrapper-contract)


## Functions

### check-dao-auth

[View in file](../../contracts/dao/dao-treasury.clar#L24)

`(define-private (check-dao-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))
```
</details>




### withdraw

[View in file](../../contracts/dao/dao-treasury.clar#L33)

`(define-public (withdraw ((token trait_reference) (amount uint) (recipient principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (withdraw (token <ft-trait>) (amount uint) (recipient principal))
  (let ((asset-contract (contract-of token)))
    (try! (check-dao-auth))

    (try! (if (is-eq asset-contract ZEST-STX-WRAPPER-CONTRACT)
      (as-contract? ((with-stx amount))
        (try! (contract-call? token transfer amount tx-sender recipient none)))
      (as-contract? ((with-ft asset-contract "*" amount))
        (try! (contract-call? token transfer amount tx-sender recipient none)))))

    (print {
      action: "dao-treasury-withdraw",
      caller: tx-sender,
      data: {
        token: (contract-of token),
        amount: amount,
        recipient: recipient
      }
    })
    
    (ok true)
  ))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| token | trait_reference |
| amount | uint |
| recipient | principal |

## Maps



## Variables



## Constants

### ERR-AUTH



============================================================================
ERRORS (300xxx prefix for dao-treasury)
============================================================================

```clarity
(define-constant ERR-AUTH (err u300001))
```

[View in file](../../contracts/dao/dao-treasury.clar#L13)

### ZEST-STX-WRAPPER-CONTRACT



CONSTANTS

```clarity
(define-constant ZEST-STX-WRAPPER-CONTRACT .wstx)
```

[View in file](../../contracts/dao/dao-treasury.clar#L16)
  