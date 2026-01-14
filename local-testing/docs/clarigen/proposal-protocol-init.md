
# proposal-protocol-init

[`proposal-protocol-init.clar`](../../contracts/proposals/mainnet/proposal-protocol-init.clar)

This proposal configures the lending market:

1. Initialize assets (register tokens + oracles)

2. Initialize market-vault (set market as implementation)

3. Set vault caps and authorize market

4. Create 25 egroups (collateral/debt combinations)

5. Set interest rate curves for all vaults

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**

- [`TYPE-PYTH`](#type-pyth)
- [`TYPE-DIA`](#type-dia)
- [`CALLCODE-STSTX`](#callcode-ststx)
- [`CALLCODE-ZSTX`](#callcode-zstx)
- [`CALLCODE-ZSBTC`](#callcode-zsbtc)
- [`CALLCODE-ZSTSTX`](#callcode-zststx)
- [`CALLCODE-ZUSDC`](#callcode-zusdc)
- [`CALLCODE-ZUSDH`](#callcode-zusdh)
- [`CALLCODE-ZSTSTXBTC`](#callcode-zststxbtc)
- [`STX-FEED-ID`](#stx-feed-id)
- [`BTC-FEED-ID`](#btc-feed-id)
- [`USDC-FEED-ID`](#usdc-feed-id)
- [`USDH-DIA-KEY`](#usdh-dia-key)
- [`MAX-STALENESS`](#max-staleness)
- [`SBTC-TOKEN`](#sbtc-token)
- [`STSTX-TOKEN`](#ststx-token)
- [`USDC-TOKEN`](#usdc-token)
- [`USDH-TOKEN`](#usdh-token)
- [`STSTXBTC-TOKEN`](#ststxbtc-token)
- [`CAP-STX-SUPPLY`](#cap-stx-supply)
- [`CAP-STX-DEBT`](#cap-stx-debt)
- [`CAP-SBTC-SUPPLY`](#cap-sbtc-supply)
- [`CAP-SBTC-DEBT`](#cap-sbtc-debt)
- [`CAP-STSTX-SUPPLY`](#cap-ststx-supply)
- [`CAP-STSTX-DEBT`](#cap-ststx-debt)
- [`CAP-USDC-SUPPLY`](#cap-usdc-supply)
- [`CAP-USDC-DEBT`](#cap-usdc-debt)
- [`CAP-USDH-SUPPLY`](#cap-usdh-supply)
- [`CAP-USDH-DEBT`](#cap-usdh-debt)
- [`CAP-STSTXBTC-SUPPLY`](#cap-ststxbtc-supply)
- [`CAP-STSTXBTC-DEBT`](#cap-ststxbtc-debt)
- [`UTIL-POINTS-STX`](#util-points-stx)
- [`RATE-POINTS-STX`](#rate-points-stx)
- [`UTIL-POINTS-SBTC`](#util-points-sbtc)
- [`RATE-POINTS-SBTC`](#rate-points-sbtc)
- [`UTIL-POINTS-STSTX`](#util-points-ststx)
- [`RATE-POINTS-STSTX`](#rate-points-ststx)
- [`UTIL-POINTS-USDC`](#util-points-usdc)
- [`RATE-POINTS-USDC`](#rate-points-usdc)
- [`UTIL-POINTS-USDH`](#util-points-usdh)
- [`RATE-POINTS-USDH`](#rate-points-usdh)
- [`UTIL-POINTS-STSTXBTC`](#util-points-ststxbtc)
- [`RATE-POINTS-STSTXBTC`](#rate-points-ststxbtc)
- [`RESERVE-FACTOR`](#reserve-factor)


## Functions

### execute

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L87)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    ;; STEP 1: INITIALIZE ASSETS
    ;; Paired ID system: Each underlying followed by its vault (underlying_id, vault_id = underlying_id + 1)
    ;; market.clar constants: STX=0, zSTX=1, sBTC=2, zsBTC=3, stSTX=4, zstSTX=5, USDC=6, zUSDC=7, USDH=8, zUSDH=9, stSTXbtc=10, zstSTXbtc=11

    ;; Asset ID 0: wSTX
    (try! (contract-call? .assets insert .wstx
      { type: TYPE-PYTH, ident: STX-FEED-ID, callcode: none, max-staleness: MAX-STALENESS }))

    ;; Asset ID 1: zSTX (vault-stx)
    (try! (contract-call? .assets insert .vault-stx
      { type: TYPE-PYTH, ident: STX-FEED-ID, callcode: (some CALLCODE-ZSTX), max-staleness: MAX-STALENESS }))

    ;; Asset ID 2: sBTC
    (try! (contract-call? .assets insert SBTC-TOKEN
      { type: TYPE-PYTH, ident: BTC-FEED-ID, callcode: none, max-staleness: MAX-STALENESS }))

    ;; Asset ID 3: zsBTC (vault-sbtc)
    (try! (contract-call? .assets insert .vault-sbtc
      { type: TYPE-PYTH, ident: BTC-FEED-ID, callcode: (some CALLCODE-ZSBTC), max-staleness: MAX-STALENESS }))

    ;; Asset ID 4: stSTX
    (try! (contract-call? .assets insert STSTX-TOKEN
      { type: TYPE-PYTH, ident: STX-FEED-ID, callcode: (some CALLCODE-STSTX), max-staleness: MAX-STALENESS }))

    ;; Asset ID 5: zstSTX (vault-ststx)
    (try! (contract-call? .assets insert .vault-ststx
      { type: TYPE-PYTH, ident: STX-FEED-ID, callcode: (some CALLCODE-ZSTSTX), max-staleness: MAX-STALENESS }))

    ;; Asset ID 6: USDC
    (try! (contract-call? .assets insert USDC-TOKEN
      { type: TYPE-PYTH, ident: USDC-FEED-ID, callcode: none, max-staleness: MAX-STALENESS }))

    ;; Asset ID 7: zUSDC (vault-usdc)
    (try! (contract-call? .assets insert .vault-usdc
      { type: TYPE-PYTH, ident: USDC-FEED-ID, callcode: (some CALLCODE-ZUSDC), max-staleness: MAX-STALENESS }))

    ;; Asset ID 8: USDh
    (try! (contract-call? .assets insert USDH-TOKEN
      { type: TYPE-DIA, ident: (unwrap-panic (to-consensus-buff? USDH-DIA-KEY)), callcode: none, max-staleness: MAX-STALENESS }))

    ;; Asset ID 9: zUSDh (vault-usdh)
    (try! (contract-call? .assets insert .vault-usdh
      { type: TYPE-DIA, ident: (unwrap-panic (to-consensus-buff? USDH-DIA-KEY)), callcode: (some CALLCODE-ZUSDH), max-staleness: MAX-STALENESS }))

    ;; Asset ID 10: stSTXbtc
    (try! (contract-call? .assets insert STSTXBTC-TOKEN
      { type: TYPE-PYTH, ident: STX-FEED-ID, callcode: none, max-staleness: MAX-STALENESS }))

    ;; Asset ID 11: zstSTXbtc (vault-ststxbtc)
    (try! (contract-call? .assets insert .vault-ststxbtc
      { type: TYPE-PYTH, ident: STX-FEED-ID, callcode: (some CALLCODE-ZSTSTXBTC), max-staleness: MAX-STALENESS }))
    
    ;; sBTC is enabled for collateral as both underlying, and zsBTC allowing for rehypothecated and non-rehypothecated collateral
    (try! (contract-call? .assets enable SBTC-TOKEN true))
    (try! (contract-call? .assets enable .vault-sbtc true))
    (try! (contract-call? .assets enable SBTC-TOKEN false))

    ;; zstSTXbtc is enabled for collateral only, no underlying as collateral, no underlying debt
    (try! (contract-call? .assets enable .vault-ststxbtc true))

    ;; For the rest of the assets, we enable ztoken as collateral, underlying as debt
    (try! (contract-call? .assets enable .vault-stx true))
    (try! (contract-call? .assets enable .wstx false))
    (try! (contract-call? .assets enable .vault-ststx true))
    (try! (contract-call? .assets enable STSTX-TOKEN false))
    (try! (contract-call? .assets enable .vault-usdc true))
    (try! (contract-call? .assets enable USDC-TOKEN false))
    (try! (contract-call? .assets enable .vault-usdh true))
    (try! (contract-call? .assets enable USDH-TOKEN false))

    ;; STEP 2: INITIALIZE MARKET-VAULT
    (try! (contract-call? .market-vault set-impl .market))
    
    ;; STEP 3: CONFIGURE VAULTS
    
    ;; Set vault caps
    (try! (contract-call? .vault-stx set-cap-supply CAP-STX-SUPPLY))
    (try! (contract-call? .vault-stx set-cap-debt CAP-STX-DEBT))
    (try! (contract-call? .vault-sbtc set-cap-supply CAP-SBTC-SUPPLY))
    (try! (contract-call? .vault-sbtc set-cap-debt CAP-SBTC-DEBT))
    (try! (contract-call? .vault-ststx set-cap-supply CAP-STSTX-SUPPLY))
    (try! (contract-call? .vault-ststx set-cap-debt CAP-STSTX-DEBT))
    (try! (contract-call? .vault-usdc set-cap-supply CAP-USDC-SUPPLY))
    (try! (contract-call? .vault-usdc set-cap-debt CAP-USDC-DEBT))
    (try! (contract-call? .vault-usdh set-cap-supply CAP-USDH-SUPPLY))
    (try! (contract-call? .vault-usdh set-cap-debt CAP-USDH-DEBT))
    (try! (contract-call? .vault-ststxbtc set-cap-supply CAP-STSTXBTC-SUPPLY))
    (try! (contract-call? .vault-ststxbtc set-cap-debt CAP-STSTXBTC-DEBT))
    
    ;; Authorize market contract in all vaults
    (try! (contract-call? .vault-stx set-authorized-contract .market true))
    (try! (contract-call? .vault-sbtc set-authorized-contract .market true))
    (try! (contract-call? .vault-ststx set-authorized-contract .market true))
    (try! (contract-call? .vault-usdc set-authorized-contract .market true))
    (try! (contract-call? .vault-usdh set-authorized-contract .market true))
    (try! (contract-call? .vault-ststxbtc set-authorized-contract .market true))
    
    ;; STEP 4: CREATE EGROUPS
    ;; Asset IDs (Paired system: underlying_id, vault_id = underlying_id + 1):
    ;; wstx: 0, zSTX: 1, sbtc: 2, zsBTC: 3, ststx: 4, zstSTX: 5, usdc: 6, zUSDC: 7, usdh: 8, zUSDH: 9, ststxbtc: 10, zstSTXbtc: 11
    ;; Collateral bits: 0-63 (same as asset ID)
    ;; Debt bits: 64-127 (asset ID + 64)
    ;; Bit values: wstx=2^0=1, zSTX=2^1=2, sbtc=2^2=4, zsBTC=2^3=8, ststx=2^4=16, zstSTX=2^5=32, usdc=2^6=64, zUSDC=2^7=128, usdh=2^8=256, zUSDH=2^9=512, ststxbtc=2^10=1024, zstSTXbtc=2^11=2048
    ;; Debt bits: wstx=2^64, sbtc=2^66, ststx=2^68, usdc=2^70, usdh=2^72

    ;; Egroup 1: sBTC collateral + USDC+USDh debt (70% LTV)
    ;; MASK = 2^2 + 2^70 + 2^72 = 4 + 1180591620717411303424 + 4722366482869645213696 = 5902958103587056517124
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u5902958103587056517124, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u7000, LTV-LIQ-PARTIAL: u8500, LTV-LIQ-FULL: u9000 }))
    ;; Egroup 2: sBTC collateral + STX+sBTC+stSTX+USDC+USDh debt (30% LTV)
    ;; MASK = 2^2 + 2^64 + 2^66 + 2^68 + 2^70 + 2^72 = 4 + 6290339728780957101056 = 6290339728780957101060
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u6290339728780957101060, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u3000, LTV-LIQ-PARTIAL: u4000, LTV-LIQ-FULL: u5500 }))
    ;; Egroup 3: sBTC collateral + sBTC debt (80% LTV)
    ;; MASK = 2^2 + 2^66 = 4 + 73786976294838206464 = 73786976294838206468
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u73786976294838206468, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u8000, LTV-LIQ-PARTIAL: u9000, LTV-LIQ-FULL: u9500 }))

    ;; Egroup 4: zsBTC collateral + USDC+USDh debt (70% LTV)
    ;; MASK = 2^3 + 2^70 + 2^72 = 8 + 5902958103587056517120 = 5902958103587056517128
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u5902958103587056517128, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u7000, LTV-LIQ-PARTIAL: u8500, LTV-LIQ-FULL: u9000 }))
    ;; Egroup 5: zSTX collateral + USDC+USDh debt (40% LTV)
    ;; MASK = 2^1 + 2^70 + 2^72 = 2 + 5902958103587056517120 = 5902958103587056517122
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u5902958103587056517122, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u4000, LTV-LIQ-PARTIAL: u6000, LTV-LIQ-FULL: u7500 }))
    ;; Egroup 6: zstSTX collateral + USDC+USDh debt (40% LTV)
    ;; MASK = 2^5 + 2^70 + 2^72 = 32 + 5902958103587056517120 = 5902958103587056517152
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u5902958103587056517152, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u4000, LTV-LIQ-PARTIAL: u6000, LTV-LIQ-FULL: u7500 }))
    ;; Egroup 7: zUSDC collateral + STX debt (30% LTV)
    ;; MASK = 2^7 + 2^64 = 128 + 18446744073709551616 = 18446744073709551744
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u18446744073709551744, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u3000, LTV-LIQ-PARTIAL: u5000, LTV-LIQ-FULL: u6500 }))
    ;; Egroup 8: zsBTC collateral + STX+sBTC+stSTX+USDC+USDh debt (30% LTV)
    ;; MASK = 2^3 + 2^64 + 2^66 + 2^68 + 2^70 + 2^72 = 8 + 6290339728780957101056 = 6290339728780957101064
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u6290339728780957101064, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u3000, LTV-LIQ-PARTIAL: u4000, LTV-LIQ-FULL: u5500 }))
    ;; Egroup 9: zSTX collateral + STX+sBTC+stSTX+USDC+USDh debt (20% LTV)
    ;; MASK = 2^1 + 2^64 + 2^66 + 2^68 + 2^70 + 2^72 = 2 + 6290339728780957101056 = 6290339728780957101058
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u6290339728780957101058, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u2000, LTV-LIQ-PARTIAL: u4000, LTV-LIQ-FULL: u5500 }))
    ;; Egroup 10: zstSTX collateral + STX+sBTC+stSTX+USDC+USDh debt (20% LTV)
    ;; MASK = 2^5 + 2^64 + 2^66 + 2^68 + 2^70 + 2^72 = 32 + 6290339728780957101056 = 6290339728780957101088
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u6290339728780957101088, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u2000, LTV-LIQ-PARTIAL: u4000, LTV-LIQ-FULL: u5500 }))
    ;; Egroup 11: zSTX collateral + STX+stSTX debt (80% LTV)
    ;; MASK = 2^1 + 2^64 + 2^68 = 2 + 18446744073709551616 + 295147905179352825856 = 313594649253062377474
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u313594649253062377474, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u8000, LTV-LIQ-PARTIAL: u9000, LTV-LIQ-FULL: u9500 }))
    ;; Egroup 12: zstSTX collateral + STX+stSTX debt (80% LTV)
    ;; MASK = 2^5 + 2^64 + 2^68 = 32 + 313594649253062377472 = 313594649253062377504
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u313594649253062377504, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u8000, LTV-LIQ-PARTIAL: u9000, LTV-LIQ-FULL: u9500 }))
    ;; Egroup 13: zsBTC collateral + sBTC debt (80% LTV)
    ;; MASK = 2^3 + 2^66 = 8 + 73786976294838206464 = 73786976294838206472
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u73786976294838206472, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u8000, LTV-LIQ-PARTIAL: u9000, LTV-LIQ-FULL: u9500 }))
    ;; Egroup 14: zUSDC collateral + USDh debt (50% LTV)
    ;; MASK = 2^7 + 2^72 = 128 + 4722366482869645213696 = 4722366482869645213824
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u4722366482869645213824, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u5000, LTV-LIQ-PARTIAL: u6000, LTV-LIQ-FULL: u7500 }))
    ;; Egroup 15: zstSTXbtc collateral + USDC+USDh debt (40% LTV)
    ;; MASK = 2^11 + 2^70 + 2^72 = 2048 + 5902958103587056517120 = 5902958103587056519168
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u5902958103587056519168, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u4000, LTV-LIQ-PARTIAL: u6000, LTV-LIQ-FULL: u7500 }))
    ;; Egroup 16: zstSTXbtc collateral + STX+sBTC+stSTX+USDC+USDh debt (20% LTV)
    ;; MASK = 2^11 + 2^64 + 2^66 + 2^68 + 2^70 + 2^72 = 2048 + 6290339728780957101056 = 6290339728780957103104
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u6290339728780957103104, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u2000, LTV-LIQ-PARTIAL: u4000, LTV-LIQ-FULL: u5500 }))
    ;; Egroup 17: zstSTXbtc collateral + STX+stSTX debt (80% LTV)
    ;; MASK = 2^11 + 2^64 + 2^68 = 2048 + 313594649253062377472 = 313594649253062379520
    (try! (contract-call? .egroup insert { BORROW-DISABLED-MASK: u0, MASK: u313594649253062379520, LIQ-CURVE-EXP: u10000, LIQ-PENALTY-MIN: u500, LIQ-PENALTY-MAX: u1000, LTV-BORROW: u8000, LTV-LIQ-PARTIAL: u9000, LTV-LIQ-FULL: u9500 }))

    ;; STEP 5: SET INTEREST RATES (per-asset Aave-style kink curves)
    (try! (contract-call? .vault-stx set-points-util UTIL-POINTS-STX))
    (try! (contract-call? .vault-stx set-points-rate RATE-POINTS-STX))
    (try! (contract-call? .vault-stx set-fee-reserve RESERVE-FACTOR))
    (try! (contract-call? .vault-sbtc set-points-util UTIL-POINTS-SBTC))
    (try! (contract-call? .vault-sbtc set-points-rate RATE-POINTS-SBTC))
    (try! (contract-call? .vault-sbtc set-fee-reserve RESERVE-FACTOR))
    (try! (contract-call? .vault-ststx set-points-util UTIL-POINTS-STSTX))
    (try! (contract-call? .vault-ststx set-points-rate RATE-POINTS-STSTX))
    (try! (contract-call? .vault-ststx set-fee-reserve RESERVE-FACTOR))
    (try! (contract-call? .vault-usdc set-points-util UTIL-POINTS-USDC))
    (try! (contract-call? .vault-usdc set-points-rate RATE-POINTS-USDC))
    (try! (contract-call? .vault-usdc set-fee-reserve RESERVE-FACTOR))
    (try! (contract-call? .vault-usdh set-points-util UTIL-POINTS-USDH))
    (try! (contract-call? .vault-usdh set-points-rate RATE-POINTS-USDH))
    (try! (contract-call? .vault-usdh set-fee-reserve RESERVE-FACTOR))
    (try! (contract-call? .vault-ststxbtc set-points-util UTIL-POINTS-STSTXBTC))
    (try! (contract-call? .vault-ststxbtc set-points-rate RATE-POINTS-STSTXBTC))
    (try! (contract-call? .vault-ststxbtc set-fee-reserve RESERVE-FACTOR))
    
    (ok true)))
