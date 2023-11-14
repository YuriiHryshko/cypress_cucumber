const baseConfig = require('./cypress.config');

module.exports = {
    ...baseConfig,
    e2e: {
        ...baseConfig.e2e,
        viewportWidth: 375,
        viewportHeight: 667,
    },
};