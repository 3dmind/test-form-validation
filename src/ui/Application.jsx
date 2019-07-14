import React from 'react'
import * as actions from './actions'
import { ActionsContext } from './ActionsContext'
import { ApplicationContent } from './ApplicationContent'
import { ApplicationHeader } from './ApplicationHeader'
import { UserFormController } from './form'

export function Application() {
  return (
    <>
      <ApplicationHeader />
      <ApplicationContent>
        <ActionsContext.Provider value={actions}>
          <UserFormController />
        </ActionsContext.Provider>
      </ApplicationContent>
    </>
  )
}
