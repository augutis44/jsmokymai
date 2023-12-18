let imones = [{
    pavadinimas: 'Sauni imone',
    ikurimoMetai: 2012,
    darbuotojuSk: 95,
    sritis: 'maisto gamyba',
    pelnasPerMetus: 54000,
    adresas: 'Saunios imones g. 25-6A'
},
{
    pavadinimas: 'Nuostabi imone',
    ikurimoMetai: 2020,
    darbuotojuSk: 15,
    sritis: 'ugdymas',
    pelnasPerMetus: 12000,
    adresas: 'nuostabios imones g. 45-2'
},
{
    pavadinimas: 'Gera imone',
    ikurimoMetai: 1998,
    darbuotojuSk: 1021,
    sritis: 'technologijos',
    pelnasPerMetus: 1200000,
    adresas: 'Geros imones g. 99-9'
}];

for (const imone in imones) {
    console.log('Imones pavadinimas: ' + imones[imone].pavadinimas);
    console.log('Imones ikurimo metai : ' + imones[imone].ikurimoMetai);
    console.log('Darbuotoju skaicius : ' + imones[imone].darbuotojuSk);
    console.log('Imones veikimo sritis : ' + imones[imone].sritis);
    console.log(' ');
}

let imonesAmzius = imones.map(n => new Date().getFullYear() - n.ikurimoMetai);
let vidutinisImonesAmzius = imonesAmzius.reduce((prev, next) => prev + next, 0) / imonesAmzius.length;
console.log('Vidutinis imones amzius yra ' + vidutinisImonesAmzius + ' metu.');

let darbuotojuKiekis = imones.reduce((prev, next) => prev + next.darbuotojuSk, 0);
console.log('Visose imonese dirba ' + darbuotojuKiekis + ' darbuotoju.');

let jaunaImone = imones.filter(imone => {
    if (imone.ikurimoMetai > 2010) {
        return imone.pavadinimas
    }
});
console.log('Imones, kurios skaitosi dar jaunos:', jaunaImone);
