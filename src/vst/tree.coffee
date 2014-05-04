if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  Node = require('./node').vst.Node
  RangeIterator = require('./range_iterator').vst.RangeIterator
  NearestNeighborIterator = require('./nearest_neighbor_iterator').vst.NearestNeighborIterator
  MaxHeap = require('./max_heap').vst.MaxHeap
  p = require('./predicates').vst.predicates
  f = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  Node = window.vst.Node
  RangeIterator = window.vst.RangeIterator
  NearestNeighborIterator = window.vst.NearestNeighborIterator
  MaxHeap = window.vst.MaxHeap
  p = window.vst.predicates
  f = window.vst.functions
else
  global = this
  Entity = this.vst.Entity
  Node = this.vst.Node
  RangeIterator = this.vst.RangeIterator
  NearestNeighborIterator = this.vst.NearestNeighborIterator
  MaxHeap = this.vst.MaxHeap
  p = this.vst.predicates
  f = this.vst.functions

class Tree extends Entity
  constructor: (subtypes=[]) ->
    subtypes.push(Tree)
    super(subtypes)
  is_node_type: (node) -> node instanceof @NodeType()
  height: () ->
    if p.is_defined(@root())
      @root().height()
    else
      0
  greatest: (node=@root()) ->
    return null if node is null
    while node.greater_child()
      node = node.greater_child()
    node
  least: (node=@root()) ->
    return null if node is null
    while node.lesser_child()
      node = node.lesser_child()
    node
  try_insert: (key, value) ->
    if p.is_null @root()
      @root @NodeType().of(key, value)
      @size(@size() + 1)
      true
    else if @contains_key(key) is false
      @add_descendant @root(), @NodeType().of(key, value)
      @size(@size() + 1)
      true
    else
      false
  insert: (key, value) ->
    if @root() is null
      @root @NodeType().of(key, value)
    else if node = @find(key)
      node.values().push(value)
    else
      @add_descendant @root(), @NodeType().of(key, value)
    @size(@size() + 1)
    this
  contains_key: (key) ->
    null isnt @find(key)
  find: (key) ->
    node = @root()
    while node
      comp = @comparator()(key, node.key())
      if comp > 0
        node = node.greater_child()
      else if comp < 0
        node = node.lesser_child()
      else
        break
    node
  find_nearest: (key) ->
    node = @root()
    while node
      comp = @comparator()(key, node.key())
      if comp > 0
        break if node.greater_child() is null
        node = node.greater_child()
      else if comp < 0
        break if node.lesser_child() is null
        node = node.lesser_child()
      else
        break
    node
  find_nearest_gte: (key) ->
    node = @find_nearest(key)
    while node and @comparator()(node.key(), key) < 0
      node = node.greater_neighbor()
    node
  find_nearest_lte: (key) ->
    node = @find_nearest(key)
    while node and @comparator()(node.key(), key) > 0
      node = node.lesser_neighbor()
    node
  remove: (key, value) ->
    if node = @find(key)
      if p.is_defined(value)
        for candidate, index in node.values()
          if candidate is value
            node.values().splice(index, 1)
            if node.values().length is 0
              @remove_node(node)
            @size(@size() - 1)
            return true
        false
      else
        @size(@size() - node.values().length)
        @remove_node(node)
        true
    else
      false
  preorder: (fn, node=@root()) ->
    if node
      fn(node)
      @preorder(fn, node.lesser_child()) if node.lesser_child()
      @preorder(fn, node.greater_child()) if node.greater_child()
    this
  inorder: (fn, node=@root()) ->
    if node
      @inorder(fn, node.lesser_child()) if node.lesser_child()
      fn(node)
      @inorder(fn, node.greater_child()) if node.greater_child()
    this
  postorder: (fn, node=@root()) ->
    if node
      @postorder(fn, node.lesser_child()) if node.lesser_child()
      @postorder(fn, node.greater_child()) if node.greater_child()
      fn(node)
    this
  range: (lower, upper) ->
    node = @find_nearest_gte(lower)
    RangeIterator.of(node, upper, @comparator())
  neighbors: (key, n_lesser, n_greater) ->
    if node = @find_nearest(key)
      comp = @comparator()(node.key(), key)
      if (least = if comp < 0 then node else node.lesser_neighbor())
        n = 1
        while n < n_lesser
          break unless least.lesser_neighbor()
          least = least.lesser_neighbor()
          n += 1
      if (greatest = if comp > 0 then node else node.greater_neighbor())
        n = 1
        while n < n_greater
          break unless greatest.greater_neighbor()
          greatest = greatest.greater_neighbor()
          n += 1
      lower_node = least || node
      upper_key = if greatest then greatest.key() else node.key()
      RangeIterator.of lower_node, upper_key, @comparator()
    else
      RangeIterator.empty()
  nearest_neighbors: (key, k, distance) ->
    if node = @find_nearest(key)
      NearestNeighborIterator.of(node, key, k, distance)
    else
      NearestNeighborIterator.empty()

Entity.def_abstract_methods(Tree, {
  add_descendant: {arity: 2}
  remove_node: {arity: 1}
})

Entity.def_properties(Tree, {
  comparator: {}
  size: {initial_value: 0}
  NodeType: {}
  root: {initial_value: null}
})

global.vst ||= {}
global.vst.Tree = Tree
