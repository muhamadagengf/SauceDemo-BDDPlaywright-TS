import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueBtn = '[data-test="continue"]';
  finishBtn = '[data-test="finish"]';
  successMsg = '.complete-header';

  async fillCheckoutInfo() {
    await this.page.fill(this.firstName, 'Ageng');
    await this.page.fill(this.lastName, 'QA');
    await this.page.fill(this.postalCode, '12345');
    await this.page.click(this.continueBtn);
  }

  async finishCheckout() {
    await this.page.click(this.finishBtn);
  }

  async verifyCheckoutSuccess() {
    await expect(this.page.locator(this.successMsg))
      .toHaveText('Thank you for your order!');
  }
}
