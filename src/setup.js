const { Builder, Browser } = require('selenium-webdriver')

// driver setup
capabilities = {
    "args": ["-headless"]
}

driver = new Builder()
.forBrowser(Browser.FIREFOX)
.setFirefoxOptions(capabilities)
.build();

module.exports = { driver }