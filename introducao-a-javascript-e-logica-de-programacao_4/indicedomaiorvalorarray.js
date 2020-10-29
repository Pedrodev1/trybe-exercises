let array = [2, 3, 6, 7, 10, 1]

function indicemaiorvalor(array) {
    let maiorvalor = 0;
    let aux = 0;
    for (let i = 0; i <= array.length - 1; i = +1) {
        if (maiorvalor < array[i]) {
            maiorvalor = array[i];
            aux = i;
            console.log(maiorvalor);

        }
        return i;
    }

}

console.log(indicemaiorvalor(array));