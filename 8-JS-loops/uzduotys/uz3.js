//Parašykite programą, kuri suskaičiuotų žmogaus BMI (body mass index), kai yra žinomas žmogaus ūgis ir svoris.
//BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared

let height = 181;
let weight = 80;

function square(number) {
    return number * number;
}

let bmi = (weight / square(height * 0.1)).toFixed(2);

console.log(bmi);

