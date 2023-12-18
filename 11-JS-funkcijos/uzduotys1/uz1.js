console.log(' ');
console.log('1 uzduotis');

const logMyName = () => {
    console.log('Augustina ir as pasirinkau programavima, nes atrode idomi sritis. Neklydau.');
}

logMyName();

console.log(' ');
console.log('2 uzduotis');

const logEilerasti = () => {
    console.log('Sis eilerastis grazus,');
    console.log('Ziauriai ziauriai nuostabus.');
    console.log('Ji isvesim penkis kartus,');
    console.log('Ir suzinosim kas gi bus.');
}

logEilerasti();
logEilerasti();
logEilerasti();
logEilerasti();
logEilerasti();

console.log(' ');
console.log('3 uzduotis');

const firstFunc = () => {
    console.log('Pirma funkcija');
}

const secondFunc = () => {
    console.log('Antra funkcija');
}

const thirdFunc = () => {
    console.log('Trecia funkcija');
}

firstFunc();
secondFunc();
thirdFunc();

console.log(' ');
console.log('4 uzduotis');

const forthFunc = () => {
    firstFunc();
    secondFunc();
}

forthFunc();

console.log(' ');
console.log('5 uzduotis');

const sumRandomNumbs = () => {
    let a = Math.floor(Math.random() * 11);
    let b = Math.floor(Math.random() * 11);
    console.log(`${a} + ${b} = ${a + b}`);
}

sumRandomNumbs();
sumRandomNumbs();
sumRandomNumbs();

console.log(' ');
console.log('6 uzduotis');

const police = () => {
    let name = 'Martynas';
    let age = 34;
    let salary = 1500;
    let spec = 'Zmogzudysciu skyriaus vadovas';

    console.log(`Ponui policininkui vardu ${name} siemet sueina ${age} metukai. Jo atlyginimas siekia ${salary}eur per menesi. ${name} siuo metu eina "${spec}" pareigas.`
    );
}

police();

console.log(' ');
console.log('7 uzduotis');

const randomNumb = () => {
    let nums = [];

    for (let i = 0; i < 11; i++) {
        nums.push(Math.floor(Math.random() * 11))
    }

    console.log(nums.join(' '));
}

randomNumb();

console.log(' ');
console.log('8 uzduotis');

const randomNumb2 = () => {
    console.log(Math.floor(Math.random() * 11));
}

for (let i = 0; i < 11; i++) {
    randomNumb2();
}
