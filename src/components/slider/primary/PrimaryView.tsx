import React from 'react'
import type { ComponentProps } from 'react'

import { SliderView } from '../SliderView'
import { sliderStyle } from './primary.styles'
import { prepareStyles } from '../../../helpers/prepare-styles.helper'

type Props = ComponentProps<typeof SliderView>

export const PrimaryView = ({ sx, ...rest }: Props) => {
  return <SliderView sx={prepareStyles(sliderStyle, sx, false)} {...rest} />
}
