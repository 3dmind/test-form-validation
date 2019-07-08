import { Formik } from 'formik'
import React from 'react'
import { useActions, useNotifications } from '../hooks'
import { UserForm } from './UserForm'

export function UserFormController () {
  const { saveUserAction } = useActions()
  const { enqueueError, enqueueSuccess } = useNotifications()
  const initialValues = {
    name: '',
    password: '',
  }

  function handleSubmit (formValues, formikActions) {
    saveUserAction(formValues)
      .then(function onFulfilled () {
        enqueueSuccess('User successfully created.')
      })
      .catch(function onRejected () {
        enqueueError('User could not be created.')
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
