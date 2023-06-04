describe("Home Component", () => {
  context("when the random drink API call is successful", () => {
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

      cy.visit("localhost:3000");
    });

    it("should display a random drink with title and image", () => {
      cy.wait("@randomDrink");

      cy.get(".home-page h2")
        .should("contain", "LUCKY LIBATIONS")
        .get(".home-page .random-img")
        .should(
          "have.attr",
          "src",
          "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg"
        )
        .get(".home-page .random-img")
        .should("have.attr", "alt", "155 Belmont")
        .get(".home-page .title")
        .should("contain", "155 Belmont");
    });
  });

  context("when the random drink API call fails", () => {
    beforeEach(() => {
      cy.intercept(
        "GET",
        "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        {
          statusCode: 500,
          body: "Internal Server Error",
        }
      ).as("randomDrink");

      cy.visit("localhost:3000");
    });

    it("should display error page", () => {
      cy.wait("@randomDrink");

      cy.get(".error-page").should("contain", "A server error occured");
    });
  });
});
