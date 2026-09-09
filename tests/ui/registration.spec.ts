import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register.page';
import { createTestUser } from '../../test-data/users';

test('User can register successfully', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const testUser = createTestUser();

  await registerPage.goto();
  await registerPage.registerUser(testUser);

  await expect(page.getByText(`Welcome ${testUser.username}`)).toBeVisible();
  await expect(
    page.getByText('Your account was created successfully.')
  ).toBeVisible();
});
