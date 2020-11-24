const fatorial = (numero) => {
  let total = 1;
  for (let i = numero; i > 1; i -= 1) {

    total = total * i;
  }
  return total;
}

console.log(`Fatorial de ${5} é ${fatorial(5)}`);