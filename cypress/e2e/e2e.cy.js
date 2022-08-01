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

    beforeEach(() => {
        cy.visit('/produtos')  
        it('Login com sucesso usando Comando customizado', () => {
            cy.login(dadosLogin.usuario, dadosLogin.senha)
        });
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
         cy.get('.woocommerce-message > .button').click()
         cy.get('.checkout-button').click()

         cy.get('#billing_first_name').type("Luis")
         cy.get('#billing_last_name').type("Fernando")
         cy.get('#billing_company').type("EbacAula")
         cy.get('#billing_address_1').type("Rua Castanheiras")
         cy.get('#billing_address_2').type("Apartamento n.302")
         cy.get('#billing_city').type("São Paulo")
         cy.get('#billing_postcode').type("70070900")
         cy.get('#billing_phone').type("61999999999")
         cy.get('#billing_email').type("fernadodesampa@ebac.com")
         cy.get('#terms').click()
         cy.get('#place_order').click()

    });


})