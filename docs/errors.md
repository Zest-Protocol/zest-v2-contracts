# Error Codes

This document lists all error code prefixes across the Zest Protocol codebase for easier tracking and debugging.

## Error Code Format

Error codes use a 6-digit format where:
- **First 3 digits**: Contract identifier (prefix)
- **Last 3 digits**: Specific error code within that contract

## Contract Error Prefixes

| Contract | Prefix | Range | Description |
|----------|--------|-------|-------------|
| `dao-multisig` | 100xxx | u100001-u100007 | Multisig governance errors |
| `dao-executor` | 200xxx | u200001-u200002 | Proposal execution errors |
| `dao-treasury` | 300xxx | u300001 | Treasury operation errors |
| `market` | 400xxx | u400001-u400025 | Core market/lending errors |
| `market-vault` | 600xxx | u600001-u600007 | Position storage errors |
| `pack` | 700xxx | u700001 | Bit packing utility errors |
| `assets` (registry) | 710xxx | u710001-u710008 | Asset registry errors |
| `egroup` (registry) | 720xxx | u720001-u720007 | Efficiency group errors |
| `vault-stx` | 800xxx | u800001-u800024 | STX vault errors |
| `vault-sbtc` | 801xxx | u801001-u801023 | sBTC vault errors |
| `vault-ststx` | 802xxx | u802001-u802024 | stSTX vault errors |
| `vault-usdc` | 803xxx | u803001-u803024 | USDC vault errors |
| `vault-usdh` | 804xxx | u804001-u804024 | USDH vault errors |
| `vault-ststxbtc` | 810xxx | u810001-u810024 | stSTXbtc vault errors |

---

## Detailed Error Codes by Contract

### dao-multisig (100xxx)

| Code | Name | Description |
|------|------|-------------|
| u100001 | ERR-DAO | Not authorized as DAO executor |
| u100002 | ERR-SIGNER | Caller is not a signer |
| u100003 | ERR-SANITY-SIGNER | Invalid signer operation |
| u100004 | ERR-SANITY-PROPOSAL | Invalid proposal operation |
| u100005 | ERR-PROPOSAL-EXPIRED | Proposal has expired |
| u100006 | ERR-IMPL-UPDATE-PENDING | Implementation update already scheduled |
| u100007 | ERR-IMPL-UPDATE-NOT-READY | Implementation update timelock not elapsed |

### dao-executor (200xxx)

| Code | Name | Description |
|------|------|-------------|
| u200001 | ERR-AUTH | Not authorized (not current impl) |
| u200002 | ERR-INIT | Initialization failed (not deployer or already initialized) |

### dao-treasury (300xxx)

| Code | Name | Description |
|------|------|-------------|
| u300001 | ERR-AUTH | Not authorized as DAO executor |

### market (400xxx)

| Code | Name | Description |
|------|------|-------------|
| u400001 | ERR-AUTH | Not authorized as DAO executor |
| u400002 | ERR-AMOUNT-ZERO | Amount cannot be zero |
| u400003 | ERR-COLLATERAL-DISABLED | Collateral not enabled for this asset |
| u400004 | ERR-BORROW-DISABLED | Borrowing not enabled for this asset |
| u400005 | ERR-UNHEALTHY | Position would become unhealthy |
| u400006 | ERR-INSUFFICIENT-SCALED-DEBT | Not enough debt to repay |
| u400007 | ERR-INSUFFICIENT-COLLATERAL | Not enough collateral |
| u400008 | ERR-ZERO-LIQUIDATION-AMOUNTS | Liquidation amounts are zero |
| u400009 | ERR-UNKNOWN-VAULT | Asset ID doesn't map to known vault |
| u400010 | ERR-ORACLE-TYPE | Unknown oracle type |
| u400011 | ERR-ORACLE-CALLCODE | Unknown oracle callcode |
| u400012 | ERR-ORACLE-PYTH | Pyth oracle call failed |
| u400013 | ERR-ORACLE-DIA | DIA oracle call failed |
| u400014 | ERR-ORACLE-INVARIANT | Oracle validation failed |
| u400015 | ERR-ORACLE-MULTI | Multi-oracle resolution failed |
| u400016 | ERR-LIQUIDATION-PAUSED | Liquidations are paused |
| u400017 | ERR-PRICE-CONFIDENCE-LOW | Oracle price confidence too low |
| u400018 | ERR-HEALTHY | Position is healthy (cannot liquidate) |
| u400019 | ERR-SLIPPAGE / ERR-ORACLE-MOCK | Slippage protection triggered / Mock oracle failed |
| u400020 | ERR-DISABLED-COLLATERAL-PRICE-FAILED | Failed to get price for disabled collateral |
| u400021 | ERR-BAD-DEBT-SOCIALIZATION-FAILED | Bad debt socialization failed |
| u400022 | ERR-PRICE-FEED-UPDATE-FAILED | Pyth price feed update failed |
| u400023 | ERR-EGROUP-ASSET-BORROW-DISABLED | Asset borrowing disabled in this egroup |
| u400024 | ERR-LIQUIDATION-BORROW-SAME-BLOCK | Cannot liquidate position borrowed in same block |
| u400025 | ERR-AUTHORIZATION | General authorization failure |

