// Write a program which will give you all of the potential combinations of a two-digit decimal combination, printed in a comma delimited format:

let numb = []

for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        numb.push(`${i}${j}`);
    }
}

console.log(numb.join(", "));
