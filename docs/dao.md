# DAO System

## Overview

The Zest Protocol DAO (Decentralized Autonomous Organization) manages protocol governance and treasury operations. The DAO system consists of three interconnected contracts that enable decentralized decision-making and protocol fee management.

## Core Components

### 1. dao-multisig.clar - Proposal Management

The multisig contract handles proposal creation, voting, and execution authorization.

**Key Features:**
- **Proposal Creation:** DAO signers can create proposals for protocol changes
- **Voting System:** Multisig approval mechanism requiring threshold approvals
- **Expiration:** Proposals automatically expire after a configurable duration (default: 30 days)
- **Urgency Flag:** Critical security proposals can bypass maturity delays
- **Implementation Updates:** Two-step process with 7-day timelock for changing the executor implementation

**Proposal Lifecycle:**
```
1. Create Proposal (any signer)
   ↓
2. Approval Phase (other signers approve)
   ↓
3. Threshold Check (requires minimum approvals)
   ↓
4. Maturity (1-day TIMELOCK)
   ↓
5. Execution (if not expired)
```

**Key Constants:**
```clarity
(define-constant TIMELOCK u86400)               ;; 1 day for proposal maturity
(define-constant IMPL-UPDATE-TIMELOCK u604800)  ;; 7 days for impl updates
(define-constant MAX-SIGNERS u20)               ;; Maximum number of signers

(define-data-var default-expiry-duration uint u2592000)  ;; 30 days in seconds
```

**Expiration Mechanism:**
```clarity
;; Proposals expire after default-expiry-duration (30 days)
;; Checked during approval and execution using stacks-block-time
(asserts! (< stacks-block-time (get expires-at proposal)) 
          ERR-PROPOSAL-EXPIRED)
```

**Purpose:** Prevents old proposals from being resurrected and executed unexpectedly.

---

### 2. dao-treasury.clar - Fee Accumulation

The treasury contract accumulates protocol fees from vault operations.

**Key Features:**
- **Protocol Fee Collection:** Receives fees as vault share tokens (ztokens)
- **AAVE Model:** Fees minted directly as shares on vault state updates
- **Multi-Asset:** Holds shares from all vault types (zSTX, zsBTC, zUSDC, etc.)
- **DAO Controlled:** Only DAO executor can authorize treasury withdrawals

**Fee Accrual Process:**

