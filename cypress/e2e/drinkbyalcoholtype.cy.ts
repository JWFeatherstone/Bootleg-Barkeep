describe("Alcohol Grid Component", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/random.php",
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
    ).as("randomDrink");

    cy.fixture("drinks.json")
      .as("fetchCocktails")
      .intercept(
        "GET",
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka",
        {
          statusCode: 200,
          fixture: "drinks.json",
        }
      )
      .as("fetchCocktails");
    cy.visit("localhost:3000");
  });

  it('should allow user to click NavLink "Vodka" and be routed to drink grid with fixture data', () => {
    cy.get(".ingredient-nav").eq(2).click();
    cy.wait("@fetchCocktails");
    cy.get(".drink-title").should("contain", "Vodka");
    cy.get(".drink-card")
      .should("have.length", 15)
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
        "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg"
      )
      .get(".random-img")
      .should("have.attr", "alt", "155 Belmont")
      .get(".title")
      .should("contain", "155 Belmont");
  });

  it("should navigate back to the previous page when the back button is clicked", () => {
    cy.get(".ingredient-nav").eq(2).click();
    cy.wait("@fetchCocktails");
  
    cy.get(".drink-title").should("contain", "Vodka");
  
    cy.go("back");
  
    cy.wait("@randomDrink");
    cy.get("h2").should("contain", "Lucky Libations");
    cy.get(".random-img").should(
      "have.attr",
      "src",
      "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg"
    );
    cy.get(".random-img").should("have.attr", "alt", "155 Belmont");
    cy.get(".title").should("contain", "155 Belmont");
  });
});
