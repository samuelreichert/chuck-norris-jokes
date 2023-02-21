describe('Home page', () => {
  it('should see jokes on home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('h2').contains('Jokes')

    // favourites page
    cy.contains('Favourites').click()
    cy.location('pathname').should('eq', '/favourites')
    cy.go('back')
  })
})

export {}
