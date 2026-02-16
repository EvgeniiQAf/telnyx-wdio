require('dotenv').config({
    path: `.env.${process.env.ENV || 'prod'}`
});

exports.config = {
    runner: 'local',

    // 👇 ДОДАЄМО ЦЕ
    hostname: process.env.SELENIUM_HOST || 'localhost',
    port: 4444,
    path: '/wd/hub',

    specs: [
        '../test/specs/**/*.js'
    ],

    maxInstances: 2,

    logLevel: 'info',
    bail: 0,

    baseUrl: process.env.BASE_URL || 'https://telnyx.com',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};
