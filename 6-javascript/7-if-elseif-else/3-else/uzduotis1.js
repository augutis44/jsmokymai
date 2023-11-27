let someNumber = 7;

if (someNumber % 2 === 0) {
    console.log('skaicius lyginis');
} else {
    console.log('skaicius nelyginis');
}

if (someNumber % 7 === 0) {
    console.log('skaicius dalinasi is 7');
} else {
    console.log('skaicius nesidalina is 7');
}

let path = '6-javascript/9-else/pvz1.jss';

if (path.endsWith('.js')) {
    console.log('kelias nurodo i JS faila');
} else {
    console.log('kelias nurodo i kitokio tipo faila');
}