// PROMISE

// Without using Promise
const audioSettings = {}
const createAudioFileAsync = () => {}

function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// Rewritten to Promise
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// CHAINING
const doSomething = () => {}
const doSomethingElse = () => {}
const doThirdThing = () => {}

// OLD Way
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

// NEW Way
doSomething()
  .then((result) =>  doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log('Got the final result: ' + finalResult))
  .catch(failureCallback);

// DO something after catch block
new Promise((resolve, reject) => {
  console.log('Initial');
  
  resolve();
})
  .then(() => {
    throw new Error('Something failed')
    console.log('Do this')
  })
  .catch(() => console.error('Do that'))
  .then(() => console.log('Do this, no matter what happened before'));

// OUTPUT:
// Initial
// Do that
// Do this, no matter what happened before
