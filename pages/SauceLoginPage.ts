import { Page, Locator } from '@playwright/test';

export class SauceLoginPage {
    private readonly locatorUsername: Locator;
    private readonly locatorPassword: Locator;
    private readonly locatorLoginButton: Locator;

    constructor (private readonly page: Page) {
        this.locatorUsername = page.getByPlaceholder('Username');
        this.locatorPassword = page.getByPlaceholder('Password');
        this.locatorLoginButton = page.getByRole('button', { name: 'Login'});
     }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async fillUsernameAndPassword(username: string, password: string) {
        await this.locatorUsername.fill(username);
        await this.locatorPassword.fill(password);
    }

    async login(username: string, password: string)
    {
        await this.goto();

        await this.fillUsernameAndPassword(username, password);

        await this.locatorLoginButton.click();
    }
}