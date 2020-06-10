const {expect} = require ('chai');
describe('page', () => {
    // it('should have the right title', () => {
    //     browser.url('https://webdriver.io')
    //     const title = browser.getTitle()
    //     expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    // })
    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/')
        expect(browser.getTitle()).eq('Complex Counter App');
    })
})
// + test