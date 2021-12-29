import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import { SEO } from '../../components/SEO'
import { SignInForm } from './components/sign-in-form'

import { Grid } from '@mui/material'

type Props = RouteComponentProps

export const SignInView = (_: Props) => {
  return (
    <>
      <SEO title="Trafem" description="" />

      <Grid container flex={1}>
        <Grid item xs={12}>
          <SignInForm />
        </Grid>
      </Grid>
    </>
  )
}
