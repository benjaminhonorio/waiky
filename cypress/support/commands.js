import "cypress-file-upload";

const fixtureFile = "dog1.jpg";
const fixtureFile2 = "dog2.jpg";

Cypress.Commands.add("signup", ({ username, email, pwd, validpwd }) => {
  cy.get('[data-test-id="newusername-login-form"]')
    .type(username)
    .should("have.value", username);

  cy.get('[data-test-id="email-login-form"]')
    .type(email)
    .should("have.value", email);

  cy.get('[data-test-id="password-login-form"]')
    .type(pwd)
    .should("have.value", pwd);

  cy.get('[data-test-id="validpassword-login-form"]')
    .type(validpwd)
    .should("have.value", validpwd);

  cy.get('[id="button-login-form"]').click();
});

Cypress.Commands.add(
  "create_post",
  ({ title, name, specie, tags, color, age, location, description }) => {
    cy.pause();

    cy.get('[data-test-id="title-post-form"]')
      .type(title)
      .should("have.value", title);

    cy.get('[data-test-id="name-post-form"]')
      .type(name)
      .should("have.value", name);

    cy.get('[data-test-id="specie-post-form"]')
      .type(specie)
      .should("have.value", specie);

    cy.get('[data-test-id="tags-post-form"]')
      .type(tags)
      .should("have.value", tags);

    cy.get('[data-test-id="sex-select-form"]')
      .select("Hembra")
      .should("have.value", "H");

    cy.get('[data-test-id="color-post-form"]')
      .type(color)
      .should("have.value", color);

    cy.get('[data-test-id="size-select-form"]')
      .select("mediano")
      .should("have.value", "M");

    cy.get('[data-test-id="age-post-form"]')
      .type(age)
      .should("have.value", age);

    // cy.get('[data-test-id="location-post-form"]')
    //   .type(location)
    //   .should("have.value", location);

    cy.get('[data-test-id="description-post-form"]')
      .type(description)
      .should("have.value", description);

    cy.get('[id="map-button"]').click();
    // Este boton de Aceptar en caso de que salga un alert al abrir el modal de google maps. Cerciorarse de que esto no salga.
    // cy.contains("Aceptar").click();
    // cy.pause();
    // ------------------
    cy.get('[data-test-id="map-body"]').click();
    cy.get('[id="save-modal-button"]').click();

    cy.get('[data-test-id="photos-post-form"]').attachFile(fixtureFile);
    cy.pause();

    cy.get('[id="button-login-form"]').click();
    cy.pause();
  }
);

Cypress.Commands.add("profile_edit", ({ name, telephone, bio }) => {
  cy.get('[data-test-id="name-profile-form"]')
    .type(name)
    .should("have.value", name);

  cy.get('[data-test-id="telephone-profile-form"]')
    .type(telephone)
    .should("have.value", telephone);

  cy.get('[data-test-id="bio-profile-form"]')
    .type(bio)
    .should("have.value", bio);

  cy.get('[type="file"]').attachFile(fixtureFile2);
  cy.pause();
  cy.get('[id="profileupdate-button"]').click();
});

Cypress.Commands.add("login", ({ username, pwd }) => {
  cy.get('[data-test-id="username-login-form"]')
    .type(username)
    .should("have.value", username);

  cy.get('[data-test-id="password-login-form"]')
    .type(pwd)
    .should("have.value", pwd);

  cy.get('[type="checkbox"]').check();
  cy.get('[id="button-login-form"]').click();
});

Cypress.Commands.add("emailrecovery", ({ email }) => {
  cy.get('[data-test-id="email-recovery-input"]')
    .type(email)
    .should("have.value", email);
  cy.get('[id="email-recovery-button"]').click();
});

Cypress.Commands.add("changepassword", ({ pwd1, pwd2 }) => {
  cy.get('[data-test-id="passwordreset1-form"]')
    .type(pwd1)
    .should("have.value", pwd1);

  cy.get('[data-test-id="passwordreset2-form"]')
    .type(pwd2)
    .should("have.value", pwd2);

  cy.get('[id="button-newpwd-form"]').click();
});
