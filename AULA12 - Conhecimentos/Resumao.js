const novoParticipante = [];

const Alice = [23, 69, 32];
const bob = [12, 67, 43]; 

function encontrarGanhador(a, b) {

    let pontosParticipanteA = 0; 
    let pontosParticipanteB = 0;

for (let contador = 0; contador < a.length; contador++) {

            console.log("contador =", contador);
            console.log("a[contador]=", a[contador]);
            console.log("b[bcontador]=", b[contador]);

            if (a[contador] > b[contador]){
                pontosParticipanteA = pontosParticipanteA +1;
            }else if (a[contador] < b[contador]){   
                pontosParticipanteB = pontosParticipanteB +1;
            }

    }

if (pontosParticipanteA > pontosParticipanteB){
        return "Alice";
}else if (pontosParticipanteA < pontosParticipanteB){
            return "Bob";
// }else (pontosParticipanteA = pontosParticipanteB){
//                 return "Empatou";
}

console.log("O ganhador é: " + encontrarGanhador (Alice, bob));

function digitaHouse(numero1,numero2){

    let contador = 1;
    let numeros = [];

do{
    numeros.push(contador);
    contador++;
    }

    while (contador <=100);

    console.log(numeros);

for (let i = 0; i < numeros.length; i++) { // começa da POSICAO 0 do array
    
     if ( numeros[i] % numero1 == 0) {
            numeros[i] = "Digital";
    } else if ( numeros[i] % numero2 == 0) {
            numeros[i] = "Digital House";            
    } 
   }
console.log(numeros);

}

digitalHouse();
digitalHouse(2, 3);}