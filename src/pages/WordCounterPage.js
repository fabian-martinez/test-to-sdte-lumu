const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

class WordCounterPage {

    home_page = 'https://wordcounter.net/'

    constructor(driver) {
        this.driver = driver
    }

    async open() {
        await this.driver.get(this.home_page)
    }

    async close() {
        await this.driver.quit()
    }

    async getWordsNumber() {
        const top_counter = await this.driver.findElement(By.id('top_counter')).getText()
        const word_count = top_counter.match(/(\d+) word/)[1];
        return word_count
    }

    async typeText(text) {
        const textBox = await this.driver.findElement(By.id('box'))
        await textBox.sendKeys(text)
        await this.driver.sleep(500)
    }

    async getTextBoxContent() {
        return await this.driver.findElement(By.id('box'))
    }
}

module.exports = WordCounterPage