const readline = require('readline-sync');

// Funcao de gerar número inteiro aleatorio tirado da doc https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random 

function getRandomIntInclusive(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function matchNumber(){
  const userNumber = readline.questionInt('What`s is your number? PS: BETWEEN 0 and 10 ');
  if(userNumber === getRandomIntInclusive()){
    console.log('Parabéns, número correto!')
  } else{
    console.log(`Opa, não foi dessa vez. O número era ${getRandomIntInclusive()}`)
  }
  const jogarNovamente = readline.question('Do you wish 2 play again? (s/n)');
  if (jogarNovamente === 'n') return console.log('Muito obrigado!');

  matchNumber();
}

matchNumber();