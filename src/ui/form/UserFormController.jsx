import { Formik } from 'formik'
import React from 'react'
import { useActions, useNotifications } from '../hooks'
import { UserForm } from './UserForm'

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

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      component={UserForm}
    />
  )
}
