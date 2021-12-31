import React from 'react'

import { EnhancedOption } from '../..'
import type { TOnOptionClick, TMaterial } from './option-choice-input.types'

import { Stack } from '@mui/material'
import * as R from 'ramda'

type Props = {
  materials: TMaterial[]
  direction?: 'row' | 'column'
  value?: TMaterial['type'] | null
  onOptionClick?: TOnOptionClick
}

export const OptionChoiceInputView = ({
  materials,
  direction = 'row',
  value,
  onOptionClick,
}: Props) => {
  const options = materials.map(({ type, label }) => {
    const handleClick = onOptionClick && R.curry(onOptionClick)(type)

    const inactive = !!value && value !== type

    return (
      <Stack justifyContent="center" alignItems="center" spacing={0} key={type}>
        <EnhancedOption
          label={label}
          type={type}
          innerBoxProps={{ onClick: handleClick }}
          inactive={inactive}
        />
      </Stack>
    )
  })

  return (
    <Stack
      direction={direction}
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {options}
    </Stack>
  )
}
