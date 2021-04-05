const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

assertEqual(tail([1,2,3,4,5]),[2,3,4,5]);
assertEqual(tail([21,22,23]),[22,23]);