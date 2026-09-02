(use-trait ft-trait 'SP1A27KFY4XERQCCRCARCYD1CC5N7M6688BSYADJ7.ft-trait.ft-trait)

(define-trait strategy-vault
  (

    (deposit (<ft-trait> uint uint) (response uint uint))

    (deposit-sbtc (uint uint) (response uint uint))

    (request-redeem (uint bool) (response uint uint))

    (fund-claim (uint) (response uint uint))

    (redeem (<ft-trait> uint) (response uint uint))

    (cancel-redeem (uint) (response uint uint))

    (get-share-price () (response uint uint))

    (get-net-assets () (response uint uint))

    (convert-to-shares (uint) (response uint uint))

    (convert-to-assets (uint) (response uint uint))
  ))

(define-trait strategy-ops
  (

    (open-position (<ft-trait> <ft-trait> uint uint (optional (list 3 (buff 8192)))) (response bool uint))

    (close-position (<ft-trait> <ft-trait> uint uint (optional (list 3 (buff 8192)))) (response bool uint))

    (stack-sbtc-to-state (uint) (response uint uint))
  ))
