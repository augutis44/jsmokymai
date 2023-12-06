// Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.

let arr = [];

for (let i = 1; i <= 8; i++) {
    arr.push(Math.floor(Math.random() * 26));
}

console.log(arr);