let arr1 = [1, 2, 5, 6, 8, 4, 5, 69, 3, 4, 5, 4];
let smallestNum = 1;

arr1.sort((a, b) => a - b);

while (arr1.includes(smallestNum)) {
    smallestNum++
}

console.log(smallestNum);
