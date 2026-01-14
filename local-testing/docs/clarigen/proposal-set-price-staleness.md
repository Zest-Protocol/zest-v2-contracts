
# proposal-set-price-staleness

[`proposal-set-price-staleness.clar`](../../contracts/proposals/proposal-set-price-staleness.clar)

Proposal: Set Price Staleness Threshold

Description: DEPRECATED - Staleness is now set per-asset during asset registration

This proposal is kept as a no-op for backwards compatibility with existing tests

**Public functions:**

- [`execute`](#execute)

**Read-only functions:**



**Private functions:**



**Maps**



**Variables**



**Constants**




## Functions

### execute

[View in file](../../contracts/proposals/proposal-set-price-staleness.clar#L5)

`(define-public (execute () (response bool none))`



<details>
  <summary>Source code:</summary>

```clarity
(define-public (execute)
  (begin
    ;; No-op: Staleness configuration moved to asset registration
    ;; See proposal-init-assets.clar where max-staleness is set per asset
    (ok true)))
```
</details>




## Maps



## Variables



## Constants


  