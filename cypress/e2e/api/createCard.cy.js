

describe('POST card',()=> {
    const chave = Cypress.env('key')
    const token = Cypress.env('token')

    let idBoard;
    let idList;
    let idCard


    it("Criar Board", () => {
        cy.api({
            method: 'POST',
            url: `/1/boards`,
            qs: {
                name: 'Teste para Criar Card no Board',
                key: chave,
                token: token

            },
        }).then((response) => {
            idBoard = response.body.id;
            expect(response.status).to.equal(200);
          
            

        })
    })

    it("Lista do Quadro", () => {
        cy.api({
            method: 'GET',
            url: `/1/boards/${idBoard}/lists`,
            qs: {
                key: chave,
                token: token

            },
        }).then((response) => {
            idBoard = response.body.id;
            expect(response.status).to.equal(200);
            idList = response.body[0].id;
           
 
        })

    })


    it("Criar Card", () => {
        cy.api({
            method: 'POST',
            url: `/1/cards`,
            qs: {
                
                idList: idList,
                key: chave,
                token: token,
                name: "Criando Card"

            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            idCard = response.body.id;
            



        })
    })

    it("Criar card  com idList invalido/inexistente", () => {
        cy.api({
            method: 'POST',
            url: `/1/cards`,
            qs: {
                
                idList: '1023043435353',
                key: chave,
                token: token,
                name: "Criando Card"

            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal("invalid value for idList")
            



        })
    })
        


    it("Consultar card", () => {
        cy.api({
            method: 'GET',
            url: `/1/cards/${idCard}`,
            qs: {
                key: chave,
                token: token

            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            idCard = response.body.id;
            idBoard = response.body.idBoard
            cy.log(idBoard)



        })
    })

    it("Deletar  card", () => {
        cy.api({
            method: 'DELETE',
            url: `/1/cards/${idCard}`,
            qs: {
                key: chave,
                token: token
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
        })
    })


    it("Consultar Cartao Deletado", () => {
        cy.api({
            method: 'GET',
            url: `/1/cards/${idCard}`,
            qs: {
                key: chave,
                token: token

            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body).to.equal("The requested resource was not found.")

          

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






    

})