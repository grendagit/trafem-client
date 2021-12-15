import React from 'react'
import { Router } from '@reach/router'

import { RedirectIfAuthenticatedRoute } from '../routes'
import { SignInPage } from '../features/sign-in'
import { SignInVerificationPage } from '../features/sign-in-verification'
import { SignUpPage } from '../features/sign-up'

const Auth = () => {
  return (
    <Router basepath="/auth">
      <RedirectIfAuthenticatedRoute component={SignInPage} path="/sign-in" />
      <SignUpPage path="/sign-up" />
      <SignInVerificationPage path="/sign-in-verification" />
    </Router>
  )
}

export default Auth
