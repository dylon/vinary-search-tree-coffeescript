if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  Iterator = require('./iterator').vst.Iterator
  Node = require('./node').vst.Node
  p = require('./predicates').vst.predicates
  f = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  Iterator = window.vst.Iterator
  Node = window.vst.Node
  p = window.vst.predicates
  f = windwow.vst.functions
else
  global = this
  Entity = this.vst.Entity
  Iterator = this.vst.Iterator
  Node = this.vst.Node
  p = this.vst.predicates
  f = this.vst.functions

class NearestNeighborIterator extends Iterator
  @of: (node, key, k, distance) ->
    iter = new NearestNeighborIterator()
      .distance(distance)
      .key(key)
      .k(k)
    if k > 0
      iter.next_element(node)
        .greater_neighbor(node.greater_neighbor())
        .lesser_neighbor(node.lesser_neighbor())
        .i(1)
    iter
  @empty: () -> new NearestNeighborIterator().neighbors([])
  constructor: (subtypes=[]) ->
    f.assert p.is_array(subtypes)
    subtypes.push(NearestNeighborIterator)
    super(subtypes)
  advance: () ->
    if @next_element() is null and @i() < @k()
      if @lesser_neighbor()
        if @greater_neighbor()
          d_lesser_neighbor = @distance()(@lesser_neighbor().key(), @key())
          d_greater_neighbor = @distance()(@greater_neighbor().key(), @key())
          if d_lesser_neighbor < d_greater_neighbor
            @next_element(@lesser_neighbor())
            @lesser_neighbor(@lesser_neighbor().lesser_neighbor())
            @i(1 + @i())
          else
            @next_element(@greater_neighbor())
            @greater_neighbor(@greater_neighbor().greater_neighbor())
            @i(1 + @i())
        else
          @next_element(@lesser_neighbor())
          @lesser_neighbor(@lesser_neighbor().lesser_neighbor())
          @i(1 + @i())
      else if @greater_neighbor()
        @next_element(@greater_neighbor())
        @greater_neighbor(@greater_neighbor().greater_neighbor())
        @i(1 + @i())
    true

Entity.def_properties(NearestNeighborIterator, {
  node: {is_valid: p.is_instance(Node)}
  lesser_neighbor: {is_valid: p.disjoin(p.is_instance(Node), p.is_null)}
  greater_neighbor: {is_valid: p.disjoin(p.is_instance(Node), p.is_null)}
  key: {is_valid: p.is_defined}
  k: {is_valid: p.is_non_negative_number}
  i: {is_valid: p.is_non_negative_number, initial_value: 0}
  distance: {is_valid: p.is_function}
})

Entity.def_toString(NearestNeighborIterator)

global.vst ||= {}
global.vst.NearestNeighborIterator = NearestNeighborIterator
