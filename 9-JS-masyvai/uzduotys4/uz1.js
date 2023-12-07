let food = ['pica', 'makaronai su vistiena', 'salotos', 'sonkauliukai su bulvemis', 'mesyte'];

//prideti i prieki
food.unshift('ledai');

//prideti gale
food.push('lazanija');

//per viduri (nuo pradinio) (prideda i ketvirta vieta)
food.splice(3, 0, 'agurkeliai');

//per viduri pakeistamas 5 vietoje esanti elementa
food.splice(4, 1, 'kotletai');

console.log(food);
let foodDelete = food.slice()

//salina pirma elementa
foodDelete.shift();

//salina paskutini elementa
foodDelete.pop();

//salina elementus nuo 2 tris sekancius iskaitant 2;
foodDelete.splice(2, 3);

console.log(foodDelete);
