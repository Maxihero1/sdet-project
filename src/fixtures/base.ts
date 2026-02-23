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
        const Login = new LoginPage(page);
        await Login.goToLoginPage();
        await use(Login);
        await Login.closePage();
    },
    SecurePage: async ({ page }, use) => {
        const Login = new LoginPage(page);
        const Secure = new SecurePage(page);
        await Login.goToLoginPage();
        await Login.login(testData.users.validUser.username, testData.users.validUser.password);
        await Login.expectSuccessfulLogin(testData.messages.success);
        await use(Secure);
        await Secure.closePage();
    }
});

export { expect } from '@playwright/test';

export { testData };