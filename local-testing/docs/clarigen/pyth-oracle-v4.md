
# pyth-oracle-v4

[`pyth-oracle-v4.clar`](../../contracts/pyth/contracts/pyth-oracle-v4.clar)

Title: pyth-oracle

Version: v4

Check for latest version: https://github.com/Trust-Machines/stacks-pyth-bridge#latest-version

Report an issue: https://github.com/Trust-Machines/stacks-pyth-bridge/issues

**Public functions:**

- [`get-price`](#get-price)
- [`read-price-feed`](#read-price-feed)
- [`verify-and-update-price-feeds`](#verify-and-update-price-feeds)
- [`decode-price-feeds`](#decode-price-feeds)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**

- [`ERR_BALANCE_INSUFFICIENT`](#err_balance_insufficient)


## Functions

### get-price

[View in file](../../contracts/pyth/contracts/pyth-oracle-v4.clar#L13)

`(define-public (get-price ((price-feed-id (buff 32)) (pyth-storage-address trait_reference)) (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (publish-time uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (get-price
		(price-feed-id (buff 32))
		(pyth-storage-address <pyth-storage-trait>))
	(begin
		;; Check execution flow
		(try! (contract-call? .pyth-governance-v3 check-storage-contract pyth-storage-address))
		;; Perform contract-call
		(contract-call? pyth-storage-address read-price-with-staleness-check price-feed-id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price-feed-id | (buff 32) |
| pyth-storage-address | trait_reference |

### read-price-feed

[View in file](../../contracts/pyth/contracts/pyth-oracle-v4.clar#L22)

`(define-public (read-price-feed ((price-feed-id (buff 32)) (pyth-storage-address trait_reference)) (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (publish-time uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (read-price-feed 
		(price-feed-id (buff 32))
		(pyth-storage-address <pyth-storage-trait>))
	(begin
		;; Check execution flow
		(try! (contract-call? .pyth-governance-v3 check-storage-contract pyth-storage-address))
		;; Perform contract-call
		(contract-call? pyth-storage-address read price-feed-id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price-feed-id | (buff 32) |
| pyth-storage-address | trait_reference |

### verify-and-update-price-feeds

[View in file](../../contracts/pyth/contracts/pyth-oracle-v4.clar#L31)

`(define-public (verify-and-update-price-feeds ((price-feed-bytes (buff 8192)) (execution-plan (tuple (pyth-decoder-contract trait_reference) (pyth-storage-contract trait_reference) (wormhole-core-contract trait_reference)))) (response (list 64 (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (verify-and-update-price-feeds 
		(price-feed-bytes (buff 8192))
		(execution-plan {
			pyth-storage-contract: <pyth-storage-trait>,
			pyth-decoder-contract: <pyth-decoder-trait>,
			wormhole-core-contract: <wormhole-core-trait>
		}))
	(begin
		;; Check execution flow
		(try! (contract-call? .pyth-governance-v3 check-execution-flow contract-caller (some execution-plan)))
		;; Perform contract-call
		(let ((pyth-decoder-contract (get pyth-decoder-contract execution-plan))
				(wormhole-core-contract (get wormhole-core-contract execution-plan))
				(pyth-storage-contract (get pyth-storage-contract execution-plan))
				(decoded-prices (try! (contract-call? pyth-decoder-contract decode-and-verify-price-feeds price-feed-bytes wormhole-core-contract)))
				(updated-prices (try! (contract-call? pyth-storage-contract write decoded-prices)))
				(fee-info (contract-call? .pyth-governance-v3 get-fee-info))
				(fee-amount (* (len updated-prices) (* (get mantissa fee-info) (pow u10 (get exponent fee-info))))))
			;; Charge fee
			(if (> fee-amount u0) (unwrap! (stx-transfer? fee-amount tx-sender (get address fee-info)) ERR_BALANCE_INSUFFICIENT) true)
			(ok updated-prices))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price-feed-bytes | (buff 8192) |
| execution-plan | (tuple (pyth-decoder-contract trait_reference) (pyth-storage-contract trait_reference) (wormhole-core-contract trait_reference)) |

### decode-price-feeds

[View in file](../../contracts/pyth/contracts/pyth-oracle-v4.clar#L53)

`(define-public (decode-price-feeds ((price-feed-bytes (buff 8192)) (execution-plan (tuple (pyth-decoder-contract trait_reference) (pyth-storage-contract trait_reference) (wormhole-core-contract trait_reference)))) (response (list 64 (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (decode-price-feeds 
		(price-feed-bytes (buff 8192))
		(execution-plan {
			pyth-storage-contract: <pyth-storage-trait>,
			pyth-decoder-contract: <pyth-decoder-trait>,
			wormhole-core-contract: <wormhole-core-trait>
		}))
	(begin
		;; Check execution flow
		(try! (contract-call? .pyth-governance-v3 check-execution-flow contract-caller (some execution-plan)))
		;; Perform contract-call
		(let ((pyth-decoder-contract (get pyth-decoder-contract execution-plan))
				(wormhole-core-contract (get wormhole-core-contract execution-plan))
				(decoded-prices (try! (contract-call? pyth-decoder-contract decode-and-verify-price-feeds price-feed-bytes wormhole-core-contract)))
				(fee-info (contract-call? .pyth-governance-v3 get-fee-info))
				(fee-amount (* (len decoded-prices) (* (get mantissa fee-info) (pow u10 (get exponent fee-info))))))
			;; Charge fee
			(if (> fee-amount u0) (unwrap! (stx-transfer? fee-amount tx-sender (get address fee-info)) ERR_BALANCE_INSUFFICIENT) true)
			(ok decoded-prices))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price-feed-bytes | (buff 8192) |
| execution-plan | (tuple (pyth-decoder-contract trait_reference) (pyth-storage-contract trait_reference) (wormhole-core-contract trait_reference)) |

## Maps



## Variables



## Constants

### ERR_BALANCE_INSUFFICIENT



Balance insufficient for handling fee

```clarity
(define-constant ERR_BALANCE_INSUFFICIENT (err u3001))
```

[View in file](../../contracts/pyth/contracts/pyth-oracle-v4.clar#L11)
  