const assertArraysEqual = require('../assertArraysEqual.js');
assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual([3, 2, 1], [3, 2, 1]); // pass
assertArraysEqual([99, 2, 3.1], [99, 2, 3.1]); //pass