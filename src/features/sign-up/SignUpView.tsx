import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import { SEO } from '../../components/SEO'
import { SignUpForm } from './components/sign-up-form'

import { Grid } from '@mui/material'

type Props = RouteComponentProps

export const SignUpView = (_: Props) => {
  return (
    <>
      <SEO title="Trafem" description="" />

      <Grid container flex={1}>
        <Grid item xs={12}>
          <SignUpForm />
        </Grid>
      </Grid>
    </>
  )
}
