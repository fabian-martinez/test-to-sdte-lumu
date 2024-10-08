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

    async getCharactersNumber() {
        const top_counter = await this.driver.findElement(By.id('top_counter')).getText()
        const characters_count = top_counter.match(/(\d+) character/)[1];
        return characters_count
    }

    async typeText(text) {
        const textBox = await this.driver.findElement(By.id('box'))
        await textBox.sendKeys(text)
        await this.driver.sleep(500)
    }
    async cleanTextBox(text) {
        const textBox = await this.driver.findElement(By.id('box')).clear()
        await this.driver.sleep(500)
    }

    async getTextBoxContent() {
        return await this.driver.findElement(By.id('box'))
    }

    async getKeywordDensityTable() {
        const keywordsDensityElements = await driver.findElements(By.xpath("//DIV[@id='kwd-accordion-data']/A[@class='list-group-item']"))
        let keywordsDensityTable = []
        if (keywordsDensityElements.length === 0) {
            const emptyMessage = await driver.findElement(By.xpath("//DIV[@id='kwd-accordion-data']")).getText()
            return emptyMessage
        }
        for (let keywordDensity of keywordsDensityElements) {
            const word = await keywordDensity.findElement(By.className('word')).getText()
            const densityText = await keywordDensity.findElement(By.className('badge')).getText()
            const [number, percentage] = densityText.replace(/[()]/g, '').split(' ');
            keywordsDensityTable.push([word, number, percentage])
        }
        return keywordsDensityTable
    }
 }

module.exports = WordCounterPage