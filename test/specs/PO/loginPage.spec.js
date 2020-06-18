import loginPage from "./loginPage";
import {expect} from 'chai';
import {headerLoginPage} from './loginData';

describe('USER LOGIN',() => {
    it('should  open the correct page', () => {
        loginPage.open();
        expect(loginPage.header.getText()).eq(headerLoginPage);
    });
    it('should login', () => {
        loginPage.login();
    });
});