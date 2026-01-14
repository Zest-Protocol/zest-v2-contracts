
# mock-dex

[`mock-dex.clar`](../../contracts/utility/mock/mock-dex.clar)

Mock DEX for Testing Flashloan Liquidations



A simple swap contract for testing. Pre-fund with tokens before tests.

Swaps at 1:1 rate (or configurable rate) to simulate DEX behavior.



Usage in tests:

1. Mint token-out to mock-dex (so it has tokens to give)

2. Call swap from your contract

3. Caller sends token-in, receives token-out



NOTE: Uses as-contract for outbound transfers to handle wSTX which requires

sender == tx-sender for stx-transfer?

**Public functions:**

- [`swap`](#swap)
- [`set-swap-rate`](#set-swap-rate)

**Read-only functions:**

- [`get-swap-rate`](#get-swap-rate)
- [`get-amount-out`](#get-amount-out)

**Private functions:**



**Maps**



**Variables**

- [`swap-rate`](#swap-rate)

**Constants**

- [`ERR-INSUFFICIENT-BALANCE`](#err-insufficient-balance)
- [`ERR-TRANSFER-FAILED`](#err-transfer-failed)
- [`ERR-SLIPPAGE`](#err-slippage)
- [`BPS`](#bps)


## Functions

### swap

[View in file](../../contracts/utility/mock/mock-dex.clar#L27)

`(define-public (swap ((token-in trait_reference) (token-out trait_reference) (amount-in uint) (min-amount-out uint)) (response uint uint))`

Simple swap function
Takes token-in from caller, gives token-out to caller
Rate is 1:1 by default (adjustable via set-swap-rate)

<details>
  <summary>Source code:</summary>

```clarity
(define-public (swap
    (token-in <ft-trait>)
    (token-out <ft-trait>)
    (amount-in uint)
    (min-amount-out uint))
  (let (
    (caller contract-caller)
    (this-contract .mock-dex)
    (rate (var-get swap-rate))
    (amount-out (/ (* amount-in rate) BPS))
  )
    ;; Check slippage
    (asserts! (>= amount-out min-amount-out) ERR-SLIPPAGE)

    ;; Take token-in from caller (caller must have previously approved or be sender)
    (try! (contract-call? token-in transfer amount-in caller this-contract none))

    ;; Give token-out to caller (this contract must hold enough)
    ;; Use as-contract? with with-all-assets-unsafe to handle wSTX which uses stx-transfer?
    ;; requiring sender == tx-sender. This pattern makes the contract the sender.
    (try! (as-contract? ((with-all-assets-unsafe))
      (try! (contract-call? token-out transfer amount-out tx-sender caller none))
      true))

    (print {
      action: "mock-dex-swap",
      token-in: (contract-of token-in),
      token-out: (contract-of token-out),
      amount-in: amount-in,
      amount-out: amount-out,
      caller: caller
    })

    (ok amount-out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| token-in | trait_reference |
| token-out | trait_reference |
| amount-in | uint |
| min-amount-out | uint |

### set-swap-rate

[View in file](../../contracts/utility/mock/mock-dex.clar#L64)

`(define-public (set-swap-rate ((new-rate uint)) (response bool none))`

Set swap rate (for testing different scenarios)
10000 = 1:1, 9000 = 10% loss, 11000 = 10% profit

<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-swap-rate (new-rate uint))
  (begin
    (var-set swap-rate new-rate)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-rate | uint |

### get-swap-rate

[View in file](../../contracts/utility/mock/mock-dex.clar#L70)

`(define-read-only (get-swap-rate () uint)`

Get current swap rate

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-swap-rate)
  (var-get swap-rate))
```
</details>




### get-amount-out

[View in file](../../contracts/utility/mock/mock-dex.clar#L74)

`(define-read-only (get-amount-out ((amount-in uint)) uint)`

Preview swap output

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-amount-out (amount-in uint))
  (/ (* amount-in (var-get swap-rate)) BPS))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount-in | uint |

## Maps



## Variables

### swap-rate

uint

Swap rate in BPS (10000 = 1:1, 9500 = 5% slippage)

```clarity
(define-data-var swap-rate uint u10000)
```

[View in file](../../contracts/utility/mock/mock-dex.clar#L21)

## Constants

### ERR-INSUFFICIENT-BALANCE





```clarity
(define-constant ERR-INSUFFICIENT-BALANCE (err u2001))
```

[View in file](../../contracts/utility/mock/mock-dex.clar#L16)

### ERR-TRANSFER-FAILED





```clarity
(define-constant ERR-TRANSFER-FAILED (err u2002))
```

[View in file](../../contracts/utility/mock/mock-dex.clar#L17)

### ERR-SLIPPAGE





```clarity
(define-constant ERR-SLIPPAGE (err u2003))
```

[View in file](../../contracts/utility/mock/mock-dex.clar#L18)

### BPS





```clarity
(define-constant BPS u10000)
```

[View in file](../../contracts/utility/mock/mock-dex.clar#L22)
  