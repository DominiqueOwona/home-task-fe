import { When } from "cypress-cucumber-preprocessor/steps";
import { loginWithUI, logoutWithUI} from "../../fixtures/authorization/login";
import { productsWithUI, cartIconWithUI,yourcartWithUI } from "../../fixtures/authorization/product";

When(`I login as a {string} user`, (user) => {
  loginWithUI(user);
});

When(`I click on item`, () =>  {
  productsWithUI();
});

Then(`I navigate to cart`, () =>  {
  cartIconWithUI();
});
 
Then(`I ensure that the item added in step_3 is displayed in the cart`, () =>  {
  yourcartWithUI() ;
});


When(`I log out`, () => {
  logoutWithUI();
});