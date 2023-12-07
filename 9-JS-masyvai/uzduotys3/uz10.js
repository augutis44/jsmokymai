let student1 = [10, 9, 5, 8];
let student2 = [5, 7, 9, 2];

// su reduce metodu
let student1Average = student1.reduce((prev, next) => prev + next) / student1.length;
let student2Average = student2.reduce((prev, next) => prev + next) / student2.length;
console.log('Pirmo studento pažymių vidurkis: ' + student1Average);
console.log('Antro studento pažymių vidurkis: ' + student2Average);

if (student1Average > student2Average) {
    console.log('Pirmo studento pažymių vidurkis yra didesnis nei antro.');
} else {
    console.log('Antro studento pažymių vidurkis yra didesnis nei pirmo.');
}

console.log('===================');

//su loop for of metodu
let student1GradeAverage = 0;
let student2GradeAverage = 0;

const calcGradeAverage = (student, studentGradeAverage) => {
    let sum = 0;
    for (const grade of student) {
        sum += grade;
    }

    studentGradeAverage = sum / student.length

    console.log(studentGradeAverage);
}

calcGradeAverage(student1, student1GradeAverage);
calcGradeAverage(student2, student2GradeAverage);





