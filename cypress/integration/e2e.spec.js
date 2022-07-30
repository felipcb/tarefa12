/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/nome-funcionliada.page'
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos')
        it('Login com sucesso usando Comando customizado', () => {
            cy.login(dadosLogin.usuario, dadosLogin.senha)
        });
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve adicionar produto ao carrinho usando Comando customizado', () => {
        cy.addProduto(8, 36, 'Black', 2)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

})