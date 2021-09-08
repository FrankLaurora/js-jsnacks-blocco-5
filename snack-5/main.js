// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

var partialArray = [];

function pickElements(num1, num2, arr) {
    //effettuo un controllo per verificare che num1 e num2 contengano valori validi per la lunghezza di arr e maggiori di 0 (esprimo la posizione in forma umana)
    if(num1 > arr.length || num2 > arr.length || num1 == 0 || num2 == 0) {
        return alert(`Attenzione! Il tuo array contiene ${arr.length} elementi. Inserisci due numeri tra 1 e ${arr.length}.`);
    } else {
        //prendo in considerazione il caso in cui l'utente inserisca la posizione maggiore come primo argomento della funzione
        if(num1 > num2) {
            for(let i = num2 - 1; i < num1; i++) {
                partialArray.push(arr[i]);
            }

            return partialArray;
        } else if(num2 > num1) {
            for(let i = num1 - 1; i < num2; i++) {
                partialArray.push(arr[i]);
            }

            return partialArray;
        }
    }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

pickElements(7, 3, numbers);

console.log(partialArray);