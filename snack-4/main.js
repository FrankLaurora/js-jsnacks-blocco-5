// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var mergedArr = [];

function arrayMerger(lettere, numeri) {
    if(lettere.length != numeri.length) {
        alert("Questa funzione accetta solo array con la stessa lunghezza");
        return;
    } else {
        for(let i = 0; i < lettere.length; i++) {
            mergedArr.push(lettere[i]);
            mergedArr.push(numeri[i]);
        }

        return mergedArr;
    }

}

var lettere = ["a", "b", "c"];

var numeri = [1, 2, 3];

console.log(arrayMerger(lettere, numeri));
