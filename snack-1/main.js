// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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

var totalWeight = 0;

for (let i = 0; i < zucchine.length; i++) {
    totalWeight += zucchine[i].peso;
}

console.log(`Il peso totale è ${totalWeight} grammi`);