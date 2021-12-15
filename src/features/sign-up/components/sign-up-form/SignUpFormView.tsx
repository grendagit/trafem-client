import React from 'react'
import { navigate } from 'gatsby'

import {
  Auth as AuthSubLayout,
  PrimaryForm,
  PrimaryOption,
} from '../../../../components/auth'
import type { TFormFields } from './sign-up-form.types'

import { useForm, SubmitHandler } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'
import { Auth } from 'aws-amplify'
import * as generator from 'generate-password-browser'

const primaryFormFields = [
  {
    id: 'email',
    label: 'E-mail',
  },
  {
    id: 'givenName',
    label: 'Imię',
  },
  {
    id: 'familyName',
    label: 'Nazwisko',
  },
]

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'E-mail jest nieprawidłowy',
      'string.empty': 'E-mail nie może być pusty',
      'any.required': 'E-mail jest wymagany',
    }),
  givenName: Joi.string().max(256).trim().required().messages({
    'string.max': 'Imię maksymalnie może posiadać 256 znaków',
    'string.trim': 'Imię nie może zawierać białych znaków przed lub po',
    'string.empty': 'Imię nie może być puste',
    'any.required': 'Imię jest wymagane',
  }),
  familyName: Joi.string().max(256).trim().required().messages({
    'string.max': 'Nazwisko maksymalnie może posiadać 256 znaków',
    'string.trim': 'Nazwisko nie może zawierać białych znaków przed lub po',
    'string.empty': 'Nazwisko nie może być puste',
    'any.required': 'Nazwisko jest wymagane',
  }),
})

export const SignUpFormView = () => {
  const useFormReturn = useForm<TFormFields>({
    resolver: joiResolver(schema),
  })

  /**
   * TODO: separate that
   */
  const handleValid: SubmitHandler<TFormFields> = async ({
    email,
    givenName,
    familyName,
  }) => {
    try {
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
      navigate('/auth/sign-in')
    } catch (error) {
      /**
       * TODO: alarm
       */
      console.log(`Error signing up. Reason: ${error}`)
    }
  }

  return (
    <AuthSubLayout>
      <PrimaryForm<TFormFields>
        fields={primaryFormFields}
        title="Rejestracja"
        subtitle="To jest i zawsze będzie darmowe!"
        submit="Zarejestruj się"
        useFormReturn={useFormReturn}
        onValid={handleValid}
      >
        <PrimaryOption
          text="Masz już konto?"
          route={{ path: '/auth/sign-in', text: 'Zaloguj się' }}
        />
      </PrimaryForm>
    </AuthSubLayout>
  )
}