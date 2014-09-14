/**
 * Compares to files and finds words in common and number of words
 * in common.
 *
 * @param {File} Two text files
 * @param {Function} creates arrays with words from the files.
 * @param {function} compare shared words in the arrays.
 * @param {Function} to count shared words.
 * @returns {words} new array of all the words in common.
 * @returns {number} number of words in the array.
 */

/**
 * Creates array with common words from the two input arrays.
 * 
 * @param {Array.<String>} array1 First array of words.
 * @param {Array.<String>} array2 Second array of words.
 * @returns {Array.<String>} Common words.
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

