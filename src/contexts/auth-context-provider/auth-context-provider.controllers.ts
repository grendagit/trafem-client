import { navigate } from 'gatsby'

import {
  setUserItem,
  signUp,
  signIn,
  sendCustomChallengeAnswer,
  checkIfAuthenticated,
} from './auth-context-provider.services'
import type {
  TSignInUserAttributes,
  TSignUpUserAttributes,
  TSignInVerificationParameters,
  // TStateFunctions,
} from './auth-context-provider.types'

export async function manageSignUp(userAttributes: TSignUpUserAttributes) {
  try {
    await signUp(userAttributes)

    navigate('/auth/sign-in')
  } catch (error) {
    /**
     * TODO: alarm
     */
    console.log(`Error signing up. Reason: ${error}`)
  }
}

export async function manageSignIn(userAttributes: TSignInUserAttributes) {
  try {
    const { username, Session } = await signIn(userAttributes)
    setUserItem(username, Session)

    navigate('/auth/sign-in-verification')
  } catch (error) {
    /**
     * TODO: alarm
     */
    console.log(`Error signing in. Reason: ${error}`)
  }
}

export async function manageSignInVerification(
  parameters: TSignInVerificationParameters,
  setAuthTimestamp: any
) {
  try {
    const user = await sendCustomChallengeAnswer(parameters)
    /**
     * the answer was sent successfully, but it might have been wrong (1st or 2nd time)
     */
    const { username, Session } = user
    setUserItem(username, Session)

    /**
     * tests if the user is authenticated now, will throw an error if the user is not yet authenticated
     */
    // await checkIfAuthenticated(user, stateFunctions)
    await checkIfAuthenticated()
    setAuthTimestamp(Date.now())
    navigate('/')
  } catch (error) {
    /**
     * TODO: alarm
     */
    console.log('Apparently the user did not enter the right code')
  }
}
