
const chave = Cypress.env('key')
const token = Cypress.env('token')

Cypress.Commands.add('api_criarBoard', () => {
    cy.api({
        method: 'POST',
        url: 'https://api.trello.com/1/boards',
        qs: {
            name: 'Teste vai',
            key: chave,
            token: token
    
        }
    })
})


Cypress.Commands.add('api_consultarBoard',() => {
    cy.api_criarBoard().then(res => {
        cy.log(res.body.id)
        cy.api({
            method: 'DELETE',
             url: `/1/boards/${res.body.id}`,
        
            qs: {
             
                key: chave,
                token: token
        
            }


        })
    })
    
       
    })



    



