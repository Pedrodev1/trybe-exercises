 function verificaPalindromo(string) {

     let ehPalindromo = false;

     let aoContrario = '';
     for (let index = string.length - 1; index >= 0; index -= 1) {
         aoContrario += string[index];

     }




     if (aoContrario === string) {
         ehPalindromo = true;
     } else {
         ehPalindromo = false;
     }
     return ehPalindromo;
 }


 console.log(verificaPalindromo('osso'));