describe('Home page', () => {
  it('should see jokes on home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('h2').contains('Jokes')
    cy.get('p[data-testid="joke-item"]').should('have.length', 10)
  })
})

export {}