```
</details>




## Maps



## Variables



## Constants

### TYPE-PYTH



Oracle type constants

```clarity
(define-constant TYPE-PYTH 0x00)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L11)

### TYPE-DIA





```clarity
(define-constant TYPE-DIA 0x01)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L12)

### CALLCODE-STSTX



Callcode constants for price transformations

```clarity
(define-constant CALLCODE-STSTX 0x00)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L15)

### CALLCODE-ZSTX





```clarity
(define-constant CALLCODE-ZSTX 0x01)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L16)

### CALLCODE-ZSBTC





```clarity
(define-constant CALLCODE-ZSBTC 0x02)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L17)

### CALLCODE-ZSTSTX





```clarity
(define-constant CALLCODE-ZSTSTX 0x03)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L18)

### CALLCODE-ZUSDC





```clarity
(define-constant CALLCODE-ZUSDC 0x04)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L19)

### CALLCODE-ZUSDH





```clarity
(define-constant CALLCODE-ZUSDH 0x05)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L20)

### CALLCODE-ZSTSTXBTC





```clarity
(define-constant CALLCODE-ZSTSTXBTC 0x06)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L21)

### STX-FEED-ID



Mainnet Pyth price feed IDs

```clarity
(define-constant STX-FEED-ID 0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L24)

### BTC-FEED-ID





```clarity
(define-constant BTC-FEED-ID 0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L25)

