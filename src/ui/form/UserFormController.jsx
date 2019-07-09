import { Formik } from 'formik'
import React from 'react'
import { useActions, useNotifications } from '../hooks'
import { UserForm } from './UserForm'
import { UserFormValidationUiService } from './UserFormValidationUiService'

export function UserFormController () {
  const { saveUserAction } = useActions()
  const { enqueueErrorNotification, enqueueSuccessNotification } = useNotifications()
  const initialValues = {
    name: '',
    password: '',
  }

  function handleSubmit (formValues, formikActions) {
    saveUserAction(formValues)
      .then(function onFulfilled () {
        enqueueSuccessNotification('User successfully created.')
      })
      .catch(function onRejected () {
        enqueueErrorNotification('User could not be created.')
      })
      .finally(function onFinally () {
        formikActions.setSubmitting(false)
      })
  }

  function validateForm (formValues) {
    return UserFormValidationUiService.validate(formValues)
  }

  return (
    <Formik
      initialValues={initialValues}
      component={UserForm}
      validate={validateForm}
      onSubmit={handleSubmit}
    />
  )
}
