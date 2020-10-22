describe('Login flow', () => {
    beforeEach(async() => {
        // Clear input field before each test case
        await element(by.id('LoginFormUsername')).clearText();
        await element(by.id('LoginFormPassword')).clearText();
    });

    it ('Should return error when username is left empty', async() => {
        await element(by.id('LoginFormPassword')).typeText("secret");
        await element(by.id('LoginFormSubmitButton')).tap();
        await expect(element(by.id('LoginFormError'))).toExist();
    });

    it ('Should return error when password is left empty', async() => {
        await element(by.id('LoginFormUsername')).typeText("TradeCast");
        await element(by.id('LoginFormSubmitButton')).tap();
        await expect(element(by.id('LoginFormError'))).toExist();
    });

    it ('Should not return error when both fields are filled', async() => {
        await element(by.id('LoginFormUsername')).typeText("TradeCast");
        await element(by.id('LoginFormPassword')).typeText("secret");
        await element(by.id('LoginFormSubmitButton')).tap();
        await expect(element(by.id('LoginFormError'))).not.toExist();
    });
});