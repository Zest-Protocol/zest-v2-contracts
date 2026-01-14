# Vault System

## Overview

Vaults are the core of the Zest lending protocol. Each vault manages a single underlying asset (STX, sBTC, USDC, etc.) and issues **ztokens** (vault receipt tokens) to depositors. These ztokens represent shares in the vault's lending pool and accrue value over time as interest is earned.

### Key Innovation: Rehypothecatable Loans

A defining feature of the Zest protocol is that **ztokens can be used as collateral** while simultaneously earning supply yield. This means:

- Users deposit USDC → receive zUSDC
- zUSDC accrues interest from lending activity
- Users can use zUSDC as collateral to borrow other assets
- Users earn yield even while their assets are pledged as collateral

This creates **capital efficiency** unmatched by traditional lending protocols where collateral sits idle.

---

## Architecture

### Vault Traits

Each vault implements multiple traits that define its capabilities:

#### 1. Tokenized Vault (SIP-10 Compatible)
Vaults issue fungible tokens following the SIP-10 standard:
- **Name & Symbol:** e.g., "Zest USDC" / "zUSDC"
- **Total Supply:** Dynamic based on deposits/withdrawals
- **Balances:** Track each user's vault shares
- **Transfers:** Standard token transfer capability

#### 2. Lending Interface
Core lending pool functionality:
- **Interest Accrual:** Compound interest via index mechanism
- **Utilization Tracking:** Monitors borrowed vs. supplied amounts
- **Dynamic Rates:** Interest rates adjust based on utilization
- **Borrow/Repay:** System functions for market contract integration

#### 3. Flashloan Support
Enables uncollateralized loans within a single transaction:
- Borrow any available amount
- Execute arbitrary logic via callback
- Repay with fee before transaction ends
- Useful for arbitrage, liquidations, collateral swaps

#### 4. Reserve Parameters
Configurable risk and operational parameters:
- **Caps:** Maximum debt and supply limits
- **Fees:** Flash loan and protocol fees
- **Interest Curves:** 8-point utilization/rate curves for dynamic pricing

---

## Share Pricing Mechanism

### How Ztokens Accrue Value

Vault shares (ztokens) increase in value relative to underlying assets through the **liquidity index**:

```
Initial State:
- 1 zUSDC = 1 USDC (index = 1.0)

After Interest Accrual:
- 1 zUSDC = 1.10 USDC (index = 1.10)
- 10% interest earned

Later:
- 1 zUSDC = 1.25 USDC (index = 1.25)
- 25% cumulative interest
```

### Deposit Flow
1. User deposits 100 USDC
2. Vault calculates shares: `shares = amount / price`
3. If current price is 1.10 USDC per share
4. User receives ~90.9 zUSDC
5. Value remains 100 USDC equivalent

### Withdrawal Flow
1. User withdraws 90.9 zUSDC
2. Vault calculates redemption: `amount = shares * price`
3. If current price is 1.25 USDC per share
4. User receives 113.6 USDC
5. Net gain: 13.6 USDC in interest

---

## Interest Rate Model

### Dynamic Rate Adjustment

Interest rates adjust automatically based on **utilization**:

```
Utilization = Borrowed / Supplied

Low Utilization (0-40%):
- Low rates encourage borrowing
- Example: 2-5% APR

Moderate Utilization (40-80%):
- Rates increase gradually
- Example: 5-15% APR

High Utilization (80-100%):
- High rates incentivize repayment
- Example: 15-50% APR
```

### 8-Point Interest Curve

Each vault uses an 8-point curve defining rate at specific utilization levels:

```
Utilization Points: [0%, 20%, 40%, 60%, 70%, 80%, 90%, 100%]
Interest Rates:     [2%, 4%,  8%,  15%, 30%, 50%, 80%, 120%]
```

The vault interpolates between points for intermediate utilization values.

---

## Direct Vault Access from Market

### Architecture Overview

The market contract (`market.clar`) accesses vaults directly through internal routing functions. There is **no separate vault-router contract**. Instead, vault routing logic is embedded directly in market.clar for gas optimization and to eliminate circular dependencies.

