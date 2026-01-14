
# pyth-governance-v3

[`pyth-governance-v3.clar`](../../contracts/pyth/contracts/pyth-governance-v3.clar)

Title: pyth-governance

Version: v3

Check for latest version: https://github.com/Trust-Machines/stacks-pyth-bridge#latest-version

Report an issue: https://github.com/Trust-Machines/stacks-pyth-bridge/issues

**Public functions:**

- [`update-fee-value`](#update-fee-value)
- [`update-stale-price-threshold`](#update-stale-price-threshold)
- [`update-fee-recipient-address`](#update-fee-recipient-address)
- [`update-wormhole-core-contract`](#update-wormhole-core-contract)
- [`update-pyth-oracle-contract`](#update-pyth-oracle-contract)
- [`update-pyth-decoder-contract`](#update-pyth-decoder-contract)
- [`update-pyth-storage-contract`](#update-pyth-storage-contract)
- [`update-prices-data-sources`](#update-prices-data-sources)
- [`update-governance-data-source`](#update-governance-data-source)

**Read-only functions:**

- [`check-execution-flow`](#check-execution-flow)
- [`check-storage-contract`](#check-storage-contract)
- [`get-current-execution-plan`](#get-current-execution-plan)
- [`get-fee-info`](#get-fee-info)
- [`get-stale-price-threshold`](#get-stale-price-threshold)
- [`get-authorized-prices-data-sources`](#get-authorized-prices-data-sources)

**Private functions:**

- [`check-update-source`](#check-update-source)
- [`expect-contract-call-performed-by-expected-oracle-contract`](#expect-contract-call-performed-by-expected-oracle-contract)
- [`expect-active-storage-contract`](#expect-active-storage-contract)
- [`expect-active-decoder-contract`](#expect-active-decoder-contract)
- [`expect-active-wormhole-contract`](#expect-active-wormhole-contract)
- [`parse-and-verify-ptgm`](#parse-and-verify-ptgm)
- [`parse-and-verify-fee-value`](#parse-and-verify-fee-value)
- [`parse-and-verify-stale-price-threshold`](#parse-and-verify-stale-price-threshold)
- [`parse-and-verify-governance-data-source`](#parse-and-verify-governance-data-source)
- [`parse-principal`](#parse-principal)
- [`parse-and-verify-prices-data-sources`](#parse-and-verify-prices-data-sources)
- [`parse-data-source`](#parse-data-source)
- [`read-buff`](#read-buff)
- [`read-buff-1`](#read-buff-1)
- [`read-buff-2`](#read-buff-2)
- [`read-buff-4`](#read-buff-4)
- [`read-buff-32`](#read-buff-32)
- [`read-uint-8`](#read-uint-8)
- [`read-uint-16`](#read-uint-16)
- [`read-uint-64`](#read-uint-64)
- [`slice`](#slice)

**Maps**



**Variables**

- [`governance-data-source`](#governance-data-source)
- [`prices-data-sources`](#prices-data-sources)
- [`fee-value`](#fee-value)
- [`stale-price-threshold`](#stale-price-threshold)
- [`fee-recipient-address`](#fee-recipient-address)
- [`last-sequence-processed`](#last-sequence-processed)
- [`current-execution-plan`](#current-execution-plan)

**Constants**

- [`PTGM_MAGIC`](#ptgm_magic)
- [`PTGM_UPDATE_PYTH_ORACLE_ADDRESS`](#ptgm_update_pyth_oracle_address)
- [`PTGM_UPDATE_GOVERNANCE_DATA_SOURCE`](#ptgm_update_governance_data_source)
- [`PTGM_UPDATE_PRICES_DATA_SOURCES`](#ptgm_update_prices_data_sources)
- [`PTGM_UPDATE_FEE`](#ptgm_update_fee)
- [`PTGM_STALE_PRICE_THRESHOLD`](#ptgm_stale_price_threshold)
- [`PTGM_UPDATE_WORMHOLE_CORE_ADDRESS`](#ptgm_update_wormhole_core_address)
- [`PTGM_UPDATE_RECIPIENT_ADDRESS`](#ptgm_update_recipient_address)
- [`PTGM_UPDATE_PYTH_STORAGE_ADDRESS`](#ptgm_update_pyth_storage_address)
- [`PTGM_UPDATE_PYTH_DECODER_ADDRESS`](#ptgm_update_pyth_decoder_address)
- [`EXPECTED_CHAIN_ID`](#expected_chain_id)
- [`EXPECTED_MODULE`](#expected_module)
- [`SIZE_OF_EMITTER_DATA`](#size_of_emitter_data)
- [`ERR_UNEXPECTED_ACTION`](#err_unexpected_action)
- [`ERR_INVALID_ACTION_PAYLOAD`](#err_invalid_action_payload)
- [`ERR_UNAUTHORIZED_ACCESS`](#err_unauthorized_access)
- [`ERR_OUTDATED`](#err_outdated)
- [`ERR_UNAUTHORIZED_UPDATE`](#err_unauthorized_update)
- [`ERR_INVALID_PTGM`](#err_invalid_ptgm)
- [`ERR_NOT_STANDARD_PRINCIPAL`](#err_not_standard_principal)
- [`ERR_PTGM_CHECK_OVERLAY`](#err_ptgm_check_overlay)
- [`ERR_INVALID_PRICE_DATA_SOURCES`](#err_invalid_price_data_sources)


## Functions

### check-execution-flow

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L90)

`(define-read-only (check-execution-flow ((former-contract-caller principal) (execution-plan-opt (optional (tuple (pyth-decoder-contract trait_reference) (pyth-storage-contract trait_reference) (wormhole-core-contract trait_reference))))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (check-execution-flow 
	(former-contract-caller principal)
	(execution-plan-opt (optional {
		pyth-storage-contract: <pyth-storage-trait>,
		pyth-decoder-contract: <pyth-decoder-trait>,
		wormhole-core-contract: <wormhole-core-trait>
	})))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(success (if (is-eq contract-caller (get pyth-storage-contract expected-execution-plan))
				;; The storage contract is checking its execution flow
				;; Must always be invoked by the proxy
				(try! (expect-contract-call-performed-by-expected-oracle-contract former-contract-caller expected-execution-plan))
				;; Other contract
				(if (is-eq contract-caller (get pyth-decoder-contract expected-execution-plan))
					;; The decoding contract is checking its execution flow
					(try! (expect-contract-call-performed-by-expected-oracle-contract former-contract-caller expected-execution-plan))
					(if (is-eq contract-caller (get pyth-oracle-contract expected-execution-plan))
						;; The proxy contract is checking its execution flow
						(let ((execution-plan (unwrap! execution-plan-opt ERR_UNAUTHORIZED_ACCESS)))
							;; Ensure that storage contract is the one expected
							(try! (expect-active-storage-contract (get pyth-storage-contract execution-plan) expected-execution-plan))
							;; Ensure that decoder contract is the one expected
							(try! (expect-active-decoder-contract (get pyth-decoder-contract execution-plan) expected-execution-plan))
							;; Ensure that wormhole contract is the one expected
							(try! (expect-active-wormhole-contract (get wormhole-core-contract execution-plan) expected-execution-plan)))
						false)))))
		(if success (ok true) ERR_UNAUTHORIZED_ACCESS)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| former-contract-caller | principal |
| execution-plan-opt | (optional (tuple (pyth-decoder-contract trait_reference) (pyth-storage-contract trait_reference) (wormhole-core-contract trait_reference))) |

### check-storage-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L118)

`(define-read-only (check-storage-contract ((storage-contract trait_reference)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (check-storage-contract 
	(storage-contract <pyth-storage-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan)))
		;; Ensure that storage contract is the one expected
		(expect-active-storage-contract storage-contract expected-execution-plan)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| storage-contract | trait_reference |

### get-current-execution-plan

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L124)

`(define-read-only (get-current-execution-plan () (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-current-execution-plan)
	(var-get current-execution-plan))
```
</details>




### get-fee-info

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L127)

`(define-read-only (get-fee-info () (tuple (address principal) (exponent uint) (mantissa uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-fee-info)
	(merge (var-get fee-value) { address: (var-get fee-recipient-address) }))
```
</details>




### get-stale-price-threshold

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L130)

`(define-read-only (get-stale-price-threshold () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-stale-price-threshold)
	(var-get stale-price-threshold))
```
</details>




### get-authorized-prices-data-sources

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L133)

`(define-read-only (get-authorized-prices-data-sources () (list 255 (tuple (emitter-address (buff 32)) (emitter-chain uint))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-authorized-prices-data-sources)
	(var-get prices-data-sources))
```
</details>




### update-fee-value

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L136)

`(define-public (update-fee-value ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response (tuple (exponent uint) (mantissa uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-fee-value (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_UPDATE_FEE) ERR_UNEXPECTED_ACTION)
		;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update fee-value
		(let ((updated-data (try! (parse-and-verify-fee-value (get body ptgm)))))
			(var-set fee-value updated-data)
			;; Emit event
			(print { type: "fee-value", action: "updated", data: updated-data })
			(ok updated-data))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### update-stale-price-threshold

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L153)

`(define-public (update-stale-price-threshold ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-stale-price-threshold (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_STALE_PRICE_THRESHOLD) ERR_UNEXPECTED_ACTION)
		;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update stale-price-threshold
		(let ((updated-data (try! (parse-and-verify-stale-price-threshold (get body ptgm)))))
			(var-set stale-price-threshold updated-data)
			;; Emit event
			(print { type: "stale-price-threshold", action: "updated", data: updated-data })
			(ok updated-data))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### update-fee-recipient-address

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L170)

`(define-public (update-fee-recipient-address ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response principal uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-fee-recipient-address (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_UPDATE_RECIPIENT_ADDRESS) ERR_UNEXPECTED_ACTION)
			;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update fee-recipient-address
		(let ((updated-data (try! (parse-principal (get body ptgm)))))
			(var-set fee-recipient-address updated-data)
			;; Emit event
			(print { type: "fee-recipient-address", action: "updated", data: updated-data })
			(ok updated-data))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### update-wormhole-core-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L187)

`(define-public (update-wormhole-core-contract ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response principal uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-wormhole-core-contract (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_UPDATE_WORMHOLE_CORE_ADDRESS) ERR_UNEXPECTED_ACTION)
		;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update execution plan
		(let ((updated-data (try! (parse-principal (get body ptgm)))))
			(var-set current-execution-plan (merge expected-execution-plan { wormhole-core-contract: updated-data }))
			;; Emit event
			(print { type: "wormhole-core-contract", action: "updated", data: updated-data })
			(ok updated-data))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### update-pyth-oracle-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L204)

`(define-public (update-pyth-oracle-contract ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response principal uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-pyth-oracle-contract (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_UPDATE_PYTH_ORACLE_ADDRESS) ERR_UNEXPECTED_ACTION)
		;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update execution plan
		(let ((updated-data (try! (parse-principal (get body ptgm)))))
			(var-set current-execution-plan (merge expected-execution-plan { pyth-oracle-contract: updated-data }))
			;; Emit event
			(print { type: "pyth-oracle-contract", action: "updated", data: updated-data })
			(ok updated-data))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### update-pyth-decoder-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L221)

`(define-public (update-pyth-decoder-contract ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response principal uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-pyth-decoder-contract (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_UPDATE_PYTH_DECODER_ADDRESS) ERR_UNEXPECTED_ACTION)
		;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update execution plan
		(let ((updated-data (try! (parse-principal (get body ptgm)))))
			(var-set current-execution-plan (merge expected-execution-plan { pyth-decoder-contract: updated-data }))
			;; Emit event
			(print { type: "pyth-decoder-contract", action: "updated", data: updated-data })
			(ok updated-data))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### update-pyth-storage-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L238)

`(define-public (update-pyth-storage-contract ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response principal uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-pyth-storage-contract (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_UPDATE_PYTH_STORAGE_ADDRESS) ERR_UNEXPECTED_ACTION)
		;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update execution plan
		(let ((updated-data (try! (parse-principal (get body ptgm)))))
			(var-set current-execution-plan (merge expected-execution-plan { pyth-storage-contract: updated-data }))
			;; Emit event
			(print { type: "pyth-storage-contract", action: "updated", data: updated-data })
			(ok updated-data))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### update-prices-data-sources

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L255)

`(define-public (update-prices-data-sources ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response (list 255 (tuple (emitter-address (buff 32)) (emitter-chain uint))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-prices-data-sources (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_UPDATE_PRICES_DATA_SOURCES) ERR_UNEXPECTED_ACTION)
		;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update prices-data-sources
		(let ((updated-data (try! (parse-and-verify-prices-data-sources (get body ptgm)))))
			(var-set prices-data-sources updated-data)
			;; Emit event
			(print { type: "prices-data-sources", action: "updated", data: updated-data })
			(ok updated-data))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### update-governance-data-source

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L272)

`(define-public (update-governance-data-source ((vaa-bytes (buff 8192)) (wormhole-core-contract trait_reference)) (response (tuple (emitter-address (buff 32)) (emitter-chain uint) (emitter-sequence uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update-governance-data-source (vaa-bytes (buff 8192)) (wormhole-core-contract <wormhole-core-trait>))
	(let ((expected-execution-plan (var-get current-execution-plan))
			(vaa (try! (contract-call? wormhole-core-contract parse-and-verify-vaa vaa-bytes)))
			(ptgm (try! (parse-and-verify-ptgm (get payload vaa) (get sequence vaa)))))
		;; Ensure action's expected
		(asserts! (is-eq (get action ptgm) PTGM_UPDATE_GOVERNANCE_DATA_SOURCE) ERR_UNEXPECTED_ACTION)
		;; Ensure that the action is authorized
		(try! (check-update-source (get emitter-chain vaa) (get emitter-address vaa)))
		;; Ensure that the latest wormhole contract is used
		(try! (expect-active-wormhole-contract wormhole-core-contract expected-execution-plan))
		;; Update governance-data-source
		(let ((updated-data (try! (parse-and-verify-governance-data-source (get body ptgm))))
				(data-source {emitter-chain: (get emitter-chain updated-data), emitter-address: (get emitter-address updated-data)})
				(new-sequence (get emitter-sequence updated-data)))
			(var-set governance-data-source data-source)
			(var-set last-sequence-processed new-sequence)
			;; Emit event
			(print { type: "governance-data-source", action: "updated", data: updated-data })
			(ok updated-data)    
		)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| vaa-bytes | (buff 8192) |
| wormhole-core-contract | trait_reference |

### check-update-source

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L293)

`(define-private (check-update-source ((emitter-chain uint) (emitter-address (buff 32))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-update-source (emitter-chain uint) (emitter-address (buff 32)))
	(let ((authorized-data-source (var-get governance-data-source)))
		;; Check data-source
		(asserts! (is-eq authorized-data-source { emitter-chain: emitter-chain, emitter-address: emitter-address }) ERR_UNAUTHORIZED_UPDATE)
		(ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| emitter-chain | uint |
| emitter-address | (buff 32) |

### expect-contract-call-performed-by-expected-oracle-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L299)

`(define-private (expect-contract-call-performed-by-expected-oracle-contract ((former-contract-caller principal) (expected-plan (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (expect-contract-call-performed-by-expected-oracle-contract 
	(former-contract-caller principal) 
	(expected-plan { 
		pyth-oracle-contract: principal,
		pyth-decoder-contract: principal, 
		pyth-storage-contract: principal,
		wormhole-core-contract: principal
	}))
	(begin
		(asserts! (is-eq former-contract-caller (get pyth-oracle-contract expected-plan)) ERR_UNAUTHORIZED_ACCESS)
		(ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| former-contract-caller | principal |
| expected-plan | (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)) |

### expect-active-storage-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L311)

`(define-private (expect-active-storage-contract ((storage-contract trait_reference) (expected-plan (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (expect-active-storage-contract 
	(storage-contract <pyth-storage-trait>)
	(expected-plan { 
		pyth-oracle-contract: principal,
		pyth-decoder-contract: principal, 
		pyth-storage-contract: principal,
		wormhole-core-contract: principal
	}))
	(begin
		(asserts! (is-eq (contract-of storage-contract) (get pyth-storage-contract expected-plan)) ERR_UNAUTHORIZED_ACCESS)
		(ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| storage-contract | trait_reference |
| expected-plan | (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)) |

### expect-active-decoder-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L323)

`(define-private (expect-active-decoder-contract ((decoder-contract trait_reference) (expected-plan (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (expect-active-decoder-contract 
	(decoder-contract <pyth-decoder-trait>)
	(expected-plan { 
		pyth-oracle-contract: principal,
		pyth-decoder-contract: principal, 
		pyth-storage-contract: principal,
		wormhole-core-contract: principal
	}))
	(begin
		(asserts! (is-eq (contract-of decoder-contract) (get pyth-decoder-contract expected-plan)) ERR_UNAUTHORIZED_ACCESS)
		(ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| decoder-contract | trait_reference |
| expected-plan | (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)) |

### expect-active-wormhole-contract

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L335)

`(define-private (expect-active-wormhole-contract ((wormhole-contract trait_reference) (expected-plan (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (expect-active-wormhole-contract 
	(wormhole-contract <wormhole-core-trait>)
	(expected-plan { 
		pyth-oracle-contract: principal,
		pyth-decoder-contract: principal, 
		pyth-storage-contract: principal,
		wormhole-core-contract: principal
	}))
	(begin
		(asserts! (is-eq (contract-of wormhole-contract) (get wormhole-core-contract expected-plan)) ERR_UNAUTHORIZED_ACCESS)
		(ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| wormhole-contract | trait_reference |
| expected-plan | (tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal)) |

### parse-and-verify-ptgm

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L347)

`(define-private (parse-and-verify-ptgm ((ptgm-bytes (buff 8192)) (sequence uint)) (response (tuple (action (buff 1)) (body (buff 8192))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-and-verify-ptgm (ptgm-bytes (buff 8192)) (sequence uint))
	(let ((magic (unwrap! (read-buff-4 ptgm-bytes u0) ERR_INVALID_PTGM))
			(module (unwrap! (read-buff-1 ptgm-bytes u4) ERR_INVALID_PTGM))
			(action (unwrap! (read-buff-1 ptgm-bytes u5) ERR_INVALID_PTGM))
			(target-chain-id (unwrap! (read-buff-2 ptgm-bytes u6) ERR_INVALID_PTGM))
			(body (unwrap! (slice? ptgm-bytes u8 (len ptgm-bytes)) ERR_INVALID_PTGM)))
		;; Check magic bytes
		(asserts! (is-eq magic PTGM_MAGIC) ERR_INVALID_PTGM)
		;; Check target-chain-id
		(asserts! (is-eq target-chain-id EXPECTED_CHAIN_ID) ERR_INVALID_PTGM)
		;; Check module
		(asserts! (is-eq module EXPECTED_MODULE) ERR_INVALID_PTGM)
		;; Check Sequence
		(asserts! (> sequence (var-get last-sequence-processed)) ERR_OUTDATED)
		;; Update Sequence
		(var-set last-sequence-processed sequence)
		(ok { action: action, body: body })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ptgm-bytes | (buff 8192) |
| sequence | uint |

### parse-and-verify-fee-value

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L365)

`(define-private (parse-and-verify-fee-value ((ptgm-body (buff 8192))) (response (tuple (exponent uint) (mantissa uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-and-verify-fee-value (ptgm-body (buff 8192)))
	(let ((mantissa (unwrap! (read-uint-64 ptgm-body u0) ERR_INVALID_ACTION_PAYLOAD))
			(exponent (unwrap! (read-uint-64 ptgm-body u8) ERR_INVALID_ACTION_PAYLOAD)))
		(asserts! (is-eq u16 (len ptgm-body)) ERR_PTGM_CHECK_OVERLAY)
		(ok { mantissa: mantissa, exponent: exponent })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ptgm-body | (buff 8192) |

### parse-and-verify-stale-price-threshold

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L371)

`(define-private (parse-and-verify-stale-price-threshold ((ptgm-body (buff 8192))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-and-verify-stale-price-threshold (ptgm-body (buff 8192)))
	(let ((stale-price-threshold-val (unwrap! (read-uint-64 ptgm-body u0) ERR_INVALID_ACTION_PAYLOAD)))
		(asserts! (is-eq u8 (len ptgm-body)) ERR_PTGM_CHECK_OVERLAY)     
		(ok stale-price-threshold-val)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ptgm-body | (buff 8192) |

### parse-and-verify-governance-data-source

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L376)

`(define-private (parse-and-verify-governance-data-source ((ptgm-body (buff 8192))) (response (tuple (emitter-address (buff 32)) (emitter-chain uint) (emitter-sequence uint)) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-and-verify-governance-data-source (ptgm-body (buff 8192)))
	(let ((emitter-chain (unwrap! (read-uint-16 ptgm-body u0) ERR_INVALID_ACTION_PAYLOAD))
			(emitter-sequence (unwrap! (read-uint-64 ptgm-body u2) ERR_INVALID_ACTION_PAYLOAD))
			(emitter-address (unwrap! (read-buff-32 ptgm-body u10) ERR_INVALID_ACTION_PAYLOAD)))
		(asserts! (is-eq u42 (len ptgm-body)) ERR_PTGM_CHECK_OVERLAY)      
		(ok { emitter-chain: emitter-chain, emitter-sequence: emitter-sequence, emitter-address: emitter-address })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ptgm-body | (buff 8192) |

### parse-principal

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L383)

`(define-private (parse-principal ((ptgm-body (buff 8192))) (response principal uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-principal (ptgm-body (buff 8192)))
	(let ((principal-len (try! (read-uint-8 ptgm-body u0)))
			(principal-bytes (slice ptgm-body u1 (some principal-len)))
			(new-principal (unwrap! (from-consensus-buff? principal principal-bytes) ERR_INVALID_ACTION_PAYLOAD)))
		(asserts! (is-eq (+ u1 principal-len) (len ptgm-body)) ERR_PTGM_CHECK_OVERLAY)    
		(asserts! (is-standard new-principal) ERR_NOT_STANDARD_PRINCIPAL)
		(ok new-principal))) 
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ptgm-body | (buff 8192) |

### parse-and-verify-prices-data-sources

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L391)

`(define-private (parse-and-verify-prices-data-sources ((ptgm-body (buff 8192))) (response (list 255 (tuple (emitter-address (buff 32)) (emitter-chain uint))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-and-verify-prices-data-sources (ptgm-body (buff 8192)))
	(let ((num-data-sources (try! (read-uint-8 ptgm-body u0)))
			(data-sources-bytes (slice ptgm-body u1 none))
			(data-sources-bundle (fold parse-data-source data-sources-bytes { 
				result: (list), 
				cursor: {
					index: u0,
					next-update-index: u0
				},
				bytes: data-sources-bytes,
				limit: num-data-sources 
			}))
			(data-sources (get result data-sources-bundle)))
		(asserts! (is-eq (get next-update-index (get cursor data-sources-bundle)) (len data-sources-bytes)) ERR_PTGM_CHECK_OVERLAY)
		(asserts! (is-eq num-data-sources (len data-sources)) ERR_INVALID_PRICE_DATA_SOURCES)  
		(ok data-sources)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ptgm-body | (buff 8192) |

### parse-data-source

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L408)

`(define-private (parse-data-source ((entry (buff 1)) (acc (tuple (bytes (buff 8192)) (cursor (tuple (index uint) (next-update-index uint))) (limit uint) (result (list 255 (tuple (emitter-address (buff 32)) (emitter-chain uint))))))) (tuple (bytes (buff 8192)) (cursor (tuple (index uint) (next-update-index uint))) (limit uint) (result (list 255 (tuple (emitter-address (buff 32)) (emitter-chain uint))))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (parse-data-source
		(entry (buff 1)) 
		(acc { 
			cursor: { 
				index: uint,
				next-update-index: uint
			},
			bytes: (buff 8192),
			result: (list 255 { emitter-chain: uint, emitter-address: (buff 32) }), 
			limit: uint
		}))
	(let ((cursor (get cursor acc))
			(offset (get index cursor))
			(next-update-index (get next-update-index cursor)))
		(if (is-eq (len (get result acc)) (get limit acc)) acc
			(if (is-eq offset next-update-index)
				;; Parse update
				(let ((bytes (get bytes acc))
						(emitter-chain (unwrap-panic (read-uint-16 bytes offset)))
						(emitter-address (unwrap-panic (read-buff-32 bytes (+ offset u2)))))
					{
						cursor: { 
							index: (+ offset u1),
							next-update-index: (+ offset SIZE_OF_EMITTER_DATA),
						},
						bytes: bytes,
						result: (unwrap-panic (as-max-len? (append (get result acc) { 
							emitter-chain: emitter-chain, 
							emitter-address: emitter-address 
						}) u255)),
						limit: (get limit acc),
					})
				;; Increment position
				{
						cursor: { 
							index: (+ offset u1),
							next-update-index: next-update-index,
						},
						bytes: (get bytes acc),
						result: (get result acc),
						limit: (get limit acc)
				}))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| entry | (buff 1) |
| acc | (tuple (bytes (buff 8192)) (cursor (tuple (index uint) (next-update-index uint))) (limit uint) (result (list 255 (tuple (emitter-address (buff 32)) (emitter-chain uint))))) |

### read-buff

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L451)

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

### read-buff-1

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L454)

`(define-private (read-buff-1 ((bytes (buff 8192)) (pos uint)) (response (buff 1) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-buff-1 (bytes (buff 8192)) (pos uint))
	(ok (unwrap! (as-max-len? (unwrap! (slice? bytes pos (+ pos u1)) (err u1)) u1) (err u1))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-buff-2

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L457)

`(define-private (read-buff-2 ((bytes (buff 8192)) (pos uint)) (response (buff 2) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (read-buff-2 (bytes (buff 8192)) (pos uint))
	(ok (unwrap! (as-max-len? (unwrap! (slice? bytes pos (+ pos u2)) (err u1)) u2) (err u1))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |

### read-buff-4

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L460)

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

### read-buff-32

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L463)

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

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L466)

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

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L469)

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

### read-uint-64

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L472)

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

### slice

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L475)

`(define-private (slice ((bytes (buff 8192)) (pos uint) (size (optional uint))) (buff 8192))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (slice (bytes (buff 8192)) (pos uint) (size (optional uint)))
	(match (slice? bytes pos (match size value (+ pos value) (len bytes))) b b 0x))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| bytes | (buff 8192) |
| pos | uint |
| size | (optional uint) |

## Maps



## Variables

### governance-data-source

(tuple (emitter-address (buff 32)) (emitter-chain uint))



```clarity
(define-data-var governance-data-source 
	{ emitter-chain: uint, emitter-address: (buff 32) }
	{ emitter-chain: u1, emitter-address: 0x5635979a221c34931e32620b9293a463065555ea71fe97cd6237ade875b12e9e })
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L58)

### prices-data-sources

(list 255 (tuple (emitter-address (buff 32)) (emitter-chain uint)))



```clarity
(define-data-var prices-data-sources 
	(list 255 { emitter-chain: uint, emitter-address: (buff 32) })
	(list
		{ emitter-chain: u1, emitter-address: 0x6bb14509a612f01fbbc4cffeebd4bbfb492a86df717ebe92eb6df432a3f00a25 }
		{ emitter-chain: u26, emitter-address: 0xf8cd23c2ab91237730770bbea08d61005cdda0984348f3f6eecb559638c0bba0 }
		{ emitter-chain: u26, emitter-address: 0xe101faedac5851e32b9b23b5f9411a8c2bac4aae3ed4dd7b811dd1a72ea4aa71 }))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L62)

### fee-value

(tuple (exponent uint) (mantissa uint))



```clarity
(define-data-var fee-value 
	{ mantissa: uint, exponent: uint } 
	{ mantissa: u1, exponent: u0 })
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L69)

### stale-price-threshold

uint



```clarity
(define-data-var stale-price-threshold uint (if is-in-mainnet (* u2 u60 u60) (* u5 u365 u24 u60 u60))) ;; defaults: 2 hours on Mainnet, 5 years on Testnet
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L73)

### fee-recipient-address

principal



```clarity
(define-data-var fee-recipient-address principal (if is-in-mainnet 'SP3CRXBDXQ2N5P7E25Q39MEX1HSMRDSEAP3CFK2Z3 'ST3CRXBDXQ2N5P7E25Q39MEX1HSMRDSEAP1JST19D))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L74)

### last-sequence-processed

uint



```clarity
(define-data-var last-sequence-processed uint u0)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L75)

### current-execution-plan

(tuple (pyth-decoder-contract principal) (pyth-oracle-contract principal) (pyth-storage-contract principal) (wormhole-core-contract principal))

Execution plan management

```clarity
(define-data-var current-execution-plan { 
	pyth-oracle-contract: principal,
	pyth-decoder-contract: principal, 
	pyth-storage-contract: principal,
	wormhole-core-contract: principal
} { 
		pyth-oracle-contract: .pyth-oracle-v4,
		pyth-decoder-contract: .pyth-pnau-decoder-v3, 
		pyth-storage-contract: .pyth-storage-v4,
		wormhole-core-contract: .wormhole-core-v4
})
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L78)

## Constants

### PTGM_MAGIC





```clarity
(define-constant PTGM_MAGIC 0x5054474d) ;; 'PTGM': Pyth Governance Message
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L11)

### PTGM_UPDATE_PYTH_ORACLE_ADDRESS



VAA including some commands for administrating Pyth contract
The oracle contract address must be upgraded

```clarity
(define-constant PTGM_UPDATE_PYTH_ORACLE_ADDRESS 0x00)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L15)

### PTGM_UPDATE_GOVERNANCE_DATA_SOURCE



Authorize governance change

```clarity
(define-constant PTGM_UPDATE_GOVERNANCE_DATA_SOURCE 0x01)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L17)

### PTGM_UPDATE_PRICES_DATA_SOURCES



Which wormhole emitter is allowed to send price updates

```clarity
(define-constant PTGM_UPDATE_PRICES_DATA_SOURCES 0x02)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L19)

### PTGM_UPDATE_FEE



Fee is charged when you submit a new price

```clarity
(define-constant PTGM_UPDATE_FEE 0x03)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L21)

### PTGM_STALE_PRICE_THRESHOLD



Stale price threshold 

```clarity
(define-constant PTGM_STALE_PRICE_THRESHOLD 0x04)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L23)

### PTGM_UPDATE_WORMHOLE_CORE_ADDRESS



Upgrade wormhole contract 

```clarity
(define-constant PTGM_UPDATE_WORMHOLE_CORE_ADDRESS 0x06)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L25)

### PTGM_UPDATE_RECIPIENT_ADDRESS



Special Stacks operation: update recipient address

```clarity
(define-constant PTGM_UPDATE_RECIPIENT_ADDRESS 0xa0)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L27)

### PTGM_UPDATE_PYTH_STORAGE_ADDRESS



Special Stacks operation: update storage contract address

```clarity
(define-constant PTGM_UPDATE_PYTH_STORAGE_ADDRESS 0xa1)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L29)

### PTGM_UPDATE_PYTH_DECODER_ADDRESS



Special Stacks operation: update decoder contract address

```clarity
(define-constant PTGM_UPDATE_PYTH_DECODER_ADDRESS 0xa2)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L31)

### EXPECTED_CHAIN_ID



Stacks chain id attributed by Pyth

```clarity
(define-constant EXPECTED_CHAIN_ID (if is-in-mainnet 0xea86 0xc377))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L33)

### EXPECTED_MODULE



Stacks module id attributed by Pyth

```clarity
(define-constant EXPECTED_MODULE 0x03)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L35)

### SIZE_OF_EMITTER_DATA



Emitter data size

```clarity
(define-constant SIZE_OF_EMITTER_DATA u34)
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L37)

### ERR_UNEXPECTED_ACTION



Error unexpected action

```clarity
(define-constant ERR_UNEXPECTED_ACTION (err u4001))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L40)

### ERR_INVALID_ACTION_PAYLOAD



Error unexpected action

```clarity
(define-constant ERR_INVALID_ACTION_PAYLOAD (err u4002))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L42)

### ERR_UNAUTHORIZED_ACCESS



Error unauthorized control flow

```clarity
(define-constant ERR_UNAUTHORIZED_ACCESS (err u4003))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L44)

### ERR_OUTDATED



Error outdated action

```clarity
(define-constant ERR_OUTDATED (err u4004))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L46)

### ERR_UNAUTHORIZED_UPDATE



Error unauthorized update

```clarity
(define-constant ERR_UNAUTHORIZED_UPDATE (err u4005))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L48)

### ERR_INVALID_PTGM



Error parsing PTGM

```clarity
(define-constant ERR_INVALID_PTGM (err u4006))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L50)

### ERR_NOT_STANDARD_PRINCIPAL



Error not standard principal

```clarity
(define-constant ERR_NOT_STANDARD_PRINCIPAL (err u4007))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L52)

### ERR_PTGM_CHECK_OVERLAY



Error Ptgm overlay bytes

```clarity
(define-constant ERR_PTGM_CHECK_OVERLAY (err u4008))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L54)

### ERR_INVALID_PRICE_DATA_SOURCES



Error invalid price data source

```clarity
(define-constant ERR_INVALID_PRICE_DATA_SOURCES (err u4009))
```

[View in file](../../contracts/pyth/contracts/pyth-governance-v3.clar#L56)
  