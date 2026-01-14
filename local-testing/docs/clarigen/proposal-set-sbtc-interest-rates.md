
# proposal-set-sbtc-interest-rates

[`proposal-set-sbtc-interest-rates.clar`](../../contracts/proposals/proposal-set-sbtc-interest-rates.clar)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

sBTC Interest Rate Configuration Proposal



Sets interest rate curve for vault-sbtc

More conservative than USDC due to higher volatility



Optimal utilization: 70% (vs 75% for USDC)

Reserve factor: 10% (same as USDC)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**

- [`UTIL-POINTS`](#util-points)
- [`RATE-POINTS`](#rate-points)
- [`RESERVE-FACTOR`](#reserve-factor)


## Functions

### execute

[View in file](../../contracts/proposals/proposal-set-sbtc-interest-rates.clar#L26)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    ;; Set utilization curve points
    (try! (contract-call? .vault-sbtc set-points-util UTIL-POINTS))
    
    ;; Set interest rate curve points
    (try! (contract-call? .vault-sbtc set-points-rate RATE-POINTS))
    
    ;; Set reserve factor (10% to DAO treasury)
    (try! (contract-call? .vault-sbtc set-fee-reserve RESERVE-FACTOR))
    
    (ok true)))
```
</details>




## Maps



## Variables



## Constants

### UTIL-POINTS





```clarity
(define-constant UTIL-POINTS (list u0 u2500 u5000 u7000 u7500 u8500 u9000 u10000))
```

[View in file](../../contracts/proposals/proposal-set-sbtc-interest-rates.clar#L22)

### RATE-POINTS





```clarity
(define-constant RATE-POINTS (list u200 u250 u400 u600 u800 u1800 u2500 u10000))
```

[View in file](../../contracts/proposals/proposal-set-sbtc-interest-rates.clar#L23)

### RESERVE-FACTOR





```clarity
(define-constant RESERVE-FACTOR u1000) ;; 10%
```

[View in file](../../contracts/proposals/proposal-set-sbtc-interest-rates.clar#L24)
  