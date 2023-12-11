let studentas = {
    vardas: 'Tomas',
    pavarde: 'Tomauskas',
    mokykla: {
        pavadinimas: 'KTU',
        adresas: 'Gedimino g. 45',
        ikurta: 1800
    },
    pazymiai: [10, 9, 9, 8, 10, 9, 10, 10, 10, 10, 10, 10]
};

console.log(studentas);
console.log(studentas.vardas);
console.log(studentas.pavarde);
console.log(studentas.mokykla);
console.log(studentas.mokykla.pavadinimas);
console.log(studentas.mokykla.adresas);
console.log(studentas.mokykla.ikurta);

console.log(studentas['mokykla']['pavadinimas']);

console.log(studentas.pazymiai);
console.log(studentas.pazymiai[3]);

for (pazymys of studentas.pazymiai) {
    console.log('Studento pazymys:', pazymys);
}

let vidurkis = ((studentas.pazymiai.reduce((sum, paz) => sum + paz)) / studentas.pazymiai.length).toFixed();

console.log('studento vidurkis:', vidurkis);
