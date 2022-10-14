const { multiply } = require("./app.js");

it("multiplication 5 and 2 is equal to 10", () => {
  const result = multiply(5, 2);
  expect(result).toBe(10);
});

it("should translate a = *-", () => {
  const result = translate("a");
  expect(result).toBe("*-");
});

// test for valid character

// test for string(s) character
// test for spaces
// test for a number
// test for case sensitivity
// test for length of dots and/or dashes
// test for symbol characters?
// test for combination of different chars
// test for no input
// test for inavlid input
