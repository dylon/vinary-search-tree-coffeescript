if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  Iterator = require('./iterator').vst.Iterator
  Node = require('./node').vst.Node
  p = require('./predicates').vst.predicates
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  Iterator = window.vst.Iterator
  Node = window.vst.Node
  p = window.vst.predicates
else
  global = this
  Entity = this.vst.Entity
  Iterator = this.vst.Iterator
  Node = this.vst.Node
  p = this.vst.predicates

class RangeIterator extends Iterator
  @of: (node, upper_key, comparator) ->
    new RangeIterator()
      .node(node)
      .upper_key(upper_key)
      .comparator(comparator)
  @empty: () -> @of null, -1, (a,b) -> 1
  constructor: (subtypes=[]) ->
    subtypes.push(RangeIterator)
    super(subtypes)
  advance: () ->
    if @next_element() is null and @node()
      if @comparator()(@node().key(), @upper_key()) <= 0
        @next_element(@node())
        @node(@node().greater_neighbor())
    true

Entity.def_properties(RangeIterator, {
  comparator: {}
  node: {}
  upper_key: {}
})

Entity.def_toString(RangeIterator)

global.vst ||= {}
global.vst.RangeIterator = RangeIterator
