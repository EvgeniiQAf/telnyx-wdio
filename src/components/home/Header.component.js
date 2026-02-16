class Header {

    headerSelector = 'header';
    logoSelector = 'header a[href="/"]';
    pricingSelector = 'header a, header button';

    get header() {
        return $(this.headerSelector);
    }

    get logo() {
        return $(this.logoSelector);
    }

    getPricingButton() {
        return $(this.pricingSelector).$('=Pricing');
    }

    getMenuButtonSelector(label) {
        return `//button[@aria-haspopup="menu" and .//span[text()="${label}"]]`;
    }

    getMenuButton(label) {
        return $(this.getMenuButtonSelector(label));
    }

    async shouldBeVisible() {
        await expect(this.header).toBeDisplayed();
    }

    async clickLogo() {
        await this.logo.click();
    }

    async clickPricing() {
        await this.getPricingButton().click();
    }

    async clickMenu(label) {
        await this.getMenuButton(label).click();
    }

    async shouldBeExpanded(label) {
        await expect(this.getMenuButton(label))
            .toHaveAttribute('aria-expanded', 'true');
    }

    async shouldBeCollapsed(label) {
        await expect(this.getMenuButton(label))
            .toHaveAttribute('aria-expanded', 'false');
    }

}

module.exports = new Header();
