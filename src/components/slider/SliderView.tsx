import React from 'react'

import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { Slider, SliderProps } from '@mui/material'

type Props = SliderProps

export const SliderView = ({ sx, ...rest }: Props) => {
  return (
    <Slider
      valueLabelDisplay="off"
      size="small"
      sx={prepareStyles(undefined, sx)}
      {...rest}
    />
  )
}
