const readline = require('readline-sync');
const ArrObj = [
  { name: "Calcular IMC", script: "./imc.js"}, { name: "Sorteio", script: "./sorteio.js"},
  { name: "Calcular velocidade", script: "./velocidade.js"}, { name: "Calcular fatorial", script: "./fatorial.js"}, { name: "Calcular Fibonacci", script: "./fibonacci.js"}
]

const newArray = ArrObj.map((value, index) => `${index + 1} : ${value.name}`)



const escolheScript = readline.question(newArray.join('\n'));


const qualScript = readline.questionInt('Qual script voce quer executar? ');
const selectedScript = ArrObj[qualScript - 1];

require(selectedScript.script);