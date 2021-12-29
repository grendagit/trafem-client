import { manageSignIn, manageSignUp } from './auth-context-provider.controllers'
import type { RequiredBy } from '../../types/required-by'

import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify'

export type TContextValue = {
  user: any | null
  isAuthenticated: boolean
  isAuthenticating: boolean
  manageSignUp: typeof manageSignUp
  manageSignIn: typeof manageSignIn
  manageSignInVerification: (
    parameters: TSignInVerificationParameters
  ) => Promise<void>
}

export type TSignUpUserAttributes = {
  email: string
  givenName: string
  familyName: string
}
export type TSignInUserAttributes = {
  email: string
}

export type TSendCustomChallengeAnswerParameters = {
  code: string
}
export type TSignInVerificationParameters = TSendCustomChallengeAnswerParameters

export type TUserItem = {
  username: string
  session: string
}

export type CognitoUserWithSession = CognitoUser & {
  Session: string
  signInUserSession: CognitoUserSession | null
}
export type TAuthConfig = RequiredBy<
  ReturnType<typeof Auth.configure>,
  | 'region'
  | 'userPoolId'
  | 'userPoolWebClientId'
  | 'authenticationFlowType'
  | 'cookieStorage'
>
