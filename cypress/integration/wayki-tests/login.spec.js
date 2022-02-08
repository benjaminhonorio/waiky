describe("Test Login", () => {
  afterEach(() => cy.pause());

  it("Username not valid", () => {
    cy.visit(`${Cypress.env("client_url")}/login`);
    cy.url().should("include", "/login");
    cy.login({
      username: "xxx",
      pwd: "prueba123",
    });
  });

  it("Password not valid", () => {
    cy.visit(`${Cypress.env("client_url")}/login`);
    cy.url().should("include", "/login");
    cy.login({
      username: "waykiprueba",
      pwd: "xxx",
    });
  });

  it("Username not exist", () => {
    cy.visit(`${Cypress.env("client_url")}/login`);
    cy.url().should("include", "/login");
    cy.login({
      username: "waykixxx",
      pwd: "prueba123",
    });
  });

  it("Username not match", () => {
    cy.visit(`${Cypress.env("client_url")}/login`);
    cy.url().should("include", "/login");
    cy.login({
      username: "waykiprueba",
      pwd: "prueba123",
    });
  });

  it("Successful login", () => {
    cy.visit(`${Cypress.env("client_url")}/login`);
    cy.url().should("include", "/login");
    cy.login({
      username: "waykiprueba",
      pwd: "wayki123",
    });

    cy.get('[id="dropdown-basic"]').click();
    // my profile and my posts - button
    cy.get('[id="logout-button"]').click();
  });
});
