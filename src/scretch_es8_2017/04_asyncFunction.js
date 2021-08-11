// ASYNC FUNCTION

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall()

// Do not use await in regular functions

// function f() {
//   let promise = Promise.resolve(1);
//   let result = await promise; // SyntaxError
// }

// Error handling
// try ... catch
async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();

// Promise.catch()
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() returns Promise rejected
f().catch(alert); // failed to fetch // (*)
