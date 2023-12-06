const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your height? (in centimetres)', height => {
    console.log(`Stick height for Cross-country skiing (free-style): ${(height * 0.9).toFixed(2)} cm`);
    console.log(`Stick height for Cross-country skiing (classical style): ${(height * 0.85).toFixed(2)} cm`);
    console.log(`Stick height for Nordic walk: ${(height * 0.68).toFixed(2)} cm`);
    readline.close();
});
