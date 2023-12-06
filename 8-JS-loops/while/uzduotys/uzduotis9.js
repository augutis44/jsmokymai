// Sukurkite 3 kintamuosius skirtingų prekių kiekiui sekti. 
// Kiekvienos ciklo iteracijos metu bus nupirkti skirtingi ir atsitiktiniai 
// kiekiai šių prekių (gali būti ir nieko nenupirkta: 
// Math.floor(Math.random() * 10) be + 1 dalies). Įsitikinkite, kad nebūtų
//  nupirkta daugiau prekių nei turima inventoriuje. Pardavinėkite tol kol nieko neliks.

let bananai = 15;
let obuoliai = 20;
let mandarinai = 30;


while (bananai != 0 || obuoliai != 0 || mandarinai != 0) {
    console.log('=================');

    let buyBananai = Math.floor(Math.random() * 10);
    let buyObuoliai = Math.floor(Math.random() * 10);
    let buyMandarinai = Math.floor(Math.random() * 10);

    if (bananai > buyBananai) {
        bananai = bananai - buyBananai;
        console.log(`Nupirkti ${buyBananai} bananai. Likes bananu kiekis ${bananai}`);
    } else if (bananai <= buyBananai && bananai !== 0) {
        buyBananai = bananai;
        bananai = 0;
        console.log(`Nupirkti visi ${buyBananai} like paskutiniai bananai!`);
    } else if (bananai == 0) {
        console.log(`Visi bananai parduoti!`);
    }

    if (obuoliai >= buyObuoliai) {
        obuoliai = obuoliai - buyObuoliai; +
            console.log(`Nupirkti ${buyObuoliai} obuoliai. Likes obuoliu kiekis ${obuoliai}`);
    } else if (obuoliai < buyObuoliai && obuoliai !== 0) {
        buyObuoliai = obuoliai;
        obuoliai = 0;
        console.log(`Nupirkti visi ${buyObuoliai} like paskutiniai obuoliai!`);
    } else if (obuoliai == 0) {
        console.log(`Visi obuoliai parduoti!`);
    }

    if (mandarinai >= buyMandarinai) {
        mandarinai = mandarinai - buyMandarinai;
        console.log(`Nupirkti ${buyMandarinai} mandarinai. Likes mandarinu kiekis ${mandarinai}`);
    } else if (mandarinai < buyMandarinai && mandarinai !== 0) {
        buyMandarinai = mandarinai;
        mandarinai = 0;
        console.log(`Nupirkti visi ${buyMandarinai} like paskutiniai mandarinai!`);
    } else if (mandarinai == 0) {
        console.log(`Visi mandarinai parduoti!`);
    }
}