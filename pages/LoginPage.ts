import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';
  productTitle = '.title';

  // 🔴 NEW
  errorMessage = '[data-test="error"]';

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator(this.productTitle))
      .toHaveText('Products');
  }

  // 🔴 NEW
  async verifyLoginFailed(expectedMessage: string) {
    await expect(this.page.locator(this.errorMessage))
      .toHaveText(expectedMessage);
  }
}
