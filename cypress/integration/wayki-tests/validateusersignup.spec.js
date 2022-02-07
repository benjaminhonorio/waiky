describe("Test Sign Up", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
    cy.contains("Sign Up").click();
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000/signup");
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
