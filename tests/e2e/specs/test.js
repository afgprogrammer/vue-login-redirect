// https://docs.cypress.io/api/introduction/api.html

describe('Login test', () => {
  it('Visits the login page', () => {
    cy.visit('/login')
    cy.contains('h1', 'Login')
  })

  it('it should redirect user to home page', () => {
    cy.visit('/login')
    cy.get('#login').click()
    cy.wait(2000)
    cy.request('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})