```clarity
;; In market.clar - Direct vault access by underlying asset ID
(define-private (vault-system-borrow (aid uint) (amount uint))
  (if (is-eq aid u0)  ;; STX
      (contract-call? .vault-stx system-borrow amount)
      (if (is-eq aid u2)  ;; sBTC
          (contract-call? .vault-sbtc system-borrow amount)
          (if (is-eq aid u4)  ;; stSTX
              (contract-call? .vault-ststx system-borrow amount)
              (if (is-eq aid u6)  ;; USDC
                  (contract-call? .vault-usdc system-borrow amount)
                  (if (is-eq aid u8)  ;; USDH
                      (contract-call? .vault-usdh system-borrow amount)
                      (contract-call? .vault-ststxbtc system-borrow amount)))))))  ;; stSTXbtc (aid 10)
```

### Asset ID to Vault Mapping

Assets use a **paired ID system** where each underlying asset and its ztoken are adjacent:

```
Underlying ID → Vault          → Ztoken ID
-------------------------------------------------
0 (STX)       → vault-stx      → 1 (zSTX)
2 (sBTC)      → vault-sbtc     → 3 (zsBTC)
4 (stSTX)     → vault-ststx    → 5 (zstSTX)
6 (USDC)      → vault-usdc     → 7 (zUSDC)
8 (USDH)      → vault-usdh     → 9 (zUSDH)
10 (stSTXbtc) → vault-ststxbtc → 11 (zstSTXbtc)
```

Pattern: `ztoken_id = underlying_id + 1`

### Vault Operations

The market contract has two primary vault interaction functions:

**Borrowing:**
```clarity
;; In market.clar
(define-private (vault-system-borrow (aid uint) (amount uint))
  ;; Routes to appropriate vault based on asset ID
  ;; Used when users borrow assets
)
```

**Repayment:**
```clarity
;; In market.clar
(define-private (vault-system-repay (aid uint) (amount uint))
  ;; Routes to appropriate vault based on asset ID
  ;; Used when users repay debt or liquidations occur
)
```

### Benefits of Direct Access

- **Lower gas costs:** No additional cross-contract hop
- **Simpler architecture:** Eliminates router contract
- **Better maintainability:** All market logic in one place
- **No circular dependencies:** Market doesn't need to import router traits

### Independence of Vaults

Each vault operates **independently** and can be deployed incrementally:
- Vaults don't know about each other
- Vaults don't know about the market
- Market coordinates all vault interactions
- New vaults can be added by updating market.clar routing logic

---

## Individual Vaults

The protocol currently supports 6 vaults:

### 1. vault-stx
- **Underlying:** Wrapped STX (wSTX)
- **Ztoken:** zSTX
- **Purpose:** Native Stacks token lending

### 2. vault-sbtc
- **Underlying:** Synthetic Bitcoin (sBTC)
- **Ztoken:** zsBTC
- **Purpose:** Bitcoin-backed lending on Stacks

### 3. vault-ststx
- **Underlying:** Stacked STX (stSTX)
- **Ztoken:** zstSTX
- **Special:** Dual yield (staking + lending)

### 4. vault-usdc
- **Underlying:** USD Coin
- **Ztoken:** zUSDC
- **Purpose:** Stablecoin lending

### 5. vault-usdh
- **Underlying:** Hermetica USD
- **Ztoken:** zUSDH
- **Purpose:** Alternative stablecoin option

### 6. vault-ststxbtc
- **Underlying:** Liquid staked STX (BTC yield)
- **Ztoken:** zstSTXbtc
- **Purpose:** Liquid staking with BTC-denominated yield

Each vault operates independently but follows the same architecture and interfaces.

---

## Vault Accrual and Index Caching

### Interest Accrual

Each vault tracks interest using two indexes. The market contract maintains a timestamp-based cache of these indexes to optimize operations.

### Two Types of Index

#### 1. Borrow Index
Tracks accumulated interest on debt:
```
Initial: index = 1.0
Borrow: user owes 100 USDC at index 1.0
Time passes...
Current: index = 1.15
Actual debt: 100 × (1.15 / 1.0) = 115 USDC
```

#### 2. Liquidity Index
Tracks accumulated interest on deposits:
```
Initial: index = 1.0
Supply: user deposits 100 USDC, gets 100 zUSDC
Time passes...
Current: index = 1.10
Redemption value: 100 × 1.10 = 110 USDC
```

### Protocol Reserves & DAO Treasury

A portion of interest earned goes to protocol reserves, which are minted directly as vault shares to the DAO treasury contract. This follows the AAVE model where treasury minting occurs on each vault state update.

**Reserve Factor:** Percentage of interest allocated to protocol (e.g., 10%)

