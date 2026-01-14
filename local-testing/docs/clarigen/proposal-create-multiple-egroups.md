
# proposal-create-multiple-egroups

[`proposal-create-multiple-egroups.clar`](../../contracts/proposals/proposal-create-multiple-egroups.clar)

Proposal to create multiple egroups for testing

Creates egroups with 2, 3, and 4 asset combinations

Different LTV values allow testing egroup matching and fallback

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**




## Functions

### execute

[View in file](../../contracts/proposals/proposal-create-multiple-egroups.clar#L12)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    
    ;; ========== 2-ASSET EGROUPS (1 collateral + 1 debt) ==========
    
    ;; Egroup 1: sBTC collateral + USDC debt
    ;; MASK = 2^2 + 2^70 = 4 + 1180591620717411303424 = 1180591620717411303428
    (try! (contract-call? .egroup insert {
      MASK: u1180591620717411303428,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,              ;; 2.0 exponent (quadratic)
      LIQ-PENALTY-MIN: u500,              ;; 5%
      LIQ-PENALTY-MAX: u1000,             ;; 10%
      LTV-BORROW: u7000,                  ;; 70% - High confidence pair
      LTV-LIQ-PARTIAL: u8500,             ;; 85%
      LTV-LIQ-FULL: u9500                 ;; 95%
    }))
    
    ;; Egroup 2: sBTC collateral + USDH debt
    ;; MASK = 2^2 + 2^72 = 4 + 4722366482869645213696 = 4722366482869645213700
    (try! (contract-call? .egroup insert {
      MASK: u4722366482869645213700,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u6500,                  ;; 65% - Slightly lower than USDC pair
      LTV-LIQ-PARTIAL: u8000,
      LTV-LIQ-FULL: u9000
    }))
    
    ;; Egroup 3: ststx collateral + USDC debt
    ;; MASK = 2^4 + 2^70 = 16 + 1180591620717411303424 = 1180591620717411303440
    (try! (contract-call? .egroup insert {
      MASK: u1180591620717411303440,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u5000,                  ;; 50% - Lower quality collateral
      LTV-LIQ-PARTIAL: u7000,
      LTV-LIQ-FULL: u8500
    }))
    
    ;; ========== 3-ASSET EGROUPS ==========
    
    ;; Egroup 4: sBTC + ststx collateral + USDC debt
    ;; MASK = 2^2 + 2^4 + 2^70 = 4 + 16 + 1180591620717411303424 = 1180591620717411303444
    ;; FIXED: Superset of Egroup 3, so LTV values must be <= Egroup 3's values
    (try! (contract-call? .egroup insert {
      MASK: u1180591620717411303444,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u4500,                  ;; 45% - More conservative (<= 50%)
      LTV-LIQ-PARTIAL: u6500,             ;; 65% - More conservative (<= 70%)
      LTV-LIQ-FULL: u8000                 ;; 80% - More conservative (<= 85%)
    }))
    
    ;; Egroup 5: sBTC collateral + USDC + USDH debt
    ;; MASK = 2^2 + 2^70 + 2^72 = 4 + 1180591620717411303424 + 4722366482869645213696 = 5902958103587056517124
    (try! (contract-call? .egroup insert {
      MASK: u5902958103587056517124,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u5500,                  ;; 55% - Multiple stablecoin debt
      LTV-LIQ-PARTIAL: u7000,
      LTV-LIQ-FULL: u8000
    }))
    
    ;; ========== 4-ASSET EGROUPS ==========
    
    ;; Egroup 6: ststx collateral + USDC + USDH debt (OLD comment was wrong - no sBTC!)
    ;; MASK = 2^4 + 2^70 + 2^72 = 16 + 1180591620717411303424 + 4722366482869645213696 = 5902958103587056517136
    (try! (contract-call? .egroup insert {
      MASK: u5902958103587056517136,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u5000,                  ;; 50% - Multiple of both
      LTV-LIQ-PARTIAL: u6500,
      LTV-LIQ-FULL: u7500
    }))
    
    ;; Egroup 7: wstx + sBTC + ststx collateral + USDC debt
    ;; MASK = 2^0 + 2^2 + 2^4 + 2^70 = 1 + 4 + 16 + 1180591620717411303424 = 1180591620717411303445
    (try! (contract-call? .egroup insert {
      MASK: u1180591620717411303445,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u4500,                  ;; 45% - Diverse collateral basket
      LTV-LIQ-PARTIAL: u6000,
      LTV-LIQ-FULL: u7000
    }))
    
    ;; Egroup 8: sBTC collateral + wSTX debt
    ;; MASK = 2^2 + 2^64 = 4 + 18446744073709551616 = 18446744073709551620
    (try! (contract-call? .egroup insert {
      MASK: u18446744073709551620,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u6500,                  ;; 65% - wSTX slightly riskier than stablecoins
      LTV-LIQ-PARTIAL: u8000,
      LTV-LIQ-FULL: u9000
    }))
    
    ;; Egroup 9: zsBTC collateral + USDC debt (vault shares as collateral)
    ;; MASK = 2^3 + 2^70 = 8 + 1180591620717411303424 = 1180591620717411303432
    (try! (contract-call? .egroup insert {
      MASK: u1180591620717411303432,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u6000,                  ;; 60% - Vault shares more conservative
      LTV-LIQ-PARTIAL: u7500,
      LTV-LIQ-FULL: u8500
    }))
    
    ;; Egroup 10: sBTC + USDC collateral + USDC debt (multi-collateral)
    ;; MASK = 2^2 + 2^6 + 2^70 = 4 + 64 + 1180591620717411303424 = 1180591620717411303492
    (try! (contract-call? .egroup insert {
      MASK: u1180591620717411303492,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u6000,                  ;; 60% - Multi-collateral more conservative
      LTV-LIQ-PARTIAL: u7500,
      LTV-LIQ-FULL: u8500
    }))
    
    ;; Egroup 11: zUSDC + sBTC collateral + USDC debt (vault shares + regular token)
    ;; MASK = 2^7 + 2^2 + 2^70 = 128 + 4 + 1180591620717411303424 = 1180591620717411303556
    (try! (contract-call? .egroup insert {
      MASK: u1180591620717411303556,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u6000,                  ;; 60% - zUSDC shares + sBTC
      LTV-LIQ-PARTIAL: u7500,
      LTV-LIQ-FULL: u8500
    }))
    
    ;; Egroup 12: zUSDC collateral + sBTC debt
    ;; MASK = 2^7 + 2^66 = 128 + 73786976294838206464 = 73786976294838206592
    (try! (contract-call? .egroup insert {
      MASK: u73786976294838206592,
      BORROW-DISABLED-MASK: u0,
      LIQ-CURVE-EXP: u20000,
      LIQ-PENALTY-MIN: u500,
      LIQ-PENALTY-MAX: u1000,
      LTV-BORROW: u6000,                  ;; 60% - zUSDC shares as collateral
      LTV-LIQ-PARTIAL: u7500,
      LTV-LIQ-FULL: u8500
    }))
    
    (ok true)))
```
</details>




## Maps



## Variables



## Constants


  