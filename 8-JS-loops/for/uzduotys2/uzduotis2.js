// Raskite visų lyginių skaičių nuo 20 iki 50 sumą

let sum = 0;

for (let i = 20; i <= 50; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    };
};

console.log(sum);