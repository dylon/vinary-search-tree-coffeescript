// Generated by CoffeeScript 1.7.1
(function() {
  var assert, global, p, predicates,
    __slice = [].slice;

  global = typeof window !== 'undefined' ? window : typeof exports !== 'undefined' ? exports : this;

  assert = function(truth, message) {
    if (!p.is_boolean(truth)) {
      throw new Error("Expected truth=" + truth + " to be a boolean");
    }
    if (!(p.is_undefined(message) || p.is_string(message))) {
      throw new Error("Expected message=" + message + " to be a string");
    }
    if (truth === false) {
      if (message) {
        throw new Error("Assertion error: " + message);
      } else {
        throw new Error("Assertion error");
      }
    }
    return true;
  };

  p = predicates = {
    tautology: function() {
      return true;
    },
    contradiction: function() {
      return false;
    },
    is_number: function(number) {
      return typeof number === 'number';
    },
    is_negative_number: function(number) {
      return p.is_number(number) && number < 0;
    },
    is_non_positive_number: function(number) {
      return p.is_number(number) && number <= 0;
    },
    is_non_negative_number: function(number) {
      return p.is_number(number) && number >= 0;
    },
    is_positive_number: function(number) {
      return p.is_number(number) && number > 0;
    },
    is_boolean: function(bool) {
      return typeof bool === 'boolean';
    },
    is_string: function(string) {
      return typeof string === 'string';
    },
    is_function: function(fn) {
      return typeof fn === 'function';
    },
    is_constructor: function(fn) {
      return p.is_function(fn) && p.is_object(fn.prototype);
    },
    is_null: function(value) {
      return value === null;
    },
    is_undefined: function(value) {
      return value === undefined;
    },
    is_defined: function(value) {
      return !p.is_undefined(value) && !p.is_null(value);
    },
    is_object: function(value) {
      return typeof value === 'object' && !p.is_null(value);
    },
    is_array: function(value) {
      return p.is_object(value) && p.is_non_negative_number(value.length);
    },
    is_instance: function(type) {
      assert(p.is_function(type));
      return function(instance) {
        return instance instanceof type;
      };
    },
    is_type: function(type) {
      assert(p.is_function(type));
      return function(subtype) {
        return p.is_function(subtype) && subtype.prototype instanceof type;
      };
    },
    is_bounded: function(lower, upper) {
      assert(p.is_number(lower) && p.is_number(upper));
      return function(value) {
        return p.is_number(value) && (lower <= value && value <= upper);
      };
    },
    is_lt: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value < n;
      };
    },
    is_lte: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value <= n;
      };
    },
    is_eq: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value === n;
      };
    },
    is_gte: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value >= n;
      };
    },
    is_gt: function(n) {
      assert(p.is_number(n));
      return function(value) {
        return p.is_number(value) && value > n;
      };
    },
    is_equal: function(target) {
      return function(value) {
        return value === target;
      };
    },
    there_exists: function(is_valid) {
      assert(p.is_function(is_valid));
      return function(elements) {
        var element, _i, _len;
        p.assert(p.is_array(elements));
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          element = elements[_i];
          if (is_valid.call(this, element) === true) {
            return true;
          }
        }
        return false;
      };
    },
    for_all: function(is_valid) {
      assert(p.is_function(is_valid));
      return function(elements) {
        var element, _i, _len;
        p.assert(p.is_array(elements));
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          element = elements[_i];
          if (is_valid.call(this, element) === false) {
            return false;
          }
        }
        return true;
      };
    },
    disjoin: function() {
      var f, fs, g, gs;
      fs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      switch (fs.length) {
        case 0:
          return p.tautology;
        case 1:
          f = fs[0];
          return function(value) {
            return f.call(this, value);
          };
        case 2:
          f = fs[0], g = fs[1];
          return function(value) {
            return f.call(this, value) || g.call(this, value);
          };
        default:
          f = fs[0], gs = 2 <= fs.length ? __slice.call(fs, 1) : [];
          g = conjoin.apply(null, gs);
          return function(value) {
            return f.call(this, value) || g.call(this, value);
          };
      }
    },
    conjoin: function() {
      var f, fs, g, gs;
      fs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      switch (fs.length) {
        case 0:
          return p.tautology;
        case 1:
          f = fs[0];
          return function(value) {
            return f.call(this, value);
          };
        case 2:
          f = fs[0], g = fs[1];
          return function(value) {
            return f.call(this, value) && g.call(this, value);
          };
        default:
          f = fs[0], gs = 2 <= fs.length ? __slice.call(fs, 1) : [];
          g = conjoin.apply(null, gs);
          return function(value) {
            return f.call(this, value) && g.call(this, value);
          };
      }
    }
  };

  global.vst || (global.vst = {});

  global.vst.predicates = predicates;

}).call(this);