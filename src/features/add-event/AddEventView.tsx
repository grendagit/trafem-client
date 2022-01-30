import React from 'react'
import type { RouteComponentProps } from '@reach/router'

import { SEO } from '../../components/SEO'
import { Form } from '../../components/form'
import { FormPrimaryInput } from '../../components/input'
import { OptionChoiceInput } from '../../components/option'
import { InputBox } from './components/input-box'
import { FromToInputBox } from './components/from-to-input-box'
import { SubmitButton } from '../../components/button'
import { MapWithDraggableMarker } from '../../components/map'
import type { TFormFields } from './add-event.types'
import type { TOptionChoiceInputMaterial } from '../../components/option'
import type { TEventType } from '../../types/event.type'
import {
  paperStyle,
  contentBoxStyle,
  submitButtonBoxStyle,
  eventTypeInputBoxLabelStyle,
  hiddenInput,
} from './add-event.styles'

import { Grid, Paper, Stack, Box } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import JoiDateExtension from '@joi/date'
import * as JoiImport from 'joi'
import tw from 'twin.macro'
const Joi = JoiImport.extend(JoiDateExtension)

const schema = Joi.object({
  title: Joi.string().max(64).trim().required().messages({
    'string.max': 'Tytuł maksymalnie może posiadać 64 znaki',
    'string.trim': 'Tytuł nie może zawierać białych znaków przed lub po',
    'string.empty': 'Tytuł nie może być pusty',
    'any.required': 'Tytuł jest wymagany',
  }),
  description: Joi.string().max(2048).trim().required().messages({
    'string.max': 'Opis maksymalnie może posiadać 2048 znaków',
    'string.trim': 'Opis nie może zawierać białych znaków przed lub po',
    'string.empty': 'Opis nie może być pusty',
    'any.required': 'Opis jest wymagany',
  }),
  participationPriceMin: Joi.number().integer().min(0).allow(null).messages({
    'number.min': 'Wartość jest nieprawidłowa',
    'number.base': 'Wartość jest nieprawidłowa',
    'number.integer': 'Cena uczestnictwa musi być liczbą całkowitą',
  }),
  participationPriceMax: Joi.number()
    .integer()
    .min(0)
    .max(100000)
    .required()
    .when('participationPriceMin', {
      is: Joi.number().required(),
      then: Joi.number().min(Joi.ref('participationPriceMin')),
    })
    .messages({
      'number.min': 'Wartość jest nieprawidłowa',
      'number.max': 'Wartość jest nieprawidłowa',
      'number.base': 'Wartość jest nieprawidłowa',
      'number.integer': 'Cena uczestnictwa musi być liczbą całkowitą',
      'any.required': 'Wartość ta jest wymagana',
    }),
  /**
   * TODO: timezone
   */
  durationFrom: Joi.date().format('DD.MM.YYYY').min().allow(null).messages({
    'date.base': 'Termin rozpoczęcia jest nieprawidłowy',
    'date.format': 'Format daty jest nieprawidłowy',
  }),
  durationTo: Joi.date()
    .format('DD.MM.YYYY')
    .required()
    .when('duratiomFrom', {
      is: Joi.date().required(),
      then: Joi.date().min(Joi.ref('durationFrom')),
    })
    .messages({
      'date.min': 'Termin zakończenia jest nieprawidłowy',
      'date.base': 'Termin zakończenia jest nieprawidłowy',
      'date.format': 'Format daty jest nieprawidłowy',
      'any.required': 'Wartość ta jest wymagana',
    }),
  eventType: Joi.string().valid('trip', 'party').required().messages({
    'string.empty': 'Typ wydarzenia nie może być pusty',
    'any.required': 'Typ wydarzenia jest wymagany',
    'any.only': 'Typ wydarzenia jest nieprawidłowy',
  }),
  lngLat: Joi.array()
    .ordered(
      Joi.number()
        .min(14.1229290098701)
        .max(24.1455979034865)
        .required()
        .messages({
          'number.min': 'Wartość jest nieprawidłowa',
          'number.max': 'Wartość jest nieprawidłowa',
          'number.base': 'Wartość jest nieprawidłowa',
          'any.required': 'Wartość ta jest wymagana',
        }),
      Joi.number()
        .min(49.0020460154192)
        .max(54.8932281999438)
        .required()
        .messages({
          'number.min': 'Wartość jest nieprawidłowa',
          'number.max': 'Wartość jest nieprawidłowa',
          'number.base': 'Wartość jest nieprawidłowa',
          'any.required': 'Wartość ta jest wymagana',
        })
    )
    .required()
    .messages({
      'array.orderedLength': 'Wartość jest nieprawidłowa',
      'array.base': 'Wartość jest nieprawidłowa',
      'any.required': 'Wartość ta jest wymagana',
    }),
})

