
# assets

[`assets.clar`](../../contracts/registry/assets.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

assets

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

**Public functions:**

- [`insert`](#insert)
- [`update`](#update)
- [`enable`](#enable)
- [`disable`](#disable)

**Read-only functions:**

- [`get-nonce`](#get-nonce)
- [`get-reverse`](#get-reverse)
- [`find`](#find)
- [`lookup`](#lookup)
- [`get-bitmap`](#get-bitmap)
- [`enabled`](#enabled)
- [`get-status`](#get-status)
- [`get-asset-status`](#get-asset-status)
- [`status-multi`](#status-multi)

**Private functions:**

- [`uint-to-buff1`](#uint-to-buff1)
- [`subset`](#subset)
- [`mask-pos`](#mask-pos)
- [`uint-to-list-u64`](#uint-to-list-u64)
- [`iter-uint-to-list-u64`](#iter-uint-to-list-u64)
- [`call-get-decimals`](#call-get-decimals)
- [`check-dao-auth`](#check-dao-auth)
- [`increment`](#increment)
- [`unwrap-status`](#unwrap-status)
- [`status`](#status)

**Maps**

- [`registry`](#registry)
- [`reverse`](#reverse)

**Variables**

- [`nonce`](#nonce)
- [`bitmap`](#bitmap)

**Constants**

- [`DEBT-OFFSET`](#debt-offset)
- [`U128-BUFF-LEN`](#u128-buff-len)
- [`U8-BUFF-OFFSET`](#u8-buff-offset)
- [`U32-BUFF-OFFSET`](#u32-buff-offset)
- [`ITER-UINT-64`](#iter-uint-64)
- [`MAX-ASSETS`](#max-assets)
- [`ERR-AUTH`](#err-auth)
- [`ERR-LIMIT-REACHED`](#err-limit-reached)
- [`ERR-ALREADY-REGISTERED`](#err-already-registered)
- [`ERR-ALREADY-ENABLED`](#err-already-enabled)
- [`ERR-NOT-ENABLED`](#err-not-enabled)
- [`ERR-INVALID-STALENESS`](#err-invalid-staleness)
- [`ERR-INVALID-ASSET`](#err-invalid-asset)
- [`ERR-INVALID-ID`](#err-invalid-id)


## Functions

### uint-to-buff1

[View in file](../../contracts/registry/assets.clar#L65)

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

### subset

[View in file](../../contracts/registry/assets.clar#L71)

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

### mask-pos

[View in file](../../contracts/registry/assets.clar#L75)

`(define-private (mask-pos ((pos uint) (collateral bool)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (mask-pos (pos uint) (collateral bool))
  (if (is-eq collateral true)
      pos
      (+ DEBT-OFFSET pos)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| pos | uint |
| collateral | bool |

### uint-to-list-u64

[View in file](../../contracts/registry/assets.clar#L80)

`(define-private (uint-to-list-u64 ((val uint)) (list 64 uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (uint-to-list-u64 (val uint))
  (let ((init { val: val, result: (list) })
        (out (fold iter-uint-to-list-u64 ITER-UINT-64 init)))
    (get result out)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| val | uint |

### iter-uint-to-list-u64

[View in file](../../contracts/registry/assets.clar#L85)

`(define-private (iter-uint-to-list-u64 ((i uint) (acc (tuple (result (list 64 uint)) (val uint)))) (tuple (result (list 64 uint)) (val uint)))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (iter-uint-to-list-u64 (i uint) (acc { val: uint, result: (list 64 uint) }))
  (let ((val (get val acc))
        (result (get result acc))
        (next (as-max-len? (append result val) u64)))
    { val: val, result: (unwrap-panic next) }))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| i | uint |
| acc | (tuple (result (list 64 uint)) (val uint)) |

### call-get-decimals

[View in file](../../contracts/registry/assets.clar#L93)

`(define-private (call-get-decimals ((ft trait_reference)) uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (call-get-decimals (ft <ft-trait>))
  (unwrap-panic (contract-call? ft get-decimals)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |

### check-dao-auth

[View in file](../../contracts/registry/assets.clar#L98)

`(define-private (check-dao-auth () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (check-dao-auth)
  (ok (asserts! (is-eq tx-sender .dao-executor) ERR-AUTH)))
```
</details>




### increment

[View in file](../../contracts/registry/assets.clar#L103)

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




### unwrap-status

[View in file](../../contracts/registry/assets.clar#L111)

`(define-private (unwrap-status ((id uint) (enabled-mask uint)) (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (oracle (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (unwrap-status (id uint) (enabled-mask uint))
  (unwrap-panic (status id enabled-mask))
)
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| enabled-mask | uint |

### status

[View in file](../../contracts/registry/assets.clar#L115)

`(define-private (status ((id uint) (enabled-mask uint)) (response (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (oracle (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-private (status (id uint) (enabled-mask uint))
  (let ((entry (try! (lookup id)))
        (debt-position (mask-pos id false))
        (is-collateral (> (bit-and enabled-mask (pow u2 id)) u0)) ;; 0 offset
        (is-debt (> (bit-and enabled-mask (pow u2 debt-position)) u0)))
    (ok (merge entry { id: id, collateral: is-collateral, debt: is-debt }))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |
| enabled-mask | uint |

### get-nonce

[View in file](../../contracts/registry/assets.clar#L128)

`(define-read-only (get-nonce () (response uint none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-nonce) (ok (var-get nonce)))
```
</details>




### get-reverse

[View in file](../../contracts/registry/assets.clar#L132)

`(define-read-only (get-reverse ((asset principal)) (response (buff 1) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-reverse (asset principal))
  (ok (unwrap! (map-get? reverse asset) ERR-INVALID-ASSET)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | principal |

### find

[View in file](../../contracts/registry/assets.clar#L135)

`(define-read-only (find ((asset principal)) (response (tuple (addr principal) (decimals uint) (id (buff 1)) (oracle (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (find (asset principal))
  (let ((id (try! (get-reverse asset))))
    (ok (unwrap! (map-get? registry id) ERR-INVALID-ID))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | principal |

### lookup

[View in file](../../contracts/registry/assets.clar#L139)

`(define-read-only (lookup ((id uint)) (response (tuple (addr principal) (decimals uint) (id (buff 1)) (oracle (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (lookup (id uint))
  (let ((final-id (uint-to-buff1 id)))
    (ok (unwrap! (map-get? registry final-id) ERR-INVALID-ID))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |

### get-bitmap

[View in file](../../contracts/registry/assets.clar#L145)

`(define-read-only (get-bitmap () uint)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-bitmap) (var-get bitmap))
```
</details>




### enabled

[View in file](../../contracts/registry/assets.clar#L147)

`(define-read-only (enabled ((mask uint)) bool)`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (enabled (mask uint))
  (let ((enabled-mask (get-bitmap)))
    (subset mask enabled-mask)
  ))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| mask | uint |

### get-status

[View in file](../../contracts/registry/assets.clar#L154)

`(define-read-only (get-status ((id uint)) (response (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (oracle (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-status (id uint))
  (let ((enabled-mask (get-bitmap)))
    (status id enabled-mask)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| id | uint |

### get-asset-status

[View in file](../../contracts/registry/assets.clar#L158)

`(define-read-only (get-asset-status ((address principal)) (response (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (oracle (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))))) uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (get-asset-status (address principal))
  (let ((id (try! (get-reverse address)))
        (final-id (buff-to-uint-be id)))
    (get-status final-id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| address | principal |

### status-multi

[View in file](../../contracts/registry/assets.clar#L163)

`(define-read-only (status-multi ((ids (list 64 uint))) (list 64 (tuple (addr principal) (collateral bool) (debt bool) (decimals uint) (id uint) (oracle (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1)))))))`



<details>
  <summary>Source code:</summary>

```clarity
(define-read-only (status-multi (ids (list 64 uint)))
 (let ((enabled-mask (get-bitmap))
       (mask (uint-to-list-u64 enabled-mask)))
    (if (is-eq (len ids) u0) (list ) (map unwrap-status ids mask))))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ids | (list 64 uint) |

### insert

[View in file](../../contracts/registry/assets.clar#L174)

`(define-public (insert ((ft trait_reference) (oracle-data (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))))) (response uint uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (insert
                (ft <ft-trait>)
                (oracle-data {
                  type: (buff 1),
                  ident: (buff 32),
                  callcode: (optional (buff 1)),
                  max-staleness: uint
                }))
  (let ((id (increment))
        (asset-address (contract-of ft))
        (final-id (uint-to-buff1 id))
        (staleness (get max-staleness oracle-data))
        (entry {
          id: final-id,
          addr: asset-address,
          decimals: (call-get-decimals ft),
          oracle: oracle-data,
        }))

      (try! (check-dao-auth))
      (asserts! (<= (var-get nonce) MAX-ASSETS) ERR-LIMIT-REACHED)
      (asserts! (> staleness u0) ERR-INVALID-STALENESS)

      (asserts! (and
          (map-insert registry final-id entry)
          (map-insert reverse asset-address final-id)
        ) ERR-ALREADY-REGISTERED)

      (print {
        action: "asset-insert",
        caller: tx-sender,
        data: {
          asset-id: id,
          asset-address: asset-address,
          decimals: (call-get-decimals ft),
          oracle-type: (get type oracle-data),
          oracle-ident: (get ident oracle-data),
          oracle-callcode: (get callcode oracle-data),
          max-staleness: staleness
        }
      })

      (ok id)))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| ft | trait_reference |
| oracle-data | (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))) |

### update

[View in file](../../contracts/registry/assets.clar#L218)

`(define-public (update ((asset principal) (oracle-data (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))))) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (update
                (asset principal)
                (oracle-data {
                  type: (buff 1),
                  ident: (buff 32),
                  callcode: (optional (buff 1)),
                  max-staleness: uint
                }))
  (let ((entry (try! (find asset)))
        (asset-id (get id entry))
        (staleness (get max-staleness oracle-data))
        (updated-entry (merge entry { oracle: oracle-data })))

    (try! (check-dao-auth))
    (asserts! (> staleness u0) ERR-INVALID-STALENESS)

    (map-set registry asset-id updated-entry)
    
    (print {
      action: "asset-update",
      caller: tx-sender,
      data: {
        asset-address: asset,
        asset-id: asset-id,
        oracle-type: (get type oracle-data),
        oracle-ident: (get ident oracle-data),
        oracle-callcode: (get callcode oracle-data),
        max-staleness: staleness
      }
    })
    
    (ok true)
  ))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | principal |
| oracle-data | (tuple (callcode (optional (buff 1))) (ident (buff 32)) (max-staleness uint) (type (buff 1))) |

### enable

[View in file](../../contracts/registry/assets.clar#L254)

`(define-public (enable ((asset principal) (collateral bool)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (enable (asset principal) (collateral bool))
  (let ((id (try! (get-reverse asset)))
        (final-id (buff-to-uint-be id))
        (enabled-mask (get-bitmap))
        (position (mask-pos final-id collateral))
        (updated-bitmap (bit-or enabled-mask (pow u2 position))))

      (try! (check-dao-auth))
      (asserts! (not (is-eq enabled-mask updated-bitmap)) ERR-ALREADY-ENABLED)
      (var-set bitmap updated-bitmap)
      
      (print {
        action: "asset-enable",
        caller: tx-sender,
        data: {
          asset-address: asset,
          asset-id: final-id,
          is-collateral: collateral,
          bitmap-before: enabled-mask,
          bitmap-after: updated-bitmap
        }
      })
      
      (ok true)
    ))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | principal |
| collateral | bool |

### disable

[View in file](../../contracts/registry/assets.clar#L280)

`(define-public (disable ((asset principal) (collateral bool)) (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (disable (asset principal) (collateral bool))
  (let ((id (try! (get-reverse asset)))
        (final-id (buff-to-uint-be id))
        (enabled-mask (get-bitmap))
        (position (mask-pos final-id collateral))
        (updated-bitmap (bit-and enabled-mask (bit-not (pow u2 position)))))

      (try! (check-dao-auth))
      (asserts! (not (is-eq enabled-mask updated-bitmap)) ERR-NOT-ENABLED)
      (var-set bitmap updated-bitmap)
      
      (print {
        action: "asset-disable",
        caller: tx-sender,
        data: {
          asset-address: asset,
          asset-id: final-id,
          is-collateral: collateral,
          bitmap-before: enabled-mask,
          bitmap-after: updated-bitmap
        }
      })
      
      (ok true)
    ))
```
</details>


**Parameters:**

| Name | Type | 
| --- | --- | 
| asset | principal |
| collateral | bool |

## Maps

### registry

============================================================================
MAPS
============================================================================

```clarity
(define-map registry
            (buff 1)
            {
              id: (buff 1),
              addr: principal,
              decimals: uint,
              oracle: {
                type: (buff 1),
                ident: (buff 32),
                callcode: (optional (buff 1)),
                max-staleness: uint
              }})
```

[View in file](../../contracts/registry/assets.clar#L45)

### reverse



```clarity
(define-map reverse principal (buff 1))
```

[View in file](../../contracts/registry/assets.clar#L57)

## Variables

### nonce

uint

============================================================================
DATA VARS
============================================================================

```clarity
(define-data-var nonce uint u0)
```

[View in file](../../contracts/registry/assets.clar#L39)

### bitmap

uint



```clarity
(define-data-var bitmap uint u0)
```

[View in file](../../contracts/registry/assets.clar#L40)

## Constants

### DEBT-OFFSET



-- Pack utilities (bit manipulation & buffer conversion)

```clarity
(define-constant DEBT-OFFSET u64)
```

[View in file](../../contracts/registry/assets.clar#L15)

### U128-BUFF-LEN





```clarity
(define-constant U128-BUFF-LEN u17)
```

[View in file](../../contracts/registry/assets.clar#L16)

### U8-BUFF-OFFSET





```clarity
(define-constant U8-BUFF-OFFSET u16)
```

[View in file](../../contracts/registry/assets.clar#L17)

### U32-BUFF-OFFSET





```clarity
(define-constant U32-BUFF-OFFSET u13)
```

[View in file](../../contracts/registry/assets.clar#L18)

### ITER-UINT-64





```clarity
(define-constant ITER-UINT-64 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63))
```

[View in file](../../contracts/registry/assets.clar#L19)

### MAX-ASSETS



-- Asset limits

```clarity
(define-constant MAX-ASSETS u64)
```

[View in file](../../contracts/registry/assets.clar#L22)

### ERR-AUTH



============================================================================
ERRORS (710xxx prefix for assets)
============================================================================

```clarity
(define-constant ERR-AUTH (err u710001))
```

[View in file](../../contracts/registry/assets.clar#L27)

### ERR-LIMIT-REACHED





```clarity
(define-constant ERR-LIMIT-REACHED (err u710002))
```

[View in file](../../contracts/registry/assets.clar#L28)

### ERR-ALREADY-REGISTERED





```clarity
(define-constant ERR-ALREADY-REGISTERED (err u710003))
```

[View in file](../../contracts/registry/assets.clar#L29)

### ERR-ALREADY-ENABLED





```clarity
(define-constant ERR-ALREADY-ENABLED (err u710004))
```

[View in file](../../contracts/registry/assets.clar#L30)

### ERR-NOT-ENABLED





```clarity
(define-constant ERR-NOT-ENABLED (err u710005))
```

[View in file](../../contracts/registry/assets.clar#L31)

### ERR-INVALID-STALENESS





```clarity
(define-constant ERR-INVALID-STALENESS (err u710006))
```

[View in file](../../contracts/registry/assets.clar#L32)

### ERR-INVALID-ASSET





```clarity
(define-constant ERR-INVALID-ASSET (err u710007))
```

[View in file](../../contracts/registry/assets.clar#L33)

### ERR-INVALID-ID





```clarity
(define-constant ERR-INVALID-ID (err u710008))
```

[View in file](../../contracts/registry/assets.clar#L34)
  