import { clickButton } from "../elements/button.js";
import {designateInformation} from "../elements/select.js";
import { waitForAllXhrRequests } from "../helpers/wait.js";

 
export const productsWithUI = () => {
  cy.log("Step--------------click on item " );
  clickButton("AddtocartProduct");
  waitForAllXhrRequests();
}

export const cartIconWithUI = () => {
  cy.log("Step--------------click on item " );
  clickButton("CartIcon");
  waitForAllXhrRequests();
}

export const yourcartWithUI = () => {
  cy.log("Step--------------click on item " );
  designateInformation("ProductsName");
  designateInformation("ProductsPrice");
  waitForAllXhrRequests();
}

