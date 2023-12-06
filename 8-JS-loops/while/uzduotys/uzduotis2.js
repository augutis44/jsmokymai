// Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.

let i = 1;

while (i <= 50) {
    if (i % 2 == 0) {
        console.log(i + " skaicius yra lyginis");
    } else {
        console.log(i + " skaicius yra nelyginis");
    }
    i++
}