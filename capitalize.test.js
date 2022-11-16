const capitalize = require('./capitalize');

test("the string hello should be Hello", () =>{
    expect(capitalize("hello")).toBe("Hello");
});