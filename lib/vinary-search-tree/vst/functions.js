// Generated by CoffeeScript 1.7.1
(function() {
  var f, functions, global, p,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty;

  if (typeof exports !== 'undefined') {
    global = exports;
    p = require('./predicates').vst.predicates;
  } else if (typeof window !== 'undefined') {
    global = window;
    p = window.vst.predicates;
  } else {
    global = this;
    p = this.vst.predicates;
  }

  f = functions = {
    assert: function(truth, message) {
      if (!p.is_boolean(truth)) {
        throw new Error("Expected truth=" + (f.to_string(truth)) + " to be a boolean");
      }
      if (!(p.is_undefined(message) || p.is_string(message))) {
        throw new Error("Expected message=" + (f.to_string(message)) + " to be a string");
      }
      if (truth === false) {
        if (p.is_undefined(message)) {
          throw new Error('Assertion failed');
        } else {
          throw new Error("Assertion failed: " + message);
        }
      }
    },
    proxy: function(fn, self) {
      return function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return fn.apply(self, args);
      };
    },
    to_string: function(value) {
      var attrs, e, elems, k, v, _i, _len;
      if (p.is_null(value)) {
        return 'null';
      } else if (p.is_undefined(value)) {
        return 'undefined';
      } else if (p.is_array(value)) {
        elems = [];
        for (_i = 0, _len = value.length; _i < _len; _i++) {
          e = value[_i];
          elems.push(f.to_string(e));
        }
        return '[' + elems.join(', ') + ']';
      } else if (p.is_object(value)) {
        if (value.toString === Object.prototype.toString) {
          attrs = [];
          for (k in value) {
            if (!__hasProp.call(value, k)) continue;
            v = value[k];
            attrs.push(k + ': ' + f.to_string(v));
          }
          return '{' + attrs.join(', ') + '}';
        } else {
          return value.toString();
        }
      } else if (p.is_string(value)) {
        return '"' + value + '"';
      } else {
        return value.toString();
      }
    }
  };

  global.vst || (global.vst = {});

  global.vst.functions = functions;

}).call(this);
