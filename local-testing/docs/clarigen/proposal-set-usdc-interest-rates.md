
# proposal-set-usdc-interest-rates

[`proposal-set-usdc-interest-rates.clar`](../../contracts/proposals/proposal-set-usdc-interest-rates.clar)

Proposal to configure vault-usdc interest rate curve

Sets 8-point curve for borrowing USDC against sBTC collateral

This proposal configures:

- Utilization breakpoints (8 points from 0% to 100%)

- Interest rates at each utilization level

- Reserve factor (10% to DAO treasury)

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

[View in file](../../contracts/proposals/proposal-set-usdc-interest-rates.clar#L23)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    ;; Set utilization breakpoints
    (try! (contract-call? .vault-usdc set-points-util UTIL-POINTS))
    
    ;; Set interest rates at each breakpoint
    (try! (contract-call? .vault-usdc set-points-rate RATE-POINTS))
    
    ;; Set reserve factor (10%)
    (try! (contract-call? .vault-usdc set-fee-reserve RESERVE-FACTOR))
    
    (ok true)
  )
)
```
</details>




## Maps



## Variables



## Constants

### UTIL-POINTS



Utilization points (in BPS, 0-10000 where 10000 = 100%)
Points: [0%, 25%, 50%, 70%, 75%, 85%, 90%, 100%]

```clarity
(define-constant UTIL-POINTS (list u0 u2500 u5000 u7000 u7500 u8500 u9000 u10000))
```

[View in file](../../contracts/proposals/proposal-set-usdc-interest-rates.clar#L12)

### RATE-POINTS



Borrow rate points (in BPS, annualized)
Rates: [2%, 2.5%, 4%, 6%, 8%, 18%, 25%, 100%]
Gentle slope up to 75% optimal, steep increase beyond to protect liquidity

```clarity
(define-constant RATE-POINTS (list u200 u250 u400 u600 u800 u1800 u2500 u10000))
```

[View in file](../../contracts/proposals/proposal-set-usdc-interest-rates.clar#L17)

### RESERVE-FACTOR



Reserve factor: 10% (1000 BPS)
Protocol retains 10% of interest, 90% goes to suppliers

```clarity
(define-constant RESERVE-FACTOR u1000)
```

[View in file](../../contracts/proposals/proposal-set-usdc-interest-rates.clar#L21)
  