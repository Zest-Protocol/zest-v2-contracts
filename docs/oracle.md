# Oracle System (Integrated in Market)

## Overview

The oracle system provides **price feeds** for assets in the lending protocol. Oracle functionality is **integrated directly into market.clar** for gas optimization and to eliminate circular dependencies. It serves as the bridge between:
- **External price sources** (Pyth, DIA oracles)
- **Protocol assets** (registered in assets.clar)
- **Market operations** (requires prices for lending calculations)

---

## Integration with Assets

### Asset Registration Includes Oracle Configuration

When registering an asset in `assets.clar`, oracle configuration is provided:

```clarity
(define-public (insert 
  (ft <ft-trait>) 
  (od {
    type    : (buff 1),              // Oracle type: Pyth (0x00) or DIA (0x01)
    ident   : (buff 32),             // Price feed identifier
    callcode: (optional (buff 1))   // Optional price transformation
  }))
```

### Registration Examples

**STX (No transformation):**
```clarity
(insert .wstx {
  type: 0x00,           // Pyth oracle
  ident: 0x...,         // STX/USD feed ID
  callcode: none        // Direct price, no transformation
})
```

**ststx (Staking ratio transformation):**
```clarity
(insert .ststx {
  type: 0x00,           // Pyth oracle (for STX price)
  ident: 0x...,         // STX/USD feed ID
  callcode: (some 0x00) // CALLCODE-STSTX: apply staking ratio
})
```

**zUSDC (Liquidity index transformation):**
```clarity
(insert .vault-usdc {
  type: 0x00,           // Pyth oracle (for USDC price)
  ident: 0x...,         // USDC/USD feed ID
  callcode: (some 0x04) // CALLCODE-ZUSDC: apply liquidity index
})
```

---

## Price Feed Sources

All price resolution logic is implemented in `market.clar`:

### 1. Pyth Network (TYPE-PYTH = 0x00)

**Description:** Decentralized oracle network with high-frequency price updates.

```clarity
;; In market.clar
(define-constant PYTH-STORAGE 
  'SP1CGXWEAMG6P6FT04W66NVGJ7PQWMDAC19R7PJ0Y.pyth-storage-v4)

(define-private (resolve-pyth (ident (buff 32)))
  (let ((res (call-pyth ident))
        (p (get price res))
        (expo (get expo res)))
    (normalize-pyth p expo)))  // Normalize to 8 decimals
```

**Price Normalization:**

Pyth prices have varying exponents. The market normalizes all prices to 8 decimals:

```
Target: 8 decimals (e.g., $1.23 = 123000000)

Example:
  Pyth returns: price=123, expo=-8
  Adjustment: expo + 8 = -8 + 8 = 0
  Result: 123 / 10^0 = 123 (already 8 decimals)
```

**Returned Data:**
```clarity
{
  value: uint,          // Normalized price (8 decimals)
  timestamp: uint       // Publication timestamp
}
```

### 2. DIA Oracle (TYPE-DIA = 0x01)

**Description:** Trustless price feeds from verified data sources.

```clarity
;; In market.clar
(define-constant DIA-CLIENT 
  'SP1G48FZ4Y7JY8G2Z0N51QTCYGBQ6F4J43J77BQC0.dia-oracle)

(define-private (resolve-dia (ident (buff 32)))
  (let ((key (from-consensus-buff? ident))
        (res (call-dia key)))
    res))  // Already 8-decimal normalized
```

**Note:** DIA prices are assumed to be pre-normalized to 8 decimals.

---

## Callcode System (Price Transformations)

Some assets require **price transformations** beyond the base oracle price. These are implemented in `market.clar`.

### Callcode 0x00: ststx (Liquid Staked STX)

```clarity
;; In market.clar
(define-constant CALLCODE-STSTX 0x00)

(define-private (resolve-ststx (p uint))
  (let ((ratio (call-ststx-ratio)))  // STX per ststx
    (ok (/ (* p ratio) STSTX-RATIO-DECIMALS))))
```

**Purpose:** ststx represents staked STX, which accrues value over time through staking rewards.

**Example:**
```
Base STX price: $1.00 = 100000000 (8 decimals)
ststx ratio: 1.05 (1 ststx = 1.05 STX)
Final price: $1.05 = 105000000
```

### Callcode 0x01-0x05: ztokens (Vault Receipt Tokens)

