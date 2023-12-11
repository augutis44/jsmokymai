// pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, 
// žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis).

const movie = {
    title: "Filmo pavadinimas",
    director: "Lukas Lukauskas",
    budget: 210000,
    moneyMade: 430000,
    genre: "Horror",
    duration: 143,
    releaseYear: 2012,
    actors: ['Marius Mariauskas', 'Ieva Ieavaiskyte', 'Simona Simoniene']
}

console.log('Movie information:', movie);
console.log();

let profit = movie.moneyMade - movie.budget;
console.log('Filmo pelnas: ' + profit + '€');

console.log('Filme vaidino ' + movie.actors.length + ' aktoriai');

let movieAge = new Date().getFullYear() - movie.releaseYear;
console.log('Siais metai filmui sueina ' + movieAge + ' metai.');