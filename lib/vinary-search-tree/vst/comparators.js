// Generated by CoffeeScript 1.7.1
(function() {
  var c, comparators, global;

  global = typeof exports !== void 0 ? exports : typeof window !== void 0 ? window : this;

  c = comparators = {
    c_number: function(a, b) {
      return a - b;
    },
    c_string_case_sensitive: function(a, b) {
      return a.localeCompare(b);
    },
    c_string_case_insensitive: function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
  };

  global.vst || (global.vst = {});

  global.vst.comparators = comparators;

}).call(this);