export default function isFunction (obj) {
  return typeof obj === 'function' && typeof obj.nodeType !== 'number'
}