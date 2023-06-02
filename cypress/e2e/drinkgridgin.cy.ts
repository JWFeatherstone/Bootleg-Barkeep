describe("Drink Grid Gin", () => {
  beforeEach(() => {
    cy.fixture("gin.json").as("ginCocktails");
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      {
        statusCode: 200,
        body: {
          drinks: [
            {
              strDrink: "Loch Lomond",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg",
              idDrink: "11658",
            },
          ],
        },
      }
    ).as("randomDrink");
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin",
      {
        statusCode: 200,
        fixture: "gin.json",
      }
    ).as("ginCocktails");
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13940",
      {
        statusCode: 200,
        body: {
          drinks: [
            {
              strDrink: "69 Special",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
              idDrink: "13940",
            },
          ],
        },
      }
    ).as("ginCocktail1");
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11014",
      {
        statusCode: 200,
        body: {
          drinks: [
            {
              strDrink: "Alexander",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg",
              idDrink: "11014",
            },
          ],
        },
      }
    ).as("ginCocktail2");
    cy.visit("localhost:3000");
  });

  it('should allow user to click NavLink "Gin" and be routed to drink grid with fixture data', () => {
    cy.get(".ingredient-nav").eq(3).click();
    cy.wait("@ginCocktails");
    cy.get(".drink-title").should("contain", "Gin");
    cy.get(".drink-card")
      .should("have.length", 9)
      .each((drinkCard) => {
        cy.wrap(drinkCard).find(".drink-name").should("exist");
        cy.wrap(drinkCard).find(".drink-image").should("exist");
      });
  });

  it("should allow user to click logo to return to Home Screen", () => {
    cy.get(".home-nav").click();
    cy.wait("@randomDrink")
      .get("h2")
      .should("contain", "Lucky Libations")
      .get(".random-img")
      .should(
        "have.attr",
        "src",
        "https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg"
      )
      .get(".random-img")
      .should("have.attr", "alt", "Loch Lomond")
      .get(".title")
      .should("contain", "Loch Lomond");
  });

  it("should navigate to detailed view of first drink on grid in gin category", () => {
    cy.get(".ingredient-nav").eq(3).click();
    cy.wait("@ginCocktails");

    cy.get(".drink-title").should("contain", "Gin");

    cy.get(".drink-card").first().click();
    cy.wait("@ginCocktail1");
    cy.get(".detail-name").should("contain", "69 Special");
    cy.get(".detail-image").should(
      "have.attr",
      "src",
      "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg"
    );
  });

  it("should navigate to detailed view of last drink on grid in gin category", () => {
    cy.get(".ingredient-nav").eq(3).click();
    cy.wait("@ginCocktails");

    cy.get(".drink-title").should("contain", "Gin");

    cy.get(".drink-card").last().click();
    cy.wait("@ginCocktail2");
    cy.get(".detail-name").should("contain", "Alexander");
    cy.get(".detail-image").should(
      "have.attr",
      "src",
      "https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg"
    );
    cy.get(".home-nav").click();
  });

  it("should navigate back to the previous page when the back button is clicked", () => {
    cy.get(".ingredient-nav").eq(3).click();
    cy.wait("@ginCocktails");

    cy.get(".drink-title").should("contain", "Gin");

    cy.go("back");

    cy.wait("@randomDrink");
    cy.get("h2").should("contain", "Lucky Libations");
    cy.get(".random-img").should(
      "have.attr",
      "src",
      "https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg"
    );
    cy.get(".random-img").should("have.attr", "alt", "Loch Lomond");
    cy.get(".title").should("contain", "Loch Lomond");
  });
});
