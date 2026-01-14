
# dao-multisig

[`dao-multisig.clar`](../../contracts/dao/dao-multisig.clar)

============================================================================

dao-multisig

============================================================================

Multisig governance contract for DAO proposal management.

Manages signers, approval thresholds, and proposal execution with timelocks.

**Public functions:**

- [`init`](#init)
- [`add-signer`](#add-signer)
- [`remove-signer`](#remove-signer)
- [`set-threshold`](#set-threshold)
- [`set-default-expiry-duration`](#set-default-expiry-duration)
- [`schedule-impl-update`](#schedule-impl-update)
- [`execute-impl-update`](#execute-impl-update)
- [`cancel-impl-update`](#cancel-impl-update)
- [`propose`](#propose)
- [`approve`](#approve)
- [`execute`](#execute)

**Read-only functions:**

- [`get-threshold`](#get-threshold)
- [`get-signer-count`](#get-signer-count)
- [`get-nonce`](#get-nonce)
- [`is-signer`](#is-signer)
- [`get-proposal`](#get-proposal)
- [`get-approval-count`](#get-approval-count)
- [`has-approved`](#has-approved)
- [`get-pending-impl-update`](#get-pending-impl-update)

**Private functions:**

- [`check-dao-auth`](#check-dao-auth)
- [`check-signer-auth`](#check-signer-auth)
- [`set-signer`](#set-signer)

**Maps**

- [`signers`](#signers)
- [`proposals`](#proposals)

**Variables**

- [`threshold`](#threshold)
- [`signer-count`](#signer-count)
- [`nonce`](#nonce)
- [`default-expiry-duration`](#default-expiry-duration)
- [`pending-impl-update`](#pending-impl-update)

**Constants**

- [`DEPLOYER`](#deployer)
- [`MAX-SIGNERS`](#max-signers)
- [`TIMELOCK`](#timelock)
- [`IMPL-UPDATE-TIMELOCK`](#impl-update-timelock)
- [`ERR-DAO`](#err-dao)
- [`ERR-SIGNER`](#err-signer)
- [`ERR-SANITY-SIGNER`](#err-sanity-signer)
- [`ERR-SANITY-PROPOSAL`](#err-sanity-proposal)
- [`ERR-PROPOSAL-EXPIRED`](#err-proposal-expired)
- [`ERR-IMPL-UPDATE-PENDING`](#err-impl-update-pending)
- [`ERR-IMPL-UPDATE-NOT-READY`](#err-impl-update-not-ready)


## Functions

### check-dao-auth

[View in file](../../contracts/dao/dao-multisig.clar#L69)

`(define-private (check-dao-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-DAO)))
```
</details>




### check-signer-auth

[View in file](../../contracts/dao/dao-multisig.clar#L72)

`(define-private (check-signer-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-signer-auth)
  (ok (asserts! (is-signer tx-sender) ERR-SIGNER)))
```
</details>




### set-signer

[View in file](../../contracts/dao/dao-multisig.clar#L77)

`(define-private (set-signer ((signer principal)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (set-signer (signer principal))
  (unwrap-panic 
    (if (map-insert signers signer true)
        (ok true)
        (err ERR-SANITY-SIGNER))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| signer | principal |

### get-threshold

[View in file](../../contracts/dao/dao-multisig.clar#L89)

`(define-read-only (get-threshold () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-threshold)
  (var-get threshold))
```
</details>




### get-signer-count

[View in file](../../contracts/dao/dao-multisig.clar#L92)

`(define-read-only (get-signer-count () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-signer-count)
  (var-get signer-count))
```
</details>




### get-nonce

[View in file](../../contracts/dao/dao-multisig.clar#L95)

`(define-read-only (get-nonce () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-nonce)
  (var-get nonce))
```
</details>




### is-signer

[View in file](../../contracts/dao/dao-multisig.clar#L98)

`(define-read-only (is-signer ((addr principal)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (is-signer (addr principal))
  (default-to false (map-get? signers addr)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| addr | principal |

### get-proposal

[View in file](../../contracts/dao/dao-multisig.clar#L103)

`(define-read-only (get-proposal ((id uint)) (optional (tuple (approvals (list 20 principal)) (created-at uint) (executed bool) (expires-at uint) (script principal) (urgent bool))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-proposal (id uint))
  (map-get? proposals id))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |

### get-approval-count

[View in file](../../contracts/dao/dao-multisig.clar#L106)

`(define-read-only (get-approval-count ((id uint)) (optional uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-approval-count (id uint))
  (match (map-get? proposals id)
    proposal (some (len (get approvals proposal)))
    none))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |

### has-approved

[View in file](../../contracts/dao/dao-multisig.clar#L111)

`(define-read-only (has-approved ((signer principal) (id uint)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (has-approved (signer principal) (id uint))
  (match (map-get? proposals id)
    proposal (is-some (index-of (get approvals proposal) signer))
    false))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| signer | principal |
| id | uint |

### get-pending-impl-update

[View in file](../../contracts/dao/dao-multisig.clar#L118)

`(define-read-only (get-pending-impl-update () (optional (tuple (new-impl principal) (scheduled-at uint))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-pending-impl-update)
  (var-get pending-impl-update))
```
</details>




### init

[View in file](../../contracts/dao/dao-multisig.clar#L127)

`(define-public (init ((signer-list (list 20 principal)) (new-threshold uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (init (signer-list (list 20 principal)) (new-threshold uint))
  (begin
    (asserts! 
      (and
        (is-eq DEPLOYER tx-sender)
        (> new-threshold u0)
        (<= new-threshold (len signer-list))
        (is-eq (var-get threshold) u0))
      ERR-SANITY-SIGNER)
    
    (map set-signer signer-list)
    (var-set threshold new-threshold)
    (var-set signer-count (len signer-list))
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| signer-list | (list 20 principal) |
| new-threshold | uint |

### add-signer

[View in file](../../contracts/dao/dao-multisig.clar#L144)

`(define-public (add-signer ((addr principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (add-signer (addr principal))
  (begin
    (try! (check-dao-auth))
    (asserts! (not (is-signer addr)) ERR-SANITY-SIGNER)
    (asserts! (< (var-get signer-count) MAX-SIGNERS) ERR-SANITY-SIGNER)
    (map-set signers addr true)
    (var-set signer-count (+ (var-get signer-count) u1))
    
    (print {
      action: "dao-add-signer",
      caller: tx-sender,
      data: {
        signer: addr,
        signers-count: (var-get signer-count),
        threshold: (var-get threshold)
      }
    })
    
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| addr | principal |

### remove-signer

[View in file](../../contracts/dao/dao-multisig.clar#L164)

`(define-public (remove-signer ((addr principal)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (remove-signer (addr principal))
  (let ((count (var-get signer-count))
        (current-threshold (var-get threshold)))
    (try! (check-dao-auth))
    (asserts! (is-signer addr) ERR-SANITY-SIGNER)
    (asserts! (> count u1) ERR-SANITY-SIGNER)
    (asserts! (>= (- count u1) current-threshold) ERR-SANITY-SIGNER)
    (map-delete signers addr)
    (var-set signer-count (- count u1))
    
    (print {
      action: "dao-remove-signer",
      caller: tx-sender,
      data: {
        signer: addr,
        signers-count: (- count u1),
        threshold: current-threshold
      }
    })
    
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| addr | principal |

### set-threshold

[View in file](../../contracts/dao/dao-multisig.clar#L186)

`(define-public (set-threshold ((new-threshold uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-threshold (new-threshold uint))
  (begin
    (try! (check-dao-auth))
    (asserts! (> new-threshold u0) ERR-SANITY-SIGNER)
    (asserts! (<= new-threshold (var-get signer-count)) ERR-SANITY-SIGNER)
    
    (print {
      action: "dao-set-threshold",
      caller: tx-sender,
      data: {
        old-threshold: (var-get threshold),
        new-threshold: new-threshold,
        signers-count: (var-get signer-count)
      }
    })
    
    (var-set threshold new-threshold)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-threshold | uint |

### set-default-expiry-duration

[View in file](../../contracts/dao/dao-multisig.clar#L205)

`(define-public (set-default-expiry-duration ((duration uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (set-default-expiry-duration (duration uint))
  (begin
    (try! (check-dao-auth))
    (asserts! (>= duration TIMELOCK) ERR-SANITY-PROPOSAL)
    
    (print {
      action: "dao-set-default-expiry-duration",
      caller: tx-sender,
      data: {
        old-duration: (var-get default-expiry-duration),
        new-duration: duration
      }
    })
    
    (var-set default-expiry-duration duration)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| duration | uint |

### schedule-impl-update

[View in file](../../contracts/dao/dao-multisig.clar#L225)

`(define-public (schedule-impl-update ((new-impl principal)) (response bool uint))`

Step 1: Schedule impl update (requires DAO auth via proposal)

<details>
  <summary>Source code:</summary>

```clarity
(define-public (schedule-impl-update (new-impl principal))
  (begin
    (try! (check-dao-auth))
    (asserts! (is-none (var-get pending-impl-update)) ERR-IMPL-UPDATE-PENDING)
    (var-set pending-impl-update 
      (some { new-impl: new-impl, scheduled-at: stacks-block-time }))
    
    (print {
      action: "dao-schedule-impl-update",
      caller: tx-sender,
      data: {
        new-impl: new-impl,
        scheduled-at: stacks-block-time,
        executable-at: (+ stacks-block-time IMPL-UPDATE-TIMELOCK)
      }
    })
    
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-impl | principal |

### execute-impl-update

[View in file](../../contracts/dao/dao-multisig.clar#L245)

`(define-public (execute-impl-update () (response bool uint))`

Step 2: Execute after timelock (requires DAO auth via second proposal)

<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute-impl-update)
  (let ((update (unwrap! (var-get pending-impl-update) ERR-SANITY-PROPOSAL)))
    (try! (check-dao-auth))
    (asserts! (>= stacks-block-time 
                  (+ (get scheduled-at update) IMPL-UPDATE-TIMELOCK))
              ERR-IMPL-UPDATE-NOT-READY)
    (try! (contract-call? .dao-executor set-impl (get new-impl update)))
    (var-set pending-impl-update none)
    
    (print {
      action: "dao-execute-impl-update",
      caller: tx-sender,
      data: {
        new-impl: (get new-impl update),
        executed-at: stacks-block-time
      }
    })
    
    (ok true)))
```
</details>




### cancel-impl-update

[View in file](../../contracts/dao/dao-multisig.clar#L266)

`(define-public (cancel-impl-update () (response bool uint))`

Cancel pending impl update (requires DAO auth via proposal)

<details>
  <summary>Source code:</summary>

```clarity
(define-public (cancel-impl-update)
  (begin
    (try! (check-dao-auth))
    (asserts! (is-some (var-get pending-impl-update)) ERR-SANITY-PROPOSAL)
    
    (print {
      action: "dao-cancel-impl-update",
      caller: tx-sender,
      data: {
        cancelled-impl: (get new-impl (unwrap-panic (var-get pending-impl-update)))
      }
    })
    
    (var-set pending-impl-update none)
    (ok true)))
```
</details>




### propose

[View in file](../../contracts/dao/dao-multisig.clar#L284)

`(define-public (propose ((script principal) (urgent bool)) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (propose (script principal) (urgent bool))
  (let ((id (var-get nonce))
        (now stacks-block-time)
        (expiry (+ now (var-get default-expiry-duration))))
    (try! (check-signer-auth))
    
    (map-set proposals
             id
             {
               script: script,
               approvals: (list tx-sender),
               executed: false,
               created-at: now,
               urgent: urgent,
               expires-at: expiry
             })
    (var-set nonce (+ id u1))
    (ok id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| script | principal |
| urgent | bool |

### approve

[View in file](../../contracts/dao/dao-multisig.clar#L303)

`(define-public (approve ((id uint)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (approve (id uint))
  (let ((proposal   (unwrap-panic (map-get? proposals id)))
        (approvals  (get approvals proposal))
        (napprovals (unwrap-panic (as-max-len? (append approvals tx-sender) u20))))
    (try! (check-signer-auth))

    ;; Check expiration first (fail-fast)
    (asserts! (< stacks-block-time (get expires-at proposal)) ERR-PROPOSAL-EXPIRED)

    (asserts! (and
        (not (get executed proposal))
        (is-none (index-of approvals tx-sender))) 
      ERR-SANITY-PROPOSAL)
    
    (map-set proposals id (merge proposal { approvals: napprovals }))
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |

### execute

[View in file](../../contracts/dao/dao-multisig.clar#L320)

`(define-public (execute ((id uint) (script trait_reference)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute (id uint) (script <proposal-script>))
  (let ((proposal (unwrap-panic (map-get? proposals id)))
        (created-at (get created-at proposal))
        (expires-at (get expires-at proposal))
        (mature-at (+ created-at TIMELOCK))
        (current-threshold (var-get threshold))
        (approvals (len (get approvals proposal))))
    (try! (check-signer-auth))

    ;; check expiration
    (asserts! (< stacks-block-time expires-at) ERR-PROPOSAL-EXPIRED)

    (asserts! 
      (and
        (not (get executed proposal))
        (is-eq (contract-of script) (get script proposal))
        (>= approvals current-threshold)
        (or
          (>= stacks-block-time mature-at)
          (get urgent proposal)))
      ERR-SANITY-PROPOSAL)

    (map-set proposals id (merge proposal { executed: true }))
    (contract-call? .dao-executor execute-proposal script)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| script | trait_reference |

## Maps

### signers



```clarity
(define-map signers principal bool)
```

[View in file](../../contracts/dao/dao-multisig.clar#L50)

### proposals



```clarity
(define-map proposals
            uint
            {
              script: principal,
              approvals: (list 20 principal),
              executed: bool,
              created-at: uint,
              urgent: bool,
              expires-at: uint
            })
```

[View in file](../../contracts/dao/dao-multisig.clar#L52)

## Variables

### threshold

uint



```clarity
(define-data-var threshold uint u0)
```

[View in file](../../contracts/dao/dao-multisig.clar#L38)

### signer-count

uint



```clarity
(define-data-var signer-count uint u0)
```

[View in file](../../contracts/dao/dao-multisig.clar#L39)

### nonce

uint



```clarity
(define-data-var nonce uint u0)
```

[View in file](../../contracts/dao/dao-multisig.clar#L40)

### default-expiry-duration

uint



```clarity
(define-data-var default-expiry-duration uint u2592000)  ;; 30 days in seconds
```

[View in file](../../contracts/dao/dao-multisig.clar#L41)

### pending-impl-update

(optional (tuple (new-impl principal) (scheduled-at uint)))



```clarity
(define-data-var pending-impl-update 
  (optional { new-impl: principal, scheduled-at: uint }) 
  none)
```

[View in file](../../contracts/dao/dao-multisig.clar#L42)

## Constants

### DEPLOYER





```clarity
(define-constant DEPLOYER tx-sender)
```

[View in file](../../contracts/dao/dao-multisig.clar#L17)

### MAX-SIGNERS





```clarity
(define-constant MAX-SIGNERS u20)
```

[View in file](../../contracts/dao/dao-multisig.clar#L18)

### TIMELOCK





```clarity
(define-constant TIMELOCK u86400)                   ;; 1 day in seconds
```

[View in file](../../contracts/dao/dao-multisig.clar#L19)

### IMPL-UPDATE-TIMELOCK





```clarity
(define-constant IMPL-UPDATE-TIMELOCK u604800)      ;; 7 days in seconds
```

[View in file](../../contracts/dao/dao-multisig.clar#L20)

### ERR-DAO





```clarity
(define-constant ERR-DAO (err u100001))
```

[View in file](../../contracts/dao/dao-multisig.clar#L26)

### ERR-SIGNER





```clarity
(define-constant ERR-SIGNER (err u100002))
```

[View in file](../../contracts/dao/dao-multisig.clar#L27)

### ERR-SANITY-SIGNER





```clarity
(define-constant ERR-SANITY-SIGNER (err u100003))
```

[View in file](../../contracts/dao/dao-multisig.clar#L28)

### ERR-SANITY-PROPOSAL





```clarity
(define-constant ERR-SANITY-PROPOSAL (err u100004))
```

[View in file](../../contracts/dao/dao-multisig.clar#L29)

### ERR-PROPOSAL-EXPIRED





```clarity
(define-constant ERR-PROPOSAL-EXPIRED (err u100005))
```

[View in file](../../contracts/dao/dao-multisig.clar#L30)

### ERR-IMPL-UPDATE-PENDING





```clarity
(define-constant ERR-IMPL-UPDATE-PENDING (err u100006))
```

[View in file](../../contracts/dao/dao-multisig.clar#L31)

### ERR-IMPL-UPDATE-NOT-READY





```clarity
(define-constant ERR-IMPL-UPDATE-NOT-READY (err u100007))
```

[View in file](../../contracts/dao/dao-multisig.clar#L32)
  