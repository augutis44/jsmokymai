let items = [
    {
        name: "preke 1",
        code: "#1234864",
        price: 152
    },
    {
        name: "preke 2",
        code: "#4561431",
        price: 542
    },
    {
        name: "preke 3",
        code: "#4897313",
        price: 21
    },
    {
        name: "preke 4",
        code: "#0216585",
        price: 43
    },
    {
        name: "preke 5",
        code: "#872314560",
        price: 1235
    }
]

for (const item in items) {
    console.log("Prekes pavadinimas: " + items[item].name);
    console.log("Prekes kodas: " + items[item].code);
    console.log("Prekes kaina: " + items[item].price);
    console.log("==============");
}