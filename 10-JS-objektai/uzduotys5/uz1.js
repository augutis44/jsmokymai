// Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų
//  žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų 
// programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje 
// visi studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai, 
// trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus 
// studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų pažymių vidurkį.

let students = [{
    name: 'Marius',
    surname: 'Mariauskas',
    age: 25,
    grades: [9, 8, 4, 5, 6, 10, 7, 8, 6],
    programOfStudies: 'Matematikos taikymai',
    course: 3
},
{
    name: 'Laura',
    surname: 'Laurauskaite',
    age: 23,
    grades: [10, 10, 10, 9, 9, 8, 10, 10],
    programOfStudies: 'Bioinformatika',
    course: 1
},
{
    name: 'Benas',
    surname: 'Benauskas',
    age: 24,
    grades: [8, 9, 7, 4, 8, 10, 7, 6, 8],
    programOfStudies: 'Ekonomika',
    course: 3
}];

let allAvrSum = 0;

for (const student of students) {
    let avrSum = student.grades.reduce((sum, grade) => sum + grade);
    let avr = avrSum / student.grades.length;
    allAvrSum += avr;

    console.log(' ');
    console.log("Studento vardas " + student.name + ' ' + student.surname +
        '. Jos/jo amzius yra ' + student.age + '. Pasirinkta studiju programa yra '
        + student.programOfStudies + '. Siuo metu mokosi ' + student.course + ' kurse.'
    );
    console.log('Sio studento pazymiai: ' + student.grades);
    console.log('Pazymiu vidurkis: ' + avr.toFixed(1));
}

console.log('====================');
let allAvr = allAvrSum / students.length;
console.log('Bendras studentu vidurkis yra ' + allAvr.toFixed(1));
