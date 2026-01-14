# Zest Protocol

Zest v2 introduces **efficiency groups** for granular risk pricing per asset combination, a **hub-spoke architecture** with **market.clar** as the central orchestrator, and collateral flexibility letting users choose between **isolated (non-rehypothecated)** or **yield-bearing (rehypothecated)** collateral based on their risk preferences.

### 🌐 mainnet/
Production deployment information including:
- Contract addresses on Stacks mainnet
- Explorer links

**[View Mainnet Deployment →](mainnet/README.md)**

### 🧪 local-testing/
**For Security Researchers:**
- 8 example test files to get you started
- Complete testing infrastructure with Clarity 4 contracts
- Protocol initialization reference
- Audit reports and technical references

**[Security Researchers: Get Started →](local-testing/README.md)**

## Security Audits

Zest Protocol v2 has been audited by:
- [**Clarity Alliance**](https://x.com/ClarAllianceSec) - Leading Clarity security firm
- [**Asymmetric Research**](https://x.com/asymmetric_re) - Blockchain security specialists
- [**Greybeard Security**](https://github.com/greybeard-security/) - Pair of senior white hat web3 SRs: [100proof](https://x.com/1_00_proof) and [neumo](https://x.com/neumoXX)

### Audit Reports

- [**Clarity Alliance - Zest Protocol v2**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2.pdf) - October 23rd, 2025
- [**Clarity Alliance - Zest Protocol v2 Upgrade**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2%20Upgrade.pdf) - December 3rd, 2025
- [**Greybeard Security - Zest Protocol v2**](https://drive.google.com/file/d/1ttWULriHM4yZZ_Y3kMJiSnrFaYee-IMi/view?usp=drive_link) - December 4th, 2025
- [**Clarity Alliance - Zest Protocol v2 Upgrade V2**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2%20Upgrade%20V2.pdf) - December 20th, 2025

## Key Features

- **Flexible Collateral Options**: Choose between traditional collateral (non-yield-bearing) or rehypothecatable collateral (ztokens that earn supply yield while used as collateral)
- **Efficiency Groups (Egroups)**: Risk parameters defined per asset combination, enabling higher capital efficiency for correlated assets
- **Integrated Oracle System**: Direct Pyth and DIA oracle integration in the market contract for gas optimization
- **DAO Governance**: Multisig-based governance with timelock protections

## Architecture

```
                    ┌──────────────────────────────┐
                    │       market.clar            │
                    │   (Central Orchestrator)     │
                    │                              │
                    │  • Oracle logic integrated   │
                    │  • Vault routing embedded    │
                    │  • Health calculations       │
                    │  • Liquidation logic         │
                    └──────────────────────────────┘
                               │
            ┌──────────────────┼──────────────────┐
            ▼                  ▼                  ▼
      ┌─────────┐        ┌─────────┐        ┌──────────┐
      │ Assets  │        │ Egroups │        │Market-   │
      │Registry │        │         │        │Vault     │
      └─────────┘        └─────────┘        └──────────┘
                               │
            ┌──────────────────┼──────────────────┐
            ▼                  ▼                  ▼
      ┌─────────┐        ┌─────────┐        ┌──────────┐
      │External │        │ Vaults  │        │   DAO    │
      │Oracles  │        │(6 types)│        │Contracts │
      │Pyth/DIA │        │         │        │          │
      └─────────┘        └─────────┘        └──────────┘
```

## Core Components

| Contract | Purpose |
|----------|---------|
| `market.clar` | Central hub - lending operations, oracle resolution, vault routing |
| `market-vault.clar` | User position storage (collateral/debt tracking via bitmasks) |
| `assets.clar` | Asset registry with oracle configuration |
| `egroup.clar` | Efficiency groups - risk parameters per asset combination |
| `vault-*.clar` | 6 vaults (STX, sBTC, stSTX, USDC, USDH, stSTXbtc) issuing ztokens |
| `dao-multisig.clar` | Governance proposal management |
| `dao-executor.clar` | Proposal execution engine |
| `dao-treasury.clar` | Protocol fee accumulation |

## Capital Efficiency

Users can choose between traditional collateral or rehypothecatable collateral:

```
Traditional Mode:               Rehypothecatable Mode:
Deposit 1000 USDC              Deposit 1000 USDC
  ↓                              ↓
Collateral (no supply APY)     Receive 1000 zUSDC (earning supply APY)
  ↓                              ↓
Borrow against value           Use zUSDC as collateral (still earning!)
                                 ↓
                               Borrow against value + continue earning yield
```

## Supported Assets

| Asset | Vault Token | Description |
|-------|-------------|-------------|
| wSTX | zSTX | Wrapped Stacks token |
| sBTC | zsBTC | Bitcoin on Stacks |
| stSTX | zstSTX | Liquid staked STX (STX yield) |
| USDC | zUSDC | USD Coin stablecoin |
| USDH | zUSDH | Hermetica USD stablecoin |
| stSTXbtc | zstSTXbtc | Liquid staked STX (BTC yield) |

## Documentation

Full documentation is available in the [docs/](docs/) directory:

| Document | Description |
|----------|-------------|
| [Architecture Overview](docs/High-Level-Overview.md) | High-level system design |
| [Market System](docs/market.md) | Core lending operations, health checks, liquidations |
| [Vault System](docs/vaults.md) | Share tokenization, interest accrual |
| [Assets](docs/assets.md) | Asset registry and bitmap system |
| [Efficiency Groups](docs/egroups.md) | Risk parameters and bucket optimization |
| [Oracle System](docs/oracle.md) | Price feeds, callcode transformations |
| [DAO System](docs/dao.md) | Governance, treasury, proposal lifecycle |
| [Error Codes](docs/errors.md) | Complete error code reference |

For testing documentation, see [local-testing/tests/README.md](local-testing/tests/README.md) or [local-testing/README.md](local-testing/README.md).

