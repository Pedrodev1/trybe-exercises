function verificaPalindromo(string) {
    let ehPalindromo = false;
    for (let i = 0; i < string.length; i++) {
        for (let j = string.length - 1; j < i; j--) {
            if (string.length[i] === string.length[j]) {
                ehPalindromo = true;
            } else {
                ehPalindromo = false;
            }
        }

    }
    return ehPalindromo;
}

console.log(verificaPalindromo('arara'));