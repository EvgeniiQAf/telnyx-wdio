const { config } = require('./wdio.shared.conf');

exports.config = {
    ...config,

    maxInstances: 1,

    hostname: 'selenium',
    port: 4444,
    path: '/wd/hub',

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--headless=new',
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-dev-shm-usage',
                    '--window-size=1920,1080'
                ]
            }
        }
    ]
};
