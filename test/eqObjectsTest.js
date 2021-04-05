const assert = require("chai").assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
  });
  it("returns true for { a: { z: {x: 1, y: 2} }, b: 2 }, { a: { z: {x: 1, y: 2} }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: {x: 1, y: 2} }, b: 2 }, { a: { z: {x: 1, y: 2} }, b: 2 }), true);
  });
  it("returns true for { a: { z: {x: 1, y: 2} }, b: {c: [1,2,3], d: [4,5,6], e: [7,8,9]} }, { a: { z: {x: 1, y: 2} }, b: {c: [1,2,3], d: [4,5,6], e: [7,8,9]} }", () => {
    assert.strictEqual(eqObjects({ a: { z: {x: 1, y: 2} }, b: {c: [1,2,3], d: [4,5,6], e: [7,8,9]} }, { a: { z: {x: 1, y: 2} }, b: {c: [1,2,3], d: [4,5,6], e: [7,8,9]} }), true);
  });
});