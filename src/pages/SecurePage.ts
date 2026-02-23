import { test, expect, Page, Locator } from '@playwright/test';

// This file defines the SecurePage class, which encapsulates the interactions and assertions related to the secure page of the application after a successful login.
// It includes methods for performing logout actions and verifying successful logout based on a message defined in users.json.

export class SecurePage {
    private readonly page: Page;
    private readonly logout_button: Locator;
    private readonly alert_message: Locator;

    // Contructor initializes the page and locators
    constructor(page: Page) {
        this.page = page;
        this.logout_button = page.getByRole('link', { name: 'Logout'});
        this.alert_message = page.locator('#flash');
    }

    // Method to navigate to the secure page
    async goToSecurePage() {
        await test.step('Navigate to the secure page', async () => {
            await this.page.goto('https://the-internet.herokuapp.com/secure');
        });
    };

    // Method to redirect to the login page
    async redirectToLoginPage() {
        await test.step('Redirect to the login page', async () => {
            await this.page.goto('https://the-internet.herokuapp.com/login');
        });
    };

    // Method to perform logout action by clicking the logout button
    async logout() {
        await test.step('Click logout button', async () => {
            await expect(this.logout_button).toBeEnabled();
            await this.logout_button.click();
        });
    }

    // Method to verify successful logout by checking the URL and alert message
    async expectSuccessfulLogout(message: string) {
        await test.step('Verify successful logout', async () => {
            await expect(this.alert_message).toBeVisible();
            await expect(this.alert_message).toContainText(message);
            await expect(this.page.url()).toContain('/login');
        });
    }

    // Method to close the page after tests are completed
    async closePage() {
        await test.step('Close the page', async () => {
            await this.page.close();
        })
    }
}