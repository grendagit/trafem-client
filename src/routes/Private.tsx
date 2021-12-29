import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'

import { useAuthContext } from '../contexts'

import { Box } from '@mui/material'

type Props = RouteComponentProps & {
  component: React.ComponentType<RouteComponentProps>
}

export const PrivateRoute = ({
  component: Component,
  location,
  ...rest
}: Props) => {
  const { isAuthenticated, isAuthenticating } = useAuthContext()

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      const redirectTo = '/auth/sign-in'
      if (location?.pathname !== redirectTo) {
        navigate(redirectTo)
      }
    }
  }, [isAuthenticating, isAuthenticated])

  return !isAuthenticating && isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Box></Box>
  )
}
