describe("Test Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  afterEach(() => cy.pause());

  it.only("Successful login", () => {
    cy.login({
      username: "waykiprueba",
      pwd: "wayki123",
    });
  });

  it.only("profile edit", () => {
    cy.get('[id="dropdown-basic"]').click();
    // my profile and my posts - button
    cy.get('[id="my-profile-button"]').click();
    cy.profile_edit({
      name: "Wayki App",
      telephone: "+573111234567",
      bio: "Esta es una prueba para Demo Makers top-v18",
    });
  });
});
