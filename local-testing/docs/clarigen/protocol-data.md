
# protocol-data

[`protocol-data.clar`](../../contracts/utility/protocol-data.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

protocol-data - read-only utility contract

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

Provides optimized read-only functions to query protocol state

Batches related data to minimize cross-contract call overhead

**Public functions:**



**Read-only functions:**

- [`get-user-position`](#get-user-position)
- [`get-all-assets`](#get-all-assets)
- [`get-all-reserves`](#get-all-reserves)
- [`get-reserve`](#get-reserve)
- [`get-all-egroups`](#get-all-egroups)
- [`get-egroup`](#get-egroup)
- [`get-all-interest-curves`](#get-all-interest-curves)
- [`get-interest-curve`](#get-interest-curve)
- [`get-asset-apys`](#get-asset-apys)
- [`get-protocol-summary`](#get-protocol-summary)
- [`get-supplies-user`](#get-supplies-user)
- [`get-user-borrows`](#get-user-borrows)
- [`get-all-vault-ratios`](#get-all-vault-ratios)
- [`get-market-vault-balances`](#get-market-vault-balances)
- [`get-market-vault-balances-user`](#get-market-vault-balances-user)
- [`get-user-sbtc-balances`](#get-user-sbtc-balances)

**Private functions:**

- [`mul-div-down`](#mul-div-down)
- [`mul-bps-down`](#mul-bps-down)
- [`min`](#min)
- [`normalize-pyth`](#normalize-pyth)
- [`get-pyth-price`](#get-pyth-price)
- [`get-vault-interest-rate`](#get-vault-interest-rate)
- [`get-vault-utilization`](#get-vault-utilization)
- [`get-vault-fee-reserve`](#get-vault-fee-reserve)
- [`get-vault-total-assets`](#get-vault-total-assets)
- [`get-vault-debt`](#get-vault-debt)
- [`get-vault-total-supply`](#get-vault-total-supply)
- [`get-vault-borrow-index`](#get-vault-borrow-index)
- [`get-vault-liquidity-index`](#get-vault-liquidity-index)
- [`get-vault-cap-supply`](#get-vault-cap-supply)
- [`get-vault-cap-debt`](#get-vault-cap-debt)
- [`get-vault-last-update`](#get-vault-last-update)
- [`get-vault-points-util`](#get-vault-points-util)
- [`get-vault-points-rate`](#get-vault-points-rate)
- [`get-vault-underlying-balance`](#get-vault-underlying-balance)
- [`get-vault-underlying`](#get-vault-underlying)
- [`get-vault-available-liquidity`](#get-vault-available-liquidity)
- [`calc-supply-apy`](#calc-supply-apy)
- [`underlying-to-vault-id`](#underlying-to-vault-id)
- [`build-reserve-data`](#build-reserve-data)
- [`build-interest-curve`](#build-interest-curve)
- [`iter-build-asset`](#iter-build-asset)
- [`iter-build-egroup`](#iter-build-egroup)
- [`build-debt-entry`](#build-debt-entry)
- [`sum-collateral-usd`](#sum-collateral-usd)
- [`find-collateral-amount-iter`](#find-collateral-amount-iter)
- [`sum-debt-usd`](#sum-debt-usd)
- [`get-asset-price`](#get-asset-price)

**Maps**



**Variables**



**Constants**

- [`STX`](#stx)
- [`zSTX`](#zstx)
- [`sBTC`](#sbtc)
- [`zsBTC`](#zsbtc)
- [`stSTX`](#ststx)
- [`zstSTX`](#zststx)
- [`USDC`](#usdc)
- [`zUSDC`](#zusdc)
- [`USDH`](#usdh)
- [`zUSDH`](#zusdh)
- [`stSTXbtc`](#ststxbtc)
- [`zstSTXbtc`](#zststxbtc)
- [`BPS`](#bps)
- [`INDEX-PRECISION`](#index-precision)
- [`VAULT-IDS`](#vault-ids)
- [`ITER-UINT-128`](#iter-uint-128)
- [`UNDERLYING-STX`](#underlying-stx)
- [`UNDERLYING-SBTC`](#underlying-sbtc)
- [`UNDERLYING-STSTX`](#underlying-ststx)
- [`UNDERLYING-USDC`](#underlying-usdc)
- [`UNDERLYING-USDH`](#underlying-usdh)
- [`UNDERLYING-STSTXBTC`](#underlying-ststxbtc)
- [`PYTH-STX`](#pyth-stx)
- [`PYTH-BTC`](#pyth-btc)
- [`PYTH-USDC`](#pyth-usdc)
- [`DIA-USDH`](#dia-usdh)
- [`STSTX-RATIO-DECIMALS`](#ststx-ratio-decimals)
- [`ERR-UNKNOWN-VAULT`](#err-unknown-vault)
- [`ERR-UNKNOWN-UNDERLYING`](#err-unknown-underlying)
- [`ERR-NO-POSITION`](#err-no-position)


## Functions

### mul-div-down

[View in file](../../contracts/utility/protocol-data.clar#L73)

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

### mul-bps-down

[View in file](../../contracts/utility/protocol-data.clar#L76)

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

### min

[View in file](../../contracts/utility/protocol-data.clar#L79)

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

### normalize-pyth

[View in file](../../contracts/utility/protocol-data.clar#L86)

`(define-private (normalize-pyth ((price int) (expo int)) uint)`

Normalize Pyth price to 8 decimal precision
Pyth returns price with negative exponent (e.g., price=12345, expo=-8 means $0.00012345)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (normalize-pyth (price int) (expo int))
  (let ((adj (+ expo 8)))
    (if (is-eq adj 0)
        (to-uint price)
        (if (> adj 0)
            (to-uint (* price (pow 10 adj)))
            (to-uint (/ price (pow 10 (- adj))))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price | int |
| expo | int |

### get-pyth-price

[View in file](../../contracts/utility/protocol-data.clar#L96)

`(define-private (get-pyth-price ((feed-id (buff 32))) (optional uint))`

Get price from Pyth oracle storage (read-only)
Returns price in 8 decimal precision (e.g., $1.00 = 100000000)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-pyth-price (feed-id (buff 32)))
  ;; @mainnet: (match (contract-call? 'SP1CGXWEAMG6P6FT04W66NVGJ7PQWMDAC19R7PJ0Y.pyth-storage-v4 get-price feed-id)
  (match (contract-call? .pyth-storage-v4 get-price feed-id)
    result (some (normalize-pyth (get price result) (get expo result)))
    err-val none))

;; -- Oracle: DIA price resolution -------------------------------------------

;; Get price from DIA oracle (for USDH)
;; DIA returns { value: uint, timestamp: uint } where value is in 8 decimal precision
;; Note: Uses unwrap-panic since DIA oracle is external and type cannot be determined at compile time
(define-private (get-dia-price (key (string-ascii 32)))
  (some (get value (unwrap-panic (contract-call? 'SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle get-value key)))))

;; -- Oracle: stSTX ratio ----------------------------------------------------

;; Get stSTX/STX ratio (how much STX per stSTX)
;; Returns ratio in STSTX-RATIO-DECIMALS precision (1000000)
(define-private (get-ststx-ratio)
  ;; @mainnet: (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.block-info-nakamoto-ststx-ratio-v2 get-ststx-ratio-v3))
  (ok STSTX-RATIO-DECIMALS))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| feed-id | (buff 32) |

### get-vault-interest-rate

[View in file](../../contracts/utility/protocol-data.clar#L120)

`(define-private (get-vault-interest-rate ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-interest-rate (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-interest-rate))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-interest-rate))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-interest-rate))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-interest-rate))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-interest-rate))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-interest-rate))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-utilization

[View in file](../../contracts/utility/protocol-data.clar#L131)

`(define-private (get-vault-utilization ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-utilization (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-utilization))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-utilization))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-utilization))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-utilization))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-utilization))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-utilization))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-fee-reserve

[View in file](../../contracts/utility/protocol-data.clar#L142)

`(define-private (get-vault-fee-reserve ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-fee-reserve (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-fee-reserve))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-fee-reserve))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-fee-reserve))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-fee-reserve))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-fee-reserve))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-fee-reserve))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-total-assets

[View in file](../../contracts/utility/protocol-data.clar#L153)

`(define-private (get-vault-total-assets ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-total-assets (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-total-assets))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-total-assets))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-total-assets))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-total-assets))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-total-assets))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-total-assets))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-debt

[View in file](../../contracts/utility/protocol-data.clar#L164)

`(define-private (get-vault-debt ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-debt (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-debt))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-debt))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-debt))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-debt))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-debt))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-debt))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-total-supply

[View in file](../../contracts/utility/protocol-data.clar#L175)

`(define-private (get-vault-total-supply ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-total-supply (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-total-supply))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-total-supply))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-total-supply))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-total-supply))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-total-supply))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-total-supply))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-borrow-index

[View in file](../../contracts/utility/protocol-data.clar#L186)

`(define-private (get-vault-borrow-index ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-borrow-index (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-index))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-index))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-index))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-index))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-index))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-index))
  INDEX-PRECISION)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-liquidity-index

[View in file](../../contracts/utility/protocol-data.clar#L197)

`(define-private (get-vault-liquidity-index ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-liquidity-index (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-liquidity-index))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-liquidity-index))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-liquidity-index))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-liquidity-index))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-liquidity-index))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-liquidity-index))
  INDEX-PRECISION)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-cap-supply

[View in file](../../contracts/utility/protocol-data.clar#L208)

`(define-private (get-vault-cap-supply ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-cap-supply (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-cap-supply))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-cap-supply))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-cap-supply))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-cap-supply))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-cap-supply))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-cap-supply))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-cap-debt

[View in file](../../contracts/utility/protocol-data.clar#L219)

`(define-private (get-vault-cap-debt ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-cap-debt (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-cap-debt))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-cap-debt))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-cap-debt))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-cap-debt))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-cap-debt))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-cap-debt))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-last-update

[View in file](../../contracts/utility/protocol-data.clar#L230)

`(define-private (get-vault-last-update ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-last-update (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-last-update))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-last-update))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-last-update))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-last-update))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-last-update))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-last-update))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-points-util

[View in file](../../contracts/utility/protocol-data.clar#L241)

`(define-private (get-vault-points-util ((vid uint)) (list 8 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-points-util (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-points-util))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-points-util))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-points-util))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-points-util))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-points-util))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-points-util))
  (list u0 u0 u0 u0 u0 u0 u0 u0))))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-points-rate

[View in file](../../contracts/utility/protocol-data.clar#L252)

`(define-private (get-vault-points-rate ((vid uint)) (list 8 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-points-rate (vid uint))
  (if (is-eq vid STX) (unwrap-panic (contract-call? .vault-stx get-points-rate))
  (if (is-eq vid sBTC) (unwrap-panic (contract-call? .vault-sbtc get-points-rate))
  (if (is-eq vid stSTX) (unwrap-panic (contract-call? .vault-ststx get-points-rate))
  (if (is-eq vid USDC) (unwrap-panic (contract-call? .vault-usdc get-points-rate))
  (if (is-eq vid USDH) (unwrap-panic (contract-call? .vault-usdh get-points-rate))
  (if (is-eq vid stSTXbtc) (unwrap-panic (contract-call? .vault-ststxbtc get-points-rate))
  (list u0 u0 u0 u0 u0 u0 u0 u0))))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-underlying-balance

[View in file](../../contracts/utility/protocol-data.clar#L263)

`(define-private (get-vault-underlying-balance ((vid uint) (account principal)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-underlying-balance (vid uint) (account principal))
  (if (is-eq vid STX)
      (let ((shares (unwrap-panic (contract-call? .vault-stx get-balance account))))
        (unwrap-panic (contract-call? .vault-stx convert-to-assets shares)))
  (if (is-eq vid sBTC)
      (let ((shares (unwrap-panic (contract-call? .vault-sbtc get-balance account))))
        (unwrap-panic (contract-call? .vault-sbtc convert-to-assets shares)))
  (if (is-eq vid stSTX)
      (let ((shares (unwrap-panic (contract-call? .vault-ststx get-balance account))))
        (unwrap-panic (contract-call? .vault-ststx convert-to-assets shares)))
  (if (is-eq vid USDC)
      (let ((shares (unwrap-panic (contract-call? .vault-usdc get-balance account))))
        (unwrap-panic (contract-call? .vault-usdc convert-to-assets shares)))
  (if (is-eq vid USDH)
      (let ((shares (unwrap-panic (contract-call? .vault-usdh get-balance account))))
        (unwrap-panic (contract-call? .vault-usdh convert-to-assets shares)))
  (if (is-eq vid stSTXbtc)
      (let ((shares (unwrap-panic (contract-call? .vault-ststxbtc get-balance account))))
        (unwrap-panic (contract-call? .vault-ststxbtc convert-to-assets shares)))
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |
| account | principal |

### get-vault-underlying

[View in file](../../contracts/utility/protocol-data.clar#L286)

`(define-private (get-vault-underlying ((vid uint)) principal)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-underlying (vid uint))
  (if (is-eq vid STX) UNDERLYING-STX
  (if (is-eq vid sBTC) UNDERLYING-SBTC
  (if (is-eq vid stSTX) UNDERLYING-STSTX
  (if (is-eq vid USDC) UNDERLYING-USDC
  (if (is-eq vid USDH) UNDERLYING-USDH
  (if (is-eq vid stSTXbtc) UNDERLYING-STSTXBTC
  UNDERLYING-STX)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-vault-available-liquidity

[View in file](../../contracts/utility/protocol-data.clar#L299)

`(define-private (get-vault-available-liquidity ((vid uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-vault-available-liquidity (vid uint))
  (if (is-eq vid STX) (contract-call? .vault-stx get-available-assets)
  (if (is-eq vid sBTC) (contract-call? .vault-sbtc get-available-assets)
  (if (is-eq vid stSTX) (contract-call? .vault-ststx get-available-assets)
  (if (is-eq vid USDC) (contract-call? .vault-usdc get-available-assets)
  (if (is-eq vid USDH) (contract-call? .vault-usdh get-available-assets)
  (if (is-eq vid stSTXbtc) (contract-call? .vault-ststxbtc get-available-assets)
  u0)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### calc-supply-apy

[View in file](../../contracts/utility/protocol-data.clar#L311)

`(define-private (calc-supply-apy ((borrow-rate uint) (utilization uint) (reserve-fee uint)) uint)`

Supply APY = borrow_rate x utilization x (1 - reserve_fee / BPS)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (calc-supply-apy (borrow-rate uint) (utilization uint) (reserve-fee uint))
  (let ((util-applied (mul-bps-down borrow-rate utilization))
        (fee-factor (- BPS reserve-fee)))
    (mul-bps-down util-applied fee-factor)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| borrow-rate | uint |
| utilization | uint |
| reserve-fee | uint |

### underlying-to-vault-id

[View in file](../../contracts/utility/protocol-data.clar#L318)

`(define-private (underlying-to-vault-id ((underlying principal)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (underlying-to-vault-id (underlying principal))
  (if (is-eq underlying UNDERLYING-STX) (ok STX)
  (if (is-eq underlying UNDERLYING-SBTC) (ok sBTC)
  (if (is-eq underlying UNDERLYING-STSTX) (ok stSTX)
  (if (is-eq underlying UNDERLYING-USDC) (ok USDC)
  (if (is-eq underlying UNDERLYING-USDH) (ok USDH)
  (if (is-eq underlying UNDERLYING-STSTXBTC) (ok stSTXbtc)
  ERR-UNKNOWN-UNDERLYING)))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| underlying | principal |

### build-reserve-data

[View in file](../../contracts/utility/protocol-data.clar#L329)

`(define-private (build-reserve-data ((vid uint)) (tuple (available-liquidity uint) (available-to-borrow uint) (borrow-apy uint) (borrow-index uint) (cap-debt uint) (cap-supply uint) (fee-reserve uint) (last-update uint) (liquidity-index uint) (supply-apy uint) (total-assets uint) (total-borrowed uint) (total-supply uint) (underlying principal) (utilization uint) (vault-id uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (build-reserve-data (vid uint))
  (let ((borrow-apy (get-vault-interest-rate vid))
        (utilization (get-vault-utilization vid))
        (fee-reserve (get-vault-fee-reserve vid))
        (supply-apy (calc-supply-apy borrow-apy utilization fee-reserve))
        (total-borrowed (get-vault-debt vid))
        (cap-debt (get-vault-cap-debt vid))
        (available-liquidity (get-vault-available-liquidity vid))
        ;; Cap-aware borrowable: min of liquidity and remaining debt cap
        (remaining-cap (if (> cap-debt total-borrowed) (- cap-debt total-borrowed) u0))
        (available-to-borrow (min available-liquidity remaining-cap)))
    {
      vault-id: vid,
      underlying: (get-vault-underlying vid),
      total-assets: (get-vault-total-assets vid),
      total-borrowed: total-borrowed,
      total-supply: (get-vault-total-supply vid),
      utilization: utilization,
      borrow-index: (get-vault-borrow-index vid),
      liquidity-index: (get-vault-liquidity-index vid),
      cap-supply: (get-vault-cap-supply vid),
      cap-debt: cap-debt,
      fee-reserve: fee-reserve,
      last-update: (get-vault-last-update vid),
      borrow-apy: borrow-apy,
      supply-apy: supply-apy,
      available-liquidity: available-liquidity,
      available-to-borrow: available-to-borrow
    }))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### build-interest-curve

[View in file](../../contracts/utility/protocol-data.clar#L361)

`(define-private (build-interest-curve ((vid uint)) (tuple (current-rate uint) (points-rate (list 8 uint)) (points-util (list 8 uint)) (underlying principal) (vault-id uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (build-interest-curve (vid uint))
  {
    vault-id: vid,
    underlying: (get-vault-underlying vid),
    points-util: (get-vault-points-util vid),
    points-rate: (get-vault-points-rate vid),
    current-rate: (get-vault-interest-rate vid)
  })
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### iter-build-asset

[View in file](../../contracts/utility/protocol-data.clar#L372)

`(define-private (iter-build-asset ((id uint) (acc (tuple (max-id uint) (result (list 128 (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (max-staleness uint) (oracle-callcode (optional (buff 1))) (oracle-ident (buff 32)) (oracle-type (buff 1)))))))) (tuple (max-id uint) (result (list 128 (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (max-staleness uint) (oracle-callcode (optional (buff 1))) (oracle-ident (buff 32)) (oracle-type (buff 1)))))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-build-asset (id uint) (acc { max-id: uint, result: (list 128 {
    id: uint,
    addr: principal,
    decimals: uint,
    collateral: bool,
    debt: bool,
    oracle-type: (buff 1),
    oracle-ident: (buff 32),
    oracle-callcode: (optional (buff 1)),
    max-staleness: uint
  }) }))
  (let ((max-id (get max-id acc)))
    (if (>= id max-id)
        acc
        (let ((asset-status (unwrap-panic (contract-call? .assets get-status id)))
              (entry {
                id: id,
                addr: (get addr asset-status),
                decimals: (get decimals asset-status),
                collateral: (get collateral asset-status),
                debt: (get debt asset-status),
                oracle-type: (get type (get oracle asset-status)),
                oracle-ident: (get ident (get oracle asset-status)),
                oracle-callcode: (get callcode (get oracle asset-status)),
                max-staleness: (get max-staleness (get oracle asset-status))
              })
              (new-result (unwrap-panic (as-max-len? (append (get result acc) entry) u128))))
          { max-id: max-id, result: new-result }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| acc | (tuple (max-id uint) (result (list 128 (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (max-staleness uint) (oracle-callcode (optional (buff 1))) (oracle-ident (buff 32)) (oracle-type (buff 1)))))) |

### iter-build-egroup

[View in file](../../contracts/utility/protocol-data.clar#L403)

`(define-private (iter-build-egroup ((id uint) (acc (tuple (max-id uint) (result (list 128 (tuple (borrow-disabled-mask uint) (id uint) (liq-curve-exp uint) (liq-penalty-max uint) (liq-penalty-min uint) (ltv-borrow uint) (ltv-liq-full uint) (ltv-liq-partial uint) (mask uint))))))) (tuple (max-id uint) (result (list 128 (tuple (borrow-disabled-mask uint) (id uint) (liq-curve-exp uint) (liq-penalty-max uint) (liq-penalty-min uint) (ltv-borrow uint) (ltv-liq-full uint) (ltv-liq-partial uint) (mask uint))))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-build-egroup (id uint) (acc { max-id: uint, result: (list 128 {
    id: uint,
    mask: uint,
    borrow-disabled-mask: uint,
    ltv-borrow: uint,
    ltv-liq-partial: uint,
    ltv-liq-full: uint,
    liq-curve-exp: uint,
    liq-penalty-min: uint,
    liq-penalty-max: uint
  }) }))
  (let ((max-id (get max-id acc)))
    (if (>= id max-id)
        acc
        (let ((egroup-data (contract-call? .egroup lookup id))
              (entry {
                id: id,
                mask: (get MASK egroup-data),
                borrow-disabled-mask: (get BORROW-DISABLED-MASK egroup-data),
                ltv-borrow: (buff-to-uint-be (get LTV-BORROW egroup-data)),
                ltv-liq-partial: (buff-to-uint-be (get LTV-LIQ-PARTIAL egroup-data)),
                ltv-liq-full: (buff-to-uint-be (get LTV-LIQ-FULL egroup-data)),
                liq-curve-exp: (buff-to-uint-be (get LIQ-CURVE-EXP egroup-data)),
                liq-penalty-min: (buff-to-uint-be (get LIQ-PENALTY-MIN egroup-data)),
                liq-penalty-max: (buff-to-uint-be (get LIQ-PENALTY-MAX egroup-data))
              })
              (new-result (unwrap-panic (as-max-len? (append (get result acc) entry) u128))))
          { max-id: max-id, result: new-result }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| acc | (tuple (max-id uint) (result (list 128 (tuple (borrow-disabled-mask uint) (id uint) (liq-curve-exp uint) (liq-penalty-max uint) (liq-penalty-min uint) (ltv-borrow uint) (ltv-liq-full uint) (ltv-liq-partial uint) (mask uint))))) |

### get-user-position

[View in file](../../contracts/utility/protocol-data.clar#L441)

`(define-read-only (get-user-position ((account principal)) (response (tuple (account principal) (collateral (list 64 (tuple (aid uint) (amount uint)))) (current-ltv uint) (debt (list 64 (tuple (actual-debt uint) (asset-addr principal) (asset-id uint) (borrow-index uint) (interest-accrued uint) (scaled-debt uint) (underlying principal)))) (health-factor uint) (is-liquidatable bool) (ltv-borrow uint) (ltv-liq-partial uint) (mask uint) (total-collateral-usd uint) (total-debt-usd uint)) uint))`

---------------------------------------------------------------------------
get-user-position
---------------------------------------------------------------------------
Returns complete user position with health data
Batches all position data into single response

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-user-position (account principal))
  (let ((enabled-mask (contract-call? .assets get-bitmap)))
    (match (contract-call? .market-vault get-position account enabled-mask)
      position
        (let ((mask (get mask position))
              (collateral-list (get collateral position))
              (debt-list (get debt position))
              ;; Map each debt entry to enriched format with actual balances
              (enriched-debts (map build-debt-entry debt-list))
              ;; Calculate notional values
              (coll-usd (fold sum-collateral-usd collateral-list u0))
              (debt-usd (fold sum-debt-usd debt-list u0))
              ;; Calculate LTV
              (current-ltv (if (is-eq coll-usd u0)
                              (if (is-eq debt-usd u0) u0 BPS)
                              (mul-div-down debt-usd BPS coll-usd)))
              ;; Get egroup for health calculation
              (egroup-result (contract-call? .egroup resolve mask)))
          (match egroup-result
            egroup
              (let ((ltv-borrow (buff-to-uint-be (get LTV-BORROW egroup)))
                    (ltv-liq-partial (buff-to-uint-be (get LTV-LIQ-PARTIAL egroup)))
                    ;; Health factor: (coll x ltv-borrow) / debt, scaled to BPS
                    ;; >10000 = healthy, <10000 = unhealthy
                    (health-factor (if (is-eq debt-usd u0)
                                      u100000000  ;; Infinite health if no debt
                                      (mul-div-down (mul-bps-down coll-usd ltv-borrow) BPS debt-usd))))
                (ok {
                  account: account,
                  mask: mask,
                  collateral: collateral-list,
                  debt: enriched-debts,
                  total-collateral-usd: coll-usd,
                  total-debt-usd: debt-usd,
                  current-ltv: current-ltv,
                  ltv-borrow: ltv-borrow,
                  ltv-liq-partial: ltv-liq-partial,
                  health-factor: health-factor,
                  is-liquidatable: (>= current-ltv ltv-liq-partial)
                }))
            egroup-err (ok {
              account: account,
              mask: mask,
              collateral: collateral-list,
              debt: enriched-debts,
              total-collateral-usd: coll-usd,
              total-debt-usd: debt-usd,
              current-ltv: current-ltv,
              ltv-borrow: u0,
              ltv-liq-partial: u0,
              health-factor: u100000000,
              is-liquidatable: false
            })))
      err-code ERR-NO-POSITION)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### build-debt-entry

[View in file](../../contracts/utility/protocol-data.clar#L497)

`(define-private (build-debt-entry ((debt-entry (tuple (aid uint) (scaled uint)))) (tuple (actual-debt uint) (asset-addr principal) (asset-id uint) (borrow-index uint) (interest-accrued uint) (scaled-debt uint) (underlying principal)))`

Helper: Build enriched debt entry with actual balance

<details>
  <summary>Source code:</summary>

```clarity
(define-private (build-debt-entry (debt-entry { aid: uint, scaled: uint }))
  (let ((aid (get aid debt-entry))
        (scaled (get scaled debt-entry))
        (asset-status (unwrap-panic (contract-call? .assets get-status aid)))
        (borrow-index (get-vault-borrow-index aid))
        ;; Calculate actual debt with compound interest
        (actual (mul-div-down scaled borrow-index INDEX-PRECISION))
        ;; Interest accrued = actual - scaled (simplified, assumes initial index ~= PRECISION)
        (interest (if (> actual scaled) (- actual scaled) u0)))
    {
      asset-id: aid,
      asset-addr: (get addr asset-status),
      underlying: (get addr asset-status),
      scaled-debt: scaled,
      borrow-index: borrow-index,
      actual-debt: actual,
      interest-accrued: interest
    }))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| debt-entry | (tuple (aid uint) (scaled uint)) |

### sum-collateral-usd

[View in file](../../contracts/utility/protocol-data.clar#L517)

`(define-private (sum-collateral-usd ((entry (tuple (aid uint) (amount uint))) (acc uint)) uint)`

Helper: Sum collateral USD values

<details>
  <summary>Source code:</summary>

```clarity
(define-private (sum-collateral-usd (entry { aid: uint, amount: uint }) (acc uint))
  (let ((aid (get aid entry))
        (amount (get amount entry))
        (asset-data (unwrap-panic (contract-call? .assets get-status aid)))
        (decimals (get decimals asset-data))
        (price (get-asset-price aid)))
    (+ acc (/ (* amount price) (pow u10 decimals)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (aid uint) (amount uint)) |
| acc | uint |

### find-collateral-amount-iter

[View in file](../../contracts/utility/protocol-data.clar#L526)

`(define-private (find-collateral-amount-iter ((entry (tuple (aid uint) (amount uint))) (acc (tuple (amount uint) (target uint)))) (tuple (amount uint) (target uint)))`

Helper: Find specific asset amount in collateral list

<details>
  <summary>Source code:</summary>

```clarity
(define-private (find-collateral-amount-iter
  (entry { aid: uint, amount: uint })
  (acc { target: uint, amount: uint }))
  (if (is-eq (get aid entry) (get target acc))
      { target: (get target acc), amount: (get amount entry) }
      acc))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (aid uint) (amount uint)) |
| acc | (tuple (amount uint) (target uint)) |

### sum-debt-usd

[View in file](../../contracts/utility/protocol-data.clar#L534)

`(define-private (sum-debt-usd ((entry (tuple (aid uint) (scaled uint))) (acc uint)) uint)`

Helper: Sum debt USD values

<details>
  <summary>Source code:</summary>

```clarity
(define-private (sum-debt-usd (entry { aid: uint, scaled: uint }) (acc uint))
  (let ((aid (get aid entry))
        (scaled (get scaled entry))
        (asset-data (unwrap-panic (contract-call? .assets get-status aid)))
        (decimals (get decimals asset-data))
        (borrow-index (get-vault-borrow-index aid))
        (actual (mul-div-down scaled borrow-index INDEX-PRECISION))
        (price (get-asset-price aid)))
    (+ acc (/ (* actual price) (pow u10 decimals)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (aid uint) (scaled uint)) |
| acc | uint |

### get-asset-price

[View in file](../../contracts/utility/protocol-data.clar#L547)

`(define-private (get-asset-price ((aid uint)) uint)`

Helper: Get asset price from oracles
Returns price in 8 decimal precision (e.g., $1.00 = 100000000)
Handles all asset types: underlying, stSTX (with ratio), and zTokens (with liquidity index)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-asset-price (aid uint))
  ;; STX - Pyth oracle
  (if (is-eq aid STX) (default-to u0 (get-pyth-price PYTH-STX))
  ;; sBTC - Pyth oracle (BTC price)
  (if (is-eq aid sBTC) (default-to u0 (get-pyth-price PYTH-BTC))
  ;; stSTX - STX price x stSTX ratio
  (if (is-eq aid stSTX) 
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX)))
            (ratio (unwrap-panic (get-ststx-ratio))))
        (mul-div-down stx-price ratio STSTX-RATIO-DECIMALS))
  ;; USDC - Pyth oracle
  (if (is-eq aid USDC) (default-to u0 (get-pyth-price PYTH-USDC))
  ;; USDH - DIA oracle
  (if (is-eq aid USDH) (default-to u0 (get-dia-price DIA-USDH))
  ;; zSTX - STX price x liquidity index
  (if (is-eq aid zSTX)
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX)))
            (lindex (get-vault-liquidity-index STX)))
        (mul-div-down stx-price lindex INDEX-PRECISION))
  ;; zsBTC - BTC price x liquidity index
  (if (is-eq aid zsBTC)
      (let ((btc-price (default-to u0 (get-pyth-price PYTH-BTC)))
            (lindex (get-vault-liquidity-index sBTC)))
        (mul-div-down btc-price lindex INDEX-PRECISION))
  ;; zstSTX - stSTX price x liquidity index (stSTX already includes ratio)
  (if (is-eq aid zstSTX)
      (let ((stx-price (default-to u0 (get-pyth-price PYTH-STX)))
            (ratio (unwrap-panic (get-ststx-ratio)))
            (ststx-price (mul-div-down stx-price ratio STSTX-RATIO-DECIMALS))
            (lindex (get-vault-liquidity-index stSTX)))
        (mul-div-down ststx-price lindex INDEX-PRECISION))
  ;; zUSDC - USDC price x liquidity index
  (if (is-eq aid zUSDC)
      (let ((usdc-price (default-to u0 (get-pyth-price PYTH-USDC)))
            (lindex (get-vault-liquidity-index USDC)))
        (mul-div-down usdc-price lindex INDEX-PRECISION))
  ;; zUSDH - USDH price x liquidity index
  (if (is-eq aid zUSDH)
      (let ((usdh-price (default-to u0 (get-dia-price DIA-USDH)))
            (lindex (get-vault-liquidity-index USDH)))
        (mul-div-down usdh-price lindex INDEX-PRECISION))
  ;; stSTXbtc - BTC price (liquid staked STX with BTC yield)
  (if (is-eq aid stSTXbtc) (default-to u0 (get-pyth-price PYTH-STX))
  ;; zstSTXbtc - stSTXbtc price x liquidity index
  (if (is-eq aid zstSTXbtc)
      (let ((btc-price (default-to u0 (get-pyth-price PYTH-STX)))
            (lindex (get-vault-liquidity-index stSTXbtc)))
        (mul-div-down btc-price lindex INDEX-PRECISION))
  ;; Unknown asset - return 0
  u0)))))))))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| aid | uint |

### get-all-assets

[View in file](../../contracts/utility/protocol-data.clar#L602)

`(define-read-only (get-all-assets () (response (tuple (assets (list 128 (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (max-staleness uint) (oracle-callcode (optional (buff 1))) (oracle-ident (buff 32)) (oracle-type (buff 1))))) (count uint)) none))`

---------------------------------------------------------------------------
get-all-assets
---------------------------------------------------------------------------
Returns all registered assets with their status (dynamic - scales to nonce)

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-all-assets)
  (let ((nonce (unwrap-panic (contract-call? .assets get-nonce)))
        (init { max-id: nonce, result: (list) })
        (result (fold iter-build-asset ITER-UINT-128 init)))
    (ok {
      count: nonce,
      assets: (get result result)
    })))
```
</details>




### get-all-reserves

[View in file](../../contracts/utility/protocol-data.clar#L615)

`(define-read-only (get-all-reserves () (response (tuple (sbtc (tuple (available-liquidity uint) (available-to-borrow uint) (borrow-apy uint) (borrow-index uint) (cap-debt uint) (cap-supply uint) (fee-reserve uint) (last-update uint) (liquidity-index uint) (supply-apy uint) (total-assets uint) (total-borrowed uint) (total-supply uint) (underlying principal) (utilization uint) (vault-id uint))) (ststx (tuple (available-liquidity uint) (available-to-borrow uint) (borrow-apy uint) (borrow-index uint) (cap-debt uint) (cap-supply uint) (fee-reserve uint) (last-update uint) (liquidity-index uint) (supply-apy uint) (total-assets uint) (total-borrowed uint) (total-supply uint) (underlying principal) (utilization uint) (vault-id uint))) (ststxbtc (tuple (available-liquidity uint) (available-to-borrow uint) (borrow-apy uint) (borrow-index uint) (cap-debt uint) (cap-supply uint) (fee-reserve uint) (last-update uint) (liquidity-index uint) (supply-apy uint) (total-assets uint) (total-borrowed uint) (total-supply uint) (underlying principal) (utilization uint) (vault-id uint))) (stx (tuple (available-liquidity uint) (available-to-borrow uint) (borrow-apy uint) (borrow-index uint) (cap-debt uint) (cap-supply uint) (fee-reserve uint) (last-update uint) (liquidity-index uint) (supply-apy uint) (total-assets uint) (total-borrowed uint) (total-supply uint) (underlying principal) (utilization uint) (vault-id uint))) (usdc (tuple (available-liquidity uint) (available-to-borrow uint) (borrow-apy uint) (borrow-index uint) (cap-debt uint) (cap-supply uint) (fee-reserve uint) (last-update uint) (liquidity-index uint) (supply-apy uint) (total-assets uint) (total-borrowed uint) (total-supply uint) (underlying principal) (utilization uint) (vault-id uint))) (usdh (tuple (available-liquidity uint) (available-to-borrow uint) (borrow-apy uint) (borrow-index uint) (cap-debt uint) (cap-supply uint) (fee-reserve uint) (last-update uint) (liquidity-index uint) (supply-apy uint) (total-assets uint) (total-borrowed uint) (total-supply uint) (underlying principal) (utilization uint) (vault-id uint)))) none))`

---------------------------------------------------------------------------
get-all-reserves
---------------------------------------------------------------------------
Returns all vault reserve data including APYs

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-all-reserves)
  (ok {
    stx: (build-reserve-data STX),
    sbtc: (build-reserve-data sBTC),
    ststx: (build-reserve-data stSTX),
    usdc: (build-reserve-data USDC),
    usdh: (build-reserve-data USDH),
    ststxbtc: (build-reserve-data stSTXbtc)
  }))
```
</details>




### get-reserve

[View in file](../../contracts/utility/protocol-data.clar#L629)

`(define-read-only (get-reserve ((vid uint)) (response (tuple (available-liquidity uint) (available-to-borrow uint) (borrow-apy uint) (borrow-index uint) (cap-debt uint) (cap-supply uint) (fee-reserve uint) (last-update uint) (liquidity-index uint) (supply-apy uint) (total-assets uint) (total-borrowed uint) (total-supply uint) (underlying principal) (utilization uint) (vault-id uint)) uint))`

---------------------------------------------------------------------------
get-reserve
---------------------------------------------------------------------------
Returns single vault reserve data

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-reserve (vid uint))
  (if (> vid stSTXbtc)
      ERR-UNKNOWN-VAULT
      (ok (build-reserve-data vid))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-all-egroups

[View in file](../../contracts/utility/protocol-data.clar#L638)

`(define-read-only (get-all-egroups () (response (tuple (count uint) (egroups (list 128 (tuple (borrow-disabled-mask uint) (id uint) (liq-curve-exp uint) (liq-penalty-max uint) (liq-penalty-min uint) (ltv-borrow uint) (ltv-liq-full uint) (ltv-liq-partial uint) (mask uint))))) none))`

---------------------------------------------------------------------------
get-all-egroups
---------------------------------------------------------------------------
Returns all efficiency groups

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-all-egroups)
  (let ((nonce (unwrap-panic (contract-call? .egroup get-nonce)))
        (init { max-id: nonce, result: (list) })
        (result (fold iter-build-egroup ITER-UINT-128 init)))
    (ok {
      count: nonce,
      egroups: (get result result)
    })))
```
</details>




### get-egroup

[View in file](../../contracts/utility/protocol-data.clar#L651)

`(define-read-only (get-egroup ((id uint)) (response (tuple (borrow-disabled-mask uint) (id uint) (liq-curve-exp uint) (liq-penalty-max uint) (liq-penalty-min uint) (ltv-borrow uint) (ltv-liq-full uint) (ltv-liq-partial uint) (mask uint)) none))`

---------------------------------------------------------------------------
get-egroup
---------------------------------------------------------------------------
Returns single egroup by ID

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-egroup (id uint))
  (let ((egroup-data (contract-call? .egroup lookup id)))
    (ok {
      id: id,
      mask: (get MASK egroup-data),
      borrow-disabled-mask: (get BORROW-DISABLED-MASK egroup-data),
      ltv-borrow: (buff-to-uint-be (get LTV-BORROW egroup-data)),
      ltv-liq-partial: (buff-to-uint-be (get LTV-LIQ-PARTIAL egroup-data)),
      ltv-liq-full: (buff-to-uint-be (get LTV-LIQ-FULL egroup-data)),
      liq-curve-exp: (buff-to-uint-be (get LIQ-CURVE-EXP egroup-data)),
      liq-penalty-min: (buff-to-uint-be (get LIQ-PENALTY-MIN egroup-data)),
      liq-penalty-max: (buff-to-uint-be (get LIQ-PENALTY-MAX egroup-data))
    })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |

### get-all-interest-curves

[View in file](../../contracts/utility/protocol-data.clar#L669)

`(define-read-only (get-all-interest-curves () (response (tuple (sbtc (tuple (current-rate uint) (points-rate (list 8 uint)) (points-util (list 8 uint)) (underlying principal) (vault-id uint))) (ststx (tuple (current-rate uint) (points-rate (list 8 uint)) (points-util (list 8 uint)) (underlying principal) (vault-id uint))) (ststxbtc (tuple (current-rate uint) (points-rate (list 8 uint)) (points-util (list 8 uint)) (underlying principal) (vault-id uint))) (stx (tuple (current-rate uint) (points-rate (list 8 uint)) (points-util (list 8 uint)) (underlying principal) (vault-id uint))) (usdc (tuple (current-rate uint) (points-rate (list 8 uint)) (points-util (list 8 uint)) (underlying principal) (vault-id uint))) (usdh (tuple (current-rate uint) (points-rate (list 8 uint)) (points-util (list 8 uint)) (underlying principal) (vault-id uint)))) none))`

---------------------------------------------------------------------------
get-all-interest-curves
---------------------------------------------------------------------------
Returns interest rate curves for all vaults

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-all-interest-curves)
  (ok {
    stx: (build-interest-curve STX),
    sbtc: (build-interest-curve sBTC),
    ststx: (build-interest-curve stSTX),
    usdc: (build-interest-curve USDC),
    usdh: (build-interest-curve USDH),
    ststxbtc: (build-interest-curve stSTXbtc)
  }))
```
</details>




### get-interest-curve

[View in file](../../contracts/utility/protocol-data.clar#L683)

`(define-read-only (get-interest-curve ((vid uint)) (response (tuple (current-rate uint) (points-rate (list 8 uint)) (points-util (list 8 uint)) (underlying principal) (vault-id uint)) uint))`

---------------------------------------------------------------------------
get-interest-curve
---------------------------------------------------------------------------
Returns interest rate curve for single vault

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-interest-curve (vid uint))
  (if (> vid stSTXbtc)
      ERR-UNKNOWN-VAULT
      (ok (build-interest-curve vid))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vid | uint |

### get-asset-apys

[View in file](../../contracts/utility/protocol-data.clar#L693)

`(define-read-only (get-asset-apys ((underlying principal)) (response (tuple (borrow-apy uint) (fee-reserve uint) (supply-apy uint) (underlying principal) (utilization uint) (vault-id uint)) uint))`

---------------------------------------------------------------------------
get-asset-apys
---------------------------------------------------------------------------
Maps underlying asset to vault and returns APY data
Convenience function for quick APY lookup

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-asset-apys (underlying principal))
  (match (underlying-to-vault-id underlying)
    vid
      (let ((borrow-apy (get-vault-interest-rate vid))
            (utilization (get-vault-utilization vid))
            (fee-reserve (get-vault-fee-reserve vid))
            (supply-apy (calc-supply-apy borrow-apy utilization fee-reserve)))
        (ok {
          underlying: underlying,
          vault-id: vid,
          borrow-apy: borrow-apy,
          supply-apy: supply-apy,
          utilization: utilization,
          fee-reserve: fee-reserve
        }))
    err-val (err err-val)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| underlying | principal |

### get-protocol-summary

[View in file](../../contracts/utility/protocol-data.clar#L714)

`(define-read-only (get-protocol-summary () (response (tuple (asset-count uint) (egroup-count uint) (total-borrowed uint) (total-supplied uint)) none))`

---------------------------------------------------------------------------
get-protocol-summary
---------------------------------------------------------------------------
Returns high-level protocol summary

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-protocol-summary)
  (let ((stx-data (build-reserve-data STX))
        (sbtc-data (build-reserve-data sBTC))
        (ststx-data (build-reserve-data stSTX))
        (usdc-data (build-reserve-data USDC))
        (usdh-data (build-reserve-data USDH))
        (ststxbtc-data (build-reserve-data stSTXbtc)))
    (ok {
      total-supplied: (+ (+ (+ (+ (+
        (get total-assets stx-data)
        (get total-assets sbtc-data))
        (get total-assets ststx-data))
        (get total-assets usdc-data))
        (get total-assets usdh-data))
        (get total-assets ststxbtc-data)),
      total-borrowed: (+ (+ (+ (+ (+
        (get total-borrowed stx-data)
        (get total-borrowed sbtc-data))
        (get total-borrowed ststx-data))
        (get total-borrowed usdc-data))
        (get total-borrowed usdh-data))
        (get total-borrowed ststxbtc-data)),
      asset-count: (unwrap-panic (contract-call? .assets get-nonce)),
      egroup-count: (unwrap-panic (contract-call? .egroup get-nonce))
    })))
```
</details>




### get-supplies-user

[View in file](../../contracts/utility/protocol-data.clar#L747)

`(define-read-only (get-supplies-user ((account principal)) (response (tuple (account principal) (market-collateral (list 64 (tuple (aid uint) (amount uint)))) (vault-shares (tuple (sbtc uint) (ststx uint) (ststxbtc uint) (stx uint) (usdc uint) (usdh uint))) (vault-underlying (tuple (sbtc uint) (ststx uint) (ststxbtc uint) (stx uint) (usdc uint) (usdh uint)))) none))`

---------------------------------------------------------------------------
get-supplies-user
---------------------------------------------------------------------------
Returns all supplies for a user:
- Vault underlying balances (converted from zTokens - what user can redeem)
- Vault share balances (zTokens held in wallet - for reference)
- Market-vault collateral (any collateral-enabled tokens deposited)

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-supplies-user (account principal))
  (let ((enabled-mask (contract-call? .assets get-bitmap))
        ;; Get underlying balances (convert zTokens to underlying - USEFUL)
        (stx-underlying (get-vault-underlying-balance STX account))
        (sbtc-underlying (get-vault-underlying-balance sBTC account))
        (ststx-underlying (get-vault-underlying-balance stSTX account))
        (usdc-underlying (get-vault-underlying-balance USDC account))
        (usdh-underlying (get-vault-underlying-balance USDH account))
        (ststxbtc-underlying (get-vault-underlying-balance stSTXbtc account))
        ;; Also get share balances for reference
        (vault-stx-shares (unwrap-panic (contract-call? .vault-stx get-balance account)))
        (vault-sbtc-shares (unwrap-panic (contract-call? .vault-sbtc get-balance account)))
        (vault-ststx-shares (unwrap-panic (contract-call? .vault-ststx get-balance account)))
        (vault-usdc-shares (unwrap-panic (contract-call? .vault-usdc get-balance account)))
        (vault-usdh-shares (unwrap-panic (contract-call? .vault-usdh get-balance account)))
        (vault-ststxbtc-shares (unwrap-panic (contract-call? .vault-ststxbtc get-balance account))))
    ;; Try to get market-vault position (may not exist)
    (match (contract-call? .market-vault get-position account enabled-mask)
      position
        (ok {
          account: account,
          ;; Primary data: Underlying token values (what user can actually redeem)
          vault-underlying: {
            stx: stx-underlying,
            sbtc: sbtc-underlying,
            ststx: ststx-underlying,
            usdc: usdc-underlying,
            usdh: usdh-underlying,
            ststxbtc: ststxbtc-underlying
          },
          ;; Reference data: zToken share balances
          vault-shares: {
            stx: vault-stx-shares,
            sbtc: vault-sbtc-shares,
            ststx: vault-ststx-shares,
            usdc: vault-usdc-shares,
            usdh: vault-usdh-shares,
            ststxbtc: vault-ststxbtc-shares
          },
          ;; Market-vault collateral (any collateral-enabled tokens)
          market-collateral: (get collateral position)
        })
      err-code
        ;; No market-vault position exists - return vault data only
        (ok {
          account: account,
          vault-underlying: {
            stx: stx-underlying,
            sbtc: sbtc-underlying,
            ststx: ststx-underlying,
            usdc: usdc-underlying,
            usdh: usdh-underlying,
            ststxbtc: ststxbtc-underlying
          },
          vault-shares: {
            stx: vault-stx-shares,
            sbtc: vault-sbtc-shares,
            ststx: vault-ststx-shares,
            usdc: vault-usdc-shares,
            usdh: vault-usdh-shares,
            ststxbtc: vault-ststxbtc-shares
          },
          market-collateral: (list)
        }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### get-user-borrows

[View in file](../../contracts/utility/protocol-data.clar#L820)

`(define-read-only (get-user-borrows ((account principal)) (response (tuple (account principal) (borrows (list 64 (tuple (actual-debt uint) (asset-addr principal) (asset-id uint) (borrow-index uint) (interest-accrued uint) (scaled-debt uint) (underlying principal))))) none))`

---------------------------------------------------------------------------
get-user-borrows
---------------------------------------------------------------------------
Returns all borrows for a user with detailed debt information:
- Scaled debt (principal stored when borrowed)
- Current borrow index (includes compound interest growth)
- Actual debt (scaled x index - what user actually owes)
- Interest accrued (compound interest accumulated)

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-user-borrows (account principal))
  (let ((enabled-mask (contract-call? .assets get-bitmap)))
    (match (contract-call? .market-vault get-position account enabled-mask)
      position
        (let ((debt-list (get debt position))
              ;; Map each debt entry to enriched format with actual balances
              (enriched-debts (map build-debt-entry debt-list)))
          (ok {
            account: account,
            borrows: enriched-debts
          }))
      err-code
        ;; No position exists
        (ok {
          account: account,
          borrows: (list)
        }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### get-all-vault-ratios

[View in file](../../contracts/utility/protocol-data.clar#L846)

`(define-read-only (get-all-vault-ratios () (response (tuple (sbtc (tuple (shares-to-assets uint) (underlying principal) (vault-id uint))) (ststx (tuple (shares-to-assets uint) (underlying principal) (vault-id uint))) (ststxbtc (tuple (shares-to-assets uint) (underlying principal) (vault-id uint))) (stx (tuple (shares-to-assets uint) (underlying principal) (vault-id uint))) (usdc (tuple (shares-to-assets uint) (underlying principal) (vault-id uint))) (usdh (tuple (shares-to-assets uint) (underlying principal) (vault-id uint)))) none))`

---------------------------------------------------------------------------
get-all-vault-ratios
---------------------------------------------------------------------------
Returns share-to-asset conversion ratios for all vaults
Each ratio shows how much underlying 1 full zToken share is worth
Accounts for different decimal precision across vaults:
- sBTC uses 8 decimals (Bitcoin standard)
- All others use 6 decimals

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-all-vault-ratios)
  (ok {
    stx: {
      vault-id: STX,
      shares-to-assets: (unwrap-panic (contract-call? .vault-stx convert-to-assets u1000000)),
      underlying: UNDERLYING-STX
    },
    sbtc: {
      vault-id: sBTC,
      shares-to-assets: (unwrap-panic (contract-call? .vault-sbtc convert-to-assets u100000000)),
      underlying: UNDERLYING-SBTC
    },
    ststx: {
      vault-id: stSTX,
      shares-to-assets: (unwrap-panic (contract-call? .vault-ststx convert-to-assets u1000000)),
      underlying: UNDERLYING-STSTX
    },
    usdc: {
      vault-id: USDC,
      shares-to-assets: (unwrap-panic (contract-call? .vault-usdc convert-to-assets u1000000)),
      underlying: UNDERLYING-USDC
    },
    usdh: {
      vault-id: USDH,
      shares-to-assets: (unwrap-panic (contract-call? .vault-usdh convert-to-assets u100000000)),
      underlying: UNDERLYING-USDH
    },
    ststxbtc: {
      vault-id: stSTXbtc,
      shares-to-assets: (unwrap-panic (contract-call? .vault-ststxbtc convert-to-assets u1000000)),
      underlying: UNDERLYING-STSTXBTC
    }
  }))
```
</details>




### get-market-vault-balances

[View in file](../../contracts/utility/protocol-data.clar#L885)

`(define-read-only (get-market-vault-balances () (response (tuple (underlying (tuple (sbtc uint) (ststx uint) (ststxbtc uint) (usdc uint) (usdh uint) (wstx uint))) (ztokens (tuple (vault-sbtc uint) (vault-ststx uint) (vault-ststxbtc uint) (vault-stx uint) (vault-usdc uint) (vault-usdh uint)))) none))`

---------------------------------------------------------------------------
get-market-vault-balances
---------------------------------------------------------------------------
Returns all fungible token balances held by the market-vault contract
Includes both underlying tokens and zToken vault shares

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-market-vault-balances)
  (ok {
    ;; Underlying tokens held by market-vault
    underlying: {
      wstx: (unwrap-panic (contract-call? .wstx get-balance .market-vault)),
      ;; @mainnet: sbtc: (unwrap-panic (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token get-balance .market-vault)),
      sbtc: (unwrap-panic (contract-call? .sbtc get-balance .market-vault)),
      ;; @mainnet: ststx: (unwrap-panic (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token get-balance .market-vault)),
      ststx: (unwrap-panic (contract-call? .ststx get-balance .market-vault)),
      ;; @mainnet: usdc: (unwrap-panic (contract-call? 'SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx get-balance .market-vault)),
      usdc: (unwrap-panic (contract-call? .usdc get-balance .market-vault)),
      ;; @mainnet: usdh: (unwrap-panic (contract-call? 'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1 get-balance .market-vault)),
      usdh: (unwrap-panic (contract-call? .usdh get-balance .market-vault)),
      ;; @mainnet: ststxbtc: (unwrap-panic (contract-call? 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststxbtc-token-v2 get-balance .market-vault))
      ststxbtc: (unwrap-panic (contract-call? .ststxbtc get-balance .market-vault))
    },
    ;; ZToken vault shares held by market-vault
    ;; These are user collateral tracked in market-vault's position maps
    ztokens: {
      vault-stx: (unwrap-panic (contract-call? .vault-stx get-balance .market-vault)),
      vault-sbtc: (unwrap-panic (contract-call? .vault-sbtc get-balance .market-vault)),
      vault-ststx: (unwrap-panic (contract-call? .vault-ststx get-balance .market-vault)),
      vault-usdc: (unwrap-panic (contract-call? .vault-usdc get-balance .market-vault)),
      vault-usdh: (unwrap-panic (contract-call? .vault-usdh get-balance .market-vault)),
      vault-ststxbtc: (unwrap-panic (contract-call? .vault-ststxbtc get-balance .market-vault))
    }
  }))
```
</details>




### get-market-vault-balances-user

[View in file](../../contracts/utility/protocol-data.clar#L917)

`(define-read-only (get-market-vault-balances-user ((account principal)) (response (tuple (market-vault-collateral (list 64 (tuple (aid uint) (amount uint)))) (vault-balances (tuple (sbtc uint) (ststx uint) (ststxbtc uint) (stx uint) (usdc uint) (usdh uint)))) none))`

---------------------------------------------------------------------------
get-market-vault-balances-user
---------------------------------------------------------------------------
Returns user's supply balances across vaults and market-vault

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-market-vault-balances-user (account principal))
  (let ((enabled-mask (contract-call? .assets get-bitmap))
        ;; Vault balances (zTokens -> underlying amounts)
        (stx-vault (get-vault-underlying-balance STX account))
        (sbtc-vault (get-vault-underlying-balance sBTC account))
        (ststx-vault (get-vault-underlying-balance stSTX account))
        (usdc-vault (get-vault-underlying-balance USDC account))
        (usdh-vault (get-vault-underlying-balance USDH account))
        (ststxbtc-vault (get-vault-underlying-balance stSTXbtc account)))
    ;; Get market-vault collateral
    (match (contract-call? .market-vault get-position account enabled-mask)
      position
        (ok {
          vault-balances: {
            stx: stx-vault,
            sbtc: sbtc-vault,
            ststx: ststx-vault,
            usdc: usdc-vault,
            usdh: usdh-vault,
            ststxbtc: ststxbtc-vault
          },
          market-vault-collateral: (get collateral position)
        })
      err-code
        (ok {
          vault-balances: {
            stx: stx-vault,
            sbtc: sbtc-vault,
            ststx: ststx-vault,
            usdc: usdc-vault,
            usdh: usdh-vault,
            ststxbtc: ststxbtc-vault
          },
          market-vault-collateral: (list)
        }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

### get-user-sbtc-balances

[View in file](../../contracts/utility/protocol-data.clar#L957)

`(define-read-only (get-user-sbtc-balances ((account principal)) (response (tuple (market-collateral uint) (total uint) (vault-underlying uint)) none))`

---------------------------------------------------------------------------
get-user-sbtc-balances
---------------------------------------------------------------------------
Returns user's sBTC holdings across vault and market-vault

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-user-sbtc-balances (account principal))
  (let (
    (vault-shares (unwrap-panic (contract-call? .vault-sbtc get-balance account)))
    (vault-underlying (unwrap-panic (contract-call? .vault-sbtc convert-to-assets vault-shares)))
    
    (market-sbtc
      (match (contract-call? .market-vault get-position account u4)  ;; mask = 2^2 = 4 (sBTC collateral bit)
        position
          (get amount (fold find-collateral-amount-iter 
                           (get collateral position) 
                           {target: sBTC, amount: u0}))
        err-no-position u0))
    
    (total (+ vault-underlying market-sbtc)))
    
    (ok {
      vault-underlying: vault-underlying,
      market-collateral: market-sbtc,
      total: total
    })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| account | principal |

## Maps



## Variables



## Constants

### STX



-- Asset IDs (Paired: underlying_id, vault_id = underlying_id + 1)

```clarity
(define-constant STX u0)
```

[View in file](../../contracts/utility/protocol-data.clar#L12)

### zSTX





```clarity
(define-constant zSTX u1)
```

[View in file](../../contracts/utility/protocol-data.clar#L13)

### sBTC





```clarity
(define-constant sBTC u2)
```

[View in file](../../contracts/utility/protocol-data.clar#L14)

### zsBTC





```clarity
(define-constant zsBTC u3)
```

[View in file](../../contracts/utility/protocol-data.clar#L15)

### stSTX





```clarity
(define-constant stSTX u4)
```

[View in file](../../contracts/utility/protocol-data.clar#L16)

### zstSTX





```clarity
(define-constant zstSTX u5)
```

[View in file](../../contracts/utility/protocol-data.clar#L17)

### USDC





```clarity
(define-constant USDC u6)
```

[View in file](../../contracts/utility/protocol-data.clar#L18)

### zUSDC





```clarity
(define-constant zUSDC u7)
```

[View in file](../../contracts/utility/protocol-data.clar#L19)

### USDH





```clarity
(define-constant USDH u8)
```

[View in file](../../contracts/utility/protocol-data.clar#L20)

### zUSDH





```clarity
(define-constant zUSDH u9)
```

[View in file](../../contracts/utility/protocol-data.clar#L21)

### stSTXbtc





```clarity
(define-constant stSTXbtc u10)
```

[View in file](../../contracts/utility/protocol-data.clar#L22)

### zstSTXbtc





```clarity
(define-constant zstSTXbtc u11)
```

[View in file](../../contracts/utility/protocol-data.clar#L23)

### BPS



-- Precision

```clarity
(define-constant BPS u10000)
```

[View in file](../../contracts/utility/protocol-data.clar#L26)

### INDEX-PRECISION





```clarity
(define-constant INDEX-PRECISION u1000000000000)
```

[View in file](../../contracts/utility/protocol-data.clar#L27)

### VAULT-IDS



-- Iteration helpers

```clarity
(define-constant VAULT-IDS (list u0 u1 u2 u3 u4 u5))
```

[View in file](../../contracts/utility/protocol-data.clar#L30)

### ITER-UINT-128





```clarity
(define-constant ITER-UINT-128 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63 u64 u65 u66 u67 u68 u69 u70 u71 u72 u73 u74 u75 u76 u77 u78 u79 u80 u81 u82 u83 u84 u85 u86 u87 u88 u89 u90 u91 u92 u93 u94 u95 u96 u97 u98 u99 u100 u101 u102 u103 u104 u105 u106 u107 u108 u109 u110 u111 u112 u113 u114 u115 u116 u117 u118 u119 u120 u121 u122 u123 u124 u125 u126 u127))
```

[View in file](../../contracts/utility/protocol-data.clar#L31)

### UNDERLYING-STX



-- Underlying contract addresses

```clarity
(define-constant UNDERLYING-STX .wstx)
```

[View in file](../../contracts/utility/protocol-data.clar#L34)

### UNDERLYING-SBTC



@mainnet: (define-constant UNDERLYING-SBTC 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token)

```clarity
(define-constant UNDERLYING-SBTC .sbtc)
```

[View in file](../../contracts/utility/protocol-data.clar#L36)

### UNDERLYING-STSTX



@mainnet: (define-constant UNDERLYING-STSTX 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token)

```clarity
(define-constant UNDERLYING-STSTX .ststx)
```

[View in file](../../contracts/utility/protocol-data.clar#L38)

### UNDERLYING-USDC



@mainnet: (define-constant UNDERLYING-USDC 'SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx)

```clarity
(define-constant UNDERLYING-USDC .usdc)
```

[View in file](../../contracts/utility/protocol-data.clar#L40)

### UNDERLYING-USDH



@mainnet: (define-constant UNDERLYING-USDH 'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1)

```clarity
(define-constant UNDERLYING-USDH .usdh)
```

[View in file](../../contracts/utility/protocol-data.clar#L42)

### UNDERLYING-STSTXBTC



@mainnet: (define-constant UNDERLYING-STSTXBTC 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststxbtc-token-v2)

```clarity
(define-constant UNDERLYING-STSTXBTC .ststxbtc)
```

[View in file](../../contracts/utility/protocol-data.clar#L44)

### PYTH-STX



-- Oracle: Pyth price feed IDs (mainnet)
STX/USD: https://pyth.network/price-feeds/crypto-stx-usd

```clarity
(define-constant PYTH-STX 0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17)
```

[View in file](../../contracts/utility/protocol-data.clar#L48)

### PYTH-BTC



BTC/USD: https://pyth.network/price-feeds/crypto-btc-usd

```clarity
(define-constant PYTH-BTC 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43)
```

[View in file](../../contracts/utility/protocol-data.clar#L50)

### PYTH-USDC



USDC/USD: https://pyth.network/price-feeds/crypto-usdc-usd

```clarity
(define-constant PYTH-USDC 0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a)
```

[View in file](../../contracts/utility/protocol-data.clar#L52)

### DIA-USDH



-- Oracle: DIA oracle key for USDH

```clarity
(define-constant DIA-USDH "USDh/USD")
```

[View in file](../../contracts/utility/protocol-data.clar#L55)

### STSTX-RATIO-DECIMALS



-- Oracle: stSTX ratio decimals

```clarity
(define-constant STSTX-RATIO-DECIMALS u1000000)
```

[View in file](../../contracts/utility/protocol-data.clar#L58)

### ERR-UNKNOWN-VAULT



============================================================================
ERRORS
============================================================================

```clarity
(define-constant ERR-UNKNOWN-VAULT (err u900001))
```

[View in file](../../contracts/utility/protocol-data.clar#L63)

### ERR-UNKNOWN-UNDERLYING





```clarity
(define-constant ERR-UNKNOWN-UNDERLYING (err u900002))
```

[View in file](../../contracts/utility/protocol-data.clar#L64)

### ERR-NO-POSITION





```clarity
(define-constant ERR-NO-POSITION (err u900003))
```

[View in file](../../contracts/utility/protocol-data.clar#L65)
  