**Treasury Minting Process:**
```clarity
;; In vault contracts (e.g., vault-stx.clar)
;; On each accrue operation:
;; 1. Calculate total interest earned
;; 2. Reserve factor determines protocol share (e.g., 10%)
;; 3. Mint vault shares directly to dao-treasury
;; 4. Remaining interest goes to suppliers
```

**Reference:** Similar to [AAVE's ReserveLogic](https://github.com/aave-dao/aave-v3-origin/blob/8a43339b6f93ea0a2f4d8e1ef3b9494c9d206a64/src/contracts/protocol/libraries/logic/ReserveLogic.sol#L85-L101) where treasury minting happens on status updates.

**Example:** 
- 10 USDC interest earned
- 10% reserve factor
- 1 USDC equivalent in zUSDC shares → dao-treasury
- 9 USDC equivalent in value → suppliers

---

## Index Caching in Market

The market contract caches vault indexes per timestamp to avoid redundant vault calls within the same block:

```clarity
;; In market.clar
(define-map index-cache- 
  { timestamp: uint, aid: uint }
  { index: uint, lindex: uint })

(define-private (accrue-and-cache (aid uint))
  (let ((cache-key { timestamp: stacks-block-time, aid: aid }))
    ;; Check cache first, accrue vault if needed
    (match (map-get? index-cache- cache-key)
      existing existing
      (let ((fresh (vault-accrue aid)))
        (map-set index-cache- cache-key fresh)
        fresh))))
```

**Benefits:**
- Multiple operations on same vault in one block use cached index
- Reduces cross-contract calls significantly
- Lower gas costs for complex transactions
- Cache automatically invalidates next block (timestamp changes)

---

## Flash Loans

### Whitelisted Partners Only

Flash loans are **restricted to whitelisted addresses** approved by the DAO. This is not a public feature - access is granted to trusted partners for specific protocol operations.

```
1. Whitelisted contract borrows from vault
2. Executes callback logic
3. Repays principal before transaction ends
4. Transaction completes (or reverts if repayment fails)
```

### Primary Purpose: Market Health

At launch, flashloans are primarily used for:

- **Liquidations:** Enable liquidators to repay debt and seize collateral atomically without upfront capital
- **Market health operations:** Protocol-approved contracts that help maintain healthy market conditions

The whitelist ensures flashloan access is controlled and limited to vetted use cases that benefit protocol stability.

---

## Security Features

### 1. Isolation
Each vault is independent:
- Bug in one vault doesn't affect others
- Different risk parameters per asset
- Isolated liquidity pools

### 2. Caps
Configurable limits protect against over-exposure:
- **Supply Cap:** Maximum deposits accepted
- **Debt Cap:** Maximum borrowing allowed
- Prevents concentration risk

### 3. Authorization
Strict access controls:
- Only market contract can borrow/repay
- Only DAO can update parameters
- Prevents unauthorized access

### 4. Interest Accrual
Regular accrual keeps state current:
- Compound interest calculated using `stacks-block-time` for precision
- Time-based calculations more accurate than block-height approximations
- Prevents interest calculation attacks
- Maintains accurate accounting

### 5. Time-Based Calculations (Clarity 4)
All vaults use `stacks-block-time` for precise interest calculations:
- Direct access to block timestamp (not approximated)
- Interest accrued in seconds, not estimated blocks
- More predictable APY calculations
- Eliminates variance from block time fluctuations

---

## Capital Efficiency Comparison

### Traditional Lending
```
User deposits 1000 USDC
↓
Receives receipt token
↓
Token sits idle (no yield while used as collateral)
↓
Borrows 500 USDC worth of assets
```

### Zest Protocol
```
User deposits 1000 USDC
↓
Receives 1000 zUSDC (earns lending yield)
↓
Uses zUSDC as collateral (still earning yield!)
↓
Borrows 500 USDC worth of assets
↓
User earning yield on 1000 USDC while borrowing against it
```

**Result:** Higher capital efficiency, better returns for users.

---

## Summary

The vault system is the foundation of Zest Protocol's lending infrastructure. By combining:
- **ERC-4626-style** share tokenization
- **Rehypothecatable** collateral (ztokens)
- **Dynamic** interest rates
- **Flash loan** support
- **Direct market routing** (embedded in market.clar)

The vaults enable capital-efficient lending while maintaining security and flexibility. Users can maximize yield by earning interest on their deposits even while using those deposits as collateral for borrowing.
