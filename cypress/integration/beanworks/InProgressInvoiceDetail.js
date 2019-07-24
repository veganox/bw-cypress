// Test different user access

const invoiceurl='https://beandev.com/#invoices/details/BF307D56ABC2462C2434A2F23A393E31'
const sysadminuser='sevenadmin@bean'
const password='pwd'

context('Testing Invoice InProgress Invoice Detail Page',()=>{
    beforeEach(() =>{
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
    it('Select PO Adoption Button', function(){
        cy.wait(1000)
        // select "PO Adoption button"
        cy.get("button[class='btn-sm btn btn-default']:nth-child(2)>span").click()
        cy.wait(5000)
        // add all the lines
        //cy.get("[class=\"sc-ckVGcZ iVIfOK\"]").click()
        //cy.get("[class=\"MuiButtonBase-root MuiButton-root sc-iwsKbI klfCAv MuiButton-text Mui-disabled Mui-disabled\"]").click()
        //cy.wait(1000)


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

