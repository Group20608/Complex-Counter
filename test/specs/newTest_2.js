const {expect} = require ('chai');

describe('page', () => {

  it('should have the right title', () => {
    browser.url('https://likejean.github.io/homework-5/');
    expect(browser.getTitle()).eq('Complex Counter App');
  });

  it('the page header should be Counters', () => {
    expect(browser.$('//h1[@class="header"]').getText()).equal('Counters');
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
    const element = $('[name="edit"]').getValue();
    expect(element).eq('Default Counter')
  });

  it('should verify Enter Counter Title', () => {
    expect(browser.$('//label[contains(text(),"Enter")]').getText()).eq('Enter Counter Title:');
  });

  it('should verify Counter Name Field', () => {
    const element = $('[name="name"]').getValue();
    expect(element).eq('Counter Name')
  });

  it('should verify Enter Initial Count', () => {
    expect(browser.$('//div[@class="container"]//label').getText()).eq("Enter Counter Title:");
  });

  it('should verify Enter Initial Count', () => {
    const element = $('[name="value"]').getValue();
    expect(element).eq('50')
  });

});


describe('Verify that a new counter is added after clicking on “Add counter” button', () => {

  it('should open app', () => {
    browser.url('https://likejean.github.io/homework-5/');
  });

  it('should click add button', () => {
    $('[class="btn-success btn Ripple-parent add col-6"]').click();
  });

  it('should verify new counter created', () => {
    const element = $$('h3')[2].getText();
    expect(element).eq('2. Counter Name');
  });

});

describe('Verify that a new counter can be added when the name of the counter' +
  ' in “Add Name Field” more than 6 characters.', () => {

  it('should open app', () => {
    browser.url('https://likejean.github.io/homework-5/');
  });

  it('should Insert name “counter2"(8 characters) is entered into “Add Name Field”', () => {
    $('[name="name"]').setValue('counter2');
    $('[class="btn-success btn Ripple-parent add col-6"]').click();
  });

  it('should verify new counter created', () => {
    const element = $$('h3')[2].getText();
    expect(element).eq('2. counter2');
  });
});

describe('Verify the deletion of the default counter', () => {

  it('should open app', () => {
    browser.url('https://likejean.github.io/homework-5/');
  });

  it('should click button "DELETE"', () => {
    $('[id="1"]').click();
    const element = $$('h3').length;
    expect(element).eq(1);
  });

});

describe('Verify that after deleting any counter will assign a new order number, to keep it ascending', () => {

  it('should open app and add two counters', () => {
    browser.url('https://likejean.github.io/homework-5/');
    $('[name="name"]').setValue('2.counter');
    $('[class="btn-success btn Ripple-parent add col-6"]').click();
    $('[name="name"]').setValue('3.counter');
    $('[class="btn-success btn Ripple-parent add col-6"]').click();
  });

  it('should verify “2.counter” will become “1.counter” in ascending order after delete first counter', () => {
    $('[id="1"]').click();
    const element = $$('h3')[1].getText();
    expect(element).eq('1. 2.counter');
  });
});

describe('Verify that when user refresh-reload the app page resets to initial interface state (default status)', () => {

  it('should open app and edit counter name', () => {
    browser.url('https://likejean.github.io/homework-5/');
    $('[name="edit"]').setValue('counter 1');
    const element = $$('h3')[1].getText();
    expect(element).eq('1. counter 1');
  });

  it('should refresh app page and check default name ', () => {
    browser.refresh();
    const element = $$('h3')[1].getText();
    expect(element).eq('1. Default Counter');
  });
});

describe('Verify LF1 does not accepts “0"', () => {

  it('should open app and type in "0" in LF1', () => {
    browser.url('https://likejean.github.io/homework-5/');
    $('button[name="negative"]').click();
    $('input[name="lower"]').setValue(0);
  });

  it('verify that LF1 is empty', () => {

  });

  it('verify ERROR is present', () => {
    const element = $('span[style="color: red;"]').getText();
    expect(element).eq('ERROR: Must be greater than zero');
  });
});

describe('Verify LF2 does not accepts “0" ', () => {
  it('should open app and type in "0" in LF2 ', () => {
    browser.url('https://likejean.github.io/homework-5/');
    $('button[name="positive"]').click();
    $('input[name="upper"]').setValue(0);
  });

  it('should verify that LF2 is empty', () => {

  });

  it('verify ERROR is present', () => {
    const element = $('span[style="color: red;"]').getText();
    expect(element).eq('ERROR: Upper Limit Must be GREATER than Lower Limit');
  });
});

describe('Verify that correct set of Sub buttons and Add buttons is displayed for max and min range', () => {

  it('should open app and type LF2 "9" ', () => {
    browser.url('https://likejean.github.io/homework-5/');
    $('button[name="positive"]').click();
    $('input[name="upper"]').setValue(9);
  });

  it('verify add buttons from 1 to 9 present', () => {
    expect($('[step="1"]').isExisting()).true;
    expect($('[step="2"]').isExisting()).true;
    expect($('[step="3"]').isExisting()).true;
    expect($('[step="4"]').isExisting()).true;
    expect($('[step="5"]').isExisting()).true;
    expect($('[step="6"]').isExisting()).true;
    expect($('[step="7"]').isExisting()).true;
    expect($('[step="8"]').isExisting()).true;
    expect($('[step="9"]').isExisting()).true;
  });

  it('verify sub buttons from -1 to -9 present', () => {
    expect($('[step="-1"]').isExisting()).true;
    expect($('[step="-2"]').isExisting()).true;
    expect($('[step="-3"]').isExisting()).true;
    expect($('[step="-4"]').isExisting()).true;
    expect($('[step="-5"]').isExisting()).true;
    expect($('[step="-6"]').isExisting()).true;
    expect($('[step="-7"]').isExisting()).true;
    expect($('[step="-8"]').isExisting()).true;
    expect($('[step="-9"]').isExisting()).true;
  });
});

describe('verify that upper LF2 accepts from 1 to 9', () => {

  it('should open app', () => {
    browser.url('https://likejean.github.io/homework-5/');
  });

  it('should type number from 1 to 9 and check ERROR is not appear', () => {
    $('button[name="positive"]').click();
    for(let i = 1; i < 10; i++) {
      $('input[name="upper"]').setValue(i);
      expect($('span[style="color: red;"]').isExisting()).false;
    }
  });
});





