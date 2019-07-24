// Test different user access

const baseurl = 'https://beanworks.ca/signin'
const sysadminuser='systemadmin@smoke.bean'
const password='pwd'

context('Login to Beanworks',()=>{
    beforeEach(() =>{
        cy.visit(baseurl)
        cy.contains('Beanworks')
        cy.contains('Sign In')
        cy.contains('Forgot your password')
    })
    it('Login', function(){
        //Get an input, type into it and verify the value has been updated
        cy.get('input[name=\'username\']')
            .type(sysadminuser)
        cy.get('input[name=\'password\']')
            .type(password)
        cy.get('[method=\'post\'] button').click()
        cy.url().should('include','/#beanboard/default')

        // select navigation menu
        cy.get('i[class=\'icon-double-angle-right\']').click()
        //Purchase Order Links
        cy.get('a[href=\'#pos/create\']')
        cy.get('a[href=\'#pos/inprogress\']')
        cy.get('a[href=\'#pos/approvals\']')
        cy.get('a[href=\'#pos/committed\']')
        cy.get('a[href=\'#pos/closed\']')

        //Invoice Links
        cy.get('a[href=\'#invoices/arrivals\']')
        cy.get('a[href=\'#invoices/inprogress\']')
        cy.get('a[href=\'#invoices/approvals\']')
        cy.get('a[href=\'#invoices/export\']')
        cy.get('a[href=\'#invoices/archived\']')

        //Payment Links
        cy.get('a[href=\'#payments/create\']')
        cy.get('a[href=\'#payments/inprogress\']')
        cy.get('a[href=\'#payments/approvals\']')
        cy.get('a[href=\'#payments/releases\']')
        cy.get('a[href=\'#payments/paid\']')
        cy.get('a[href=\'#payments/archived\']')
        cy.get('a[href=\'#payments/report\']')

        // unselect navigation menu
        cy.get('i[class=\'icon-double-angle-left\']').click()
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

