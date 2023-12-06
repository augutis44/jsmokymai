//Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. 
// Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.

let num = [2, 3, 4, 5, 6, 7, 8, 9, 10]


let sum = num.reduce((prev, next) => prev + next);
let average = sum / num.length;

for (let i = 0; i < num.length; i++) {
    if (num[i] > average) {
        console.log(num[i]);
    }
}