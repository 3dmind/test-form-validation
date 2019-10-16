const { Success, Failure, collect } = require('folktale/validation')

function isNotEmpty(field, value) {
  return value.trim() === ''
    ? Failure([{ [field]: 'Value must not be empty.' }])
    : Success(value)
}

function isToShort(field, value) {
  return value.length > 6
    ? Success(value)
    : Failure([{ [field]: 'Value is to short.' }])
}

function matches(field, value) {
  return /\W/.test(value)
    ? Success(value)
    : Failure([{ [field]: 'Value must contain special character.' }])
}

function isPasswordValid(value) {
  const field = 'password'
  return collect([
    isNotEmpty(field, value),
    isToShort(field, value),
  ])
}

function isUserNameValid(value) {
  return collect([
    isNotEmpty('userName', value),
  ])
}

function validate(userNameValue, passwordValue) {
  return collect([
      isUserNameValid(userNameValue),
      isPasswordValid(passwordValue),
    ],
  ).map(() => [userNameValue, passwordValue])
}

const userName = 'lisa'
const password = 'simpson'
validate(userName, password) //?$.value
  .matchWith({
    Success: function() {},
    Failure: function() {},
  })
