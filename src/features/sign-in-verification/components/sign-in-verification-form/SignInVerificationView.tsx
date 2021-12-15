import React from 'react'
import { navigate } from 'gatsby'

import { Auth as AuthSubLayout, PrimaryForm } from '../../../../components/auth'
import { createCognitoUser } from './sign-in-verification-form.helpers'
import type { TFormFields } from './sign-in-verification-form.types'

import { useForm, SubmitHandler } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'
import { Auth, Cache } from 'aws-amplify'

const primaryFormFields = [
  {
    id: 'code',
    label: 'Kod',
  },
]

const schema = Joi.object({
  code: Joi.string()
    .length(6)
    .pattern(/^[0-9]+$/)
    .trim()
    .required()
    .messages({
      'string.length': 'Kod musi być o długości 6',
      'string.pattern': 'Kod może zawierać tylko cyfry',
      'string.trim': 'Kod nie może zawierać białych znaków przed lub po',
      'string.empty': 'Kod nie może być pusty',
      'any.required': 'Kod jest wymagany',
    }),
})

export const SignInVerificationView = () => {
  const useFormReturn = useForm<TFormFields>({
    resolver: joiResolver(schema),
  })

  /**
   * TODO: separate that
   */
  const handleValid: SubmitHandler<TFormFields> = async ({ code }) => {
    /**
     * TODO: change that to getPreAuthSession() function using DynamoDB
     */
    const { username, session } = JSON.parse(Cache.getItem('user'))

    const user = createCognitoUser(username, session)

    try {
      /**
       * sends the answer to the User Pool
       * will throw an error if the 3rd time wrong answer
       */
      const { username, Session } = await Auth.sendCustomChallengeAnswer(
        user,
        code
      )
      /**
       * TODO: change that to savePreAuthSession() function using DynamoDB
       */
      Cache.setItem(
        'user',
        JSON.stringify({
          username,
          session: Session,
        })
      )
      /**
       * the answer was sent successfully, but it might have been wrong (1st or 2nd time)
       * tests if the user is authenticated now
       */

      /**
       * will throw an error if the user is not yet authenticated
       */
      await Auth.currentSession()
      navigate('/')
    } catch (error) {
      /**
       * TODO: alarm
       */
      console.log('Apparently the user did not enter the right code')
    }
  }

  return (
    <AuthSubLayout>
      <PrimaryForm<TFormFields>
        fields={primaryFormFields}
        title="Weryfikacja"
        subtitle="Aby się zweryfikować, proszę wprowadzić kod."
        submit="Zweryfikuj się"
        useFormReturn={useFormReturn}
        onValid={handleValid}
      ></PrimaryForm>
    </AuthSubLayout>
  )
}
