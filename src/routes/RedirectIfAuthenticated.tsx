import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'

import { Box } from '@mui/material'
import { Auth } from 'aws-amplify'

type Props = RouteComponentProps & {
  component: React.ComponentType<RouteComponentProps>
  redirectTo?: string
}

export const RedirectIfAuthenticatedRoute = ({
  component: Component,
  redirectTo = '/',
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
        if (location?.pathname !== redirectTo) {
          navigate(redirectTo)
        }
      } catch (error) {
        setIsAuthenticated(true)
      }
    }
    checkIfAuthenticated()
  }, [])

  return isAuthenticated ? <Component {...rest} /> : <Box></Box>
}
