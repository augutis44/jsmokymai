let skaiciai = [5, 2, 3, 4, 5];

console.log(skaiciai.reduce((dalineSandauga, skaicius, i) => {
    console.log('--------------', i);
    console.log(dalineSandauga);
    console.log(skaicius);
    return dalineSandauga * skaicius;
}));

