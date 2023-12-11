// Sukurkite objektą studento duomenims saugoti. 
// Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, 
// amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, amžius, 
// ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. Šiuos duomenis 
// galite grupuoti į vidinius objektus arba visus išrašyti atskirai. 
// Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite 
// išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.

const student = {
    aboutStudent: {
        name: "Karolis",
        surname: "Karoliauskas",
        age: 25,
        height: 189
    },
    universityInformation: {
        university: "Vilnius university",
        studyProgram: "Bioninformatics",
        finnishedCredits: 30,
        grades: [10, 9, 8, 6, 9, 7, 8, 9],
        course: 4
    }
}

console.log(student);
console.log('===========');
console.log(student.aboutStudent);
console.log('===========');
console.log(student.aboutStudent.name);
console.log(student.aboutStudent.surname);
console.log(student.aboutStudent.age);
console.log(student.aboutStudent.height);
console.log('===========');
console.log(student.universityInformation);
console.log('===========');
console.log(student.universityInformation.university);
console.log(student.universityInformation.studyProgram);
console.log(student.universityInformation.finnishedCredits);
console.log(student.universityInformation.grades);
console.log(student.universityInformation.course);
