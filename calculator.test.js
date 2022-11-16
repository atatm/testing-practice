const calculator = require("./calculator.js");

describe ('calculator', () => {
const calc = new calculator();
test('four plus two equal to six', () => {
    expect(calc.add(4,2)).toBe(6);
});
test('ten plus two equal to tewelve', () => {
    expect(calc.add(10,2)).toBe(12);
});
test('four plus four equal to eight', () => {
    expect(calc.add(4,4)).toBe(8);
});


test('four minus two equal to two', () => {
    expect(calc.subtract(4,2)).toBe(2);
});
test('four minus six equal to minus two', () => {
    expect(calc.subtract(4,6)).toBe(-2);
});
test('two minus two equal to zero', () => {
    expect(calc.subtract(2,2)).toBe(0);
});
test('four minus four equal to two', () => {
    expect(calc.subtract(4,4)).toBe(0);
});


test('four divide by two equal to two', () => {
    expect(calc.divide(4,2)).toBe(2);
});
test('zero divide by two equal to two', () => {
    expect(calc.divide(0,2)).toBe(0);
});
test('ten divide by two equal to five', () => {
    expect(calc.divide(10,2)).toBe(5);
});
test('five divide by five equal to one', () => {
    expect(calc.divide(5,5)).toBe(1);
});



test('four times two equal to eight', () => {
    expect(calc.multiply(4,2)).toBe(8);
});
test('tow times two equal to eight', () => {
    expect(calc.multiply(2,2)).toBe(4);
});
test('four times zero equal to zero', () => {
    expect(calc.multiply(4,0)).toBe(0);
});
test('ten times two equal to eight', () => {
    expect(calc.multiply(10,2)).toBe(20);
});

});