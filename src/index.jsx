import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { render } from 'react-dom'
import { Application, NotificationsProvider } from './ui'

render(
  <React.Fragment>
    <CssBaseline />
    <NotificationsProvider>
      <Application />
    </NotificationsProvider>
  </React.Fragment>,
  document.querySelector('#root'),
)
