describe("Test Sign Up", () => {
  before(() => {
    cy.visit(Cypress.env("client_url"));
    cy.contains("Sign Up").click();
  });

  beforeEach(() => {
    cy.visit(`${Cypress.env("client_url")}/signup`);
    cy.url().should("include", "/signup");
  });

  afterEach(() => cy.pause());

  it("Username exist", () => {
    cy.signup({
      username: "waykiprueba",
      email: "prueba-wayki@wayki.com",
      pwd: "prueba123",
      validpwd: "prueba123",
    });
  });

  it("Email exist", () => {
    cy.signup({
      username: "wayki-prueba",
      email: "maicolsana12@gmail.com",
      pwd: "prueba123",
      validpwd: "prueba123",
    });
  });

  it("Go Home", () => {
    cy.contains("Inicio").click();
  });
});
