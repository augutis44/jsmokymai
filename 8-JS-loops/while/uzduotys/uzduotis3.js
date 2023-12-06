// Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.

let i = 25;

while (i <= 50) {
    if (i % 3 == 0) {
        console.log(`skaičius ${i} dalinasi iš 3`);
    } else {
        console.log(i);
    }
    i++
}