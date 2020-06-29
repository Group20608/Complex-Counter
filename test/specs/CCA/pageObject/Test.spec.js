import {expect} from 'chai';
import Page from "./Page";
import {coordinatesIF1} from "./Data"

const data = require('./../../../../data/expected').DataPage;

describe('', () => {

    it('should open browser page and check title', function () {
        Page.open();
    });

    it('should verify total is 0', () => {
        expect((Page.Total).getText()).eq(data.total);
    });

    it('should verify that Limit Field1 present on the page', () => {
        expect((Page.LF1).isDisplayed()).true;
    });

    it('should verify that Limit Field2 present on the page', () => {
        expect((Page.LF2).isDisplayed()).true;
    });

    it('should verify that Change step options in LF1 present on the page', () => {
        expect((Page.LF1).getText()).eq(data.LF1);
    });

    it('should verify that Change step options in LF2 present on the page', () => {
        expect((Page.LF2).getText()).eq(data.LF2);
    });

    it('should verify that Delete button present on the page', () => {
        expect((Page.DeleteBtn).isDisplayed()).true;
    });

    it('should verify that Reset button present on the page', () => {
        expect((Page.RestBtn).isDisplayed()).true;
    });

    it('should verify Default Counter', () => {
        expect((Page.defaultCounterFirst).getText()).eq(data.defaultCounterFirst);
    });

    it('should verify Edit Counter Title', () => {
        expect((Page.editCounterTitle).getText()).eq(data.editCounterTitle);
    });

    it('should verify Default Counter Field', () => {
        expect((Page.defaultCounterText).getValue()).eq(data.defaultCounterText);
    });

    it('should verify Enter Counter Title', () => {
        expect((Page.enterCounterTitle).getText()).eq(data.enterCounterTitle);
    });


    it('should verify Counter Name Field', () => {
        expect((Page.counterName).getValue()).eq(data.counterName);
    });

    it('should verify Enter Initial Count', () => {
        expect((Page.enterCounterTitle).getText()).eq(data.enterCounterTitle)

    });

    it('should verify Enter Initial Count', () => {
        expect((Page.counterValueInput).getValue()).eq(data.totalInput)
    });

});

describe('Verify that a new counter is added after clicking on “Add counter” button', () => {

    it('should open app', () => {
        Page.open()
    });

    it('should click add button', () => {
        Page.addCounterBnt.click();
    });

    it('should verify new counter created', () => {
        expect((Page.defaultCounterSecond).getText()).eq(data.defaultCounterSecond)
    });

});

describe('Verify that a new counter can be added when the name of the counter' +
    ' in “Add Name Field” more than 6 characters.', () => {

    it('should open app', () => {
        Page.open();
    });

    it('should Insert name “2.counter"(8 characters) is entered into “Add Name Field”', () => {
        Page.counterName.setValue(data.counterNameSecond);
        Page.addCounterBnt.click();
    });

    it('should verify new counter created', () => {
        expect((Page.defaultCounterSecond).getText()).eq(data.defaultCounterSecond.split('').slice(0, 3).join('') + data.counterNameSecond)
    });
});

describe('Verify the deletion of the default counter', () => {

    it('should open app', () => {
        Page.open()
    });

    it('should click button "DELETE"', () => {
        Page.DeleteBtn.click();
        expect($$('h3').length).eq(data.lengthH3);
    });

});

describe('Verify that after deleting any counter will assign a new order number, to keep it ascending', () => {

    it('should open app and add two counters', () => {
        Page.open();
        for (let i = 2; i < 4; i++) {
            Page.counterName.setValue(`${i}.counter`);
            Page.addCounterBnt.click();
        }
    });

    it('should verify “2.counter” will become “1.counter” in ascending order after delete first counter', () => {
        Page.DeleteBtn.click();
        expect((Page.defaultCounterFirst).getText()).eq(data.defaultCounterFirst.split('').slice(0, 3).join('') + data.counterNameSecond);
    });
});


describe('Verify that when user refresh-reload the app page resets to initial interface state (default status)', () => {

    it('should open app and edit counter name', () => {
        Page.open();
        Page.defaultCounterText.setValue(data.counterNameFirst);
        expect((Page.defaultCounterFirst).getText()).eq(data.defaultCounterFirst.split('').slice(0, 3).join('') + data.counterNameFirst);
    });

    it('should refresh app page and check default name ', () => {
        browser.refresh();
        expect((Page.defaultCounterFirst).getText()).eq(data.defaultCounterFirst);
    });
});

describe('Verify that correct set of Sub buttons and Add buttons is displayed for max and min range', () => {

    it('should open app and type LF2 "9" ', () => {
        Page.open();
        Page.LF2.click();
        Page.limitInputUpper.setValue(data.inputMax);
    });

    it('verify add buttons from 1 to 9 present', () => {
        for (let i = 1; i < 10; i++) {
            expect(Page.addButtons(i).isExisting()).true;
        }
    });

    it('verify sub buttons from -1 to -9 present', () => {
        for (let i = 1; i < 10; i++) {
            expect(Page.addButtons(-i).isExisting()).true;
        }
    });

    it('should change default value when you click on the spinner, the  in the IF1', () => {
        Page.LF1.click();
        Page.limitInputLower.moveTo(coordinatesIF1);
        browser.positionClick();
        expect(Page.defaultBlackBtnNegativeOne.isExisting()).false;
    });

    it('should change default value when you click on the spinner, the  in the IF2', () => {



    });
});

describe('verify that upper LF2 accepts from 1 to 9', () => {

    it('should open app', () => {
        Page.open()
    });

    it('should type number from 1 to 9 and check ERROR is not appear', () => {
        Page.LF2.click();
        for (let i = 1; i < 10; i++) {
            Page.limitInputUpper.setValue(i);
            expect(Page.errorGreaterZero.isExisting()).false;
        }
    });
});

/*describe('Verify LF1 does not accepts “0"', () => {

    it('should open app and type in "0" in LF1', () => {
        Page.open();
        Page.LF1.click();
        Page.limitInputLower.setValue(0);
    });

    it('verify that LF1 is empty', () => {
        expect((Page.limitInputLower).getValue()).eq('')

    });

    it('verify ERROR is present', () => {
        expect((Page.errorGreaterZero).getText()).eq(DataPage.errorGreaterZero);
    });
});*/

/*describe('Verify LF2 does not accepts “0" ', () => {
    it('should open app and type in "0" in LF2 ', () => {
        Page.open();
        Page.LF2.click();
        Page.limitInputUpper.setValue(0)
    });

    it('should verify that LF2 is empty', () => {
        expect((Page.limitInputUpper).getValue()).eq('');
    });

    it('verify ERROR is present', () => {
        expect((Page.errorGreaterZero).getText()).eq(DataPage.errorGreaterLower);
    });
});*/



