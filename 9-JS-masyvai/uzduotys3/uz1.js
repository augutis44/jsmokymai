// Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. 
// Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …

let zodziai = ['Alus', 'Vanduo', 'Degtine',
    'Limonadas', 'Gaiva', 'Sultys',
    'Vynas', 'Sampanas'];

for (const index in zodziai) {
    console.log(`${index} - ${zodziai[index]}`);
}
