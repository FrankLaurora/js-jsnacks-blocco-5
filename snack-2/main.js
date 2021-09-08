// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine = [
    {
        "varieta" : "varietà 1",
        "peso" : 50,
        "lunghezza" : 12
    },

    {
        "varieta" : "varietà 1",
        "peso" : 60,
        "lunghezza" : 13
    },

    {
        "varieta" : "varietà 1",
        "peso" : 70,
        "lunghezza" : 14
    },

    {
        "varieta" : "varietà 1",
        "peso" : 80,
        "lunghezza" : 15
    },

    {
        "varieta" : "varietà 1",
        "peso" : 90,
        "lunghezza" : 16
    },

    {
        "varieta" : "varietà 1",
        "peso" : 100,
        "lunghezza" : 17
    },

    {
        "varieta" : "varietà 1",
        "peso" : 110,
        "lunghezza" : 18
    },

    {
        "varieta" : "varietà 1",
        "peso" : 120,
        "lunghezza" : 19
    },

    {
        "varieta" : "varietà 1",
        "peso" : 130,
        "lunghezza" : 20
    },

    {
        "varieta" : "varietà 1",
        "peso" : 140,
        "lunghezza" : 21
    },
];

var zucchineCorte = [];

var zucchineLunghe = [];

for(let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza <= 15) {
        zucchineCorte.push(zucchine[i]);
    } else {
        zucchineLunghe.push(zucchine[i]);
    }
}

var pesoCorte = 0;
for(let i = 0; i < zucchineCorte.length; i++) {
    pesoCorte += zucchineCorte[i].peso;
}

console.log(`Il peso totale dell zucchine corte è ${pesoCorte} grammi.`);

var pesolunghe = 0;
for(let i = 0; i < zucchineLunghe.length; i++) {
    pesolunghe += zucchineLunghe[i].peso;
}

console.log(`Il peso totale dell zucchine lunghe è ${pesolunghe} grammi.`);