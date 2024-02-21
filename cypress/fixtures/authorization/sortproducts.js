import {selectValue} from "../elements/select.js";
import { waitForAllXhrRequests } from "../helpers/wait.js";

export const sortContainerWithUI = (value) => {
  cy.log("Step--------------click on option " + value );
  selectValue("SortContainer",value);
  waitForAllXhrRequests(); 
}

export const verifyDescendingOrderWithUI = (value) => {
  cy.log("Step--------------click on item " );
  confirmDescendingOrder("SortContainer", (value));
  waitForAllXhrRequests();
} 


