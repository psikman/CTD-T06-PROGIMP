const novoParticipante = [];

const Alice = [23, 82, 46];
const bob = [45, 82, 32];

const participanteDeOutroConcurso = [28, "ana teixeira", "ateixeira@digitalhouse.com"];

function encontrarGanhador(a, b) { 

     let pontosParticipanteA = 0; 
     let pontosParticipanteB = 0;


    for (let contador = 0; contador < a.length; contador++) { 
      
        
        if (a[contador] > b[contador]) {
            // Se a[i] > b[i], então Alice recebe 1 ponto. 
            pontosParticipanteA = pontosParticipanteA +1; // ++
        } else if (a[contador] < b[contador]) {
            // Se a[i] < b[i], então Bob recebe 1 ponto. 
            pontosParticipanteB = pontosParticipanteB +1; // ++
        }

    }

    if (pontosParticipanteA > pontosParticipanteB) {
        return "Alice";
    } else if (pontosParticipanteA < pontosParticipanteB) {
        return "Bob";
    } else {
        return "OS DOIS!";
    }
} 


console.log("O ganhador é: " + encontrarGanhador (Alice, bob));

function digitalHouse(numero1, numero2)  {
    
    // A função deve imprimir na tela os números de 1 a 100
    let contador = 1; // iniciei de 1
    let numeros = []; // saida dos numeros de 1 a 100

    
    do {
        numeros.push(contador); // AÇÃO: SALVAR O NUMERO EM CADA POSICAO DO ARRAY DE RESPOSTA

        contador++; // INCREMENTO
    } while (contador <= 100); // CONDIÇÃO DE PARADA = ATÉ 100
    
  
    console.log(numeros);

    for (let i = 0; i < numeros.length; i++) { // começa da POSICAO 0 do array
        
     

        if ( numeros[i] % numero1 == 0) {
          
            numeros[i] = "Digital";
        } else if ( numeros[i] % numero2 == 0) {
         
            numeros[i] = "House";            
        } 
  
        
    }

    console.log(numeros);

}

digitalHouse();
digitalHouse(2, 3);