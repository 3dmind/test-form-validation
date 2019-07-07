import { Button } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import React from 'react'

function createSnackbarOptions (defaultOptions, successOptions) {
  return Object.assign({}, defaultOptions, successOptions)
}

export function useNotifications () {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const action = (key) => (
    <React.Fragment>
      <Button
        color="inherit"
        onClick={() => { closeSnackbar(key) }}
      >
        {'Dismiss'}
      </Button>
    </React.Fragment>
  )

  const defaultOptions = {
    autoHideDuration: 3000,
    action,
  }

  return {
    enqueueSuccess (message = '') {
      const successOptions = { variant: 'success' }
      const options = createSnackbarOptions(defaultOptions, successOptions)
      enqueueSnackbar(message, options)
    },

    enqueueError (message = '') {
      const errorOptions = { variant: 'error' }
      const options = createSnackbarOptions(defaultOptions, errorOptions)
      enqueueSnackbar(message, options)
    },
  }
}
