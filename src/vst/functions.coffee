if typeof exports isnt undefined
  global = exports
  p = require('./predicates').vst.predicates
else if typeof window isnt undefined
  global = window
  p = window.vst.predicates
else
  global = this
  p = this.vst.predicates

f = functions = {
  assert: (truth, message) ->
    unless p.is_boolean(truth)
      throw new Error("Expected truth=#{f.to_string truth} to be a boolean")
    unless p.is_undefined(message) or p.is_string(message)
      throw new Error("Expected message=#{f.to_string message} to be a string")
    if truth is false
      if p.is_undefined(message)
        throw new Error('Assertion failed')
      else
        throw new Error("Assertion failed: #{message}")
  proxy: (fn, self) -> (args...) -> fn.apply(self, args)
  to_string: (value) ->
    if p.is_null(value)
      'null'
    else if p.is_undefined(value)
      'undefined'
    else if p.is_array(value)
      elems = []
      for e in value
        elems.push f.to_string(e)
      '[' + elems.join(', ') + ']'
    else if p.is_object(value)
      if value.toString is Object::toString
        attrs = []
        for own k,v of value
          attrs.push k + ': ' + f.to_string(v)
        '{' + attrs.join(', ') + '}'
      else
        value.toString()
    else if p.is_string(value)
      '"' + value + '"'
    else
      value.toString()
}

global.vst ||= {}
global.vst.functions = functions
