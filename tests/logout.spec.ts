import { test, testData } from '../src/fixtures/base';

// This test suite covers the successful logout scenario.

test.beforeEach(async({ LoginPage }) => {
    await LoginPage.goToLoginPage();
    await LoginPage.login(testData.users.validUser.username, testData.users.validUser.password);
    await LoginPage.expectSuccessfulLogin(testData.messages.success);
});

test.describe('Successful logout tests', () => {
    test('Test Case 4: Successful logout', async({ SecurePage }) => {
        await SecurePage.logout();
        await SecurePage.expectSuccessfulLogout(testData.messages.logout);
    });
});