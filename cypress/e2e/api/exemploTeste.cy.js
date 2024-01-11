describe('GET Boards', () => {
    const chave = Cypress.env('key')
    const token = Cypress.env('token')

    it("Retorna os boards cadastrados", () => {
        cy.api({
            method: 'GET',
            url: 'https://api.trello.com/1/members/me/boards',
            qs: {
                key: chave,
                token: token

            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(response.body)



        })
    })
})
