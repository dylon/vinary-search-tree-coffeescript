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

is_valid_assertion = (is_valid, property) ->
  (self, value) ->
    unless is_valid.call(self, value)
      throw new Error(
        "#{f.to_string value} is invalid for #{self.constructor.name}.#{property}")
    value

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
    is_valid
    set
    stringify
  }) ->
    unless p.is_function(ctor)
      throw new Error("#{property}.ctor=#{f.to_string ctor} must be a function")
    unless p.is_string(property)
      throw new Error("property=#{f.to_string property} must be a string")
    unless p.is_function(is_valid) and is_valid.length <= 1
      throw new Error("#{property}.is_valid=#{f.to_string is_valid} must be a function of arity <= 1")
    unless p.is_undefined(get) or p.is_function(get) and get.length <= 1
      throw new Error(
        "#{property}.get=#{f.to_string get} must not be specified or must be a function of arity <= 1")
    unless p.is_undefined(set) or p.is_function(set) and 1 <= set.length <= 2
      throw new Error(
        "#{property}.set=#{f.to_string set} must not be specified or must be a function of arity of 1 or 2")
    unless p.is_undefined(init) or p.is_function(init) and init.length <= 1
      throw new Error(
        "#{property}.init=#{f.to_string init} must not be specified or must be a function of arity <= 1")
    unless p.is_undefined(initial_value) or is_valid(initial_value)
      # What's wrong with you? :)
      throw new Error(
        "#{f.to_string initial_value} is invalid for #{property}")
    unless p.is_undefined(stringify) or p.is_boolean(stringify)
      throw new Error("Expected #{property}.stringify=#{f.to_string stringify} to be a boolean")
    get ||= (field) -> @[field]
    set ||= (field, value) -> @[field] = value
    if set.length is 1
      set = do (set) -> (field, value) -> set(value)
    field = '__' + property
    assert_is_valid = is_valid_assertion(is_valid, property)
    ctor::[field] = initial_value unless p.is_undefined(initial_value)
    ctor.__INITIALIZERS__ ||= {}
    ctor::[property] = (value) ->
      if p.is_undefined(value)
        @__GET_CALLSTACK_SIZE__ ||= {}
        @__GET_CALLSTACK_SIZE__[property] ||= 0
        @__GET_CALLSTACK_SIZE__[property] += 1
        if @__GET_CALLSTACK_SIZE__[property] > 1
          # Avoids infinite-recursion and consequently callstack overflows
          return @[field]
        value = assert_is_valid this, get.call(this, field)
        delete @__GET_CALLSTACK_SIZE__[property]
        value
      else
        assert_is_valid this, value
        set.call(this, field, value)
        this
    ctor::[property].__STRINGIFY__ = false if stringify is false
    ctor::[property].is_valid = is_valid
    ctor.__PROPERTIES__ ||= []
    ctor.__PROPERTIES__.push(property)
    ctor.properties ||= () ->
      properties =
        if p.is_function(ctor.__super__.properties)
          ctor.__super__.properties().concat(ctor.__PROPERTIES__)
        else
          ctor.__PROPERTIES__
    ctor.__VALIDATORS__ ||= {}
    ctor.__VALIDATORS__[property] = is_valid
    if init
      ctor.__INITIALIZERS__[field] = init
    true
  @def_properties: (ctor, properties) ->
    f.assert p.is_function(ctor) and is_entity(ctor.prototype),
      "Expected #{ctor.name}=#{f.to_string ctor} to inherit from Entity"
    f.assert p.is_object properties
    for own property, attrs of properties
      @def_property(ctor, property, attrs)
  @def_abstract_method: (ctor, abstract_method, {arity}) ->
    f.assert p.is_undefined(arity) or p.is_non_negative_number(arity),
      "Expected arity=#{f.to_string arity} to be a non-negative number"
    ctor.__ABSTRACT_METHODS__ ||= {}
    ctor.__ABSTRACT_METHODS__[abstract_method] = {}
    if p.is_defined(arity)
      ctor.__ABSTRACT_METHODS__[abstract_method].arity = arity
  @def_abstract_methods: (ctor, abstract_methods) ->
    f.assert p.is_function(ctor)
    f.assert p.is_object abstract_methods
    for own abstract_method, attrs of abstract_methods
      @def_abstract_method(ctor, abstract_method, attrs)
  @def_toString: (ctor, ctor_name) ->
    f.assert p.is_function(ctor) and is_entity(ctor.prototype)
    f.assert p.is_undefined(ctor_name) or p.is_string(ctor_name)
    ctor_name ||= ctor.name
    properties = []
    for property in ctor.properties()
      unless ctor::[property].__STRINGIFY__ is false
        properties.push property
    ctor::toString = () ->
      values = []
      for property in properties
        value = safe_get(this, property)
        values.push property + ': ' + f.to_string(value)
      "#{ctor_name} {#{values.join(', ')}}"
    true
  constructor: (subtypes) ->
    unless p.is_array(subtypes)
      throw new Error("Expected #{f.to_string subtypes} to be an array")
    abstract_methods = {}
    for subtype in subtypes
      if subtype isnt `undefined`
        unless p.is_function(subtype) and subtype.prototype instanceof Entity and this instanceof subtype
          throw new Error("#{subtype.name} must be of type Entity")
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
    for own abstract_method, {type, attrs: {arity}} of abstract_methods
      f.assert p.is_method(@[abstract_method]),
        "Expected #{to_string this} to implemented #{type.name}::#{abstract_method}"
      if p.is_defined(arity)
        f.assert @[abstract_method].length >= arity,
          "Expected #{to_string f} to have an arity of at least #{arity}"
  validate: () ->
    for own property, is_valid of @__TYPE__.__VALIDATORS__
      value = @[property]()
      unless is_valid.call(this, value)
        throw new Error("#{f.to_string value} is invalid for #{property} according to #{is_valid} for #{f.to_string this}")
      validate(value)
    this

is_entity = p.is_instance(Entity)

global.vst ||= {}
global.vst.Entity = Entity