### market-vault (600xxx)

| Code | Name | Description |
|------|------|-------------|
| u600001 | ERR-AUTH | Not authorized as market contract |
| u600002 | ERR-PAUSED | Market vault is paused |
| u600003 | ERR-AMOUNT-ZERO | Amount cannot be zero |
| u600004 | ERR-INSUFFICIENT-COLLATERAL | Insufficient collateral balance |
| u600005 | ERR-INSUFFICIENT-DEBT | Insufficient debt balance |
| u600006 | ERR-UNTRACKED-ACCOUNT | Account not tracked in registry |
| u600007 | ERR-COLLATERAL-TRANSFER-FAILED | Collateral transfer failed |

### pack (700xxx)

| Code | Name | Description |
|------|------|-------------|
| u700001 | ERR-INVALID-U16 | Value exceeds u16 max (65535) |

### assets - Registry (710xxx)

| Code | Name | Description |
|------|------|-------------|
| u710001 | ERR-AUTH | Not authorized as DAO executor |
| u710002 | ERR-LIMIT-REACHED | Maximum assets (64) reached |
| u710003 | ERR-ALREADY-REGISTERED | Asset already registered |
| u710004 | ERR-ALREADY-ENABLED | Asset already enabled for this type |
| u710005 | ERR-NOT-ENABLED | Asset not enabled for this type |
| u710006 | ERR-INVALID-STALENESS | Max staleness cannot be zero |
| u710007 | ERR-INVALID-ASSET | Invalid asset |
| u710008 | ERR-INVALID-ID | Invalid asset ID |

### egroup - Registry (720xxx)

| Code | Name | Description |
|------|------|-------------|
| u720001 | ERR-AUTH | Not authorized as DAO executor |
| u720002 | ERR-ALREADY-REGISTERED | Egroup with this mask already exists |
| u720003 | ERR-LIQ-PARAMS-INVALID | Liquidation parameters invalid |
| u720004 | ERR-LIMIT-REACHED | Maximum egroups reached |
| u720005 | ERR-MASK-UPDATE-FAILED | Mask update failed |
| u720006 | ERR-SUPERSET-INVARIANT-VIOLATION | Superset egroup must have <= LTV-BORROW |
| u720007 | ERR-NO-EGROUP-FOUND | No matching egroup for user mask |

### vault-* (800xxx - 810xxx)

All vaults share the same error structure with different prefixes:

| Vault | Prefix |
|-------|--------|
| vault-stx | 800xxx |
| vault-sbtc | 801xxx |
| vault-ststx | 802xxx |
| vault-usdc | 803xxx |
| vault-usdh | 804xxx |
| vault-ststxbtc | 810xxx |

| Suffix | Name | Description |
|--------|------|-------------|
| 001 | ERR-AUTH | Not authorized |
| 002 | ERR-INIT | Initialization error |
| 003 | ERR-ALREADY-INITIALIZED | Vault already initialized |
| 004 | ERR-REENTRANCY | Reentrancy detected |
| 005 | ERR-RESERVE-VALIDATION | Reserve validation failed |
| 006 | ERR-PAUSED | Operation is paused |
| 007 | ERR-TOKENIZED-VAULT-PRECONDITIONS | Tokenized vault preconditions failed |
| 008 | ERR-TOKENIZED-VAULT-POSTCONDITIONS | Tokenized vault postconditions failed |
| 009 | ERR-AMOUNT-ZERO | Amount cannot be zero |
| 010 | ERR-SLIPPAGE | Slippage protection triggered |
| 011 | ERR-SUPPLY-CAP-EXCEEDED | Supply cap exceeded |
| 012 | ERR-OUTPUT-ZERO | Output amount is zero |
| 013 | ERR-INSUFFICIENT-BALANCE | Insufficient balance |
| 014 | ERR-INSUFFICIENT-LIQUIDITY | Insufficient liquidity |
| 015 | ERR-LENDING-PRECONDITIONS | Lending preconditions failed |
| 016 | ERR-LENDING-POSTCONDITIONS | Lending postconditions failed |
| 017 | ERR-NO-RESERVES | No reserves available |
| 018 | ERR-INSUFFICIENT-VAULT-LIQUIDITY | Insufficient vault liquidity |
| 019 | ERR-DEBT-CAP-EXCEEDED | Debt cap exceeded |
| 020 | ERR-INSUFFICIENT-ASSETS | Insufficient assets |
| 021 | ERR-INVALID-ADDRESS | Invalid address (null address) |
| 022 | ERR-INSUFFICIENT-FLASHLOAN-LIQUIDITY | Insufficient flashloan liquidity |
| 023/024 | ERR-FLASHLOAN-UNAUTHORIZED | Flashloan not authorized |

---

## Debugging Tips

1. **Error code lookup**: Find the contract by prefix (first 3 digits), then specific error by suffix (last 3 digits)
2. **Common patterns**:
   - `xxx001` often means authorization failure (ERR-AUTH)
   - `xxx002-xxx008` often validation/state errors
3. **DAO errors (100-300)**: Check multisig approval status and proposal state
4. **Market errors (400)**: Usually health/collateral/oracle related
5. **Vault errors (800-810)**: Check caps, pauses, balances, and flashloan permissions
