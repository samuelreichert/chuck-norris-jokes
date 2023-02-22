describe('Home page', () => {
  it('should see jokes on home page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h2').contains('Jokes')

    cy.get('[data-testid="jokes-list"]').should('be.visible')
    cy.get('[data-testid="joke-item"]').should('be.visible')
  })

  it('should be able to add a favourite', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('button', 'Favourite').should('be.visible').click()

    cy.contains('Favourites').click()
    cy.get('[data-testid="favourites-item"]').should('have.length', 1)
  })
})

describe('Favourites page', () => {
  const addFavourite = () => {
    cy.contains('Home').click()
    cy.contains('button', 'Favourite').should('be.visible').click()
    cy.go('back')
  }
  it('should see an empty page', () => {
    cy.visit('http://localhost:3000/favourites')
    cy.contains('No favourites yet...').should('be.visible')
  })
  it('should see the added favourite', () => {
    cy.visit('http://localhost:3000/favourites')
    addFavourite()
    cy.get('[data-testid="favourites-item"]').should('be.visible')
  })
  it('should be able to remove a favourite', () => {
    cy.visit('http://localhost:3000/favourites')
    addFavourite()
    cy.contains('button', 'Remove').should('be.visible').click()
    cy.contains('No favourites yet...').should('be.visible')
  })
})

export {}
