import { Formik } from 'formik'
import React from 'react'
import { UserForm } from './UserForm'

export function UserFormController () {
  const initialValues = {
    name: '',
    password: '',
  }

  function handleSubmit (formValues, formikActions) {
    formikActions.setSubmitting(false)
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      component={UserForm}
    />
  )
}
