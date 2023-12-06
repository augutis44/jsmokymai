// Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. 
// Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). 
// Jei rėžiai tinkami, tuomet vykdyti for, kuris atskirose eilutėse išvestų 
// kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.

let a = 1;
let b = 25;

if (a < b) {
    for (let i = a; i <= b; i++) {
        console.log(i + " " + i * i);
    }
} else {
    console.log('Skaicius a turi buti mazesnis uz b');
}