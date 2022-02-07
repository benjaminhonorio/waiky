describe("Test Login", () => {
  afterEach(() => cy.pause());

  it("Username not valid", () => {
    cy.visit("http://localhost:3000/login");
    cy.url().should("include", "/login");
    cy.login({
      username: "xxx",
      pwd: "prueba123",
    });
  });

  it("Password not valid", () => {
    cy.visit("http://localhost:3000/login");
    cy.url().should("include", "/login");
    cy.login({
      username: "waykiprueba",
      pwd: "xxx",
    });
  });

  it("Username not exist", () => {
    cy.visit("http://localhost:3000/login");
    cy.url().should("include", "/login");
    cy.login({
      username: "waykixxx",
      pwd: "prueba123",
    });
  });

  it("Username not match", () => {
    cy.visit("http://localhost:3000/login");
    cy.url().should("include", "/login");
    cy.login({
      username: "waykiprueba",
      pwd: "prueba123",
    });
  });

  it("Successful login", () => {
    cy.visit("http://localhost:3000/login");
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
