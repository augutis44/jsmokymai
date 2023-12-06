let numOfLines = 11;
let numOfLinesSecondHalf

for (let i = 1; i <= numOfLines / 2; i++) {
    line = '';
    for (let j = 1; j <= i + (i - 1); j++) {
        if (j % 2 == 0) {
            line += ' ';
        } else {
            line += '*';
        }
    }
    console.log(line);
}

if (numOfLines % 2 == 0) {
    numOfLinesSecondHalf = numOfLines / 2;
} else {
    numOfLinesSecondHalf = Math.floor(numOfLines / 2) - 1;
}

for (let i = numOfLinesSecondHalf; i >= 1; i--) {
    line = '';
    for (let j = 1; j <= i + (i - 1); j++) {
        if (j % 2 == 0) {
            line += ' ';
        } else {
            line += '*';
        }
    }
    console.log(line);
}