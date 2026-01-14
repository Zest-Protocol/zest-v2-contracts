# Zest Protocol Architecture Overview

This document provides a high-level breakdown of how the Zest Protocol lending market operates on the Stacks blockchain.

## 1. High-Level Architecture

The architecture follows a **Hub-and-Spoke** model where a central Market contract coordinates interactions between users, registries, and individual Asset Vaults. This design separates concerns into:
- **Business Logic** (Market)
- **State Management** (Market Vault)
- **Configuration** (Registries)
- **Liquidity** (Vaults)

## 2. Core Components

### The Market (`contracts/market/market.clar`)
The "brain" of the operation. It is the main entry point for user actions involving debt and collateral management.

**Responsibilities:**
*   **Health Checks:** Calculates Account Health (LTV) before allowing operations like borrowing or withdrawing collateral.
*   **Oracle Integration:** Fetches prices from Pyth or DIA to value assets in USD.
*   **Liquidation Logic:** Handles the math for determining if a position is unsafe and processing liquidations.
*   **Routing:** Directs calls to the appropriate underlying Vaults (e.g., routing USDC requests to `vault-usdc`).

### The Market Vault (`contracts/market/market-vault.clar`)
The "ledger." It acts as the database for user positions.

**Responsibilities:**
*   **Obligations:** Stores exactly how much collateral a user has provided and how much debt they have taken on, indexed by Asset ID.
*   **Bitmask Management:** Uses gas-efficient bitmasks to track which assets a user has enabled as collateral or debt.
*   **Access Control:** Only the Market contract can instruct it to update balances.

### The Registries
#### Asset Registry (`contracts/registry/assets.clar`)
*   Maps generic Principal addresses (e.g., the SIP-10 token contract) to internal numeric IDs (e.g., `u0` for STX, `u3` for USDC).
*   Stores Oracle configuration (feed IDs, callcodes, and staleness thresholds) for each asset.
*   Maintains a global "enabled" bitmap showing which assets are active.
*   Validates staleness: `max-staleness > 0` required during asset registration

#### Efficiency Groups (`contracts/registry/egroup.clar`)
*   **Concept:** A standout feature that defines **Risk Parameters** (LTV, Liquidation Thresholds, Penalties) for "groups" of assets instead of per-asset settings.
*   **Mechanism:** Uses bitmasks to match a user's specific combination of collateral/debt assets to a registered "Efficiency Group," enabling higher capital efficiency for correlated assets or safer portfolios.

### Vaults (e.g., `contracts/vault/vault-usdc.clar`)
The "bank." Each supported asset has its own contract.

**Responsibilities:**
*   **SIP-10 Token:** The vault issues a token (e.g., `zUSDC`) to lenders, representing their share of the pool plus interest.
*   **Interest Accrual:** Calculates interest indices to grow the value of shares over time based on utilization rates.
*   **Liquidity Management:** Holds and manages the actual underlying tokens.
*   **Lending Logic:** Exposes `system-borrow` and `system-repay` functions restricted to the Market contract.

## 3. Key Workflows

### Lending (Depositing)
1.  User calls `deposit` directly on a specific Vault (e.g., `vault-usdc`).
2.  User transfers underlying tokens (e.g., USDC) to the vault.
3.  Vault mints `zUSDC` tokens to the user.

### Entering the Market (Collateral)
1.  User calls `collateral-add(ft, amount)` on `market.clar`.
2.  Market verifies the asset is supported.
3.  **Authorization**: Uses `contract-caller` (M05 audit fix eliminates explicit account parameter).
4.  **Two paths**:
    - If `contract-caller == tx-sender`: Market-vault pulls tokens directly from user
    - If `contract-caller != tx-sender`: Market transfers tokens to itself first, then calls market-vault as-contract
5.  `market-vault` updates the user's bitmask to reflect the active collateral.

### Borrowing
1.  User calls `borrow` on `market.clar`.
2.  **Validation:** Market resolves the user's "EGroup" based on their collateral/debt mix to determine max LTV. It converts all user assets to USD using Oracles to ensure the loan is healthy.
3.  **Execution:** If healthy, Market instructs the specific Vault to send tokens to the user and tells `market-vault` to record the debt.

### Liquidation
1.  Anyone can call `liquidate` on `market.clar`.
2.  Market checks if User Health < Liquidation Threshold.
3.  If unsafe, the liquidator repays a portion of the debt and receives a portion of the borrower's collateral (plus a penalty bonus).

## 4. Security Features

### Collateral-Add Egroup Transition Protection

**Issue**: Adding new collateral types can change a user's egroup, potentially decreasing their health capacity and making positions liquidatable.

**Protection Mechanism** (Implemented in `collateral-add`):

1. **Egroup Validation (ALL users)**:
   - Validates future mask (after adding collateral) matches an existing egroup
   - Uses subset matching: user's collateral-only mask can match collateral+debt egroups
   - Fails with `ERR-NO-EGROUP-FOUND` if no valid egroup exists

2. **Capacity Protection (Users with debt)**:
   - When adding NEW collateral type AND user has debt
   - Calculates: `current_capacity = collateral_usd × current_ltv`
   - Calculates: `future_capacity = (collateral_usd + new_collateral_usd) × future_ltv`
   - Validates: `future_capacity >= current_capacity`
   - Fails with `ERR-UNHEALTHY` if capacity would decrease

3. **Optimizations**:
   - Existing collateral: Skips all checks (safe to add more)
   - No debt: Skips capacity check (only validates egroup)
   - Minimal gas overhead for common cases

**Attack Scenarios Prevented**:
- Dust collateral poisoning (adding tiny amounts to worsen position)
- Self-liquidation exploits (manipulating egroup to trigger liquidation with penalty)
- Accidental position deterioration (users can't make themselves liquidatable by adding collateral)

## 5. Technical Highlights
*   **Bitmasks:** Extensive use of bitwise operations (`uint` masks) for state tracking, providing gas efficiency and avoiding expensive list iterations.
*   **Isolation:** Separation of logic (`market`) and state (`market-vault`) allows logic upgrades without migrating state.
*   **Oracle Redundancy:** Explicit support for multiple oracle types (Pyth, DIA) ensures price feed resilience.
*   **Egroup Protection:** Validates all position changes maintain valid egroups and don't worsen health when debt exists.
*   **In-Band Price Updates:** Hot path functions (`collateral-add`, `collateral-remove`, `borrow`, `liquidate`) accept an optional `price-feeds` parameter of type `(optional (list 3 (buff 8192)))`. This allows atomic price updates when prices become stale, eliminating the need for separate "update prices then retry" flows. Currently sized for 3 feeds (BTC, STX, USDC) - will expand as more Pyth feeds become available. Note: `liquidate-multi` passes `none` internally and does not support in-band updates.
