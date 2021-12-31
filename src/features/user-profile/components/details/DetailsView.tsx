import React from 'react'

import { Container } from '../container'
import { FormPrimaryInput } from '../../../../components/input'
import { SubmitButton } from '../../../../components/button'
import { Event } from '../event'
import { camelToSnakeCase } from '../../../../helpers/camel-to-snake-case.helper'
import { updateUserInformation } from './details.controllers'
import type { TEvent } from '../../../../types/event.type'
import type { TFormFields } from './details.types'
import { submitButtonBoxStyle, fixedSizeListBoxStyle } from './details.styles'

import { Grid, Box, Stack } from '@mui/material'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { useForm, SubmitHandler } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import * as Joi from 'joi'

const yourInformationFields = [
  { id: 'givenName', label: 'Imię' },
  {
    id: 'familyName',
    label: 'Nazwisko',
  },
  {
    id: 'custom:aboutMe',
    label: 'O mnie',
    props: { multiline: true, rows: 5 },
  },
]

const schema = Joi.object({
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
  'custom:aboutMe': Joi.string().max(2048).trim().allow('').messages({
    'string.max': 'O mnie maksymalnie może posiadać 2048 znaków',
    'string.trim': 'O mnie nie może zawierać białych znaków przed lub po',
  }),
})

type Props = {
  user: any
  userEvents: TEvent[]
}

export const DetailsView = ({ user, userEvents }: Props) => {
  const { attributes } = user

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TFormFields>({
    resolver: joiResolver(schema),
  })

  /**
   * TODO: separate
   */
  const handleValid: SubmitHandler<TFormFields> = async userAttributes => {
    await updateUserInformation(user, userAttributes)
  }

  const yourInformationInputs = yourInformationFields.map(
    ({ id, label, props }) => (
      <FormPrimaryInput
        id={id}
        placeholder={label}
        {...register(id as keyof TFormFields)}
        errorMessage={errors[id as keyof TFormFields]?.message}
        inputLabel={label}
        defaultValue={attributes[camelToSnakeCase(id)]}
        fullWidth
        key={label}
        {...props}
      />
    )
  )

  return (
    <Grid
      component={Stack}
      spacing={3}
      paddingY={2}
      paddingX={3}
      container
      item
      xs={12}
    >
      <Grid container item xs={6}>
        <Container title="Twoje informacje">
          <Box component="form" onSubmit={handleSubmit(handleValid)}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              {yourInformationInputs}
            </Stack>

            <Box sx={submitButtonBoxStyle}>
              <SubmitButton>Aktualizuj informacje</SubmitButton>
            </Box>
          </Box>
        </Container>
      </Grid>
      <Grid container item xs={6}>
        <Container title="Twoje wydarzenia">
          <Box sx={fixedSizeListBoxStyle}>
            <AutoSizer>
              {({ height, width }) => (
                <FixedSizeList
                  itemData={userEvents}
                  itemCount={userEvents.length}
                  itemSize={125}
                  overscanCount={5}
                  height={height}
                  width={width}
                  className="scrollbar"
                >
                  {Event}
                </FixedSizeList>
              )}
            </AutoSizer>
          </Box>
        </Container>
      </Grid>
    </Grid>
  )
}
