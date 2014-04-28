global =
  if typeof exports isnt undefined
    exports
  else if typeof window isnt undefined
    window
  else
    this

m = metrics = {
  m_number: (a,b) ->
    if a.key() < b.key()
      a.key() - b.key()
    else
      b.key() - a.key()
}

global.vst ||= {}
global.vst.metrics = metrics
