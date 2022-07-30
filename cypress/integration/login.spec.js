/// <reference types="cypress" />
let dadosLogin

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Login com sucesso usando Comando customizado', () => {
        cy.login(dadosLogin.usuario, dadosLogin.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    });
})