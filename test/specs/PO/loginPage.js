import AppPage from "./AppPage";
import {userData, headerUserPage} from "./loginData"
class loginPage extends AppPage{

    get header(){
        return $('h1');
    }

    get emailInput(){
        return $('[name="email"]');
    }

    get passwordInput(){
        return $('[name="password"]');
    }
    get loginBtn(){
        return $('[type="submit"]');
    }

    get userTitle(){
        return $('h1');
    }



    login(){
        this.emailInput.setValue(userData.email);
        this.passwordInput.setValue(userData.password);
        this.loginBtn.click();
        browser.waitUntil(() => this.userTitle.getText() === headerUserPage);
    }

    open(path){
        super.open('https://stage.pasv.us/user/login')
    }
}
export default new loginPage();