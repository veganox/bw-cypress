describe('My Second Test', function() {
    it('Clicks the link "type"', function() {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        //Should be on new url which contains '/commands/actions'
        cy.url().should('include', '/commands/actions')

        //Get an input, type into it and verify the value has been updated
        cy.get('.action-email')
            .type('fake@email.com').should('have.value', 'fake@email.com')

    })
})
