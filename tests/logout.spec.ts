import { test, testData } from '../src/fixtures/base';

// This test suite covers the successful logout scenario.

test.describe('Successful logout tests', () => {
    test('Test Case 4: Successful logout', async({ SecurePage }) => {
        await SecurePage.logout();
        await SecurePage.expectSuccessfulLogout(testData.messages.logout);
    });
});