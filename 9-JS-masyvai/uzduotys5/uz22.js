let arr = [1, 2, 3, 4, 5];

console.log(arr.filter(n => n % 2 == 0).reduce((prev, next) => prev + next, 0));
