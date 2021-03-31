const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (const index in array1) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const actual1 = map(words, word => word.slice(1));
const expected1 = ["round","ontrol","o","ajor","om"];
assertArraysEqual(actual1, expected1);
const nums = [1,2,3,4,5];
const actual2 = map(nums, num => num * 3);
const expected2 = [3,6,9,12,15];
assertArraysEqual(actual2, expected2);
const words2 = ["hello","world","I","am","Luke"];
const actual3 = map(words2, word => word + "ba");
const expected3 = ["helloba","worldba","Iba","amba","Lukeba"];
assertArraysEqual(actual3, expected3);