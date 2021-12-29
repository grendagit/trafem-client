import React from 'react'

import {
  Auth as AuthSubLayout,
  PrimaryForm,
  PrimaryOption,
} from '../../../../components/auth'
import { useAuthContext } from '../../../../contexts'
import type { TFormFields } from './sign-in-form.types'

import { useForm, SubmitHandler } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'

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
  const { manageSignIn } = useAuthContext()

  const useFormReturn = useForm<TFormFields>({
    resolver: joiResolver(schema),
  })

  const handleValid: SubmitHandler<TFormFields> = async userAttributes => {
    await manageSignIn(userAttributes)
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
