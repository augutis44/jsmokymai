// Iš skaičių nuo 1 iki 100, raskite visų lyginių skaičių sumą.

let i = 0;
let sum = 0;

while (i <= 100) {
    if (i % 2 == 0) {
        sum = sum + i
    }
    i++
}

console.log(sum);