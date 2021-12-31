import React from 'react'
import { Router } from '@reach/router'

import { PrivateRoute } from '../routes'
import { AddEventPage } from '../features/add-event'

const Forms = () => {
  return (
    <Router basepath="/forms">
      <PrivateRoute component={AddEventPage} path="/add-event" />
    </Router>
  )
}

export default Forms