```clarity
;; In market.clar
(define-constant CALLCODE-ZSTX   0x01)  // vault-stx (aid u0)
(define-constant CALLCODE-ZSBTC  0x02)  // vault-sbtc (aid u1)
(define-constant CALLCODE-ZSTSTX 0x03)  // vault-ststx (aid u2)
(define-constant CALLCODE-ZUSDC  0x04)  // vault-usdc (aid u3)
(define-constant CALLCODE-ZUSDH  0x05)  // vault-usdh (aid u4)
```

**Generic ztoken resolver:**
```clarity
;; In market.clar
(define-private (resolve-ztoken (p uint) (aid uint))
  (let ((price (if (is-eq aid u2)
                   (try! (resolve-ststx p))  // zststx: apply ratio first
                   p))
        (li (get index (unwrap-panic (get-cached-indexes aid)))))
    (ok (/ (* price li) PRECISION))))
```

**Purpose:** Vault tokens represent shares in lending pools that accrue interest over time.

**Example (zUSDC):**
```
Base USDC price: $1.00 = 100000000
Liquidity index: 1.10 (110000000) = 10% interest accrued
Vault token price: $1.10 = 110000000
```

**Special Case (zststx):**

zststx requires **dual transformation**:
1. Apply ststx staking ratio
2. Apply liquidity index

```
STX price: $1.00
→ Apply ststx ratio (1.05) → $1.05
→ Apply liquidity index (1.10) → $1.155
```

---

## Complete Price Resolution Flow

### Example: Getting zUSDC Price

**Step 1: Market requests price internally**
```clarity
;; Inside market.clar
(price-resolve 
  { type: 0x00, ident: 0x..., callcode: (some 0x04) }
  u3)  // aid for USDC
```

**Step 2: Fetch base price from Pyth**
```clarity
// resolve-price-feed → resolve-pyth
→ call-pyth(ident)
→ Returns: {
    value: 100000000,      // $1.00 (8 decimals)
    timestamp: 123456
  }
```

**Step 3: Apply callcode transformation**
```clarity
// resolve-callcode → resolve-ztoken
→ callcode = 0x04 (ZUSDC)
→ resolve-ztoken(100000000, u3)  // aid u3 = vault-usdc
→ Get liquidity index from cache: 110000000 (1.10)
→ Calculate: (100000000 * 110000000) / 100000000
→ Result: 110000000
```

**Step 4: Validate freshness**
```clarity
// Price must not be stale (using stacks-block-time)
→ timestamp = 123456
→ current block timestamp = 123500
→ delta = 44 seconds
→ CARDINALITY = 120 seconds
→ Check: 44 <= 120 ✓ FRESH
```

**Step 5: Return final price**
```
Final price: $1.10 = 110000000 (8 decimals)
```

---

## Safety Features

### 1. Freshness Validation

Price freshness is validated using **per-asset `max-staleness`** configured in the asset registry:

```clarity
;; In assets.clar - oracle config per asset
(define-public (insert 
  (ft <ft-trait>)
  (od {
    type        : (buff 1),
    ident       : (buff 32),
    callcode    : (optional (buff 1)),
    max-staleness: uint          ;; Per-asset staleness threshold (seconds)
  }))
```

```clarity
;; In market.clar - freshness check
(define-private (oracle-timestamp-fresh (ts uint) (prev uint) (max-staleness uint))
  (let ((delta (if (> ts stacks-block-time)
                   u0
                   (- stacks-block-time ts))))
    (and
      (<= delta max-staleness)   // Not too old (per-asset threshold)
      (>= ts prev))))            // Not older than previous

;; Used during price resolution
(asserts! (and (oracle-price-legal final-price) 
               (oracle-timestamp-fresh timestamp last-update-time max-staleness))
          ERR-ORACLE-INVARIANT)
```

**Per-Asset Configuration:**
- Each asset defines its own `max-staleness` during registration
- Volatile assets can have shorter staleness (e.g., 60 seconds)
- Stable assets can have longer staleness (e.g., 300 seconds)
- `max-staleness > 0` required during asset registration

**Purpose:** Prevents using stale price data that could enable exploits, with flexibility per asset type.

**Note:** Uses `stacks-block-time` (Clarity 4 feature) for accurate timestamp-based validation, eliminating the need for block-height approximations.

### 2. Monotonic Timestamps

