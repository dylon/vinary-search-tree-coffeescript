global =
  if typeof exports isnt 'undefined'
    exports
  else if typeof window isnt 'undefined'
    window
  else
    this

m = metrics = {
  m_number: (a,b) -> Math.abs(a - b)
}

global.vst ||= {}
global.vst.metrics = metrics
