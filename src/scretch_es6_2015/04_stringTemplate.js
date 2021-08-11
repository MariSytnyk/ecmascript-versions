// STRING TEMPLATE
let user = { firstName: '', lastName: ''}, validationError = '', action = '';

// OLD Version
const oldMessage = 'The user ' + user.firstName + '' + user.lastName +
  ' cannot be ' + action + 'because ' + validationError

// NEW Version
const newMessage = `The user ${ user.firstName } ${ user.lastName } cannot be
  ${ action } because ${ validationError }`
