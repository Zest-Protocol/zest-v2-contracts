
# egroup

[`egroup.clar`](../../contracts/registry/egroup.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

egroup

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

**Public functions:**

- [`insert`](#insert)
- [`update`](#update)

**Read-only functions:**

- [`get-nonce`](#get-nonce)
- [`lookup`](#lookup)
- [`get-popbucket`](#get-popbucket)
- [`get-bucket`](#get-bucket)
- [`get-reverse`](#get-reverse)
- [`serialize-and-validate-input`](#serialize-and-validate-input)
- [`resolve`](#resolve)
- [`find`](#find)

**Private functions:**

- [`uint-to-buff1`](#uint-to-buff1)
- [`uint-to-buff2`](#uint-to-buff2)
- [`population`](#population)
- [`iter-population`](#iter-population)
- [`subset`](#subset)
- [`filter-u128`](#filter-u128)
- [`iter-filter-u128`](#iter-filter-u128)
- [`check-dao-auth`](#check-dao-auth)
- [`increment`](#increment)
- [`check-egroup-invariant`](#check-egroup-invariant)
- [`validate-superset-invariant`](#validate-superset-invariant)
- [`insert-bucket`](#insert-bucket)
- [`remove-bucket`](#remove-bucket)
- [`iter-find`](#iter-find)
- [`active`](#active)
- [`iter-active`](#iter-active)
- [`find-superset`](#find-superset)
- [`iter-find-superset`](#iter-find-superset)

**Maps**

- [`reverse`](#reverse)
- [`registry`](#registry)
- [`buckets`](#buckets)

**Variables**

- [`nonce`](#nonce)
- [`popbucket`](#popbucket)

**Constants**

- [`U128-BUFF-LEN`](#u128-buff-len)
- [`U8-BUFF-OFFSET`](#u8-buff-offset)
- [`U16-BUFF-OFFSET`](#u16-buff-offset)
- [`ITER-UINT-128`](#iter-uint-128)
- [`BPS`](#bps)
- [`MAX`](#max)
- [`MAX-FACTOR-MUL`](#max-factor-mul)
- [`MAX-FACTOR-DENOM`](#max-factor-denom)
- [`MAX-U128`](#max-u128)
- [`ERR-AUTH`](#err-auth)
- [`ERR-ALREADY-REGISTERED`](#err-already-registered)
- [`ERR-LIQ-PARAMS-INVALID`](#err-liq-params-invalid)
- [`ERR-LIMIT-REACHED`](#err-limit-reached)
- [`ERR-MASK-UPDATE-FAILED`](#err-mask-update-failed)
- [`ERR-SUPERSET-INVARIANT-VIOLATION`](#err-superset-invariant-violation)
- [`ERR-NO-EGROUP-FOUND`](#err-no-egroup-found)


## Functions

### uint-to-buff1

[View in file](../../contracts/registry/egroup.clar#L69)

`(define-private (uint-to-buff1 ((v uint)) (buff 1))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (uint-to-buff1 (v uint))
  (let ((check (unwrap-panic (if (< v u256) (ok true) (err u1))))
        (as-buff (unwrap-panic (to-consensus-buff? v)))
        (ss (unwrap-panic (slice? as-buff U8-BUFF-OFFSET U128-BUFF-LEN))))
    (unwrap-panic (as-max-len? ss u1))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| v | uint |

### uint-to-buff2

[View in file](../../contracts/registry/egroup.clar#L75)

`(define-private (uint-to-buff2 ((v uint)) (buff 2))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (uint-to-buff2 (v uint))
  (let ((check (unwrap-panic (if (< v u65536) (ok true) (err u1))))
        (as-buff (unwrap-panic (to-consensus-buff? v)))
        (ss (unwrap-panic (slice? as-buff U16-BUFF-OFFSET U128-BUFF-LEN))))
    (unwrap-panic (as-max-len? ss u2))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| v | uint |

### population

[View in file](../../contracts/registry/egroup.clar#L81)

`(define-private (population ((v uint)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (population (v uint))
  (let ((init { c: u0, v: v })
        (out (fold iter-population ITER-UINT-128 init)))
    (get c out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| v | uint |

### iter-population

[View in file](../../contracts/registry/egroup.clar#L86)

`(define-private (iter-population ((iter uint) (acc (tuple (c uint) (v uint)))) (tuple (c uint) (v uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-population (iter uint) (acc {c: uint, v: uint}))
  (let ((v (get v acc))
        (empty? (asserts! (not (is-eq v u0)) acc))
        (c (+ u1 (get c acc)))
        (trail (bit-and v (- v u1)))) ;; flip all trailing 0s && rightmost to 1
    { c: c, v: trail }))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| iter | uint |
| acc | (tuple (c uint) (v uint)) |

### subset

[View in file](../../contracts/registry/egroup.clar#L93)

`(define-private (subset ((sub uint) (super uint)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (subset (sub uint) (super uint))
  (let ((overlap (bit-and sub super)))
    (is-eq sub overlap)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| sub | uint |
| super | uint |

### filter-u128

[View in file](../../contracts/registry/egroup.clar#L97)

`(define-private (filter-u128 ((target uint) (seq (list 128 uint))) (list 128 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (filter-u128 (target uint) (seq (list 128 uint)))
  (let ((init {target: target, result: (list)})
        (out (fold iter-filter-u128 seq init)))
    (get result out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| target | uint |
| seq | (list 128 uint) |

### iter-filter-u128

[View in file](../../contracts/registry/egroup.clar#L102)

`(define-private (iter-filter-u128 ((id uint) (acc (tuple (result (list 128 uint)) (target uint)))) (tuple (result (list 128 uint)) (target uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-filter-u128 (id uint) (acc {target: uint, result: (list 128 uint)}))
  (let ((target (get target acc))
        (match? (asserts! (not (is-eq id target)) acc))
        (result (get result acc))
        (new (as-max-len? (append result id) u128)))
    (merge acc { result: (unwrap-panic new) })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| acc | (tuple (result (list 128 uint)) (target uint)) |

### check-dao-auth

[View in file](../../contracts/registry/egroup.clar#L111)

`(define-private (check-dao-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))
```
</details>




### increment

[View in file](../../contracts/registry/egroup.clar#L116)

`(define-private (increment () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (increment)
  (let ((curr (var-get nonce))
        (next (+ curr u1)))
    (var-set nonce next)
    curr))
```
</details>




### check-egroup-invariant

[View in file](../../contracts/registry/egroup.clar#L127)

`(define-private (check-egroup-invariant ((id uint) (acc (tuple (exclude-id (optional uint)) (max-id uint) (new-ltv-borrow uint) (new-ltv-liq-full uint) (new-ltv-liq-partial uint) (new-mask uint) (valid bool)))) (tuple (exclude-id (optional uint)) (max-id uint) (new-ltv-borrow uint) (new-ltv-liq-full uint) (new-ltv-liq-partial uint) (new-mask uint) (valid bool)))`

Check invariant between new egroup and one existing egroup
Ensures that if egroup B's mask is a superset of egroup A's mask,
then B's LTV values are LOWER OR EQUAL to A's values

<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-egroup-invariant
  (id uint)
  (acc { new-mask: uint,
         new-ltv-borrow: uint,
         new-ltv-liq-partial: uint,
         new-ltv-liq-full: uint,
         exclude-id: (optional uint),
         max-id: uint,
         valid: bool }))

  ;; sanity check
  (if (or (not (get valid acc))
          (>= id (get max-id acc))
          (is-eq (some id) (get exclude-id acc)))
      acc
      ;; check invariant
      (let ((existing (lookup id))
            (existing-mask (get MASK existing))
            (new-mask (get new-mask acc)))

        ;; skip if equal
        (if (is-eq existing-mask new-mask)
            acc
            (let ((existing-ltv-borrow (buff-to-uint-be (get LTV-BORROW existing)))
                  (existing-ltv-liq-partial (buff-to-uint-be (get LTV-LIQ-PARTIAL existing)))
                  (existing-ltv-liq-full (buff-to-uint-be (get LTV-LIQ-FULL existing)))
                  (new-ltv-borrow (get new-ltv-borrow acc))
                  (new-ltv-liq-partial (get new-ltv-liq-partial acc))
                  (new-ltv-liq-full (get new-ltv-liq-full acc))
                  ;; determine relationship
                  (holds
                    (if (subset existing-mask new-mask)
                        ;; new is proper superset | LTVn <= LTVe
                        (and (<= new-ltv-borrow existing-ltv-borrow)
                             (<= new-ltv-liq-partial existing-ltv-liq-partial)
                             (<= new-ltv-liq-full existing-ltv-liq-full))
                        (if (subset new-mask existing-mask)
                            ;; existing is proper superset | LTVn >= LTVe
                            (and (>= new-ltv-borrow existing-ltv-borrow)
                                 (>= new-ltv-liq-partial existing-ltv-liq-partial)
                                 (>= new-ltv-liq-full existing-ltv-liq-full))
                            ;; no subset relationship
                            true))))

              (merge acc { valid: holds }))))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| acc | (tuple (exclude-id (optional uint)) (max-id uint) (new-ltv-borrow uint) (new-ltv-liq-full uint) (new-ltv-liq-partial uint) (new-mask uint) (valid bool)) |

### validate-superset-invariant

[View in file](../../contracts/registry/egroup.clar#L176)

`(define-private (validate-superset-invariant ((new-mask uint) (new-ltv-borrow uint) (new-ltv-liq-partial uint) (new-ltv-liq-full uint) (max-id uint) (exclude-id (optional uint))) (response bool uint))`

Validate superset invariant for a new or updated egroup
For insert: max-id = this (check IDs 0 to this-1), exclude-id = none
For update: max-id = (get-nonce) (check all IDs), exclude-id = (some this)

<details>
  <summary>Source code:</summary>

```clarity
(define-private (validate-superset-invariant
  (new-mask uint)
  (new-ltv-borrow uint)
  (new-ltv-liq-partial uint)
  (new-ltv-liq-full uint)
  (max-id uint)
  (exclude-id (optional uint)))
  
  (let ((result (fold check-egroup-invariant 
                      ITER-UINT-128
                      { new-mask: new-mask,
                        new-ltv-borrow: new-ltv-borrow,
                        new-ltv-liq-partial: new-ltv-liq-partial,
                        new-ltv-liq-full: new-ltv-liq-full,
                        exclude-id: exclude-id,
                        max-id: max-id,
                        valid: true })))
    (asserts! (get valid result) ERR-SUPERSET-INVARIANT-VIOLATION)
    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| new-mask | uint |
| new-ltv-borrow | uint |
| new-ltv-liq-partial | uint |
| new-ltv-liq-full | uint |
| max-id | uint |
| exclude-id | (optional uint) |

### insert-bucket

[View in file](../../contracts/registry/egroup.clar#L198)

`(define-private (insert-bucket ((mask uint)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (insert-bucket (mask uint))
  (let ((upopcount (- (population mask) u1)) ;; >> 1
        (popcount (uint-to-buff1 upopcount))
        (bucket? (map-get? buckets popcount))
        (bucket (default-to (list) bucket?))
        (new (as-max-len? (append bucket mask) u128))
        )
    (map-set buckets popcount (unwrap-panic new))
    (if (is-none bucket?)
        (let ((bmap (var-get popbucket))
              (nbmap (bit-or bmap (pow u2 upopcount))))
          (var-set popbucket nbmap))
        true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |

### remove-bucket

[View in file](../../contracts/registry/egroup.clar#L212)

`(define-private (remove-bucket ((mask uint)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (remove-bucket (mask uint))
  (let ((upopcount (- (population mask) u1)) ;; >> 1
        (popcount (uint-to-buff1 upopcount))
        (bucket (unwrap-panic (map-get? buckets popcount))) ;; unreachable
        (bleached (filter-u128 mask bucket)))
    (if (is-eq (len bleached) u0)
          (let ((bmap (var-get popbucket))
                (nbmap (bit-and bmap (bit-not (pow u2 upopcount)))))
            (map-delete buckets popcount)
            (var-set popbucket nbmap))
        (map-set buckets popcount bleached))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |

### iter-find

[View in file](../../contracts/registry/egroup.clar#L226)

`(define-private (iter-find ((pop uint) (acc (tuple (result (optional uint)) (target uint)))) (tuple (result (optional uint)) (target uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-find (pop uint) (acc {target: uint, result: (optional uint)}))
  (let ((res (get result acc)))
    (if (is-some res)
        ;; Already found an egroup - return early
        acc
        ;; Still searching - check this bucket
        (let ((pop-b1 (uint-to-buff1 pop))
              (bucket (unwrap-panic (map-get? buckets pop-b1)))
              (tgt (get target acc))
              (found (find-superset tgt bucket)))
          (merge acc { result: found })))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| pop | uint |
| acc | (tuple (result (optional uint)) (target uint)) |

### active

[View in file](../../contracts/registry/egroup.clar#L238)

`(define-private (active ((min uint)) (list 128 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (active (min uint))
  (let ((init {bitmap: (var-get popbucket), min: min, result: (list)})
        (out (fold iter-active
                    ITER-UINT-128
                    init)))
    (get result out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| min | uint |

### iter-active

[View in file](../../contracts/registry/egroup.clar#L245)

`(define-private (iter-active ((pos uint) (acc (tuple (bitmap uint) (min uint) (result (list 128 uint))))) (tuple (bitmap uint) (min uint) (result (list 128 uint))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-active (pos uint) (acc {bitmap: uint, min: uint, result: (list 128 uint)}))
  ;; abs is the 1-based rep of pos in the bitmap (represents population count)
  ;; pos is the bucket index (0-based)
  (let ((abs (+ pos u1))
        (bmap (get bitmap acc))
        (min (get min acc))
        (actv (> (bit-and bmap (pow u2 pos)) u0))
        (bounds (>= abs min)))
    (if (and actv bounds)
        ;; Bucket exists AND meets population requirement - include it
        ;; Return bucket INDEX (pos), not population count (abs)
        (let ((result (get result acc))
              (new (as-max-len? (append result pos) u128)))
          (merge acc { result: (unwrap-panic new) }))
        ;; Skip this bucket
        acc)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| pos | uint |
| acc | (tuple (bitmap uint) (min uint) (result (list 128 uint))) |

### find-superset

[View in file](../../contracts/registry/egroup.clar#L262)

`(define-private (find-superset ((target uint) (masks (list 128 uint))) (optional uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (find-superset (target uint) (masks (list 128 uint)))
  (let ((init { target: target, result: none })
        (out (fold iter-find-superset masks init)))
    (get result out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| target | uint |
| masks | (list 128 uint) |

### iter-find-superset

[View in file](../../contracts/registry/egroup.clar#L267)

`(define-private (iter-find-superset ((mask uint) (acc (tuple (result (optional uint)) (target uint)))) (tuple (result (optional uint)) (target uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-find-superset (mask uint) (acc {target: uint, result: (optional uint)}))
  (let ((res (get result acc)))
    (if (is-some res)
        ;; Already found a match - return early
        acc
        ;; Check if this mask matches
        (let ((target (get target acc)))
          (if (subset target mask)
              ;; Match found - return egroup ID
              (let ((id (unwrap-panic (map-get? reverse mask))))
                (merge acc { result: (some (buff-to-uint-be id)) }))
              ;; Not a match - skip
              acc)))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |
| acc | (tuple (result (optional uint)) (target uint)) |

### get-nonce

[View in file](../../contracts/registry/egroup.clar#L287)

`(define-read-only (get-nonce () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-nonce) (ok (var-get nonce)))
```
</details>




### lookup

[View in file](../../contracts/registry/egroup.clar#L291)

`(define-read-only (lookup ((id uint)) (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP (buff 2)) (LIQ-PENALTY-MAX (buff 2)) (LIQ-PENALTY-MIN (buff 2)) (LTV-BORROW (buff 2)) (LTV-LIQ-FULL (buff 2)) (LTV-LIQ-PARTIAL (buff 2)) (MASK uint) (id (buff 1))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (lookup (id uint))
  (unwrap-panic (map-get? registry (uint-to-buff1 id))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |

### get-popbucket

[View in file](../../contracts/registry/egroup.clar#L294)

`(define-read-only (get-popbucket () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-popbucket)
  (var-get popbucket))
```
</details>




### get-bucket

[View in file](../../contracts/registry/egroup.clar#L297)

`(define-read-only (get-bucket ((pop-b1 (buff 1))) (optional (list 128 uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-bucket (pop-b1 (buff 1)))
  (map-get? buckets pop-b1))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| pop-b1 | (buff 1) |

### get-reverse

[View in file](../../contracts/registry/egroup.clar#L300)

`(define-read-only (get-reverse ((mask uint)) (optional (buff 1)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-reverse (mask uint))
  (map-get? reverse mask))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |

### serialize-and-validate-input

[View in file](../../contracts/registry/egroup.clar#L305)

`(define-read-only (serialize-and-validate-input ((this uint) (args (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP uint) (LIQ-PENALTY-MAX uint) (LIQ-PENALTY-MIN uint) (LTV-BORROW uint) (LTV-LIQ-FULL uint) (LTV-LIQ-PARTIAL uint) (MASK uint)))) (response (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP (buff 2)) (LIQ-PENALTY-MAX (buff 2)) (LIQ-PENALTY-MIN (buff 2)) (LTV-BORROW (buff 2)) (LTV-LIQ-FULL (buff 2)) (LTV-LIQ-PARTIAL (buff 2)) (MASK uint) (id (buff 1))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (serialize-and-validate-input
                (this uint)
                (args {
                  MASK: uint,
                  BORROW-DISABLED-MASK: uint,
                  LIQ-CURVE-EXP: uint,
                  LIQ-PENALTY-MIN: uint,
                  LIQ-PENALTY-MAX: uint,
                  LTV-BORROW: uint,
                  LTV-LIQ-PARTIAL: uint,
                  LTV-LIQ-FULL: uint,
                }))
  (let ((id (uint-to-buff1 this))
        (MASK (get MASK args))
        (BORROW-DISABLED-MASK (get BORROW-DISABLED-MASK args))
        (LIQ-CURVE-EXP (get LIQ-CURVE-EXP args))
        (LIQ-PENALTY-MIN (get LIQ-PENALTY-MIN args))
        (LIQ-PENALTY-MAX (get LIQ-PENALTY-MAX args))
        (LTV-BORROW (get LTV-BORROW args))
        (LTV-LIQ-PARTIAL (get LTV-LIQ-PARTIAL args))
        (LTV-LIQ-FULL (get LTV-LIQ-FULL args))
        (LIQ-CURVE-EXP-B (uint-to-buff2 LIQ-CURVE-EXP))
        (LIQ-PENALTY-MIN-B (uint-to-buff2 LIQ-PENALTY-MIN))
        (LIQ-PENALTY-MAX-B (uint-to-buff2 LIQ-PENALTY-MAX))
        (LTV-BORROW-B (uint-to-buff2 LTV-BORROW))
        (LTV-LIQ-PARTIAL-B (uint-to-buff2 LTV-LIQ-PARTIAL))
        (LTV-LIQ-FULL-B (uint-to-buff2 LTV-LIQ-FULL)))

    (asserts!
      (and
        (>= LIQ-CURVE-EXP MAX-FACTOR-MUL)
        (<= LIQ-CURVE-EXP MAX-FACTOR-DENOM)
        (or (is-eq LIQ-CURVE-EXP u5000)
            (is-eq LIQ-CURVE-EXP BPS)
            (is-eq (mod LIQ-CURVE-EXP BPS) u0))
        (< LIQ-PENALTY-MIN LIQ-PENALTY-MAX)
        (< LIQ-PENALTY-MAX BPS)
        (< LTV-BORROW LTV-LIQ-PARTIAL)
        (< LTV-LIQ-PARTIAL LTV-LIQ-FULL)
        (< LTV-LIQ-FULL BPS))
      ERR-LIQ-PARAMS-INVALID)
    (ok {
      id: id,
      MASK: MASK,
      BORROW-DISABLED-MASK: BORROW-DISABLED-MASK,
      LIQ-CURVE-EXP: LIQ-CURVE-EXP-B,
      LIQ-PENALTY-MIN: LIQ-PENALTY-MIN-B,
      LIQ-PENALTY-MAX: LIQ-PENALTY-MAX-B,
      LTV-BORROW: LTV-BORROW-B,
      LTV-LIQ-PARTIAL: LTV-LIQ-PARTIAL-B,
      LTV-LIQ-FULL: LTV-LIQ-FULL-B,
    })))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| this | uint |
| args | (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP uint) (LIQ-PENALTY-MAX uint) (LIQ-PENALTY-MIN uint) (LTV-BORROW uint) (LTV-LIQ-FULL uint) (LTV-LIQ-PARTIAL uint) (MASK uint)) |

### resolve

[View in file](../../contracts/registry/egroup.clar#L360)

`(define-read-only (resolve ((mask uint)) (response (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP (buff 2)) (LIQ-PENALTY-MAX (buff 2)) (LIQ-PENALTY-MIN (buff 2)) (LTV-BORROW (buff 2)) (LTV-LIQ-FULL (buff 2)) (LTV-LIQ-PARTIAL (buff 2)) (MASK uint) (id (buff 1))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (resolve (mask uint))
  (match (find mask)
    id (ok (lookup id))
    ERR-NO-EGROUP-FOUND))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |

### find

[View in file](../../contracts/registry/egroup.clar#L365)

`(define-read-only (find ((target uint)) (optional uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (find (target uint))
  (let ((min (population target))
        (actv (active min))
        (init {target: target, result: none})
        (out (fold iter-find
                      actv
                      init)))
  (get result out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| target | uint |

### insert

[View in file](../../contracts/registry/egroup.clar#L380)

`(define-public (insert ((args (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP uint) (LIQ-PENALTY-MAX uint) (LIQ-PENALTY-MIN uint) (LTV-BORROW uint) (LTV-LIQ-FULL uint) (LTV-LIQ-PARTIAL uint) (MASK uint)))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (insert
                (args {
                    MASK: uint,
                    BORROW-DISABLED-MASK: uint,
                    LIQ-CURVE-EXP: uint,
                    LIQ-PENALTY-MIN: uint,
                    LIQ-PENALTY-MAX: uint,
                    LTV-BORROW: uint,
                    LTV-LIQ-PARTIAL: uint,
                    LTV-LIQ-FULL: uint,
                  }))
  (let ((this (increment))
        (new (try! (serialize-and-validate-input this args)))
        (id (get id new))
        (MASK (get MASK new)))

    (try! (check-dao-auth))
    (asserts! (<= (+ this u1) MAX) ERR-LIMIT-REACHED)

    (try! (validate-superset-invariant
            MASK
            (get LTV-BORROW args)
            (get LTV-LIQ-PARTIAL args)
            (get LTV-LIQ-FULL args)
            this
            none))  ;; insert: max-id=this (check IDs 0 to this-1), exclude-id=none

    (asserts! (and
        (map-insert registry id new)
        (map-insert reverse MASK id)
        (insert-bucket MASK))
      ERR-ALREADY-REGISTERED)

    (print {
      action: "egroup-insert",
      caller: tx-sender,
      data: {
        egroup-id: this,
        mask: MASK,
        borrow-disabled-mask: (get BORROW-DISABLED-MASK args),
        liq-curve-exp: (get LIQ-CURVE-EXP args),
        liq-penalty-min: (get LIQ-PENALTY-MIN args),
        liq-penalty-max: (get LIQ-PENALTY-MAX args),
        ltv-borrow: (get LTV-BORROW args),
        ltv-liq-partial: (get LTV-LIQ-PARTIAL args),
        ltv-liq-full: (get LTV-LIQ-FULL args)
      }
    })

    (ok this)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| args | (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP uint) (LIQ-PENALTY-MAX uint) (LIQ-PENALTY-MIN uint) (LTV-BORROW uint) (LTV-LIQ-FULL uint) (LTV-LIQ-PARTIAL uint) (MASK uint)) |

### update

[View in file](../../contracts/registry/egroup.clar#L431)

`(define-public (update ((this uint) (params (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP uint) (LIQ-PENALTY-MAX uint) (LIQ-PENALTY-MIN uint) (LTV-BORROW uint) (LTV-LIQ-FULL uint) (LTV-LIQ-PARTIAL uint) (MASK uint)))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update
                (this uint)
                (params {
                    MASK: uint,
                    BORROW-DISABLED-MASK: uint,
                    LIQ-CURVE-EXP: uint,
                    LIQ-PENALTY-MIN: uint,
                    LIQ-PENALTY-MAX: uint,
                    LTV-BORROW: uint,
                    LTV-LIQ-PARTIAL: uint,
                    LTV-LIQ-FULL: uint,
                  }))
  (let ((prev (lookup this))
        (id (get id prev))
        (new (try! (serialize-and-validate-input this params)))
        (prev-MASK (get MASK prev))
        (new-MASK (get MASK new)))

    (try! (check-dao-auth))        

    (try! (validate-superset-invariant
            new-MASK
            (get LTV-BORROW params)
            (get LTV-LIQ-PARTIAL params)
            (get LTV-LIQ-FULL params)
            (var-get nonce)
            (some this)))  ;; update: max-id=(var-get nonce) (check all IDs), exclude-id=(some this)

    (map-set registry id new)
    (asserts! (and
        (map-delete reverse prev-MASK)
        (remove-bucket prev-MASK)
      ) ERR-MASK-UPDATE-FAILED)

    (asserts! (and
        (map-insert reverse new-MASK id)
        (insert-bucket new-MASK))
      ERR-ALREADY-REGISTERED)

    (print {
      action: "egroup-update",
      caller: tx-sender,
      data: {
        egroup-id: this,
        mask-before: prev-MASK,
        mask-after: new-MASK,
        borrow-disabled-mask: (get BORROW-DISABLED-MASK params),
        liq-curve-exp: (get LIQ-CURVE-EXP params),
        liq-penalty-min: (get LIQ-PENALTY-MIN params),
        liq-penalty-max: (get LIQ-PENALTY-MAX params),
        ltv-borrow: (get LTV-BORROW params),
        ltv-liq-partial: (get LTV-LIQ-PARTIAL params),
        ltv-liq-full: (get LTV-LIQ-FULL params)
      }
    })

    (ok true)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| this | uint |
| params | (tuple (BORROW-DISABLED-MASK uint) (LIQ-CURVE-EXP uint) (LIQ-PENALTY-MAX uint) (LIQ-PENALTY-MIN uint) (LTV-BORROW uint) (LTV-LIQ-FULL uint) (LTV-LIQ-PARTIAL uint) (MASK uint)) |

## Maps

### reverse

-- mask -> id

```clarity
(define-map reverse uint (buff 1))
```

[View in file](../../contracts/registry/egroup.clar#L44)

### registry

-- id -> group

```clarity
(define-map registry (buff 1)
    {
      id: (buff 1),
      MASK: uint,
      BORROW-DISABLED-MASK: uint,
      LIQ-CURVE-EXP: (buff 2),
      LIQ-PENALTY-MIN: (buff 2),
      LIQ-PENALTY-MAX: (buff 2),
      LTV-BORROW: (buff 2),
      LTV-LIQ-PARTIAL: (buff 2),
      LTV-LIQ-FULL: (buff 2),
    })
```

[View in file](../../contracts/registry/egroup.clar#L47)

### buckets

-- population buckets (stack order)

```clarity
(define-map buckets (buff 1) (list 128 uint))
```

[View in file](../../contracts/registry/egroup.clar#L61)

## Variables

### nonce

uint

============================================================================
DATA VARS
============================================================================

```clarity
(define-data-var nonce uint u0)
```

[View in file](../../contracts/registry/egroup.clar#L36)

### popbucket

uint



```clarity
(define-data-var popbucket uint u0)
```

[View in file](../../contracts/registry/egroup.clar#L37)

## Constants

### U128-BUFF-LEN



-- Pack utilities (bit manipulation & buffer conversion)

```clarity
(define-constant U128-BUFF-LEN u17)
```

[View in file](../../contracts/registry/egroup.clar#L10)

### U8-BUFF-OFFSET





```clarity
(define-constant U8-BUFF-OFFSET u16)
```

[View in file](../../contracts/registry/egroup.clar#L11)

### U16-BUFF-OFFSET





```clarity
(define-constant U16-BUFF-OFFSET u15)
```

[View in file](../../contracts/registry/egroup.clar#L12)

### ITER-UINT-128





```clarity
(define-constant ITER-UINT-128 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63 u64 u65 u66 u67 u68 u69 u70 u71 u72 u73 u74 u75 u76 u77 u78 u79 u80 u81 u82 u83 u84 u85 u86 u87 u88 u89 u90 u91 u92 u93 u94 u95 u96 u97 u98 u99 u100 u101 u102 u103 u104 u105 u106 u107 u108 u109 u110 u111 u112 u113 u114 u115 u116 u117 u118 u119 u120 u121 u122 u123 u124 u125 u126 u127))
```

[View in file](../../contracts/registry/egroup.clar#L13)

### BPS



-- Limits

```clarity
(define-constant BPS u10000)
```

[View in file](../../contracts/registry/egroup.clar#L16)

### MAX





```clarity
(define-constant MAX u128)
```

[View in file](../../contracts/registry/egroup.clar#L17)

### MAX-FACTOR-MUL





```clarity
(define-constant MAX-FACTOR-MUL u5000)  ;; max: exponential
```

[View in file](../../contracts/registry/egroup.clar#L18)

### MAX-FACTOR-DENOM





```clarity
(define-constant MAX-FACTOR-DENOM u40000) ;; min: /4
```

[View in file](../../contracts/registry/egroup.clar#L19)

### MAX-U128





```clarity
(define-constant MAX-U128 u340282366920938463463374607431768211455)
```

[View in file](../../contracts/registry/egroup.clar#L20)

### ERR-AUTH



============================================================================
ERRORS (720xxx prefix for egroup)
============================================================================

```clarity
(define-constant ERR-AUTH (err u720001))
```

[View in file](../../contracts/registry/egroup.clar#L25)

### ERR-ALREADY-REGISTERED





```clarity
(define-constant ERR-ALREADY-REGISTERED (err u720002))
```

[View in file](../../contracts/registry/egroup.clar#L26)

### ERR-LIQ-PARAMS-INVALID





```clarity
(define-constant ERR-LIQ-PARAMS-INVALID (err u720003))
```

[View in file](../../contracts/registry/egroup.clar#L27)

### ERR-LIMIT-REACHED





```clarity
(define-constant ERR-LIMIT-REACHED (err u720004))
```

[View in file](../../contracts/registry/egroup.clar#L28)

### ERR-MASK-UPDATE-FAILED





```clarity
(define-constant ERR-MASK-UPDATE-FAILED (err u720005))
```

[View in file](../../contracts/registry/egroup.clar#L29)

### ERR-SUPERSET-INVARIANT-VIOLATION





```clarity
(define-constant ERR-SUPERSET-INVARIANT-VIOLATION (err u720006))
```

[View in file](../../contracts/registry/egroup.clar#L30)

### ERR-NO-EGROUP-FOUND





```clarity
(define-constant ERR-NO-EGROUP-FOUND (err u720007))
```

[View in file](../../contracts/registry/egroup.clar#L31)
  