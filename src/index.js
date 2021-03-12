// @ts-nocheck
(function(){
  var class2type = {},
  toString = class2type.toString,
  toType = function (obj) {
    if (obj === null) return obj + ""
    return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[toString.call(obj)] || 'object' :
    typeof obj
  },
  isNumberic = function isNumberic (obj) {
    var type = toType(obj)
    return (type === 'number' || type === 'string') && !isNaN(obj)
  }
  "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ).forEach(name => {
    class2type["object" + name] = name.toLowerCase()
  })

  var calc = (function (){
    var calc = function () {
      // @ts-ignore
      return new calc.fn.init()
    }
    var isScale = function (arr) {
      if (arr.length === 0) {
        return 1
      }
      var temp = arr.map(num => num.toString())
      var i = 0, len = temp.length, scale = 0, sortArr = []
      for (; i < len; i++) {
        var curNum = temp[i]
        temp[i].indexOf('.') > -1 ? sortArr.push(curNum.slice(curNum.indexOf('.')).length) : null
      }
      return sortArr.length > 0 ? Math.pow(10, Math.max.apply(null, sortArr)) : 1
    }
    calc.fn = calc.prototype = {
      constructor: calc,
      custom: true,
      minus: function () {
        var 
        scale,
        args = Array.prototype.slice.call(arguments),
        result
        if (arguments.length === 0) {
          return this
        }
        if (args.length === 1) {
          return args[0]          
        }
        var i = 0, len = args.length
        for (; i < len; i++) {
          if (!isNumberic(args[i])) {
            return new TypeError(args[i] + 'is not is Number')
          }
        }
        scale = isScale(args)
        var saveCount = []
        saveCount = args.map(num => num * scale)
        // 涉及大数计算暂时不考虑
        var j = 0; 
        result = saveCount[0]
        for (; j < saveCount.length - 1; j++) {
          result -= saveCount[j+1]
        }
        return result / scale
      }
    }
    var  init = calc.fn.init = function () {
      return this
    }
    init.prototype = calc.fn
    return calc

  })()

  // 处理冲突
  var _calc =  window._calc  , $calc = window.calc
  calc.noConflict = function () {
    if (window._calc === calc) {
      window._calc = _calc
    }
    if (window.calc === calc) {
      window.calc = $calc
    }
  }


  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = calc
  }
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window._calc = window.calc = calc
  }

})()


