import Validation from 'folktale/validation'
import * as R from 'ramda'

const isNotEmpty = R.complement(R.isEmpty)

function emptyMessage () {
  return {}
}

function getErrorMessage (failedValidation) {
  return failedValidation.value
}

function mapValidationMessagesToErrorMessage (validationMessages) {
  return R.mapObjIndexed((messages) => R.head(messages))(R.reduceBy(
    (acc, { message }) => acc.concat(message),
    [],
    ({ fieldName }) => fieldName,
    validationMessages,
  ))
}

export const FormValidationUiService = {
  collectValidations: Validation.collect,

  collectFieldErrorMessages (validations = []) {
    return Validation
      .collect(validations)
      .mapFailure(mapValidationMessagesToErrorMessage)
      .matchWith({
        Success: emptyMessage,
        Failure: getErrorMessage,
      })
  },

  validations: {
    notEmpty ({ fieldName, value, message = '' }) {
      return isNotEmpty(R.trim(value))
        ? Validation.Success(value)
        : Validation.Failure([
          {
            fieldName,
            message: message || `Field '${fieldName}' can't be empty.`,
          },
        ])
    },

    minLength ({ fieldName, min, value, message = '' }) {
      return R.length(value) >= min
        ? Validation.Success(value)
        : Validation.Failure([
          {
            fieldName,
            message: message || `Field '${fieldName}' must have at least ${min} characters.`,
          },
        ])
    },

    matches ({ fieldName, regex, value, message = '' }) {
      return R.test(regex, value)
        ? Validation.Success(value)
        : Validation.Failure([
          {
            fieldName,
            message: message || `Field '${fieldName}' must match ${regex}`,
          },
        ])
    },
  },
}
Object.freeze(FormValidationUiService)
