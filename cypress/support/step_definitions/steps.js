import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import signup from "../pages/signup";
import { faker } from '@faker-js/faker';


Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

// Tarefa 2 Cenário do Exercicio Cypress

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


// Criando novo Login - Exercicio 3


Given('Que Esteja na Homepage', () => {
    signup.loginFunction() //puxando import
});

When('Acessar a Página de Login', () => {
    signup.loginPage()
});

And('Inserir Nome e Email Novos', () => {
    signup.newName()
    signup.newEmail()
    signup.newbuttonSignup()
});


//const randomFirstName = faker.name.firstName(); 
//const randomPassword = faker.internet.email();
Then('Aparecerá Mensagem de Cadastro Feito com Sucesso', () => {
    signup.newPassword()
    signup.newfirstName()
    signup.newlastName()
    signup.newCompany()
    signup.newAdress1()
    signup.newAdress2()
    signup.newState()
    signup.newCity()
    signup.newZipcode()
    signup.newmobileNumber()

});