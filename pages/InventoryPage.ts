import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  addBackpack = '#add-to-cart-sauce-labs-backpack';
  addBikelight = '#add-to-cart-sauce-labs-bike-light';
  addTshirt = '#add-to-cart-sauce-labs-bolt-t-shirt';
  cartBadge = '.shopping_cart_badge';
  cartIcon = '.shopping_cart_link';

  async addBackpackToCart() {
    await this.page.click(this.addBackpack);
  }

  async addBikelightToCart() {
    await this.page.click(this.addBikelight);
  }

  async addTshirtToCart() {
    await this.page.click(this.addTshirt);
  }

  async verifyCartCount(expected: number) {
    await expect(this.page.locator(this.cartBadge))
      .toHaveText(expected.toString());
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
