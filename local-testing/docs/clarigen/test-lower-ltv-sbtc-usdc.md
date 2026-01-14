
# test-lower-ltv-sbtc-usdc

[`test-lower-ltv-sbtc-usdc.clar`](../../contracts/proposals/test/ltv-scenarios/test-lower-ltv-sbtc-usdc.clar)

Test Proposal: Lower sBTC/USDC Egroup LTV



For testing flashloan liquidations - lowers LTV thresholds on the sBTC/USDC egroup



MASK calculation:

- sBTC collateral: bit 2 = 2^2 = 4

- USDC debt: bit 70 = 2^70 = 1180591620717411303424

- MASK = 1180591620717411303428

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**




## Functions

### execute

[View in file](../../contracts/proposals/test/ltv-scenarios/test-lower-ltv-sbtc-usdc.clar#L12)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    (try! (contract-call? .egroup update u0 {
      MASK: u1180591620717411303428,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u10000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u5000,
      LTV-LIQ-PARTIAL: u6000,
      LTV-LIQ-FULL: u7000
    }))
    (ok true)))
```
</details>




## Maps



## Variables



## Constants


  