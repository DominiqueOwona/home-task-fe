import { getCurrentPage } from "../pages/page";

export const selectValue = (selectName, value) => {
  cy.log("Step--------------selecting " + value + " in field " + selectName);
  const page = getCurrentPage();
  const locator = page.selects[selectName];

  cy.get(locator.CSS).should("be.enabled");
  cy.get(locator.CSS).select(value);
};

export const designateInformation = (selectName) => {
  cy.log("Step--------------selecting " + selectName);
  const page = getCurrentPage();
  const locator = page.selects[selectName];
  const informationName = locator.text;
  cy.get(locator.CSS).should("contain",informationName);

}
export const confirmDescendingOrder = (selectName, value) => {
  cy.log("Step--------------selecting " + value + " in field " + selectName);
  const page = getCurrentPage();
  const locator = page.selects[selectName];
  cy.get(locator.CSS).should("be.enabled");
  cy.get(locator.CSS).select(value).should("have.value", value);
}