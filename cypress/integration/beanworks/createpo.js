describe('Create PO', ()=> {
    it ('go to PO page', ()=> {
        const usersJson = cy.fixture('users.json').as('users')
        const sysadmin='@users:sysadmin:user'
        const password='@users:sysadmin:pwd'
        cy.visit('https://beandev.com')
        cy.get('input[name=\'username\']')
            .type(sysadmin)
        cy.get('input[name=\'password\']')
            .type(password)
        cy.get('[method=\'post\'] button').click()
        cy.url().should('include','/#beanboard/default')

    })
})