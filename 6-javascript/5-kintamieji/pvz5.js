const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const numberToGuess = Math.floor(Math.random() * 11);
let numberGuessed = false;

const makeGuess = () => (
    rl.question("Guess the number between 0 and 10 ", function (answer) {
        if (answer == numberToGuess) {
            numberGuessed = true;
            console.log(`You guessed the number! It was ${answer}`);
            rl.close();
        } else if (answer > numberToGuess) {
            console.log(`The number is smaller then ${answer}`);
            makeGuess();
        } else if (answer < numberToGuess) {
            console.log(`The number is bigger then ${answer}`);
            makeGuess();
        }
    })
    )

makeGuess();
