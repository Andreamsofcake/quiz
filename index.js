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

module.exports.fullName = function (array1, array2) {
	var newArray = [] 
	array1.forEach(function(word) {
		array2.forEach(function(word2){
			if(word === word2) {
				newArray.push(word);
			}
		});
  	});
	return newArray;
};

