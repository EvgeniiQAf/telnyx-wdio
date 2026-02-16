class Footer {

    footerSelector = 'footer';

    get footer() {
        return $(this.footerSelector);
    }

    linkByText(text) {
        return $(`//footer//a[normalize-space()="${text}"]`);
    }

    async scrollToFooter() {
        await this.footer.waitForExist({ timeout: 10000 });


        await browser.execute((el) => {
            el.scrollIntoView({ block: 'center' });
        }, await this.footer);
    }

    async openLink(item) {

        const link = await this.linkByText(item.name);

        await link.waitForExist({ timeout: 5000 });


        await browser.execute((el) => {
            el.scrollIntoView({ block: 'center' });
        }, await link);

        await link.waitForDisplayed({ timeout: 5000 });
        await link.waitForClickable({ timeout: 5000 });

        const oldHandles = await browser.getWindowHandles();

        await link.click();


        await browser.pause(1000);

        const newHandles = await browser.getWindowHandles();


        if (newHandles.length > oldHandles.length) {
            const newTab = newHandles.find(h => !oldHandles.includes(h));
            await browser.switchToWindow(newTab);
        }

        await this.validateUrl(item);


        if (newHandles.length > oldHandles.length) {
            await browser.closeWindow();
            await browser.switchToWindow(oldHandles[0]);
        } else {

            await browser.back();
        }


        await this.scrollToFooter();
    }

    async validateUrl(item) {

        await browser.waitUntil(
            async () => {
                const url = await browser.getUrl();
                return item.external
                    ? url.includes('trust.telnyx.com')
                    : url.includes(item.path);
            },
            {
                timeout: 10000,
                timeoutMsg: `URL did not contain expected path: ${item.path}`
            }
        );
    }

}

module.exports = new Footer();
