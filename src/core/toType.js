import class2type from "../constants/class2type";
import toString from "../constants/toString";

export default function toType (obj) {
  if (obj === null) {
    return obj + ''
  }
  return typeof obj === 'object' ? class2type[toString.call(obj)] || 'object' : typeof obj
}