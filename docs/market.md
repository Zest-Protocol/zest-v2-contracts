# Market System

## Overview

The market system is the heart of the Zest Protocol, orchestrating all lending and borrowing operations. The market contract (`market.clar`) is **the largest and most central component** of the protocol, consolidating oracle logic, vault routing, and all lending operations into a single contract for gas optimization.

The system consists of two primary contracts:

- **market.clar:** Core business logic, oracle integration, and vault routing
- **market-vault.clar:** User position tracking and storage

Together, these contracts enable users to:
- Deposit collateral (including ztokens)
- Borrow assets against collateral
- Repay debt to unlock collateral
- Liquidate unhealthy positions

---

## Architecture

### Market Contract (market.clar) - Central Hub

The main business logic contract that serves as the protocol's **central orchestrator**:

**Core Lending Operations:**
- Validates all lending operations
- Enforces health checks and LTV ratios
- Calculates notional values using prices
- Coordinates with vaults for borrowing/repayment
- Enables liquidations when positions become unhealthy

**Integrated Oracle System:**
- Resolves prices from external oracles (Pyth, DIA)
- Applies callcode transformations (ststx, ztokens)
- Validates timestamp freshness using `stacks-block-time`
- Maintains monotonic timestamp tracking

**Direct Vault Routing:**
- Routes borrow/repay operations directly to vaults
- No separate vault-router contract
- If-based routing by asset ID

**Stateless Design:**
- Holds only ephemeral data (caches, temporary state)
- Timestamp-based index caching per block
- All persistent state stored in market-vault.clar

> **Note:** This consolidation eliminates circular dependencies and reduces gas costs by minimizing cross-contract calls.

### Market-Vault Contract (market-vault.clar) - State Storage

The position storage contract that holds all persistent state:
- Tracks each user's collateral and debt
- Uses bitmap-based position identifiers
- Manages the obligation registry
- Provides position lookup functions
- All writes go through market-vault, never directly

---

## Core Operations

### 1. Collateral Management

#### Deposit Collateral
Users can deposit any enabled collateral asset, including ztokens:

```
User deposits 1000 zUSDC as collateral
↓
Market validates asset is enabled
↓
Transfers zUSDC to market-vault
↓
Records collateral position
↓
User's LTV improves, can borrow more
```

**Key Features:**
- ztokens continue earning yield while pledged
- Multiple collateral types supported
- Bitmap tracks which assets are deposited

#### Withdraw Collateral
Users can withdraw collateral if health remains adequate:

```
User requests to withdraw 100 zUSDC
↓
Market checks current health
↓
Simulates post-withdrawal health
↓
If healthy: allows withdrawal
If unhealthy: rejects transaction
```

**Health Check:**
- Current position must be healthy
- Post-withdrawal position must remain healthy
- Uses LTV-BORROW threshold from egroup

---

### 2. Borrowing

Users borrow assets against their collateral:

```
User wants to borrow 500 USDC
↓
Market accrues vault interest
↓
Checks borrowing is enabled for asset
↓
Validates health before borrow
↓
Simulates post-borrow health
↓
If healthy: borrows from vault
If unhealthy: rejects transaction
```

**Process Details:**
1. **Interest Accrual:** Vault updates indexes
2. **Health Check:** Current position must be healthy
3. **Post-Borrow Check:** Position must remain healthy after borrow
4. **Vault Interaction:** Market borrows from appropriate vault
5. **Position Update:** Records scaled debt in market-vault

### Scaled Debt Tracking

Debt is stored as "scaled" values that adjust for interest:

```
Initial:
- User borrows 100 USDC
- Borrow Index = 1.0
- Scaled Debt = 100 / 1.0 = 100

After time passes:
- Borrow Index = 1.15 (15% interest accrued)
- Actual Debt = 100 * 1.15 = 115 USDC
- Scaled Debt remains 100 (unchanged)

When calculating debt:
Actual Debt = Scaled Debt × Current Index / Initial Index
```

