class BaseComponent {

    constructor(selector) {
        this.selector = selector;
    }

    get root() {
        return $(this.selector);
    }

    async shouldBeVisible() {
        await expect(this.root).toBeDisplayed();
    }

    async shouldNotBeVisible() {
        await expect(this.root).not.toBeDisplayed();
    }

    async click() {
        await this.root.click();
    }

    async scrollIntoView() {
        await this.root.scrollIntoView();
    }

}

module.exports = BaseComponent;
