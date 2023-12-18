// Susikurkite parduotuvės objektą, kuriame būtų ši informacija:
// pavadinimas, adresas, darbuotojų kiekis, prekių objektų masyvas.
//  Apie kiekvieną prekę parduotuvėje žinoma ši informacija: pavadinimas;
// kodas; kaina; savikaina; turimas kiekis. Išveskite parduotuvės bendrą
// informaciją, tuomet užrašą "prekės" ir atskirose eilutėse turimas prekes
// su kuria nors jų informacija (pvz.: pavadinimai, kainos ir turimi kiekiai).
// Galiausiai paskaičiuokite kiek iš viso parduotuvė turi visų prekių
// (sudėkite jų kiekius). Raskite ir išveskite kurios prekės turima daugiausiai,
//  o kurios mažiausiai.

const shop = {
    shopName: 'Nuostabiausia parduotuve',
    adress: 'Parduotuves g. 54-6',
    employees: 542,
    products: [
        {
            prodName: 'Kuno kremas',
            code: 546320002,
            price: 15.99,
            primeCost: 2.99,
            quantity: 152
        },
        {
            prodName: 'Duso zele',
            code: 589400021,
            price: 5.99,
            primeCost: 1.99,
            quantity: 215
        },
        {
            prodName: 'Sampunas',
            code: 965004879,
            price: 29.99,
            primeCost: 2.99,
            quantity: 141
        }
    ]
}

console.log(`Parduotuves pavadinimas yra ${shop.shopName},
 ja galima rasti adresu ${shop.adress}. Sioje parduotuveje dirba ${shop.employees}`);

console.log('Sioje parduotuveje galima nusipirkti tokiu prekiu:');
for (const product of shop.products) {
    console.log('-', product.prodName, product.price);
}


