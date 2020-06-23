import AppPage from "../../PO/AppPage";

class Page extends AppPage{
    open(path) {
        super.open("https://likejean.github.io/homework-5/");


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
        return $('button[name="positive"]');
    }
    get DeleteBtn(){
        return $('[id="1"]');
    }
    get RestBtn(){
        return $('[class="btn-primary btn Ripple-parent reset"]');
    }
    get defaultCounter(){
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

}
export default new Page();
