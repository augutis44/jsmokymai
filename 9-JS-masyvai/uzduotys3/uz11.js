let zodziai = ['Alus', 'Vanduo', 'Degtine',
    'Limonadas', 'Gaiva', 'Sultys',
    'Vynas', 'Sampanas'];

let trumpiZodziai = [];

let visoRaidziu = 0;

for (const zodis of zodziai) {
    if (zodis.length < 5) {
        trumpiZodziai.push(zodis);
    }
}

console.log(zodziai, trumpiZodziai);
