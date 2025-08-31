/// <reference types="cypress" />

describe("Pizza Sipariş Testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/secenekler");
  });

  it("Sipariş formunu doldurup gönderir ve success sayfasını doğrular", () => {
    cy.contains("span", "M").click(); 

    cy.get("select").select("Orta");

    cy.contains("label", "Pepperoni").click();
    cy.contains("label", "Sosis").click();

    cy.get(".note-input").type("Extra sos lütfen");

    cy.get(".quantity-box button").contains("+").click(); 

    cy.get(".order-button.desktop-order-btn").click();

    cy.url().should("include", "/success");

    cy.contains("Boyut:").next().should("contain", "Orta");
    cy.contains("Hamur:").next().should("contain", "Orta");
    cy.contains("Ek Malzemeler:").next().should("contain", "Pepperoni, Sosis");
    cy.contains("Not:").next().should("contain", "Extra sos lütfen");
    cy.contains("Adet:").next().should("contain", "2");
    cy.contains("Toplam:").should("contain", "95.50"); 
  });
});
