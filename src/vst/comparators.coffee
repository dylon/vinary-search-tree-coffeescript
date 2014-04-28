global =
  if typeof exports isnt 'undefined'
    exports
  else if typeof window isnt 'undefined'
    window
  else
    this

c = comparators = {
  c_number: (a,b) -> a - b
  c_string_case_sensitive: (a,b) -> a.localeCompare(b)
  c_string_case_insensitive: (a,b) -> a.toLowerCase().localeCompare(b.toLowerCase())
}

global.vst ||= {}
global.vst.comparators = comparators
