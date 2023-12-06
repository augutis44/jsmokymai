//Susikurkite skaičių masyvą ir užpildykite jį duomenimis. 
// Išveskite visus skaičius atskirose eilutėse. 
// Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.

let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 ==0) {
        console.log(num[i], num[i]*num[i]);
    } else {
        console.log(num[i]);
    }
}