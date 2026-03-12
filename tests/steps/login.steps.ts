import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('user is on login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('user login with username {string} and password {string}', async ({ page }, username, password) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

Then('user should see products page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.verifyLoginSuccess();
});

Then('user should see error message {string}', async ({ page }, message) => {
  const loginPage = new LoginPage(page);
  await loginPage.verifyLoginFailed(message);
});