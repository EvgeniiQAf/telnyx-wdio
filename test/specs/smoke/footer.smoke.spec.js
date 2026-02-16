const HomePage = require('../../../src/pages/HomePage');
const Footer = require('../../../src/components/home/Footer.component');
const Cookie = require('../../../src/components/home/Cookie.component');
const { footerLinks } = require('../../../src/fixtures/footer.fixture');

describe('T-010: Verify Footer links', () => {

    before(async () => {
        await HomePage.openHome();
        await Cookie.acceptIfVisible();
        await Footer.scrollToFooter();
    });

    footerLinks.forEach((item, index) => {

        it(`t-${String(index + 1).padStart(3, '0')}: should open "${item.name}" link`, async () => {

            await Footer.openLink(item);

        });

    });

});
