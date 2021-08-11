// MAP - keys - everything

const map = new Map()

const keyString = 'keyString',
  keyObj = {},
  keyFunc = () => {}

map.set(keyString, 'Key string')
map.set(keyObj, 'Key object')
map.set(keyFunc, 'Key function')

// WEAK MAP - keys only objects
// const weakMap = new WeakMap()
// const o1 = {}, o2 = window, o3 = function () {}
//
// weakMap.set(o1, 30)
// weakMap.set(o2, '')
// weakMap.set(o3, null)

// SET - unique values
const set = new Set([ 1, 1, 1, 2, 2, 3])
set.size // 3

// WEAK SET - unique objects

const weakSet = new WeakSet()
const obj1 = { a: 1 }
const obj2 = { a: 1 }

weakSet.add(obj1)
weakSet.add(obj2)

weakSet.size


