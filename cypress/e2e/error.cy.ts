describe('error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php', {
      statusCode: 500
    })

    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin', {
      statusCode: 500
    })

    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=15346', {
      statusCode: 500
    })
  })

  it('should display an error page when a randomized drink fails to fetch for the home page', () => {
    cy.visit('localhost:3000')
    cy.get('section').should('have.class', 'error-page')
    cy.get('.error-message').should('have.text', 'A server error occured while we were trying to fetch your cocktails. Please try again.')
  })

  it('should display an error page when the cocktails for the drink grid fail to fetch', () => {
    cy.visit('localhost:3000/drinks/gin')
    cy.get('section').should('have.class', 'error-page')
    cy.get('.error-message').should('have.text', 'A server error occured while we were trying to fetch your cocktails. Please try again.')
    cy.url().should('eq', 'http://localhost:3000/error')
  })

  it('should display an error page when the details for a specific cocktail fail to fetch', () => {
    cy.visit('localhost:3000/drinks/15346')
    cy.get('section').should('have.class', 'error-page')
    cy.get('.error-message').should('have.text', 'A server error occured while we were trying to fetch your cocktails. Please try again.')
    cy.url().should('eq', 'http://localhost:3000/error')
  })
})


