
export default function concatArguments (args, ret) {
  let  len = [].slice.call(args).length,
   i = 0
  if (calc.isArrayLike(args)) {
    for (i ; i < len; i++) {
      if (calc.isArrayLike(args[i])) {
        concatArguments(args[i], ret)
        console.log(calc.toType(args[i]))
      } else if (calc.toType(args[i]) === 'object') {
        throw new Error(`arguments is not ${args[i]}`)
      } else {
        push.call(ret, args[i])
      }
    }
  }
  return ret
}