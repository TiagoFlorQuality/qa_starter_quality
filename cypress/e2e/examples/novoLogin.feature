
Feature: Login New

 Scenario: Login Novo Usuario
        #DADO = GIVEN / QUANDO = WHEN / AND = E / THEN = ENTAO
        Given Que Esteja na Home
        When Acessar a Página de Login
        And Inserir Nome e Email
        Then Deverá inserir as credenciais de acordo com país de origem