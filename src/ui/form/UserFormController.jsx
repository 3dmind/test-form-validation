import { Formik } from 'formik'
import React from 'react'
import { useActions } from '../useActions'
import { UserForm } from './UserForm'

export function UserFormController () {
  const initialValues = {
    name: '',
    password: '',
  }

  const { saveUserAction } = useActions()

  function handleSubmit (formValues, formikActions) {
    saveUserAction(formValues).then(function onFulfilled () {
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
