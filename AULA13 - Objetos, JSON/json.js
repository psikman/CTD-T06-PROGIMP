let pessoa = {
nome: 'gilvan',
idade: 46,
altura: 1.72

}

let json = JSON.stringify(pessoa);

console.log(json);

let objetonovo = JSON.parse(json);
console.log(objetonovo);

console.log(json);



let 