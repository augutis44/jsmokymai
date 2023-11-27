const hoursInDay = 8;
let bakedGoodsInHour = 6;
let employees = 5;
let primeCost = 0.5;
let price = 5;
let needToBakeInDay = 100;

console.log('========================');
let bakedInOneDay = employees * bakedGoodsInHour * hoursInDay;
console.log(`All employees bakes ${bakedInOneDay} goods in one day.`);

if (bakedInOneDay <= needToBakeInDay) {
    console.log(`Bakery could not fulfill all of the orders. They are ${needToBakeInDay - bakedInOneDay} orders short.`);
} else {
    console.log(`Bakery fulfilled all of ${needToBakeInDay} orders and sold all of them for ${price}$ each!!`);
}

let primeCostInDay = primeCost * bakedInOneDay;

let left = bakedInOneDay - needToBakeInDay;
let overBaked = left > 0 ? true : false
let soldFor = !overBaked ? price * bakedInOneDay : price * needToBakeInDay;

let finalIncome = soldFor - primeCostInDay;
let madeProfit = finalIncome > 0 ? true : false
console.log(`All ${bakedInOneDay} goods are worth ${primeCostInDay}$. Bakery sold needed ${needToBakeInDay} goods for ${soldFor}$.`);

if (!overBaked || (overBaked && madeProfit)) {
    console.log(`Bakery made ${finalIncome}$`);
} else {
    console.log(`Bakery lost ${Math.abs(finalIncome)}$`);
}
