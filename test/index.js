var _ = require('chai').should();
var lib = require('../lib/index');


describe('concat function', function () {

  it('returns empty string when the function is called without parameters', function (done) {
    var concat = lib.concat();
    concat.should.equal("");
    done();
  });

  it('returns empty string when the function is called with an empty array', function (done) {
    var concat = lib.concat([]);
    concat.should.equal("");
    done();
  });

  it('returns empty string when the function is called with null', function (done) {
    var concat = lib.concat(null);
    concat.should.equal("");
    done();
  });


  it('concatenates not null parameters into a string', function (done) {
    var concat = lib.concat("hello", null, "world!");
    concat.should.equal("hello world!");
    done();
  });

  it('concatenates not null array elements into a string', function (done) {
    var concat = lib.concat(["hello", null, "world!"]);
    concat.should.equal("hello world!");
    done();
  });

});
