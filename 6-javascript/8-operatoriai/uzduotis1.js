let a = 100;
let b = 12;
let c = 70;

// didziausias skaicius

if (a > b && a > c) {
    console.log('a skaicius didziausias');
} else if (b > a && b > c) {
    console.log('b skaicius didziausias');
} else {
    console.log('c skaicius didziausias');
}

// maziausias skaicius

if (a < b && a < c) {
    console.log('a skaicius maziausias');
} else if (b < a && b < c) {
    console.log('b skaicius maziausias');
} else {
    console.log('c skaicius maziausias');
}

// egzaminu rezultatai

let grades = [10, 10, 7]

let gradeAverage = grades.reduce((prev, next) => prev + next) / grades.length

if (gradeAverage >= 8) {
    console.log('gautas vidurkis yra [8-10]. Vidurkis yra ' + gradeAverage);
} else if (gradeAverage >= 5 && gradeAverage < 8) {
    console.log('gautas vidurkis yra [5-8). Vidurkis yra ' + gradeAverage);
} else {
    console.log('gautas vidurkis yra < 5. Vidurkis yra ' + gradeAverage);
}

let a1 = 10;
let a2 = 99;

if (a1 > a2 || a1 === 0) {
    console.log('pirmas skaičius yra didesnis už antrąjį arba yra lygus 0');
} else if (a1 < a2 || a2 === 5) {
    console.log('antras skaičius yra didesnis už pirmąjį arba yra lygus 5');
} else if (a1 > a2 && a1 === 20) {
    console.log('pirmas skaičius yra didesnis už antrąjį ir yra lygus 20');
} else if (a1 < a2 && a1 < 100) {
    console.log('antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100');
}


