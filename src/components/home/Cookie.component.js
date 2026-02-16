class CookieBanner {

    get acceptButton() {
        return $('#onetrust-accept-btn-handler');
    }

    async acceptIfVisible() {
        if (await this.acceptButton.isExisting()) {
            await this.acceptButton.waitForClickable({ timeout: 5000 });
            await this.acceptButton.click();
        }
    }
}

module.exports = new CookieBanner();
