import { test, testData } from '../src/fixtures/base';

// This test suite covers both successful (Happy path) and unsuccessful (Unhappy path) login scenarios using data from users.json.

test.beforeEach(async({ LoginPage }) => {
    await LoginPage.goToLoginPage();
});

test.describe('Successful login tests', () => {

    test('Test Case 1: Login with valid credentials', async({ LoginPage }) => {
        await LoginPage.login(testData.users.validUser.username, testData.users.validUser.password);
        await LoginPage.expectSuccessfulLogin(testData.messages.success);
    });
});

test.describe('Unsuccessful login tests', () => {
    test('Test Case 2: Login with invalid username', async({ LoginPage }) => {
        await LoginPage.login(testData.users.invalidUsernameUser.username, testData.users.invalidUsernameUser.password);
        await LoginPage.expectLoginErrorMessage(testData.messages.invalidUsername);
    });

    test('Test Case 3: Login with invalid password', async({ LoginPage }) => {
        await LoginPage.login(testData.users.invalidPasswordUser.username, testData.users.invalidPasswordUser.password);
        await LoginPage.expectLoginErrorMessage(testData.messages.invalidPassword);
    });
});