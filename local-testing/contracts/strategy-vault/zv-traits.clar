;; @contract Strategy Vault Traits
;; @description Trait definitions for the Strategy Vault Standard (SVS).
;; Defines interfaces for strategy vaults and strategy operations contracts.

(use-trait ft-trait .ft-trait.ft-trait)

;; Strategy Vault - user-facing interface for deposits, redemptions, and accounting
(define-trait strategy-vault
  (
    ;; Deposit collateral (token, amount, min-shares-out) --> shares minted
    (deposit (<ft-trait> uint uint) (response uint uint))

    ;; Deposit sBTC (amount, min-shares-out) --> shares minted; vault stacks sBTC
    ;; into stBTC inline via StackingDAO and credits the stBTC actually received.
    (deposit-sbtc (uint uint) (response uint uint))

    ;; Request async redemption of shares (shares, is-express) --> claim-id
    (request-redeem (uint bool) (response uint uint))

    ;; Fund a pending claim - locks share price, burns shares (manager or post-cooldown)
    (fund-claim (uint) (response uint uint))

    ;; Claim collateral after cooldown (token, claim-id) --> assets received
    (redeem (<ft-trait> uint) (response uint uint))

    ;; Cancel a pending standard redemption (not express)
    (cancel-redeem (uint) (response uint uint))

    ;; Read-only: current share price (net-assets * 1e8 / supply)
    (get-share-price () (response uint uint))

    ;; Read-only: net assets (total-assets - pending-fees - pending-rf)
    (get-net-assets () (response uint uint))

    ;; Read-only: convert collateral amount to share amount
    (convert-to-shares (uint) (response uint uint))

    ;; Read-only: convert share amount to collateral amount
    (convert-to-assets (uint) (response uint uint))
  ))

;; Strategy Ops - position management interface (varies per strategy type)
(define-trait strategy-ops
  (
    ;; Open position: deploy collateral to Zest, borrow, send to yield destination
    ;; (collateral-ft, borrow-ft, collateral-amount, borrow-amount, price-feeds)
    (open-position (<ft-trait> <ft-trait> uint uint (optional (list 3 (buff 8192)))) (response bool uint))

    ;; Close position: repay loan, withdraw collateral
    ;; (borrow-ft, vault-ft, repay-amount, collateral-amount, price-feeds)
    (close-position (<ft-trait> <ft-trait> uint uint (optional (list 3 (buff 8192)))) (response bool uint))

    ;; Stack sBTC held in zv-state into stBTC on StackingDAO (deposit-sbtc leg).
    ;; Engine or trader calls it; returns stbtc-received to zv-state.
    (stack-sbtc-to-state (uint) (response uint uint))
  ))
