const { Success, Failure, collect } = require('folktale/validation')

function isNotEmpty(field, value) {
  return value.trim() === ''
    ? Failure([{ [field]: 'Value must not be empty.'} ])
    : Success(value)
}

function isToShort(value) {
  return value.length > 6
    ? Success(value)
    : Failure(['Value is to short.'])
}

function isPasswordValid(password) {
  return collect([
      isNotEmpty('password',password),
      isToShort(password),
    ],
  )
}

function isUserNameValid(userName) {
  return collect([
    isNotEmpty(userName),
  ])
}

function validate(userName, password) {
  return collect([
    isUserNameValid(userName),
    isPasswordValid(password),
  ]).map(() => [
    userName,
    password,
  ])
}

validate('lisa', 'lisasimpson').matchWith({
  Success: function () {},
  Failure: function () {}
}) //?
