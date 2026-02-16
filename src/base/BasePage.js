class BasePage {

    async open(path = '/') {
        await browser.url(path);
    }

    async waitUntilUrlContains(value) {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(value),
            {
                timeout: 1000,
                timeoutMsg: `Expected URL to contain ${value}`
            }
        );
    }

    async shouldHaveUrlPart(value) {
        const url = await browser.getUrl();
        expect(url).toContain(value);
    }

}

module.exports = BasePage;
