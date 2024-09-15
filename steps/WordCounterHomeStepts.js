const { Given, When, Then, AfterAll, BeforeAll, After, Before } = require('@cucumber/cucumber');
const assert = require("assert");
const { driver } = require('../src/setup');
const WordCounterPage = require('../src/pages/WordCounterPage');

BeforeAll( async function () {
  wordCounterPage = new WordCounterPage(driver)
})

/// Givens

Given('the user has been entered to WordCounterHome page', async function () {
  await wordCounterPage.open()
});

/// Whens

When('the user enters to WordCounterHome page', { timeout: 70000 }, async function () {
  await wordCounterPage.open()
});

When('the user type {string}', async function (text) {
  await wordCounterPage.typeText(text)
});

/// Thens

Then('the WordCounterHome should contain a title with the number of words equal to {string}', async function (words_number) {
  assert.equal(await wordCounterPage.getWordsNumber(),words_number)
});

Then('the WordCounterHome should have a TextArea to type a text', async function () {
  const textBox = await wordCounterPage.getTextBoxContent()
  assert.equal(await textBox.getAttribute('placeholder'),'Start typing, or copy and paste your document here...')
});

After( async function () {
  // await driver.getLocalStorage().clear()
})

AfterAll( async function () {
  await wordCounterPage.close()
})