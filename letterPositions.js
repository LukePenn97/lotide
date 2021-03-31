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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let index = 0;
  for (let char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        results[char].push(index);
      } else {
        results[char] = [index];
      }
    }
    index++;
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);