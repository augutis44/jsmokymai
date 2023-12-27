//uzduotis 1

const apskritimoPlotas = require('./scripts2');

test('Apskritimo plotas', () => {
    expect(apskritimoPlotas(8)).toBe(201.0619);
});

//uzduotis 2

const palindrome = require('./scripts2');

test('Polindromas', () => {
    expect(palindrome("A man, a plan, a canal. Panama")).toBe("amanaplanacanalpanama");
});
