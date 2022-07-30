class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone) {
        cy.get('#billing_first_name').click().type(nome)
        cy.get('#billing_last_name').type(sobrenome)    
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')        
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('.button').click()
        
    }

}

export default new EnderecoPage()