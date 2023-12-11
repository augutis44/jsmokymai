let arr = ['Tomas 34', 'Jonas 20', 'Gintarė 40', 'Inga 24'];

console.log(arr.map(n => parseInt(n.split(' ')[1])).reduce((prev, next) => prev + next, 0));
