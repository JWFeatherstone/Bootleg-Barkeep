describe('RandomDrink Component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php', {
      statusCode: 200,
      body: {
        drinks: [
          {
            "strDrink": "155 Belmont",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
            "idDrink": "15346",
          },
        ],
      },
    }).as('randomDrink');

    cy.visit('localhost:3001'); 
  });

  it('should display a random drink with title and image', () => {
    cy.wait('@randomDrink')

    .get('h2').should('contain', 'Lucky Libations')
    .get('.diamond-container img').should('have.attr', 'src', 'https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg')
    .get('.diamond-container img').should('have.attr', 'alt', '155 Belmont')
    .get('.title').should('contain', '155 Belmont');
  });
});
