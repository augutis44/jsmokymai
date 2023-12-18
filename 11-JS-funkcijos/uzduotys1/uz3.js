console.log(' ');
console.log('1 uzduotis');

let arr = ['lape', 'vilkas', 'tigras', 'liutas'];

const printWords = (words) => {
    console.log('Laukiniai gyvunai:');
    words.forEach(word => {
        console.log(word);
    });
}

printWords(arr);

console.log(' ');
console.log('2 uzduotis');

let arr2 = [5, 6, 7, 8];
let arr1 = [1, 2, 3, 4];

const printNumbs = (numbs) => {
    for (const numb of numbs) {
        console.log(`Pradinis skaicius ${numb}, jo kvadratas/2 ${(numb * numb) / 2}`);
    }
}

printNumbs(arr1);
printNumbs(arr2);

console.log(' ');
console.log('3 uzduotis');

const student = {
    name: 'Augustina',
    surname: 'Augustauskaite',
    grades: [10, 8, 9, 10, 5, 10]
}

const printStudent = ({ name, surname, grades }) => {
    let gradeAvr = grades.reduce((sum, next) => sum + next) / grades.length
    console.log(`Studento vardas ${name} ${surname}, jos pazymiai ${grades}. Pazymiu vidurkis ${gradeAvr.toFixed(1)}`);
}

printStudent(student);

console.log(' ');
console.log('4 uzduotis');

const biggestNumFind = (numbs) => {
    console.log(Math.max(...numbs));
}

let arr3 = [];
let arr4 = [];
let arr5 = [];

const randomNumbs = (arrLength, arr) => {
    for (let i = 1; i <= arrLength; i++) {
        arr.push(Math.floor(Math.random() * 26))
    }
}

randomNumbs(5, arr3);
randomNumbs(15, arr4);
randomNumbs(10, arr5);

console.log(arr3);
console.log(arr4);
console.log(arr5);

biggestNumFind(arr3);
biggestNumFind(arr4);
biggestNumFind(arr5);
