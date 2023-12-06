let someNumber = 421;
let someNumberArr = someNumber.toString().split("")
let sum = 0;

for (let index = 0; index < 3; index++) {
    sum += someNumberArr[index]**3;
}

if (sum == someNumber) {
    console.log('Number is an Armstrong number');
} else {
    console.log('Number is NOT an Armstrong number');
}