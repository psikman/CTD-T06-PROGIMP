// let meuPais ={
//     nome: "Brasil",
//     Capital: "Brasilia",
//     Populacao: 12555,
// }

//     console.log(meuPais.nome);

console.log("---------------------Funcao construtora");

 let meuPais1 = {
    nome: "Brasil",
    Capital: "Brasilia",
    Populacao: 12555,
    Nacionalidade: function(){
        return "Nasci no "+ this.nome;
    }
};

console.log(meuPais1.Nacionalidade());

console.log("---------------------Funcao construtora, MOLDES");


let carro = {
marca:"Fiat",
modelo:"Uno",
};

function Carro(valorMarca,valorModelo){
    this.marca = valorMarca;
    this.modelo = valorModelo;
}

console.log(Carro);

console.log(new Carro("Renault", "Clio"));
console.log(new Carro("t", "Co"));

      