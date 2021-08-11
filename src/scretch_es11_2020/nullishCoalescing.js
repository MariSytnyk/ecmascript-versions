// Nullish coalescing operator

console.log(null ?? 'default string');
// expected output: "default string"
console.log(null || 'default string');
// expected output: "default string"

console.log(0 ?? 42);
// expected output: 0
console.log(0 || 42);
// expected output: 42

