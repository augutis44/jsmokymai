let duomenys = [{ vardas: 'Jonas', amzius: 30 }, { vardas: 'Petras', amzius: 25 }];

console.log(duomenys.reduce((sum, elementas) => sum + elementas.amzius));

console.log(duomenys.reduce((sum, elementas) => sum + elementas.amzius, 0));