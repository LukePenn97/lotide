const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');
let arr0 = [];
let arr1 = [1,2];
let arr2 = [1,2,3];
let arr3 = [1,2,3,4];
let arr4 = [1,2,3,4,5];
let arr5 = [1,2,3,4,5,6];

assertArraysEqual(middle(arr0), []);
assertArraysEqual(middle(arr1), []);
assertArraysEqual(middle(arr2), [2]);
assertArraysEqual(middle(arr3), [2,3]);
assertArraysEqual(middle(arr4), [3]);
assertArraysEqual(middle(arr5), [3,4]);