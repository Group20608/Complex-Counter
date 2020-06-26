import faker from 'faker';

const zipCode = faker.address.zipCode();
const city = faker.address.city();
const state = faker.address.state();

const userData = {
    email: 'gmbh1@ro.ru',
    password: '123456',
    phone: '12345434567',
    tShirtSize: 'Women - XS',
    streetAddress: '3425 Stone Street, Apt. 2A',
    city,
    state,
    zipCode,
    country: 'Georgia',
    about: 'I love you Java Script',
    goals: 'I want to become an astronaut',
    english: 'Beginner',
};


const headerUserPage = 'You are a new user';

const headerLoginPage = 'User Login';

export {userData, headerLoginPage, headerUserPage};