import { Page, Locator } from '@playwright/test';

export class SauceInventoryPage {
    private readonly locatorTitle: Locator;
    private readonly locatorAddSauceLabsBackpackToCart: Locator;
    private readonly locator1ItemInCart: Locator;
    
    constructor (private readonly page: Page) {
        this.locatorTitle = page.getByText('Products');
        this.locatorAddSauceLabsBackpackToCart = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.locator1ItemInCart = page.getByTestId('shopping-cart-badge');
     }

     getProductTitle() : Locator
     {
        return this.locatorTitle;
     }

     async addBackpackToCart() : Promise<void>
     {
        await this.locatorAddSauceLabsBackpackToCart.click();
     }
     //Why use getByTextId for Add to cart but getByText for Products?
     //This is because Products is the unique text format in thw webpage, we can easily use getByText to access the 'Products' title.
     // 'Add to cart' is a button which is repetitive throughout the web page - hence the getByText offers a more precise way to access that element.

     getCartBadge() : Locator
     {
        return this.locator1ItemInCart;
     }
}