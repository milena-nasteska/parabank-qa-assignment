# Transfer Funds - Manual Test Cases

## Preconditions
- User is registered and logged in.
- User has at least two accounts.
- Source account has sufficient balance where required.

---

## TF-001 - Transfer funds successfully between two different accounts

**Priority:** High

**Steps:**
1. Open Transfer Funds.
2. Enter a valid amount.
3. Select different From and To accounts.
4. Click Transfer.

**Test Data:**  
Amount: 100

**Expected Result:**  
The transfer is completed successfully. A success confirmation is displayed, the source account balance is decreased by 100, and the destination account balance is increased by 100.

---

## TF-002 - Attempt to transfer funds to the same account

**Priority:** High

**Steps:**
1. Open Transfer Funds.
2. Enter a valid amount.
3. Select the same account as both From and To.
4. Click Transfer.

**Test Data:**  
Amount: 100

**Expected Result:**  
The transfer is not completed. The account balance remains unchanged and an appropriate validation message is displayed.

---

## TF-003 - Attempt transfer with an empty amount

**Priority:** High

**Steps:**
1. Open Transfer Funds.
2. Leave the Amount field empty.
3. Select different From and To accounts.
4. Click Transfer.

**Expected Result:**  
The transfer is not completed. The account balances remain unchanged and validation is displayed indicating that a valid amount is required.
