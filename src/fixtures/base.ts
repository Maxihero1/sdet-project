import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecurePage } from '../pages/SecurePage';
import * as testData from '../data/data.json';

// This file defines custom fixtures for the tests, in this case including LoginPage and LogoutPage, which are used in the login and logout test suites respectively.

type Fixtures = {
    LoginPage: LoginPage;
    SecurePage: SecurePage;
}

export const test = base.extend<Fixtures>({
    LoginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    SecurePage: async ({ page }, use) => {
        await use(new SecurePage(page));
    }
});

export { expect } from '@playwright/test';

export { testData };