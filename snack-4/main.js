// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var mergedArr = [];

function arrayMerger(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return alert("Questa funzione accetta solo array con la stessa lunghezza");
        
    } else {
        for(let i = 0; i < arr1.length; i++) {
            mergedArr.push(arr1[i]);
            mergedArr.push(arr2[i]);
        }

        return mergedArr;
    }

}

var lettere = ["a", "b", "c"];

var numeri = [1, 2, 3];

console.log(arrayMerger(lettere, numeri));
