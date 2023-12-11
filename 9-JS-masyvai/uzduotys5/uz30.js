// Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus 
// žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu 
// masyvas yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės.

let words = ['vynas', 'obuolys', 'ausakrai', 'spurgytes', 'sokoladas'];

let a = 0;

words.map((word) => {
    let wordArr = word.split('');
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == 'a') {
            a++;
        }
    }
});

console.log(a);

let set = ['bananas', 'obelis', 'automobilis'];
console.log(set.map(x => (x.toLowerCase()).split('').filter(y => y == 'a').length).reduce((sum, z) => sum + z));