### USDC-FEED-ID





```clarity
(define-constant USDC-FEED-ID 0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L26)

### USDH-DIA-KEY



USDh uses DIA oracle

```clarity
(define-constant USDH-DIA-KEY "USDh/USD")
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L29)

### MAX-STALENESS



Production staleness threshold: 120 seconds (2 minutes)

```clarity
(define-constant MAX-STALENESS u120)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L32)

### SBTC-TOKEN



Token contract references
@mainnet: (define-constant SBTC-TOKEN 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token)

```clarity
(define-constant SBTC-TOKEN .sbtc)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L36)

### STSTX-TOKEN



@mainnet: (define-constant STSTX-TOKEN 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststx-token)

```clarity
(define-constant STSTX-TOKEN .ststx)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L38)

### USDC-TOKEN



@mainnet: (define-constant USDC-TOKEN 'SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx)

```clarity
(define-constant USDC-TOKEN .usdc)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L40)

### USDH-TOKEN



@mainnet: (define-constant USDH-TOKEN 'SPN5AKG35QZSK2M8GAMR4AFX45659RJHDW353HSG.usdh-token-v1)

```clarity
(define-constant USDH-TOKEN .usdh)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L42)

### STSTXBTC-TOKEN



@mainnet: (define-constant STSTXBTC-TOKEN 'SP4SZE494VC2YC5JYG7AYFQ44F5Q4PYV7DVMDPBG.ststxbtc-token-v2)

```clarity
(define-constant STSTXBTC-TOKEN .ststxbtc)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L44)

