// DEFAULT PARAMS in function

// OLD version
function add(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}

// NEW version
const add1 = (x= 2, y= 12) => {
  return x + y;
}

// REST PARAMS

// OLD version
function f () {
  for (var i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

// NEW version
// No arguments in arrow function anymore
const f1 = (...args) => {
  for (let arg of args) {
    console.log(arg);
  }
}

function f2(x, ...y) {
  // y is an Array
  return x * y.length;
}
f2(3, "hello", true) == 6


// SPREAD PARAMS
let arr1 = [0, 1, 2];
let arr2 = [...arr1, 3, 4, 5];
console.log(arr2); // prints 0,1,2,3,4,5

function f3(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f3(...arr1) == 6

