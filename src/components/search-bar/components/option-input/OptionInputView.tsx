import React from 'react'

import { Option } from '../../../option'
import type { TOnClick, TMaterial } from './option-input.types'
import {
  outerBoxStyle,
  innerBoxStyle,
  paragraphBoxStyle,
} from './option-input.styles'

import { Stack, Box } from '@mui/material'
import * as R from 'ramda'

type Props = {
  materials: TMaterial[]
  value?: TMaterial['type'] | null
  onClick?: TOnClick
}

export const OptionInputView = ({ materials, value, onClick }: Props) => {
  const options = materials.map(({ type, label }) => {
    const handleClick = onClick && R.curry(onClick)(type)

    const inactive = !!value && value !== type

    return (
      <Stack justifyContent="center" alignItems="center" spacing={0} key={type}>
        <Option
          type={type}
          fontSize="medium"
          outerBoxProps={{ sx: outerBoxStyle }}
          innerBoxProps={{ sx: innerBoxStyle, onClick: handleClick }}
          inactive={inactive}
        />
        <Box component="p" sx={paragraphBoxStyle}>
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
