import React from 'react'

import { SliderView } from '../SliderView'
import { sliderStyle } from './primary.styles'
import { prepareStyles } from '../../../helpers/prepare-styles.helper'

import { SliderProps } from '@mui/material'

type Props = SliderProps

export const PrimaryView = ({ sx, ...rest }: Props) => {
  return <SliderView sx={prepareStyles(sliderStyle, sx, false)} {...rest} />
}
