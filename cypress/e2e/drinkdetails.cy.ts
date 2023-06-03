describe("Drink Details Component", () => {
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

    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila",
      {
        statusCode: 200,
        body: {
          drinks: [
            {
              strDrink: "Margarita",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
              idDrink: "11007",
            },
            {
              strDrink: "110 in the shade",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
              idDrink: "15423",
            },
          ],
        },
      }
    ).as("tequilaDrinks");

    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
      {
        statusCode: 200,
        body: {
          drinks: [
            {
              strDrink: "Margarita",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
              idDrink: "11007",
              strGlass: "Cocktail glass",
              strInstructions:
                "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
              strIngredient1: "Tequila",
            },
          ],
        },
      }
    ).as("fetchDrinkDetails");
  });

  it('should allow user to click NavLink "Tequila" then NavLink "Margarita" and be routed to a page with the margarita details', () => {
    cy.visit("localhost:3000");
    cy.get(".ingredient-nav").eq(5).click();
    cy.get(".drink-card").eq(0).click();
    cy.wait("@fetchDrinkDetails");
    cy.get(".prep-title").should("contain", "Margarita");
    cy.get(".drink-image").should(
      "have.attr",
      "src",
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
    );
    cy.get(".prep-detail").should("contain", "Cocktail glass");
    cy.get(".prep-detail").should("contain", "Tequila");
  });

  it("should allow user to click logo to return to Home Screen", () => {
    cy.visit("localhost:3000");
    cy.get(".home-nav").click();
    cy.wait("@randomDrink")
      .get("h2")
      .should("contain", "Lucky Libations")
      .get(".random-container img")
      .should(
        "have.attr",
        "src",
        "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg"
      )
      .get(".random-container img")
      .should("have.attr", "alt", "155 Belmont")
      .get(".title")
      .should("contain", "155 Belmont");
  });
});
