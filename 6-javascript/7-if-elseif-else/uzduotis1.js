let someNumber = 13;

if (someNumber % 2 === 0) {
    console.log('Skaicius lyginis');
} else if (someNumber % 5 === 0) {
    console.log('Skaicius dalinasi is 5');
} else if (someNumber === 3) {
    console.log('Skaicius lygus 3');
} else {
    console.log('klaida');
}

let a = 10;
let b = 12;
let c = 7;

if (a === b) {
    console.log('a ir b skaiciai lygus');
} else if (a === c) {
    console.log('a ir c skaiciai lygus');
} else if (a < c) {
    console.log('c didesnis uz a');
} else if (b === c * 2) {
    console.log('b skaičius lygus dvigubai c skaičiaus reikšmei');
} else if (a % 3 === 0) {
    console.log('a dalinasi is 3');
} else {
    console.log('klaida');
}
