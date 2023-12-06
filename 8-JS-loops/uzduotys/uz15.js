let numOfLines = 7;

for (let i = 1; i <= numOfLines; i++) {
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