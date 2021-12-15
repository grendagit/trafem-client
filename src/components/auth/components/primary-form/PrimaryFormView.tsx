import React, { Fragment } from 'react'
import type { PropsWithChildren } from 'react'

import { PrimaryAuthenticationInput } from '../primary-input'
import { CustomButton } from '../../../../components/button'
import { PasswordInput } from '../password-input'
import type { TField } from './primary-form.types'
import {
  paperStyle,
  headerBoxStyle,
  titleBoxStyle,
  subtitleBoxStyle,
  inputErrorBoxStyle,
  submitButtonBoxStyle,
  submitButtonStyle,
} from './primary-form.styles'

import { Paper, Box, Stack } from '@mui/material'
import type {
  UseFormReturn,
  FieldValues,
  Path,
  FieldError,
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
      id === 'password' ? PasswordInput : PrimaryAuthenticationInput
    return (
      <Fragment key={id}>
        <ConditionalInput
          id={id}
          placeholder={label}
          {...register(id as Path<T>)}
          inputLabel={label}
          fullWidth
        />
        <Box component="p" sx={inputErrorBoxStyle}>
          {(errors as Partial<Record<string, FieldError>>)[id]?.message}
        </Box>
      </Fragment>
    )
  })

  return (
    <Paper elevation={2} sx={paperStyle}>
      <Box sx={headerBoxStyle}>
        <Box component="h1" sx={titleBoxStyle}>
          {title}
        </Box>
        <Box component="p" sx={subtitleBoxStyle}>
          {subtitle}
        </Box>
      </Box>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <Stack
          direction="column"
          justifyContent="start"
          alignItems="start"
          spacing={1}
        >
          {inputs}
        </Stack>
        <Box sx={submitButtonBoxStyle}>
          <CustomButton type="submit" sx={submitButtonStyle}>
            {submit}
          </CustomButton>
        </Box>
        {children}
      </form>
    </Paper>
  )
}
