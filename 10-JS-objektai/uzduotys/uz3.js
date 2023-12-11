// pavadinimas, autorius, žanras, kaina, puslapių kiekis, 
// skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose.

const book1 = {
    title: 'Knyga pirma dalis',
    author: 'Minde Mindauskas',
    genre: 'romance',
    price: 14.99,
    pages: 437,
    chapters: ['Pirmas skyrius', 'Antras skyrius', 'Trecias skyrius', 'Ketvirtas skyrius'],
    relieseYear: 2020,
    findInStores: true
}

const book2 = {
    title: 'Knyga antra dalis',
    author: 'Minde Mindauskas',
    genre: 'romance',
    price: 21.99,
    pages: 321,
    chapters: ['Penktas skyrius', 'Sestas skyrius', 'Septintas skyrius'],
    relieseYear: 2023,
    findInStores: false
}

const logInformation = (book) => {
    console.log(' ');
    console.log('Pirmos knygos informacija:');
    console.log('Pavadinimas: ' + book.title);
    console.log('Autorius: ' + book.author);
    console.log('Zanras: ' + book.genre);
    console.log('Kaina: ' + book.price);
    console.log(' ');
}

logInformation(book1);
logInformation(book2);

if (book1.pages > book2.pages) {
    console.log('Antra knyga yra plonesne.');
} else if (book1.pages < book2.pages) {
    console.log('Pirma knyga yra plonesne.');
} else {
    console.log('Abi knygos turi vienodai puslapiu.');
}

let moreChapters = book1.chapters.length > book2.chapters.length ? 'Pirmoje knygoje yra daugiau skyriu' : 'Antroje knygoje yra daugiau skyriu';
console.log(moreChapters);

if (book1.price > book2.price) {
    console.log('Pirma knyga yra brangesne.');
    console.log(book2.price * 2 > book1.price ? 'Padviguminus pigesne knygos kaina, ji tampa brangesne' : 'Padviguminus pirgesne knygos kaina, ji islieka pigesne');
} else if (book1.price < book2.price) {
    console.log('Antra knyga yra brangesne.');
    console.log(book1.price * 2 > book2.price ? 'Padviguminus pigesne knygos kaina, ji tampa brangesne' : 'Padviguminus pirgesne knygos kaina, ji islieka pigesne');
} else {
    console.log('Abieju knygu kainos vienodos');
}
