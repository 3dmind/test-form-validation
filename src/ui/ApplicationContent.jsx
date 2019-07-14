import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import * as PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  appContent: {
    boxSizing: 'border-box',
    padding: theme.spacing(4, 0, 0, 0),
  },
}))

export function ApplicationContent(props) {
  const { children } = props
  const classes = useStyles()
  return (
    <main className={classes.appContent}>
      <Container maxWidth="xl">{children}</Container>
    </main>
  )
}

ApplicationContent.propTypes = {
  children: PropTypes.node.isRequired,
}
