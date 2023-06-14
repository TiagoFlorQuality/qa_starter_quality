/// <reference types = "cypress"/>
const elNovoacessoMultilanguage = require("./elements").ELEMENTS //fazendo require no ELEMENTS   

class novoAcessoMultilanguage {
     acessSite() {
          cy.visit(elNovoacessoMultilanguage.login)
     }

     loginPage() {
          cy.get(elNovoacessoMultilanguage.acessoLogin).click()
     }

     newName() {
          cy.get(elNovoacessoMultilanguage.nameInput).type('Teste QA')
     }

     newEmail() {
          cy.get(elNovoacessoMultilanguage.emailInput).type("testeSenhaNova@login.com.br")
     }

     newbuttonSignup() {
          cy.get(elNovoacessoMultilanguage.buttonSignup).click()
     }

     newPassword() {
          cy.get(elNovoacessoMultilanguage.password).type('123423@123')
     }

     // a partir daqui

     newfirstNameMulti() {

          if (Cypress.env('country') == "US") {
               cy.get(elNovoacessoMultilanguage.firstName).type("James")
          }
          if (Cypress.env('country') == "ES") {
               cy.get(elNovoacessoMultilanguage.firstName).type("Thiago")
          }
          if (Cypress.env('country') == "BR") {
               cy.get(elNovoacessoMultilanguage.firstName).type("Tiago")
          }
     }

     newlastNameMulti() {

          if (Cypress.env('country') === "US") {
               cy.get(elNovoacessoMultilanguage.lastName).type("Test")
          } if (Cypress.env('country') === "ES") {
               cy.get(elNovoacessoMultilanguage.lastName).type("Prueba")
          } else if (Cypress.env('country') === "BR") {
               cy.get(elNovoacessoMultilanguage.lastName).type("Teste")
          }
     }

     newCompanyMulti() {

          if (Cypress.env('country') === "US") {
               cy.get(elNovoacessoMultilanguage.company).type("Quality Software")
          } if (Cypress.env('country') === "ES") {
               cy.get(elNovoacessoMultilanguage.company).type("Programa de Calidad")
          } else if (Cypress.env('country') === "BR") {
               cy.get(elNovoacessoMultilanguage.company).type("Qualidade de Software")
          }
     }
     newAdress1Multi() {

          if (Cypress.env('country') === "US") {
               cy.get(elNovoacessoMultilanguage.adress1).type('Infinite Loop')
          } if (Cypress.env('country') === "ES") {
               cy.get(elNovoacessoMultilanguage.adress1).type('Calle Agustina de Saragossa')

          } else if (Cypress.env('country') === "BR") {
               cy.get(elNovoacessoMultilanguage.adress1).type('Rua Frei Jacinto Infantino')
          }
     }
     newAdress2Multi() {
          if (Cypress.env('country') === "US") {
               cy.get(elNovoacessoMultilanguage.adress2).type('Infinite Loop')
          } if (Cypress.env('country') === "ES") {
               cy.get(elNovoacessoMultilanguage.adress2).type('Calle Agustina de Saragossa')
          } else if (Cypress.env('country') === "BR") {
               cy.get(elNovoacessoMultilanguage.adress2).type('Rua Frei Jacinto Infantino')
          }

     }
     newStateMulti() {

          if (Cypress.env('country') === "US") {
               cy.get(elNovoacessoMultilanguage.state).type('California')
          } if (Cypress.env('country') === "ES") {
               cy.get(elNovoacessoMultilanguage.state).type('Barcelona')
          } else if (Cypress.env('country') === "BR") {
               cy.get(elNovoacessoMultilanguage.state).type('RJ')
          }
     }
     newCityMulti() {

          if (Cypress.env('country') === "US") {
               cy.get(elNovoacessoMultilanguage.city).type('Silicon Valley')
          } if (Cypress.env('country') === "ES") {
               cy.get(elNovoacessoMultilanguage.city).type('Saragossa')
          } else if (Cypress.env('country') === "BR") {
               cy.get(elNovoacessoMultilanguage.city).type('Rio de Janeiro')
          }
     }
     newZipcodeMulti() {

          if (Cypress.env('country') === "US") {
               cy.get(elNovoacessoMultilanguage.zipcode).type('95014')
          } if (Cypress.env('country') === "ES") {
               cy.get(elNovoacessoMultilanguage.zipcode).type('08017')
          } else if (Cypress.env('country') === "BR") {
               cy.get(elNovoacessoMultilanguage.zipcode).type('22793-315')
          }
     }
     newmobileNumberMulti() {

          if (Cypress.env('country') === "US") {
               cy.get(elNovoacessoMultilanguage.mobileNumber).type('1-800-275-2273')

          } if (Cypress.env('country') === "ES") {
               cy.get(elNovoacessoMultilanguage.mobileNumber).type('900812703')

          } else if (Cypress.env('country') === "BR") {
               cy.get(elNovoacessoMultilanguage.mobileNumber).type('+55 21 99999-9999')
          }

     }
}

export default new novoAcessoMultilanguage