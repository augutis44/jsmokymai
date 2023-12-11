// Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, 
// kurių pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). 
// Pvz, jeigu turite masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’, ‘Bulgarija’].

let arr = ['Belgija', 'Lietuva', 'Graikija', 'Bulgarija'];

let result = arr.filter(word => word.toLowerCase().includes('b'));

console.log(result);
