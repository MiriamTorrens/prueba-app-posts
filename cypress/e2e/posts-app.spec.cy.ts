import { createPublicKey } from "crypto";

describe("Posts App", () => {
  beforeEach(() => {
    cy.visit("https://miriamtorrens.github.io/prueba-app-posts/");
  });
  it("signup page can be opened", () => {
    cy.contains("REGISTRO").click();
  });
  it("user can signup", () => {
    cy.contains("REGISTRO").click();
    cy.get('[placeholder="Introduce tu nombre"]').type("miriam");
    cy.get('[placeholder="Introduce tu contraseña"]').type("123456");
    cy.get("input:last").type("123456");
    cy.contains("Registrarse").click();
  });
  // it("login page can be opened", () => {
  //   cy.contains("ACCESO");
  // });
  // it("user can login", () => {
  //   cy.contains("ACCESO").click();
  //   cy.get('[placeholder="Introduce tu nombre"]').type("miriam");
  //   cy.get('[placeholder="Introduce tu contraseña"]').type("123456");
  //   cy.contains("Iniciar sesión").click();
  // });
  // it("user cannot login with wrong name", () => {
  //   cy.contains("ACCESO").click();
  //  cy.get('[placeholder="Introduce tu nombre"]').type("miria");
  //  cy.get('[placeholder="Introduce tu contraseña"]').type("123456");
  // });
  // it("user cannot login with wrong password", () => {
  //   cy.contains("ACCESO").click();
  //  cy.get('[placeholder="Introduce tu nombre"]').type("miria");
  //  cy.get('[placeholder="Introduce tu contraseña"]').type("12345");
  // });
});
