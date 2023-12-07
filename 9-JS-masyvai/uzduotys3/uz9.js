// Susikurkite masyvą studento pažymiams saugoti. 
// Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. 
// Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 5). 
// Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.

let grade = [];
let howManyGrades = Math.floor(Math.random() * (10 - 1 + 1) + 1);

for (let i = 1; i <= howManyGrades; i++) {
    grade.push(Math.floor(Math.random() * (10 - 2 + 1) + 2));
}

console.log(grade);

let sum = grade.reduce((prev, next) => prev + next);
let average = (sum / grade.length).toFixed(2);

let sumOfBadGrades = 0;

for (let i = 0; i < grade.length; i++) {
    if (grade[i] <= 4) {
        sumOfBadGrades++;
    } else {
        console.log(`Teigiamas pažymys ${grade[i]}`);
    }
}

console.log(`Pažymių vidurkis: ${average}`);
console.log(`Neigiamų pažymių kiekis: ${sumOfBadGrades}`);

