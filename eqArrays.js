const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([3, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([99, 2, 3.1], [99, 2, 3.1]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false); // => false