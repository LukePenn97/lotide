const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘🆘🆘 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letters = {};
  let noSpace = sentence.split(" ").join("").toLowerCase();
  for (let char of noSpace) {
    if (letters[char]) {
      letters[char] += 1;
    } else {
      letters[char] = 1;
    }
  }
  return letters;
};

console.log(countLetters("Hannah Is The Best"));