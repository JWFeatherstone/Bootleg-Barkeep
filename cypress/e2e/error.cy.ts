describe('error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php', {
      statusCode: 500
    }).as('randomDrink');
  })
  it('should display an error page when a randomized drink fails to fetch', () => {
    cy.visit('localhost:3000')
  })


})