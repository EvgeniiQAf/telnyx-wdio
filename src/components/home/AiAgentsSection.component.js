class AiAgentsSection {

    sectionTitleSelector = 'h2*=Build intelligent, real-time AI Agents';
    accordionItemSelector = '//button[contains(.,"Native-speech pipeline")]';
    activeAccordionContentSelector = '[data-state="open"]';

    get sectionTitle() {
        return $(this.sectionTitleSelector);
    }

    get accordionItem() {
        return $(this.accordionItemSelector);
    }

    get activeAccordionContent() {
        return $(this.activeAccordionContentSelector);
    }

    async scrollToSection() {
        await this.sectionTitle.scrollIntoView();
    }

    async openAccordion() {
        await this.accordionItem.click();
    }

    async shouldAccordionBeExpanded() {
        await expect(this.activeAccordionContent).toBeDisplayed();
    }

}

module.exports = new AiAgentsSection();
