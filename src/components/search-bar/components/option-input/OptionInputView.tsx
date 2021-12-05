import React from 'react'

import { Option } from '../../../option'
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
  const options = types.map(({ type, label }) => {
    const handleClick = onClick && R.curry(onClick)(type)

    const inactive = !!value && value !== type

    return (
      <Stack spacing={0} justifyContent="center" alignItems="center" key={type}>
        <Option
          type={type}
          fontSize="medium"
          outerBoxProps={{ sx: outerBoxStyle }}
          innerBoxProps={{ sx: innerBoxStyle, onClick: handleClick }}
          inactive={inactive}
        />
        <Box component="span" sx={boxStyle}>
          {label}
        </Box>
      </Stack>
    )
  })

  return (
    <Stack
      direction="row"
      justifyContent="flext-start"
      alignItems="flex-start"
      spacing={1}
    >
      {options}
    </Stack>
  )
}
