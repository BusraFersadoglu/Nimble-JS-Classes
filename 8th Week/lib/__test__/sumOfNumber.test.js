const { sum, multiply } = require("../sumOfNumber");

test("Adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("Multiplies 2 and 3 is 6", () => {
  const rv = multiply(2, 3);
  expect(rv).toBe(6);
});
