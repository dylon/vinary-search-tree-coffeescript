if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  p = require('./predicates').vst.predicates
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  p = window.vst.predicates
else
  global = this
  Entity = this.vst.Entity
  p = this.vst.predicates

class Iterator extends Entity
  Iterator: (subtypes=[]) ->
    if this.constructor is Iterator
      throw new Error("vst.Iterator should not be instantiated directly")
    if subtypes.length is 0
      throw new Error("You must specify the subtype as an array to this constructor")
    subtypes.push(Iterator)
    super(subtypes)
  has_next: () ->
    @advance()
    @next_element() isnt null
  peek: () ->
    @advance()
    @next_element()
  next: () ->
    @advance()
    next_element = @next_element()
    @next_element(null)
    next_element

Entity.def_abstract_methods(Iterator, {
  advance: {arity: 0}
})

Entity.def_properties(Iterator, {
  next_element: {initial_value: null, is_valid: p.tautology}
})

global.vst ||= {}
global.vst.Iterator = Iterator
