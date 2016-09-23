var _ = require('chai').should();
var lib = require('../lib/index');


describe('concat function', function () {

  it('concatenates not null parameters into a string', function (done) {
    var concat = lib.concat("hello", null, "world!");
    concat.should.equal("hello world!");
    console.log(concat);
    done();
  });

  it('concatenates not null array elements into a string', function (done) {
    var concat = lib.concat(["hello", null, "world!"]);
    concat.should.equal("hello world!");
    done();
  });

});
