import { When } from "cypress-cucumber-preprocessor/steps";
import { loginWithUI, logoutWithUI} from "../../fixtures/authorization/login";
import { sortContainerWithUI } from "../../fixtures/authorization/sortproducts";
import { confirmDescendingOrder } from "../../fixtures/elements/select";

When(`I login as a {string} user`, (user) => {
  loginWithUI(user);
});

Then(`Then I sort items in descending order with {string} value`, (value) =>  {
    sortContainerWithUI(value);
});
 
Then(`Then I Verify that the items are displayed in the descending order within {string} value`, (value) =>  {
    verifyDescendingOrderWithUI(value) ;
});

Then(`I log out`, () => {
  logoutWithUI();
});