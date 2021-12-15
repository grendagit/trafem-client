import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import { CommonLayout } from '../../layouts/common'
import { SEO } from '../../components/SEO'
import { SignInVerificationForm } from './components/sign-in-verification-form'

import { Grid, Box } from '@mui/material'

type Props = RouteComponentProps

export const SignInVerificationView = (_: Props) => {
  return (
    <Box id="root">
      <CommonLayout>
        <SEO title="Trafem" description="" />

        <Grid container>
          <Grid item xs={12}>
            <SignInVerificationForm />
          </Grid>
        </Grid>
      </CommonLayout>
    </Box>
  )
}
