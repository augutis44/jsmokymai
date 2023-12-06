let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let quantity = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 3 == 0) {
        sum += num[i];
        quantity++;
    }
}

console.log(`Turimi duomenys: ${num}.`);
console.log(`Skaiciu. kurie dalinasi is 3 keikis: ${quantity}.`);
console.log(`Skaiciu. kurie dalinasi is 3 suma: ${sum}.`);
console.log(`Skaiciu. kurie dalinasi is 3 vidurkis: ${sum / quantity}.`);
