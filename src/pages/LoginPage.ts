import { test, expect, Page, Locator } from "@playwright/test";

// This file defines the LoginPage class, which encapsulates the interactions and assertions related to the login page of the application.
// It includes methods for navigating to the login page, performing login actions, and verifying both successful and unsuccessful login attempts based on messages defined in users.json.

export class LoginPage {
    private readonly page: Page;
    private readonly username_input: Locator;
    private readonly password_input: Locator;
    private readonly login_button: Locator;
    private readonly alert_message: Locator;

    // Contructor initializes the page and locators
    constructor(page: Page) {
        this.page = page;
        this.username_input = page.locator('#username');
        this.password_input = page.locator('#password');
        this.login_button = page.getByRole('button', { name: 'Login'});
        this.alert_message = page.locator('#flash');
    }
    
    // Method to navigate to the login page
    async goToLoginPage() {
        await test.step('Navigate to the login page', async () => {
            await this.page.goto('https://the-internet.herokuapp.com/login');
        });
    };

    // Method to redirect to the secure page
    async redirectToSecurePage() {
        await test.step('Redirect to the secure page', async () => {
            await this.page.goto('https://the-internet.herokuapp.com/secure');
        });
    };

    // Method to perform login action with given username and password
    async login(username: string, password: string) {
        await test.step(`Perform login with username: ${username} and password: ${password}`, async () => {
            await this.username_input.fill(username);
            await this.password_input.fill(password);
            await this.login_button.click();
        });
    };
    
    // Method to verify successful login by checking the URL and alert message
    async expectSuccessfulLogin(message: string) {
        await test.step('Verify successful login', async () => {
            await expect(this.page.url()).toContain('/secure');
            await expect(this.alert_message).toContainText(message);
        });
    };

    // Method to verify unsuccessful login by checking the URL and alert message
    async expectLoginErrorMessage(message: string) {
        await test.step('Verify login error message', async () => {
            await expect(this.page.url()).toContain('/login');
            await expect(this.alert_message).toContainText(message);
        });
    };

    // Method to close the page after tests are completed
    async closePage() {
        await test.step('Close the page', async () => {
            await this.page.close();
        })
    }
}