### CAP-STX-SUPPLY



Vault caps

```clarity
(define-constant CAP-STX-SUPPLY u10000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L47)

### CAP-STX-DEBT





```clarity
(define-constant CAP-STX-DEBT u10000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L48)

### CAP-SBTC-SUPPLY





```clarity
(define-constant CAP-SBTC-SUPPLY u10000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L49)

### CAP-SBTC-DEBT





```clarity
(define-constant CAP-SBTC-DEBT u10000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L50)

### CAP-STSTX-SUPPLY





```clarity
(define-constant CAP-STSTX-SUPPLY u10000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L51)

### CAP-STSTX-DEBT





```clarity
(define-constant CAP-STSTX-DEBT u10000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L52)

### CAP-USDC-SUPPLY





```clarity
(define-constant CAP-USDC-SUPPLY u10000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L53)

### CAP-USDC-DEBT





```clarity
(define-constant CAP-USDC-DEBT u10000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L54)

### CAP-USDH-SUPPLY





```clarity
(define-constant CAP-USDH-SUPPLY u1000000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L55)

### CAP-USDH-DEBT





```clarity
(define-constant CAP-USDH-DEBT u1000000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L56)

### CAP-STSTXBTC-SUPPLY





```clarity
(define-constant CAP-STSTXBTC-SUPPLY u10000000000000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L57)

### CAP-STSTXBTC-DEBT





```clarity
(define-constant CAP-STSTXBTC-DEBT u0)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L58)

