// Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, 
// ją padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’, ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].

let arr = ['šuo', 'katė', 'gyvatė'];

console.log(arr.map(word => word[0].toUpperCase()));
