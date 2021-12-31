import React from 'react'

import { formStyle } from './form.styles'
import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'

type Props = BoxProps<'form'>

export const FormView = ({ sx, ...rest }: Props) => {
  return <Box component="form" sx={prepareStyles(formStyle, sx)} {...rest} />
}
