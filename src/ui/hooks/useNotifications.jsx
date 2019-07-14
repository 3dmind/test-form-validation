import { Button } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import React from 'react'

function createSnackbarOptions(defaultOptions, options) {
  return Object.assign({}, defaultOptions, options)
}

export function useNotifications() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  function action(key) {
    function handleClick() {
      closeSnackbar(key)
    }

    return (
      <>
        <Button color="inherit" onClick={handleClick}>
          {'Dismiss'}
        </Button>
      </>
    )
  }

  const defaultOptions = {
    autoHideDuration: 3000,
    action,
  }

  return {
    enqueueSuccessNotification(successMessage = '') {
      const successOptions = { variant: 'success' }
      const options = createSnackbarOptions(defaultOptions, successOptions)
      enqueueSnackbar(successMessage, options)
    },

    enqueueErrorNotification(errorMessage = '') {
      const errorOptions = { variant: 'error' }
      const options = createSnackbarOptions(defaultOptions, errorOptions)
      enqueueSnackbar(errorMessage, options)
    },
  }
}
