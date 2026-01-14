
# usdc

[`usdc.clar`](../../contracts/utility/token/usdc.clar)



**Public functions:**

- [`transfer`](#transfer)
- [`mint`](#mint)
- [`burn`](#burn)

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

- [`token-name`](#token-name)
- [`token-symbol`](#token-symbol)
- [`token-uri`](#token-uri)
- [`token-decimals`](#token-decimals)

**Constants**

- [`err-unauthorised`](#err-unauthorised)
- [`err-not-token-owner`](#err-not-token-owner)
- [`deployer`](#deployer)


## Functions

### transfer

[View in file](../../contracts/utility/token/usdc.clar#L16)

`(define-public (transfer ((amount uint) (sender principal) (recipient principal) (memo (optional (buff 34)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (or (is-eq tx-sender sender) (is-eq contract-caller sender)) err-not-token-owner)
    (ft-transfer? usdc amount sender recipient)
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

[View in file](../../contracts/utility/token/usdc.clar#L23)

`(define-read-only (get-name () (response (string-ascii 32) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-name)
  (ok (var-get token-name))
)
```
</details>




### get-symbol

[View in file](../../contracts/utility/token/usdc.clar#L27)

`(define-read-only (get-symbol () (response (string-ascii 10) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-symbol)
  (ok (var-get token-symbol))
)
```
</details>




### get-decimals

[View in file](../../contracts/utility/token/usdc.clar#L31)

`(define-read-only (get-decimals () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-decimals)
  (ok (var-get token-decimals))
)
```
</details>




### get-balance

[View in file](../../contracts/utility/token/usdc.clar#L35)

`(define-read-only (get-balance ((who principal)) (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-balance (who principal))
  (ok (ft-get-balance usdc who))
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| who | principal |

### get-total-supply

[View in file](../../contracts/utility/token/usdc.clar#L39)

`(define-read-only (get-total-supply () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-total-supply)
  (ok (ft-get-supply usdc))
)
```
</details>




### get-token-uri

[View in file](../../contracts/utility/token/usdc.clar#L43)

`(define-read-only (get-token-uri () (response (optional (string-utf8 256)) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-token-uri)
  (ok (var-get token-uri))
)
```
</details>




### mint

[View in file](../../contracts/utility/token/usdc.clar#L47)

`(define-public (mint ((amount uint) (account principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (mint (amount uint) (account principal))
  (begin
    (asserts! (is-eq tx-sender deployer) (err u1))
    (ft-mint? usdc amount account)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| account | principal |

### burn

[View in file](../../contracts/utility/token/usdc.clar#L54)

`(define-public (burn ((amount uint) (account principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (burn (amount uint) (account principal))
  (begin
    (asserts! (is-eq tx-sender deployer) (err u1))
    (ft-burn? usdc amount account)
  )
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| account | principal |

## Maps



## Variables

### token-name

(string-ascii 32)



```clarity
(define-data-var token-name (string-ascii 32) "usdc")
```

[View in file](../../contracts/utility/token/usdc.clar#L8)

### token-symbol

(string-ascii 10)



```clarity
(define-data-var token-symbol (string-ascii 10) "usdc")
```

[View in file](../../contracts/utility/token/usdc.clar#L9)

### token-uri

(optional (string-utf8 256))



```clarity
(define-data-var token-uri (optional (string-utf8 256)) none)
```

[View in file](../../contracts/utility/token/usdc.clar#L10)

### token-decimals

uint



```clarity
(define-data-var token-decimals uint u6)
```

[View in file](../../contracts/utility/token/usdc.clar#L11)

## Constants

### err-unauthorised





```clarity
(define-constant err-unauthorised (err u3000))
```

[View in file](../../contracts/utility/token/usdc.clar#L3)

### err-not-token-owner





```clarity
(define-constant err-not-token-owner (err u4))
```

[View in file](../../contracts/utility/token/usdc.clar#L4)

### deployer





```clarity
(define-constant deployer tx-sender)
```

[View in file](../../contracts/utility/token/usdc.clar#L13)
  