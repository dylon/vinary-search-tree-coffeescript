if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  p = require('./predicates').vst.predicates
  f = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  p = window.vst.predicates
  f = window.vst.functions
else
  global = this
  Entity = this.vst.Entity
  p = this.vst.predicates
  f = this.vst.functions

class Node extends Entity
  constructor: (subtypes=[]) ->
    if this.constructor is Node
      throw new Error("vst.Node should not be instantiated directly")
    if subtypes.length is 0
      throw new Error("You must specify the subtype as an array to this constructor")
    subtypes.push(Node)
    super(subtypes)
  is_leaf: () -> @lesser_child() is null and @greater_child() is null
  is_branch: () -> !!@lesser_child() ^ !!@greater_child() is 1
  value: () ->
    if @values().length is 0
      null
    else if @values().length is 1
      @values()[0]
    else
      throw new Error("There are multiple values, please use Node::values() instead.")

Entity.def_properties(Node, {
  key: {is_valid: p.tautology}
  values: {is_valid: p.is_array, init: () -> []}
  height: {
    initial_value: 0
    is_valid: p.is_non_negative_number
  }
  greater_child: {
    initial_value: null
    is_valid: p.disjoin(p.is_null, p.is_instance(Node))
  }
  lesser_child: {
    initial_value: null
    is_valid: p.disjoin(p.is_null, p.is_instance(Node))
  }
  greater_neighbor: {
    initial_value: null
    is_valid: p.disjoin(p.is_null, p.is_instance(Node))
    stringify: false #-> avoid circular deps in toString() ...
  }
  lesser_neighbor: {
    initial_value: null
    is_valid: p.disjoin(p.is_null, p.is_instance(Node))
    stringify: false #-> avoid circular deps in toString() ...
  }
})

is_node = p.is_instance(Node)

global.vst ||= {}
global.vst.Node = Node
