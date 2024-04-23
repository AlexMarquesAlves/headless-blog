describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('title').contains('Headless Blog App')
    cy.get('h1').should('be.visible').should('have.text', 'Home')
  })
})