**Why Scaled?**
- Single storage value per debt position
- Automatically compounds interest
- No need to update every position every block

---

### 3. Repayment

Users repay debt to reduce their obligations:

```
User repays 50 USDC
↓
Market accrues vault interest
↓
Calculates scaled debt reduction
↓
Transfers USDC to vault
↓
Reduces user's scaled debt
↓
User's health improves
```

**Partial vs. Full Repayment:**
- Can repay any amount up to total debt
- If repayment > debt, only actual debt is repaid
- Scaled debt is reduced proportionally

---

## Health Calculations

### Notional Value Calculation

The market calculates USD-equivalent values for all positions:

```
Collateral Notional:
For each collateral asset:
  Amount × Price / 10^decimals = USD Value
Total Collateral = Sum of all USD values

Debt Notional:
For each debt asset:
  Scaled × Index × Price / 10^decimals = USD Value
Total Debt = Sum of all USD values
```

### Health Check Formula

```
Health = (Collateral × LTV) >= Debt

Example:
Collateral: $1000
Debt: $400
LTV: 75% (7500 bps)

Check: ($1000 × 0.75) >= $400
       $750 >= $400 ✓ HEALTHY
```

### LTV Thresholds

Egroups define three LTV levels:

1. **LTV-BORROW (e.g., 75%)**
   - Used for new borrows and withdrawals
   - Most conservative threshold
   - Ensures buffer before liquidation

2. **LTV-LIQ-PARTIAL (e.g., 85%)**
   - Triggers partial liquidation
   - Allows targeted debt reduction
   - Minimizes user losses

3. **LTV-LIQ-FULL (e.g., 95%)**
   - Triggers full liquidation
   - Position is severely undercollateralized
   - Liquidator can clear entire position

---

## Liquidation Mechanics

### When Liquidation Occurs

A position becomes liquidatable when:

```
(Collateral × LTV-LIQ-PARTIAL) < Debt
```

### Liquidation Process

```
Liquidator identifies unhealthy position
↓
Specifies debt to repay + collateral to seize
↓
Market validates position is unhealthy
↓
Market accrues interest on debt vault
↓
Liquidator repays borrower's debt
↓
Market transfers collateral to liquidator
↓
Borrower's position improves (or is closed)
```

### Liquidation Incentives

Liquidators receive a bonus (liquidation penalty) for performing liquidations:

```
Example:
- Borrower owes 100 USDC
- Collateral: 120 USDC worth of zSTX
- Liquidation Penalty: 5%

Liquidator:
- Repays 100 USDC debt
- Receives 105 USDC worth of zSTX
- Net profit: 5 USDC worth of zSTX
```

**Penalty Range:**
- Minimum: e.g., 1% (LIQ-PENALTY-MIN)
- Maximum: e.g., 10% (LIQ-PENALTY-MAX)
- Scales based on position health

---

## Position Tracking

### Obligation Registry

Each user who deposits collateral or borrows gets an "obligation":

```
Obligation {
  id: 1,
  account: ST1...,
  mask: 0b0110,  // Assets in use
  last-update: 12345,
  collateral: [(aid: 0, amount: 100), ...],
  debt: [(aid: 3, scaled: 50), ...]
}
```

### Bitmap-Based Position Tracking

Similar to assets, positions use bitmasks:

```
Mask Structure (128 bits):
- Bits 0-63: Collateral assets
- Bits 64-127: Debt assets

Example:
User has:
- zUSDC collateral (aid 3)
- STX debt (aid 0)

Collateral bit: 3 → bit 3 = 1
Debt bit: 0 → bit (0 + 64) = bit 64 = 1

Mask: 0b...1000000000...001000
```

**Benefits:**
- O(1) check if user has specific asset
- Compact storage (single uint)
- Easy to enumerate all assets in position

---

## Market as Central Hub

### Architectural Philosophy

The market contract serves as the **single source of coordination** for all protocol operations:

