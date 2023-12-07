let grades = [10, 8, 7, 6, 8, 9, 10];

let average = (grades.reduce((prev, next) => prev + next) / grades.length).toFixed(2);

console.log(`Mokinio pazymiai yra: ${grades}. Pazymiu vidurkis yra ${average}`);
