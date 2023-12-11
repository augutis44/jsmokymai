let cars = [
    {
        brand: "opel",
        model: "astra",
        year: 2020
    },
    {
        brand: "BMW",
        model: "E46",
        year: 2012
    },
    {
        brand: "audi",
        model: "A4",
        year: 2018
    }
]

for (const car in cars) {
    console.log("Masinos marke: " + cars[car].brand);
    console.log("Masinos modelis: " + cars[car].model);
    console.log("Masinos amzius:", new Date().getFullYear() - cars[car].year, "metai");
    console.log("==============");
}