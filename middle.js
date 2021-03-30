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

const middle = function(array) {
  let mid = [];
  let midPoint = Math.floor(array.length / 2);
  console.log(midPoint);
  if (array.length <= 2) {
    return mid;
  } else if (!(array.length % 2)) {
    mid = array.slice(midPoint - 1, midPoint + 1);
  } else {
    mid.push(array[midPoint]);
  }
  return mid;
};

let arr0 = [];
let arr1 = [1,2];
let arr2 = [1,2,3];
let arr3 = [1,2,3,4];
let arr4 = [1,2,3,4,5];
let arr5 = [1,2,3,4,5,6];

console.log(assertArraysEqual(middle(arr0), []));
console.log(assertArraysEqual(middle(arr1), []));
console.log(assertArraysEqual(middle(arr2), [2]));
console.log(assertArraysEqual(middle(arr3), [2,3]));
console.log(assertArraysEqual(middle(arr4), [3]));
console.log(assertArraysEqual(middle(arr5), [3,4]));