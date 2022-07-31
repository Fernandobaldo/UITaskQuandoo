import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
source = 'http://the-internet.herokuapp.com/login'

Given('access test page', function () {
    cy.visit(source)
})

When('fill the required fields', function (table) {
    const { username, password } = table.rowsHash();
    cy.log('arguments', table);

    cy.get('#username').should('be.visible')
        .type(username);

    cy.get('#password').should('be.visible')
        .type(password)
})

Then('click to login', function () {
    cy.get('.radius').click()

})

And('should be logged to the page', function () {
    cy.get('#flash').should(($msg) => {
        expect($msg, 'msg').to.contain('You logged into a secure area!')
    
      })
})

And('logout to the page', function () {
    cy.contains('Logout').click()
    cy.get('#flash').should(($msg2) => {
        expect($msg2, 'msg').to.contain('You logged out of the secure area!')
    })
})