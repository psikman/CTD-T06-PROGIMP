for (let volta = 1; volta <= 5; volta++) {
    console.log('Volta número: ' + volta);
   }

//while (condicao) {
    //código que será executado em cada repetição
    // Faz algo para que a condição não seja mais atendida

let volta = 1
while (volta <= 5) {
    console.log('Volta número ' + volta);
    volta++ //ao final de cada volta somará 1 à variável volta
}

let volta1 = 1
while(volta1 <= 5) {
 console.log('Volta número ' + volta1);
 volta1++
}

let volta2 = 1
while(volta2 <= 5) {
 console.log('Volta número ' + volta2);
 volta2++
}

let volta3 = 5
do{
 console.log('Volta número ' + volta3);
 volta3++ //Se soma 1 à variável volta, portanto volta será = 6
} while(volta3 <= 5); //quando o retorno é 6, a condição retorna 
//false e o bloco de código é encerrado

