// objetos libteraisi
// problema:
// banco
//crir um aplicatifo

// OJETIVO
//faciliar o manueio de informaçoes

// REPRESENTAR algum OJETO
// QUAL É O OBJETO? ==> conta bancaira

let contaBancaria = {
    //numero da contao = so numeros
    numeroConta: 1234,
    tipoConta: "Conta Corrente",
    //saldo: 500000,
    titularConta: "gilvan", // Objeto - usuario
    valorSaida: 5000,
    valorEntrada: 10000, //

    calcularSaldo: funcion ()
{
    return this.valorEntrada-this.valorSaida
};

    converterEuro: function (){
    return this.CalcularSaldo / 0.89
        
    }
},

funcion mostrarSAldo(){
    return console.log(contaBancaria.calcularSaldo());
}

// contaBancaria
// titular   -> usuario
// tipoConta -> 
