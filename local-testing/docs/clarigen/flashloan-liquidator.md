
# flashloan-liquidator

[`flashloan-liquidator.clar`](../../contracts/liquidation/flashloan-liquidator.clar)

Flashloan Liquidator



Executes liquidations using flashloans - no upfront capital needed.

Uses stateless buffer-based instruction encoding for atomic single-transaction execution.



Flow:

1. User encodes liquidation parameters into a buffer

2. User calls vault.flashloan directly, passing this contract as callback with encoded buffer

3. Vault sends funds to this contract (or user)

4. Vault calls this contract's callback

5. Callback decodes buffer, executes appropriate liquidation strategy

6. Callback swaps collateral for debt tokens (via mock-dex)

7. Callback sends profit to recipient encoded in buffer

8. Vault pulls repayment from funds-provider



IMPORTANT: No setup transactions needed! All instructions are encoded in the data buffer.

**Public functions:**

- [`callback`](#callback)

**Read-only functions:**

- [`get-mock-dex-rate`](#get-mock-dex-rate)
- [`get-op-same-asset`](#get-op-same-asset)
- [`get-op-redeem`](#get-op-redeem)
- [`get-op-redeem-swap`](#get-op-redeem-swap)
- [`get-op-swap`](#get-op-swap)
- [`get-market-pause-liquidation`](#get-market-pause-liquidation)

**Private functions:**

- [`get-u8`](#get-u8)
- [`decode-u128`](#decode-u128)
- [`decode-principal`](#decode-principal)
- [`principal-construct-from-version-and-hash`](#principal-construct-from-version-and-hash)
- [`handle-same-asset`](#handle-same-asset)
- [`execute-sbtc-same-asset`](#execute-sbtc-same-asset)
- [`handle-redeem`](#handle-redeem)
- [`execute-zstx-stx-redeem`](#execute-zstx-stx-redeem)
- [`execute-zsbtc-sbtc-redeem`](#execute-zsbtc-sbtc-redeem)
- [`execute-zststx-stx-redeem`](#execute-zststx-stx-redeem)
- [`handle-redeem-swap`](#handle-redeem-swap)
- [`execute-zsbtc-usdc-redeem-swap`](#execute-zsbtc-usdc-redeem-swap)
- [`handle-swap`](#handle-swap)
- [`execute-sbtc-usdc-swap`](#execute-sbtc-usdc-swap)

**Maps**



**Variables**

- [`callback-caller`](#callback-caller)

**Constants**

- [`OP-LIQUIDATE-SAME-ASSET`](#op-liquidate-same-asset)
- [`OP-LIQUIDATE-REDEEM`](#op-liquidate-redeem)
- [`OP-LIQUIDATE-REDEEM-SWAP`](#op-liquidate-redeem-swap)
- [`OP-LIQUIDATE-SWAP`](#op-liquidate-swap)
- [`ERR-NO-DATA`](#err-no-data)
- [`ERR-UNKNOWN-OP`](#err-unknown-op)
- [`ERR-DECODE-FAILED`](#err-decode-failed)
- [`ERR-LIQUIDATION-FAILED`](#err-liquidation-failed)
- [`ERR-SWAP-FAILED`](#err-swap-failed)
- [`ERR-INSUFFICIENT-PROFIT`](#err-insufficient-profit)
- [`ERR-INVALID-ASSET-ID`](#err-invalid-asset-id)
- [`MARKET-CONTRACT`](#market-contract)
- [`MOCK-DEX-CONTRACT`](#mock-dex-contract)


## Functions

### get-mock-dex-rate

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L58)

`(define-read-only (get-mock-dex-rate () uint)`

Direct reference to help dependency analyzer

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-mock-dex-rate)
  (contract-call? .mock-dex get-swap-rate))
```
</details>




### get-u8

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L73)

`(define-private (get-u8 ((data (buff 4096)) (pos uint)) uint)`

Get a single byte as uint from buffer at position

<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-u8 (data (buff 4096)) (pos uint))
  (match (element-at? data pos)
    byte (buff-to-uint-be byte)
    u0))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| data | (buff 4096) |
| pos | uint |

### decode-u128

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L80)

`(define-private (decode-u128 ((data (buff 4096)) (start uint)) uint)`

Decode u128 from 16 bytes big-endian at position
Buffer layout: bytes [pos, pos+16)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (decode-u128 (data (buff 4096)) (start uint))
  (let (
    (end (+ start u16))
    (segment (default-to 0x (slice? data start end)))
  )
    ;; Convert to u128, handling case where slice might be shorter than 16 bytes
    (buff-to-uint-be (unwrap-panic (as-max-len? segment u16)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| data | (buff 4096) |
| start | uint |

### decode-principal

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L90)

`(define-private (decode-principal ((data (buff 4096)) (start uint)) principal)`

Decode principal from 21 bytes at position
Buffer layout: byte 0 = version, bytes 1-20 = hash160

<details>
  <summary>Source code:</summary>

```clarity
(define-private (decode-principal (data (buff 4096)) (start uint))
  (let (
    (version-pos start)
    (hash-start (+ start u1))
    (hash-end (+ start u21))
    (version-byte (get-u8 data version-pos))
    (hash-segment (default-to 0x (slice? data hash-start hash-end)))
    (hash-20 (unwrap-panic (as-max-len? hash-segment u20)))
  )
    ;; Construct principal from version byte and hash
    (principal-construct-from-version-and-hash version-byte hash-20)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| data | (buff 4096) |
| start | uint |

### principal-construct-from-version-and-hash

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L104)

`(define-private (principal-construct-from-version-and-hash ((version uint) (hash (buff 20))) principal)`

Helper to construct principal from version uint and hash bytes
Supports standard principals on mainnet (0x16=22) and testnet (0x1a=26)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (principal-construct-from-version-and-hash (version uint) (hash (buff 20)))
  (if (is-eq version u22)
      ;; 0x16 = mainnet standard principal
      (unwrap-panic (principal-construct? 0x16 hash))
      (if (is-eq version u26)
          ;; 0x1a = testnet standard principal
          (unwrap-panic (principal-construct? 0x1a hash))
          (if (is-eq version u20)
              ;; 0x14 = mainnet contract principal
              (unwrap-panic (principal-construct? 0x14 hash))
              (if (is-eq version u21)
                  ;; 0x15 = mainnet multi-sig
                  (unwrap-panic (principal-construct? 0x15 hash))
                  (if (is-eq version u25)
                      ;; 0x19 = testnet multi-sig
                      (unwrap-panic (principal-construct? 0x19 hash))
                      ;; Default to testnet standard
                      (unwrap-panic (principal-construct? 0x1a hash))))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| version | uint |
| hash | (buff 20) |

### callback

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L129)

`(define-public (callback ((amount uint) (fee uint) (data (optional (buff 4096)))) (response bool uint))`

Called by vault during flashloan
All liquidation instructions are decoded from the data buffer

<details>
  <summary>Source code:</summary>

```clarity
(define-public (callback
    (amount uint)
    (fee uint)
    (data (optional (buff 4096))))
  (let (
    (buf (unwrap! data ERR-NO-DATA))
    (op (get-u8 buf u0))
    (caller tx-sender)
  )
    ;; Store the caller for profit distribution
    (var-set callback-caller caller)

    (if (is-eq op OP-LIQUIDATE-SAME-ASSET)
        (handle-same-asset amount fee buf caller)
    (if (is-eq op OP-LIQUIDATE-REDEEM)
        (handle-redeem amount fee buf caller)
    (if (is-eq op OP-LIQUIDATE-REDEEM-SWAP)
        (handle-redeem-swap amount fee buf caller)
    (if (is-eq op OP-LIQUIDATE-SWAP)
        (handle-swap amount fee buf caller)
    ERR-UNKNOWN-OP))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| fee | uint |
| data | (optional (buff 4096)) |

### handle-same-asset

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L163)

`(define-private (handle-same-asset ((amount uint) (fee uint) (data (buff 4096)) (caller principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (handle-same-asset (amount uint) (fee uint) (data (buff 4096)) (caller principal))
  (let (
    (borrower (decode-principal data u1))
    (coll-aid (get-u8 data u22))
    (min-coll (decode-u128 data u23))
    (min-profit (decode-u128 data u39))
    (total-repayment (+ amount fee))
  )
    ;; Route based on asset ID
    ;; Asset ID 2 = sBTC
    (if (is-eq coll-aid u2)
        (execute-sbtc-same-asset borrower amount min-coll total-repayment caller)
        ERR-INVALID-ASSET-ID)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| fee | uint |
| data | (buff 4096) |
| caller | principal |

### execute-sbtc-same-asset

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L179)

`(define-private (execute-sbtc-same-asset ((borrower principal) (debt-amount uint) (min-collateral uint) (total-repayment uint) (caller principal)) (response bool uint))`

Execute sBTC same-asset liquidation
Liquidate sBTC collateral to repay sBTC debt, keep profit

<details>
  <summary>Source code:</summary>

```clarity
(define-private (execute-sbtc-same-asset
    (borrower principal)
    (debt-amount uint)
    (min-collateral uint)
    (total-repayment uint)
    (caller principal))
  (ok (try! (as-contract? ((with-all-assets-unsafe))
    (let (
      (liq-result (try! (contract-call? .market liquidate
                          borrower
                          .sbtc
                          .sbtc
                          debt-amount
                          min-collateral
                          none
                          none)))
      (collateral-received (get collateral liq-result))
      (debt-repaid (get debt liq-result))
    )
      ;; tx-sender has the flashloaned sBTC and received collateral
      ;; The vault will pull repayment from funds-provider (original tx-sender)
      (print {
        action: "flashloan-liquidation-same-asset",
        borrower: borrower,
        collateral-received: collateral-received,
        debt-repaid: debt-repaid,
        flashloan-amount: debt-amount,
        total-repayment: total-repayment,
        caller: caller
      })

      true)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrower | principal |
| debt-amount | uint |
| min-collateral | uint |
| total-repayment | uint |
| caller | principal |

### handle-redeem

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L226)

`(define-private (handle-redeem ((amount uint) (fee uint) (data (buff 4096)) (caller principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (handle-redeem (amount uint) (fee uint) (data (buff 4096)) (caller principal))
  (let (
    (borrower (decode-principal data u1))
    (coll-ztoken-aid (get-u8 data u22))
    (debt-aid (get-u8 data u23))
    (min-coll (decode-u128 data u24))
    (min-underlying (decode-u128 data u40))
    (min-profit (decode-u128 data u56))
    (total-repayment (+ amount fee))
  )
    ;; Route based on collateral zToken ID
    ;; zSTX=1, zsBTC=3, zstSTX=5
    (if (is-eq coll-ztoken-aid u1)
        (execute-zstx-stx-redeem borrower amount min-coll min-underlying total-repayment caller)
    (if (is-eq coll-ztoken-aid u3)
        (execute-zsbtc-sbtc-redeem borrower amount min-coll min-underlying total-repayment caller)
    (if (is-eq coll-ztoken-aid u5)
        (execute-zststx-stx-redeem borrower amount min-coll min-underlying total-repayment caller)
    ERR-INVALID-ASSET-ID)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| fee | uint |
| data | (buff 4096) |
| caller | principal |

### execute-zstx-stx-redeem

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L247)

`(define-private (execute-zstx-stx-redeem ((borrower principal) (debt-amount uint) (min-collateral uint) (min-underlying uint) (total-repayment uint) (caller principal)) (response bool uint))`

Execute zSTX -> STX redemption liquidation

<details>
  <summary>Source code:</summary>

```clarity
(define-private (execute-zstx-stx-redeem
    (borrower principal)
    (debt-amount uint)
    (min-collateral uint)
    (min-underlying uint)
    (total-repayment uint)
    (caller principal))
  (ok (try! (as-contract? ((with-all-assets-unsafe))
    (let (
      (liq-result (try! (contract-call? .market liquidate-redeem
                          borrower
                          .vault-stx
                          .wstx
                          debt-amount
                          min-collateral
                          min-underlying
                          none
                          none)))
      (underlying-received (get underlying liq-result))
      (debt-repaid (get debt liq-result))
    )
      (print {
        action: "flashloan-liquidation-redeem-zstx",
        borrower: borrower,
        underlying-received: underlying-received,
        debt-repaid: debt-repaid,
        total-repayment: total-repayment,
        caller: caller
      })

      true)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrower | principal |
| debt-amount | uint |
| min-collateral | uint |
| min-underlying | uint |
| total-repayment | uint |
| caller | principal |

### execute-zsbtc-sbtc-redeem

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L280)

`(define-private (execute-zsbtc-sbtc-redeem ((borrower principal) (debt-amount uint) (min-collateral uint) (min-underlying uint) (total-repayment uint) (caller principal)) (response bool uint))`

Execute zsBTC -> sBTC redemption liquidation

<details>
  <summary>Source code:</summary>

```clarity
(define-private (execute-zsbtc-sbtc-redeem
    (borrower principal)
    (debt-amount uint)
    (min-collateral uint)
    (min-underlying uint)
    (total-repayment uint)
    (caller principal))
  (ok (try! (as-contract? ((with-all-assets-unsafe))
    (let (
      (liq-result (try! (contract-call? .market liquidate-redeem
                          borrower
                          .vault-sbtc
                          .sbtc
                          debt-amount
                          min-collateral
                          min-underlying
                          none
                          none)))
      (underlying-received (get underlying liq-result))
      (debt-repaid (get debt liq-result))
    )
      (print {
        action: "flashloan-liquidation-redeem-zsbtc",
        borrower: borrower,
        underlying-received: underlying-received,
        debt-repaid: debt-repaid,
        total-repayment: total-repayment,
        caller: caller
      })

      true)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrower | principal |
| debt-amount | uint |
| min-collateral | uint |
| min-underlying | uint |
| total-repayment | uint |
| caller | principal |

### execute-zststx-stx-redeem

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L313)

`(define-private (execute-zststx-stx-redeem ((borrower principal) (debt-amount uint) (min-collateral uint) (min-underlying uint) (total-repayment uint) (caller principal)) (response bool uint))`

Execute zstSTX -> STX redemption liquidation (stSTX redeems to STX equivalent)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (execute-zststx-stx-redeem
    (borrower principal)
    (debt-amount uint)
    (min-collateral uint)
    (min-underlying uint)
    (total-repayment uint)
    (caller principal))
  (ok (try! (as-contract? ((with-all-assets-unsafe))
    (let (
      (liq-result (try! (contract-call? .market liquidate-redeem
                          borrower
                          .vault-ststx
                          .wstx
                          debt-amount
                          min-collateral
                          min-underlying
                          none
                          none)))
      (underlying-received (get underlying liq-result))
      (debt-repaid (get debt liq-result))
    )
      (print {
        action: "flashloan-liquidation-redeem-zststx",
        borrower: borrower,
        underlying-received: underlying-received,
        debt-repaid: debt-repaid,
        total-repayment: total-repayment,
        caller: caller
      })

      true)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrower | principal |
| debt-amount | uint |
| min-collateral | uint |
| min-underlying | uint |
| total-repayment | uint |
| caller | principal |

### handle-redeem-swap

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L360)

`(define-private (handle-redeem-swap ((amount uint) (fee uint) (data (buff 4096)) (caller principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (handle-redeem-swap (amount uint) (fee uint) (data (buff 4096)) (caller principal))
  (let (
    (borrower (decode-principal data u1))
    (coll-ztoken-aid (get-u8 data u22))
    (debt-aid (get-u8 data u23))
    (min-coll (decode-u128 data u24))
    (min-underlying (decode-u128 data u40))
    (min-swap-out (decode-u128 data u56))
    (dex-route (get-u8 data u72))
    (total-repayment (+ amount fee))
  )
    ;; Route: zsBTC collateral, USDC debt -> redeem to sBTC, swap to USDC
    (if (and (is-eq coll-ztoken-aid u3) (is-eq debt-aid u6))
        (execute-zsbtc-usdc-redeem-swap borrower amount min-coll min-underlying min-swap-out total-repayment caller)
        ERR-INVALID-ASSET-ID)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| fee | uint |
| data | (buff 4096) |
| caller | principal |

### execute-zsbtc-usdc-redeem-swap

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L377)

`(define-private (execute-zsbtc-usdc-redeem-swap ((borrower principal) (debt-amount uint) (min-collateral uint) (min-underlying uint) (min-swap-out uint) (total-repayment uint) (caller principal)) (response bool uint))`

Execute zsBTC -> sBTC -> USDC redemption + swap liquidation

<details>
  <summary>Source code:</summary>

```clarity
(define-private (execute-zsbtc-usdc-redeem-swap
    (borrower principal)
    (debt-amount uint)
    (min-collateral uint)
    (min-underlying uint)
    (min-swap-out uint)
    (total-repayment uint)
    (caller principal))
  (ok (try! (as-contract? ((with-all-assets-unsafe))
    (begin
      ;; Step 1: Liquidate-redeem zsBTC collateral with USDC debt
      (let (
        (liq-result (try! (contract-call? .market liquidate-redeem
                              borrower
                              .vault-sbtc
                              .usdc
                              debt-amount
                              min-collateral
                              min-underlying
                              none
                              none)))
        (underlying-received (get underlying liq-result))
      )
        ;; Step 2: Swap sBTC -> USDC via mock-dex
        (let (
          (swap-result (try! (contract-call? .mock-dex swap
                                .sbtc
                                .usdc
                                underlying-received
                                min-swap-out)))
          (usdc-received swap-result)
        )
          ;; Step 3: Transfer USDC to caller for flashloan repayment and profit
          (try! (contract-call? .usdc transfer usdc-received tx-sender caller none))

          (print {
            action: "flashloan-liquidation-redeem-swap",
            borrower: borrower,
            underlying-received: underlying-received,
            usdc-received: usdc-received,
            total-repayment: total-repayment,
            caller: caller
          })

          true)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrower | principal |
| debt-amount | uint |
| min-collateral | uint |
| min-underlying | uint |
| min-swap-out | uint |
| total-repayment | uint |
| caller | principal |

### handle-swap

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L437)

`(define-private (handle-swap ((amount uint) (fee uint) (data (buff 4096)) (caller principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (handle-swap (amount uint) (fee uint) (data (buff 4096)) (caller principal))
  (let (
    (borrower (decode-principal data u1))
    (coll-aid (get-u8 data u22))
    (debt-aid (get-u8 data u23))
    (min-coll (decode-u128 data u24))
    (min-swap-out (decode-u128 data u40))
    (dex-route (get-u8 data u56))
    (total-repayment (+ amount fee))
  )
    ;; Route: sBTC collateral, USDC debt -> liquidate, swap to USDC
    (if (and (is-eq coll-aid u2) (is-eq debt-aid u6))
        (execute-sbtc-usdc-swap borrower amount min-coll min-swap-out total-repayment caller)
        ERR-INVALID-ASSET-ID)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| amount | uint |
| fee | uint |
| data | (buff 4096) |
| caller | principal |

### execute-sbtc-usdc-swap

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L453)

`(define-private (execute-sbtc-usdc-swap ((borrower principal) (debt-amount uint) (min-collateral uint) (min-swap-out uint) (total-repayment uint) (caller principal)) (response bool uint))`

Execute sBTC -> USDC swap liquidation

<details>
  <summary>Source code:</summary>

```clarity
(define-private (execute-sbtc-usdc-swap
    (borrower principal)
    (debt-amount uint)
    (min-collateral uint)
    (min-swap-out uint)
    (total-repayment uint)
    (caller principal))
  (ok (try! (as-contract? ((with-all-assets-unsafe))
    (begin
      ;; Step 1: Liquidate sBTC collateral with USDC debt
      (let (
        (liq-result (try! (contract-call? .market liquidate
                              borrower
                              .sbtc
                              .usdc
                              debt-amount
                              min-collateral
                              none
                              none)))
        (collateral-received (get collateral liq-result))
      )
        ;; Step 2: Swap sBTC -> USDC via mock-dex
        (let (
          (swap-result (try! (contract-call? .mock-dex swap
                                .sbtc
                                .usdc
                                collateral-received
                                min-swap-out)))
          (usdc-received swap-result)
        )
          ;; Step 3: Transfer USDC to caller for flashloan repayment and profit
          (try! (contract-call? .usdc transfer usdc-received tx-sender caller none))

          (print {
            action: "flashloan-liquidation-swap",
            borrower: borrower,
            collateral-received: collateral-received,
            usdc-received: usdc-received,
            total-repayment: total-repayment,
            caller: caller
          })

          true)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrower | principal |
| debt-amount | uint |
| min-collateral | uint |
| min-swap-out | uint |
| total-repayment | uint |
| caller | principal |

### get-op-same-asset

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L501)

`(define-read-only (get-op-same-asset () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-op-same-asset)
  OP-LIQUIDATE-SAME-ASSET)
```
</details>




### get-op-redeem

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L504)

`(define-read-only (get-op-redeem () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-op-redeem)
  OP-LIQUIDATE-REDEEM)
```
</details>




### get-op-redeem-swap

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L507)

`(define-read-only (get-op-redeem-swap () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-op-redeem-swap)
  OP-LIQUIDATE-REDEEM-SWAP)
```
</details>




### get-op-swap

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L510)

`(define-read-only (get-op-swap () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-op-swap)
  OP-LIQUIDATE-SWAP)
```
</details>




### get-market-pause-liquidation

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L514)

`(define-read-only (get-market-pause-liquidation () (response bool none))`

Direct reference to market for deployment ordering

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-market-pause-liquidation)
  (contract-call? .market get-pause-liquidation))
```
</details>




## Maps



## Variables

### callback-caller

principal



```clarity
(define-data-var callback-caller principal tx-sender)
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L66)

## Constants

### OP-LIQUIDATE-SAME-ASSET



Same-asset liquidation: sBTC collateral -> sBTC debt (Egroup 3, 13)

```clarity
(define-constant OP-LIQUIDATE-SAME-ASSET u1)
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L27)

### OP-LIQUIDATE-REDEEM



zToken redemption: zToken -> same underlying debt (Egroup 11, 12, 13, 17)

```clarity
(define-constant OP-LIQUIDATE-REDEEM u2)
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L30)

### OP-LIQUIDATE-REDEEM-SWAP



zToken redemption + swap: zToken -> swap -> different debt (Egroup 1, 4, 5, 6)

```clarity
(define-constant OP-LIQUIDATE-REDEEM-SWAP u3)
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L33)

### OP-LIQUIDATE-SWAP



Non-zToken swap: non-zToken collateral -> swap -> debt (Egroup 1, 2)

```clarity
(define-constant OP-LIQUIDATE-SWAP u4)
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L36)

### ERR-NO-DATA





```clarity
(define-constant ERR-NO-DATA (err u900001))
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L42)

### ERR-UNKNOWN-OP





```clarity
(define-constant ERR-UNKNOWN-OP (err u900002))
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L43)

### ERR-DECODE-FAILED





```clarity
(define-constant ERR-DECODE-FAILED (err u900003))
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L44)

### ERR-LIQUIDATION-FAILED





```clarity
(define-constant ERR-LIQUIDATION-FAILED (err u900004))
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L45)

### ERR-SWAP-FAILED





```clarity
(define-constant ERR-SWAP-FAILED (err u900005))
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L46)

### ERR-INSUFFICIENT-PROFIT





```clarity
(define-constant ERR-INSUFFICIENT-PROFIT (err u900006))
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L47)

### ERR-INVALID-ASSET-ID





```clarity
(define-constant ERR-INVALID-ASSET-ID (err u900007))
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L48)

### MARKET-CONTRACT





```clarity
(define-constant MARKET-CONTRACT .market)
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L54)

### MOCK-DEX-CONTRACT





```clarity
(define-constant MOCK-DEX-CONTRACT .mock-dex)
```

[View in file](../../contracts/liquidation/flashloan-liquidator.clar#L55)
  