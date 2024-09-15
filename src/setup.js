const { Builder } = require('selenium-webdriver')

// driver setup
capabilities = {
    browserName: 'firefox',
}

driver = new Builder().withCapabilities(capabilities).build()

module.exports = { driver }