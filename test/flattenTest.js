const assert = require("chai").assert;
const flatten = require("../flatten");

const arr1 = [1,2,3,4,5];
const arr2 = [1,[2,3,4,5]];
const arr3 = [1,[2,3],[4,5]];
const arr4 = [1,[2],[3],[4],[5]];
const arr5 = [[1,2,3,4,5]];

describe("#flatten", () => {
  it("returns [1,2,3,4,5] for [1,2,3,4,5]", () => {
    assert.deepEqual(arr1, flatten(arr1));
  });
  it("returns [1,2,3,4,5] for [1,[2,3,4,5]]", () => {
    assert.deepEqual(arr1, flatten(arr2));
  });
  it("returns [1,2,3,4,5] for [1,[2,3],[4,5]]", () => {
    assert.deepEqual(arr1, flatten(arr3));
  });
  it("returns [1,2,3,4,5] for [1,[2],[3],[4],[5]]", () => {
    assert.deepEqual(arr1, flatten(arr4));
  });
  it("returns [1,2,3,4,5] for [[1,2,3,4,5]]", () => {
    assert.deepEqual(arr1, flatten(arr5));
  });
});