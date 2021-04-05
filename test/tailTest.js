const assertArraysEqual = require('../assertArraysEqual.js');
const tail = require('../tail.js');

assertArraysEqual(tail([1,2,3,4,5]),[2,3,4,5]);
assertArraysEqual(tail([21,22,23]),[22,23]);