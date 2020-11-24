const oddsAndEvens = [5, 9, 14, 24, 20, 1, 2];

const Sorting = (oddsAndEvens) => {

  for (let index = 0; index < oddsAndEvens.length; index += 1) {

    for (let index1 = 0; index1 < oddsAndEvens.length; index1 += 1) {

      if (oddsAndEvens[index1] > oddsAndEvens[index1 + 1]) {
        let aux = oddsAndEvens[index1];
        oddsAndEvens[index1] = oddsAndEvens[index1 + 1];
        oddsAndEvens[index1 + 1] = aux;


      }

    }

  }
  return oddsAndEvens;
}




console.log(`Os números ${Sorting(oddsAndEvens)} se encontram ordenados`);


