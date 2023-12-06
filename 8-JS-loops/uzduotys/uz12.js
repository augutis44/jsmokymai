// Write program to convert word to digit.
// Input: zero;three;five;six;eight;one
// Output: 035681

const numDictionary = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let input = 'zero;three;five;six;eight;one'

let inputArr = input.split(";");
let outputArr = [];


for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < numDictionary.length; j++)
        if (inputArr[i] == numDictionary[j]){
            outputArr.push(numDictionary.indexOf(inputArr[i]));
        }
}

let output = outputArr.join("");

console.log(`Your input was: ${input}.`);
console.log(`Output is: ${output}.`);
