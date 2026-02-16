const { config } = require('./wdio.shared.conf');

exports.config = {
    ...config,

    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless']
            }
        }
    ]
};
