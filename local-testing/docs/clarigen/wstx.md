
# wstx

[`wstx.clar`](../../contracts/utility/token/wstx.clar)



**Public functions:**

- [`transfer`](#transfer)

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

- [`token-name`](#token-name)
- [`token-symbol`](#token-symbol)
- [`token-uri`](#token-uri)
- [`token-decimals`](#token-decimals)


## Functions

### transfer

[View in file](../../contracts/utility/token/wstx.clar#L8)

`(define-public (transfer ((amount uint) (sender principal) (recipient principal) (memo (optional (buff 34)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (try! (stx-transfer? amount sender recipient))
    (match memo to-print (print to-print) 0x)
    (ok true)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| sender | principal |
| recipient | principal |
| memo | (optional (buff 34)) |

### get-name

[View in file](../../contracts/utility/token/wstx.clar#L16)

`(define-read-only (get-name () (response (string-ascii 11) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-name)
  (ok token-name)
)
```
</details>




### get-symbol

[View in file](../../contracts/utility/token/wstx.clar#L20)

`(define-read-only (get-symbol () (response (string-ascii 4) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-symbol)
  (ok token-symbol)
)
```
</details>




### get-decimals

[View in file](../../contracts/utility/token/wstx.clar#L24)

`(define-read-only (get-decimals () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-decimals)
  (ok token-decimals)
)
```
</details>




### get-balance

[View in file](../../contracts/utility/token/wstx.clar#L28)

`(define-read-only (get-balance ((who principal)) (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-balance (who principal))
  (ok (stx-get-balance who))
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| who | principal |

### get-total-supply

[View in file](../../contracts/utility/token/wstx.clar#L32)

`(define-read-only (get-total-supply () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-total-supply)
  (ok stx-liquid-supply)
)
```
</details>




### get-token-uri

[View in file](../../contracts/utility/token/wstx.clar#L36)

`(define-read-only (get-token-uri () (response (optional none) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-token-uri)
  (ok token-uri)
)
```
</details>




## Maps



## Variables



## Constants

### token-name





```clarity
(define-constant token-name "Wrapped STX")
```

[View in file](../../contracts/utility/token/wstx.clar#L3)

### token-symbol





```clarity
(define-constant token-symbol "wSTX")
```

[View in file](../../contracts/utility/token/wstx.clar#L4)

### token-uri





```clarity
(define-constant token-uri none)
```

[View in file](../../contracts/utility/token/wstx.clar#L5)

### token-decimals





```clarity
(define-constant token-decimals u6)
```

[View in file](../../contracts/utility/token/wstx.clar#L6)
  