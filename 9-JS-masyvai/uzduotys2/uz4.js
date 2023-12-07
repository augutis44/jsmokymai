//Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

for (let i = 0; i < num.length; i++) {
    if (num[i] > 5) {
        console.log(num[i]);
    }
}
