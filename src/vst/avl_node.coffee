if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  Node = require('./node').vst.Node
  p = require('./predicates').vst.predicates
  f = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  Node = window.vst.Node
  p = window.vst.predicates
  f = window.vst.functions
else
  global = this
  Entity = this.vst.Entity
  Node = window.vst.Node
  p = this.vst.predicates
  f = this.vst.functions

class AvlNode extends Node
  @of: (key, value) ->
    node = new AvlNode().key(key)
    node.values().push(value)
    node
  constructor: (subtypes=[]) ->
    unless this instanceof AvlNode
      return new AvlNode(subtypes)
    subtypes.push(AvlNode)
    super(subtypes)
  max_child_height: () ->
    lesser_child_height = if @lesser_child() then @lesser_child().height() else -1
    greater_child_height = if @greater_child() then @greater_child().height() else -1
    Math.max(lesser_child_height, greater_child_height)
  balance: () ->
    lesser_child_height = if @lesser_child() then @lesser_child().height() else -1
    greater_child_height = if @greater_child() then @greater_child().height() else -1
    lesser_child_height - greater_child_height
  is_balanced: () -> -1 <= @balance() <= 1

is_avl_node = p.is_instance(AvlNode)

Entity.def_properties(AvlNode, {
  parent: {
    initial_value: null
    stringify: false #-> avoid circular deps in toString() ...
  }
})

Entity.def_toString(AvlNode)

global.vst ||= {}
global.vst.AvlNode = AvlNode
