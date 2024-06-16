var assert = require("assert");
var calculator = require("../app/calculator");

describe("Calculator", function () {
  it("returns zero", function () {
    let result = calculator.calculate("0");
    return assert.equal(result, 0);
  });

  it("calculates addition", function () {
    let result = calculator.calculate("+ 3 4");
    return assert.equal(result, 3 + 4);
  });

  it("calculates subtraction and multiplication", function () {
    let result = calculator.calculate("- 3 * 4 5");
    return assert.equal(result, 3 - 4 * 5); // -17
  });

  it("calculates addition and multiplication", function () {
    let result = calculator.calculate("* + 3 4 5");
    return assert.equal(result, (3 + 4) * 5); // 35
  });

  it("calculates division, subtraction and addition", function () {
    let result = calculator.calculate("/ - 3 4 + 5 2");
    return assert.equal(result, (3 - 4) / (5 + 2));
  });

  it("calculates division, subtraction, multiplication and addition", function () {
    let result = calculator.calculate("/ - 3 * 4 6 + 5 2");
    return assert.equal(result, (3 - 4 * 6) / (5 + 2));
  });
});
