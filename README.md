# parabank-qa-assignment

## Scope
Testing the ParaBank demo application

## Test Environment

The automated tests are configured to run against a local ParaBank instance:

"http://localhost:8080"

The local environment was used because the public ParaBank demo site was intermittently unreliable during test execution.

ParaBank should be started locally using Docker before running the automated tests.

## Manual Testing
Feature selected: Transfer Funds

Manual test cases:
[Transfer Funds Test Cases](./manual-tests/transfer-funds-test-cases.md)

## Automated Testing
- 3 UI E2E tests using Playwright + TypeScript
- 1 API automated test

## Bugs Found 
[Bug Reports](./bug-reports/bugs.md)

## How to Run

## Prerequisites

- Node.js
- npm
- Docker Desktop
- Parabank running locally on "http://localhost:8080"

## Install dependencies

```bash
npm install 
```
## Run all tests 
```bash
npx playwright test
```

## Run UI tests 
```bash
npx playwright test tests/ui
```

## Run API test
```bash
npx playwright test tests/api
```

## View HTML report 
```bash
npx playwright show-report
```