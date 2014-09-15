var chai = require('chai');
var expect = chai.expect;

var functions = require('./index');
var fullName = functions.fullName;



describe('fullName()', function() {
  it('creat full name from objects in the array', function() {
  	var name1 = {};
    var name2 = {};
    var name3 = {};
    name1.firstName = 'Andrea', name1.lastName = 'Moulding';
    name2.firstName = 'Bob', name2.lastName = 'Vanderbuilt'; 
    name3.firstName = 'Suzie', name3.lastName = 'Little';
    var nameArray = [name1, name2, name3]
    var mergeNames = function (nameArray) {
      return firstName + lastName
    }
  	var result = fullName(nameArray, mergeNames);
    expect(result).to.eql(['Andrea Moulding', 'Bob Vanderbuilt', 'Suzie Little']);
  });
});