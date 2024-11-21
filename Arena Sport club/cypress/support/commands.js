// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    cy.get('.nav-item').click()
    cy.get('.dropdown-menu > :nth-child(1)').click()
    cy.get('#formBasicEmail').type(email)
    cy.get('#formBasicPassword').type(password)
    cy.get('.btn-success').click()
  })

  Cypress.Commands.add('logout', () => {
    cy.get('.nav-item').click()
    cy.get('.dropdown-item').click()
  })
  
  Cypress.Commands.add('favoriteSidebarItem', (itemSelector) => {
    cy.get(itemSelector).click()
  })
  
  Cypress.Commands.add('searchAndSelect', (searchTerm, resultSelector) => {
    cy.get('.search-header').type(`${searchTerm}{enter}`)
    cy.wait(3000)
    cy.get(resultSelector).click()
  })
  
  Cypress.Commands.add('navigateAndVerifyUrl', (selector, expectedUrl) => {
    cy.get(selector).click()
    cy.url().should('include', expectedUrl)
  })