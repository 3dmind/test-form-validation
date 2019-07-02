import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { render } from 'react-dom'
import { Application } from './ui/Application'

render(
  <React.Fragment>
    <CssBaseline />
    <Application />
  </React.Fragment>,
  document.querySelector('#root'),
)
