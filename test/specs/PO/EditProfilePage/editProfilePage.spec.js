// import {expect} from 'chai';
// import editProfilePage from "./editProfilePage";
// import loginPage from "../LoginPage/loginPage";
// import{userData} from "../LoginPage/loginData";
//
// describe('EDIT PROFILE', () => {
//     it('should  open the correct page',  () => {
//         loginPage.login();
//         editProfilePage.EPPage();
//     });
//     it('should button Save be inactive ', () => {
//         expect(editProfilePage.submitBtn.isClickable()).false;
//
//     });
//     it('should profile  be filled correctly',  () => {
//         editProfilePage.phone.setValue(userData.phone);
//         editProfilePage.tShirtSize.selectByVisibleText(userData.tShirtSize);
//         editProfilePage.streetAddress.setValue(userData.streetAddress);
//         editProfilePage.city.setValue(userData.city);
//         editProfilePage.state.setValue(userData.state);
//         editProfilePage.zip.setValue(userData.zipCode);
//         editProfilePage.selectCountry.selectByVisibleText(userData.country);
//         editProfilePage.about.setValue(userData.about);
//         editProfilePage.goals.setValue(userData.goals);
//         editProfilePage.englishLevel.selectByVisibleText(userData.english);
//     });
//     it('should button Save be active ', () => {
//         expect(editProfilePage.submitBtn.isClickable()).true;
//
//     });
// });