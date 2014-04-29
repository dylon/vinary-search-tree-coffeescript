if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  Iterator = require('./iterator').vst.Iterator
  Node = require('./node').vst.Node
  MaxHeap = require('./max_heap').vst.MaxHeap
  p = require('./predicates').vst.predicates
  f = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  Iterator = window.vst.Iterator
  Node = window.vst.Node
  MaxHeap = window.vst.MaxHeap
  p = window.vst.predicates
  f = windwow.vst.functions
else
  global = this
  Entity = this.vst.Entity
  Iterator = this.vst.Iterator
  Node = this.vst.Node
  MaxHeap = this.vst.MaxHeap
  p = this.vst.predicates
  f = this.vst.functions

class NearestNeighborIterator extends Iterator
  @of: (neighbors) ->
    f.assert neighbors instanceof MaxHeap
    neighbors.sort()
    new NearestNeighborIterator().neighbors(neighbors.heap)
  @empty: () -> new NearestNeighborIterator().neighbors([])
  constructor: (subtypes=[]) ->
    f.assert p.is_array(subtypes)
    subtypes.push(NearestNeighborIterator)
    super(subtypes)
  advance: () ->
    if @next_element() is null and @index() < @neighbors().length
      @next_element(@neighbors()[@index()])
      @index(1 + @index())
    true

Entity.def_properties(NearestNeighborIterator, {
  neighbors: {is_valid: p.is_array}
  index: {is_valid: p.is_non_negative_number, initial_value: 0}
})

Entity.def_toString(NearestNeighborIterator)

global.vst ||= {}
global.vst.NearestNeighborIterator = NearestNeighborIterator
