const { Given, When, Then, AfterAll, BeforeAll, After, Before } = require('@cucumber/cucumber');
const assert = require("assert");
const { driver } = require('../src/setup');
const WordCounterPage = require('../src/pages/WordCounterPage');

BeforeAll( async function () {
  wordCounterPage = new WordCounterPage(driver)
})

/// Givens

Given('the user has been entered to WordCounterHome page', { timeout: 70000 }, async function () {
  await wordCounterPage.open()
  await wordCounterPage.cleanTextBox()
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

Then('the WordCounterHome should contain a title with the characters of words equal to {string}', async function (characters_number) {
  assert.equal(await wordCounterPage.getCharactersNumber(),characters_number)
});

Then('the WordCounterHome should have a TextArea to type a text', async function () {
  const textBox = await wordCounterPage.getTextBoxContent()
  assert.equal(await textBox.getAttribute('placeholder'),'Start typing, or copy and paste your document here...')
});

Then('the WordCounterHome should contain a key density table with below info', async function (dataTable) {
  wordDensityTable = await wordCounterPage.getKeywordDensityTable()
  const rawTable = dataTable.rawTable;
  assert.deepEqual(rawTable,wordDensityTable)
});

Then('the WordCounterHome should contain a key density table with the message {string}', async function (message) {
  emptyTableMessage = await wordCounterPage.getKeywordDensityTable()
  assert.equal(message,emptyTableMessage)
});

AfterAll( async function () {
  await wordCounterPage.close()
});