import React from 'react'

import { ButtonView } from '../../ButtonView'
import { buttonStyle } from './outlined-primary.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { ButtonProps } from '@mui/material'

type Props = Omit<ButtonProps, 'variant'>

export const OutlinedPrimaryView = ({ sx, ...rest }: Props) => {
  return (
    <ButtonView
      variant="outlined"
      sx={prepareStyles(buttonStyle, sx, false)}
      {...rest}
    />
  )
}
