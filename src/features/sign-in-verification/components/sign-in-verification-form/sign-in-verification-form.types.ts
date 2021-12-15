import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify'
import { RequiredBy } from '../../../../types/required-by'

export type TFormFields = {
  code: string
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
