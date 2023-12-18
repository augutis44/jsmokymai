let studentai = [
    { vardas: 'Ugne', pazymiai: [9, 10, 9, 10, 8] },
    { vardas: 'Gintaras', pazymiai: [8, 9, 10, 7, 10, 9] },
    { vardas: 'Povilas', pazymiai: [10, 10, 9] },
    { vardas: 'Inga', pazymiai: [8, 7, 8, 9] },
];

let max_vidurkis = 0;
// let max_vid_studentas = studentai[0];
let max_vid_studentas = {};

for (const stud of studentai) {
    // console.log(stud.pazymiai);
    let suma = 0;
    for (const paz of stud.pazymiai) {
        suma += paz;
    }
    let vidurkis = Math.round(suma / stud.pazymiai.length);
    console.log(stud.vardas, 'vidurkis', vidurkis);

    if (vidurkis > max_vidurkis) {
        max_vidurkis = vidurkis;
        max_vid_studentas = stud;
    }
}

console.log('----');
console.log('max vidurkis:', max_vidurkis);
console.log('studentas(-e):', max_vid_studentas.vardas);
console.log('pazymiai:', max_vid_studentas.pazymiai);