const { config } = require('./wdio.shared.conf');

exports.config = {
    ...config,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--headless=new',
                    '--no-sandbox',
                    '--disable-gpu',
                    '--window-size=1920,1080'
                ]
            }
        }
    ]
};
