# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Takes an array and returns the first element.
* `middle(array)`: Takes an array and returns the middle element(s).
* `tail(array)`: Takes an array and returns all elements except the head.
* `letterPositions(string)`: Takes a string and returns an object with each letter as a key paired with the number of times it occured in the string.
* `flatten(array)`: Takes any nested array and returns a flattened array.
* `findKeyByValue(object , value)`: Takes an object and a value and returns a key with the matching value.
* `eqObjects(object1, object2)`: Takes 2 objects and compares them.
* `eqArrays(array1, array2)`: Takes 2 arrays and compares them.
* `countOnly(array, object)`: Takes an array and an object, and if the keys match any values in the array, and also have true values in the object, it returns an object with those keys paired with the number of times they appeared in the array