# Efficiency Groups (egroups)

In a lending protocol with N assets, you could have NxN asset pair combinations. Managing risk parameters for each would be incredibly inefficient as resolving specific risk parameters would require **O(N²)** operations and storage. As the number of assets grows linearly, the complexity of maintaining these pairwise relationships grows **quadratically**, quickly becoming unmanageable at scale.

In Zest, egroups are represented by bit masks that encode a set of risk parameters for the combination of assets used in that egroup. When a user has multiple assets, we find the most specific egroup that covers their combination.

We introduce a bucket system that reduces complexity from **O(N²) to O(N × K)**, where K is the average number of egroups per bucket. In practice, this means:

- **Without buckets**: For N assets, you might need to check all possible egroups (potentially N²) to find a match
- **With buckets**: You only check egroups in buckets corresponding to the user's asset count. If a user has M assets, you start with bucket M-1 and work down, checking only egroups with that specific population count

For example, if a user holds 3 assets, you only examine the bucket which contains 3-asset egroups, dramatically reducing the search space. This optimization is especially powerful when users typically hold a small subset of available assets, making K much smaller than N, which is the common case for positions in a lending market.

## egroup.clar - Efficiency Groups

### Risk parameter structure:

```
(
  MASK                 : uint,      // Which assets this applies to (bitmask)
  BORROW-DISABLED-MASK : uint.      // Which borrow assets are disabled in this group (security control)
  LTV-BORROW           : (buff 2),  // Max LTV for borrowing (bps, e.g., 7500 = 75%)
  LTV-LIQ-PARTIAL      : (buff 2),  // LTV threshold for partial liquidation (bps)
  LTV-LIQ-FULL         : (buff 2),  // LTV threshold for full liquidation (bps)
  LIQ-PENALTY-MIN      : (buff 2),  // Min liquidation penalty/bonus (bps)
  LIQ-PENALTY-MAX      : (buff 2),  // Max liquidation penalty/bonus (bps)
  LIQ-CURVE-EXP        : (buff 2)   // Curve exponent for graduated liquidation (bps)
)
```

**Parameter Details:**

| Parameter | Range | Example | Description |
|-----------|-------|---------|-------------|
| `BORROW-DISABLED-MASK` | uint bitmask | u4 (disable sBTC) | Bitmask of debt assets disabled for borrowing in this egroup. Bit N = asset ID N disabled. |
| `LTV-BORROW` | 0-10000 bps | 7500 (75%) | Maximum LTV for new borrows |
| `LTV-LIQ-PARTIAL` | 0-10000 bps | 8500 (85%) | LTV at which partial liquidation starts |
| `LTV-LIQ-FULL` | 0-10000 bps | 9500 (95%) | LTV at which full liquidation allowed |
| `LIQ-PENALTY-MIN` | 0-10000 bps | 100 (1%) | Minimum liquidation penalty |
| `LIQ-PENALTY-MAX` | 0-10000 bps | 1000 (10%) | Maximum liquidation penalty |
| `LIQ-CURVE-EXP` | bps | 10000 (1.0) | Exponent for graduated penalty curve |

**Graduated Liquidation:**

The `LIQ-CURVE-EXP` parameter controls how liquidation penalty scales between min and max:
- `10000` (1.0): Linear scaling
- `>10000` (>1.0): Aggressive curve (penalty increases faster)
- `<10000` (<1.0): Gentle curve (e.g., square root)

### The Mask System

**Mask = Bitmap representing asset combination**

Example masks:
- `0b0001` = Asset 0 only
- `0b0011` = Assets 0 and 1
- `0b0111` = Assets 0, 1, 2
- `0b1111` = Assets 0, 1, 2, 3

### The Bucket System (Optimization)

**Problem:** Finding matching egroup could require checking all egroups.

**Solution:** Group egroups by "population count" (number of assets).

```
(define-map buckets (buff 1) (list 128 uint))
(define-data-var popbucket- uint u0)
```

#### How it works
1. `popbucket-` is a bitmap where bit N = "bucket N has egroups"
2. Bucket N contains egroups with N+1 assets
3. When resolving, only check relevant buckets

#### Example
- User has 3 assets -> Population count = 3
- Only check buckets with ≥3 assets
- Find smallest superset (most specific match)

### The Resolution Algorithm

```
(define-read-only (resolve (mask uint))
```

#### Steps:

1. Calculate minimum population (# of bits set in user's mask)
2. Get active buckets ≥ minimum
3. Search buckets from smallest to largest
4. Return first egroup where `user_mask ⊆ egroup_mask`
5. If no match, return DEFAULT (mask = MAX-U128, covers everything)

#### Example walkthrough

```
User has: Assets 0, 2 → mask = 0b0101 → popcount = 2

Available egroups:
- ID 1: mask 0b0101, popcount 2 (exact match)
- ID 2: mask 0b0111, popcount 3 (superset)
- ID 3: mask 0b1111, popcount 4 (superset)

Resolution:
1. min_pop = 2
2. Check bucket 2 first (popcount 2)
3. Find ID 1 (0b0101) - user mask is subset ✓
4. Return ID 1 parameters
```

## Egroup lifecycle and usage

### 1. Egroup Creation (egroup.clar)

- DAO creates egroup: `insert((MASK, LTV params, ...))`
- MASK defines which asset combinations this egroup applies to

### 2. Runtime resolution (egroup.clar)

- User has collateral assets -> mask computed
- `resolve(user_mask)` finds most specific egroup
- Returns risk parameters for that combination

### 3. Offboarding

- DAO disables assets: `disable(asset, collateral=true/false)`

## Key Insights

- __Efficiency__: Instead of N² parameters, define ~10-20 egroups
- __Flexibility__: Can have specific rules for risky combinations
- __Default Safety__: Unconfigured combinations use conservative DEFAULT
- __Gas Optimization__: Bucket system ensures O(log n) lookups
