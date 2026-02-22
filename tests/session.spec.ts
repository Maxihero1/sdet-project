import { test, testData } from '../src/fixtures/base';

// This test verifies that the user session remains active even after navigating away from a secure page.

test.beforeEach(async({ LoginPage }) => {
    await LoginPage.goToLoginPage();
    await LoginPage.login(testData.users.validUser.username, testData.users.validUser.password);
    await LoginPage.expectSuccessfulLogin(testData.messages.success);
});

test.describe('Session Tests', () => {
    test('Test Case 7: User session should be active even after navigating away from secure page', async({ SecurePage }) => {
        await SecurePage.redirectToLoginPage();
        await SecurePage.goToSecurePage();
    });
});