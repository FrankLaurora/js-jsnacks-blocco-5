// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)
// var flippedString = "";

// function flipString(string) {
//     for(let i = string.lenght - 1; i >= 0; i--) {
//         flippedString += string[i];
//     }

//     return flippedString;
// }

// console.log(flipString("ciao"));

// var stringa = "ciao";

var flip = "";

function flipString(stringa) {
    for (let i = stringa.length - 1; i >= 0; i--) {
        console.log(stringa[i]);
        flip += stringa[i];
    }

    return flip;
}


console.log(flipString("ciao"));