### UTIL-POINTS-STX



Interest rate curves per asset
STX: optimal 85%, base 0%, slope1 7.5%, slope2 80%

```clarity
(define-constant UTIL-POINTS-STX (list u0 u2000 u4000 u6000 u8000 u8500 u9250 u10000))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L62)

### RATE-POINTS-STX





```clarity
(define-constant RATE-POINTS-STX (list u0 u176 u353 u529 u706 u750 u4750 u8750))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L63)

### UTIL-POINTS-SBTC



sBTC: optimal 80%, base 5%, slope1 4%, slope2 300%

```clarity
(define-constant UTIL-POINTS-SBTC (list u0 u2000 u4000 u6000 u8000 u8500 u9000 u10000))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L66)

### RATE-POINTS-SBTC





```clarity
(define-constant RATE-POINTS-SBTC (list u500 u600 u700 u800 u900 u8400 u15900 u30900))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L67)

### UTIL-POINTS-STSTX



stSTX: optimal 45%, base 0.04%, slope1 7%, slope2 300%

```clarity
(define-constant UTIL-POINTS-STSTX (list u0 u1000 u2000 u3000 u4500 u5500 u7000 u10000))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L70)

### RATE-POINTS-STSTX





```clarity
(define-constant RATE-POINTS-STSTX (list u4 u160 u315 u471 u704 u6159 u14340 u30704))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L71)

