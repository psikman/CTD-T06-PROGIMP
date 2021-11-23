// const fs = require('fs');

// let testenode = fs.readFileSync(__dirname + '/testenode.txt','utf-8');

// console.log(testenode);


///////////////\\\\\\\\\\\\\\

const fs = require('fs');
let moment = require('moment');

let testenode = fs.readFileSync(__dirname + '/testenode.txt','utf-8');

let data = moment().format('MM do YY')

console.log(data);

