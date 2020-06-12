const {expect} = require('chai');

describe('page', () => {
    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/')
        expect(browser.getTitle()).eq('Complex Counter App');
        browser.pause(2000);
    })

    it('the page header should be Counters', () => {

        expect(browser.$('//h1[@class=\'header\']').getText()).equal('Counters');
        browser.pause(2000);
    });

    it('should verify total is 0', () => {
        const total = browser.$('//h3').getText();
        expect(total).eq('Total: 0');
    });

    it('should verify that Limit Field1 present on the page', () => {
        expect(browser.$('//button[@name="negative"]').isDisplayed()).true;

    });

    it('should verify that Limit Field2 present on the page', () => {
        expect($('button[name="positive"]').isDisplayed()).true;
    });

    it('should verify that Change step options in LF1 present on the page', () => {
        const element = $('button[name="positive"]').getText();
        expect(element).eq('CHANGE STEP OPTIONS?')
    });

    it('should verify that Change step options in LF2present on the page', () => {
        const element = $('button[name="negative"]').getText();
        expect(element).eq('CHANGE STEP OPTIONS?')
    });

    it('should verify that Delete button present on the page', () => {
        expect($('[id="1"]').isDisplayed()).true;

    });

    it('should verify that Reset button present on the page', () => {
        expect($('[class="btn-primary btn Ripple-parent reset"]').isDisplayed()).true;

    });

    it('should verify Default Counter', () => {
        const element = $$('h3')[1].getText();
        expect(element).eq('1. Default Counter')
    });

    it('should verify Edit Counter Title', () => {
        expect(browser.$('//label[contains(text(),"Edit")]').getText()).equal('Edit Counter Title:');

    });

    it('should verify Default Counter Field', () => {
        const element = $('[name="edit"]').getValue()
        expect(element).eq('Default Counter')

    });

    it('should verify Enter Counter Title', () => {
        expect(browser.$('//label[contains(text(),"Enter")]').getText()).eq('Enter Counter Title:');

    });

    it('should verify Counter Name Field', () => {
        const element = $('[name="name"]').getValue()
        expect(element).eq('Counter Name')

    });

    it('should verify Enter Initial Count', () => {
        //expect(browser.$('//label[contains(text(),"Enter Initial Count:")]'));
        expect(browser.$('//div[@class="container"]//label').getText()).eq("Enter Counter Title:");

    });

    it('should verify Enter Initial Count', () => {
        const element = $('[name="value"]').getValue()
        expect(element).eq('50')

    });

    it('should verify ADD COUNTER', () => {
        expect(browser.$('//label[contains(text(),"ADD COUNTER")]'));
    });
});
