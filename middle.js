const middle = function(array) {
  let mid = [];
  let midPoint = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return mid;
  } else if (!(array.length % 2)) {
    mid = array.slice(midPoint - 1, midPoint + 1);
  } else {
    mid.push(array[midPoint]);
  }
  return mid;
};

module.exports = middle;