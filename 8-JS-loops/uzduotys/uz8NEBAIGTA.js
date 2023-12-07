//Salary calculator.Implement web - application, which can be used to calculate salaries.
// Total salary(net income) paid is gross income(asked from user) diminshed by
//  tax percentage(asked from user) and pension insurance payment(fixex percentage 4.30 %).

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const readlinee = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('How much do you earn?', grossIncome => {
    console.log(`Youre income ${grossIncome * ((100-21-4.3)/100)}!`);
    readline.close();
});

readlinee.question('How much is tax persantage?', taxPercentage => {
    console.log(`Tax persantage ${taxPercentage}!`);
    readline.close();
});


// let grossIncome = 1500;

let taxPercentage = 21;

let insurancePaiment = 4.30;


