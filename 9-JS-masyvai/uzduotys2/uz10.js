let salys = ['Alus', 'Vanduo', 'Degtine',
    'Limonadas', 'Gaiva', 'Sultys',
    'Vynas', 'Sampanas'];

let visoRaidziu = 0;

for (let i = 0; i < salys.length; i++) {
    visoRaidziu += salys[i].length;
    console.log('Zodis:', salys[i]);
    console.log('Raidziu kiekis zodyje:', salys[i].length);
    console.log();
}

console.log('Raidziu kiekis masyve:', visoRaidziu);