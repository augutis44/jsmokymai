let vardai = ['Jonas', 'Petras', 'Ona', 'Birute'];

console.log(vardai.filter(vardas => vardas.startsWith('J') || vardas.endsWith('a')));
console.log(vardai.filter(x => x.length <= 5));