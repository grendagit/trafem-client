import React, { forwardRef } from 'react'

import { InputView } from '../../InputView'
import { inputStyle } from './filled-primary.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { InputBaseProps } from '@mui/material'

type Props = InputBaseProps

export const FilledPrimaryView = forwardRef(({ sx, ...rest }: Props, ref) => {
  return (
    <InputView ref={ref} sx={prepareStyles(inputStyle, sx, false)} {...rest} />
  )
})
