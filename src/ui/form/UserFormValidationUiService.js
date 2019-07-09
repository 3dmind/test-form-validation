import { FormValidationUiService } from '../../services'

function validateName (value) {
  return FormValidationUiService
    .collectValidations([
      FormValidationUiService.validations.notEmpty({
        fieldName: 'name',
        value,
        message: 'Name can\'t be empty.',
      }),
    ])
}

function validatePassword (value) {
  const fieldName = 'password'
  return FormValidationUiService
    .collectValidations([
      FormValidationUiService.validations.notEmpty({
        fieldName,
        value,
        message: 'Password can\'t be empty.',
      }),
      FormValidationUiService.validations.minLength({
        fieldName,
        min: 6,
        value,
        message: 'Password is too short.',
      }),
      FormValidationUiService.validations.matches({
        fieldName,
        regex: /\W/,
        value,
        message: 'Password must contain special characters.',
      }),
    ])
}

export const UserFormValidationUiService = {
  validate (formValues) {
    const { name, password } = formValues
    return FormValidationUiService.collectFieldErrorMessages([
      validateName(name),
      validatePassword(password),
    ])
  },
}
Object.freeze(UserFormValidationUiService)
