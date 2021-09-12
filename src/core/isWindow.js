export default function isWindow (obj) {
  return !!obj && obj === obj.window
}