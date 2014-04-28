if typeof exports isnt 'undefined'
  global = exports
  predicates = require('./predicates').vst.predicates
  functions = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  predicates = window.vst.predicates
  functions = window.vst.functions
else
  global = this
  predicates = this.vst.predicates
  functions = this.vst.functions

class MaxHeap
  _parent: (i) ->
    # Index of the parent of the element of A, having the index, i
    if i > 0 then ((i + 1) >> 1) - 1 else 0
  _left_child: (i) ->
    # Index of the left child of the element of A, having the index, i
    (i << 1) + 1
  _right_child: (i) ->
    # Index of the right child of the element of A, having the index, i
    (i << 1) + 2
  _heapify: (i) ->
    # Modifies the heap array, A, such that its index, i, points to the root of
    # a sub-heap.
    l = @_left_child(i)
    r = @_right_child(i)
    heap = @heap
    if l < @length and @compare(heap[l], heap[i]) > 0
      largest = l
    else
      largest = i
    if r < @length and @compare(heap[r], heap[largest]) > 0
      largest = r
    if largest isnt i
      tmp = heap[i]
      heap[i] = heap[largest]
      heap[largest] = tmp
      @_heapify(largest)
    null
  _build: () ->
    i = @length >> 1
    while i >= 0
      @_heapify(i)
      i -= 1
    null
  increase_key: (i, key) ->
    f = @compare
    heap = @heap
    if f(key, heap[i]) < 0
      throw new Error("Expected #{key} to be at least heap[#{i}] = #{heap[i]}")
    heap[i] = key
    parent = @_parent
    p = parent(i)
    while i and f(heap[p], heap[i]) < 0
      tmp = heap[i]
      heap[i] = heap[p]
      heap[p] = tmp
      i = p
      p = parent(i)
    null
  sort: () ->
    @_build()
    i = @length - 1
    heap = @heap
    while i >= 0
      tmp = heap[0]
      heap[0] = heap[i]
      heap[i] = tmp
      @length -= 1
      @_heapify(0)
      i -= 1
    null
  peek: () ->
    if @length
      @heap[0]
    else
      null
  pop: () ->
    if @length
      heap = @heap
      max = heap[0]
      heap[0] = heap[@length - 1]
      @length -= 1
      @_heapify(0)
      max
    else
      null
  push: (key) ->
    i = @length
    @length += 1
    parent = @_parent
    p = parent(i)
    heap = @heap
    f = @compare
    while i > 0 and f(heap[p], key) < 0
      heap[i] = heap[p]
      i = p
      p = parent(i)
    heap[i] = key
    null
  constructor: (@compare, @heap=[], @length=@heap.length) ->
    functions.assert predicates.is_array(@heap)
    functions.assert predicates.is_bounded(0, @heap.length)(@length)
    functions.assert predicates.is_function(@compare)
    @_build()

global.vst ||= {}
global.vst.MaxHeap = MaxHeap
