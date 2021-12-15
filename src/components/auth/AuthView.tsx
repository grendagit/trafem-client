import React from 'react'
import type { PropsWithChildren } from 'react'

import {
  boxStyle,
  // imageAsBackgroundStyle
} from './auth.styles'

import { Box } from '@mui/material'

type Props = {}

export const AuthView = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Box sx={boxStyle}>
      {children}
      {/* <img
        src="/backgrounds/authentication.svg"
        style={imageAsBackgroundStyle}
      /> */}
    </Box>
  )
}
