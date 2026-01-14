
# market

[`market.clar`](../../contracts/market/market.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

market - 0

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

**Public functions:**



**Read-only functions:**



**Private functions:**



**Maps**

- [`liquidation-grace-periods`](#liquidation-grace-periods)
- [`index-cache`](#index-cache)
- [`last-update`](#last-update)

**Variables**

- [`pause-liquidation`](#pause-liquidation)
- [`max-confidence-ratio`](#max-confidence-ratio)

**Constants**

- [`STX`](#stx)
- [`zSTX`](#zstx)
- [`sBTC`](#sbtc)
- [`zsBTC`](#zsbtc)
- [`stSTX`](#ststx)
- [`zstSTX`](#zststx)
- [`USDC`](#usdc)
- [`zUSDC`](#zusdc)
- [`USDH`](#usdh)
- [`zUSDH`](#zusdh)
- [`stSTXbtc`](#ststxbtc)
- [`zstSTXbtc`](#zststxbtc)
- [`ztokens`](#ztokens)
- [`BPS`](#bps)
- [`INDEX-PRECISION`](#index-precision)
- [`TYPE-PYTH`](#type-pyth)
- [`TYPE-DIA`](#type-dia)
- [`TYPE-MOCK`](#type-mock)
- [`CALLCODE-STSTX`](#callcode-ststx)
- [`CALLCODE-ZSTX`](#callcode-zstx)
- [`CALLCODE-ZSBTC`](#callcode-zsbtc)
- [`CALLCODE-ZSTSTX`](#callcode-zststx)
- [`CALLCODE-ZUSDC`](#callcode-zusdc)
- [`CALLCODE-ZUSDH`](#callcode-zusdh)
- [`CALLCODE-ZSTSTXBTC`](#callcode-zststxbtc)
- [`STSTX-RATIO-DECIMALS`](#ststx-ratio-decimals)
- [`MAX-U64`](#max-u64)
- [`DEBT-MASK`](#debt-mask)
- [`DEBT-OFFSET`](#debt-offset)
- [`ITER-UINT-64`](#iter-uint-64)
- [`MAX-LIQUIDATION-AMOUNT`](#max-liquidation-amount)
- [`GLOBAL-LIQUIDATION-GRACE-ID`](#global-liquidation-grace-id)
- [`ZEST-STX-WRAPPER-CONTRACT`](#zest-stx-wrapper-contract)
- [`ERR-AUTH`](#err-auth)
- [`ERR-AMOUNT-ZERO`](#err-amount-zero)
- [`ERR-COLLATERAL-DISABLED`](#err-collateral-disabled)
- [`ERR-BORROW-DISABLED`](#err-borrow-disabled)
- [`ERR-UNHEALTHY`](#err-unhealthy)
- [`ERR-INSUFFICIENT-SCALED-DEBT`](#err-insufficient-scaled-debt)
- [`ERR-INSUFFICIENT-COLLATERAL`](#err-insufficient-collateral)
- [`ERR-ZERO-LIQUIDATION-AMOUNTS`](#err-zero-liquidation-amounts)
- [`ERR-UNKNOWN-VAULT`](#err-unknown-vault)
- [`ERR-ORACLE-TYPE`](#err-oracle-type)
- [`ERR-ORACLE-CALLCODE`](#err-oracle-callcode)
- [`ERR-ORACLE-PYTH`](#err-oracle-pyth)
- [`ERR-ORACLE-DIA`](#err-oracle-dia)
- [`ERR-ORACLE-INVARIANT`](#err-oracle-invariant)
- [`ERR-ORACLE-MOCK`](#err-oracle-mock)
- [`ERR-ORACLE-MULTI`](#err-oracle-multi)
- [`ERR-LIQUIDATION-PAUSED`](#err-liquidation-paused)
- [`ERR-PRICE-CONFIDENCE-LOW`](#err-price-confidence-low)
- [`ERR-HEALTHY`](#err-healthy)
- [`ERR-SLIPPAGE`](#err-slippage)
- [`ERR-DISABLED-COLLATERAL-PRICE-FAILED`](#err-disabled-collateral-price-failed)
- [`ERR-BAD-DEBT-SOCIALIZATION-FAILED`](#err-bad-debt-socialization-failed)
- [`ERR-PRICE-FEED-UPDATE-FAILED`](#err-price-feed-update-failed)
- [`ERR-EGROUP-ASSET-BORROW-DISABLED`](#err-egroup-asset-borrow-disabled)
- [`ERR-LIQUIDATION-BORROW-SAME-BLOCK`](#err-liquidation-borrow-same-block)
- [`ERR-AUTHORIZATION`](#err-authorization)


## Functions



## Maps

### liquidation-grace-periods

-- Liquidation

```clarity
(define-map liquidation-grace-periods uint uint)
```

[View in file](../../contracts/market/market.clar#L113)

### index-cache

-- Index cache (for accrual)

```clarity
(define-map index-cache
  { timestamp: uint, aid: uint }
  { index: uint, lindex: uint })
```

[View in file](../../contracts/market/market.clar#L116)

### last-update

-- Oracle timestamp tracking

```clarity
(define-map last-update
  { type: (buff 1), ident: (buff 32) }
  uint)
```

[View in file](../../contracts/market/market.clar#L121)

## Variables

### pause-liquidation

bool

-- Pausability

```clarity
(define-data-var pause-liquidation bool false)
```

[View in file](../../contracts/market/market.clar#L101)

### max-confidence-ratio

uint

-- Oracle configuration
Confidence ratio: 10% default (1000 = 10% of 10000 BPS)
This means confidence interval must be <= 10% of price

```clarity
(define-data-var max-confidence-ratio uint u1000)
```

[View in file](../../contracts/market/market.clar#L106)

## Constants

### STX



-- Asset IDs (Paired: underlying_id, vault_id = underlying_id + 1)
These map to actual asset IDs in the asset registry

```clarity
(define-constant STX u0)
```

[View in file](../../contracts/market/market.clar#L17)

### zSTX





```clarity
(define-constant zSTX u1)    ;; vault-stx
```

[View in file](../../contracts/market/market.clar#L18)

### sBTC





```clarity
(define-constant sBTC u2)
```

[View in file](../../contracts/market/market.clar#L19)

### zsBTC





```clarity
(define-constant zsBTC u3)   ;; vault-sbtc
```

[View in file](../../contracts/market/market.clar#L20)

### stSTX





```clarity
(define-constant stSTX u4)
```

[View in file](../../contracts/market/market.clar#L21)

### zstSTX





```clarity
(define-constant zstSTX u5)  ;; vault-ststx
```

[View in file](../../contracts/market/market.clar#L22)

### USDC





```clarity
(define-constant USDC u6)
```

[View in file](../../contracts/market/market.clar#L23)

### zUSDC





```clarity
(define-constant zUSDC u7)   ;; vault-usdc
```

[View in file](../../contracts/market/market.clar#L24)

### USDH





```clarity
(define-constant USDH u8)
```

[View in file](../../contracts/market/market.clar#L25)

### zUSDH





```clarity
(define-constant zUSDH u9)   ;; vault-usdh
```

[View in file](../../contracts/market/market.clar#L26)

### stSTXbtc





```clarity
(define-constant stSTXbtc u10)
```

[View in file](../../contracts/market/market.clar#L27)

### zstSTXbtc





```clarity
(define-constant zstSTXbtc u11) ;; vault-ststxbtc
```

[View in file](../../contracts/market/market.clar#L28)

### ztokens





```clarity
(define-constant ztokens (list zSTX zsBTC zstSTX zUSDC zUSDH zstSTXbtc))
```

[View in file](../../contracts/market/market.clar#L29)

### BPS



-- Precision & scaling

```clarity
(define-constant BPS u10000)
```

[View in file](../../contracts/market/market.clar#L32)

### INDEX-PRECISION





```clarity
(define-constant INDEX-PRECISION u1000000000000)  ;; 1e12 for index calculations
```

[View in file](../../contracts/market/market.clar#L33)

### TYPE-PYTH



-- Oracle configuration

```clarity
(define-constant TYPE-PYTH 0x00)
```

[View in file](../../contracts/market/market.clar#L36)

### TYPE-DIA





```clarity
(define-constant TYPE-DIA 0x01)
```

[View in file](../../contracts/market/market.clar#L37)

### TYPE-MOCK



@staging

```clarity
(define-constant TYPE-MOCK 0x02)
```

[View in file](../../contracts/market/market.clar#L39)

### CALLCODE-STSTX



-- Oracle callcodes (for price transformations)

```clarity
(define-constant CALLCODE-STSTX 0x00)
```

[View in file](../../contracts/market/market.clar#L42)

### CALLCODE-ZSTX





```clarity
(define-constant CALLCODE-ZSTX 0x01)
```

[View in file](../../contracts/market/market.clar#L43)

### CALLCODE-ZSBTC





```clarity
(define-constant CALLCODE-ZSBTC 0x02)
```

[View in file](../../contracts/market/market.clar#L44)

### CALLCODE-ZSTSTX





```clarity
(define-constant CALLCODE-ZSTSTX 0x03)
```

[View in file](../../contracts/market/market.clar#L45)

### CALLCODE-ZUSDC





```clarity
(define-constant CALLCODE-ZUSDC 0x04)
```

[View in file](../../contracts/market/market.clar#L46)

### CALLCODE-ZUSDH





```clarity
(define-constant CALLCODE-ZUSDH 0x05)
```

[View in file](../../contracts/market/market.clar#L47)

### CALLCODE-ZSTSTXBTC





```clarity
(define-constant CALLCODE-ZSTSTXBTC 0x06)
```

[View in file](../../contracts/market/market.clar#L48)

### STSTX-RATIO-DECIMALS



-- Oracle ratios

```clarity
(define-constant STSTX-RATIO-DECIMALS u1000000)
```

[View in file](../../contracts/market/market.clar#L51)

### MAX-U64



-- Pack utilities (bit manipulation)

```clarity
(define-constant MAX-U64 u18446744073709551615)
```

[View in file](../../contracts/market/market.clar#L54)

### DEBT-MASK





```clarity
(define-constant DEBT-MASK u340282366920938463444927863358058659840)  ;; MAX-U128 - MAX-U64
```

[View in file](../../contracts/market/market.clar#L55)

### DEBT-OFFSET





```clarity
(define-constant DEBT-OFFSET u64)
```

[View in file](../../contracts/market/market.clar#L56)

### ITER-UINT-64





```clarity
(define-constant ITER-UINT-64 (list u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20 u21 u22 u23 u24 u25 u26 u27 u28 u29 u30 u31 u32 u33 u34 u35 u36 u37 u38 u39 u40 u41 u42 u43 u44 u45 u46 u47 u48 u49 u50 u51 u52 u53 u54 u55 u56 u57 u58 u59 u60 u61 u62 u63))
```

[View in file](../../contracts/market/market.clar#L57)

### MAX-LIQUIDATION-AMOUNT



-- Liquidation

```clarity
(define-constant MAX-LIQUIDATION-AMOUNT u340282366920938463463374607431768211455)
```

[View in file](../../contracts/market/market.clar#L60)

### GLOBAL-LIQUIDATION-GRACE-ID





```clarity
(define-constant GLOBAL-LIQUIDATION-GRACE-ID u100)
```

[View in file](../../contracts/market/market.clar#L61)

### ZEST-STX-WRAPPER-CONTRACT



-- Contract references

```clarity
(define-constant ZEST-STX-WRAPPER-CONTRACT .wstx)
```

[View in file](../../contracts/market/market.clar#L64)

### ERR-AUTH



============================================================================
ERRORS (400xxx prefix for market)
============================================================================

```clarity
(define-constant ERR-AUTH (err u400001))
```

[View in file](../../contracts/market/market.clar#L69)

### ERR-AMOUNT-ZERO





```clarity
(define-constant ERR-AMOUNT-ZERO (err u400002))
```

[View in file](../../contracts/market/market.clar#L70)

### ERR-COLLATERAL-DISABLED





```clarity
(define-constant ERR-COLLATERAL-DISABLED (err u400003))
```

[View in file](../../contracts/market/market.clar#L71)

### ERR-BORROW-DISABLED





```clarity
(define-constant ERR-BORROW-DISABLED (err u400004))
```

[View in file](../../contracts/market/market.clar#L72)

### ERR-UNHEALTHY





```clarity
(define-constant ERR-UNHEALTHY (err u400005))
```

[View in file](../../contracts/market/market.clar#L73)

### ERR-INSUFFICIENT-SCALED-DEBT





```clarity
(define-constant ERR-INSUFFICIENT-SCALED-DEBT (err u400006))
```

[View in file](../../contracts/market/market.clar#L74)

### ERR-INSUFFICIENT-COLLATERAL





```clarity
(define-constant ERR-INSUFFICIENT-COLLATERAL (err u400007))
```

[View in file](../../contracts/market/market.clar#L75)

### ERR-ZERO-LIQUIDATION-AMOUNTS





```clarity
(define-constant ERR-ZERO-LIQUIDATION-AMOUNTS (err u400008))
```

[View in file](../../contracts/market/market.clar#L76)

### ERR-UNKNOWN-VAULT





```clarity
(define-constant ERR-UNKNOWN-VAULT (err u400009))
```

[View in file](../../contracts/market/market.clar#L77)

### ERR-ORACLE-TYPE





```clarity
(define-constant ERR-ORACLE-TYPE (err u400010))
```

[View in file](../../contracts/market/market.clar#L78)

### ERR-ORACLE-CALLCODE





```clarity
(define-constant ERR-ORACLE-CALLCODE (err u400011))
```

[View in file](../../contracts/market/market.clar#L79)

### ERR-ORACLE-PYTH





```clarity
(define-constant ERR-ORACLE-PYTH (err u400012))
```

[View in file](../../contracts/market/market.clar#L80)

### ERR-ORACLE-DIA





```clarity
(define-constant ERR-ORACLE-DIA (err u400013))
```

[View in file](../../contracts/market/market.clar#L81)

### ERR-ORACLE-INVARIANT





```clarity
(define-constant ERR-ORACLE-INVARIANT (err u400014))
```

[View in file](../../contracts/market/market.clar#L82)

### ERR-ORACLE-MOCK





```clarity
(define-constant ERR-ORACLE-MOCK (err u400019))  ;; Mock oracle call failed
```

[View in file](../../contracts/market/market.clar#L83)

### ERR-ORACLE-MULTI





```clarity
(define-constant ERR-ORACLE-MULTI (err u400015))
```

[View in file](../../contracts/market/market.clar#L84)

### ERR-LIQUIDATION-PAUSED





```clarity
(define-constant ERR-LIQUIDATION-PAUSED (err u400016))
```

[View in file](../../contracts/market/market.clar#L85)

### ERR-PRICE-CONFIDENCE-LOW





```clarity
(define-constant ERR-PRICE-CONFIDENCE-LOW (err u400017))
```

[View in file](../../contracts/market/market.clar#L86)

### ERR-HEALTHY





```clarity
(define-constant ERR-HEALTHY (err u400018))
```

[View in file](../../contracts/market/market.clar#L87)

### ERR-SLIPPAGE





```clarity
(define-constant ERR-SLIPPAGE (err u400019))
```

[View in file](../../contracts/market/market.clar#L88)

### ERR-DISABLED-COLLATERAL-PRICE-FAILED





```clarity
(define-constant ERR-DISABLED-COLLATERAL-PRICE-FAILED (err u400020))
```

[View in file](../../contracts/market/market.clar#L89)

### ERR-BAD-DEBT-SOCIALIZATION-FAILED





```clarity
(define-constant ERR-BAD-DEBT-SOCIALIZATION-FAILED (err u400021))
```

[View in file](../../contracts/market/market.clar#L90)

### ERR-PRICE-FEED-UPDATE-FAILED





```clarity
(define-constant ERR-PRICE-FEED-UPDATE-FAILED (err u400022))
```

[View in file](../../contracts/market/market.clar#L91)

### ERR-EGROUP-ASSET-BORROW-DISABLED





```clarity
(define-constant ERR-EGROUP-ASSET-BORROW-DISABLED (err u400023))
```

[View in file](../../contracts/market/market.clar#L92)

### ERR-LIQUIDATION-BORROW-SAME-BLOCK





```clarity
(define-constant ERR-LIQUIDATION-BORROW-SAME-BLOCK (err u400024))
```

[View in file](../../contracts/market/market.clar#L93)

### ERR-AUTHORIZATION





```clarity
(define-constant ERR-AUTHORIZATION (err u400025))
```

[View in file](../../contracts/market/market.clar#L94)
  