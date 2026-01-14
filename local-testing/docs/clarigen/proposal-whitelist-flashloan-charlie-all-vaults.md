
# proposal-whitelist-flashloan-charlie-all-vaults

[`proposal-whitelist-flashloan-charlie-all-vaults.clar`](../../contracts/proposals/vault/proposal-whitelist-flashloan-charlie-all-vaults.clar)

Proposal to whitelist charlie (wallet_3) for flashloans across all vaults

This proposal enables charlie to use flashloans in all vaults (without fee exemption)

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**

- [`CHARLIE`](#charlie)


## Functions

### execute

[View in file](../../contracts/proposals/vault/proposal-whitelist-flashloan-charlie-all-vaults.clar#L9)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    ;; Whitelist charlie for flashloans in all vaults
    ;; can-flashloan = true, fee-exempt = false
    (try! (contract-call? .vault-stx set-flashloan-permissions CHARLIE true false))
    (try! (contract-call? .vault-sbtc set-flashloan-permissions CHARLIE true false))
    (try! (contract-call? .vault-ststx set-flashloan-permissions CHARLIE true false))
    (try! (contract-call? .vault-usdc set-flashloan-permissions CHARLIE true false))
    (try! (contract-call? .vault-usdh set-flashloan-permissions CHARLIE true false))
    (ok true)))
```
</details>




## Maps



## Variables



## Constants

### CHARLIE



Charlie's simnet address (wallet_3)

```clarity
(define-constant CHARLIE 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC)
```

[View in file](../../contracts/proposals/vault/proposal-whitelist-flashloan-charlie-all-vaults.clar#L7)
  