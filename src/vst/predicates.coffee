global =
  if typeof window isnt 'undefined'
    window
  else if typeof exports isnt 'undefined'
    exports
  else
    this

assert = (truth, message) ->
  unless p.is_boolean(truth)
    throw new Error("Expected truth=#{truth} to be a boolean")
  unless p.is_undefined(message) or p.is_string(message)
    throw new Error("Expected message=#{message} to be a string")
  if truth is false
    if message
      throw new Error("Assertion error: #{message}")
    else
      throw new Error("Assertion error")
  true

p = predicates = {
  tautology: () -> true
  contradiction: () -> false
  is_number: (number) -> typeof number is 'number'
  is_negative_number: (number) -> p.is_number(number) and number < 0
  is_non_positive_number: (number) -> p.is_number(number) and number <= 0
  is_non_negative_number: (number) -> p.is_number(number) and number >= 0
  is_positive_number: (number) -> p.is_number(number) and number > 0
  is_boolean: (bool) -> typeof bool is 'boolean'
  is_string: (string) -> typeof string is 'string'
  is_function: (fn) -> typeof fn is 'function'
  is_constructor: (fn) -> p.is_function(fn) and p.is_object(fn.prototype)
  is_null: (value) -> value is null
  is_undefined: (value) -> value is `undefined`
  is_defined: (value) -> not p.is_undefined(value) and not p.is_null(value)
  is_object: (value) -> typeof value is 'object' and not p.is_null(value)
  is_array: (value) -> p.is_object(value) and p.is_non_negative_number(value.length)
  # Factories
  has_arity: (n) ->
    assert p.is_non_negative_number(n)
    (fn) -> fn.length is n
  is_instance: (type) ->
    assert p.is_function(type)
    (instance) -> instance instanceof type
  is_type: (type) ->
    assert p.is_function(type)
    (subtype) -> p.is_function(subtype) and subtype.prototype instanceof type
  is_bounded: (lower, upper) ->
    assert p.is_number(lower) and p.is_number(upper)
    (value) -> p.is_number(value) and lower <= value <= upper
  is_lt: (n) ->
    assert p.is_number(n)
    (value) -> p.is_number(value) and value < n
  is_lte: (n) ->
    assert p.is_number(n)
    (value) -> p.is_number(value) and value <= n
  is_eq: (n) ->
    assert p.is_number(n)
    (value) -> p.is_number(value) and value is n
  is_gte: (n) ->
    assert p.is_number(n)
    (value) -> p.is_number(value) and value >= n
  is_gt: (n) ->
    assert p.is_number(n)
    (value) -> p.is_number(value) and value > n
  is_equal: (target) -> (value) -> value is target
  there_exists: (is_valid) ->
    assert p.is_function(is_valid)
    (elements) ->
      assert p.is_array(elements)
      for element in elements
        return true if is_valid.call(this, element) is true
      false
  for_all: (is_valid) ->
    assert p.is_function(is_valid)
    (elements) ->
      assert p.is_array(elements)
      for element in elements
        return false if is_valid.call(this, element) is false
      true
  disjoin: (fs...) ->
    switch fs.length
      when 0
        p.tautology
      when 1
        [f] = fs
        (value) -> f.call(this, value)
      when 2
        [f, g] = fs
        (value) -> f.call(this, value) || g.call(this, value)
      else
        [f, gs...] = fs
        g = p.disjoin.apply(null, gs)
        (value) -> f.call(this, value) || g.call(this, value)
  conjoin: (fs...) ->
    switch fs.length
      when 0
        p.tautology
      when 1
        [f] = fs
        (value) -> f.call(this, value)
      when 2
        [f, g] = fs
        (value) -> f.call(this, value) && g.call(this, value)
      else
        [f, gs...] = fs
        g = p.conjoin.apply(null, gs)
        (value) -> f.call(this, value) && g.call(this, value)
}

global.vst ||= {}
global.vst.predicates = predicates
