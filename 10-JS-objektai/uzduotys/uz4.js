// pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). 

class Item {
    constructor(itemName, price, primeCost, code, quantity, x, y, z) {
        this.itemName = itemName;
        this.price = price;
        this.primeCost = primeCost;
        this.code = code;
        this.quantity = quantity;
        this.boxDimentions = new BoxDimentions(x, y, z);
    }
}

class BoxDimentions {
    constructor(x, y, z) {
        this.x = x,
            this.y = y,
            this.z = z
    }
}

const item1 = new Item('piestukas', 1.99, 0.05, '#8965556', 150, 5, 3, 3);
const item2 = new Item('sasiuvinys', 5.59, 0.20, '#0041523', 121, 15, 10, 3);
const item3 = new Item('skaiciuotuvas', 15.99, 2.54, '#896206', 20, 10, 15, 5);

console.log("Pirmos prekes informacija:", item1);
console.log("Antros prekes informacija:", item2);
console.log("Trecios prekes informacija:", item3);
console.log(' ');

console.log("Pirmos prekes kaina: " + item1.price + "eur, antros prekes kaina: " + item2.price + "eur, trecios prekes kaina: " + item3.price + "eur.");
console.log(' ');

if (item1.price < item2.price && item1.price < item3.price) {
    console.log("Preke " + item1.itemName + " yra pigiausia.");
} else if (item2.price < item1.price && item2.price < item3.price) {
    console.log("Preke " + item2.itemName + " yra pigiausia.");
} else {
    console.log("Preke " + item3.itemName + " yra pigiausia.");
}
console.log(' ');

const boxSize = (item) => {
    return item.boxDimentions.x * item.boxDimentions.y *item.boxDimentions.z;
}

let item1BoxSize = boxSize(item1);
let item2BoxSize = boxSize(item2);
let item3BoxSize = boxSize(item3);

console.log("Pirmos dezutes turis: " + item1BoxSize);
console.log("Antros dezutes turis: " + item2BoxSize);
console.log("Trecios dezutes turis: " + item3BoxSize);
console.log(' ');

const itemProfit = (item) => {
    return item.price - item.primeCost;
}

let item1Profit = itemProfit(item1);
let item2Profit = itemProfit(item2);
let item3Profit = itemProfit(item3);

console.log("Pirmos prekes pelnas: " + item1Profit);
console.log("Antros prekes pelnas: " + item2Profit);
console.log("Trecios prekes pelnas: " + item3Profit);
console.log(' ');
