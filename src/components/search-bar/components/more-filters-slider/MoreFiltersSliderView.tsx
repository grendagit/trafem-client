import React, { ComponentProps } from 'react'

import { PrimarySlider } from '../../../slider'
import { Box } from '@mui/material'
import { generateCost } from './more-filters-slider.helpers'
import {
  fromToBoxStyle,
  boxStyle,
  separatorBoxStyle,
} from './more-filters-slider.styles'

type PrimarySliderProps = ComponentProps<typeof PrimarySlider>
type Props = PrimarySliderProps & {
  value: number[]
  onChange: Exclude<PrimarySliderProps['onChange'], undefined>
}

export const MoreFiltersSliderView = ({ value, ...rest }: Props) => {
  return (
    <>
      <PrimarySlider value={value} {...rest} />
      <Box sx={fromToBoxStyle}>
        <Box sx={boxStyle}>{generateCost('minimalnie', value[0])}</Box>
        <Box sx={separatorBoxStyle}>—</Box>
        <Box sx={boxStyle}>{generateCost('maksymalnie', value[1])}</Box>
      </Box>
    </>
  )
}