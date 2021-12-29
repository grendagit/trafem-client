import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import { SEO } from '../../components/SEO'
import { SignInVerificationForm } from './components/sign-in-verification-form'

import { Grid } from '@mui/material'

type Props = RouteComponentProps

export const SignInVerificationView = (_: Props) => {
  return (
    <>
      <SEO title="Trafem" description="" />

      <Grid container flex={1}>
        <Grid item xs={12}>
          <SignInVerificationForm />
        </Grid>
      </Grid>
    </>
  )
}
