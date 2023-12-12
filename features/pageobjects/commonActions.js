const { $ } = require('@wdio/globals')
const Page = require('./page');

class CommonActions {
    enterText(locator, text) {
        const textBox = $(locator);
        textBox.waitForDisplayed();
        textBox.setValue(text);
    }

    enterAmount(locator, amount) {
        const amountBox = $(locator);
        amountBox.waitForDisplayed();
        amountBox.setValue(amount);
    }
}

module.exports = new CommonActions();
