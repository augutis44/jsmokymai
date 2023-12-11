// vardas ir pavardė, studijų programos pavadinimas, pažymiai

const student1 = {
    name: 'Laura',
    surname: 'Laurinaityte',
    programName: 'Aplication of mathematics',
    grades: [10, 8, 7, 6, 10, 9, 9, 8]
}

const student2 = {
    name: 'Laurynas',
    surname: 'Laurynaitis',
    programName: 'Aplication of mathematics',
    grades: [8, 7, 8, 8, 9, 10, 6, 9, 10, 10, 10]
}

let gradeAverage1 = student1.grades.reduce((prev, next) => prev + next, 0) / student1.grades.length;
let gradeAverage2 = student2.grades.reduce((prev, next) => prev + next, 0) / student2.grades.length;

console.log('Pirmo studento pazymiu vidurkis: '+ gradeAverage1.toFixed(1));
console.log('Antro studento pazymiu vidurkis: '+ gradeAverage2.toFixed(1));

let biggerAverage = gradeAverage1 > gradeAverage2 ? 'Pirmo studento pazymiu vidurkis didesnis' : 'Antro studento pazymiu vidurkis didesnis';
console.log(biggerAverage);
