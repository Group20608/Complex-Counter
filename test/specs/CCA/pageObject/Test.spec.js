import {expect} from 'chai';
import Page from "./Page";
import {DataPage} from "./Data"

describe('', () => {

    it('should open browser page and check title', function () {
      Page.open();
      expect(browser.getTitle()).eq(DataPage.appTitle);
    });

  it('the page header should be Counters', () => {
    expect((Page.Header).getText()).eq(DataPage.title);
  });

  it('should verify total is 0', () => {
    expect((Page.Total).getText()).eq(DataPage.total);
  });

  it('should verify that Limit Field1 present on the page', () => {
    expect((Page.LF1).isDisplayed()).true;
  });

  it('should verify that Limit Field2 present on the page', () => {
    expect((Page.LF2).isDisplayed()).true;
  });

  it('should verify that Change step options in LF1 present on the page', () => {
    expect((Page.LF1).getText()).eq(DataPage.LF1);
  });

  it('should verify that Change step options in LF2 present on the page', () => {
    expect((Page.LF2).getText()).eq(DataPage.LF2);
  });

  it('should verify that Delete button present on the page', () => {
    expect((Page.DeleteBtn).isDisplayed()).true;
  });

  it('should verify that Reset button present on the page', () => {
    expect((Page.RestBtn).isDisplayed()).true;
  });

  it('should verify Default Counter', () => {
    expect((Page.defaultCounterFirst).getText()).eq(DataPage.defaultCounterFirst);
  });

  it('should verify Edit Counter Title', () => {
    expect((Page.editCounterTitle).getText()).eq(DataPage.editCounterTitle);
  });

  it('should verify Default Counter Field', () => {
    expect((Page.defaultCounterText).getValue()).eq(DataPage.defaultCounterText);
  });

  it('should verify Enter Counter Title', () => {
    expect((Page.enterCounterTitle).getText()).eq(DataPage.enterCounterTitle);
  });


  it('should verify Counter Name Field', () => {
            expect((Page.counterName).getValue()).eq(DataPage.counterName);
  });

  it('should verify Enter Initial Count', () => {
            expect((Page.enterCounterTitle).getText()).eq(DataPage.enterCounterTitle)

  });

  it('should verify Enter Initial Count', () => {
            expect((Page.counterValueInput).getValue()).eq('50')
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
   expect((Page.defaultCounterSecond).getText()).eq(DataPage.defaultCounterSecond)
  });

});

describe('Verify that a new counter can be added when the name of the counter' +
    ' in “Add Name Field” more than 6 characters.', () => {

    it('should open app', () => {
        Page.open();
    });

    it('should Insert name “counter2"(8 characters) is entered into “Add Name Field”', () => {
        Page.counterName.setValue('counter2');
        Page.addCounterBnt.click();
    });

    it('should verify new counter created', () => {
        expect((Page.defaultCounterSecond).getText()).eq('2. counter2')
    });
});

    describe('Verify the deletion of the default counter', () => {

  it('should open app', () => {
    Page.open()
  });

  it('should click button "DELETE"', () => {
    Page.DeleteBtn.click();
    expect($$('h3').length).eq(1);
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
            expect((Page.defaultCounterFirst).getText()).eq('1. 2.counter');
        });
    });



    describe('Verify that when user refresh-reload the app page resets to initial interface state (default status)', () => {

  it('should open app and edit counter name', () => {
    Page.open();
    Page.defaultCounterText.setValue('counter 1');
    expect((Page.defaultCounterFirst).getText()).eq('1. counter 1');
  });

  it('should refresh app page and check default name ', () => {
    browser.refresh();
    expect((Page.defaultCounterFirst).getText()).eq('1. Default Counter');
  });
});

describe('Verify LF1 does not accepts “0"', () => {

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
});

describe('Verify LF2 does not accepts “0" ', () => {
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
});

describe('Verify that correct set of Sub buttons and Add buttons is displayed for max and min range', () => {

  it('should open app and type LF2 "9" ', () => {
   Page.open()
    Page.LF2.click();
    Page.limitInputUpper.setValue(9);
  });

  it('verify add buttons from 1 to 9 present', () => {
    for (let i = 1; i < 10; i++) {
      expect($(`[step="${i}"]`).isExisting()).true;
    }
  });

  it('verify sub buttons from -1 to -9 present', () => {
    for (let i = 1; i < 10; i++) {
      expect($(`[step="${-i}"]`).isExisting()).true;
    }
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


