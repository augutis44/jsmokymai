let zodis = ['Alus', 'Vanduo', 'Degtine',
    'Limonadas', 'Gaiva', 'Sultys',
    'Vynas', 'Sampanas'];

let visoRaidziu = 0;

for (let i = 0; i < zodis.length; i++) {
    visoRaidziu += zodis[i].length;
    console.log('Zodis:', zodis[i]);
    console.log('Raidziu kiekis zodyje:', zodis[i].length);
    console.log();
}

console.log('Raidziu kiekis masyve:', visoRaidziu);
