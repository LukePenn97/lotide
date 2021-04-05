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
module.exports = letterPositions;