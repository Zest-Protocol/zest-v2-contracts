
# proposal-init-market-vault

[`proposal-init-market-vault.clar`](../../contracts/proposals/proposal-init-market-vault.clar)

Proposal to authorize market contract in market-vault

Sets market as the implementation contract for market-vault

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**




## Functions

### execute

[View in file](../../contracts/proposals/proposal-init-market-vault.clar#L6)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    ;; Set market as implementation in market-vault
    (try! (contract-call? .market-vault set-impl .market))
    
    (ok true)))
```
</details>




## Maps



## Variables



## Constants


  