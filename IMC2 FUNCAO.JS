let nome = "jose da Silva";
let idade = 27;
let peso = 8.5;
let altura = 1.70;
let plano = true;

function calcularimc2(altura1, peso1) {
    let imc;
    altura = altura/100;
    imc2 = peso/Math.pow(altura,2);
    return imc2;
}

let imc2 = calcularimc2(17,85);
console.log(imc2.toFixed(2));

// const IMC = (peso / altura*altura);
    //   console.log(nome,"tem",idade,"anos","e seu índice de massa corporal é de",IMC)

// function testarimc(){
//     let nomea = "Maria";
//     return console.log (nomea);
// }

// testarimc();


// console.log("=========================");

// function calcularIndiceDeMassaCorporal(altura, peso) {
//     let imc;
//     //altura em centímetros deve ser transformada para metros
//     altura = altura/100;
//     imc = peso/Math.pow(altura,2);
//     return imc;
//  }
 
// let imc = calcularIndiceDeMassaCorporal(168,80);
// console.log(imc.toFixed(2));
// console.log("=========================");

