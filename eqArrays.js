const assert = require('chai').assert;

const eqArrays = function(array1, array2) {
  //console.log(array1,array2);
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  } else {
    for (const index in array1) {
      if (Array.isArray(array1[index]) && Array.isArray(array2[index])) {
        result = eqArrays(array1[index],array2[index]);
      } else if (array1[index] !== array2[index]) {
        result = false;
      }
    }
  }
  return result;
};

module.exports = eqArrays;