const assertArraysEqual = require('../assertArraysEqual.js');
assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual([3, 2, 3], [1, 2, 3]); // fail
assertArraysEqual([99, 2, 3.1], [99, 2, 3.1]); //pass