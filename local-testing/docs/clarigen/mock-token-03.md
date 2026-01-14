
# mock-token-03

[`mock-token-03.clar`](../../contracts/utility/mock/mock-token-03.clar)

Mock token 03 for testing asset registry

Implements minimal ft-trait interface

**Public functions:**

- [`transfer`](#transfer)
- [`mint`](#mint)

**Read-only functions:**

- [`get-name`](#get-name)
- [`get-symbol`](#get-symbol)
- [`get-decimals`](#get-decimals)
- [`get-balance`](#get-balance)
- [`get-total-supply`](#get-total-supply)
- [`get-token-uri`](#get-token-uri)

**Private functions:**



**Maps**



**Variables**



**Constants**

- [`CONTRACT_OWNER`](#contract_owner)
- [`ERR_NOT_AUTHORIZED`](#err_not_authorized)


## Functions

### get-name

[View in file](../../contracts/utility/mock/mock-token-03.clar#L11)

`(define-read-only (get-name () (response (string-ascii 13) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-name)
  (ok "Mock Token 03"))
```
</details>




### get-symbol

[View in file](../../contracts/utility/mock/mock-token-03.clar#L14)

`(define-read-only (get-symbol () (response (string-ascii 6) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-symbol)
  (ok "MOCK03"))
```
</details>




### get-decimals

[View in file](../../contracts/utility/mock/mock-token-03.clar#L17)

`(define-read-only (get-decimals () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-decimals)
  (ok u8))
```
</details>




### get-balance

[View in file](../../contracts/utility/mock/mock-token-03.clar#L20)

`(define-read-only (get-balance ((account principal)) (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-balance (account principal))
  (ok (ft-get-balance mock-token-03 account)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### get-total-supply

[View in file](../../contracts/utility/mock/mock-token-03.clar#L23)

`(define-read-only (get-total-supply () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-total-supply)
  (ok (ft-get-supply mock-token-03)))
```
</details>




### get-token-uri

[View in file](../../contracts/utility/mock/mock-token-03.clar#L26)

`(define-read-only (get-token-uri () (response (optional none) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-token-uri)
  (ok none))
```
</details>




### transfer

[View in file](../../contracts/utility/mock/mock-token-03.clar#L29)

`(define-public (transfer ((amount uint) (sender principal) (recipient principal) (memo (optional (buff 34)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (is-eq tx-sender sender) ERR_NOT_AUTHORIZED)
    (try! (ft-transfer? mock-token-03 amount sender recipient))
    (match memo to-print (print to-print) 0x)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| sender | principal |
| recipient | principal |
| memo | (optional (buff 34)) |

### mint

[View in file](../../contracts/utility/mock/mock-token-03.clar#L36)

`(define-public (mint ((amount uint) (recipient principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (mint (amount uint) (recipient principal))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_NOT_AUTHORIZED)
    (ft-mint? mock-token-03 amount recipient)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| recipient | principal |

## Maps



## Variables



## Constants

### CONTRACT_OWNER





```clarity
(define-constant CONTRACT_OWNER tx-sender)
```

[View in file](../../contracts/utility/mock/mock-token-03.clar#L8)

### ERR_NOT_AUTHORIZED





```clarity
(define-constant ERR_NOT_AUTHORIZED (err u1))
```

[View in file](../../contracts/utility/mock/mock-token-03.clar#L9)
  