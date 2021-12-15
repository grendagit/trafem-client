import React from 'react'

import { boxStyle } from './identifier.styles'
import { prepareStyles } from '../../../../helpers/prepare-styles.helper'

import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'

type Props = {
  identifier: string
} & BoxProps

export const IdentifierView = ({ identifier, sx, ...rest }: Props) => {
  return (
    <Box sx={prepareStyles(boxStyle, sx)} {...rest}>
      {identifier}
    </Box>
  )
}
