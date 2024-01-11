describe('Board',()=> {
    const chave = Cypress.env('key')
    const token = Cypress.env('token')
    let idBoard;

    it("Criar Board", () => {
        cy.api({
            method: 'POST',
            url: `/1/boards`,
            qs: {
                name: 'Teste 2456',
                key: chave,
                token: token

            },
        }).then((response) => {
            idBoard = response.body.id;
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal('Teste 2456');
            

        })
    })

    it('Criar Board com  key invalido', () => {
        cy.api({
            method: 'POST',
            url: `/1/boards`,
            qs: {
                name: 'Teste 2456',
                key: '1234',
                token: token

            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(401);
            expect(response.body).to.equal('invalid key')

     

    })
})

    it('Criar Board com  token invalido', () => {
        cy.api({
            method: 'POST',
            url: `/1/boards`,
            qs: {
                name: 'Teste 2456',
                key: chave,
                token: 'ATTA28665f7888819d19b276416'

            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(401);
            expect(response.body).to.equal('invalid app token')

     

        })
    })


    it("Consultar Board", () => {
        cy.api({
            method: 'GET',
            url: `/1/boards/${idBoard}`,
            qs: {
                key: chave,
                token: token

            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal('Teste 2456');




        })
    })


    it("Delete Board", () => {

        cy.api({
            method: 'DELETE',
            url: `/1/boards/${idBoard}`,
            qs: {

                key: chave,
                token: token

            },

        }).then((response) => {
            expect(response.status).to.equal(200);
         



        })
    })


    it.only("Delete id Board invalido", () => {

        cy.api({
            method: 'DELETE',
            url: `/1/boards/34343434`,
            qs: {

                key: chave,
                token: token

            },

        }).then((response) => {
            expect(response.status).to.equal(200);
         



        })
    })


    it("Consultar Board deletado", () => {
      
        cy.api({
            method: 'GET',
            url: `/1/boards/${idBoard}`,
            qs: {
                key: chave,
                token: token

            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body).to.contain('resource was not found.')



        })
    })



        it.only('Teste ', () => {
            cy.api_consultarBoard()
             .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body.name).to.equal('Teste vai')
                cy.log(response.body.id)

             })
            
            
        });


       
    })



    

