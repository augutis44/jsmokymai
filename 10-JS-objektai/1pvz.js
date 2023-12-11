let automobilis = {
    marke: 'Audi',
    modelis: '80',
    metai: 1990,
    rida: 346020,
    darbinisTuris: 1.8,
};

console.log(automobilis.marke);
console.log(automobilis.modelis);
console.log(automobilis.metai);
console.log(automobilis.rida);
console.log(automobilis.darbinisTuris);

console.log('===================');

console.log(automobilis['marke']);
console.log(automobilis['modelis']);
console.log(automobilis['metai']);
console.log(automobilis['rida']);
console.log(automobilis['darbinisTuris']);

console.log('===================');

let raktas = 'marke';
// automobilis.raktas
console.log(automobilis[raktas]); // is auto trauktu marke

console.log('===================');

let knyga = {
    pavadinimas: 'Titanu irankiai',
    autorius: 'Nezinau',
    kaina: 39.00,
    puslapiai: 800
};

console.log(knyga);
console.log(knyga.pavadinimas);
console.log(knyga.autorius);
console.log(knyga.kaina);
console.log(knyga.puslapiai);

console.log('===================');

let nuvaziuotaVidPerMetus = automobilis.rida / (2023 - automobilis.metai);
console.log('Auto rida:', automobilis.rida);
console.log('Auto metai:', automobilis.metai);
console.log('Auto amzius:', 2023 - automobilis.metai);
console.log('Vidutiniskai nuvaziuota per metus:', nuvaziuotaVidPerMetus);

console.log('===================');

let dabarMetai = new Date().getFullYear();
let nuvaziuotaVidPerMetus2 = automobilis.rida / (dabarMetai - automobilis.metai);
console.log('Vidutiniskai nuvaziuota per metus:', nuvaziuotaVidPerMetus2.toFixed(3));
