let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')

Symbol('foo') === Symbol('foo')  // false

let sym = new Symbol()  // TypeError

// for...in iteration
let obj = {}

obj[Symbol('a')] = 'a'
obj[Symbol.for('b')] = 'b'
obj['c'] = 'c'
obj.d = 'd'

for (let i in obj) {
  console.log(i)  // logs "c" and "d"
}

// JSON stringify

JSON.stringify({[Symbol('foo')]: 'foo'})
// '{}'


// Symbol wrapper objects as property keys

let sym = Symbol('foo')
let obj = {[sym]: 1}
obj[sym]             // 1
obj[Object(sym)]     // still 1
