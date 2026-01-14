
# dao-executor

[`dao-executor.clar`](../../contracts/dao/dao-executor.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

dao-executor

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

**Public functions:**

- [`set-impl`](#set-impl)
- [`init`](#init)
- [`execute-proposal`](#execute-proposal)

**Read-only functions:**

- [`get-impl`](#get-impl)

**Private functions:**

- [`check-impl-auth`](#check-impl-auth)

**Maps**



**Variables**

- [`impl`](#impl)

**Constants**

- [`DEPLOYER`](#deployer)
- [`ERR-AUTH`](#err-auth)
- [`ERR-INIT`](#err-init)


## Functions

### check-impl-auth

[View in file](../../contracts/dao/dao-executor.clar#L35)

`(define-private (check-impl-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-impl-auth)
  (ok (asserts! (is-eq (some contract-caller) (var-get impl)) ERR-AUTH)))
```
</details>




### get-impl

[View in file](../../contracts/dao/dao-executor.clar#L44)

`(define-read-only (get-impl () (response (optional principal) none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-impl)
  (ok (var-get impl)))
```
</details>




### set-impl

[View in file](../../contracts/dao/dao-executor.clar#L53)

`(define-public (set-impl ((new-impl principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-impl (new-impl principal))
  (begin
    (try! (check-impl-auth))
    (var-set impl (some new-impl))
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-impl | principal |

### init

[View in file](../../contracts/dao/dao-executor.clar#L61)

`(define-public (init ((new-impl principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (init (new-impl principal))
  (begin
    (asserts! (is-eq contract-caller DEPLOYER) ERR-INIT)
    (asserts! (is-none (var-get impl)) ERR-INIT)
    (var-set impl (some new-impl))
    (ok true)
  ))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-impl | principal |

### execute-proposal

[View in file](../../contracts/dao/dao-executor.clar#L71)

`(define-public (execute-proposal ((script trait_reference)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute-proposal (script <proposal-script>))
  (begin
    (try! (check-impl-auth))
    (try! (as-contract? ((with-all-assets-unsafe))
      (try! (contract-call? script execute))
      true))
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| script | trait_reference |

## Maps



## Variables

### impl

(optional principal)

============================================================================
DATA VARS
============================================================================

```clarity
(define-data-var impl (optional principal) none)
```

[View in file](../../contracts/dao/dao-executor.clar#L27)

## Constants

### DEPLOYER



-- Deployer

```clarity
(define-constant DEPLOYER tx-sender)
```

[View in file](../../contracts/dao/dao-executor.clar#L16)

### ERR-AUTH



============================================================================
ERRORS (200xxx prefix for dao-executor)
============================================================================

```clarity
(define-constant ERR-AUTH (err u200001))
```

[View in file](../../contracts/dao/dao-executor.clar#L21)

### ERR-INIT





```clarity
(define-constant ERR-INIT (err u200002))
```

[View in file](../../contracts/dao/dao-executor.clar#L22)
  