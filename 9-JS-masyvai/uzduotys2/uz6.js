// /Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.

let num = [2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = num.reduce((prev, next) => prev + next);
let average = sum / num.length;
console.log(`Students grades sum is ${sum} and average is ${average}`);