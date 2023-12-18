console.log(' ');
console.log('1 uzduotis');

let vardas = 'Augustina';

const pasisveikinimas = (vardas) => {
    console.log('Labas', vardas);
}

const atsisveikinimas = (vardas) => {
    console.log('Viso gero', vardas);
}

pasisveikinimas('Augustina');
atsisveikinimas('Augustina');

pasisveikinimas(vardas);
atsisveikinimas(vardas);

console.log(' ');
console.log('2 uzduotis');

const findBigger = (a, b) => {
    if (a > b) {
        console.log(a + ' didesnis uz ' + b);
    } else if (a < b) {
        console.log(b + ' didesnis uz ' + a);
    } else {
        console.log('abu skaiciai vienodi');
    }
}

findBigger(4, 5);
findBigger(10, 6);
findBigger(5, 5);

console.log(' ');
console.log('4 uzduotis');

const sum = (a, b) => {
    console.log(`${a} + ${b} = ${a + b}`);
}

const difference = (a, b) => {
    console.log(`${a} - ${b} = ${a - b}`);
}

const multiplication = (a, b) => {
    console.log(`${a} * ${b} = ${a * b}`);
}

const division = (a, b) => {
    console.log(`${a} / ${b} = ${a / b}`);
}

const randomnum = () => {
    let a = Math.floor(Math.random() * 11);
    let b = Math.floor(Math.random() * 11);

    sum(a, b);
    difference(a, b);
    multiplication(a, b);
    division(a, b);

}

randomnum()
