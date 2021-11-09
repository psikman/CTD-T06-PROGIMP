//SWITCH CASE
// É USADO PARA CONTROLE DE FLUXO
// ELE VAI TER CONDI A SEREM ATENDIDAS

// 4 ELEMENTROS
// INICIA A ESTRUTURA // 
// CASE VAI SER UMA OPÇÃO POSSIVEL
// BREAK - INDICA O TERMINO DO CASO. É ESSENCIAL 

//CASO DE SWITCH
/*É USADO PARA CONTROLE DE FLUXO
ELE VAI TER CONDIÇÕES A SER ATENDIDAS OU NÃO, IGUAL A ESTRUTURA DE IF-ELSE

Switch: Iniciar o switch, e ter na frente à variável que deve validar;
Caso: Criação de um novo caso possível,
tendo a frente o valor que a variável deve ter para executar esse caso;

Quebra: Indica o término do caso.
É essencial utilizar para que não continue a execução de outros casos, como o padrão;

Padrão: Semelhante ao outro da estrutura se,
significa um último recurso se nenhum dos casos tem se iniciado,
como o nome diz, é um caso padrão.*//

 qualOMesfunção(valor) {
    1 a 12
    switch (valor) {
        caso '1': // (valor < 0)
            console. log("JANEIRO");
            chamarNovaFuncao();
            Break;
        caso '2':
            console. log("FEVEREIRO");
            quebrar;
        caso '3':
            console. log("MARÇO");
            quebrar;
        caso '4':
            console. log("ABRIL");
            quebrar;
        caso '5':
            console. log("MAIO");
            quebrar;
        caso '6':
            console. log("JUNHO");
            quebrar;
        caso '7':
            console. log("JULHO");
            quebrar;
        caso '8':
            console. log("AGOSTO");
            quebrar;
        caso '9':
            console. log("SETEMBRO");
            quebrar;
        caso '10':
            console. log("OUTUBRO");
            quebrar;
        caso '11':
            console. log("NOVEMBRO");
            quebrar;
        caso '12':
            console. log("DEZEMBRO");
            quebrar;
        padrão:
            console. log("Mês INVÁLIDO");
            quebrar;
    }

}

qualOMes(0);
qualOMes('6');
qualOMes('1');
qualOMes('13');