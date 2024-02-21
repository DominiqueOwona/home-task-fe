import { When } from "cypress-cucumber-preprocessor/steps";
import { loginWithUI } from "../../fixtures/authorization/login";


When(`I login as a {string} user`, (user) => {
    console.log("Step--------------Logging in as user: " , user);
    loginWithUI(user);
});
