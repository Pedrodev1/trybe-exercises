const readline = require('readline-sync');


const num = readline.questionInt('Digite um número ');

function fibonacci(numero) {
  const sequenceFibonacci = [];
    if(numero < 1) {
      return 'Número invalido';
    } else if( numero === 1){
      sequenceFibonacci.push(1);
      return sequenceFibonacci;
    }
    sequenceFibonacci.push(0, 1);
    for(index = 1; sequenceFibonacci.length <= numero; index += 1) {
      const n1 = sequenceFibonacci[index - 1];
      const n2 = sequenceFibonacci[index];
      const n3 = n1 + n2;
      sequenceFibonacci.push(n3);
    }
    sequenceFibonacci.shift();
    return sequenceFibonacci;
}

console.log(fibonacci(num));