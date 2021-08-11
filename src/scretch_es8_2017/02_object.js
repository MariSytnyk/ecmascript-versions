// Object.values()

// Objects
const person1 = { name: 'Fred', age: 87 }
Object.values(person1) // ['Fred', 87]

// Arrays
const people1 = ['Fred', 'Tony']
Object.values(people1) // ['Fred', 'Tony']

// Object.entries

// Object
const person2 = { name: 'Fred', age: 87 }
Object.entries(person2) // [['name', 'Fred'], ['age', 87]]

// Arrays
const people2 = ['Fred', 'Tony']
Object.entries(people2) // [['0', 'Fred'], ['1', 'Tony']]

// Object.getOwnPropertyDescriptors()

const object1 = {
  property1: 42
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1);

console.log(descriptors1.property1.writable);
// expected output: true

console.log(descriptors1.property1.value);
// expected output: 42
