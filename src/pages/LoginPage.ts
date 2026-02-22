import { test, expect, Page, Locator } from "@playwright/test";

// This file defines the LoginPage class, which encapsulates the interactions and assertions related to the login page of the application.
// It includes methods for navigating to the login page, performing login actions, and verifying both successful and unsuccessful login attempts based on messages defined in users.json.

export class LoginPage {
    private readonly page: Page;
    private readonly username_input: Locator;
    private readonly password_input: Locator;
    private readonly login_button: Locator;
    private readonly alert_message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username_input = page.locator('#username');
        this.password_input = page.locator('#password');
        this.login_button = page.getByRole('button', { name: 'Login'});
        this.alert_message = page.locator('#flash');
    }
    
    async goToLoginPage() {
        await test.step('Navigate to the login page', async () => {
            await this.page.goto('https://the-internet.herokuapp.com/login');
        });
    };

    async redirectToSecurePage() {
        await test.step('Redirect to the secure page', async () => {
            await this.page.goto('https://the-internet.herokuapp.com/secure');
        });
    };

    async login(username: string, password: string) {
        await test.step(`Perform login with username: ${username} and password: ${password}`, async () => {
            await this.username_input.fill(username);
            await this.password_input.fill(password);
            await this.login_button.click();
        });
    };
    
    async expectSuccessfulLogin(message: string) {
        await test.step('Verify successful login', async () => {
            await expect(this.page.url()).toContain('/secure');
            await expect(this.alert_message).toContainText(message);
        });
    };

    async expectLoginErrorMessage(message: string) {
        await test.step('Verify login error message', async () => {
            await expect(this.page.url()).toContain('/login');
            await expect(this.alert_message).toContainText(message);
        });
    };

    async closePage() {
        await test.step('Close the page', async () => {
            await this.page.close();
        })
    }
}