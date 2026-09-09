import { Page, Locator, expect } from '@playwright/test';

export class AccountsPage {
  readonly page: Page;

  //Link used to navigate to the Open New Account Page
  readonly openNewAccountLink: Locator;

  //Drop-down for selecting CHECKING or SAVINGS 
  readonly accountTypeSelect: Locator;

  //Drop-down for selecting the account that will fund the new account
  readonly existingAccountSelect: Locator;

  //Button that submits the new account request
  readonly openNewAccountButton: Locator;

  //Element that displays the newly created account number
  readonly newAccountId: Locator;

  constructor(page: Page) {
    this.page = page;

    this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
    this.accountTypeSelect = page.locator('#type');
    this.existingAccountSelect = page.locator('#fromAccountId');
    this.openNewAccountButton = page.getByRole('button', { name: 'Open New Account' });
    this.newAccountId = page.locator('#newAccountId');
  }

  //Opens the Open New Account page
  async openNewAccountPage() {
    await this.openNewAccountLink.click();
  }

  //Selects the account type and creates the new account
  async openAccount(accountType: 'CHECKING' | 'SAVINGS') {
    //Wait till teh funding account dropdown becomes available
    await expect(this.existingAccountSelect).toBeVisible();

    //Wait until at least one account is loaded in the dropdown
    await expect(this.existingAccountSelect.locator('option').first()).toBeAttached();
    
    //Select the requested account type
    await this.accountTypeSelect.selectOption({ label: accountType });

    //Make sure the buttons is ready before submitting
    await expect(this.openNewAccountButton).toBeEnabled();
    await this.openNewAccountButton.click();
  }
}