```
              ┌──────────────────────────────┐
              │       market.clar            │
              │   (Central Orchestrator)     │
              │                              │
              │  • Oracle logic integrated   │
              │  • Vault routing embedded    │
              │  • Lending operations        │
              │  • Health calculations       │
              │  • Liquidation logic         │
              └──────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
    ┌─────────┐    ┌─────────┐    ┌──────────┐
    │ Assets  │    │ Egroups │    │Market-   │
    │Registry │    │         │    │Vault     │
    └─────────┘    └─────────┘    └──────────┘
          │              │              │
          └──────────────┼──────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
    ┌─────────┐    ┌─────────┐    ┌──────────┐
    │External │    │ Vaults  │    │ External │
    │Oracles  │    │(6 types)│    │Protocols │
    │Pyth/DIA │    │         │    │(ststx)   │
    └─────────┘    └─────────┘    └──────────┘
```

### Why Consolidation?

**Previous Architecture:** Separate contracts for oracle, vault-router, and market created circular dependencies and excessive cross-contract calls.

**Current Architecture:** All coordination logic in market.clar:
- **Lower gas costs:** Fewer contract hops
- **No circular dependencies:** Clean dependency graph
- **Simpler deployment:** One central contract to upgrade
- **Better maintainability:** All logic in one place

---

## Stateless Design

### Market.clar: Ephemeral Data Only

The market contract is **technically stateless** - it holds only temporary data that doesn't need to persist across transactions:

**What Market.clar Stores:**
```clarity
;; Timestamp-based index cache (invalidates each block)
(define-map index-cache- 
  { timestamp: uint, aid: uint }
  { index: uint, lindex: uint })

;; Oracle timestamp tracking (for freshness validation)
(define-map last-update-
  { type: (buff 1), ident: (buff 32) }
  uint)

;; Pause states (operational controls)
(define-data-var pause-liquidation bool false)
(define-data-var liquidation-grace-end uint u0)
```

**What Market.clar Does NOT Store:**
- User positions (in market-vault.clar)
- User balances (in market-vault.clar)
- Vault states (in vault contracts)
- Asset registry (in assets.clar)
- Risk parameters (in egroup.clar)

This design keeps market.clar **focused on coordination** while delegating state to specialized contracts.

---

## Integration with Other Components

### With Assets Registry
- Validates collateral/debt assets are enabled
- Retrieves oracle configuration per asset
- Checks asset status (collateral/debt flags)
- Uses asset decimals for price normalization

### With Oracle Providers (Direct Integration)
- **No separate oracle contract** - logic embedded in market.clar
- Fetches prices directly from Pyth and DIA
- Uses batch fetching for efficiency
- Applies callcode transformations (ststx ratios, ztoken liquidity indexes)
- Validates timestamp freshness with `stacks-block-time`

### With Egroups
- Resolves risk parameters based on asset mask
- Uses LTV thresholds for health checks
- Applies liquidation penalties
- Leverages bucket optimization for fast lookups

### With Vaults (Direct Access)
- **No separate vault-router** - routing logic embedded in market.clar
- Routes borrow/repay directly to vault contracts via if-statements
- Triggers interest accrual before operations
- Caches vault indexes per timestamp
- Retrieves indexes from cache for ztoken price resolution

### With Market-Vault (State Storage)
- Reads user positions for health calculations
- Writes collateral/debt changes through market-vault functions
- Never directly modifies market-vault state
- Uses bitmap-based position tracking

---

## Security Features

### 1. Authorization
- Users can only modify their own positions
- Only market contract can call market-vault
- Strict validation of all inputs

### 2. Health Checks
Multiple layers of validation:
- Pre-operation health check
- Post-operation simulation
- Rejects if either check fails

### 3. Interest Accrual
- Always accrue before borrow/repay
- Ensures debt calculations use current index
- Prevents stale data exploits

### 4. Atomicity
- All operations execute atomically
- Either full success or full revert
- No partial state updates

### 5. Overflow Protection
- Uses scaled debt to avoid precision loss
- Normalizes values to prevent overflow
- Validates all calculations

