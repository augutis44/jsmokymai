// Susikurkite žodžių masyvą.Patikrinkite ar šiame masyve yra bent
//  vienas žodis prasidedantis raide a(turi surasti nepriklausomai 
// tai didžioji ar mažoji raidė).Pvz, jeigu masyvas[‘bananas’, ‘agurkas’, 
// ‘pomidoras’], tai atsakymas true, o jeigu masyvas[‘kaunas’, ‘vilnius’,
//  ‘klaipėda’], tai atsakymas false.

let arr1 = ['bananas', 'agurkas', 'pomidoras'];
let arr2 = ['kaunas', 'vilnius', 'klaipėda'];

let result = arr1.some(word => word.toLowerCase().startsWith('a'))

console.log(result);
