import React from 'react'

import { Option } from '../../../option'
import { capitalizeFirstLetter } from '../../../../helpers/capitalize-first-letter.helper'
import { OnClick, Type } from './option-input.types'
import { boxStyle, innerBoxStyle, outerBoxStyle } from './option-input.styles'

import { Stack, Box } from '@mui/material'
import * as R from 'ramda'

type Props = {
  types: Type[]
  value?: Type['type'] | null
  onClick?: OnClick
}

export const OptionInputView = ({ types, value, onClick }: Props) => {
  const options = types.map(({ type }) => {
    const handleClick = onClick && R.curry(onClick)(type)

    const disabled = !!value && value !== type

    return (
      <Stack spacing={0} justifyContent="center" alignItems="center" key={type}>
        <Option
          type={type}
          fontSize="medium"
          outerBoxProps={{ sx: outerBoxStyle }}
          innerBoxProps={{ sx: innerBoxStyle, onClick: handleClick }}
          disabled={disabled}
        />
        <Box component="span" sx={boxStyle}>
          {capitalizeFirstLetter(type)}
        </Box>
      </Stack>
    )
  })

  return (
    <Stack
      direction="row"
      justifyContent="flext-start"
      alignItems="flex-start"
      spacing={0.5}
    >
      {options}
    </Stack>
  )
}
