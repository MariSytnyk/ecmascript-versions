// INCLUDES

let numbers = [1, 2, 3, 4, NaN];

// OLD
if (numbers.indexOf(2) !== -1) {
  console.log('Array contains value')
}

// NEW
if (numbers.includes(2)) {
  console.log('Array contains value')
}


// NaN
console.log(numbers.indexOf(NaN))
console.log(numbers.includes(NaN))
