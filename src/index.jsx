import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { render } from 'react-dom'
import { Application, NotificationsProvider } from './ui'

render(
  <>
    <CssBaseline />
    <NotificationsProvider>
      <Application />
    </NotificationsProvider>
  </>,
  document.querySelector('#root'),
)
