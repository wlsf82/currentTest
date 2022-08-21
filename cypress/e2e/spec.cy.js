describe('walmyr.dev', () => {
  beforeEach(() => cy.visit('https://walmyr.dev', { log: false }))

  it.skip('test 1', () => {
    cy.log(this.test.title) // ! TypeError - Cannot read property of undefined (reading 'test')
  })

  it('test 2', function() {
    cy.log(this.test.title)
  })

  it('test 3', () => {
    cy.log(Cypress.currentTest.title)
  })

  it('test 4', function() {
    cy.log(Cypress.currentTest.title)
  })
})
