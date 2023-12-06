// Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let sum = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 4 == 0) {
        sum += num[i];
    }
}

console.log(sum);