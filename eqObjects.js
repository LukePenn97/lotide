const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === "object") {
        return eqObjects(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { z: {x: 1, y: 2} }, b: 2 }, { a: { z: {x: 1, y: 2} }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: {x: 1, y: 2} }, b: {c: [1,2,3], d: [4,5,6], e: [7,8,9]} }, { a: { z: {x: 1, y: 2} }, b: {c: [1,2,3], d: [4,5,6], e: [7,8,9]} }), true);