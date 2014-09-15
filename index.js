/**
 * A `fullName` function that takes a person object with the properties 
 * firstName` and `lastName` and returns their full name. 
 * A function that takes an array of people and returns an array of 
 * their full names.
 *
 * @param {Array} An array of objects that each have the same properties.
 * @param {Function} pulls the properties to make a new objects: the "name"
 * @param {Function} creates arrays with "names" from the arrays.
 * @returns {words} new array of all the Names.
 * 
 */
 var forEach = function(array, fn) {
  var next = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      next(array, n+1, fn);
    }
  };
  next(array, 0, fn);
};

module.exports.fullName = function(array, fn) {

  var newArray = []; 
  forEach(array, function(item) {
    newArray.push(fn(item))
  });

  return newArray
  ;
};



