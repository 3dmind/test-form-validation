import { makeStyles } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import { SnackbarProvider } from 'notistack'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 20,
  },
}))

export function NotificationsProvider (props) {
  const classes = useStyles()
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      iconVariant={{
        success: <CheckCircleIcon className={classes.icon} />,
        error: <ErrorIcon className={classes.icon} />,
        warning: <WarningIcon className={classes.icon} />,
        info: <InfoIcon className={classes.icon} />,
      }}
    >
      {props.children}
    </SnackbarProvider>
  )
}
