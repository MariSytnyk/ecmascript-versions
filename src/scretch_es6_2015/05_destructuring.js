// OBJECT DESTRUCTURING
const point = { x: 2, y: 5 };
const { y: pty, x: ptx } = point;

console.log(ptx, pty); // prints 2, 5

const rect = { lowerLeft: { x: 0, y: 0 }, upperRight: { x:3, y:4} };
const { lowerLeft: { x:llx, y: lly }, upperRight: { x:urx, y:ury } } = rect;

console.log(llx, lly, urx, ury); // prints “0 0 3 4

// Destructuring object params in a method call
const person = { firstName: "Ted", lastName: "Neward", age: 45 }
const displayDetails = ({ firstName, age }) => {
  console.log(`${ firstName } is ${ age } years old.`)
}

// DESTRUCTURING ASSIGNMENT (DESTRUCTURING IN ARRAYS)
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

const [a, b, c, d] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // 2
