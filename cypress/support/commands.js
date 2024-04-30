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
Cypress.Commands.add("loginToTrello",()=>{
cy.visit("/login")
<<<<<<< HEAD
cy.get("#username").type("sweitirinan@gmail.com")
cy.get("#login-submit").click()
//cy.origin("https://id.atlassian.com",()=>{

    cy.get("#password").type("Malik@123" + "{enter}")

//})


})
//it("",()=>{
//cy.origin("https://trello.com",()=>{
=======
cy.get("#user").type("sweitirinan@gmail.com")
cy.get("#login").click()
cy.origin("https://id.atlassian.com",()=>{

    cy.get("#password").type("Malik@123" + "{enter}")

})


})
>>>>>>> 80c1180801c16c90e00cd6d14142fdee12a9a14f
Cypress.Commands.add("findByTestId",(testId)=>{

cy.get(`[data-testid=${testId}]`)

<<<<<<< HEAD
})
//})
//})

=======
})
>>>>>>> 80c1180801c16c90e00cd6d14142fdee12a9a14f
