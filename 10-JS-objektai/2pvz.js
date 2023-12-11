let preke1 = {
    pavadinimas: 'Flomasteriai',
    kaina: 5,
    sku: 'FL935',
    kiekis: 34,
    spalvuKiekis: 30
};

let preke2 = {
    pavadinimas: 'Knyga',
    kaina: 10,
    sku: 'K32',
    kiekis: 15
};

console.log('PREKE 1');
console.log(preke1);
console.log('PREKE 2');
console.log(preke2);

if (preke1.kiekis > preke2.kiekis) {
    console.log('preke1 didesnis kiekis');
} else if (preke2.kiekis > preke1.kiekis) {
    console.log('preke2 didesnis kiekis');
} else {
    console.log('abieju prekiu kiekis vienodas');
}
