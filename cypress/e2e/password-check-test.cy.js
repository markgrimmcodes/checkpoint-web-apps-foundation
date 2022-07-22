/// <reference types="cypress" />

function typePasswords(text1, text2) {
  cy.get('[data-cy="firstPW"]').type(text1);
  cy.get('[data-cy="secPW"]').type(text2);
}

describe("password-check-app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should have 2 input fields", () => {
    cy.get("input[type=password]").should("have.length", 2);
  });
  it("should type passwords", () => {
    typePasswords("hallo", "hallo");
  });
});
