import React from 'react'

import { buttonStyle } from './button.styles'
import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { Button, ButtonProps } from '@mui/material'

type Props = ButtonProps

export const ButtonView = ({ sx, ...rest }: Props) => {
  return <Button sx={prepareStyles(buttonStyle, sx)} {...rest} />
}
