describe("Test Sign Up", () => {
  afterEach(() => cy.pause());

  it("Username not valid", () => {
    cy.visit(`${Cypress.env("client_url")}/signup`);
    cy.url().should("include", "/signup");
    cy.signup({
      username: "xxx",
      email: "prueba@hotmail.com",
      pwd: "prueba123",
      validpwd: "prueba123",
    });
  });

  it("Email not valid", () => {
    cy.visit(`${Cypress.env("client_url")}/signup`);
    cy.url().should("include", "/signup");
    cy.signup({
      username: "waykiprueba",
      email: "prueba",
      pwd: "prueba123",
      validpwd: "prueba123",
    });
  });

  it("Password doesnt match", () => {
    cy.visit(`${Cypress.env("client_url")}/signup`);
    cy.url().should("include", "/signup");
    cy.signup({
      username: "waykiprueba",
      email: "prueba@wayki.com",
      pwd: "xxx",
      validpwd: "prueba123",
    });
  });

  it("Password doesnt match 2", () => {
    cy.visit(`${Cypress.env("client_url")}/signup`);
    cy.url().should("include", "/signup");
    cy.signup({
      username: "waykiprueba",
      email: "prueba@wayki.com",
      pwd: "prueba123",
      validpwd: "xxx",
    });
  });

  it("Successful signup", () => {
    cy.visit(`${Cypress.env("client_url")}/signup`);
    cy.url().should("include", "/signup");
    cy.request("DELETE", `${Cypress.env("api_url")}/cleanusers`);
    cy.signup({
      username: "waykiprueba",
      email: "maicolsana12@gmail.com",
      pwd: "wayki123",
      validpwd: "wayki123",
    });
  });

  it("log out", () => {
    cy.get('[id="username-menu"]').click();
    // my profile and my posts - button
    cy.get('[id="logout-button"]').click();
  });
});
