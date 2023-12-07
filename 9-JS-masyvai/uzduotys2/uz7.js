//Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. 
// Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.

let num = [2, 3, 4, 5, 6, 7, 8, 9, 10]


let average = (num.reduce((prev, next) => prev + next)) / num.length;
//Su filter metodu ir isrusiuoja nuo didziausio
let moreThanAverage = num.filter((grade) => grade > average).sort((a, b) => b - a);
console.log(moreThanAverage);

//Su ciklu
for (let i = 0; i < num.length; i++) {
    if (num[i] > average) {
        console.log(num[i]);
    }
}
