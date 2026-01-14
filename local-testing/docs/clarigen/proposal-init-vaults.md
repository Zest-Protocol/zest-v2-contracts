
# proposal-init-vaults

[`proposal-init-vaults.clar`](../../contracts/proposals/proposal-init-vaults.clar)

Proposal to initialize vaults and set authorization

This proposal initializes vault-sbtc and vault-usdh

and authorizes the market contract to interact with them

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**

- [`CAP`](#cap)


## Functions

### execute

[View in file](../../contracts/proposals/proposal-init-vaults.clar#L10)

`(define-public (execute () (response bool uint))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    ;; Set vault caps before initialization
    ;; Called directly since we're already in dao-executor's context
    (try! (contract-call? .vault-sbtc set-cap-supply CAP))
    (try! (contract-call? .vault-sbtc set-cap-debt CAP))
    (try! (contract-call? .vault-usdh set-cap-supply CAP))
    (try! (contract-call? .vault-usdh set-cap-debt CAP))
    (try! (contract-call? .vault-usdc set-cap-supply CAP))
    (try! (contract-call? .vault-usdc set-cap-debt CAP))
    (try! (contract-call? .vault-ststx set-cap-supply CAP))
    (try! (contract-call? .vault-ststx set-cap-debt CAP))
    (try! (contract-call? .vault-stx set-cap-supply CAP))
    (try! (contract-call? .vault-stx set-cap-debt CAP))
    
    ;; Initialize vaults (mints minimum liquidity)
    ;; Called directly - dao-executor's with-all-assets-unsafe handles asset transfers
    (try! (as-contract? ((with-all-assets-unsafe))
      (try! (contract-call? .vault-sbtc initialize))
      (try! (contract-call? .vault-usdh initialize))
      (try! (contract-call? .vault-usdc initialize))
      (try! (contract-call? .vault-ststx initialize))
      (try! (contract-call? .vault-stx initialize))
    ))
    
    ;; Authorize market contract
    ;; Called directly since we're already in dao-executor's context
    (try! (contract-call? .vault-sbtc set-authorized-contract .market true))
    (try! (contract-call? .vault-usdh set-authorized-contract .market true))
    (try! (contract-call? .vault-usdc set-authorized-contract .market true))
    (try! (contract-call? .vault-ststx set-authorized-contract .market true))
    (try! (contract-call? .vault-stx set-authorized-contract .market true))
    
    (ok true)))
```
</details>




## Maps



## Variables



## Constants

### CAP



Set caps to 10 trillion units (scaled by token decimals)

```clarity
(define-constant CAP u10000000000000)
```

[View in file](../../contracts/proposals/proposal-init-vaults.clar#L8)
  