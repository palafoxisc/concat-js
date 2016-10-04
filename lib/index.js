window.esmas =
  (function () {
    'use strict';
    var concat = function () {
      if (isEmpty(arguments) || isEmpty(arguments[0]))
        return "";

      if (arguments.length == 1 && isArray(arguments[0].constructor)) {
        return toString(clear(arguments[0]));
      } else {
        return concat(Array.from(arguments));
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

    var isArray = function (obj) {
      return obj === Array;
    };

    var functions = {
      concat: concat
    };

    return functions;

  })();
