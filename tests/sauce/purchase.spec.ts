import { test, expect } from '@playwright/test';
import { SauceLoginPage } from '../../pages/SauceLoginPage';
import { SauceInventoryPage } from '../../pages/SauceInventoryPage';

test('standard user can add backpack to cart', async ({page}) => {
    const loginPage = new SauceLoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new SauceInventoryPage(page);

    //assert
    await expect(inventoryPage.getProductTitle()).toBeVisible();

    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.getCartBadge()).toHaveText('1');

})