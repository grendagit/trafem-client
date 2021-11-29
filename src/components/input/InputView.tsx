import React, { forwardRef } from 'react'

import { inputStyle } from './input.styles'
import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { InputBase, InputBaseProps } from '@mui/material'

type Props = InputBaseProps

export const InputView = forwardRef(({ sx, ...rest }: Props, ref) => {
  return <InputBase ref={ref} sx={prepareStyles(inputStyle, sx)} {...rest} />
})
