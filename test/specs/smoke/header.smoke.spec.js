const HomePage = require('../../../src/pages/HomePage');
const header = require('../../../src/components/home/Header.component');
const { headerMenuItems } = require('../../../src/fixtures/header.fixture');

describe('T-001: Verify Header dropdowns elements', () => {

    beforeEach(async () => {
        await HomePage.openHome();
    });

    headerMenuItems.forEach((item, index) => {

        it(`t-${String(index + 1).padStart(3, '0')}: should expand "${item}" dropdown when clicked`, async () => {

            await header.shouldBeCollapsed(item);
            await header.clickMenu(item);
            await header.shouldBeExpanded(item);

        });
        
    });

});
