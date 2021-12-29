import React from 'react'

import { Auth as AuthSubLayout, PrimaryForm } from '../../../../components/auth'
import { useAuthContext } from '../../../../contexts'
import type { TFormFields } from './sign-in-verification-form.types'

import { useForm, SubmitHandler } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'

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
  const { manageSignInVerification } = useAuthContext()

  const useFormReturn = useForm<TFormFields>({
    resolver: joiResolver(schema),
  })

  const handleValid: SubmitHandler<TFormFields> = async parameters => {
    await manageSignInVerification(parameters)
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
