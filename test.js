var chai = require('chai');
var expect = chai.expect;

var functions = require('./index');
var findWord = functions.findWord;



describe('fullName()', function() {
  it('find words in common', function() {
  	var array1 = [];
  	var array2 = [];
  	var result = findWord(array1, array2);
    expect(result).to.eql(['Andrea Moulding']);
  });
});