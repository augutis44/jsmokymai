let someNumber = 2;

if (someNumber % 5 == 0) {
    for (let i = 1; i <= 5; i++) {
        console.log(someNumber * i)
    }
}

if (someNumber % 2 == 0) {
    console.log(someNumber, someNumber*someNumber, someNumber/2);
}

if (someNumber % 7 != 0) {
    let b = 9;
    console.log(someNumber+b, someNumber-b, someNumber*b, someNumber/b);
}