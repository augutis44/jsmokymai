let grades = [2, 5, 6, 10, 8, 9, 7, 10, 3, 9, 9, 9];

let gradesDesc = grades.sort((a, b) => b - a);

console.log(gradesDesc);
console.log(gradesDesc.splice(0, 3));
