
let nome = "jose da Silva";
let idade = 27;
let peso = 8.5;
let altura = 1.70;
let plano = true;

// function calcularimc(altura, peso){
//     let imc;
//     altura = altura/100;
//     imc = peso/Math.pow(altura,2);
//     return imc;
// }

// let imc = calcularimc(172,85);
// console.log(nome, "tem", idade,"e seu índice de massa corporal é de",imc.toFixed(2));


function calcularimc2(idade, peso){
    let nomevariavel;
    idade = idade/100;
    imc = peso/idade;
    return nomevariavel;
}

calcularimc2(27,85);
console.log(nome,imc);


