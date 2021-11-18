const novoParticipante = []; // este é APENAS um exemplo

const alice = [23, 82, 46]; // cada posição do array do participante é o RESULTADO de uma rodada votação
const bob = [45, 82, 32];

const participanteDeOutroConcurso = [28, "ana teixeira", "ateixeira@digitalhouse.com"];

function encontrarGanhador(a, b) { 
    let pontosParticipanteA = 0; // participante a = parâmetro a
    let pontosParticipanteB = 0; // participante b = parâmetro b

    for (let contador = 0; contador < a.length; contador++) { // arrays iguais
       
        
        if (a[contador] > b[contador]) {
          
            pontosParticipanteA = pontosParticipanteA +1; // ++
        } else if (a[contador] < b[contador]) {
          
            pontosParticipanteB = pontosParticipanteB +1; // ++
        }

    }
