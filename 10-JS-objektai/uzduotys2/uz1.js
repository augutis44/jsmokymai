const bookShop = {
    shopName: 'Geras knygynas',
    adress: 'Knygyno g. 49-5, Vilnius',
    area: 150,
    booksInStore: 1150,
    workHours: 'I-IV 09:30-20:00, VI-VII 12:00-17:00',
    isOpen: true
}

for (const key in bookShop) {
    console.log(key + ": " + bookShop[key]);
}

console.log(' ');

for (const key in bookShop) {
    if (typeof bookShop[key] !== 'string')
    console.log(key + ": " + bookShop[key]);
}