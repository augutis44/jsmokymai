// Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys 
// skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. 
// Pvz, masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.

let arr1 = [3, 7, 2, 9, 6, 4];
let arr2 = [5, 3, 7];

let result = arr1.every(numb => numb > 0 && arr1.some(numb => numb % 2 == 0));

console.log("visi šiame masyve esantys skaičiai yra teigiami ir ar yra bent vienas skaičius: " + result);
