// https://docs.cypress.io/api/table-of-contents

describe("Test Login Form", () => {
  it("Scenario1: Email & password not exist", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#Email").type("eothman21@gmail.com");
    cy.get("#Password").type("1P12345678");
    cy.get("#submit").click();
    cy.get("#errorMsg");
  });

  it("Scenario2: Correct Email & Wrong Password", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#Email").type("mohamed@instabug.com");
    cy.get("#Password").type("1P12345678");
    cy.get("#submit").click();
    cy.get("#errorMsg");
  });

  it("Scenario3: Correct email & password", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#Email").type("mohamed@instabug.com");
    cy.get("#Password").type("A12345678");
    cy.get("#submit").click();
    cy.url().should("eq", "http://localhost:8080/welcome");
  });

  it("Scenario4: Invalid email Address Format", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#Email").type("dddd").blur();
    cy.get("#emailError");
  });
});
