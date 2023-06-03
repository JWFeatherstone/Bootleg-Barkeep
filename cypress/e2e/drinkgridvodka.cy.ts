describe("Drink Grid Vodka", () => {
  beforeEach(() => {
    cy.fixture("vodka.json").as("vodkaCocktails");
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
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka",
      {
        statusCode: 200,
        fixture: "vodka.json",
      }
    ).as("vodkaCocktails");

    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15346",
      {
        statusCode: 200,
        body: {
          drinks: [
            {
              strDrink: "155 Belmont",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
              idDrink: "15346",
            },
          ],
        },
      }
    ).as("vodkaCocktail1");

    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16333",
      {
        statusCode: 200,
        body: {
          drinks: [
            {
              strDrink: "Adam Bomb",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
              idDrink: "16333",
            },
          ],
        },
      }
    ).as("vodkaCocktail2");
    cy.visit("localhost:3000");
  });

  it('should allow user to click NavLink "Vodka" and be routed to drink grid with fixture data', () => {
    cy.get(".ingredient-nav").eq(2).click();
    cy.wait("@vodkaCocktails");
    cy.get(".drink-title").should("contain", "Vodka");
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
      .should("contain", "LUCKY LIBATIONS")
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

  it("should navigate to detailed view of first drink and last drink on grid and show detailed view", () => {
    cy.get(".ingredient-nav").eq(2).click();
    cy.wait("@vodkaCocktails");

    cy.get(".drink-title").should("contain", "Vodka");

    cy.get(".drink-card").first().click();
    cy.wait("@vodkaCocktail1");

    cy.get(".drink-name").should("contain", "155 Belmont");
    cy.get(".drink-image").should(
      "have.attr",
      "src",
      "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg"
    );
    cy.get(".ingredient-nav").eq(2).click();
    cy.wait("@vodkaCocktails");
    cy.get(".drink-title").should("contain", "Vodka");
    cy.get(".drink-card").last().click();
    cy.wait("@vodkaCocktail2");
    cy.get(".drink-name").should("contain", "Adam Bomb");
    cy.get(".drink-image").should(
      "have.attr",
      "src",
      "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg"
    );
  });

  it("should navigate back to the previous page when the back button is clicked", () => {
    cy.get(".ingredient-nav").eq(2).click();
    cy.wait("@vodkaCocktails");

    cy.get(".drink-title").should("contain", "Vodka");

    cy.go("back");

    cy.wait("@randomDrink");
    cy.get("h2").should("contain", "LUCKY LIBATIONS");
    cy.get(".random-img").should(
      "have.attr",
      "src",
      "https://www.thecocktaildb.com/images/media/drink/rpvtpr1468923881.jpg"
    );
    cy.get(".random-img").should("have.attr", "alt", "Loch Lomond");
    cy.get(".title").should("contain", "Loch Lomond");
  });
});
