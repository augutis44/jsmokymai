//Parašykite programą, kuri iš duoto žmogaus amžiaus metais pasakytų kiek tai yra sekundėmis, minutėmis, valandomis, dienomis.

let personsAge = 25;

let personAgeDays = personsAge * 365;
let personAgeHours = personsAge * 365 * 24;
let personAgeMinutes = personsAge * 365 * 24 * 60;
let personAgeSeconds = personsAge * 365 * 24 * 60 * 60;

console.log(`Person age is ${personsAge}.`);
console.log(`Age in days: ${personAgeDays}`);
console.log(`Age in hours: ${personAgeHours}`);
console.log(`Age in minutes: ${personAgeMinutes}`);
console.log(`Age in seconds: ${personAgeSeconds}`);