```clarity
;; In market.clar
(define-map last-update- {type: (buff 1), ident: (buff 32)} uint)
```

**Purpose:** Stores last seen timestamp per feed. Rejects prices with timestamps older than previously seen values.

### 3. Price Validity Check

```clarity
;; In market.clar
(define-private (oracle-price-legal (p uint))
  (> p u0))  // Price must be positive
```

**Purpose:** Prevents zero or negative prices from causing calculation errors.

---

## Batch Price Fetching

For gas efficiency, multiple prices can be fetched in a single internal call:

```clarity
;; In market.clar
(define-private (price-multi-resolve 
  (data (list 64 {type, ident, callcode}))
  (aids (list 64 uint)))
  (fold iter-price-multi data init))
```

**Use Case:** Market needs prices for multiple assets:
- 5 collateral assets + 3 debt assets = 8 prices
- Single internal resolution instead of 8 separate operations
- Returns list of 8 prices in same order as input

**Example:**
```clarity
(price-multi-resolve 
  (list
    {type: 0x00, ident: STX_FEED, callcode: none}
    {type: 0x00, ident: BTC_FEED, callcode: none}
    {type: 0x00, ident: USDC_FEED, callcode: (some 0x04)})
  (list u0 u1 u3))
→ Returns: (list 100000000 3000000000000 110000000)
```

---

## Index Caching

The market maintains a timestamp-based cache for vault liquidity indexes to optimize ztoken price resolution:

```clarity
;; In market.clar
(define-map index-cache- 
  { timestamp: uint, aid: uint }
  { index: uint, lindex: uint })

(define-private (accrue-and-cache (aid uint))
  (let ((cache-key { timestamp: stacks-block-time, aid: aid })
        (cached? (map-get? index-cache- cache-key)))
    (match cached?
      existing existing
      (let ((fresh (vault-accrue aid)))
        (map-set index-cache- cache-key fresh)
        fresh))))
```

**Purpose:** 
- Multiple price resolutions for the same vault within a single block use cached indexes
- Avoids redundant cross-contract calls to vaults
- Significantly reduces gas costs for transactions involving multiple ztoken prices

**Cache Invalidation:** Cache is timestamp-based using `stacks-block-time`, automatically invalidating when a new block is processed.

---

## Time-Based Features (Clarity 4)

The oracle system leverages `stacks-block-time`, a Clarity 4 feature that provides direct access to the current block's timestamp:

**Benefits:**
- **Accurate timestamps:** Direct block timestamp instead of approximations
- **Precise freshness checks:** Validate prices are within 120 seconds
- **Efficient caching:** Timestamp-based index caching per block
- **Better UX:** More predictable oracle behavior

**Example:**
```clarity
;; Old approach (approximate)
(define-data-var last-update uint block-height)
;; Approximate: 1 block ≈ 600 seconds (unreliable)

;; New approach (precise)
(define-data-var last-update uint stacks-block-time)
;; Exact: Unix timestamp in seconds
```

---

## Key Design Insights

### 1. Consolidation for Efficiency
- **Oracle logic in market.clar:** Eliminates cross-contract calls for price resolution
- **Direct external oracle access:** Market calls Pyth/DIA directly
- **Integrated callcode processing:** All transformations happen in one contract

### 2. Extensibility
- **New oracle sources:** Add new TYPE constant in market.clar
- **New transformations:** Add new CALLCODE constant in market.clar
- **Asset-specific logic:** Callcode system allows per-asset customization

### 3. Efficiency
- **Batch fetching:** Multiple assets in one operation
- **Index caching:** Timestamp-based caching per block
- **Cached timestamps:** Prevent redundant freshness checks

### 4. Security
- **Timestamp validation:** Using precise `stacks-block-time`
- **Freshness checks:** Prevent stale data attacks
- **Validation:** Positive price enforcement
- **Monotonic timestamps:** Prevent replay attacks

---

## Summary

The oracle system provides a flexible, secure, and efficient mechanism for obtaining asset prices in the lending protocol. By consolidating oracle logic into `market.clar`, the protocol achieves:

- **Lower gas costs:** Fewer cross-contract calls
- **Simpler architecture:** No circular dependencies
- **Better maintainability:** All price logic in one place
- **Faster execution:** Direct access to price feeds

The system supports multiple oracle sources, optional price transformations via callcodes, and comprehensive safety checks through timestamp validation using Clarity 4's `stacks-block-time` feature.
