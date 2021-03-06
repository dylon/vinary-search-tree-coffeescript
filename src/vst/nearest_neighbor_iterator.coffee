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

find_nearest = (key, node, distance) ->
  lesser = node.lesser_neighbor()
  greater = node.greater_neighbor()
  while true
    if lesser
      if greater
        d_0 = distance(node.key(), key)
        d_1 = distance(lesser.key(), key)
        d_2 = distance(greater.key(), key)
        if d_1 < d_0
          if d_2 < d_1
            node = greater
            greater = greater.greater_neighbor()
          else
            node = lesser
            lesser = lesser.lesser_neighbor()
        else if d_2 < d_0
          node = greater
          greater = greater.greater_neighbor()
        else
          return node
      else if distance(lesser.key(), key) < distance(node.key(), key)
        node = lesser
        lesser = lesser.lesser_neighbor()
      else
        return node
    else if greater
      if distance(greater.key(), key) < distance(node.key(), key)
        node = greater
        greater = greater.greater_neighbor()
      else
        return node
    else
      return node

class NearestNeighborIterator extends Iterator
  @of: (node, key, k, distance) ->
    node = find_nearest(key, node, distance)
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
  node: {}
  lesser_neighbor: {}
  greater_neighbor: {}
  key: {}
  k: {}
  i: {initial_value: 0}
  distance: {}
})

Entity.def_toString(NearestNeighborIterator)

global.vst ||= {}
global.vst.NearestNeighborIterator = NearestNeighborIterator
