const middle = require('../middle.js');
const assert = require('chai').assert;

let arr0 = [];
let arr1 = [1,2];
let arr2 = [1,2,3];
let arr3 = [1,2,3,4];
let arr4 = [1,2,3,4,5];
let arr5 = [1,2,3,4,5,6];

describe("#middle", () => {
  it("returns [] for []", () => {
    assert.deepEqual(middle(arr0), []);
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle(arr1), []);
  });
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle(arr2), [2]);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle(arr3), [2,3]);
  });
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle(arr4), [3]);
  });
  it("returns [3, 4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle(arr5), [3,4]);
  });
});