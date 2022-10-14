const { multiply, translate, morseCode } = require("./app.js");

it("multiplication 5 and 2 is equal to 10", () => {
  const result = multiply(5, 2);
  expect(result).toBe(10);
});

it("should translate a = *-", () => {
  const result = translate("a", morseCode);
  expect(result).toBe("*-");
});

// test for valid character
it("should match [0-9a-zA-Z] regex code to be valid", () => {
  const result = checkString("aBc0");
  expect(result).toBe(true);
});

// test for spaces
it("regex s+ checks for space ", () => {
  const result = checkSpace("help at charlie");
  expect(result).toBe("help/at/charlie");
});

// test for length of dots and/or dashes
// test for symbol characters?
// test for combination of different chars
// test for no input
it("button clicked without inputting anything", () => {
  const result = checkInput("");
  expect(result).toBe("error");
});

// test for inavlid input
it("input string contains invalid characters", () => {
  const result = checkInputString("748%^$£");
  expect(result).toBe("error");
});
