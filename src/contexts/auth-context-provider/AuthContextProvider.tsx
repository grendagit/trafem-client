import React, { useState, useEffect, useContext, useCallback } from 'react'
import type { PropsWithChildren } from 'react'

import {
  manageSignUp,
  manageSignIn,
  manageSignInVerification as manageSignInVerificationController,
} from './auth-context-provider.controllers'
import type {
  TContextValue,
  TSignInVerificationParameters,
} from './auth-context-provider.types'

import { Auth } from 'aws-amplify'

const defaultValues = {
  user: null,
  isAuthenticated: false,
  isAuthenticating: true,
  manageSignUp,
  manageSignIn,
  manageSignInVerification: null!,
}

const AuthContext = React.createContext<TContextValue>(defaultValues)

type Props = {}

export const AuthContextProvider = ({ children }: PropsWithChildren<Props>) => {
  const [user, setUser] = useState<any | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true)
  const [authTimestamp, setAuthTimestamp] = useState<number | null>(null)

  const checkIfAuthenticated = useCallback(async () => {
    try {
      /**
       * will throw an error if there is no authenticated user
       */
      const currentAuthenticatedUser = await Auth.currentAuthenticatedUser()
      setUser(currentAuthenticatedUser)
      setIsAuthenticated(true)
    } catch (error) {
      /**
       * TODO: show the user relevant information
       */
    } finally {
      setIsAuthenticating(false)
    }
  }, [])

  useEffect(() => {
    checkIfAuthenticated()
  }, [authTimestamp])

  const manageSignInVerification = useCallback(
    async (parameters: TSignInVerificationParameters) => {
      await manageSignInVerificationController(parameters, setAuthTimestamp)
    },
    []
  )

  return (
    <AuthContext.Provider
      value={{
        ...defaultValues,
        manageSignInVerification,
        user,
        isAuthenticated,
        isAuthenticating,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
