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

const without = function(source, itemsToRemove) {
  let goodElements = [];
  let good = true;
  for (const element of source) {
    good = true;
    for (const badElement of itemsToRemove) {
      if (element === badElement) {
        good = false;
      }
    }
    if (good) {
      console.log("pushing " + element);
      goodElements.push(element);
    }
  }
  return goodElements;
};
// const array = [1,2,3];
// const no3 = without(array, [3]);
// assertArraysEqual(array, [1,2,3]);
// assertArraysEqual(no3, [1,2]);
const words = ["avocado","oil","molecule","dirt","dust","weird shit"];
const badWords = ["dirt","dust","weird shit"];
const purified = without(words, badWords);
assertArraysEqual(purified, ["avocado","oil","molecule"]);

