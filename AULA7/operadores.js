/* ATRIBUIÇÃO */

O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

deixe idade = 40

/* ARITMÉTICOS */

Nos permitem operações matemáticas

console. log ("//---> Soma = ", 10 + 15);
console. log ("/---> Subtração = ", 10 - 15);
console. log ("/---> Multiplicação = ", 10 * 15);
console. log ("/---> Divisão = ", 10 / 15);

deixar quinze = 15;
quinze++;
console. log ("//---> Incremento de um em um: 15 + 1 = ", quinze);

quinze--;
console. log ("//---> Decremento de um em um: 15 - 1 = ", quinze);

const modRestaZero = 15 % 5;
const modRestaUm = 15 % 2;
console. log ("/---> Módulo. O resto obtido da divisão de 15 por 5: 0 = ", modRestaZero);

console. log ("/---> Módulo. O resto obtido da divisão de 15 por 2: 1 = ", modRestaUm);


/**
 * PLANILHA DE DICAS - OPERADORES MATEMÁTICOS
 * 
 * [ = ] ATRIBUI
 SOMA SOMA
 * [ - - ] SUBTRAI
 MULTIPLICA
 * [ / ] DIVIDE
 * [ % ] RESTO
 * [ ++] AUMENTA UM
 * [ --] DIMINUI UM
 */

/* COMPARAÇÃO SIMPLES */

OPERADORES LÓGICOS
combinar Permitem valores booleanos e seu resultado ao mesmo tempo, também é um booleano
== , > , >= , < e <=
&&, || E !


função igual (a, b){
    retorno a == b; // qual a diferença de usar '==' e '====
}

função maior (a, b){
    retorno a > b; // > ou >=
}

função menor (a, b){
    retorno a < b; // < ou ,=
}

negacao função  (a){
    retorno!  um;
}

condicao função (a, b) {
    retornar a && b;
}

função comparacaoSimples(valorA, valorB){
    console. log("igual == ", igual(valorA, valorB ));
    console. log("maior >", maior(valorA, valorB));
    console. log("menor <", menor(valorA, valorB));
    console. log("valorA negado ! " , negacao(valorA));
    console. log("valorb negado ! " , negacao(valorB));
    console. log("condicao ", condicao(valorA, valorB));
}

comparacaoSimples(1, 1); // 0 e 1

console. Entreos que os que 2==========================","68), ================================================);
função comparacaoEstrita(){

var num = 0;
var obj = nova String("0");
var str = "0";

console. log(num === num); // true
console. log(obj === obj); // true
console. log(str === str); // true

console. log(num === obj); // falso
console. log(num === str); // falso
console. log(obj === str); // falso
console. log(nulo === indefinido); // falso
console. log(obj === nulo); // falso
console. log(obj === indefinido); // falso
}

comparacaoEstrita();

operadores defunção(valorE, valorF){
    console. log(! verdade);
    console. log(! falso);
    console. log(! ! falso);
    console. log(! ! verdade);
    
    console. log(! 1);
    console. log(! ! 1);
    console. log(! 0);
    console. log(! ! 0);
    console. log(! !"");
}

operadores();


/**
 * PLANILHA DE DICAS - OPERADORES LÓGICOS
 * 
 * [ ! ] NEGADO
 * [ tudo FALSO ]: falso, zero/0, vazios: '' ou "", nulo, indefinido, NaN, 0
 * [ tudo VERDADEIRO ]: verdadeiro, '0', 'falso', vazios: [], {}, função(){}, 1
 * [ == ] VALOR
 * [ === ] OBJETO
 */

exemplo para caso NaN - Não Um Número
divisao string por numero
"12" % 4
console. log(  ("string" / 4) );