if typeof exports isnt 'undefined'
  global = exports
  Entity = require('./entity').vst.Entity
  AvlNode = require('./avl_node').vst.AvlNode
  Tree = require('./tree').vst.Tree
  p = require('./predicates').vst.predicates
  f = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  Entity = window.vst.Entity
  AvlNode = window.vst.AvlNode
  Tree = window.vst.Tree
  p = window.vst.predicates
  f = window.vst.functions
else
  global = this
  Entity = this.vst.Entity
  AvlNode = this.vst.AvlNode
  Tree = this.vst.Tree
  p = this.vst.predicates
  f = this.vst.functions

class AvlTree extends Tree
  @of: (comparator) ->
    new AvlTree()
      .NodeType(AvlNode)
      .comparator(comparator)
  constructor: (subtypes=[]) ->
    unless this instanceof AvlTree
      return new AvlTree(subtypes)
    subtypes.push(AvlTree)
    super(subtypes)
  greater_greater_case: (a) ->
    f = a.parent()
    b = a.greater_child()
    c = b.greater_child()
    a.greater_child(b.lesser_child())
    if a.greater_child()
      a.greater_child().parent(a)
    b.lesser_child(a)
    a.parent(b)
    if f
      if f.greater_child() is a
        f.greater_child(b)
      else
        f.lesser_child(b)
      b.parent(f)
    else
      b.parent(null)
      @root(b)
    @recompute_heights(a)
    @recompute_heights(b.parent())
    this
  greater_lesser_case: (a) ->
    f = a.parent()
    b = a.greater_child()
    c = b.lesser_child()
    b.lesser_child(c.greater_child())
    if b.lesser_child()
      b.lesser_child().parent(b)
    a.greater_child(c.lesser_child())
    if a.greater_child()
      a.greater_child().parent(a)
    c.greater_child(b)
    b.parent(c)
    c.lesser_child(a)
    a.parent(c)
    if f
      if f.greater_child() is a
        f.greater_child(c)
      else
        f.lesser_child(c)
      c.parent(f)
    else
      c.parent(null)
      @root(c)
    @recompute_heights(a)
    @recompute_heights(b)
    this
  lesser_lesser_case: (a) ->
    f = a.parent()
    b = a.lesser_child()
    c = b.lesser_child()
    a.lesser_child(b.greater_child())
    if a.lesser_child()
      a.lesser_child().parent(a)
    b.greater_child(a)
    a.parent(b)
    if f
      if f.greater_child() is a
        f.greater_child(b)
      else
        f.lesser_child(b)
      b.parent(f)
    else
      b.parent(null)
      @root(b)
    @recompute_heights(a)
    @recompute_heights(b.parent())
    this
  lesser_greater_case: (a) ->
    f = a.parent()
    b = a.lesser_child()
    c = b.greater_child()
    a.lesser_child(c.greater_child())
    if a.lesser_child()
      a.lesser_child().parent(a)
    b.greater_child(c.lesser_child())
    if b.greater_child()
      b.greater_child().parent(b)
    c.lesser_child(b)
    b.parent(c)
    c.greater_child(a)
    a.parent(c)
    if f
      if f.greater_child() is a
        f.greater_child(c)
      else
        f.lesser_child(c)
      c.parent(f)
    else
      c.parent(null)
      @root(c)
    @recompute_heights(a)
    @recompute_heights(b)
    this
  rebalance: (a) ->
    balance = a.balance()
    if balance <= -2
      if a.greater_child().balance() <= 0
        @greater_greater_case(a)
      else
        @greater_lesser_case(a)
    else if balance >= 2
      if a.lesser_child().balance() >= 0
        @lesser_lesser_case(a)
      else
        @lesser_greater_case(a)
    this
  recompute_heights: (node) ->
    if p.is_defined(node)
      changed = true
      while node and changed
        height = node.height()
        node.height \
          if node.greater_child() or node.lesser_child()
            1 + node.max_child_height()
          else
            0
        changed = node.height isnt height
        node = node.parent()
    this
  add_descendant: (ancestor, descendant) ->
    comp = @comparator()(descendant.key(), ancestor.key())
    child = null
    if comp < 0
      child = @add_lesser_child(ancestor, descendant)
    else if comp > 0
      child = @add_greater_child(ancestor, descendant)
    else
      @add_equivalent_child(descendant)
    if child
      @rebalance(child)
    this
  add_lesser_child: (parent, child) ->
    child.greater_neighbor(parent)
    candidate = null
    if parent.lesser_child()
      @add_descendant(parent.lesser_child(), child)
    else
      parent.lesser_child(child)
      child.parent(parent)
      if parent.lesser_neighbor()
        parent.lesser_neighbor().greater_neighbor(child)
      parent.lesser_neighbor(child)
      if parent.height() is 0
        node = parent
        while node
          node.height(1 + node.max_child_height())
          unless node.is_balanced()
            candidate = node
            break
          node = node.parent()
    candidate
  add_greater_child: (parent, child) ->
    child.lesser_neighbor(parent)
    candidate = null
    if parent.greater_child()
      @add_descendant(parent.greater_child(), child)
    else
      parent.greater_child(child)
      child.parent(parent)
      if parent.greater_neighbor()
        parent.greater_neighbor().lesser_neighbor(child)
      parent.greater_neighbor(child)
      if parent.height() is 0
        node = parent
        while node
          node.height(1 + node.max_child_height())
          unless node.is_balanced()
            candidate = node
            break
          node = node.parent()
    candidate
  add_equivalent_child: (parent, child) ->
    parent.values(parent.values().concat(child.values()))
    child.lesser_neighbor(null)
    child.greater_neighbor(null)
    child.lesser_child(null)
    child.greater_child(null)
    child.values().length = 0
    child.parent(null)
    null
  remove_node: (node) ->
    node.values().length = 0
    if node.lesser_neighbor()
      node.lesser_neighbor(node.greater_neighbor())
    if node.greater_neighbor()
      node.greater_neighbor(node.lesser_neighbor())
    if node.is_leaf()
      @remove_leaf(node)
    else if node.is_branch()
      @remove_branch(node)
    else
      @swap_and_remove(node)
    this
  remove_leaf: (node) ->
    if parent = node.parent()
      if parent.lesser_child() is node
        parent.lesser_child(null)
      else
        parent.greater_child(null)
      @recompute_heights(parent)
      while node = node.parent()
        unless node.is_balanced()
          @rebalance(node)
    else
      @root(null)
    null
  remove_branch: (node) ->
    if parent = node.parent()
      if parent.lesser_child()
        parent.lesser_child(node.greater_child() || node.lesser_child())
      else
        parent.greater_child(node.greater_child() || node.lesser_child())
      if node.greater_child()
        node.greater_child().parent(parent)
      else
        node.lesser_child().parent(parent)
      @recompute_heights(parent)
      while node = node.parent()
        unless node.is_balanced()
          @rebalance(node)
    null
  swap_and_remove: (node) ->
    successor = @least(node.greater_child())
    @swap_nodes(node, successor)
    if node.height() is 0
      @remove_leaf(node)
    else
      @remove_branch(node)
    null
  swap_nodes: (node_1, node_2) ->
    parent_1 = node_1.parent()
    lesser_child_1 = node_1.lesser_child()
    greater_child_1 = node_1.greater_child()
    parent_2 = node_2.parent()
    lesser_child_2 = node_2.lesser_child()
    greater_child_2 = node_2.greater_child()
    height = node_1.height()
    node_1.height(node_2.height())
    node_2.height(height)
    if parent_1
      if parent_1.lesser_child() is node_1
        parent.lesser_child(node_2)
      else
        parent.greater_child(node_2)
      node_2.parent(parent)
    else
      node_2.parent(null)
      @root(node_2)
    node_2.lesser_child(lesser_child_1)
    lesser_child_1.parent(node_2)
    node_1.lesser_child(lesser_child_2)
    lesser_child_2.parent(node_1)
    if greater_child_2
      greater_child_2.parent(node_1)
    else if parent_2 isnt node_1
      node_2.greater_child(greater_child_1)
      greater_child_1.parent(node_2)
      parent_2.lesser_child(node_1)
      node_1.parent(parent_2)
    else
      node_2.greater_child(node_1)
      node_1.parent(node_2)
    null

Entity.def_toString(AvlTree)

global.vst ||= {}
global.vst.AvlTree = AvlTree
