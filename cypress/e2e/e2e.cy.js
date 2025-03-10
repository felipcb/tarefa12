/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/nome-funcionliada.page'
const dadosEndereco = require('../fixtures/endereco.json')
let dadosLogin

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

        it('', () => {
            cy.visit('/minha-conta')  
            cy.login('standard@ebac.com', 'teste@teste.com')
        });
        
    afterEach(() => {
        cy.screenshot()
    });

  
    it('Deve adicionar 4 produtos ao carrinho e finalizar compra', () => {
        cy.addProduto('.post-3073 > .product-block', '.button-variable-item-33', '.button-variable-item-Brown') 
        cy.addProduto('.post-3374 > .product-block', '.button-variable-item-36', ':nth-child(2) > .value > .variable-items-wrapper > .variable-item')

        //finalizando pedido
        cy.cadastro('Beatriz', 'Barreto', 'EbacAula', 'Rua Castanheiras', '302', 'São Paulo', '70070900', '11999999999', 'fernadodesampa@ebac.com' )
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')    
    });

})