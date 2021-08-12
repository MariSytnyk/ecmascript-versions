// BUILT-IN METHODS
// http://es6-features.org/#ObjectPropertyAssignment

// Object.assign
const dest = { quux: 0 };
const src1 = { foo: 1, bar: 2 };
const src2 = { foo: 3, baz: 4 };
Object.assign(dest, src1, src2)

console.log('Object.assign', dest)

// Array Element Finding
const array = [1, 3, 4, 2]
array.find(x => x > 3) // 4
array.findIndex(x => x > 3) // 2

// String repeating
"t".repeat(4 * 6) //
"foo".repeat(3)

// String searching
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false

// Number Type Checking
Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Infinity) === false
Number.isFinite(-Infinity) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true

// Number safety checking
Number.isSafeInteger(42) === true
Number.isSafeInteger(9007199254740992) === false

// Number truncation
console.log(Math.trunc(42.7)) // 42
console.log(Math.trunc( 0.1)) // 0
console.log(Math.trunc(-0.1)) // -0

// Number Sign Determination
console.log(Math.sign(7))   // 1
console.log(Math.sign(0))   // 0
console.log(Math.sign(-0))  // -0
console.log(Math.sign(-7))  // -1
console.log(Math.sign(NaN)) // NaN
