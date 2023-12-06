// Write program to compute the sum of the prime numbers less than 100.
// Note: There are 25 prime numbers are there in less than 100.
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 and sum of all these numbers is 1060.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (i > 1 && isPrime == true) {
        sum += i
    }
}

console.log(sum);

