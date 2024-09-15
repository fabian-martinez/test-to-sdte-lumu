const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
 
async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.get('https://wordcounter.net/')
    await driver.wait(until.titleIs('webdriver - Google Search'), 10000)
  } finally {
    await driver.quit()
  }
}

example()
