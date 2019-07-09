import { Button, Grid } from '@material-ui/core'
import { Field, Form } from 'formik'
import { TextField } from 'formik-material-ui'
import React from 'react'

export function UserForm (props) {
  const { dirty, handleReset, isSubmitting, isValid } = props
  const isResetButtonDisabled = isSubmitting || !dirty
  const isSubmitButtonDisabled = isSubmitting || !isValid

  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item md xs={12}>
          <Field
            name="name"
            label="Name"
            type="text"
            variant="filled"
            fullWidth
            component={TextField}
          />
        </Grid>

        <Grid item md xs={12}>
          <Field
            name="password"
            label="Password"
            type="text"
            variant="filled"
            fullWidth
            component={TextField}
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                disabled={isSubmitButtonDisabled}
              >
                Send
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                type="reset"
                disabled={isResetButtonDisabled}
                onClick={handleReset}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  )
}
