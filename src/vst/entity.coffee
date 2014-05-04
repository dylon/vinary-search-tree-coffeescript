if typeof exports isnt 'undefined'
  global = exports
  p = require('./predicates').vst.predicates
  f = require('./functions').vst.functions
else if typeof window isnt 'undefined'
  global = window
  p = window.vst.predicates
  f = window.vst.functions
else
  global = this
  p = this.vst.predicates
  f = this.vst.functions

safe_get = (self, attr) ->
  if p.is_function self[attr]
    self[attr]()
  else
    self[attr]

safe_value = (self, value) ->
  if p.is_function(value)
    value.call(self)
  else
    value

validate = (value) ->
  if value instanceof Entity
    value.validate()
  else if p.is_array(value)
    for element in value
      validate(element)
  else if p.is_object(value)
    for own k,v of value
      validate(v)
  else
    true

class Entity
  @def_property: (ctor, property, {
    initial_value
    get
    init
    set
    stringify
  }) ->
    get ||= (field) -> @[field]
    set ||= (field, value) -> @[field] = value
    if set.length is 1
      set = do (set) -> (field, value) -> set(value)
    field = '__' + property
    ctor::[field] = initial_value unless p.is_undefined(initial_value)
    ctor.__INITIALIZERS__ ||= {}
    ctor::[property] = (value) ->
      if p.is_undefined(value)
        @[field]
      else
        set.call(this, field, value)
        this
    ctor::[property].__STRINGIFY__ = false if stringify is false
    ctor.__PROPERTIES__ ||= []
    ctor.__PROPERTIES__.push(property)
    ctor.properties ||= () ->
      properties =
        if p.is_function(ctor.__super__.properties)
          ctor.__super__.properties().concat(ctor.__PROPERTIES__)
        else
          ctor.__PROPERTIES__
    if init
      ctor.__INITIALIZERS__[field] = init
    true
  @def_properties: (ctor, properties) ->
    for own property, attrs of properties
      @def_property(ctor, property, attrs)
  @def_abstract_method: (ctor, abstract_method, {arity}) ->
    ctor.__ABSTRACT_METHODS__ ||= {}
    ctor.__ABSTRACT_METHODS__[abstract_method] = {}
    if p.is_defined(arity)
      ctor.__ABSTRACT_METHODS__[abstract_method].arity = arity
  @def_abstract_methods: (ctor, abstract_methods) ->
    for own abstract_method, attrs of abstract_methods
      @def_abstract_method(ctor, abstract_method, attrs)
  @find_property: (ctor, property) ->
    if p.is_function ctor::[property]
      ctor::[property]
    else if ctor.__super__ and is_entity ctor.__super__.prototype
      @find_property(ctor.__super__, property)
    else
      null
  @def_toString: (ctor, ctor_name) ->
    ctor_name ||= ctor.name
    properties = []
    for property_name in ctor.properties()
      if property = @find_property(ctor, property_name)
        unless property.__STRINGIFY__ is false
          properties.push property_name
    ctor::toString = () ->
      values = []
      for property in properties
        value = safe_get(this, property)
        values.push property + ': ' + f.to_string(value)
      "#{ctor_name} {#{values.join(', ')}}"
    true
  constructor: (subtypes) ->
    abstract_methods = {}
    for subtype in subtypes
      if subtype isnt `undefined`
        if subtype.__ABSTRACT_METHODS__
          for own abstract_method, attrs of subtype.__ABSTRACT_METHODS__
            abstract_method[abstract_method] = {
              type: subtype
              attrs: attrs
            }
        for own field, init of subtype.__INITIALIZERS__
          @[field] = init.call(this, field)
    type = subtypes[subtypes.length - 1]
    @__TYPE__ = type
  equals: (self, other) ->
    if p.is_undefined(other)
      other = self
      self = this
    if is_entity(self)
      if is_entity(other)
        for property in self.constructor.properties()
          unless @equals(self[property](), other[property]())
            return false
        true
      else
        false
    else
      self is other

is_entity = p.is_instance(Entity)

global.vst ||= {}
global.vst.Entity = Entity
