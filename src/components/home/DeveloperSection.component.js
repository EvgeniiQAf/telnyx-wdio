class DevelopersSection {

    sectionSelector = 'section:has([role="tablist"])';
    tabSelector = '[role="tab"]';
    codeSnippetSelector = 'pre.whitespace-pre-wrap';

    get section() {
        return $(this.sectionSelector);
    }

    get tabs() {
        return this.section.$$(this.tabSelector);
    }

    get codeSnippet() {
        return $(this.codeSnippetSelector);
    }

    async openSection() {
        await this.section.waitForExist({ timeout: 20000 });
        await this.section.scrollIntoView();
    }

    async openSendMessageTab() {
        const tabs = await this.tabs;

        if (tabs.length < 2) return;

        const secondTab = tabs[1];

        await secondTab.scrollIntoView({ block: 'center' });

        await browser.pause(500); 

        await secondTab.click();
    }


    async shouldSeeCodeSnippetParts(expectedParts) {

        await this.codeSnippet.waitForDisplayed({ timeout: 20000 });

        const codeText = await this.codeSnippet.getText();

        for (const part of expectedParts) {
            expect(codeText).toContain(part);
        }
    }
}

module.exports = new DevelopersSection();
