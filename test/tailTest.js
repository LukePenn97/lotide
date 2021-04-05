const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.deepEqual(tail([1,2,3,4,5]),[2,3,4,5]);
  });
  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail([21,22,23]),[22,23]);
  });
});