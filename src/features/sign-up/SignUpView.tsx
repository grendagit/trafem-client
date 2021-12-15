import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import { CommonLayout } from '../../layouts/common'
import { SEO } from '../../components/SEO'
import { SignUpForm } from './components/sign-up-form'

import { Grid, Box } from '@mui/material'

type Props = RouteComponentProps

export const SignUpView = (_: Props) => {
  return (
    <Box id="root">
      <CommonLayout>
        <SEO title="Trafem" description="" />

        <Grid container>
          <Grid item xs={12}>
            <SignUpForm />
          </Grid>
        </Grid>
      </CommonLayout>
    </Box>
  )
}
