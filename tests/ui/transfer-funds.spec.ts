import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register.page';
import { AccountsPage } from '../../pages/accounts.page';
import { TransferPage } from '../../pages/transfer.page';
import { createTestUser } from '../../test-data/users';

test('User can transfer funds between two different accounts', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const accountsPage = new AccountsPage(page);
  const transferPage = new TransferPage(page);
  const testUser = createTestUser();

  // Register a new user
  await registerPage.goto();
  await registerPage.registerUser(testUser);

  // Open a second account
  await accountsPage.openNewAccountPage();
  await accountsPage.openAccount('CHECKING');

  // Verify that the second account was created
  await expect(page.getByText('Account Opened!')).toBeVisible();

  // Navigate to Transfer Funds
  await transferPage.openTransferFundsPage();

  //Wait until both accounts are loaded in the From account drop-down
  await expect.poll(async () => {
    return await transferPage.fromAccountSelect.locator('option').count();
  }).toBeGreaterThanOrEqual(2);

  // Get the account IDs available to the user
  const accountIds = await transferPage.getAvailableAccountIds();

  expect(accountIds.length).toBeGreaterThanOrEqual(2);

  const fromAccountId = accountIds[0];
  const toAccountId = accountIds[1];

  // Transfer $10 between the two accounts
  await transferPage.transferFunds(
    '10',
    fromAccountId,
    toAccountId
  );

  // Verify successful transfer
  await expect(page.getByText('Transfer Complete!')).toBeVisible();

  await expect(
    page.getByText('$10.00 has been transferred')
  ).toBeVisible();
});