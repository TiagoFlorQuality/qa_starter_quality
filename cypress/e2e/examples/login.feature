Feature: Login

    Scenario: Login Access
        #DADO = GIVEN / QUANDO = WHEN / AND = E / THEN = ENTAO
        Given Que Esteja na Homepage 
        When Acessar a Página de Login
        And Digitar Credenciais Erradas e Clicar no Submit
        Then Mensagem de Erro Deve Aparecer

   