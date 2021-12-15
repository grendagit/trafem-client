import React from 'react'
import { navigate } from 'gatsby'

import {
  Auth as AuthSubLayout,
  PrimaryForm,
  PrimaryOption,
} from '../../../../components/auth'
import type { TFormFields } from './sign-in-form.types'

import { useForm, SubmitHandler } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'
import { Auth, Cache } from 'aws-amplify'

const primaryFormFields = [
  {
    id: 'email',
    label: 'E-mail',
  },
]

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'E-mail musi być prawidłowy',
      'string.empty': 'E-mail nie może być pusty',
      'any.required': 'E-mail jest wymagany',
    }),
})

export const SignInFormView = () => {
  const useFormReturn = useForm<TFormFields>({
    resolver: joiResolver(schema),
  })

  /**
   * TODO: separate that
   */
  const handleValid: SubmitHandler<TFormFields> = async ({ email }) => {
    try {
      const { username, Session } = await Auth.signIn(email)
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

      navigate('/auth/sign-in-verification')
    } catch (error) {
      /**
       * TODO: alarm
       */
      console.log(`Error signing in. Reason: ${error}`)
    }
  }

  return (
    <AuthSubLayout>
      <PrimaryForm<TFormFields>
        fields={primaryFormFields}
        title="Logowanie"
        subtitle="Podaj swój adres e-mail."
        submit="Zaloguj się"
        useFormReturn={useFormReturn}
        onValid={handleValid}
      >
        <PrimaryOption
          text="Nie masz jeszcze konta?"
          route={{ path: '/auth/sign-up', text: 'Zarejestruj się' }}
        />
      </PrimaryForm>
    </AuthSubLayout>
  )
}
