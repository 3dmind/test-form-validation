import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export function ApplicationHeader() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography component="h1" variant="h5">
          {'Form validation with Formik and folktale'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
