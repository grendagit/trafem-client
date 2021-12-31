import React from 'react'
import type { ComponentProps } from 'react'

import { PrimaryView } from '../primary/PrimaryView'
import { Box } from '@mui/material'
import { generateCost } from './enhanced.helpers'
import {
  fromToBoxStyle,
  displayBoxStyle,
  separatorBoxStyle,
} from './enhanced.styles'

type PrimarySliderProps = ComponentProps<typeof PrimaryView>
type Props = PrimarySliderProps & {
  value: number[]
  onChange: NonNullable<PrimarySliderProps['onChange']>
}

export const EnhancedView = ({ value, ...rest }: Props) => {
  return (
    <>
      <PrimaryView value={value} {...rest} />
      <Box sx={fromToBoxStyle}>
        <Box sx={displayBoxStyle}>{generateCost('minimalnie', value[0])}</Box>
        <Box sx={separatorBoxStyle}>—</Box>
        <Box sx={displayBoxStyle}>{generateCost('maksymalnie', value[1])}</Box>
      </Box>
    </>
  )
}
