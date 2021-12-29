import React from 'react'
import { Router } from '@reach/router'

import { PrivateRoute } from '../routes'
import { UserProfilePage } from '../features/user-profile'

const EndUser = () => {
  return (
    <Router basepath="/user">
      <PrivateRoute component={UserProfilePage} path="/profile" />
    </Router>
  )
}

export default EndUser
