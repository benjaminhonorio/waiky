describe("Test Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  afterEach(() => cy.pause());

  it("Successful login", () => {
    cy.login({
      username: "waykiprueba",
      pwd: "wayki123",
    });
  });

  it("profile edit", () => {
    cy.contains("Publicar").click();

    cy.create_post({
      title: "Gato perdido en Peru Lima",
      name: "Horus",
      specie: "Gato Angora",
      tags: "Gato Perdido Lima Ayuda",
      color: "blanco",
      age: "4 años",
      location: "Lima",
      description: "Es tierna, se deja acariciar. Porfavor ayuda !",
    });
  });
});
