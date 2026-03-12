import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

const { Given, When, Then } = createBdd();

Given('user login with valid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifyLoginSuccess();
});

Given('user add 3 products to cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikelightToCart();
  await inventoryPage.addTshirtToCart();
  await inventoryPage.verifyCartCount(3);
  await inventoryPage.goToCart();
});

When('user proceed to checkout and fill information', async ({ page }) => {
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  
  await cartPage.verifyItemsCount(3);
  await cartPage.clickCheckout();
  await checkoutPage.fillCheckoutInfo();
  await checkoutPage.finishCheckout();
});

Then('user should see checkout success message', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.verifyCheckoutSuccess();
});