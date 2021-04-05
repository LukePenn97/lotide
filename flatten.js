const flatten = function(array) {
  let flattened = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const elem of element) {
        flattened.push(elem);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

module.exports = flatten;