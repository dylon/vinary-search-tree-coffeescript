if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  p = require('./predicates').vst.predicates
  f = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  p = window.vst.predicates
  f = windwow.vst.functions
else
  global = this
  Entity = this.vst.Entity
  p = this.vst.predicates
  f = this.vst.functions

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
  to_array: () ->
    array = []
    array.push @next() while @has_next()
    array
  mapref: (ref, args...) -> @map () -> @[ref].apply(this, args)
  map: (fn) -> MapIterator.of(this, fn)
  each: (fn) ->
    f.assert p.is_function(fn)
    index = 0
    while @has_next()
      element = @next()
      fn.call(element, element, index)
      index += 1
    this
  select: (is_valid) -> SelectIterator.of(this, is_valid)
  exclude: (is_valid) -> ExcludeIterator.of(this, is_valid)
  take: (n) -> TakeIterator.of(this, n)
  take_while: (is_valid) -> TakeWhileIterator.of(this, is_valid)
  drop: (n) ->
    f.assert p.is_non_negative_number(n)
    i = -1; while (i += 1) < n and @has_next()
      @next()
    this
  drop_while: (is_valid) ->
    f.assert p.is_function(is_valid)
    i = -1; while (i += 1) < n and @has_next()
      break unless is_valid.call(@peek(), @peek())
      @next()
    this

Entity.def_abstract_methods(Iterator, {
  advance: {arity: 0}
})

Entity.def_properties(Iterator, {
  next_element: {initial_value: null, is_valid: p.tautology}
})

is_iterator = p.is_instance(Iterator)

class MapIterator extends Iterator
  @of: (iterator, fn) ->
    new MapIterator().iterator(iterator).fn(fn)
  constructor: (subtypes=[]) ->
    f.assert p.is_array(subtypes)
    subtypes.push(MapIterator)
    super(subtypes)
  advance: () ->
    if @next_element() is null and @iterator().has_next()
      element = @iterator().next()
      @next_element(@fn().call(element, element, @i()))
      @i(1 + @i())
    true

Entity.def_properties(MapIterator, {
  iterator: {is_valid: is_iterator}
  fn: {is_valid: p.is_function}
  i: {is_valid: p.is_non_negative_number, initial_value: 0}
})

Entity.def_toString(MapIterator)

class TakeIterator extends Iterator
  @of: (iterator, n) ->
    new TakeIterator().iterator(iterator).n(n)
  constructor: (subtypes=[]) ->
    f.assert p.is_array(subtypes)
    subtypes.push(TakeIterator)
    super(subtypes)
  advance: () ->
    if @next_element() is null and @i() < @n()
      @next_element(@iterator().next())
    true

Entity.def_properties(TakeIterator, {
  iterator: {is_valid: is_iterator}
  n: {is_valid: p.is_non_negative_number}
  i: {is_valid: p.is_non_negative_number, initial_value: 0}
})

Entity.def_toString(TakeIterator)

class TakeWhileIterator extends Iterator
  @of: (iterator, is_valid) ->
    new TakeWhileIterator().iterator(iterator).n(is_valid)
  constructor: (subtypes=[]) ->
    f.assert p.is_array(subtypes)
    subtypes.push(TakeWhileIterator)
    super(subtypes)
  advance: () ->
    if @next_element() is null and @iterator().has_next()
      element = @iterator().peek()
      if @is_valid().call(element, element)
        @next_element(@iterator().next())
    true

Entity.def_properties(TakeWhileIterator, {
  iterator: {is_valid: is_iterator}
  is_valid: {is_valid: p.is_function}
})

Entity.def_toString(TakeWhileIterator)

class SelectIterator extends Iterator
  @of: (iterator, is_valid) ->
    new SelectIterator().iterator(iterator).is_valid(is_valid)
  constructor: (subtypes=[]) ->
    f.assert p.is_array(subtypes)
    subtypes.push(SelectIterator)
    super(subtypes)
  advance: () ->
    if @next_element() is null
      element = @iterator().next()
      while element and @is_valid().call(element, element) is false
        element = @iterator().next()
      @next_element(element)
    true

Entity.def_properties(SelectIterator, {
  iterator: {is_valid: is_iterator}
  is_valid: {is_valid: p.is_function}
})

Entity.def_toString(SelectIterator)

class ExcludeIterator extends Iterator
  @of: (iterator, is_valid) ->
    new ExcludeIterator().iterator(iterator).is_valid(is_valid)
  constructor: (subtypes=[]) ->
    f.assert p.is_array(subtypes)
    subtypes.push(ExcludeIterator)
    super(subtypes)
  advance: () ->
    if @next_element() is null
      element = @iterator().next()
      while element and @is_valid().call(element, element) is true
        element = @iterator().next()
      @next_element(element)
    true

Entity.def_properties(ExcludeIterator, {
  iterator: {is_valid: is_iterator}
  is_valid: {is_valid: p.is_function}
})

Entity.def_toString(ExcludeIterator)

global.vst ||= {}
global.vst.Iterator = Iterator
