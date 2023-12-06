//Parašykite programą, kuri paverstų dolerius į eurus.

let dollar = 65;

let eur = (dollar / 1.08).toFixed(2);

console.log(`${dollar} dolleriai yra lygu ${eur} eurams`);