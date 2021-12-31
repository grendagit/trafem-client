import React from 'react'
import type { PropsWithChildren } from 'react'

import { FormPrimaryInput } from '../../../input'
import { PasswordInput } from '../password-input'
import { SubmitButton } from '../../../button/components/submit'
import type { TField } from './primary-form.types'
import {
  paperStyle,
  headerBoxStyle,
  titleStyle,
  subtitleStyle,
  submitButtonBoxStyle,
} from './primary-form.styles'

import { Paper, Box, Stack } from '@mui/material'
import type {
  FieldValues,
  UseFormReturn,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form'

type Props<T extends FieldValues> = {
  fields: TField[]
  title: string
  subtitle: string
  submit: string
  useFormReturn: UseFormReturn<T>
  onValid: SubmitHandler<T>
  onInvalid?: SubmitErrorHandler<T>
}

export const PrimaryFormView = <T extends FieldValues>({
  fields,
  title,
  subtitle,
  submit,
  children,
  useFormReturn,
  onValid,
  onInvalid,
}: PropsWithChildren<Props<T>>) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useFormReturn

  const inputs = fields.map(({ id, label }) => {
    const ConditionalInput =
      id === 'password' ? PasswordInput : FormPrimaryInput
    return (
      <ConditionalInput
        id={id}
        placeholder={label}
        {...register(id as any)}
        errorMessage={(errors as any)[id]?.message}
        inputLabel={label}
        fullWidth
        key={id}
      />
    )
  })

  return (
    <Paper elevation={2} sx={paperStyle}>
      <Box sx={headerBoxStyle}>
        <Box component="h1" sx={titleStyle}>
          {title}
        </Box>
        <Box component="p" sx={subtitleStyle}>
          {subtitle}
        </Box>
      </Box>
      <Box component="form" onSubmit={handleSubmit(onValid, onInvalid)}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          {inputs}
        </Stack>
        <Box sx={submitButtonBoxStyle}>
          <SubmitButton>{submit}</SubmitButton>
        </Box>
        {children}
      </Box>
    </Paper>
  )
}
