var assert = require("chai").assert;
var luhnAlgorithm = require("../lib/luhnAlgorithm");

describe("luhn Algorithm", function() {
  it("should return true if number is a right account number", function() {
    var num = "79927398713";
    var result = luhnAlgorithm(num);
    assert.isTrue(result);
  });

  it("should return false if a number is NOT a correct account number", function() {
    var num = "79927398715";
    assert.isFalse(luhnAlgorithm(num));
  });

  it("should return true if a number with 0 at the end is a correct account number", function() {
    var num = "4539764334822460";
    assert.isTrue(luhnAlgorithm(num));
  });

  it("should return false if an account number is NOT a number", function() {
    var num = "79927A9B710"
    assert.isFalse(luhnAlgorithm(num));
  });
});
