describe("Test Change Password", () => {
  afterEach(() => cy.pause());

  it("Email not valid", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[id="forget-password-button"]').click();
    cy.url().should("include", "/email_recovery");
    cy.emailrecovery({
      email: "wayki",
    });
  });

  it("Email not exist", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[id="forget-password-button"]').click();
    cy.url().should("include", "/email_recovery");
    cy.emailrecovery({
      email: "wayki@gmail.com",
    });
  });

  it("Email valid", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[id="forget-password-button"]').click();
    cy.url().should("include", "/email_recovery");
    cy.emailrecovery({
      email: "maicolsana12@gmail.com",
    });
  });

  it("Password not match", () => {
    cy.visit("http://localhost:3000/password_reset/6201948e1e5a9185ba4cf266");
    cy.changepassword({
      pwd1: "prueba123",
      pwd2: "prueb",
    });
  });

  it("Password not match 2", () => {
    cy.visit("http://localhost:3000/password_reset/6201948e1e5a9185ba4cf266");
    cy.changepassword({
      pwd1: "prueba",
      pwd2: "prueba123",
    });
  });

  it("Password match", () => {
    cy.visit("http://localhost:3000/password_reset/6201948e1e5a9185ba4cf266");
    cy.changepassword({
      pwd1: "prueba123",
      pwd2: "prueba123",
    });

    cy.url().should("include", "/password_changed");
    cy.get('[id="login-button"]').click();
    cy.url().should("include", "/login");
    cy.login({
      username: "waykiprueba",
      pwd: "prueba1234",
    });
  });
});
