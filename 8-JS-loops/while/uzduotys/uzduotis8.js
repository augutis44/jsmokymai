// Išveskite atsitiktinį kiekį atsitiktinių skaičių. Raskite šių skaičių sumą.

let a = Math.floor(Math.random() * 21);
let i = 1;
let sum = 0;

while (i <= a) {
    let randomnumber = Math.floor(Math.random() * 21);
    sum = sum + randomnumber;
    i++
};

console.log(sum);