import { createCognitoUser } from './auth-context-provider.helpers'
import type {
  TSendCustomChallengeAnswerParameters,
  TSignInUserAttributes,
  TSignUpUserAttributes,
  TUserItem,
} from './auth-context-provider.types'

import { Auth, Cache } from 'aws-amplify'
import * as generator from 'generate-password-browser'

export async function signUp({
  email,
  givenName,
  familyName,
}: TSignUpUserAttributes) {
  await Auth.signUp({
    username: email,
    password: generator.generate({
      numbers: true,
      symbols: true,
      lowercase: true,
      uppercase: true,
      strict: true,
    }),
    attributes: {
      email,
      given_name: givenName,
      family_name: familyName,
    },
  })
}

export function signIn({ email }: TSignInUserAttributes) {
  return Auth.signIn(email)
}

export function setUserItem(username: string, session: string) {
  /**
   * TODO: change that to savePreAuthSession() function using DynamoDB
   */
  Cache.setItem(
    'user',
    JSON.stringify({
      username,
      session,
    })
  )
}

export function getUserItem() {
  /**
   * TODO: change that to getPreAuthSession() function using DynamoDB
   */
  return JSON.parse(Cache.getItem('user')) as TUserItem
}

export function sendCustomChallengeAnswer({
  code,
}: TSendCustomChallengeAnswerParameters) {
  const { username, session } = getUserItem()
  const cognitoUser = createCognitoUser(username, session)

  /**
   * sends the answer to the User Pool
   * will throw an error if the 3rd time wrong answer
   */
  return Auth.sendCustomChallengeAnswer(cognitoUser, code)
}

export async function checkIfAuthenticated() {
  await Auth.currentSession()
}
