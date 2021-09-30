const readline = require('readline-sync');
const ArrObj = [
  { name: "Calcular IMC", script: "./imc.js"}, { name: "Sorteio", script: "./sorteio.js"},
  { name: "Calcular velocidade", script: "./velocidade.js"}
]

const newArray = ArrObj.map((value, index) => `${index + 1} : ${value.name}`)


newArray.unshift('Escolha um script correspondente ');
const escolheScript = readline.question(newArray.join('\n'));


const qualScript = readline.questionInt('Qual script voce quer executar ?');
const selectedScript = ArrObj[qualScript - 1];

require(selectedScript.script);