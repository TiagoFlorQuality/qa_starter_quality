
Feature: Login New

 Scenario: Login Novo Usuario
        #DADO = GIVEN / QUANDO = WHEN / AND = E / THEN = ENTAO
        Given Que Esteja na Homepage 
        When Acessar a Página de Login
        And Inserir Nome e Email Multi
        Then Deverá inserir as credenciais de acordo com país de origem