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

const flatten = function(array) {
  let flattened = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const elem of element) {
        flattened.push(elem);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

const arr1 = [1,2,3,4,5];
const arr2 = [1,[2,3,4,5]];
const arr3 = [1,[2,3],[4,5]];
const arr4 = [1,[2],[3],[4],[5]];
const arr5 = [[1,2,3,4,5]];

assertArraysEqual(arr1, flatten(arr1));
assertArraysEqual(arr1, flatten(arr2));
assertArraysEqual(arr1, flatten(arr3));
assertArraysEqual(arr1, flatten(arr4));
assertArraysEqual(arr1, flatten(arr5));