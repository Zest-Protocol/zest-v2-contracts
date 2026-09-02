# Zest Protocol - Local Testing Environment

**For Security Researchers:**
Minimal simnet environment with example test templates to help you get started. Includes the live lending market, the **Pyth Lazer** oracle integration, the **zvstBTC** strategy vault, protocol initialization reference, and audit reports.

## Quick Start

### Prerequisites
- [Clarinet](https://github.com/stx-labs/clarinet)
- [Clarigen](https://github.com/mechanismHQ/clarigen) - TypeScript type generator for Clarity
- Node.js v18+
- **pnpm** (this suite is pinned + lockfiled for pnpm)
- **Clarity**: contracts target `clarity_version = 6`, `epoch = 4.0` (see [references/sip-033-clarity4.md](references/sip-033-clarity4.md) for the Clarity language reference)
- **SIP-010**: Fungible token standard reference (see [references/sip-010-fungible-token-standard.md](references/sip-010-fungible-token-standard.md))

### Setup
```bash
cd local-testing
pnpm install
pnpm clarigen     # Generate TypeScript types
```

### Run Tests
```bash
pnpm test                          # Run all tests
pnpm test tests/security/          # Run security tests only
pnpm test -- -t "authorization"    # Run specific test pattern
```

## Example Tests

Starter test templates to help you build your own security tests:

### Security Tests (4)
1. **Authorization** (`tests/security/authorization.test.ts`) - Template for authorization bypass tests
2. **Egroup Tests** (`tests/security/egroup.test.ts`) - Template for risk parameter manipulation
3. **Liquidation Tests** (`tests/security/liquidation.test.ts`) - Template for liquidation scenarios
4. **Edge Cases** (`tests/security/edge-cases.test.ts`) - Template for boundary testing

### Core Flow Tests (3)
5. **Basic Borrow** (`tests/flows/borrow/borrow-basic.test.ts`) - Standard borrow flow
6. **Basic Liquidation** (`tests/flows/liquidation/liquidation-basic.test.ts`) - Liquidation mechanics
7. **Collateral Health** (`tests/flows/collateral/collateral-add.test.ts`) - Health factor validation

### Setup Reference (1)
8. **Protocol Init** (`tests/setup/protocol-init.test.ts`) - Initialization reference

### Oracle (1)
9. **Pyth Lazer Smoke** (`tests/components/oracle/pyth-lazer-smoke.test.ts`) - Inline Lazer price verification

### zvstBTC Strategy Vault (3)
10. **Deposit Cap** (`tests/strategy-vault/stbtc-0/zv-stbtc-0-deposit-cap.test.ts`) - Net external-deposit cap enforcement
11. **DAO Ownership** (`tests/strategy-vault/stbtc-0/zv-stbtc-0-dao-ownership.test.ts`) - `dao-executor` owns + governs the vault via proposals
12. **Cap + Loop + Express** (`tests/strategy-vault/stbtc-0/zv-stbtc-0-cap-loop-express.test.ts`) - Full flow: deposit to cap → loop (real `open-position` + StackingDAO yield) → express withdraw

Use these as a base to develop comprehensive test suites for your security research.

## Oracle: Pyth Lazer

The market prices assets on-chain via **Pyth Lazer**: each market call that resolves a price carries a signed Lazer update in its `price-feeds` argument, verified in-transaction by `pyth-lazer-oracle` + `pyth-lazer-decoder-v1` (no on-chain price storage). In tests, `set_price(...)` registers a price and `priceFeeds()` builds the signed inline update — pass it as the last arg to `market.borrow` / `collateralAdd` / `collateralRemove` / `liquidate` (see `tests/setup/helpers/pyth-lazer-helpers.ts`). The Lazer contracts are an independently-audited adaptation of [stx-labs/stacks-pyth-lazer](https://github.com/stx-labs/stacks-pyth-lazer).

## Architecture

See [../docs/High-Level-Overview.md](../docs/High-Level-Overview.md) for complete architecture.

**Key contracts:**
- `market.clar` - Central lending hub (oracle, health, liquidation)
- `market-vault.clar` - User position storage
- `assets.clar` - Asset registry
- `egroup.clar` - Risk parameters
- `vault-*.clar` - vaults issuing ztokens (incl. `vault-stbtc`)
- `pyth-lazer-*.clar` - Pyth Lazer oracle (in-tx price verification)
- `strategy-vault/stbtc-0/*` - the `zvstBTC` leveraged stBTC strategy vault (`zv-engine` / `zv-state` / `zv-ops` / `zvstBTC` token)

## Documentation

- [Architecture Overview](../docs/High-Level-Overview.md)
- [Market System](../docs/market.md)
- [Vault System](../docs/vaults.md)
- [Error Codes](../docs/errors.md)
- [SIP-033 Clarity 4 Reference](references/sip-033-clarity4.md)
- [SIP-010 Token Standard](references/sip-010-fungible-token-standard.md)

## Security Audits

Zest Protocol v2 has been audited by leading Clarity security firms. These reports are valuable references for understanding the protocol's security model:

- [**Clarity Alliance**](https://x.com/ClarAllianceSec) - Leading Clarity security firm
- [**Asymmetric Research**](https://x.com/asymmetric_re) - Blockchain security specialists
- [**Greybeard Security**](https://github.com/greybeard-security/) - Pair of senior white hat web3 SRs: [100proof](https://x.com/1_00_proof) and [neumo](https://x.com/neumoXX)

### Audit Reports

- [**Clarity Alliance - Zest Protocol v2**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2.pdf) - October 23rd, 2025
- [**Clarity Alliance - Zest Protocol v2 Upgrade**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2%20Upgrade.pdf) - December 3rd, 2025
- [**Greybeard Security - Zest Protocol v2**](https://drive.google.com/file/d/1ttWULriHM4yZZ_Y3kMJiSnrFaYee-IMi/view?usp=drive_link) - December 4th, 2025
- [**Clarity Alliance - Zest Protocol v2 Upgrade V2**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2%20Upgrade%20V2.pdf) - December 20th, 2025

## Mainnet Deployment

Production contracts deployed on mainnet: [../mainnet/README.md](../mainnet/README.md)

## Bug Bounty

**Submit reports via our Immunefi program:** https://immunefi.com/bug-bounty/zest-protocol-v2/information/

For direct disclosure: security@zestprotocol.com
