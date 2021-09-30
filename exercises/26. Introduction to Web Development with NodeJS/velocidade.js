const readline = require('readline-sync');

function velocidadeMediaCarro() {
  const distancia = readline.questionInt('What`s is the distance?');
  const tempo = readline.questionInt('What`s is the time?');
   return (distancia / tempo ).toFixed(2);
}

console.log(`${velocidadeMediaCarro()} m per seconds`);

