'use strict';

module.exports = {
  concat: function () {
    if (arguments.length == 1 && arguments[0].constructor === Array) {
      return toString(clear(arguments[0]));
    } else {
      var arr = [];
      for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
      }
      return this.concat(arr);
    }
  }
};

var clear = function (arr) {
  return arr.filter(not(isEmpty));
};

var toString = function (arr) {
  return interpose(' ', arr);
};

var interpose = function (c, arr) {
  return arr.reduce((str, e) => str + c + e);
};

var isEmpty = function (obj) {
  return (!obj || 0 === obj.length);
};

var not = function (fn) {
  return function (x) {
    return !fn(x);
  };
};
