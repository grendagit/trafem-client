import type {
  CognitoUserWithSession,
  TAuthConfig,
} from './auth-context-provider.types'

import { Auth } from 'aws-amplify'
import {
  CognitoUser,
  CognitoUserPool,
  CookieStorage,
} from 'amazon-cognito-identity-js'

export function createCognitoUser(username: string, session: string) {
  const authConfig = Auth.configure() as TAuthConfig
  const cookieStorage = new CookieStorage(authConfig.cookieStorage)

  const cognitoUser = new CognitoUser({
    Username: username,
    Pool: new CognitoUserPool({
      UserPoolId: authConfig.userPoolId,
      ClientId: authConfig.userPoolWebClientId,
      Storage: cookieStorage,
    }),
    Storage: cookieStorage,
  }) as CognitoUserWithSession
  cognitoUser.setAuthenticationFlowType(authConfig.authenticationFlowType)

  cognitoUser.Session = session
  /**
   * sets to be consistent with the sign in return
   * ? should set `challengeName` and `challangeParam`
   */
  cognitoUser.signInUserSession = null

  return cognitoUser
}
