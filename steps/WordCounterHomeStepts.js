const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const { Given, When, Then, AfterAll, BeforeAll } = require('@cucumber/cucumber');

// driver setup

capabilities = {
  browserName: 'firefox',
}

let drive;

BeforeAll( function () {
  driver = new Builder().withCapabilities(capabilities).build()
})

When('the user enters to WordCounterHome page', async function () {
  await driver.get('https://wordcounter.net/')
});

Then('the WordCounterHome contains a title with the number of words equal to {string}', async function (words_number) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

AfterAll( async function () {
  await driver.quit()
})