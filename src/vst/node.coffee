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
  key: {}
  values: {init: () -> []}
  height: {
    initial_value: 0
  }
  greater_child: {
    initial_value: null
  }
  lesser_child: {
    initial_value: null
  }
  greater_neighbor: {
    initial_value: null
    stringify: false #-> avoid circular deps in toString() ...
  }
  lesser_neighbor: {
    initial_value: null
    stringify: false #-> avoid circular deps in toString() ...
  }
})

is_node = p.is_instance(Node)

global.vst ||= {}
global.vst.Node = Node
