import React from 'react'
import { ApplicationContent } from './ApplicationContent'
import { ApplicationHeader } from './ApplicationHeader'
import { UserFormController } from './form'

export function Application () {
  return (
    <React.Fragment>
      <ApplicationHeader />
      <ApplicationContent>
        <UserFormController />
      </ApplicationContent>
    </React.Fragment>
  )
}
