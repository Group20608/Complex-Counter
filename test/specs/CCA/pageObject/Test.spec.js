import {expect} from 'chai';
import Page from "./Page";
import {Header} from "./Data"

describe('', () => {
    it('should open browser page and check title', function () {
        Page.open();
        expect((Page.Header).getText()).eq(Header.title);
        expect((Page.Total).getText()).eq(Header.total);
        expect((Page.LF1).isDisplayed()).true;
        expect((Page.LF2).isDisplayed()).true;
        expect((Page.LF1).getText()).eq(Header.LF1);
        expect((Page.LF2).getText()).eq(Header.LF2);
        expect((Page.DeleteBtn).isDisplayed()).true;
        expect((Page.RestBtn).isDisplayed()).true;
        expect((Page.defaultCounter).getText()).eq(Header.defaultCounter);
        expect((Page.editCounterTitle).getText()).eq(Header.editCounterTitle);
        expect((Page.defaultCounterText).getValue()).eq(Header.defaultCounterText);


    });






});

