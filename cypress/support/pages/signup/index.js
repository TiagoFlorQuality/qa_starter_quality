/// <reference types = "cypress"/>
const novoLogin = require ("./elements").ELEMENTS //fazendo require no ELEMENTS   

class novoAcesso{
     acessSite(){
          cy.visit(novoLogin.login)
      }

     loginPage (){
          cy.get(novoLogin.acessoLogin).click()
      } 

      newName(){
          cy.get(novoLogin.nameInput).type('Teste QA')
     }

     newEmail(){
          cy.get(novoLogin.emailInput).type("testeSenhaNova@login.com.br")
     }

     newbuttonSignup(){
          cy.get(novoLogin.buttonSignup).click()
     }

     newPassword(){
          cy.get(novoLogin.password).type('123423@123')
     }

     newfirstName(){
          cy.get(novoLogin.firstName).type("Tiago")
     }

     newlastName(){
          cy.get(novoLogin.lastName).type("Teste")
     }

     newCompany(){
          cy.get(novoLogin.company).type("Quality")
     }
     newAdress1(){
          cy.get(novoLogin.adress1).type('Rua Frei Jacinto Infantino')

     }
     newAdress2(){
          cy.get(novoLogin.adress2).type('Rua Frei Jacinto Infantino2')
     }
     newState(){
          cy.get(novoLogin.state).type('RJ')
     }
     newCity(){
          cy.get(novoLogin.city).type('Rio de Janeiro')
     }
     newZipcode(){
          cy.get(novoLogin.zipcode).type('22793-315')
     }
     newmobileNumber(){
          cy.get(novoLogin.mobileNumber).type('+55 21 99999-9999')

     }
     //Exercicio 4 - 25/05 - 01/06
     newvisitProduct(){
          cy.visit(novoLogin.visitProduct)
     }
     newimageWoman(){
          cy.get(novoLogin.imagewomanId)
     }
     newquantityId(){
          cy.get(novoLogin.quantityId).clear().type('5')
     }
     newaddcartClass(){
          cy.get(novoLogin.addcartClass).click()
     }
     newnameAtribute(){
          cy.get(novoLogin.nameAtribute).type('Teste Nome Atributo')
     }
     newemailAtribute(){
          cy.get(novoLogin.emailAtribute).type('teste-email@teste.com.br')
     }
     newreviewId(){
          cy.get(novoLogin.reviewId).type('Teste utilizando captura de Elemento pelo #ID')
     }
     newbuttonreviewId(){
          cy.get(novoLogin.buttonreviewId).click()
     }
     newbuttonAdded(){
          cy.get(novoLogin.buttonAdded).click()
     }

}

export default new novoAcesso