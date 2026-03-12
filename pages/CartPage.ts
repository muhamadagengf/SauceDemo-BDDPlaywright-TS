import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  checkoutBtn = '[data-test="checkout"]';
  cartItem = '.cart_item';

  async verifyItemsCount(expected: number) {
    await expect(this.page.locator(this.cartItem))
      .toHaveCount(expected);
  }

  async clickCheckout() {
    await this.page.click(this.checkoutBtn);
  }
}
