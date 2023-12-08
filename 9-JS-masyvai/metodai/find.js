let medziai = ['uosis', 'azuolas', 'klevas', 'liepa', 'berzelis'];

console.log(medziai.find(medis => medis.length > 5));
console.log(medziai.find(medis => medis.startsWith('l')));
console.log(medziai.find(medis => medis.includes('e') && medis.length <= 5));

console.log(medziai.findIndex(medis => medis.includes('e') && medis.length <= 5));
console.log(medziai.findIndex(medis => medis.startsWith('k')));
console.log(medziai.findIndex(medis => medis.includes('e') && medis.length <= 5));
