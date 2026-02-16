class PricingSection {

    pricingButtonSelector = '=Pricing';
    esimCardSelector = '//h2[text()="eSIM"]/ancestor::a';
    simCountInputSelector = '#iot-sim-savings-calculator__number-of-sim-cards';
    dataUsageInputSelector = '#iot-sim-savings-calculator__number-of-mb-per-month';
    countrySelectButtonSelector = '//button[contains(.,"Select country")]';
    activeNextButtonSelector = '//button[not(@disabled) and contains(.,"Next")]';
    publicIpNoSelector = '#iot-sim-savings-calculator__public-ip__-no';
    resultSectionSelector = '//*[contains(text(),"Monthly estimated costs")]';

    get pricingButton() {
        return $(this.pricingButtonSelector);
    }

    get esimCard() {
        return $(this.esimCardSelector);
    }

    get simCountInput() {
        return $(this.simCountInputSelector);
    }

    get dataUsageInput() {
        return $(this.dataUsageInputSelector);
    }

    get countrySelectButton() {
        return $(this.countrySelectButtonSelector);
    }

    get activeNextButton() {
        return $(this.activeNextButtonSelector);
    }

    get publicIpNo() {
        return $(this.publicIpNoSelector);
    }

    get resultSection() {
        return $(this.resultSectionSelector);
    }

    async openPricing() {
        await this.pricingButton.click();
    }

    async openEsimCard() {
        await this.esimCard.click();
    }

    async setSimCount(value) {
        await this.simCountInput.setValue(value);
    }

    async setDataUsage(value) {
        await this.dataUsageInput.setValue(value);
    }

    async openCountrySelect() {
        await this.countrySelectButton.click();
    }

    async selectCountry(name) {
        await $(`//div[@role="option" and text()="${name}"]`).click();
    }

    async clickNext() {
        await this.activeNextButton.click();
    }

    async choosePublicIpNo() {
        await this.publicIpNo.click();
    }

    async shouldShowResult() {
        await expect(this.resultSection).toBeDisplayed();
    }

}

module.exports = new PricingSection();
