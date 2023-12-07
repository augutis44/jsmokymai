let biolNames = ['Andrius', 'Ugne', 'Benas', 'Emilis', 'Solveiga'];
let mathNames = ['Paulius', 'Solveiga', 'Emilis', 'Martynas', 'Samanta'];

let allNames = [...biolNames, ...mathNames];

console.log(allNames);
// unikalus vardai, isima dublikantus
console.log([...new Set(allNames)]);
