const readline = require('readline-sync');

const digiteumNumero = readline.questionInt('Digite algum número inteiro válido');

function fatorial(numero) {
    let acc = 1;
    for(index = 1; index <= numero; index += 1){
        acc *= index;
    }
    return acc;
}

console.log(fatorial(digiteumNumero));