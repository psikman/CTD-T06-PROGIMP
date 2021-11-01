/*
Funções Simples
1. Crie uma função que converta polegadas em centímetros.
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

2. Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.
6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.
*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura. .*/

let polegadas = 5;
let centimetros = 2.54;

// parametro = polegada1
function convert(polegada1){
    centimetros = polegada1*2.54;
    return centimetros;
}

console.log(convert(polegadas));
console.log(convert(10));

//polegadas da linha 29 esta relacionado com a linha 20, se nome le o valor que esta no igual, se numero le o numero



