
# proposal-whitelist-flashloan-liquidator

[`proposal-whitelist-flashloan-liquidator.clar`](../../contracts/proposals/vault/proposal-whitelist-flashloan-liquidator.clar)

Proposal to whitelist flashloan-liquidator for flashloans across all vaults

This enables the liquidator contract to use flashloans for capital-free liquidations

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**

- [`FLASHLOAN_LIQUIDATOR`](#flashloan_liquidator)


## Functions

### execute

[View in file](../../contracts/proposals/vault/proposal-whitelist-flashloan-liquidator.clar#L8)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    ;; Whitelist flashloan-liquidator for flashloans in all vaults
    ;; can-flashloan = true, fee-exempt = false
    (try! (contract-call? .vault-stx set-flashloan-permissions FLASHLOAN_LIQUIDATOR true false))
    (try! (contract-call? .vault-sbtc set-flashloan-permissions FLASHLOAN_LIQUIDATOR true false))
    (try! (contract-call? .vault-ststx set-flashloan-permissions FLASHLOAN_LIQUIDATOR true false))
    (try! (contract-call? .vault-usdc set-flashloan-permissions FLASHLOAN_LIQUIDATOR true false))
    (try! (contract-call? .vault-usdh set-flashloan-permissions FLASHLOAN_LIQUIDATOR true false))
    (ok true)))
```
</details>




## Maps



## Variables



## Constants

### FLASHLOAN_LIQUIDATOR





```clarity
(define-constant FLASHLOAN_LIQUIDATOR .flashloan-liquidator)
```

[View in file](../../contracts/proposals/vault/proposal-whitelist-flashloan-liquidator.clar#L6)
  