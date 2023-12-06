// Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.

let i = 1;

while (true) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`skaičis ${i} dalinasi iš 3 ir is 5`);
        break;
    } else {
        console.log(i);
    }
    i++
}