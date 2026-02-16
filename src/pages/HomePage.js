const BasePage = require('../base/BasePage');
const testData = require('../fixtures/testData.fixture');

class HomePage extends BasePage {
    headerSelector = 'header';
    mainSelector = 'main';
    logoSelector = 'header a[href="/"]';

    get header() { return $(this.headerSelector); }
    get main() { return $(this.mainSelector); }
    get logo() { return $(this.logoSelector); }

    async openHome() {
        await this.open(testData.urls.home);
    }

    async shouldBeLoaded() {
        await this.header.waitForDisplayed({ timeout: 1500 });
        await this.main.waitForDisplayed({ timeout: 1500 });
    }

    async clickLogo() {
        await this.logo.click();
    }
}

module.exports = new HomePage();
