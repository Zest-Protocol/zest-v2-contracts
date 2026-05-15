# Implementation Plan: Zest Protocol v2 Contracts Stabilization

## Phase 1: Environment & Testing (COMPLETED)
- [x] Identify and resolve dependency conflicts in `local-testing/`. (DONE: used `--legacy-peer-deps`)
- [x] Investigate and fix `ATK-LG-01` failure in `liquidation.test.ts`. (DONE: adjusted prices to guarantee liquidation)
- [x] Resolve brittle price updates in `pyth-helpers.ts`. (DONE: replaced with tick)

## Phase 2: Technical Debt & Helpers (COMPLETED)
- [x] Fix TypeScript type issue in `pyth-helpers.ts:read_pyth_price_scaled`. (DONE)
- [x] Complete missing Switch cases in `vault-helpers.ts` for all vault types. (DONE: created 11 missing proposals)
- [x] Create and register 11 missing Clarity proposal contracts for vault management. (DONE)
- [x] Fix broken exports and outdated mock token references in `helpers.ts`. (DONE: removed defunct mock-token-01)

## Phase 3: Documentation & Consistency (COMPLETED)
- [x] Expand `docs/errors.md` with detailed vault-specific error codes. (DONE: added 800xxx range)
- [x] Document protocol initialization and DAO setup patterns. (DONE: mapped in session summary)

## Phase 4: Future Work (PENDING)
- [ ] Add functional unit tests for each new vault proposal.
- [ ] Implement robust polling for simnet time synchronization.
