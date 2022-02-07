describe("Test Sign Up", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signup");
    cy.url().should("include", "/signup");
  });

  afterEach(() => cy.pause());

  it("Username not valid", () => {
    cy.signup({
      username: "xxx",
      email: "prueba@hotmail.com",
      pwd: "prueba123",
      validpwd: "prueba123",
    });
  });

  it("Email not valid", () => {
    cy.signup({
      username: "waykiprueba",
      email: "prueba",
      pwd: "prueba123",
      validpwd: "prueba123",
    });
  });

  it("Password doesnt match", () => {
    cy.signup({
      username: "waykiprueba",
      email: "prueba@wayki.com",
      pwd: "xxx",
      validpwd: "prueba123",
    });
  });

  it("Password doesnt match 2", () => {
    cy.signup({
      username: "waykiprueba",
      email: "prueba@wayki.com",
      pwd: "prueba123",
      validpwd: "xxx",
    });
  });

  it.only("Successful signup", () => {
    cy.request("DELETE", "http://localhost:3003/api/v1/cleanusers");
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
    cy.get('[id="log-out-button"]').click();
  });
});
