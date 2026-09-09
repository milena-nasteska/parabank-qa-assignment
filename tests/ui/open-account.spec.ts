import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register.page';
import { AccountsPage } from '../../pages/accounts.page';
import { createTestUser } from '../../test-data/users';

test('User can open a new checking account', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const accountsPage = new AccountsPage(page);
  const testUser = createTestUser();

  // Register a new user so the test starts with a clean account
  await registerPage.goto();
  await registerPage.registerUser(testUser);

  // Navigate to the Open New Account page
  await accountsPage.openNewAccountPage();

  // Open a new CHECKING account
  await accountsPage.openAccount('CHECKING');

  // Verify that ParaBank created a new account
  await expect(page.getByText('Account Opened!')).toBeVisible();
  await expect(accountsPage.newAccountId).toBeVisible();

  const accountId = await accountsPage.newAccountId.textContent();

  expect(accountId).toBeTruthy();
});