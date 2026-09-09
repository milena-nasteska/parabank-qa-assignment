import { Page, Locator } from '@playwright/test';

export class TransferPage {
  readonly page: Page;
  readonly transferFundsLink: Locator;
  readonly amountInput: Locator;
  readonly fromAccountSelect: Locator;
  readonly toAccountSelect: Locator;
  readonly transferButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Link used to navigate to the Transfer Funds page
    this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });

    // Field used to enter the transfer amount
    this.amountInput = page.locator('#amount');

    // Dropdowns used to select source and destination accounts
    this.fromAccountSelect = page.locator('#fromAccountId');
    this.toAccountSelect = page.locator('#toAccountId');

    // Button used to submit the transfer
    this.transferButton = page.getByRole('button', { name: 'Transfer' });
  }

  // Opens the Transfer Funds page
  async openTransferFundsPage() {
    await this.transferFundsLink.click();
  }

  // Performs a transfer between two accounts
  async transferFunds(
    amount: string,
    fromAccountId: string,
    toAccountId: string
  ) {
    await this.amountInput.fill(amount);
    await this.fromAccountSelect.selectOption(fromAccountId);
    await this.toAccountSelect.selectOption(toAccountId);
    await this.transferButton.click();
  }

  // Returns all account IDs available in the From account dropdown
  async getAvailableAccountIds() {
    return await this.fromAccountSelect.locator('option').evaluateAll(
      options => options.map(option => (option as HTMLOptionElement).value)
    );
  }
}
