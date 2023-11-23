class Spausdintuvas {
    constructor(tekstas) {
        this.turinys = tekstas;
    }

    spausdinti(tekstas) {
        return (`${this.turinys} užduota išspausdinti:\n\n ${tekstas} \n\n`);
    }

    print(txt) {
        let tag = `=`.repeat(50) + '\n\n';
        return (tag + this.spausdinti(txt) + tag);
    }
}

let uzduotis1 = new Spausdintuvas('Spausdintuvas Nr. A');
let uzduotis2 = new Spausdintuvas('Spausdintuvas Nr. B');

console.log(uzduotis1.print('pirma užduotis... '.repeat(2)));
console.log(uzduotis2.print('antra užduotis... '.repeat(2)));