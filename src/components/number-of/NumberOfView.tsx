import React from 'react'

import { boxStyle } from './number-of.styles'
import { prepareStyles } from '../../helpers/prepare-styles.helper'

import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'

type Props = {
  number: number
} & BoxProps

export const NumberOfView = ({ number, sx, ...rest }: Props) => {
  return (
    <Box sx={prepareStyles(boxStyle, sx)} {...rest}>
      {number}
    </Box>
  )
}
