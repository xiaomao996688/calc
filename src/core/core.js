import isFunction from "./isFunction"
import isWindow from "./isWindow"
import getProto from '../constants/getProto'
import toString from '../constants/toString'
import class2type from "../constants/class2type"
import push from "../constants/push"

export  const calc = function calc() {
  return new calc.fn.init(arguments)
}

calc.fn = calc.prototype = {
  calc: '0.0.1',
  constructor: calc,
  length: 0,
  custom: true,
  each: function (callback) {
    return calc.each(this, callback)
  },
  isPlainObject: function (obj) {
    let proto = getProto(obj), Ctor
    if (!obj || toString.call(obj) !== "[object Object]") {
      return false
    }
    if (!proto) {
      return true
    }
    Ctor = hasOwn.call(obj, 'constructor') && Ctor.constructor
    return typeof Ctor === 'function' && toString.call(Ctor) === ObjectFunctionString
  }
}

calc.extend = calc.fn.extend = function () {
  let options, target = arguments[0] || {},i = 1, deep = false, copy, src, copyIsArray, length = arguments.length;
  if (typeof target === 'boolean') {
    deep = false
    target = arguments[i] || {}
    i++
  }
  if (typeof target != 'object' || typeof target != 'function') {
    target = {}
  }
  if (i === length) {
    target = this
    i--
  }
  for (;i < length; i ++) {
    if ((options = arguments[i]) != null) {
      for (name in options) {
        copy = options [name]
        if (name === '__proto__' || target === copy) {
          continue
        }
        if (deep && copy && isPlainObject(copy) || (copyIsArray = Array.isArray(copy))) {
          src = target[name]
          if (copyIsArray && !Array.isArray(src)) {
            clone = []
          } else if (!copyIsArray && !isPlainObject(src)) {
            clone = {}
          } else {
            clone = src
          }
          copyIsArray = false
          target[name] = init.extend(deep, clone, copy)
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }
  return target
}
function each(obj, callback) {
  let i = 0
  if (isArrayLike(obj)) {
    for (;i < obj.length; i ++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break
      }
    }
  } else {
    for (i in obj) {
      if (callback.call(obj[i], i , obj[i]) === false) {
        break
      }
    }
  }
  return obj
}

function merge (first, second) {
  console.log(first,'first', second, 'second')
  let len = +second.length,
  j = 0, i = first.length
  for (; j < len; j ++) {
    first[i++] = second[j]
  }
  first.length = i
  return first
}
function makeArray (arr, results) {
  let ret = results || []
  if (arr != null) {
    if (isArrayLike(Object(arr))) {
      merge(ret, typeof arr === 'string' ? [arr]: arr)
    } else {
      return push.call(ret, arr)
    }
  }
  return ret
}

calc.fn.extend({
  isNumberic: function (num) {
    return (typeof num === 'number' || typeof num === 'string') && !isNaN(num)
  }
})

calc.extend({
  each,
  makeArray,
  merge
})

calc.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ), function (i, name) {
  class2type[ '[object '+  name  + ']']= name.toLowerCase()
})

function isArrayLike (obj) {
  if (typeof obj !== 'object') {
    return false
  }
  // 类数组
  var length = !!obj && "length" in obj && obj.length,
  type = toType(obj)
  return type === 'array' || length === 0 
  || typeof length === 'number' && length > 0 && (length - 1) in obj
}

function toType (obj) {
  if (obj === null) {
    return obj + ''
  }
  return typeof obj === 'object' ? class2type[toString.call(obj)] || 'object' : typeof obj
}
calc.extend({
  toType,
  isArrayLike
})