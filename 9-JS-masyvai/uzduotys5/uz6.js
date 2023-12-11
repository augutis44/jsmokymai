// Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, 
// kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas 
// [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.

let arr = [5, 8, -3, -6, 4, 7];

let results = arr.find(numb => numb < 0 && numb % 2 == 0);

console.log('Pirmas skaicius, kuris yra neigiamas ir yra lyginis masyve: ' + results);
