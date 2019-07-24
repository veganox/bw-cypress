describe('Invoice', ()=>{
    it('success', ()=> {
        cy.visit('http://beandev.com')
        cy.get('[name="username"').type('hadmin')
        cy.get('[name="password"').type('pwd')
        cy.get('form[method="post"]').submit()
        cy.url().should('include','/#beanboard/default')
        /*cy.get('#invoices/arrivals')
        cy.get('button#uploadImages').click()
        cy.fixture('invoice1.png')
            .then(fileContent => {
                cy.get('#imageUploader').upload(
                    { fileContent, fileName: 'invoice1.png', mimeType: 'image/png' },
                    { subjectType: 'drag-n-drop'}
                );
            });
        cy.get('button.save-images:contains("Upload")').click()
*/
        /*

       cy.fixture('invoice1.png')
           .then(img => {
               cy.get('input[name="files[]"')
                   .click()

                   .then(el => {
                       return Cypress.Blob.base64StringToBlob(img, 'image/png')
                           .then(bolb => {
                               Array.from(el[0].files)[0] = img
                               el[0].dispatchEvent(new Event('change', {bubbles: true}))
                           })
                   })

            })

         */
        cy.wait(1000)
        cy.get('button#createInvoices').click();
    })
})