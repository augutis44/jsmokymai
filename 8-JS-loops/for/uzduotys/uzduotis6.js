// Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. 
// Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). 
// Jei rėžiai tinkami, tuomet vykdyti for, kuris iš duotų skaičių išvestų visus 
// nelyginius skaičius arba tuos, kurie dalinasi iš 8.

let a = 1;
let b = 25;

if (a < b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 !== 0 || i % 8 == 0) {
            console.log(i);
        };
    };
} else {
    console.log('Skaicius a turi buti mazesnis uz b');
};
