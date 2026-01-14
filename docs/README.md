# Zest Protocol Documentation

## Core Components

### Assets System
The asset registry manages all supported tokens in the protocol, including:
- Asset registration and enablement
- Bitmap-based state tracking
- Oracle configuration per asset

[Learn more about Assets →](assets.md)

### Efficiency Groups (egroups)
Risk parameter management through asset set masks:
- Dynamic LTV and liquidation parameters
- Optimized bucket system for fast lookups
- Flexible risk profiles for asset combinations

[Learn more about Efficiency Groups →](egroups.md)

### Oracle System
Price feed infrastructure **integrated directly into market.clar**:
- Direct Pyth and DIA oracle integration
- Callcode transformations for derived assets (ststx, ztokens)
- Per-asset staleness validation
- Batch fetching for gas efficiency

> **Note:** Oracle logic was consolidated into market.clar for gas optimization and to eliminate circular dependencies.

[Learn more about Oracles →](oracle.md)

### Vault System
Interest-bearing lending pools with optional rehypothecatable collateral:
- ERC-4626-style tokenized vaults
- Dynamic interest rate models using `stacks-block-time`
- Direct vault access from market.clar (no separate router)

> **Note:** Vault routing logic is embedded in market.clar for efficiency.

[Learn more about Vaults →](vaults.md)

### Market System
**Central hub** orchestrating all protocol operations:
- Core lending and borrowing logic
- Integrated oracle resolution (Pyth, DIA)
- Direct vault routing (borrow, repay)
- Collateral and debt management
- Health-based lending with LTV ratios
- Automated liquidations
- Timestamp-based index caching
- Stateless design (ephemeral data only)

> **Note:** market.clar is the largest contract, consolidating oracle and vault routing for gas optimization.

[Learn more about Market →](market.md)

### DAO System
Protocol governance and treasury management:
- Multisig proposal system with expiration
- Treasury accumulating protocol fees as vault shares
- Executor for proposal implementation with 7-day timelock
- Following AAVE model for fee accrual

[Learn more about DAO →](dao.md)

### Error Codes
Complete reference of error codes by contract:

[Learn more about Error Codes →](errors.md)

## Protocol Architecture

```
              ┌──────────────────────────────┐
              │       market.clar            │
              │   (Central Orchestrator)     │
              │                              │
              │  • Oracle logic integrated   │
              │  • Vault routing embedded    │
              │  • Lending operations        │
              │  • Health calculations       │
              │  • Index caching             │
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

**Key Architectural Features:**
- **market.clar** is the central hub containing oracle logic and vault routing
- No separate `oracle.clar` or `vault-router.clar` contracts
- Direct integration with Pyth and DIA oracles
- Direct vault access via embedded routing logic
- Optimized for lower gas costs and simpler architecture

## Key Features

### Flexible Collateral Modes
Users choose their preferred collateral approach:
- Traditional: Direct asset collateral (no supply APY from Zest)
- Rehypothecatable: ztoken collateral earning supply APY

### Consolidated Architecture
Market.clar as central orchestrator:
- Oracle logic integrated (no separate oracle contract)
- Vault routing embedded (no separate router contract)
- Eliminates circular dependencies
- Reduces cross-contract calls for lower gas costs

### Bitmap-Based State Management
Assets use a single `uint` to track collateral and debt states for up to 64 assets, enabling:
- O(1) status lookups
- Efficient mask operations
- Compact storage

### Efficiency Groups
Instead of managing N×N asset pair parameters, egroups use bit masks to define risk parameters for asset sets:
- ~10-20 egroups cover all combinations
- Automatic fallback to conservative defaults
- Bucket optimization for O(log n) lookups

### Integrated Oracle System
Flexible price feed system in market.clar:
- Direct integration with Pyth and DIA oracles
- Callcode transformations (staking ratios, liquidity indexes)
- Per-asset staleness validation
- Batch fetching for efficiency
- Monotonic timestamp tracking for security

### Time-Based Calculations
Protocol-wide use of `stacks-block-time`:
- Precise timestamp-based interest accrual in vaults
- Accurate oracle price freshness validation
- Index caching with automatic invalidation
- More predictable behavior than block-height approximations

### Index Caching
Market.clar caches vault indexes per timestamp:
- Reduces redundant cross-contract calls
- 30%+ gas savings for complex transactions
- Automatic cache invalidation each block
- Optimizes ztoken price resolution

## Getting Started

1. **[High-Level Overview](High-Level-Overview.md)** - Start with the architectural overview
2. **[Assets](assets.md)** - Learn how tokens are managed in the registry
3. **[Egroups](egroups.md)** - Understand risk parameter organization
4. **[Oracles](oracle.md)** - See how pricing is maintained
5. **[Vaults](vaults.md)** - Explore the vault system
6. **[Market](market.md)** - Deep dive into the central orchestrator

## Smart Contract Language

All contracts are written in **Clarity**, a decidable smart contract language that:
- Prevents reentrancy by design
- Has no compiler (interpreted)
- Provides complete static analysis
- Ensures predictable gas costs

## Additional Resources

- [Clarity Language Documentation](https://docs.stacks.co/clarity)
- [Stacks Blockchain](https://www.stacks.co)
