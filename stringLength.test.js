const stringLength = require('./stringLength');

test('length of string would be 6', () => {
  expect(stringLength("string")).toBe(6);
});

test('the length should be at least one', () => {
  expect(() => stringLength("")).toThrow();
});

test('the length should not be more than ten',() =>{
    expect(() => stringLength("this is for trial purpose")).toThrow();
});