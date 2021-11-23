// coloque comentário
let nome = "Danilo";

console.log(nome);

function testar(){
    let nomee = "ANA";
    return console.log(nomee);
}
testar();
console.log(nome);


// ESCOPO: GLOBAL: var
let teste = 1;
const fixaa;

function nova() {
    const interna;
    fixaa = 10;
    let teste2 = 0;
    return teste2;
}
// FUNÇÃO BLOCO
// PODE SER ATUALIZADO?
