
# mock-oracle

[`mock-oracle.clar`](../../contracts/utility/mock/mock-oracle.clar)

Mock Oracle for Testing



Implements the DIA oracle interface for controllable price testing.

Used in simnet and mainnet staging to test bad debt socialization.



Usage:

1. Initialize with: (contract-call? .mock-oracle set-price "USDh/USD" u100000000) for $1.00

2. Crash price with: (contract-call? .mock-oracle set-price "USDh/USD" u1000000) for $0.01

**Public functions:**

- [`set-price`](#set-price)
- [`set-deployer`](#set-deployer)

**Read-only functions:**

- [`get-value`](#get-value)
- [`get-deployer`](#get-deployer)

**Private functions:**



**Maps**

- [`prices`](#prices)

**Variables**

- [`deployer`](#deployer)

**Constants**

- [`ERR-NOT-AUTHORIZED`](#err-not-authorized)
- [`ERR-KEY-NOT-FOUND`](#err-key-not-found)


## Functions

### get-value

[View in file](../../contracts/utility/mock/mock-oracle.clar#L23)

`(define-read-only (get-value ((key (string-ascii 32))) (response (tuple (timestamp uint) (value uint)) uint))`

DIA-compatible read function
Returns price and timestamp for the given key

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-value (key (string-ascii 32)))
  (ok (unwrap! (map-get? prices key) ERR-KEY-NOT-FOUND)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| key | (string-ascii 32) |

### set-price

[View in file](../../contracts/utility/mock/mock-oracle.clar#L28)

`(define-public (set-price ((key (string-ascii 32)) (value uint)) (response bool uint))`

Set price (deployer only)
Can be called directly in simnet

<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-price (key (string-ascii 32)) (value uint))
  (begin
    (asserts! (is-eq tx-sender (var-get deployer)) ERR-NOT-AUTHORIZED)
    (map-set prices key { value: value, timestamp: stacks-block-time })
    (print {
      action: "mock-oracle-set-price",
      key: key,
      value: value,
      timestamp: stacks-block-time
    })
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| key | (string-ascii 32) |
| value | uint |

### set-deployer

[View in file](../../contracts/utility/mock/mock-oracle.clar#L41)

`(define-public (set-deployer ((new-deployer principal)) (response bool uint))`

Transfer deployer role (for mainnet staging if needed)

<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-deployer (new-deployer principal))
  (begin
    (asserts! (is-eq tx-sender (var-get deployer)) ERR-NOT-AUTHORIZED)
    (var-set deployer new-deployer)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-deployer | principal |

### get-deployer

[View in file](../../contracts/utility/mock/mock-oracle.clar#L48)

`(define-read-only (get-deployer () principal)`

Read-only: get current deployer

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-deployer)
  (var-get deployer))
```
</details>




## Maps

### prices

Price storage: key -> { value, timestamp }
value is in 8 decimal precision (e.g., $1.00 = 100000000)

```clarity
(define-map prices
  (string-ascii 32)
  { value: uint, timestamp: uint })
```

[View in file](../../contracts/utility/mock/mock-oracle.clar#L17)

## Variables

### deployer

principal



```clarity
(define-data-var deployer principal tx-sender)
```

[View in file](../../contracts/utility/mock/mock-oracle.clar#L13)

## Constants

### ERR-NOT-AUTHORIZED





```clarity
(define-constant ERR-NOT-AUTHORIZED (err u1000))
```

[View in file](../../contracts/utility/mock/mock-oracle.clar#L10)

### ERR-KEY-NOT-FOUND





```clarity
(define-constant ERR-KEY-NOT-FOUND (err u1001))
```

[View in file](../../contracts/utility/mock/mock-oracle.clar#L11)
  