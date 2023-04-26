import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

// Cenário do Exercicio Cypress

Given('Que Esteja na Homepage', () => {
    cy.visit("https://automationexercise.com/")
});

When('Acessar a Página de Login', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
});

And('Digitar Credenciais Erradas e Clicar no Submit', () => {
    cy.get('[data-qa="login-email"]').type("teste@login.com.br")
    cy.get('[data-qa="login-password"]').type("Teste#123321",{log: false})
    cy.get('[data-qa="login-button"]').click()
});

Then('Mensagem de Erro Deve Aparecer', () => {
    cy.get('.login-form > form > p').should('have.text', "Your email or password is incorrect!")
});
