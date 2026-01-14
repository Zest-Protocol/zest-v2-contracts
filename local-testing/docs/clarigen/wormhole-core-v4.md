
# wormhole-core-v4

[`wormhole-core-v4.clar`](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar)

Title: wormhole-core

Version: v4

Check for latest version: https://github.com/Trust-Machines/stacks-pyth-bridge#latest-version

Report an issue: https://github.com/Trust-Machines/stacks-pyth-bridge/issues

**Public functions:**

- [`update-guardians-set`](#update-guardians-set)

**Read-only functions:**

- [`parse-vaa`](#parse-vaa)
- [`parse-and-verify-vaa`](#parse-and-verify-vaa)
- [`get-active-guardian-set`](#get-active-guardian-set)

**Private functions:**

- [`check-and-consolidate-public-keys`](#check-and-consolidate-public-keys)
- [`recover-public-key`](#recover-public-key)
- [`empty-key`](#empty-key)
- [`batch-check-active-public-keys`](#batch-check-active-public-keys)
- [`read-one-signature`](#read-one-signature)
- [`compress-public-key`](#compress-public-key)
- [`is-eth-address-matching-public-key`](#is-eth-address-matching-public-key)
- [`parse-guardian`](#parse-guardian)
- [`parse-and-verify-guardians-set`](#parse-and-verify-guardians-set)
- [`get-quorum`](#get-quorum)
- [`is-guardian-cue`](#is-guardian-cue)
- [`is-valid-guardian-entry`](#is-valid-guardian-entry)
- [`set-new-guardian-set-id`](#set-new-guardian-set-id)
- [`is-valid-guardian-set`](#is-valid-guardian-set)
- [`read-buff`](#read-buff)
- [`read-buff-20`](#read-buff-20)
- [`read-buff-32`](#read-buff-32)
- [`read-uint-8`](#read-uint-8)
- [`read-uint-16`](#read-uint-16)
- [`read-uint-32`](#read-uint-32)
- [`read-uint-64`](#read-uint-64)

**Maps**

- [`guardian-sets`](#guardian-sets)

**Variables**

- [`guardian-set-initialized`](#guardian-set-initialized)
- [`active-guardian-set-id`](#active-guardian-set-id)
- [`previous-guardian-set`](#previous-guardian-set)

**Constants**

- [`ERR_VAA_PARSING_VERSION`](#err_vaa_parsing_version)
- [`ERR_VAA_PARSING_GUARDIAN_SET`](#err_vaa_parsing_guardian_set)
- [`ERR_VAA_PARSING_SIGNATURES_LEN`](#err_vaa_parsing_signatures_len)
- [`ERR_VAA_PARSING_SIGNATURES`](#err_vaa_parsing_signatures)
- [`ERR_VAA_PARSING_TIMESTAMP`](#err_vaa_parsing_timestamp)
- [`ERR_VAA_PARSING_NONCE`](#err_vaa_parsing_nonce)
- [`ERR_VAA_PARSING_EMITTER_CHAIN`](#err_vaa_parsing_emitter_chain)
- [`ERR_VAA_PARSING_EMITTER_ADDRESS`](#err_vaa_parsing_emitter_address)
- [`ERR_VAA_PARSING_SEQUENCE`](#err_vaa_parsing_sequence)
- [`ERR_VAA_PARSING_CONSISTENCY_LEVEL`](#err_vaa_parsing_consistency_level)
- [`ERR_VAA_PARSING_PAYLOAD`](#err_vaa_parsing_payload)
- [`ERR_VAA_HASHING_BODY`](#err_vaa_hashing_body)
- [`ERR_VAA_CHECKS_VERSION_UNSUPPORTED`](#err_vaa_checks_version_unsupported)
- [`ERR_VAA_CHECKS_THRESHOLD_SIGNATURE`](#err_vaa_checks_threshold_signature)
- [`ERR_VAA_CHECKS_GUARDIAN_SET_CONSISTENCY`](#err_vaa_checks_guardian_set_consistency)
- [`ERR_GSU_PARSING_MODULE`](#err_gsu_parsing_module)
- [`ERR_GSU_PARSING_ACTION`](#err_gsu_parsing_action)
- [`ERR_GSU_PARSING_CHAIN`](#err_gsu_parsing_chain)
- [`ERR_GSU_PARSING_INDEX`](#err_gsu_parsing_index)
- [`ERR_GSU_PARSING_GUARDIAN_LEN`](#err_gsu_parsing_guardian_len)
- [`ERR_GSU_PARSING_GUARDIANS_BYTES`](#err_gsu_parsing_guardians_bytes)
- [`ERR_GSU_UNCOMPRESSED_PUBLIC_KEYS`](#err_gsu_uncompressed_public_keys)
- [`ERR_GSU_CHECK_MODULE`](#err_gsu_check_module)
- [`ERR_GSU_CHECK_ACTION`](#err_gsu_check_action)
- [`ERR_GSU_CHECK_CHAIN`](#err_gsu_check_chain)
- [`ERR_GSU_CHECK_INDEX`](#err_gsu_check_index)
- [`ERR_GSU_CHECK_EMITTER`](#err_gsu_check_emitter)
- [`ERR_NOT_DEPLOYER`](#err_not_deployer)
- [`ERR_GSU_CHECK_OVERLAY`](#err_gsu_check_overlay)
- [`ERR_EMPTY_GUARDIAN_SET`](#err_empty_guardian_set)
- [`ERR_DUPLICATED_GUARDIAN_ADDRESSES`](#err_duplicated_guardian_addresses)
- [`ERR_STACKS_TIMESTAMP`](#err_stacks_timestamp)
- [`GSU-EMITTING-ADDRESS`](#gsu-emitting-address)
- [`GSU-EMITTING-CHAIN`](#gsu-emitting-chain)
- [`EXPECTED_CHAIN_ID`](#expected_chain_id)
- [`CORE_STRING_MODULE`](#core_string_module)
- [`ACTION_GUARDIAN_SET_UPDATE`](#action_guardian_set_update)
- [`CORE_CHAIN_ID`](#core_chain_id)
- [`GUARDIAN_ETH_ADDRESS_SIZE`](#guardian_eth_address_size)
- [`TWENTY_FOUR_HOURS`](#twenty_four_hours)
- [`SIGNATURE_DATA_SIZE`](#signature_data_size)
- [`deployer`](#deployer)


## Functions

### parse-vaa

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L132)

`(define-read-only (parse-vaa ((vaa-bytes (buff 8192))) (response (tuple (recovered-public-keys (list 19 (tuple (guardian-id uint) (recovered-compressed-public-key (buff 33))))) (vaa (tuple (emitter-address (buff 32)) (emitter-chain uint) (guardian-set-id uint) (payload (buff 8192)) (sequence uint) (version uint)))) uint))`

@desc Parse a Verified Action Approval (VAA)

VAA Header
byte        version             (VAA Version)
u32         guardian_set_index  (Indicates which guardian set is signing)
u8          len_signatures      (Number of signatures stored)
[][66]byte  signatures          (Collection of ecdsa signatures)

VAA Body
u32         timestamp           (Timestamp of the block where the source transaction occurred)
u32         nonce               (A grouping number)
u16         emitter_chain       (Wormhole ChainId of emitter contract)
[32]byte    emitter_address     (Emitter contract address, in Wormhole format)
u64         sequence            (Strictly increasing sequence, tied to emitter address & chain)
u8          consistency_level   (What finality level was reached before emitting this message)
[]byte      payload             (VAA message content)


<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (parse-vaa (vaa-bytes (buff 8192)))
	(let ((vaa-bytes-len (len vaa-bytes))
		(version (unwrap! (read-uint-8 vaa-bytes u0) ERR_VAA_PARSING_VERSION))
		(guardian-set-id (unwrap! (read-uint-32 vaa-bytes u1) ERR_VAA_PARSING_GUARDIAN_SET))
		(signatures-len (unwrap! (read-uint-8 vaa-bytes u5) ERR_VAA_PARSING_SIGNATURES_LEN))
		(signatures-offset (+ u6 (* signatures-len SIGNATURE_DATA_SIZE)))
		(signatures (map read-one-signature 
			(unwrap-panic (slice? (list 
				(default-to 0x (slice? vaa-bytes u6 u72))
				(default-to 0x (slice? vaa-bytes u72 u138))
				(default-to 0x (slice? vaa-bytes u138 u204))
				(default-to 0x (slice? vaa-bytes u204 u270))
				(default-to 0x (slice? vaa-bytes u270 u336))
				(default-to 0x (slice? vaa-bytes u336 u402))
				(default-to 0x (slice? vaa-bytes u402 u468))
				(default-to 0x (slice? vaa-bytes u468 u534))
				(default-to 0x (slice? vaa-bytes u534 u600))
				(default-to 0x (slice? vaa-bytes u600 u666))
				(default-to 0x (slice? vaa-bytes u666 u732))
				(default-to 0x (slice? vaa-bytes u732 u798))
				(default-to 0x (slice? vaa-bytes u798 u864))
				(default-to 0x (slice? vaa-bytes u864 u930))
				(default-to 0x (slice? vaa-bytes u930 u996))
				(default-to 0x (slice? vaa-bytes u996 u1062))
				(default-to 0x (slice? vaa-bytes u1062 u1128))
				(default-to 0x (slice? vaa-bytes u1128 u1194))
				(default-to 0x (slice? vaa-bytes u1194 u1260))) u0 signatures-len))
		))
		(vaa-body-hash (keccak256 (keccak256 (unwrap! (slice? vaa-bytes signatures-offset vaa-bytes-len) ERR_VAA_HASHING_BODY))))
		;; following values are ignored as they are not used anywhere
		;; (timestamp (unwrap! (read-uint-32 vaa-bytes signatures-offset) ERR_VAA_PARSING_TIMESTAMP))
		;; (nonce (unwrap! (read-uint-32 vaa-bytes (+ signatures-offset u4)) ERR_VAA_PARSING_NONCE))
		;; (consistency-level (unwrap! (read-uint-8 vaa-bytes (+ signatures-offset u50)) ERR_VAA_PARSING_CONSISTENCY_LEVEL))
		(emitter-chain (unwrap! (read-uint-16 vaa-bytes (+ signatures-offset u8)) ERR_VAA_PARSING_EMITTER_CHAIN))
		(emitter-address (unwrap! (read-buff-32 vaa-bytes (+ signatures-offset u10)) ERR_VAA_PARSING_EMITTER_ADDRESS))
		(sequence (unwrap! (read-uint-64 vaa-bytes (+ signatures-offset u42)) ERR_VAA_PARSING_SEQUENCE))
		(payload (unwrap! (slice? vaa-bytes (+ signatures-offset u51) vaa-bytes-len) ERR_VAA_PARSING_PAYLOAD))
		(vaa-body-hash-list (unwrap-panic (slice? (list vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash 
			vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash 
			vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash vaa-body-hash) u0 signatures-len)))
		(public-keys-results (filter empty-key (map recover-public-key signatures vaa-body-hash-list))))
		(ok { 
			vaa: {
				version: version, 
				guardian-set-id: guardian-set-id,
				emitter-chain: emitter-chain,
				emitter-address: emitter-address,
				sequence: sequence,
				payload: payload,
			},
			recovered-public-keys: public-keys-results,
		})))
```
</details>


**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| vaa-bytes | (buff 8192) | :  |

### parse-and-verify-vaa

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L187)

`(define-read-only (parse-and-verify-vaa ((vaa-bytes (buff 8192))) (response (tuple (emitter-address (buff 32)) (emitter-chain uint) (guardian-set-id uint) (payload (buff 8192)) (sequence uint) (version uint)) uint))`

@desc Parse and check the validity of a Verified Action Approval (VAA)

<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (parse-and-verify-vaa (vaa-bytes (buff 8192)))
	(let ((message (try! (parse-vaa vaa-bytes)))
		(vaa-message (get vaa message))
		(guardian-set-id (get guardian-set-id vaa-message)))
	;; Ensure that the guardian-set-id is the active one or unexpired previous one
	(asserts! (try! (is-valid-guardian-set guardian-set-id)) ERR_VAA_CHECKS_GUARDIAN_SET_CONSISTENCY)
	(let (
		(active-guardians (unwrap! (map-get? guardian-sets guardian-set-id) ERR_VAA_CHECKS_GUARDIAN_SET_CONSISTENCY))
		(signatures-from-active-guardians (fold batch-check-active-public-keys (get recovered-public-keys message) {active-guardians: active-guardians, result: (list)})))
	;; Ensure that version is supported (v1 only)
	(asserts! (is-eq (get version vaa-message) u1) ERR_VAA_CHECKS_VERSION_UNSUPPORTED)
	;; Ensure that the count of valid signatures is >= 13
	(asserts! (>= (len (get result signatures-from-active-guardians)) (get-quorum (len active-guardians))) ERR_VAA_CHECKS_THRESHOLD_SIGNATURE)
	(ok vaa-message))))
```
</details>


**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| vaa-bytes | (buff 8192) | :  |

### update-guardians-set

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L207)

`(define-public (update-guardians-set ((guardian-set-vaa (buff 2048)) (uncompressed-public-keys (list 19 (buff 64)))) (response (tuple (result (tuple (guardians-eth-addresses (list 19 (buff 20))) (guardians-public-keys (list 19 (buff 64))))) (vaa (tuple (emitter-address (buff 32)) (emitter-chain uint) (guardian-set-id uint) (payload (buff 8192)) (sequence uint) (version uint)))) uint))`

@desc Update the active set of guardians 

<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-guardians-set (guardian-set-vaa (buff 2048)) (uncompressed-public-keys (list 19 (buff 64))))
	(let ((vaa (if (var-get guardian-set-initialized)
					(try! (parse-and-verify-vaa guardian-set-vaa))
					(begin
						(asserts! (is-eq contract-caller deployer) ERR_NOT_DEPLOYER)
						(get vaa (try! (parse-vaa guardian-set-vaa))))))
			(guardians-data (try! (parse-and-verify-guardians-set (get payload vaa))))
			(set-id (get new-index guardians-data))
			(eth-addresses (get guardians-eth-addresses guardians-data))
			(consolidated-public-keys (fold check-and-consolidate-public-keys 
				uncompressed-public-keys 
				{ cursor: u0, eth-addresses: eth-addresses, result: (list) }))
			(result (get result consolidated-public-keys)))
		;; Ensure that enough uncompressed-public-keys were provided
		(try! (fold is-valid-guardian-entry result (ok true)))
		(asserts! (is-eq (len uncompressed-public-keys) (len eth-addresses)) 
			ERR_GSU_UNCOMPRESSED_PUBLIC_KEYS)
		;; Check emitting address
		(asserts! (is-eq (get emitter-address vaa) GSU-EMITTING-ADDRESS) ERR_GSU_CHECK_EMITTER)
		;; Check emitting address
		(asserts! (is-eq (get emitter-chain vaa) GSU-EMITTING-CHAIN) ERR_GSU_CHECK_EMITTER)
		;; ensure guardian set has at least one member
		(asserts! (>= (len result) u1) ERR_EMPTY_GUARDIAN_SET)
		;; Update storage
		(map-set guardian-sets set-id result)
		(try! (set-new-guardian-set-id set-id))
		(var-set guardian-set-initialized true)
		;; Emit Event
		(print { 
			type: "guardians-set", 
			action: "updated",
			id: set-id,
			data: { guardians-eth-addresses: eth-addresses, guardians-public-keys: uncompressed-public-keys }})
		(ok {
			vaa: vaa,
			result: { guardians-eth-addresses: eth-addresses, guardians-public-keys: uncompressed-public-keys }})))
```
</details>


**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| guardian-set-vaa | (buff 2048) | : VAA embedding the Guardian Set Update information |
| uncompressed-public-keys | (list 19 (buff 64)) | : uncompressed public keys, used for recomputing the addresses embedded in the VAA. `secp256k1-verify` returns a compressed  public key, and uncompressing the key in clarity would be inefficient and expensive.  |

### get-active-guardian-set

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L244)

`(define-read-only (get-active-guardian-set () (response (tuple (guardians (list 19 (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64))))) (set-id uint)) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-active-guardian-set) 
	(let ((set-id (var-get active-guardian-set-id))
			(guardians (unwrap-panic (map-get? guardian-sets set-id))))
		(ok {set-id: set-id, guardians: guardians})))
```
</details>




### check-and-consolidate-public-keys

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L252)

`(define-private (check-and-consolidate-public-keys ((uncompressed-public-key (buff 64)) (acc (tuple (cursor uint) (eth-addresses (list 19 (buff 20))) (result (list 19 (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64)))))))) (tuple (cursor uint) (eth-addresses (list 19 (buff 20))) (result (list 19 (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64)))))))`

@desc Foldable function admitting an uncompressed 64 bytes public key as an input, producing a record { uncompressed-public-key, compressed-public-key }

<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-and-consolidate-public-keys 
		(uncompressed-public-key (buff 64)) 
		(acc { 
			cursor: uint, 
			eth-addresses: (list 19 (buff 20)), 
			result: (list 19 { compressed-public-key: (buff 33), uncompressed-public-key: (buff 64)})
		}))
	(let ((eth-address (unwrap-panic (element-at? (get eth-addresses acc) (get cursor acc))))
			(compressed-public-key (compress-public-key uncompressed-public-key))
			(entry (if (is-eth-address-matching-public-key uncompressed-public-key eth-address)
				{ compressed-public-key: compressed-public-key, uncompressed-public-key: uncompressed-public-key }
				{ compressed-public-key: 0x, uncompressed-public-key: 0x })))
		{ cursor: (+ u1 (get cursor acc)),
			eth-addresses: (get eth-addresses acc),
			result: (unwrap-panic (as-max-len? (append (get result acc) entry) u19)),
		}))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| uncompressed-public-key | (buff 64) |
| acc | (tuple (cursor uint) (eth-addresses (list 19 (buff 20))) (result (list 19 (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64)))))) |

### recover-public-key

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L269)

`(define-private (recover-public-key ((entry (tuple (guardian-id uint) (signature (buff 65)))) (message-hash (buff 32))) (tuple (guardian-id uint) (recovered-compressed-public-key (buff 33))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (recover-public-key (entry { guardian-id: uint, signature: (buff 65) }) (message-hash (buff 32)))
	(let ((signature (get signature entry))
			(guardian-id (get guardian-id entry))) 
		(if (is-eq 0x signature) { recovered-compressed-public-key: 0x, guardian-id: guardian-id }
			(let ((recovered-compressed-public-key (unwrap-panic (secp256k1-recover? message-hash signature))))
				{ recovered-compressed-public-key: recovered-compressed-public-key, guardian-id: guardian-id }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (guardian-id uint) (signature (buff 65))) |
| message-hash | (buff 32) |

### empty-key

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L276)

`(define-private (empty-key ((entry (tuple (guardian-id uint) (recovered-compressed-public-key (buff 33))))) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (empty-key (entry { guardian-id: uint, recovered-compressed-public-key: (buff 33) })) 
	(not (is-eq 0x (get recovered-compressed-public-key entry))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (guardian-id uint) (recovered-compressed-public-key (buff 33))) |

### batch-check-active-public-keys

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L280)

`(define-private (batch-check-active-public-keys ((entry (tuple (guardian-id uint) (recovered-compressed-public-key (buff 33)))) (acc (tuple (active-guardians (list 19 (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64))))) (result (list 19 (buff 33)))))) (tuple (active-guardians (list 19 (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64))))) (result (list 19 (buff 33)))))`

@desc Foldable function evaluating signatures from a list of { guardian-id: u8, signature: (buff 65) }, returning a list of recovered public-keys

<details>
  <summary>Source code:</summary>

```clarity
(define-private (batch-check-active-public-keys 
		(entry { recovered-compressed-public-key: (buff 33), guardian-id: uint }) 
		(acc { 
			active-guardians: (list 19 { compressed-public-key: (buff 33), uncompressed-public-key: (buff 64) }), 
			result: (list 19 (buff 33))
		}))
	 (let ((compressed-public-key (get compressed-public-key (unwrap-panic (element-at? (get active-guardians acc) (get guardian-id entry))))))
		 (if (and 
						(is-eq (get recovered-compressed-public-key entry) compressed-public-key)
						(is-none (index-of? (get result acc) (get recovered-compressed-public-key entry))))
				{ 
					result: (unwrap-panic (as-max-len? (append (get result acc) (get recovered-compressed-public-key entry)) u19)), 
					active-guardians: (get active-guardians acc)
				}
				acc)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (guardian-id uint) (recovered-compressed-public-key (buff 33))) |
| acc | (tuple (active-guardians (list 19 (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64))))) (result (list 19 (buff 33)))) |

### read-one-signature

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L296)

`(define-private (read-one-signature ((input (buff 8192))) (tuple (guardian-id uint) (signature (buff 65))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-one-signature (input (buff 8192)))
	{ guardian-id: (unwrap-panic (read-uint-8 input u0)), signature: (unwrap-panic (as-max-len? (unwrap-panic (slice? input u1 u66)) u65))} )
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| input | (buff 8192) |

### compress-public-key

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L300)

`(define-private (compress-public-key ((uncompressed-public-key (buff 64))) (buff 33))`

@desc Convert an uncompressed public key (64 bytes) into a compressed public key (33 bytes)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (compress-public-key (uncompressed-public-key (buff 64)))
	(if (is-eq 0x uncompressed-public-key) 
		0x 
		(let ((x-coordinate (unwrap-panic (slice? uncompressed-public-key u0 u32)))
					(y-coordinate-parity (buff-to-uint-be (unwrap-panic (element-at? uncompressed-public-key u63)))))
			(unwrap-panic (as-max-len? (concat (if (is-eq (mod y-coordinate-parity u2) u0) 0x02 0x03) x-coordinate) u33)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| uncompressed-public-key | (buff 64) |

### is-eth-address-matching-public-key

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L307)

`(define-private (is-eth-address-matching-public-key ((uncompressed-public-key (buff 64)) (eth-address (buff 20))) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (is-eth-address-matching-public-key (uncompressed-public-key (buff 64)) (eth-address (buff 20)))
	(is-eq (unwrap-panic (slice? (keccak256 uncompressed-public-key) u12 u32)) eth-address))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| uncompressed-public-key | (buff 64) |
| eth-address | (buff 20) |

### parse-guardian

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L310)

`(define-private (parse-guardian ((cue-position uint) (acc (tuple (bytes (buff 8192)) (result (list 19 (buff 20)))))) (tuple (bytes (buff 8192)) (result (list 19 (buff 20)))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-guardian (cue-position uint) (acc { bytes: (buff 8192), result: (list 19 (buff 20))}))
	(let (
		(bytes (get bytes acc))
		(cursor-address-bytes (unwrap-panic (read-buff-20 bytes cue-position))))
	(if (is-none (index-of? (get result acc) cursor-address-bytes))
		{ bytes: bytes, result: (unwrap-panic (as-max-len? (append (get result acc) cursor-address-bytes) u19))}
		acc)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| cue-position | uint |
| acc | (tuple (bytes (buff 8192)) (result (list 19 (buff 20)))) |

### parse-and-verify-guardians-set

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L319)

`(define-private (parse-and-verify-guardians-set ((bytes (buff 8192))) (response (tuple (action uint) (chain uint) (guardians-eth-addresses (list 19 (buff 20))) (module (buff 32)) (new-index uint)) uint))`

@desc Parse and verify payload's VAA  

<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-and-verify-guardians-set (bytes (buff 8192)))
	(let ((module (unwrap! (read-buff-32 bytes u0) ERR_GSU_PARSING_MODULE))
			(action (unwrap! (read-uint-8 bytes u32) ERR_GSU_PARSING_ACTION))
			(chain (unwrap! (read-uint-16 bytes u33) ERR_GSU_PARSING_CHAIN))
			(new-index (unwrap! (read-uint-32 bytes u35) ERR_GSU_PARSING_INDEX))
			(guardians-count (unwrap! (read-uint-8 bytes u39) ERR_GSU_PARSING_GUARDIAN_LEN))
			(guardians-byte-size (* guardians-count GUARDIAN_ETH_ADDRESS_SIZE))
			(guardians-bytes (unwrap! (read-buff bytes u40 guardians-byte-size) ERR_GSU_PARSING_GUARDIANS_BYTES))
			(guardians-cues (get result (fold is-guardian-cue guardians-bytes { cursor: u0, result: (list) })))
			(eth-addresses (get result (fold parse-guardian guardians-cues { bytes: guardians-bytes, result: (list) }))))
		(asserts! (is-eq (+ u40 guardians-byte-size) (len bytes)) ERR_GSU_CHECK_OVERLAY)
		;; Ensure there are no duplicated addresses
		(asserts! (is-eq (len eth-addresses) guardians-count) ERR_DUPLICATED_GUARDIAN_ADDRESSES)
		;; Ensure that this message was emitted from authorized module
		(asserts! (is-eq module CORE_STRING_MODULE) ERR_GSU_CHECK_MODULE)
		;; Ensure that this message is matching the adequate action
		(asserts! (is-eq action ACTION_GUARDIAN_SET_UPDATE) ERR_GSU_CHECK_ACTION)
		;; Ensure that this message is matching the expected chain
		(asserts! (or (is-eq chain (buff-to-uint-be EXPECTED_CHAIN_ID)) (is-eq chain CORE_CHAIN_ID) ) ERR_GSU_CHECK_CHAIN)
		(if (var-get guardian-set-initialized)
			;; Ensure that next index = current index + 1
			(asserts! (is-eq new-index (+ u1 (var-get active-guardian-set-id))) ERR_GSU_CHECK_INDEX)
			;; Ensure that next index > current index
			(asserts! (> new-index (var-get active-guardian-set-id)) ERR_GSU_CHECK_INDEX))
		(ok {
				guardians-eth-addresses: eth-addresses,
				module: module,
				action: action,
				chain: chain,
				new-index: new-index})))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |

### get-quorum

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L350)

`(define-private (get-quorum ((guardian-set-size uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (get-quorum (guardian-set-size uint))
	(+ (/ (* guardian-set-size u2) u3) u1))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| guardian-set-size | uint |

### is-guardian-cue

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L353)

`(define-private (is-guardian-cue ((byte (buff 1)) (acc (tuple (cursor uint) (result (list 19 uint))))) (tuple (cursor uint) (result (list 19 uint))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (is-guardian-cue (byte (buff 1)) (acc { cursor: uint, result: (list 19 uint) }))
	(if (is-eq u0 (mod (get cursor acc) GUARDIAN_ETH_ADDRESS_SIZE))
		{ 
			cursor: (+ u1 (get cursor acc)), 
			result: (unwrap-panic (as-max-len? (append (get result acc) (get cursor acc)) u19)),
		}
		{
			cursor: (+ u1 (get cursor acc)), 
			result: (get result acc),
		}))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| byte | (buff 1) |
| acc | (tuple (cursor uint) (result (list 19 uint))) |

### is-valid-guardian-entry

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L364)

`(define-private (is-valid-guardian-entry ((entry (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64)))) (prev-res (response bool uint))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (is-valid-guardian-entry (entry { compressed-public-key: (buff 33), uncompressed-public-key: (buff 64)}) (prev-res (response bool uint)))
	(begin 
		(try! prev-res)
		(let ((compressed (get compressed-public-key entry))
				(uncompressed (get uncompressed-public-key entry)))
			(if (or (is-eq 0x compressed) (is-eq 0x uncompressed)) ERR_GSU_PARSING_GUARDIAN_LEN (ok true)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (tuple (compressed-public-key (buff 33)) (uncompressed-public-key (buff 64))) |
| prev-res | (response bool uint) |

### set-new-guardian-set-id

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L371)

`(define-private (set-new-guardian-set-id ((new-set-id uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (set-new-guardian-set-id (new-set-id uint))
	(if (var-get guardian-set-initialized)
		(let ((latest-stacks-timestamp (unwrap! (get-stacks-block-info? time (- stacks-block-height u1)) ERR_STACKS_TIMESTAMP))
				(previous-set-expires-at (+ TWENTY_FOUR_HOURS latest-stacks-timestamp)))
			(var-set previous-guardian-set {
					set-id: (var-get active-guardian-set-id),
					expires-at: previous-set-expires-at
			})
			(var-set active-guardian-set-id new-set-id)
			(ok true))
		(begin (var-set active-guardian-set-id new-set-id) (ok true))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-set-id | uint |

### is-valid-guardian-set

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L383)

`(define-private (is-valid-guardian-set ((set-id uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (is-valid-guardian-set (set-id uint))
	(if (is-eq (var-get active-guardian-set-id) set-id)
		(ok true)
		(let ((prev-guardian-set (var-get previous-guardian-set))
			(prev-guardian-set-id (get set-id prev-guardian-set))
			(prev-guardian-set-expires-at (get expires-at prev-guardian-set))
			(latest-stacks-timestamp (unwrap! (get-stacks-block-info? time (- stacks-block-height u1)) ERR_STACKS_TIMESTAMP))
		) (ok (and (is-eq prev-guardian-set-id set-id) (>= prev-guardian-set-expires-at latest-stacks-timestamp))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| set-id | uint |

### read-buff

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L393)

`(define-private (read-buff ((bytes (buff 8192)) (pos uint) (length uint)) (response (buff 8192) uint))`

cursor reads

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

### read-buff-20

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L396)

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

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L399)

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

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L402)

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

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L405)

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

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L408)

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

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L411)

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

## Maps

### guardian-sets

Map tracking guardians set

```clarity
(define-map guardian-sets uint (list 19 { compressed-public-key: (buff 33), uncompressed-public-key: (buff 64) }))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L110)

## Variables

### guardian-set-initialized

bool

Guardian Set Update uncompressed public keys invalid

```clarity
(define-data-var guardian-set-initialized bool false)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L99)

### active-guardian-set-id

uint

Keep track of the active guardian set-id

```clarity
(define-data-var active-guardian-set-id uint u0)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L103)

### previous-guardian-set

(tuple (expires-at uint) (set-id uint))

Keep track of exiting guardian set

```clarity
(define-data-var previous-guardian-set {set-id: uint, expires-at: uint} {set-id: u0, expires-at: u0})
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L105)

## Constants

### ERR_VAA_PARSING_VERSION



VAA version not supported

```clarity
(define-constant ERR_VAA_PARSING_VERSION (err u1001))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L14)

### ERR_VAA_PARSING_GUARDIAN_SET



Unable to extract the guardian set-id from the VAA

```clarity
(define-constant ERR_VAA_PARSING_GUARDIAN_SET (err u1002))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L16)

### ERR_VAA_PARSING_SIGNATURES_LEN



Unable to extract the number of signatures from the VAA

```clarity
(define-constant ERR_VAA_PARSING_SIGNATURES_LEN (err u1003))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L18)

### ERR_VAA_PARSING_SIGNATURES



Unable to extract the signatures from the VAA

```clarity
(define-constant ERR_VAA_PARSING_SIGNATURES (err u1004))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L20)

### ERR_VAA_PARSING_TIMESTAMP



Unable to extract the timestamp from the VAA

```clarity
(define-constant ERR_VAA_PARSING_TIMESTAMP (err u1005))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L22)

### ERR_VAA_PARSING_NONCE



Unable to extract the nonce from the VAA

```clarity
(define-constant ERR_VAA_PARSING_NONCE (err u1006))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L24)

### ERR_VAA_PARSING_EMITTER_CHAIN



Unable to extract the emitter chain from the VAA

```clarity
(define-constant ERR_VAA_PARSING_EMITTER_CHAIN (err u1007))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L26)

### ERR_VAA_PARSING_EMITTER_ADDRESS



Unable to extract the emitter address from the VAA

```clarity
(define-constant ERR_VAA_PARSING_EMITTER_ADDRESS (err u1008))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L28)

### ERR_VAA_PARSING_SEQUENCE



Unable to extract the sequence from the VAA

```clarity
(define-constant ERR_VAA_PARSING_SEQUENCE (err u1009))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L30)

### ERR_VAA_PARSING_CONSISTENCY_LEVEL



Unable to extract the consistency level from the VAA

```clarity
(define-constant ERR_VAA_PARSING_CONSISTENCY_LEVEL (err u1010))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L32)

### ERR_VAA_PARSING_PAYLOAD



Unable to extract the payload from the VAA

```clarity
(define-constant ERR_VAA_PARSING_PAYLOAD (err u1011))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L34)

### ERR_VAA_HASHING_BODY



Unable to extract the hash the payload from the VAA

```clarity
(define-constant ERR_VAA_HASHING_BODY (err u1012))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L36)

### ERR_VAA_CHECKS_VERSION_UNSUPPORTED



Number of valid signatures insufficient (min: 13/19)

```clarity
(define-constant ERR_VAA_CHECKS_VERSION_UNSUPPORTED (err u1101))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L38)

### ERR_VAA_CHECKS_THRESHOLD_SIGNATURE



Number of valid signatures insufficient (min: 13/19)

```clarity
(define-constant ERR_VAA_CHECKS_THRESHOLD_SIGNATURE (err u1102))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L40)

### ERR_VAA_CHECKS_GUARDIAN_SET_CONSISTENCY



Guardian signature not comprised in guardian set specified

```clarity
(define-constant ERR_VAA_CHECKS_GUARDIAN_SET_CONSISTENCY (err u1103))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L42)

### ERR_GSU_PARSING_MODULE



Guardian Set Update initiated by an unauthorized module

```clarity
(define-constant ERR_GSU_PARSING_MODULE (err u1201))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L44)

### ERR_GSU_PARSING_ACTION



Guardian Set Update initiated from an unauthorized module

```clarity
(define-constant ERR_GSU_PARSING_ACTION (err u1202))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L46)

### ERR_GSU_PARSING_CHAIN



Guardian Set Update initiated from an unauthorized module

```clarity
(define-constant ERR_GSU_PARSING_CHAIN (err u1203))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L48)

### ERR_GSU_PARSING_INDEX



Guardian Set Update new index invalid

```clarity
(define-constant ERR_GSU_PARSING_INDEX (err u1204))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L50)

### ERR_GSU_PARSING_GUARDIAN_LEN



Guardian Set Update length is invalid

```clarity
(define-constant ERR_GSU_PARSING_GUARDIAN_LEN (err u1205))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L52)

### ERR_GSU_PARSING_GUARDIANS_BYTES



Guardian Set Update guardians payload is malformed

```clarity
(define-constant ERR_GSU_PARSING_GUARDIANS_BYTES (err u1206))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L54)

### ERR_GSU_UNCOMPRESSED_PUBLIC_KEYS



Guardian Set Update uncompressed public keys invalid

```clarity
(define-constant ERR_GSU_UNCOMPRESSED_PUBLIC_KEYS (err u1207))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L56)

### ERR_GSU_CHECK_MODULE



Guardian Set Update initiated by an unauthorized module

```clarity
(define-constant ERR_GSU_CHECK_MODULE (err u1301))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L58)

### ERR_GSU_CHECK_ACTION



Guardian Set Update initiated from an unauthorized module

```clarity
(define-constant ERR_GSU_CHECK_ACTION (err u1302))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L60)

### ERR_GSU_CHECK_CHAIN



Guardian Set Update initiated from an unauthorized module

```clarity
(define-constant ERR_GSU_CHECK_CHAIN (err u1303))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L62)

### ERR_GSU_CHECK_INDEX



Guardian Set Update new index invalid

```clarity
(define-constant ERR_GSU_CHECK_INDEX (err u1304))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L64)

### ERR_GSU_CHECK_EMITTER



Guardian Set Update emission payload unauthorized

```clarity
(define-constant ERR_GSU_CHECK_EMITTER (err u1305))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L66)

### ERR_NOT_DEPLOYER



First guardian set is not being updated by the deployer

```clarity
(define-constant ERR_NOT_DEPLOYER (err u1306))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L68)

### ERR_GSU_CHECK_OVERLAY



Overlay present in vaa bytes

```clarity
(define-constant ERR_GSU_CHECK_OVERLAY (err u1307))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L70)

### ERR_EMPTY_GUARDIAN_SET



Empty guardian set

```clarity
(define-constant ERR_EMPTY_GUARDIAN_SET (err u1308))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L72)

### ERR_DUPLICATED_GUARDIAN_ADDRESSES



Guardian Set Update emission payload unauthorized

```clarity
(define-constant ERR_DUPLICATED_GUARDIAN_ADDRESSES (err u1309))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L74)

### ERR_STACKS_TIMESTAMP



Unable to get stacks timestamp

```clarity
(define-constant ERR_STACKS_TIMESTAMP (err u1310))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L76)

### GSU-EMITTING-ADDRESS



Guardian set upgrade emitting address

```clarity
(define-constant GSU-EMITTING-ADDRESS 0x0000000000000000000000000000000000000000000000000000000000000004)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L79)

### GSU-EMITTING-CHAIN



Guardian set upgrade emitting chain

```clarity
(define-constant GSU-EMITTING-CHAIN u1)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L81)

### EXPECTED_CHAIN_ID



Stacks chain id attributed by Pyth

```clarity
(define-constant EXPECTED_CHAIN_ID (if is-in-mainnet 0xea86 0xc377))
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L83)

### CORE_STRING_MODULE



Core string module

```clarity
(define-constant CORE_STRING_MODULE 0x00000000000000000000000000000000000000000000000000000000436f7265)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L85)

### ACTION_GUARDIAN_SET_UPDATE



Guardian set update action

```clarity
(define-constant ACTION_GUARDIAN_SET_UPDATE u2)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L87)

### CORE_CHAIN_ID



Core chain ID

```clarity
(define-constant CORE_CHAIN_ID u0)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L89)

### GUARDIAN_ETH_ADDRESS_SIZE



Guardian eth address size

```clarity
(define-constant GUARDIAN_ETH_ADDRESS_SIZE u20)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L91)

### TWENTY_FOUR_HOURS



24 hours in seconds

```clarity
(define-constant TWENTY_FOUR_HOURS u86400)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L93)

### SIGNATURE_DATA_SIZE



signature data size

```clarity
(define-constant SIGNATURE_DATA_SIZE u66)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L95)

### deployer



Contract deployer

```clarity
(define-constant deployer contract-caller)
```

[View in file](../../contracts/pyth/contracts/wormhole/wormhole-core-v4.clar#L101)
  