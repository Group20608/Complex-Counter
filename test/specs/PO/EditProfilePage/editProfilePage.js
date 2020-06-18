import AppPage from "../AppPage";
import {header} from './editProfileData';
import {userData} from "../LoginPage/loginData";

class editProfilePage extends AppPage{
    get submitBtn(){
        return $('[type="submit"]');
    }
    get editProfilerBtn(){
        return browser.$('//a[text()="Edit profile."]');
    }
    get editProfileHeader(){
        return $('h1');
    }
    get selectCountry(){
        return $('[name="shippingAddress.countryName"]');
    }
    get phone(){
        return $('[name="phone"]')
    }
    get tShirtSize(){
        return $('[name="tShirtSize"]');
    }
    get streetAddress(){
        return $('[name="shippingAddress.address"]');
    }
    get city(){
        return $('[name="shippingAddress.city"]');
    }
    get state(){
        return $('[name="shippingAddress.state"]');
    }
    get zip(){
        return $('[name="shippingAddress.zipCode"]');
    }
    get about(){
        return $('[name="about"]');
    }
    get goals(){
        return $('[name="goals"]');
    }
    get englishLevel(){
        return $('[name="englishLevel"]');
    }


    EPPage(){
        this.editProfilerBtn.click();
        browser.waitUntil(() => this.editProfileHeader.getText() === header);
    }

}
export default new editProfilePage();