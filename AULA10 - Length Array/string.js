//length

console.log("ola mundo".length);

//

let texto = "ola mundo"
console.log(texto.length);

//indexOf

console.log(texto.indexOf("s"))

// slice

console.log(texto.slice(3,8))

//trim

"sou um ser human".trim();
console.log("sou um ser human".trim());
 
// string em um array

"Sou do planeta terra".split(" ");
//["sou","do","planeta","terra"]

"sou programador php".replace
("php","javascrit")

//split coloca uma string em array

console.log(texto.split(" "))

//replace///////////////////////////////////////////////

console.log(texto.replace("gilvan","lucas"))

// replace criar com uma variavel

let textonovo = texto.replace("gilvan","lucas");
console.log(textonovo);

// array ////////////////////////////////

let meuarray = [texto, true, 23];

// push()  ////////////////////////////////////////////////

let cores = ["roxo","amarelo","preto"];
cores.push=["laranja"]; //retorna 4

console.log (cores)

//["roxo","amarelo","preto","laranja"]

cores.push=["cinza","vermelho"]; //retorna 6

console.log (cores)
//["roxo","amarelo","preto","laranja","cinza","vermelho"]

//.pop() elimina o ultimo parametro - retornar o elemento eliminado//////////////////////

let cores1 = ["roxo","amarelo","preto"];
let ultimacor = cores.pop()

console.log(cores)//["roxo","amarelo"]
console.log(ultimacor)//preto


//shift () elimina o primeiro parametro/////////////////////////////////////////////////////

let cores2 = ["roxo","amarelo","preto"];
let ultimacor3 = cores.shift()

console.log(cores)//["roxo","amarelo"]
console.log(ultimacor)//preto

//unshift () adiciona um ou mais elementos no inicio de um array///////////////////////////////

let cores7 = ["amarelo","preto"];
cores.unshift = ("roxo")

console.log(cores);//["roxo","amarelo","preto"]
cores.unshift = ("cinza","prata")

console.log(cores);//["cinza","prata","roxo","amarelo","preto"]


//join () junta os elementros de um array//////////////////////////////

let cores5 = ["amarelo","preto"];
let separadosporvirgula = cores.join()

console.log(separadosporvirgula );//"roxo,amarelo,preto"]

let separadosportraco = cores.join(" - ")

console.log(separadosportraco)//["roxo-amarelo-preto"]



