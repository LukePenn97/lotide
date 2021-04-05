const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {
  it("returns [2,3,4,5] for [1,2,3,4,5]", () => {
    assert.deepEqual(tail([1,2,3,4,5]),[2,3,4,5]);
  });
  it("returns [22,23] for [21,22,23]", () => {
    assert.deepEqual(tail([21,22,23]),[22,23]);
  });
});