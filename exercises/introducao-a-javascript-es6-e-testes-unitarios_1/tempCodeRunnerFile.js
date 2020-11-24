const Sorting = oddsAndEvens => {
  for (let index = 0; index < oddsAndEvens.length; index += 1) {
    if (oddsAndEvens[index] > oddsAndEvens[index + 1]) {
      let aux = oddsAndEvens[index + 1];
      oddsAndEvens[index + 1] = oddsAndEvens[index];
      oddsAndEvens[index] = aux;

    }

  }
  return oddsAndEvens;
}



console.log(`Os números ${Sorting([10, 9, 8, 7, 5, 6])} se encontram ordenados`);