// let prekiuLikuciai = [90, 34, 8, 2, 10, 46];

let prekiuLikuciai = {
    piestuku: 90,
    flomasteriu: 34,
    obuoliu: 8,
    tortu: 2,
    bananai: 10,
    zurnalai: 46
};

let suma = 0;

for (const preke in prekiuLikuciai) {
    suma = suma + prekiuLikuciai[preke];
}

console.log('visu prekiu likuciu suma yra', suma);