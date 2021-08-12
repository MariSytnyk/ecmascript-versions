// VARIABLES

// var declared variables could be reassigned
// var snack = 'Meow Mix';
// function getFood(food) {
//   // var snack = undefined // hoisting
//   if (food) {
//     var snack = 'Friskies';
//     return snack;
//   }
//   return snack;
// }
//
// console.log(getFood(false), snack); // undefined

// let keyword does not allow that
// let snack = 'Meow Mix';
// function getFood(food) {
//   if (food) {
//     let snack = 'Friskies';
//     return snack;
//   }
//   return snack;
// }
//
// console.log(getFood(false)) // 'Meow Mix'

// Only visible in own scope. Cannot be used before declaration
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // undefined
// let x = 'hi let';
// var y = 'hi var'

// const keyword
// const message = `This is your message.`;
// message = `This is your second message.`; // ERROR! can't redeclare the earlier declared variable message

