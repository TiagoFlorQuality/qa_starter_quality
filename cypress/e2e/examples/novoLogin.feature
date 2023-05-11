
Feature: Login New

 Scenario: Login Novo Usuario
        #DADO = GIVEN / QUANDO = WHEN / AND = E / THEN = ENTAO
        Given Que Esteja na Homepage 
        When Acessar a Página de Login
        And Inserir Nome e Email Novos
        Then Aparecerá Mensagem de Cadastro Feito com Sucesso