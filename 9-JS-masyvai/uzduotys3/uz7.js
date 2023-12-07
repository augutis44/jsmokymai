let errorCode = ['ip25', 'ps85', 'gf26', 'gl11', 'lc90'];

//su masyvu

console.log('====== Naudojant switch ======');
for (const error of errorCode) {
    switch (error) {
        case 'ip25':
            console.log("Grafinės sąsajos klaida navigacijoje");
            break;
        case 'ps85':
            console.log("Trūksta operatyviosios atminties sistemoje");
            break;
        case 'gf26':
            console.log("Labai baisi klaida");
            break;
        case 'gl11':
            console.log("Su sita klaida tai mestu tave is darbo");
            break;
        case 'lc90':
            console.log("Maza mini klaidele");
            break;
    }
}

//su objektu
console.log('====== Naudojant objekta ======');

let errorCodeObject = {
    ip25: "Grafinės sąsajos klaida navigacijoje",
    ps85: "Trūksta operatyviosios atminties sistemoje",
    gf26: "Labai baisi klaida",
    gl11: "Su sita klaida tai mestu tave is darbo",
    lc90: "Maza mini klaidele"
}

for (const error of errorCode) {
    console.log(errorCodeObject[error]);
}