const eventInformationFields = [
  {
    id: 'title',
    label: 'Tytuł',
  },
  {
    id: 'description',
    label: 'Opis',
    props: {
      multiline: true,
      rows: 5,
    },
  },
]
const eventInformationFromToFields = [
  {
    label: 'Cena uczestnictwa',
    from: {
      id: 'participationPriceMin',
      placeholder: 'Minimalnie',
    },
    to: {
      id: 'participationPriceMax',
      placeholder: 'Maksymalnie',
    },
  },
  {
    label: 'Termin',
    from: {
      id: 'durationFrom',
      placeholder: 'Od',
    },
    to: {
      id: 'durationTo',
      placeholder: 'Do',
    },
  },
]

const optionChoiceInputMaterial = [
  {
    type: 'trip',
    label: 'Wycieczka',
  },
  {
    type: 'party',
    label: 'Impreza',
  },
] as TOptionChoiceInputMaterial[]

type Props = RouteComponentProps

export const AddEventView = (_: Props) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<TFormFields>({
    resolver: joiResolver(schema),
    defaultValues: {
      participationPriceMin: null,
      durationFrom: null,
    },
  })

  const handleEventTypeChange = (eventType: TEventType) => {
    setValue('eventType', eventType, { shouldValidate: true })
  }

  const handleLngLatChange = (lngLat: [number, number]) => {
    setValue('lngLat', lngLat, { shouldValidate: true })
  }

  /**
   * TODO: separate
   */
  const handleValid: SubmitHandler<TFormFields> = async eventInformation => {
    console.log(eventInformation)
  }

  const inputs = eventInformationFields.map(({ id, label, props }) => (
    <FormPrimaryInput
      id={id}
      placeholder={label}
      {...register(id as any)}
      errorMessage={errors[id as 'title' | 'description']?.message}
      inputLabel={label}
      fullWidth
      {...props}
      key={id}
    />
  ))
  const fromToInputs = eventInformationFromToFields.map(
    ({ label, from, to }) => (
      <FromToInputBox
        label={label}
        fromInput={
          <FormPrimaryInput
            id={from.id}
            {...register(from.id as any)}
            errorMessage={
              errors[from.id as 'participationPriceMin' | 'durationFrom']
                ?.message
            }
            placeholder={from.placeholder}
            fullWidth
          />
        }
        toInput={
          <FormPrimaryInput
            id={to.id}
            {...register(to.id as any)}
            errorMessage={
              errors[to.id as 'participationPriceMax' | 'durationTo']?.message
            }
            placeholder={to.placeholder}
            fullWidth
          />
        }
        key={label}
      />
    )
  )

  return (
    <>
      <SEO title="Trafem" description="" />

      <Grid container flex={1} sx={{ ...tw`bg-ghost-white` }}>
        <Paper elevation={2} sx={paperStyle}>
          <Form onSubmit={handleSubmit(handleValid)}>
            <Grid container spacing={2} padding={2}>
              <Grid container item xs={6}>
                <Box sx={contentBoxStyle}>
                  <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    {inputs}
                    {fromToInputs}
                  </Stack>

                  <InputBox
                    label="Typ wydarzenia"
                    labelProps={{ sx: eventTypeInputBoxLabelStyle }}
                  >
                    <OptionChoiceInput
                      materials={optionChoiceInputMaterial}
                      setParentValue={handleEventTypeChange}
                    />
                    <FormPrimaryInput
                      id="eventType"
                      {...register('eventType')}
                      errorMessage={errors['eventType']?.message}
                      inputErrorMessageSx={{ textAlign: 'center' }}
                      fullWidth
                      sx={hiddenInput}
                    />
                  </InputBox>

                  <Box sx={submitButtonBoxStyle}>
                    <SubmitButton>Zamieść wydarzenie</SubmitButton>
                  </Box>
                </Box>
              </Grid>
              <Grid container item xs={6}>
                <InputBox label="Lokalizacja wydarzenia">
                  <MapWithDraggableMarker
                    onMarkerDragEnd={handleLngLatChange}
                  />
                  <FormPrimaryInput
                    id="lngLat"
                    {...register('lngLat')}
                    errorMessage={
                      errors['lngLat'] &&
                      'Lokalizacją wydarzenia musi być Polska'
                    }
                    fullWidth
                    sx={hiddenInput}
                  />
                </InputBox>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Grid>
    </>
  )
}
