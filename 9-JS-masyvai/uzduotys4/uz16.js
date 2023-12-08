let arr1 = [1, 2, 5, 6, 8, 4, 5, 69, 3, 4, 5, 4];
let arr2 = [];
let arr3 = [];

console.log("Pirmas arejus");
console.log(arr1);

//su for ciklu
console.log("Reversed arejus su for ciklu");
for (let i = arr1.length-1; i >= 0; i--) {
    arr2.push(arr1[i])
}

console.log(arr2);

//be ciklo
console.log("Reversed arejus BE ciklo");
arr3 = [...arr1].reverse();

console.log(arr3);