Following the [AAVE ReserveLogic model](https://github.com/aave-dao/aave-v3-origin/blob/8a43339b6f93ea0a2f4d8e1ef3b9494c9d206a64/src/contracts/protocol/libraries/logic/ReserveLogic.sol#L85-L101), protocol fees are minted on each vault status update:

```
1. Vault Operation (deposit, borrow, repay, etc.)
   ↓
2. Interest Accrual
   ↓
3. Calculate Protocol Share (e.g., 10% reserve factor)
   ↓
4. Mint Vault Shares to dao-treasury
   ↓
5. Treasury accumulates yield-bearing assets
```

**Example:**
- Vault-USDC earns 100 USDC in interest
- Reserve factor: 10%
- 10 USDC equivalent minted as zUSDC shares → dao-treasury
- Treasury automatically benefits from future vault yield

**Benefits:**
- Treasury earns compounding yield on protocol fees
- No need to claim or harvest fees manually
- Efficient capital allocation

---

### 3. dao-executor.clar - Execution Engine

The executor contract implements approved proposals.

**Key Features:**
- **Authorized Execution:** Only executes proposals approved by dao-multisig
- **Contract Calls:** Can call any protocol contract on behalf of DAO
- **Parameter Updates:** Modify vault parameters, egroup settings, etc.
- **Upgradable:** Implementation can be changed through secure two-step process

**Execution Flow:**
```
1. Proposal Approved by dao-multisig
   ↓
2. Proposal reaches maturity (or marked urgent)
   ↓
3. dao-multisig calls execute() with proposal
   ↓
4. dao-executor validates and runs proposal script
   ↓
5. Protocol state updated
```

---

## Implementation Update System

The DAO supports secure implementation upgrades through a two-step process with a 7-day timelock.

### Why Two-Step Updates?

Changing the executor implementation is a critical operation that could affect protocol security. The two-step process with timelock provides:
- **Review period:** 7 days for community to review proposed changes
- **Cancel capability:** DAO can cancel if issues are discovered
- **No surprise upgrades:** Cannot immediately change implementation

### Update Process

```
Step 1: Schedule (requires DAO proposal)
┌─────────────────────────────────────┐
│ schedule-impl-update(new-impl)      │
│   - Validates no pending update     │
│   - Records scheduled-at timestamp  │
│   - Starts 7-day timelock          │
└─────────────────────────────────────┘
              ↓
         7-day wait
              ↓
Step 2: Execute (requires another DAO proposal)
┌─────────────────────────────────────┐
│ execute-impl-update()               │
│   - Validates timelock elapsed      │
│   - Updates dao-executor impl       │
│   - Clears pending update          │
└─────────────────────────────────────┘
```

**Cancellation:**
```clarity
;; DAO can cancel pending impl update via proposal
(define-public (cancel-impl-update)
  (begin
    (try! (check-dao-auth))
    (asserts! (is-some (var-get pending-impl-update)) ERR-SANITY-PROPOSAL)
    (var-set pending-impl-update none)
    (ok true)))
```

---

## Governance Process

### Creating a Proposal

1. **Identify Need:** Protocol parameter change, new feature, emergency action
2. **Draft Proposal:** Create proposal script contract implementing `proposal-script` trait
3. **Submit via dao-multisig:** Any signer calls `propose(script, urgent)`

### Voting and Approval

1. **Approval Period:** Other signers call `approve(id)` to add their approval
2. **Threshold Check:** Proposal requires minimum threshold of approvals
3. **Expiration Check:** Must approve before 30-day expiration
4. **No Double-Approval:** Each signer can only approve once

### Execution

1. **Call execute:** Any signer calls `execute(id, script)`
2. **Validation:** Checks approval count, maturity, expiration, script match
3. **Execute:** Runs proposal script via dao-executor
4. **Mark Executed:** Prevents re-execution

---

## Time-Based Features

The DAO system uses `stacks-block-time` (Clarity 4) for precise time-based operations:

**Proposal Expiration:**
```clarity
;; Check expiration using precise timestamps
(asserts! (< stacks-block-time (get expires-at proposal)) 
          ERR-PROPOSAL-EXPIRED)
```

**Maturity Checks:**
```clarity
;; Verify proposal has matured (1-day TIMELOCK)
(asserts! (or (>= stacks-block-time mature-at)
              (get urgent proposal))
          ERR-SANITY-PROPOSAL)
```

**Implementation Update Timelock:**
```clarity
;; 7-day timelock for impl updates
(asserts! (>= stacks-block-time 
              (+ (get scheduled-at update) IMPL-UPDATE-TIMELOCK))
          ERR-IMPL-UPDATE-NOT-READY)
```

**Benefits:**
- Precise expiration timing (no block-height approximations)
- Predictable governance timelines
- Better UX for DAO members

---

## Integration with Protocol

### Vault Parameters

The DAO can modify vault parameters through proposals:
- Interest rate curves (points-util, points-rate)
- Reserve factors
- Supply/debt caps
- Flash loan fees
- Pause states
- Flashloan whitelist

### Egroup Configuration

The DAO manages risk parameters:
- Create new efficiency groups
- Update LTV ratios
- Modify liquidation penalties
- Enable/disable asset combinations

### Asset Management

The DAO controls asset lifecycle:
- Register new assets
- Enable assets for collateral/debt
- Update oracle configurations
- Offboard deprecated assets

### Market Controls

The DAO oversees market operations:
- Emergency pause controls
- Liquidation grace periods
- Price confidence ratio
- Protocol-level parameters

---

## Security Considerations

### Proposal Expiration

**Why it matters:** Prevents old proposals from being executed after context changes.

**Example scenario:**
- Day 1: Proposal to increase vault cap to 10M USDC (reasonable at the time)
- Day 60: Market conditions change, 10M is now too risky
- Without expiration: Old proposal could be executed unsafely
- With expiration (30 days): Proposal automatically becomes invalid

### Multisig Protection

**Threshold requirements:** Multiple approvals needed for proposal execution.

**Benefits:**
- Prevents single-party manipulation
- Requires consensus for protocol changes
- Reduces attack surface

### Maturity Delays

**Timelock:** 1-day wait period before execution.

**Purpose:**
- Community review time
- Allows stakeholders to react

### Implementation Update Timelock

**7-day delay:** Provides extended review period for critical upgrades.

**Purpose:**
- Community can review new implementation code
- DAO can cancel if security issues found
- Prevents rushed or malicious upgrades

---

## Summary

The Zest Protocol DAO system provides decentralized governance through:

**Three-Contract Architecture:**
- **dao-multisig:** Proposal management with 30-day expiration
- **dao-treasury:** Protocol fee accumulation as vault shares
- **dao-executor:** Approved proposal implementation

**Key Features:**
- Time-based expiration using `stacks-block-time`
- AAVE-style treasury minting on vault updates
- Multisig approval with configurable threshold
- 1-day maturity delay for non-critical proposals
- 7-day timelock for implementation updates
- Comprehensive protocol parameter control

**Benefits:**
- Decentralized decision-making
- Automatic fee compounding in treasury
- Flexible governance for protocol evolution
- Security through multi-party approval
- Predictable timing with precise timestamps
- Secure upgrade path with timelock protection

The DAO system ensures the protocol can evolve and adapt through governance while maintaining security.
