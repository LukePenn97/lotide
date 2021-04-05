const assert = require("chai").assert;
const eqArrays = require('../eqArrays.js');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [3, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([3, 2, 3], [1, 2, 3]), false);
  });
  it("returns true for [99, 2, 3.1], [99, 2, 3.1]", () => {
    assert.strictEqual(eqArrays([99, 2, 3.1], [99, 2, 3.1]), true);
  });
});