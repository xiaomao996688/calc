import { calc } from "./core.js"
import push from "../constants/push.js"
import class2type from "../constants/class2type.js"
import concatArguments from "./concatArguments.js"


const init = calc.fn.init = function () {
  let ret = []
  const args = concatArguments(arguments, ret)
  return calc.makeArray(args, this)
}

init.prototype = calc.fn


export default calc