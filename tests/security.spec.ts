import { test, testData } from '../src/fixtures/base';

// This test suite covers security-related scenarios.
// It uses methods from the LoginPage and SecurePage classes to perform actions and assertions based on messages defined in users.json.

test.describe('Security Tests', () => {
    test('Test Case 5: Should redirect to login when accessing secure page unauthenticated', async({ LoginPage }) => {
        await LoginPage.redirectToSecurePage();
        await LoginPage.expectLoginErrorMessage(testData.messages.unauthorizedSecurePage);
    });
    test('Test Case 6: Should prevent access to secure page after logout', async({ SecurePage }) => {
        await SecurePage.logout();
        await SecurePage.expectSuccessfulLogout(testData.messages.logout);
        await SecurePage.goToSecurePage();
        await SecurePage.expectAuthErrorMessage(testData.messages.unauthorizedSecurePage);
    });
});