// Test different user access

const baseurl = 'https://beanworks.ca'
const invoiceurl='https://beanworks.ca/signin#invoices/inprogress'
const sysadminuser='systemadmin@smoke.bean'
const password='pwd'

context('Testing Invoice InProgress',()=> {
    beforeEach(() => {
        cy.visit(invoiceurl)
        cy.contains('Beanworks')
        cy.contains('Sign In')
        cy.contains('Forgot your password')
        //Get an input, type into it and verify the value has been updated
        cy.get('input[name=\'username\']')
            .type(sysadminuser)
        cy.get('input[name=\'password\']')
            .type(password)
        cy.get('[method=\'post\'] button').click()
    })
    it('Invoice admin user should display all invoice tab', function () {
        cy.get('a[href=\'#invoices/arrivals\']')
        cy.get('a[href=\'#invoices/inprogress\']')
        cy.get('a[href=\'#invoices/approvals\']')
        cy.get('a[href=\'#invoices/export\']')
        cy.get('a[href=\'#invoices/archived\']')
    })
    it('Invoice InProgress default table', function () {
        cy.contains('OU')
        cy.contains('Invoice Number')
        cy.contains('Date')
        cy.contains('Vendor')
        cy.contains('Account')
        cy.contains('Due')
        cy.contains('Owner')
        cy.contains('Description')
        cy.contains('Total')
        cy.contains('Actions')
    })
    it('check number of invoices', function () {
        // check for next and previous

    })
    it('Select one of the invoices', function(){
        cy.get('tr[class=\'odd dt-row\']').first().dblclick()
        cy.url().should('include','/details')
    })
    afterEach(() => {
        cy.wait(1000)
        cy.get('a[class=\'dropdown-toggle\']').click()
        cy.get('a[id=\'signOut\']').click()
    })
})

Cypress.on('uncaught:exception',(err, runnable) => {
    return false
})

