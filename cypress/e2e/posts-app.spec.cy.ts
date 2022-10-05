describe("Posts App", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit("https://miriamtorrens.github.io/prueba-app-posts/#/");
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  describe("signup", () => {
    beforeEach(() => {
      cy.contains("REGISTRO").click();
    });
    it("signup page can be opened", () => {
      cy.contains("Registrarse");
    });
    it("user cannot signup because the passwords do not match", () => {
      cy.get('[placeholder="Introduce tu nombre"]').type("eduardo");
      cy.get('[placeholder="Introduce tu contraseña"]').type("123456");
      cy.get('[placeholder="Repite tu contraseña"]').type("123457");
      cy.contains("Registrarse").click();
      cy.get("#toast").contains("Las contraseñas no coinciden");
    });
    it("user cannot signup because the password has less than 6 characters", () => {
      cy.get('[placeholder="Introduce tu nombre"]').type("eduardo");
      cy.get('[placeholder="Introduce tu contraseña"]').type("12345");
      cy.get('[placeholder="Repite tu contraseña"]').type("12345");
      cy.contains("Registrarse").click();
      cy.get("#toast").contains(
        "La contraseña debe tener al menos 6 caracteres"
      );
    });
    it("user can signup", () => {
      cy.get('[placeholder="Introduce tu nombre"]').type("eduardo");
      cy.get('[placeholder="Introduce tu contraseña"]').type("123456");
      cy.get('[placeholder="Repite tu contraseña"]').type("123456");
      cy.contains("Registrarse").click();
      cy.url().should("include", "login");
    });
    it("user cannot signup because the name already exists", () => {
      cy.get('[placeholder="Introduce tu nombre"]').type("eduardo");
      cy.get('[placeholder="Introduce tu contraseña"]').type("123456");
      cy.get('[placeholder="Repite tu contraseña"]').type("123456");
      cy.contains("Registrarse").click();
      cy.get("#toast").contains("El nombre de usuario ya existe");
    });

    describe("login", () => {
      beforeEach(() => {
        cy.contains("ACCESO").click();
      });
      it("login page can be opened", () => {
        cy.contains("Iniciar sesión");
      });
      it("user cannot login with wrong name", () => {
        cy.contains("Iniciar sesión").click();
        cy.get('[placeholder="Introduce tu nombre"]').type("eduard");
        cy.get('[placeholder="Introduce tu contraseña"]').type("123456");
        cy.contains("Iniciar sesión").click();
        cy.get("#toast").contains("El usuario no existe");
      });
      it("user cannot login with wrong password", () => {
        cy.contains("Iniciar sesión").click();
        cy.get('[placeholder="Introduce tu nombre"]').type("eduardo");
        cy.get('[placeholder="Introduce tu contraseña"]').type("12345");
        cy.contains("Iniciar sesión").click();
        cy.get("#toast").contains("Usuario o contraseña incorrecto");
      });
      it("user can login", () => {
        cy.contains("Iniciar sesión").click();
        cy.get('[placeholder="Introduce tu nombre"]').type("eduardo");
        cy.get('[placeholder="Introduce tu contraseña"]').type("123456");
        cy.contains("Iniciar sesión").click();
        cy.getLocalStorage("token").should("contain", "true");
        cy.url().should(
          "eq",
          `https://miriamtorrens.github.io/prueba-app-posts/#/`
        );
      });
    });
  });

  describe("when logged in", () => {
    beforeEach(() => {
      cy.setLocalStorage("token", "true");
      cy.getLocalStorage("token");
    });
    it("front page can be opened", () => {
      cy.contains("A quo magni similique perferendis");
    });
    it("a post can be updated", () => {
      cy.get("button:first").click();
      cy.get("#modal-update").should("be.visible");
      cy.get("textarea").clear();
      cy.get("textarea").type("Editando");
      cy.contains("Guardar").click();
      cy.get("#modal-update").should("not.exist");
      cy.contains("Editando");
      cy.get("#toast").contains("Post actualizado");
    });
    it("a post can be deleted", () => {
      cy.get("button:last").click();
      cy.get("#modal-delete").should("be.visible");
      cy.get("#delete").click();
      cy.get("#modal-delete").should("not.exist");
      cy.contains("Voluptatum itaque dolores nisi et quasi").should(
        "not.exist"
      );
      cy.get("#toast").contains("Post eliminado");
    });
    it("user can logout", () => {
      cy.get("#logout").click();
      cy.getLocalStorage("token").should("not.exist");
      cy.url().should("include", "login");
    });
  });
});
