
# pyth-pnau-decoder-v3

[`pyth-pnau-decoder-v3.clar`](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar)

Title: pyth-pnau-decoder

Version: v3

Check for latest version: https://github.com/Trust-Machines/stacks-pyth-bridge#latest-version

Report an issue: https://github.com/Trust-Machines/stacks-pyth-bridge/issues

**Public functions:**

- [`decode-and-verify-price-feeds`](#decode-and-verify-price-feeds)

**Read-only functions:**



**Private functions:**

- [`parse-merkle-root-data-from-vaa-payload`](#parse-merkle-root-data-from-vaa-payload)
- [`parse-pnau-header`](#parse-pnau-header)
- [`parse-and-verify-prices-updates`](#parse-and-verify-prices-updates)
- [`parse-price-info-and-proof`](#parse-price-info-and-proof)
- [`check-merkle-proof`](#check-merkle-proof)
- [`read-and-verify-update`](#read-and-verify-update)
- [`parse-proof`](#parse-proof)
- [`cast-decoded-price`](#cast-decoded-price)
- [`read-buff`](#read-buff)
- [`read-buff-4`](#read-buff-4)
- [`read-buff-20`](#read-buff-20)
- [`read-buff-32`](#read-buff-32)
- [`read-uint-8`](#read-uint-8)
- [`read-uint-16`](#read-uint-16)
- [`read-uint-32`](#read-uint-32)
- [`read-uint-64`](#read-uint-64)
- [`read-int-32`](#read-int-32)
- [`read-int-64`](#read-int-64)
- [`check-proof`](#check-proof)
- [`hash-leaf`](#hash-leaf)
- [`keccak160`](#keccak160)
- [`hash-path`](#hash-path)
- [`hash-nodes`](#hash-nodes)
- [`buff-20-to-uint`](#buff-20-to-uint)

**Maps**



**Variables**



**Constants**

- [`PNAU_MAGIC`](#pnau_magic)
- [`AUWV_MAGIC`](#auwv_magic)
- [`PYTHNET_MAJOR_VERSION`](#pythnet_major_version)
- [`PYTHNET_MINOR_VERSION`](#pythnet_minor_version)
- [`UPDATE_TYPE_WORMHOLE_MERKLE`](#update_type_wormhole_merkle)
- [`MESSAGE_TYPE_PRICE_FEED`](#message_type_price_feed)
- [`MERKLE_PROOF_HASH_SIZE`](#merkle_proof_hash_size)
- [`MAXIMUM_UPDATES`](#maximum_updates)
- [`ERR_MAGIC_BYTES`](#err_magic_bytes)
- [`ERR_VERSION_MAJ`](#err_version_maj)
- [`ERR_VERSION_MIN`](#err_version_min)
- [`ERR_HEADER_TRAILING_SIZE`](#err_header_trailing_size)
- [`ERR_PROOF_TYPE`](#err_proof_type)
- [`ERR_UPDATE_TYPE`](#err_update_type)
- [`ERR_INVALID_AUWV`](#err_invalid_auwv)
- [`ERR_MERKLE_ROOT_MISMATCH`](#err_merkle_root_mismatch)
- [`ERR_INCORRECT_AUWV_PAYLOAD`](#err_incorrect_auwv_payload)
- [`ERR_UNAUTHORIZED_PRICE_UPDATE`](#err_unauthorized_price_update)
- [`ERR_OVERLAY_PRESENT`](#err_overlay_present)
- [`ERR_MAXIMUM_UPDATES`](#err_maximum_updates)
- [`ERR_INVALID_PNAU_BYTES`](#err_invalid_pnau_bytes)


## Functions

### decode-and-verify-price-feeds

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L49)

`(define-public (decode-and-verify-price-feeds ((pnau-bytes (buff 8192)) (wormhole-core-address trait_reference)) (response (list 6 (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint))) uint))`

;; Public functions

<details>
  <summary>Source code:</summary>

```clarity
(define-public (decode-and-verify-price-feeds (pnau-bytes (buff 8192)) (wormhole-core-address <wormhole-core-trait>))
	;; Check execution flow
	(let ((execution-check (try! (contract-call? .pyth-governance-v3 check-execution-flow contract-caller none)))
			(offset (try! (parse-pnau-header pnau-bytes)))
			(pnau-vaa-size (try! (read-uint-16 pnau-bytes offset)))
			(pnau-vaa (try! (read-buff pnau-bytes (+ offset u2) pnau-vaa-size)))
			(vaa (try! (contract-call? wormhole-core-address parse-and-verify-vaa pnau-vaa)))
			(merkle-root-hash (try! (parse-merkle-root-data-from-vaa-payload (get payload vaa))))
			(encoded-price-updates (unwrap! (slice? pnau-bytes (+ offset u2 pnau-vaa-size) (len pnau-bytes)) ERR_INVALID_PNAU_BYTES))
			(decoded-prices-updates (try! (parse-and-verify-prices-updates encoded-price-updates merkle-root-hash)))
			(prices-updates (map cast-decoded-price decoded-prices-updates))
			(authorized-prices-data-sources (contract-call? .pyth-governance-v3 get-authorized-prices-data-sources)))
		;; Ensure that update was published by an data source authorized by governance
		(unwrap! (index-of? authorized-prices-data-sources { emitter-chain: (get emitter-chain vaa), emitter-address: (get emitter-address vaa) }) ERR_UNAUTHORIZED_PRICE_UPDATE)
		(ok prices-updates)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| pnau-bytes | (buff 8192) |
| wormhole-core-address | trait_reference |

### parse-merkle-root-data-from-vaa-payload

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L66)

`(define-private (parse-merkle-root-data-from-vaa-payload ((payload-vaa-bytes (buff 8192))) (response (buff 20) uint))`

;; Private functions

<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-merkle-root-data-from-vaa-payload (payload-vaa-bytes (buff 8192)))
	(let ((payload-type (unwrap! (read-buff-4 payload-vaa-bytes u0) ERR_INVALID_AUWV))
			(wh-update-type (unwrap! (read-uint-8 payload-vaa-bytes u4) ERR_INVALID_AUWV))
			;; slot and ring size are not used
			;; (merkle-root-slot (unwrap! (read-uint-64 payload-vaa-bytes u5) ERR_INVALID_AUWV))
			;; (merkle-root-ring-size (unwrap! (read-uint-32 payload-vaa-bytes u13) ERR_INVALID_AUWV))
			(merkle-root-hash (unwrap! (read-buff-20 payload-vaa-bytes u17) ERR_INVALID_AUWV)))
		;; Check payload type
		(asserts! (is-eq payload-type AUWV_MAGIC) ERR_MAGIC_BYTES)
		;; Check update type
		(asserts! (is-eq wh-update-type UPDATE_TYPE_WORMHOLE_MERKLE) ERR_PROOF_TYPE)
		(ok merkle-root-hash)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| payload-vaa-bytes | (buff 8192) |

### parse-pnau-header

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L79)

`(define-private (parse-pnau-header ((pf-bytes (buff 8192))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-pnau-header (pf-bytes (buff 8192)))
	(let ((magic (unwrap! (read-buff-4 pf-bytes u0) ERR_MAGIC_BYTES))
			(version-major (unwrap! (read-uint-8 pf-bytes u4) ERR_VERSION_MAJ))
			(version-minor (unwrap! (read-uint-8 pf-bytes u5) ERR_VERSION_MIN))
			(header-trailing-size (unwrap! (read-uint-8 pf-bytes u6) ERR_HEADER_TRAILING_SIZE))
			(proof-type (unwrap! (read-uint-8 pf-bytes (+ u7 header-trailing-size)) ERR_PROOF_TYPE)))
		;; Check magic bytes
		(asserts! (is-eq magic PNAU_MAGIC) ERR_MAGIC_BYTES)
		;; Check major version
		(asserts! (is-eq version-major PYTHNET_MAJOR_VERSION) ERR_VERSION_MAJ)
		;; Check minor version
		(asserts! (>= version-minor PYTHNET_MINOR_VERSION) ERR_VERSION_MIN)
		;; Check proof type
		(asserts! (is-eq proof-type UPDATE_TYPE_WORMHOLE_MERKLE) ERR_PROOF_TYPE)
		(ok (+ header-trailing-size u8))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| pf-bytes | (buff 8192) |

### parse-and-verify-prices-updates

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L95)

`(define-private (parse-and-verify-prices-updates ((bytes (buff 8192)) (merkle-root-hash (buff 20))) (response (list 6 (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (leaf-bytes (buff 255)) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (proof (list 128 (buff 20))) (publish-time uint) (update-size uint))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-and-verify-prices-updates (bytes (buff 8192)) (merkle-root-hash (buff 20)))
	(let ((num-updates (try! (read-uint-8 bytes u0)))
			(max-updates-check (asserts! (<= num-updates MAXIMUM_UPDATES) ERR_MAXIMUM_UPDATES))
			(update-data (try! (parse-price-info-and-proof bytes)))
			(updates (get entries update-data))
			(merkle-proof-checks-success (get result (fold check-merkle-proof updates { result: true, merkle-root-hash: merkle-root-hash }))))
		(asserts! merkle-proof-checks-success ERR_MERKLE_ROOT_MISMATCH)
		(asserts! (is-eq (get offset update-data) (len bytes)) ERR_OVERLAY_PRESENT)
		(asserts! (is-eq num-updates (len updates)) ERR_INCORRECT_AUWV_PAYLOAD)
		(ok updates)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| merkle-root-hash | (buff 20) |

### parse-price-info-and-proof

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L106)

`(define-private (parse-price-info-and-proof ((bytes (buff 8192))) (response (tuple (entries (list 6 (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (leaf-bytes (buff 255)) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (proof (list 128 (buff 20))) (publish-time uint) (update-size uint)))) (offset uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-price-info-and-proof (bytes (buff 8192)))
	(let (
			(offset u1)
			(update1 (try! (read-and-verify-update bytes offset)))
			(offset-1 (+ offset (get update-size update1)))
			(update2 (unwrap! (read-and-verify-update bytes offset-1) (ok { offset: offset-1, entries: (list update1)})))
			(offset-2 (+ offset-1 (get update-size update2)))
			(update3 (unwrap! (read-and-verify-update bytes offset-2) (ok { offset: offset-2, entries: (list update1 update2)})))
			(offset-3 (+ offset-2 (get update-size update3)))
			(update4 (unwrap! (read-and-verify-update bytes offset-3) (ok { offset: offset-3, entries: (list update1 update2 update3)})))
			(offset-4 (+ offset-3 (get update-size update4)))
			(update5 (unwrap! (read-and-verify-update bytes offset-4) (ok { offset: offset-4, entries: (list update1 update2 update3 update4)})))
			(offset-5 (+ offset-4 (get update-size update5)))
			(update6 (unwrap! (read-and-verify-update bytes offset-5) (ok { offset: offset-5, entries: (list update1 update2 update3 update4 update5)}))))
		(ok { offset: (+ offset-5 (get update-size update6)), entries: (list update1 update2 update3 update4 update5 update6)})))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |

### check-merkle-proof

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L122)

`(define-private (check-merkle-proof ((entry (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (leaf-bytes (buff 255)) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (proof (list 128 (buff 20))) (publish-time uint) (update-size uint))) (acc (tuple (merkle-root-hash (buff 20)) (result bool)))) (tuple (merkle-root-hash (buff 20)) (result bool)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-merkle-proof
	(entry 
		{
			price-identifier: (buff 32),
			price: int,
			conf: uint,
			expo: int,
			publish-time: uint,
			prev-publish-time: uint,
			ema-price: int,
			ema-conf: uint,
			proof: (list 128 (buff 20)),
			leaf-bytes: (buff 255),
			update-size: uint
		})
	(acc 
		{ 
			merkle-root-hash: (buff 20),
			result: bool, 
		}))
	{ merkle-root-hash: (get merkle-root-hash acc), result: (and (get result acc) (check-proof (get merkle-root-hash acc) (get leaf-bytes entry) (get proof entry)))})
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (leaf-bytes (buff 255)) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (proof (list 128 (buff 20))) (publish-time uint) (update-size uint)) |
| acc | (tuple (merkle-root-hash (buff 20)) (result bool)) |

### read-and-verify-update

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L144)

`(define-private (read-and-verify-update ((bytes (buff 8192)) (offset uint)) (response (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (leaf-bytes (buff 255)) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (proof (list 128 (buff 20))) (publish-time uint) (update-size uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-and-verify-update (bytes (buff 8192)) (offset uint))
	(let ((message-size (try! (read-uint-16 bytes offset)))
			(message-type (try! (read-uint-8 bytes (+ offset u2))))
			(price-identifier (try! (read-buff-32 bytes (+ offset u3))))
			(price (try! (read-int-64 bytes (+ offset u35))))
			(conf (try! (read-uint-64 bytes (+ offset u43))))
			(expo (try! (read-int-32 bytes (+ offset u51))))
			(publish-time (try! (read-uint-64 bytes (+ offset u55))))
			(prev-publish-time (try! (read-uint-64 bytes (+ offset u63))))
			(ema-price (try! (read-int-64 bytes (+ offset u71))))
			(ema-conf (try! (read-uint-64 bytes (+ offset u79))))
			(proof-size (try! (read-uint-8 bytes (+ offset u2 message-size))))
			(proof-length (* MERKLE_PROOF_HASH_SIZE proof-size))
			(proof-bytes (default-to 0x (slice? bytes (+ offset u3 message-size) (+ offset u3 message-size proof-length))))
			(leaf-bytes (default-to 0x (slice? bytes (+ offset u2) (+ offset u2 message-size))))
			(proof (get result (fold parse-proof proof-bytes { result: (list), cursor: {index: u0, next-update-index: u0 }, bytes: proof-bytes, limit: proof-size}))))
		(asserts! (is-eq message-type MESSAGE_TYPE_PRICE_FEED) ERR_UPDATE_TYPE)
		(ok {
			price-identifier: price-identifier,
			price: price,
			conf: conf,
			expo: expo,
			publish-time: publish-time,
			prev-publish-time: prev-publish-time,
			ema-price: ema-price,
			ema-conf: ema-conf,
			proof: proof,
			leaf-bytes: (unwrap-panic (as-max-len? leaf-bytes u255)),
			update-size: (+ u3 message-size proof-length)
		})))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| offset | uint |

### parse-proof

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L175)

`(define-private (parse-proof ((entry (buff 1)) (acc (tuple (bytes (buff 8192)) (cursor (tuple (index uint) (next-update-index uint))) (limit uint) (result (list 128 (buff 20)))))) (tuple (bytes (buff 8192)) (cursor (tuple (index uint) (next-update-index uint))) (limit uint) (result (list 128 (buff 20)))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-proof
		(entry (buff 1)) 
		(acc { 
			cursor: { 
				index: uint,
				next-update-index: uint
			},
			bytes: (buff 8192),
			result: (list 128 (buff 20)), 
			limit: uint
		}))
	(let ((result (get result acc)) (limit (get limit acc)))
		(if (is-eq (len result) limit)
			acc
			(let ((cursor (get cursor acc))
					(index (get index cursor))
					(next-update-index (get next-update-index cursor))
					(bytes (get bytes acc)))
				(if (is-eq index next-update-index)
					;; Parse update
					{
						cursor: { index: (+ index u1), next-update-index: (+ index MERKLE_PROOF_HASH_SIZE)},
						bytes: bytes,
						result: (unwrap-panic (as-max-len? (append result (unwrap-panic (read-buff-20 bytes index))) u128)),
						limit: limit,
					}
					;; Increment position
					{
						cursor: { index: (+ index u1), next-update-index: next-update-index },
						bytes: bytes,
						result: result,
						limit: limit
					}
				)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (buff 1) |
| acc | (tuple (bytes (buff 8192)) (cursor (tuple (index uint) (next-update-index uint))) (limit uint) (result (list 128 (buff 20)))) |

### cast-decoded-price

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L210)

`(define-private (cast-decoded-price ((entry (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (leaf-bytes (buff 255)) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (proof (list 128 (buff 20))) (publish-time uint) (update-size uint)))) (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (publish-time uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (cast-decoded-price (entry 
		{
			price-identifier: (buff 32),
			price: int,
			conf: uint,
			expo: int,
			publish-time: uint,
			prev-publish-time: uint,
			ema-price: int,
			ema-conf: uint,
			proof: (list 128 (buff 20)),
			leaf-bytes: (buff 255),
			update-size: uint
		}))
	{
		price-identifier: (get price-identifier entry),
		price: (get price entry),
		conf: (get conf entry),
		expo: (get expo entry),
		publish-time: (get publish-time entry),
		prev-publish-time: (get prev-publish-time entry),
		ema-price: (get ema-price entry),
		ema-conf: (get ema-conf entry)
	})
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (conf uint) (ema-conf uint) (ema-price int) (expo int) (leaf-bytes (buff 255)) (prev-publish-time uint) (price int) (price-identifier (buff 32)) (proof (list 128 (buff 20))) (publish-time uint) (update-size uint)) |

### read-buff

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L235)

`(define-private (read-buff ((bytes (buff 8192)) (pos uint) (length uint)) (response (buff 8192) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-buff (bytes (buff 8192)) (pos uint) (length uint))
	(ok (unwrap! (slice? bytes pos (+ pos length)) (err u1))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |
| length | uint |

### read-buff-4

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L238)

`(define-private (read-buff-4 ((bytes (buff 8192)) (pos uint)) (response (buff 4) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-buff-4 (bytes (buff 8192)) (pos uint))
	(ok (unwrap! (as-max-len? (unwrap! (slice? bytes pos (+ pos u4)) (err u1)) u4) (err u1))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-buff-20

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L241)

`(define-private (read-buff-20 ((bytes (buff 8192)) (pos uint)) (response (buff 20) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-buff-20 (bytes (buff 8192)) (pos uint))
	(ok (unwrap! (as-max-len? (unwrap! (slice? bytes pos (+ pos u20)) (err u1)) u20) (err u1))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-buff-32

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L244)

`(define-private (read-buff-32 ((bytes (buff 8192)) (pos uint)) (response (buff 32) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-buff-32 (bytes (buff 8192)) (pos uint))
	(ok (unwrap! (as-max-len? (unwrap! (slice? bytes pos (+ pos u32)) (err u1)) u32) (err u1))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-uint-8

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L247)

`(define-private (read-uint-8 ((bytes (buff 8192)) (pos uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-uint-8 (bytes (buff 8192)) (pos uint))
	(ok (buff-to-uint-be (unwrap-panic (as-max-len? (try! (read-buff bytes pos u1)) u1)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-uint-16

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L250)

`(define-private (read-uint-16 ((bytes (buff 8192)) (pos uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-uint-16 (bytes (buff 8192)) (pos uint))
	(ok (buff-to-uint-be (unwrap-panic (as-max-len? (try! (read-buff bytes pos u2)) u2)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-uint-32

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L253)

`(define-private (read-uint-32 ((bytes (buff 8192)) (pos uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-uint-32 (bytes (buff 8192)) (pos uint))
	(ok (buff-to-uint-be (unwrap-panic (as-max-len? (try! (read-buff bytes pos u4)) u4)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-uint-64

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L256)

`(define-private (read-uint-64 ((bytes (buff 8192)) (pos uint)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-uint-64 (bytes (buff 8192)) (pos uint))
	(ok (buff-to-uint-be (unwrap-panic (as-max-len? (try! (read-buff bytes pos u8)) u8)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-int-32

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L259)

`(define-private (read-int-32 ((bytes (buff 8192)) (pos uint)) (response int uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-int-32 (bytes (buff 8192)) (pos uint))
	(ok (bit-shift-right (bit-shift-left (buff-to-int-be (unwrap-panic (as-max-len? (try! (read-buff bytes pos u4)) u4))) u96) u96)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-int-64

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L262)

`(define-private (read-int-64 ((bytes (buff 8192)) (pos uint)) (response int uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-int-64 (bytes (buff 8192)) (pos uint))
	(ok (bit-shift-right (bit-shift-left (buff-to-int-be (unwrap-panic (as-max-len? (try! (read-buff bytes pos u8)) u8))) u64) u64)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### check-proof

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L265)

`(define-private (check-proof ((root-hash (buff 20)) (leaf (buff 255)) (path (list 255 (buff 20)))) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-proof (root-hash (buff 20)) (leaf (buff 255)) (path (list 255 (buff 20))))
	(is-eq root-hash (fold hash-path path (hash-leaf leaf))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| root-hash | (buff 20) |
| leaf | (buff 255) |
| path | (list 255 (buff 20)) |

### hash-leaf

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L268)

`(define-private (hash-leaf ((bytes (buff 255))) (buff 20))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (hash-leaf (bytes (buff 255)))
	(keccak160 (concat 0x00 bytes)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 255) |

### keccak160

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L271)

`(define-private (keccak160 ((bytes (buff 1024))) (buff 20))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (keccak160 (bytes (buff 1024)))
	(unwrap-panic (as-max-len? (unwrap-panic (slice? (keccak256 bytes) u0 u20)) u20)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 1024) |

### hash-path

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L274)

`(define-private (hash-path ((entry (buff 20)) (acc (buff 20))) (buff 20))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (hash-path (entry (buff 20)) (acc (buff 20)))
	(hash-nodes entry acc))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (buff 20) |
| acc | (buff 20) |

### hash-nodes

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L277)

`(define-private (hash-nodes ((node-1 (buff 20)) (node-2 (buff 20))) (buff 20))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (hash-nodes (node-1 (buff 20)) (node-2 (buff 20)))
	(let ((uint-1 (buff-20-to-uint node-1))
			(uint-2 (buff-20-to-uint node-2))
			(sequence (if (< uint-2 uint-1) (concat (concat 0x01 node-2) node-1) (concat (concat 0x01 node-1) node-2))))
	(keccak160 sequence)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| node-1 | (buff 20) |
| node-2 | (buff 20) |

### buff-20-to-uint

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L283)

`(define-private (buff-20-to-uint ((bytes (buff 20))) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (buff-20-to-uint (bytes (buff 20)))
		(buff-to-uint-be (unwrap-panic (as-max-len? (unwrap-panic (slice? bytes u0 u15)) u16))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 20) |

## Maps



## Variables



## Constants

### PNAU_MAGIC





```clarity
(define-constant PNAU_MAGIC 0x504e4155) ;; 'PNAU': Pyth Network Accumulator Update
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L12)

### AUWV_MAGIC





```clarity
(define-constant AUWV_MAGIC 0x41555756) ;; 'AUWV': Accumulator Update Wormhole Verification
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L13)

### PYTHNET_MAJOR_VERSION





```clarity
(define-constant PYTHNET_MAJOR_VERSION u1)
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L14)

### PYTHNET_MINOR_VERSION





```clarity
(define-constant PYTHNET_MINOR_VERSION u0)
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L15)

### UPDATE_TYPE_WORMHOLE_MERKLE





```clarity
(define-constant UPDATE_TYPE_WORMHOLE_MERKLE u0)
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L16)

### MESSAGE_TYPE_PRICE_FEED





```clarity
(define-constant MESSAGE_TYPE_PRICE_FEED u0)
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L17)

### MERKLE_PROOF_HASH_SIZE





```clarity
(define-constant MERKLE_PROOF_HASH_SIZE u20)
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L18)

### MAXIMUM_UPDATES





```clarity
(define-constant MAXIMUM_UPDATES u6)
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L19)

### ERR_MAGIC_BYTES



Unable to price feed magic bytes

```clarity
(define-constant ERR_MAGIC_BYTES (err u2001))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L22)

### ERR_VERSION_MAJ



Unable to parse major version

```clarity
(define-constant ERR_VERSION_MAJ (err u2002))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L24)

### ERR_VERSION_MIN



Unable to parse minor version

```clarity
(define-constant ERR_VERSION_MIN (err u2003))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L26)

### ERR_HEADER_TRAILING_SIZE



Unable to parse trailing header size

```clarity
(define-constant ERR_HEADER_TRAILING_SIZE (err u2004))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L28)

### ERR_PROOF_TYPE



Unable to parse proof type

```clarity
(define-constant ERR_PROOF_TYPE (err u2005))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L30)

### ERR_UPDATE_TYPE



Unable to parse update type

```clarity
(define-constant ERR_UPDATE_TYPE (err u2006))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L32)

### ERR_INVALID_AUWV



Incorrect AUWV message

```clarity
(define-constant ERR_INVALID_AUWV (err u2007))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L34)

### ERR_MERKLE_ROOT_MISMATCH



Merkle root mismatch

```clarity
(define-constant ERR_MERKLE_ROOT_MISMATCH (err u2008))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L36)

### ERR_INCORRECT_AUWV_PAYLOAD



Incorrect AUWV payload

```clarity
(define-constant ERR_INCORRECT_AUWV_PAYLOAD (err u2009))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L38)

### ERR_UNAUTHORIZED_PRICE_UPDATE



Price update not signed by an authorized source 

```clarity
(define-constant ERR_UNAUTHORIZED_PRICE_UPDATE (err u2401))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L40)

### ERR_OVERLAY_PRESENT



VAA buffer has unused, extra leading bytes (overlay)

```clarity
(define-constant ERR_OVERLAY_PRESENT (err u2402))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L42)

### ERR_MAXIMUM_UPDATES



Number of updates exceeded maximum.

```clarity
(define-constant ERR_MAXIMUM_UPDATES (err u2403))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L44)

### ERR_INVALID_PNAU_BYTES



Invalid PNAU buffer, shorter than required

```clarity
(define-constant ERR_INVALID_PNAU_BYTES (err u2404))
```

[View in file](../../contracts/pyth/contracts/pyth-pnau-decoder-v3.clar#L46)
  