
# pyth-storage-v4

[`pyth-storage-v4.clar`](../../contracts/pyth/contracts/pyth-storage-v4.clar)

Title: pyth-storage

Version: v4

Check for latest version: https://github.com/Trust-Machines/stacks-pyth-bridge#latest-version

Report an issue: https://github.com/Trust-Machines/stacks-pyth-bridge/issues

**Public functions:**

- [`set-price-testnet`](#set-price-testnet)
- [`read`](#read)
- [`write`](#write)

**Read-only functions:**

- [`get-price`](#get-price)
- [`read-price-with-staleness-check`](#read-price-with-staleness-check)

**Private functions:**

- [`write-batch-entry`](#write-batch-entry)
- [`only-ok-entry`](#only-ok-entry)
- [`unwrapped-entry`](#unwrapped-entry)
- [`is-price-update-more-recent`](#is-price-update-more-recent)

**Maps**

- [`prices`](#prices)
- [`timestamps`](#timestamps)

**Variables**



**Constants**

- [`ERR_NEWER_PRICE_AVAILABLE`](#err_newer_price_available)
- [`ERR_STALE_PRICE`](#err_stale_price)
- [`ERR_RESTRICTED_TO_TESTNET`](#err_restricted_to_testnet)
- [`ERR_PRICE_FEED_NOT_FOUND`](#err_price_feed_not_found)
- [`STACKS_BLOCK_TIME`](#stacks_block_time)


## Functions

### set-price-testnet

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L27)

`(define-public (set-price-testnet ((data (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)))) (response (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)) uint) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-price-testnet
	(data {
		price-identifier: (buff 32),
		price: int,
		conf: uint,
		expo: int,
		ema-price: int,
		ema-conf: uint,
		publish-time: uint,
		prev-publish-time: uint,
	}))
	(begin
		(asserts! (not is-in-mainnet) ERR_RESTRICTED_TO_TESTNET)
		(ok (write-batch-entry data))
	)
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| data | (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)) |

### read

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L44)

`(define-public (read ((price-identifier (buff 32))) (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (publish-time uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (read (price-identifier (buff 32)))
	(let ((entry (unwrap! (map-get? prices price-identifier) ERR_PRICE_FEED_NOT_FOUND)))
		(ok entry)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price-identifier | (buff 32) |

### get-price

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L48)

`(define-read-only (get-price ((price-identifier (buff 32))) (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (publish-time uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-price (price-identifier (buff 32)))
	(let ((entry (unwrap! (map-get? prices price-identifier) ERR_PRICE_FEED_NOT_FOUND)))
		(ok entry)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price-identifier | (buff 32) |

### read-price-with-staleness-check

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L52)

`(define-read-only (read-price-with-staleness-check ((price-identifier (buff 32))) (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (publish-time uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (read-price-with-staleness-check (price-identifier (buff 32)))
	(let ((entry (unwrap! (map-get? prices price-identifier) ERR_PRICE_FEED_NOT_FOUND))
			(stale-price-threshold (contract-call? .pyth-governance-v3 get-stale-price-threshold))
			(latest-stacks-timestamp (unwrap! (get-stacks-block-info? time (- stacks-block-height u1)) ERR_STALE_PRICE)))
		(asserts! (>= (get publish-time entry) (+ (- latest-stacks-timestamp stale-price-threshold) STACKS_BLOCK_TIME)) ERR_STALE_PRICE)
		(ok entry)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price-identifier | (buff 32) |

### write

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L59)

`(define-public (write ((batch-updates (list 64 (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint))))) (response (list 64 (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (write (batch-updates (list 64 {
		price-identifier: (buff 32),
		price: int,
		conf: uint,
		expo: int,
		ema-price: int,
		ema-conf: uint,
		publish-time: uint,
		prev-publish-time: uint,
	})))
	(let ((successful-updates (map unwrapped-entry (filter only-ok-entry (map write-batch-entry batch-updates)))))
		;; Ensure that updates are always coming from the right contract
		(try! (contract-call? .pyth-governance-v3 check-execution-flow contract-caller none))
		(ok successful-updates)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| batch-updates | (list 64 (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint))) |

### write-batch-entry

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L74)

`(define-private (write-batch-entry ((entry (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)))) (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (write-batch-entry (entry {
		price-identifier: (buff 32),
		price: int,
		conf: uint,
		expo: int,
		ema-price: int,
		ema-conf: uint,
		publish-time: uint,
		prev-publish-time: uint,
	}))
	(let ((stale-price-threshold (contract-call? .pyth-governance-v3 get-stale-price-threshold))
			(latest-stacks-timestamp (unwrap! (get-stacks-block-info? time (- stacks-block-height u1)) ERR_STALE_PRICE))
			(publish-time (get publish-time entry)))
		;; Ensure that we have not processed a newer price
		(asserts! (is-price-update-more-recent (get price-identifier entry) publish-time) ERR_NEWER_PRICE_AVAILABLE)
		;; Ensure that price is not stale
		(asserts! (>= publish-time (+ (- latest-stacks-timestamp stale-price-threshold) STACKS_BLOCK_TIME)) ERR_STALE_PRICE)
		;; Update storage
		(map-set prices 
			(get price-identifier entry) 
			{
				price: (get price entry),
				conf: (get conf entry),
				expo: (get expo entry),
				ema-price: (get ema-price entry),
				ema-conf: (get ema-conf entry),
				publish-time: publish-time,
				prev-publish-time: (get prev-publish-time entry)
			})
		;; Emit event
		(print {
			type: "price-feed", 
			action: "updated", 
			data: entry
		})
		;; Update timestamps tracking
		(map-set timestamps (get price-identifier entry) (get publish-time entry))
		(ok entry)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)) |

### only-ok-entry

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L113)

`(define-private (only-ok-entry ((entry (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)) uint))) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (only-ok-entry (entry (response {
		price-identifier: (buff 32),
		price: int,
		conf: uint,
		expo: int,
		ema-price: int,
		ema-conf: uint,
		publish-time: uint,
		prev-publish-time: uint,
	} uint))) (is-ok entry))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)) uint) |

### unwrapped-entry

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L124)

`(define-private (unwrapped-entry ((entry (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)) uint))) (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (unwrapped-entry (entry (response {
		price-identifier: (buff 32),
		price: int,
		conf: uint,
		expo: int,
		ema-price: int,
		ema-conf: uint,
		publish-time: uint,
		prev-publish-time: uint,
	} uint))) (unwrap-panic entry))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)) uint) |

### is-price-update-more-recent

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L135)

`(define-private (is-price-update-more-recent ((price-identifier (buff 32)) (publish-time uint)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (is-price-update-more-recent (price-identifier (buff 32)) (publish-time uint))
	(> publish-time (default-to u0 (map-get? timestamps price-identifier))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| price-identifier | (buff 32) |
| publish-time | uint |

## Maps

### prices



```clarity
(define-map prices (buff 32) {
	price: int,
	conf: uint,
	expo: int,
	ema-price: int,
	ema-conf: uint,
	publish-time: uint,
	prev-publish-time: uint,
})
```

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L15)

### timestamps



```clarity
(define-map timestamps (buff 32) uint)
```

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L25)

## Variables



## Constants

### ERR_NEWER_PRICE_AVAILABLE





```clarity
(define-constant ERR_NEWER_PRICE_AVAILABLE (err u5001))
```

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L8)

### ERR_STALE_PRICE





```clarity
(define-constant ERR_STALE_PRICE (err u5002))
```

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L9)

### ERR_RESTRICTED_TO_TESTNET





```clarity
(define-constant ERR_RESTRICTED_TO_TESTNET (err u5003))
```

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L10)

### ERR_PRICE_FEED_NOT_FOUND





```clarity
(define-constant ERR_PRICE_FEED_NOT_FOUND (err u5004))
```

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L11)

### STACKS_BLOCK_TIME





```clarity
(define-constant STACKS_BLOCK_TIME u5)
```

[View in file](../../contracts/pyth/contracts/pyth-storage-v4.clar#L13)
  