let arr1 = [1, 5, 6, 9, 5, 4, 3, 6, 8, 4, 5, 2, 1, 78, 2];
let arr2 = [5, 8, 9, 6, 3, 25, 6, 8, 7, 4, 1, 3, 5, 10];
let arr3 = [];

arr3 = [...new Set(arr1.filter(value => arr2.includes(value)))];

console.log(arr3);
