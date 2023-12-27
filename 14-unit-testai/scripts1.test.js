const biggerNum = require('./scripts1');

test('10 bigger than 4', () => {
    expect(biggerNum(10, 4)).toBe(10);
});

test('4 less than 10', () => {
    expect(biggerNum(4, 10)).toBe(10);
});

test('5 equals 5', () => {
    expect(biggerNum(5, 5)).toBe(5);
});