/*
1 ͦ Checkpoint de Programação Imperativa!
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo
 com sua vontade. Se o tempo
 informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato 
inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve
 exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: 
"Prato pronto, bom apetite!!!".
*/

/*1 - PIPOCA
tempoPadrao = 10s
tempoUsuario = x
SE tempoUsuario > 2*tempoPadrao = PIPOCA QUEIMOU
SE tempoUsuario < tempoPadrao = TEMPO INoUsuario > 3*tempoPadrao = KABUM
SENÃO = PRATO PRONTO*/


let comida = "Pipoca";
let tempoUsuario = 25;

switch (comida){
    case "Pipoca":
        tempoPadrao = 10;
        codComida = 1;
        break;
    case "Macarrao":
        tempoPadrao = 8;
        codComida = 2;
        break;
    case "Carne":
        tempoPadrao = 15;
        codComida = 3;
        break;
    case "Feijao":
        tempoPadrao = 12;
        codComida= 4;
        break;
    case "Brigadeiro":
        tempoPadrao = 8;
        codComida = 5;
        break;
    default:
        tempoPadrao = tempoUsuario;
        codComida = 0;
}

if (tempoUsuario == 0){
    tempoUsuario = tempoPadrao
}

function microondas(codComida,tempoUsuario,tempoPadrao) {
    if (codComida == 0) {
        console.log("Prato Inexistente");
    } else if (tempoUsuario >= tempoPadrao * 3) {
        console.log("kabumm");
    } else if (tempoUsuario >= tempoPadrao * 2){
        console.log("A comida queimou");
    } else if (tempoUsuario < tempoPadrao) {
        console.log("Tempo Insuficiente");
    }

    console.log("Prato pronto, bom apetite!!!")
}

microondas(codComida,tempoUsuario,tempoPadrao);
    
    
   