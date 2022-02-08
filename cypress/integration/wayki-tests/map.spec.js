describe("Test Map", () => {
  afterEach(() => cy.pause());

  it("Map View", () => {
    cy.visit(`${Cypress.env("client_url")}/`);
    cy.contains("Map").click();
  });
});
