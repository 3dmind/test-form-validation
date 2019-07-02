import React from 'react'
import { ApplicationHeader } from './ApplicationHeader'
import { ApplicationContent } from './ApplicationContent'

export function Application () {
  return (
    <React.Fragment>
      <ApplicationHeader />
      <ApplicationContent />
    </React.Fragment>
  )
}
