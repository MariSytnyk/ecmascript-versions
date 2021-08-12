// ARROW FUNCTIONS
const person = {
  name: 'Mariana',
  age: '23',
  sayHello: function hello() {
    console.log('Hello,', this, this.name)
  },
  logInfo: () => {
    console.log('My info', this, this.name)
  },
  logLater: function() {
    setTimeout(function () {
      console.log('Normal with timeout', this, this.name)
    }, 1000)
  },
  logLaterArrow: function() {
    setTimeout(() => {
      console.log('Arrow with timeout', this, this.name)
    }, 1000)
  }
}

// Automatically bind this to closest parent's this
person.sayHello()
// Automatically bind this to first normal function parent's this - window if in browser
person.logInfo()
// Automatically bind this to closest parent's this
person.logLater()
// Automatically bind this to first normal function parent's this
person.logLaterArrow()


// concise body syntax, implied "return"
// const noReturn = () => 12 + 2
//
// // with block body, explicit "return" needed
// const withReturn = () => {
//   let count = 2
//   return 12 + count
// }

// 1. Syntax
// 2. Usage of this keyword
// 3. No arguments property
