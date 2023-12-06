// Write a program to calculate and print the factorial of a number using a for loop.

let num = 8;
let numFactorial = 1;

for (let i = num; i >= 1; i--) {
    numFactorial = numFactorial * i;
}

console.log(numFactorial);