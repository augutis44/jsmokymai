const car = {};

car['marke'] = 'Opel';
car['modelis'] = 'Astra Twin Top';
car['rida'] = 132251;
car['metai'] = 2008;
car['color'] = 'melyna';
car['turis'] = 5;
car['dauzta'] = true;
car['parduodama'] = false;

console.log(car);

let carAge = new Date().getFullYear() - car.metai;
console.log('Automobiliui yra: ' + carAge + ' metu.');

let mileage = car.rida / carAge;
console.log('Automobilis per metus vidutiniskai nuvaziavo: ' + mileage.toFixed() + ' km');
