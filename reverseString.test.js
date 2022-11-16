const reverseString = require("./reverseString");

test ('the reverse string of hello is should be olleh', () => {
    expect(reverseString("hello")).toBe("olleh");
});