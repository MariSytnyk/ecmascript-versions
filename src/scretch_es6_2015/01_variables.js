// VARIABLES

// var declared variables could be reassigned
var snack = 'Meow Mix';
function getFood(food) {
  if (food) {
    var snack = 'Friskies';
    return snack;
  }
  return snack;
}
getFood(false); // undefined

// let keyword does not allow that
var snack = 'Meow Mix';
function getFood(food) {
  if (food) {
    let snack = 'Friskies';
    return snack;
  }
  return snack;
}
getFood(false); // 'Meow Mix'

// Only visible in own scope. Cannot be used before declaration
console.log(x); // ReferenceError: x is not defined
let x = 'hi';

// const keyword
const message = `This is your message.`;
message = `This is your second message.`; // ERROR! can't redeclare the earlier declared variable message

