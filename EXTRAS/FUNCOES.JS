//funcao declarada

function daroi (){
    console.log("ola tudo bem?")

}

daroi();
daroi();
daroi();

// funcao expresa usar uma variavel let, var
// pode colocar parametros que fica dentro do parenteses ex let somar = function(PARAMETRO) sempre coloca virgula

let somar = function(){
    console.log(1+1);
}

somar();

//

let somar1 = function(numA, numB){
    console.log(numA+numB);
}

somar1(1, 5);


//IMPORTANTE////IMPORTANTE////
// QUANDO QUER QUE APARECA A FUNÇÃO FORA DE OUTRA FUNCAO COLOCAR RETURN

let somar2 = function(numA, numB){
    return numA + numB;
}

somar1(2,8);

// numA e numB é um parametro

let resultado = somar2(155, 2);
console.log(resultado);

// dentro funcao declarada
let resultado2 = 0;
console.log(resultado);

function mutiplicar(numA,numB){
resultado2= numA * numB;
console.log("resultado fora da função =", resultado2);

}

mutiplicar(5,6);

// nova funcao fora da funcao

let resultado3 = 8;
console.log(resultado3);

function mutiplicar1(numA,numB){
let resultado3= numA * numB;
console.log("resultado=",resultado3);

}

mutiplicar1(10,6);


function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
   }
   multiplicarPorDoisESomarCinco(1)
   multiplicarPorDoisESomarCinco(5)
   multiplicarPorDoisESomarCinco(Erick) // Erick não é um número
   const Erick= 5
   multiplicarPorDoisESomarCinco(Erick) }