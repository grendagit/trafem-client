import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'

import { Box } from '@mui/material'
import { Auth } from 'aws-amplify'

type Props = RouteComponentProps & {
  component: React.ComponentType<RouteComponentProps>
}

export const PrivateRoute = ({
  component: Component,
  location,
  ...rest
}: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    async function checkIfAuthenticated() {
      try {
        /**
         * will throw an error if there is no authenticated user
         */
        await Auth.currentAuthenticatedUser()

        setIsAuthenticated(true)
      } catch (error) {
        /**
         * TODO: pass state to show the user relevant information
         */
        const redirectTo = '/auth/sign-in'
        if (location?.pathname !== redirectTo) {
          navigate(redirectTo)
        }
      }
    }
    checkIfAuthenticated()
  }, [])

  return isAuthenticated ? <Component {...rest} /> : <Box></Box>
}
