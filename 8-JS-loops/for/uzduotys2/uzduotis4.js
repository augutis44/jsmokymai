// Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą. 

let sum = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum = sum + i;
    };
};

console.log(sum);