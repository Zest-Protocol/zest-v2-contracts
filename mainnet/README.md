# Zest Protocol - Mainnet Deployment

Production deployment of Zest Protocol on Stacks mainnet.

## Deployed Contracts

| Contract Name | Explorer Link | Last Updated |
|--------------|---------------|--------------|
| [dao-executor](contracts/dao/dao-executor.clar) | [Link](https://explorer.hiro.so/txid/0xd1abdecbe6bae492cbf35afdc2b065e844c102ce85a282da0477bf8bf263fb34?chain=mainnet) | 13th Jan 2026 |
| [dao-multisig](contracts/dao/dao-multisig.clar) | [Link](https://explorer.hiro.so/txid/0x19d42dbcddcc209fa7afbdaf4981a97ef05ede00afd4e4708ba4f710068bea45?chain=mainnet) | 13th Jan 2026 |
| [dao-traits](contracts/dao/dao-traits.clar) | [Link](https://explorer.hiro.so/txid/0x2b04bb83d31c25d8978711cfd12a43c0a44def356f9b0baee795bc3e7813ed06?chain=mainnet) | 13th Jan 2026 |
| [dao-treasury](contracts/dao/dao-treasury.clar) | [Link](https://explorer.hiro.so/txid/0x865b3eb488eb46027ec296cc5423be4d996b285cd164d7ede289f1bc7e4840f1?chain=mainnet) | 13th Jan 2026 |
| [v0-8-market](contracts/market/v0-8-market.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-8-market?chain=mainnet) | 31st Aug 2026 |
| [market-trait-v7](contracts/market/market-trait-v7.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.market-trait-v7?chain=mainnet) | 17th Aug 2026 |
| [v0-market-vault](contracts/market/v0-market-vault.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-market-vault?chain=mainnet) | 27th Jan 2026 |
| [v0-assets](contracts/registry/v0-assets.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-assets?chain=mainnet) | 27th Jan 2026 |
| [v0-egroup](contracts/registry/v0-egroup.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-egroup?chain=mainnet) | 27th Jan 2026 |
| [v0-5-data](contracts/utility/v0-5-data.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-5-data?chain=mainnet) | 31st Aug 2026 |
| [v0-vault-sbtc](contracts/vault/v0-vault-sbtc.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-vault-sbtc?chain=mainnet) | 27th Jan 2026 |
| [v0-vault-stbtc](contracts/vault/v0-vault-stbtc.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-vault-stbtc?chain=mainnet) | 31st Aug 2026 |
| [v0-vault-ststx](contracts/vault/v0-vault-ststx.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-vault-ststx?chain=mainnet) | 27th Jan 2026 |
| [v0-vault-ststxbtc](contracts/vault/v0-vault-ststxbtc.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-vault-ststxbtc?chain=mainnet) | 27th Jan 2026 |
| [v0-vault-stx](contracts/vault/v0-vault-stx.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-vault-stx?chain=mainnet) | 27th Jan 2026 |
| [vault-traits](contracts/vault/vault-traits.clar) | [Link](https://explorer.hiro.so/txid/0x6479861fca5151afd72bb7cbf0400a5ef829ff6b7cd0f9b5cad24af6288210e8?chain=mainnet) | 13th Jan 2026 |
| [v0-vault-usdc](contracts/vault/v0-vault-usdc.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-vault-usdc?chain=mainnet) | 27th Jan 2026 |
| [v0-vault-usdh](contracts/vault/v0-vault-usdh.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-vault-usdh?chain=mainnet) | 27th Jan 2026 |
| wstx | [Link](https://explorer.hiro.so/txid/0xd501ea33e5a0a5467fd81d09ad4d52b45c5301630713daa1acd4de72183c9555?chain=mainnet) | 13th Jan 2026 |

### stBTC Strategy Vault (zvstBTC)

Leveraged stBTC strategy vault issuing the `zvstBTC` share token. Borrows sBTC on `v0-8-market` against zstBTC collateral and loops on StackingDAO.

| Contract Name | Explorer Link | Last Updated |
|--------------|---------------|--------------|
| [zv-traits](contracts/strategy-vault/zv-traits.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.zv-traits?chain=mainnet) | 2nd Sep 2026 |
| [zvstBTC](contracts/strategy-vault/zvstBTC.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.zvstBTC?chain=mainnet) | 2nd Sep 2026 |
| [zv-state-stbtc-0](contracts/strategy-vault/zv-state-stbtc-0.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.zv-state-stbtc-0?chain=mainnet) | 2nd Sep 2026 |
| [zv-ops-stbtc-0](contracts/strategy-vault/zv-ops-stbtc-0.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.zv-ops-stbtc-0?chain=mainnet) | 2nd Sep 2026 |
| [zv-engine-stbtc-0](contracts/strategy-vault/zv-engine-stbtc-0.clar) | [Link](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.zv-engine-stbtc-0?chain=mainnet) | 2nd Sep 2026 |

## Deployment Details

- **Network**: Stacks Mainnet
- **Deployer**: `SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7`
- **Protocol Initialization**: [Proposal](https://explorer.hiro.so/txid/SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.v0-init?chain=mainnet)

## Security Audits

Zest Protocol v2 has been audited by leading Clarity security firms:

- [**Clarity Alliance**](https://x.com/ClarAllianceSec) - Leading Clarity security firm
- [**Asymmetric Research**](https://x.com/asymmetric_re) - Blockchain security specialists
- [**Greybeard Security**](https://github.com/greybeard-security/) - Pair of senior white hat web3 SRs: [100proof](https://x.com/1_00_proof) and [neumo](https://x.com/neumoXX)

### Audit Reports

- [**Clarity Alliance - Zest Protocol v2**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2.pdf) - October 23rd, 2025
- [**Clarity Alliance - Zest Protocol v2 Upgrade**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2%20Upgrade.pdf) - December 3rd, 2025
- [**Greybeard Security - Zest Protocol v2**](https://drive.google.com/file/d/1ttWULriHM4yZZ_Y3kMJiSnrFaYee-IMi/view?usp=drive_link) - December 4th, 2025
- [**Clarity Alliance - Zest Protocol v2 Upgrade V2**](https://clarity-alliance.github.io/audits/Clarity%20Alliance%20-%20Zest%20Protocol%20v2%20Upgrade%20V2.pdf) - December 20th, 2025

## Oracles

Zest prices assets on-chain via **Pyth Lazer** (primary) with **DIA** as a secondary source, replacing the earlier Pyth pnau/Wormhole stack. Lazer updates are verified in-transaction by the `pyth-lazer-oracle` and `pyth-lazer-decoder-v1` contracts — an independently-audited adaptation of [stx-labs/stacks-pyth-lazer](https://github.com/stx-labs/stacks-pyth-lazer) (out of Zest's own audit scope) — and consumed directly by `v0-8-market` for gas-efficient health and liquidation checks.

Pyth Lazer feeds (oracle type `0x00`):

- **BTC** (sBTC id 3, stBTC id 13): `0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43`
- **STX** (STX id 1, stSTX id 5): `0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17`
- **USDC** (id 7): `0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a`

DIA feed (oracle type `0x01`):

- **USDH** (id 9): DIA key `USDh/USD`

## Bug Bounty & Security Research

For local testing environment and security research [click here](../local-testing/README.md) to get started

**Submit reports via our Immunefi program:** https://immunefi.com/bug-bounty/zest-protocol-v2/information/

For direct disclosure: security@zestprotocol.com
