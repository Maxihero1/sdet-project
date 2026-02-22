import { test, expect, Page, Locator } from '@playwright/test';

// This file defines the SecurePage class, which encapsulates the interactions and assertions related to the secure page of the application after a successful login.
// It includes methods for performing logout actions and verifying successful logout based on a message defined in users.json.

export class SecurePage {
    private readonly page: Page;
    private readonly logout_button: Locator;
    private readonly alert_message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logout_button = page.getByRole('link', { name: 'Logout'});
        this.alert_message = page.locator('#flash');
    }

    async goToSecurePage() {
        await test.step('Navigate to the secure page', async () => {
            await this.page.goto('https://the-internet.herokuapp.com/secure');
        });
    };

    async redirectToLoginPage() {
        await test.step('Redirect to the login page', async () => {
            await this.page.goto('https://the-internet.herokuapp.com/login');
        });
    };

    async logout() {
        await test.step('Click logout button', async () => {
            await this.logout_button.click();
        });
    }

    async expectSuccessfulLogout(message: string) {
        await test.step('Verify successful logout', async () => {
            await expect(this.page.url()).toContain('/login');
            await expect(this.alert_message).toContainText(message);
        });
    }

    async closePage() {
        await test.step('Close the page', async () => {
            await this.page.close();
        })
    }
}