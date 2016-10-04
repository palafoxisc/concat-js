describe('concat function', function () {

  it('returns empty string when the function is called without parameters', function (done) {
    var concat = esmas.concat();
    expect(concat).toBe("");
    done();
  });

  it('returns empty string when the function is called with an empty array', function (done) {
    var concat = esmas.concat([]);
    expect(concat).toBe("");
    done();
  });

  it('returns empty string when the function is called with null', function (done) {
    var concat = esmas.concat(null);
    expect(concat).toBe("");
    done();
  });

  it('concatenates not null parameters into a string', function (done) {
    var concat = esmas.concat("hello", null, "world!");
    expect(concat).toBe("hello world!");
    done();
  });

  it('concatenates not null array elements into a string', function (done) {
    var concat = esmas.concat(["hello", null, "world!"]);
    expect(concat).toBe("hello world!");
    done();
  });

});
