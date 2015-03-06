//@TODO github module

var Immutable = require('immutable')

var Index = require('indexor')

module.exports = function(opts){
  //indexes is a immutable cache of mutable Index objects
  var indexes = Immutable.Map()

  //interface to retrieve and individual index
  var multidex = function(ID){
    var indexInQuestion = indexes.get(ID, new Index([], opts))
    indexes = indexes.set(ID, indexInQuestion)
    return indexInQuestion
  }

  return multidex
}
