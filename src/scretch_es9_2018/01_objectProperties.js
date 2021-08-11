// object expansion operator

// in ES6
let a = [1,2,3];
let b = [0, ...a, 4]; // [0,1,2,3,4]

// NOW we have rest & spread for objects
let obj = { a: 1, b: 2 };
let obj2 = { ...obj, c: 3 }; // { a:1, b:2, c:3 }
let obj3 = { ...obj, a: 3 }; // { a:3, b:2 }

let object = {
  a: '01', b: '02'
};

let newObject = {
  c: '03',
  ...object
};

console.log(newObject); //{c: "03", a: "01", b: "02"}
