const { Builder, Browser } = require('selenium-webdriver')

// driver setup
capabilities = {
    "capabilities": {
      "alwaysMatch": {
        "browserName": "firefox",
        "moz:firefoxOptions": {
          "args": ["-headless"],
        }
      },
      "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
    }
  }

driver = new Builder()
.forBrowser(Browser.FIREFOX)
.setFirefoxOptions(capabilities)
.build();

module.exports = { driver }