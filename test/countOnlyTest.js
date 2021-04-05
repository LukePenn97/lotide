const assert = require('chai').assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it('for the array firstNames: \["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"\], countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }) returns { Fang: 2, Jason: 1 }', () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
  });
});