---

## Example User Journey

### Setup Phase
```
1. User deposits 1000 zUSDC (earning 5% APY)
   → Collateral Value: $1,100 (includes accrued interest)

2. User's Position:
   → Mask: 0b...0001000 (collateral bit 3)
   → Collateral: [(aid: 3, amount: 1000)]
   → Debt: []
```

### Borrowing Phase
```
3. User borrows 500 USDC
   → LTV Check: ($1,100 × 0.75) >= $500
   → $825 >= $500 ✓ Healthy

4. User's Position:
   → Mask: 0b...100000001000 (collateral bit 3 + debt bit 67)
   → Collateral: [(aid: 3, amount: 1000)]
   → Debt: [(aid: 3, scaled: 500)]
```

### Over Time
```
5. Interest accrues:
   → zUSDC grows to 1050 (supply yield)
   → Debt grows to 525 USDC (borrow interest)

6. Current State:
   → Collateral Value: $1,155 (1050 × $1.10 zUSDC price)
   → Debt Value: $525
   → LTV: 45% (very healthy)
```

### Repayment Phase
```
7. User repays 300 USDC
   → Debt reduced to 225 USDC
   → Can now borrow more or withdraw collateral
```

---

## Collateral Flexibility

Zest Protocol gives users full control over how their collateral is used. Unlike protocols that force a single model, users choose between:

### Non-Rehypothecated Collateral (Isolation)

Deposit underlying assets directly as collateral. Your assets are held in the market-vault and are **not lent out** to other borrowers.

```
User deposits 1 sBTC as collateral
↓
sBTC held in market-vault (isolated)
↓
Not earning yield, but not exposed to vault risk
↓
Can borrow against it
```

**Use cases:**
- Users who want maximum collateral safety
- Large positions where vault utilization risk matters
- Assets during volatile periods

### Rehypothecated Collateral (Yield-Bearing)

First deposit into a vault to receive ztokens, then use ztokens as collateral. Your underlying assets **are lent out** and earn supply APY.

```
User deposits 1 sBTC into vault → receives 1 zsBTC
↓
zsBTC used as collateral
↓
Underlying sBTC earns supply yield
↓
zsBTC value grows over time (liquidity index)
```

**Use cases:**
- Users who want yield on collateral
- Long-term positions where compound yield matters
- Maximizing capital efficiency

### The Choice is Yours

| Aspect | Non-Rehypothecated (sBTC) | Rehypothecated (zsBTC) |
|--------|---------------------------|------------------------|
| Collateral yield | None | Supply APY |
| Vault exposure | None | Yes (utilization risk) |
| Withdrawal | Instant | Subject to vault liquidity |
| Collateral value | Static | Grows with liquidity index |

**Key insight:** Both options use the same egroup risk parameters. The protocol doesn't force one model - users decide based on their risk preferences and yield objectives.

---

## Index Caching System

### Timestamp-Based Caching

The market maintains a **per-timestamp cache** for vault liquidity indexes to optimize gas usage:

```clarity
;; In market.clar
(define-map index-cache- 
  { timestamp: uint, aid: uint }
  { index: uint, lindex: uint })

(define-read-only (get-cached-indexes (aid uint))
  (map-get? index-cache- { timestamp: stacks-block-time, aid: aid }))

(define-private (accrue-and-cache (aid uint))
  (let ((cache-key { timestamp: stacks-block-time, aid: aid })
        (cached? (map-get? index-cache- cache-key)))
    (match cached?
      existing existing  ;; Return cached if exists
      (let ((fresh (vault-accrue aid)))  ;; Otherwise accrue vault
        (map-set index-cache- cache-key fresh)
        fresh))))
```

### Why Caching Matters

**Without Cache:**
```
Transaction with 3 collateral assets + 2 debt assets:
1. Borrow operation needs debt index → vault call
2. Price resolution needs debt lindex → vault call
3. Health check needs all indexes → 5 vault calls
Total: 7+ cross-contract calls
```

