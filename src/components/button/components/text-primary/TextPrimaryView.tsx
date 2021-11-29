import React from 'react'

import { ButtonView } from '../../ButtonView'
import { buttonStyle } from './text-primary.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { ButtonProps } from '@mui/material'

type Props = Omit<ButtonProps, 'variant'>

export const TextPrimaryView = ({ sx, ...rest }: Props) => {
  return <ButtonView sx={prepareStyles(buttonStyle, sx, false)} {...rest} />
}
