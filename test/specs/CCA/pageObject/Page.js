import AppPage from "../../PO/AppPage";
import {DataPage, url} from "./Data";

class Page extends AppPage{

    get Total(){
        return browser.$('//h3');
    }
    get LF1(){
        return browser.$('//button[@name="negative"]');
    }
    get LF2(){
        return browser.$('//button[@name="positive"]');
    }
    get DeleteBtn(){
        return $('[id="1"]');
    }
    get RestBtn(){
        return $('[class="btn-primary btn Ripple-parent reset"]');
    }
    get defaultCounterFirst(){
        return $$('h3')[1];
    }
    get editCounterTitle(){
        return browser.$('//label[contains(text(),"Edit")]');
    }
    get defaultCounterText(){
        return $('[name="edit"]');
    }
    get enterCounterTitle() {
        return browser.$('//label[contains(text(),"Enter")]');
    }
    get counterName(){
        return $('[name="name"]');
    }
    get counterValueInput(){
        return $('[name="value"]');
    }
    get addCounterBnt(){
        return $('[class="btn-success btn Ripple-parent add col-6"]');
    }
    get defaultCounterSecond(){
        return $$('h3')[2];
    }
    get limitInputLower(){
        return $('[name="lower"]')
    }
    get limitInputUpper(){
        return $('input[name="upper"]')
    }
    get errorGreaterZero(){
        return $('span[style="color: red;"]');
    }
    get defaultBlackBtnNegativeOne(){
        return $('[step="-1"]');
    }

    addButtons(i){
        return $(`[step="${(i)}"]`);
    }

    open(path) {
        super.open(url.pageCounter);
        browser.waitUntil(() => browser.getTitle() === DataPage.appTitle )
    }


}
export default new Page();
