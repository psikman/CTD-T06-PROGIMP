
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