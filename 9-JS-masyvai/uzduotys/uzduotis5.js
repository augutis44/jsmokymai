//Sukurkite du masyvus dviejų studentų pažymiams saugoti. 
// Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). 
// Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.

let student1 = [10, 9, 5, 8];
let student2 = [5, 7, 9, 2];

let student1Average = student1.reduce((prev, next) => prev + next) / student1.length;
let student2Average = student2.reduce((prev, next) => prev + next) / student2.length;
console.log('Pirmo studento pažymių vidurkis: ' + student1Average);
console.log('Antro studento pažymių vidurkis: ' + student2Average);

if (student1Average > student2Average) {
    console.log('Pirmo studento pažymių vidurkis yra didesnis nei antro.');
} else {
    console.log('Antro studento pažymių vidurkis yra didesnis nei pirmo.');
}




