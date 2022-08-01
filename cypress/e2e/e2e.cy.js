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
        
        
        beforeEach(() => {
            cy.visit('/produtos')
    });

    afterEach(() => {
        cy.screenshot()
    });

  
    it('Deve adicionar 4 produtos ao carrinho usando Comando customizado', () => {
       //produto 1
        cy.get('.post-6588 > .product-block').click()
        cy.get('.single_add_to_cart_button').click()

        //produto 2
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.contains("[25790649] Produto Lgc2").click()
        cy.get('.single_add_to_cart_button').click()

        //produto 3
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.contains("[67772408] Produto Lgc2").click()
        cy.get('.single_add_to_cart_button').click()
       
         //produto 4
         cy.get('.logo-in-theme > .logo > a > .logo-img').click()
         cy.contains('[2417589] Produto Lgc2').click()
         cy.get('.single_add_to_cart_button').click()

         //finalizando pedido
        cy.addProduto('Beatriz', 'Barreto', 'EbacAula', 'Rua Castanheiras', '302', 'São Paulo', '70070900', '11999999999', 'fernadodesampa@ebac.com' )
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})