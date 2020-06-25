import AppPage from "../../PO/AppPage";
import {DataPage} from "./Data";

class Page extends AppPage{
    open(path) {
        super.open("https://likejean.github.io/homework-5/");
        browser.waitUntil(() => browser.getTitle() === DataPage.appTitle )
    }
    get Header(){
        return $('//h1[@class="header"]');
    }
    get Total(){
        return $('//h3');
    }
    get LF1(){
        return $('//button[@name="negative"]');
    }
    get LF2(){
        return $('//button[@name="positive"]');
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
        return $('//label[contains(text(),"Edit")]');
    }
    get defaultCounterText(){
        return $('[name="edit"]');
    }
    get enterCounterTitle() {
        return $('//label[contains(text(),"Enter")]');
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

    addButtons(i){
        return $(`[step="${(i)}"]`);
    }


}
export default new Page();
