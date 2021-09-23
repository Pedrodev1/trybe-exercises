const readline = require('readline-sync');

const peso = readline.questionInt('What`s is your weight?');
const altura = readline.questionFloat('What`s is your height?'); 


function calcularIMC() { 
  return (peso / (altura * altura)).toFixed(2);
}

function categoriaIMC(imc){
   if(imc < 18.5) {
      console.log("Abaixo do peso (magreza)");
   }else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal");
   }else if(imc >= 25.0 && imc <= 29.9){
    console.log("Acima do peso (sobrepeso)");
   }else if(imc >= 30.0 && imc <= 34.9){
    console.log("Obesidade grau I");
   }else if(imc >= 35.0 && imc <= 39.9){
    console.log("Obesidade grau II");
   } else{
    console.log("Obesidade grau III e IV")
}
}



console.log(calcularIMC());
console.log(categoriaIMC(calcularIMC()));
