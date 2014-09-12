var chai = require('chai');
var expect = chai.expect;

var functions = require('./index');
var fullName = functions.fullName;



describe( "puts all the people's full name()", function() {
  it('find first name and the last name and creat a new array', function() {
    
    var result = fullName(names);
    expect(result).to.eql(['Andrea Moulding']);
  });
});