/*context('Querying', () => {
    beforeEach(()=>{
        cy.visit('https://beandev.com')
        }
    )
    })
*/
const baseurl = 'https://beanworks.ca'
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
    })
    afterEach(() => {
        cy.wait(1)
        cy.get('a[class=\'dropdown-toggle\']').click()
        cy.get('a[id=\'signOut\']').click()
    })
})

Cypress.on('uncaught:exception',(err, runnable) => {
    return false
})