**With Cache:**
```
Same transaction:
1. First operation accrues vault, caches indexes
2. Subsequent operations read from cache
Total: 5 vault calls (one per asset)
```

**Savings:** 30%+ reduction in cross-contract calls for complex transactions.

### Cache Invalidation

Cache is **automatically invalidated** each block:
- Cache key includes `stacks-block-time` (block timestamp)
- New block → new timestamp → cache miss → fresh accrual
- No manual invalidation needed
- Eliminates stale data risks

---

## Pausability Features

The market contract includes comprehensive pausability controls for security:

### Liquidation Pause with Grace Period

```clarity
;; In market.clar
(define-data-var pause-liquidation bool false)
(define-data-var liquidation-grace-end uint u0)

(define-public (set-pause-liquidation (paused bool) (grace-period uint))
  (let ((was-paused (var-get pause-liquidation)))
    (if (and was-paused (not paused))
        ;; When unpausing, set grace period
        (var-set liquidation-grace-end 
                 (+ stacks-block-time grace-period))
        (var-set pause-liquidation paused))))

(define-read-only (liquidation-paused)
  (let ((manual-pause (var-get pause-liquidation))
        (grace-active (< stacks-block-time 
                         (var-get liquidation-grace-end))))
    (or manual-pause grace-active)))
```

**Purpose:**
- Emergency pause for security incidents
- Grace period allows positions to stabilize after unpause
- Prevents immediate liquidation cascade when reactivating
- DAO-controlled via governance

---

## Time-Based Features (Clarity 4)

The market contract extensively uses `stacks-block-time` for precise time-based operations:

### 1. Index Caching
```clarity
;; Cache keyed by timestamp
(define-map index-cache- 
  { timestamp: uint, aid: uint }  ;; stacks-block-time
  { index: uint, lindex: uint })
```

### 2. Oracle Timestamp Validation
```clarity
;; Validate price freshness
(define-private (oracle-timestamp-fresh (ts uint) (prev uint))
  (let ((curr stacks-block-time)
        (delta (- curr ts)))
    (and (<= delta CARDINALITY)  ;; Within 120 seconds
         (>= ts prev))))
```

### 3. Grace Period Management
```clarity
;; Time-based liquidation grace
(let ((grace-active (< stacks-block-time 
                       (var-get liquidation-grace-end))))
  ...)
```

**Benefits over block-height:**
- **Precise durations:** 120 seconds instead of "~20 blocks"
- **Predictable behavior:** No variance from block time fluctuations
- **Better UX:** Users understand time better than blocks
- **Accurate caching:** Per-second granularity

---

## Summary

The market system orchestrates all lending operations as the **central hub** of the protocol:

**Architecture:**
- **Largest contract:** Contains oracle, vault routing, and lending logic
- **Stateless design:** Only ephemeral caches, no persistent user state
- **Direct integration:** No separate oracle or vault-router contracts
- **Gas optimized:** Minimized cross-contract calls through consolidation

**Key Features:**
- **Flexible Collateral:** Support for any enabled asset, including yield-bearing ztokens
- **Health-Based Lending:** Dynamic LTV ratios based on asset risk profiles
- **Efficient Position Tracking:** Bitmap-based storage in market-vault for O(1) lookups
- **Automated Liquidations:** Market-driven liquidations maintain protocol solvency
- **Index Caching:** Timestamp-based caching reduces redundant vault calls
- **Pausability:** Emergency controls with grace periods
- **Time Precision:** Leverages `stacks-block-time` for accurate calculations

**Integrated Systems:**
- **Oracle resolution:** Direct Pyth/DIA integration with callcode transformations
- **Vault routing:** If-based routing to 6 vault contracts
- **Price caching:** Per-timestamp index caching for efficiency
- **Position storage:** Delegates to market-vault.clar for state

By consolidating oracle logic and vault routing into market.clar, the protocol achieves lower gas costs, simpler architecture, and better maintainability while enabling ztokens as collateral for unmatched capital efficiency.
