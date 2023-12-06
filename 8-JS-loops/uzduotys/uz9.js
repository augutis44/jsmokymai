// Thermometer converter. Implement calculator to convert temperatures between
//  Fahrenheit and Celcius. Formulas for calculation can be found for example from here:
// https://www.albireo.ch/temperatureconverter/formula.html 

let fahrenheit
let celcius = 25

//Fahrenheit to Celsius:
if (fahrenheit != undefined) {
    celcius = (fahrenheit - 32) * (5 / 9);
    console.log(celcius);
}

if (celcius != undefined) {
    fahrenheit = (celcius * (9 / 5)) + 32;
    console.log(fahrenheit);
}