### UTIL-POINTS-USDC



USDC: optimal 85%, base 0%, slope1 5%, slope2 87%

```clarity
(define-constant UTIL-POINTS-USDC (list u0 u2000 u4000 u6000 u8000 u8500 u9250 u10000))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L74)

### RATE-POINTS-USDC





```clarity
(define-constant RATE-POINTS-USDC (list u0 u118 u235 u353 u471 u500 u4850 u9200))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L75)

### UTIL-POINTS-USDH



USDH: optimal 85%, base 0%, slope1 10%, slope2 87%

```clarity
(define-constant UTIL-POINTS-USDH (list u0 u2000 u4000 u6000 u8000 u8500 u9250 u10000))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L78)

### RATE-POINTS-USDH





```clarity
(define-constant RATE-POINTS-USDH (list u0 u235 u471 u706 u941 u1000 u5350 u9700))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L79)

### UTIL-POINTS-STSTXBTC



stSTXbtc: collateral-only, no borrowing

```clarity
(define-constant UTIL-POINTS-STSTXBTC (list u0 u1500 u3000 u4500 u6000 u7500 u9000 u10000))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L82)

### RATE-POINTS-STSTXBTC





```clarity
(define-constant RATE-POINTS-STSTXBTC (list u0 u0 u0 u0 u0 u0 u0 u0))
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L83)

### RESERVE-FACTOR





```clarity
(define-constant RESERVE-FACTOR u1000)
```

[View in file](../../contracts/proposals/mainnet/proposal-protocol-init.clar#L85)
  