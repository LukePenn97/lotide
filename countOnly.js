const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    for (const goodItem in itemsToCount) {
      if (item === goodItem && itemsToCount[goodItem]) {
        if (results[item]) {
          results[item] += 1;
        } else {
          results[item] = 1;
        }
      }
    }
  }
  return results;
};

module.exports = countOnly;